import { Github, Twitter, Linkedin, Mail, MapPin, Phone, Instagram } from 'lucide-react';
import logo from '../assets/logocode.png';
import { useState, useEffect } from 'react';

export function Footer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: 'https://www.linkedin.com/company/indian-society-for-technical-education-iste-srm-ncr', 
      label: 'LinkedIn', 
      target: '_blank', 
      rel: 'noopener noreferrer' 
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      href: 'mailto:istesrmncr@srmist.edu.in', 
      label: 'Email' 
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: 'https://www.instagram.com/istesrmncr/', 
      label: 'Instagram', 
      target: '_blank', 
      rel: 'noopener noreferrer' 
    },
  ];

  return (
    <footer className="bg-gray-800/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <a href="#" className="text-2xl font-bold text-[#dbe2e7]">
              <img
                src={logo}
                alt="CodeWizard Logo"
                className={windowWidth <= 768 ? 'h-9' : 'h-12'}
                style={{ backgroundColor: 'transparent', opacity: 0.7 }}
              />
            </a>
            <p className="text-gray-400">
              <strong>CodeWizard</strong>, an extraordinary hackathon organized by{' '}
              <a
                href="https://istesrmncr.in"
                className="font-bold text-[#827438] hover:text-[#494636] flex items-center gap-2 inline-flex"
                target="_blank"
                rel="noopener noreferrer"
                style={{ verticalAlign: 'middle', fontFamily: 'Oxanium' }}
              >
                <img
                  src="https://iste-mu.vercel.app/static/media/istelogo.14a99e9575523b15a5dff1cfc0474e11.svg"
                  alt="ISTE Logo"
                  className="h-5 w-5"
                />
                ISTE<span>SRM-NCR</span>
              </a>
              , is set to reshape the boundaries of creativity and technology.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-[#dbe2e7]">About</a></li>
              <li><a href="#sponsors" className="text-gray-400 hover:text-[#dbe2e7]">Sponsors</a></li>
              <li><a href="#judges" className="text-gray-400 hover:text-[#dbe2e7]">Judges</a></li>
              <li><a href="#mentors" className="text-gray-400 hover:text-[#dbe2e7]">Mentors</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-[#dbe2e7]">Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Venue</h4>
            <div className="text-gray-400 space-y-4">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>
                  SRM Institute of Science and Technology
                  <br />
                  NCR Campus, Ghaziabad
                  <br />
                  Meerut Road, Modinagar
                  <br />
                  Uttar Pradesh 201204
                </p>
              </div>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.3260168700413!2d77.538654!3d28.799356999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf51f5aadb701%3A0x39add03eb3926d26!2sSRM%20Institute%20of%20Science%20and%20Technology%20NCR%20Campus!5e0!3m2!1sen!2sin!4v1734777258644!5m2!1sen!2sin"
                  style={{ borderRadius: 15 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SRMIST Location"
                ></iframe>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-[#dbe2e7] transition-colors"
                  aria-label={link.label}
                  target={link.target || '_self'}
                  rel={link.rel || ''}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-0 border-t border-gray-700 text-center text-gray-400">
          <span>&copy; {new Date().getFullYear()} CodeWizard. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
