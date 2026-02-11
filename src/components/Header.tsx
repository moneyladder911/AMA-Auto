import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
     const [scrolled, setScrolled] = useState(false);
     const [menuOpen, setMenuOpen] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               setScrolled(window.scrollY > 50);
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     const toggleMenu = () => {
          setMenuOpen(!menuOpen);
     }

     return (
          <header className={`header ${scrolled ? 'scrolled' : ''}`}>
               <div className="container header-content">
                    <a href="/" className="logo">
                         <span className="logo-accent">AMA</span> AUTO
                    </a>

                    <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                         <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                         <a href="#brands" onClick={() => setMenuOpen(false)}>Brands</a>
                         <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
                         <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                    </nav>

                    <div className="header-actions">
                         <a href="tel:+971555555555" className="phone-btn"><Phone size={18} /> Call Us</a>
                         <a href="#booking" className="cta-btn glowing">Book Inspection</a>
                         <button className="menu-toggle" onClick={toggleMenu}>
                              {menuOpen ? <X size={24} /> : <Menu size={24} />}
                         </button>
                    </div>
               </div>
          </header>
     );
};

export default Header;
