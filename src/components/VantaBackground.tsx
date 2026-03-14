import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA: any;
  }
}

export function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<any>(null);

  useEffect(() => {
    if (!vantaRef.current || effectRef.current) return;

    // Wait for CDN scripts to load
    const tryInit = () => {
      if (window.VANTA && window.VANTA.WAVES) {
        effectRef.current = window.VANTA.WAVES({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0,
          shininess: 30.0,
          waveHeight: 15.0,
          waveSpeed: 0.7,
          zoom: 0.75,
        });
      } else {
        setTimeout(tryInit, 100);
      }
    };

    tryInit();

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 z-0"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
}
