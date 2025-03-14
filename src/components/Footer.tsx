import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import logo from "../assests/rompit.png"
const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="font-bold text-2xl mb-4">
            <img src={logo} alt="logo" className='h-20'/>
            </div>
            <p className="text-gray-400 mb-6">
              Innovating the future of gaming and Web3 technologies with creative solutions and technical excellence.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-200">Services</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors duration-200">Team</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/documentation" className="text-gray-400 hover:text-white transition-colors duration-200">Documentation</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors duration-200">Careers</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and announcements.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-rompit w-full"
              />
              <button
                type="submit"
                className="bg-rompit hover:bg-rompit-600 text-white px-4 py-2 rounded-r-md transition-colors duration-200"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ROMPIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
