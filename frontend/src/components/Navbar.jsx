import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  const translations = {
    ENG: { home: "Home", about: "About", projects: "Projects", experience: "Experience", contact: "Contact" },
    ID: { home: "Beranda", about: "Tentang", projects: "Proyek", experience: "Pengalaman", contact: "Kontak" }
  };

  const t = translations[language];

  return (
    <nav className={`navbar ${isOpen ? 'nav-open' : ''}`} style={{ background: 'var(--bg-nav)', backdropFilter: 'var(--glass)', padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
      <div className="container nav-container">
        <div className="logo">
          <Link to="/" className="logo-text" onClick={() => setIsOpen(false)}>&lt;PIC/&gt;</Link>
        </div>

        {/* Hamburger Menu Icon */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsOpen(false)}>{t.home}</Link></li>
          <li><Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={() => setIsOpen(false)}>{t.about}</Link></li>
          <li><Link to="/projects" className={`nav-link ${isActive('/projects')}`} onClick={() => setIsOpen(false)}>{t.projects}</Link></li>
          <li><Link to="/experience" className={`nav-link ${isActive('/experience')}`} onClick={() => setIsOpen(false)}>{t.experience}</Link></li>
          <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setIsOpen(false)}>{t.contact}</Link></li>
          <li className="nav-lang">
            <button 
              onClick={() => { toggleLanguage(); setIsOpen(false); }} 
              style={{ 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid var(--border)', 
                color: 'var(--secondary)', 
                padding: '6px 12px', 
                borderRadius: '4px', 
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: '700'
              }}
            >
              {language}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
