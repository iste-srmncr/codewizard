import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logocode.png'
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#amenities', label: 'Amenities' },
    { href: '#sponsors', label: 'Sponsors' },
    { href: '#judges', label: 'Judges' },
    { href: '#mentors', label: 'Mentors' },
    { href: '#team', label: 'Team' },
    { href: '/updates', label: 'Updates' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 overflow-hidden ${
      isScrolled ? 'bg-[#1a1a20]/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`} >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between min-w-0">
        <a href="#" className="text-2xl font-bold text-[#dbe2e7] shrink-0">
  <img src={logo} alt="CodeWizards Logo" className="h-9 lg:h-12" style={{backgroundColor:'transparent'}} />
</a>


          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8" style={{fontWeight:500}}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#dbe2e7] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://unstop.com/o/rI6SB5k?lb=X3zc78BR&utm_medium=Share&utm_source=isteozwv61127&utm_campaign=Online_coding_challenge"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full text-sm whitespace-nowrap transition-colors"
              style={{ border: "1px solid #fff4a3" }}
            >
              Register Now
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-gray-800 rounded-lg p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-[#dbe2e7] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://unstop.com/o/rI6SB5k?lb=X3zc78BR&utm_medium=Share&utm_source=isteozwv61127&utm_campaign=Online_coding_challenge"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full text-sm mt-2 w-full text-center transition-colors"
              style={{ border: "1px solid #fff4a3" }}
            >
              Register Now
            </a>

          </div>
        )}
      </div>
    </nav>
  );
}
