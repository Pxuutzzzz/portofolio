import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Navbar() {
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  const translations = {
    ENG: { home: "Home", about: "About", projects: "Projects", experience: "Experience", contact: "Contact" },
    ID: { home: "Beranda", about: "Tentang", projects: "Proyek", experience: "Pengalaman", contact: "Kontak" }
  };

  const t = translations[language];

  return (
    <nav className="navbar" style={{ background: 'var(--bg-nav)', backdropFilter: 'var(--glass)', padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
      <div className="container nav-container">
        <div className="logo">
          <Link to="/" className="logo-text">&lt;PIC/&gt;</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className={`nav-link ${isActive('/')}`}>{t.home}</Link></li>
          <li><Link to="/about" className={`nav-link ${isActive('/about')}`}>{t.about}</Link></li>
          <li><Link to="/projects" className={`nav-link ${isActive('/projects')}`}>{t.projects}</Link></li>
          <li><Link to="/experience" className={`nav-link ${isActive('/experience')}`}>{t.experience}</Link></li>
          <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`}>{t.contact}</Link></li>
          <li>
            <button 
              onClick={toggleLanguage} 
              style={{ 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid var(--border)', 
                color: 'var(--secondary)', 
                padding: '4px 8px', 
                borderRadius: '4px', 
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: '700',
                marginLeft: '10px'
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
