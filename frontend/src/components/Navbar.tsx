import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assests/rompit.png'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        isMenuOpen &&
        !target.closest('#mobile-menu') &&
        !target.closest('#menu-trigger')
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Benefits', href: '/benefits' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md py-3' : 'py-5'
      } bg-white dark:bg-black`}
    >
      <div className="max-container flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="font-bold text-xl md:text-2xl">
            <img src={logo} alt="logo" className="h-20" />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
              <Link
                to={link.href}
                className="text-lg font-medium relative hover:text-rompit transition-colors duration-200 py-2"
                onClick={handleNavLinkClick}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rompit scale-x-0 transition-transform duration-200 ease-out origin-left hover:scale-x-100" />
              </Link>
            </li>
            
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              to="#"
              className="bg-rompit text-white px-4 py-2 rounded-md font-medium hover:bg-rompit-600 transition-colors duration-200 focus-ring hover-glow"
            >
              Join Discord
            </Link>
          </div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            id="menu-trigger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-muted transition-colors duration-200 focus-ring"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`fixed inset-0 top-[68px] bg-white dark:bg-black z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="h-full flex flex-col p-6">
            <ul className="space-y-4 my-8">
              {navLinks.map((link) => (
                <li key={link.name} className="border-b border-border pb-2">
                  <Link
                    to={link.href}
                    className="flex w-full py-2 text-xl font-medium hover:text-rompit transition-colors duration-200"
                    onClick={handleNavLinkClick}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center bg-rompit text-white px-4 py-3 rounded-md font-medium hover:bg-rompit-600 transition-colors duration-200 focus-ring hover-glow"
              >
                Join Discord
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;