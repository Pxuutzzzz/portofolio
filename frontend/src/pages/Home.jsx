import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Aurora from '../components/Aurora/Aurora.jsx';

function Home() {
  const { language } = useLanguage();

  const translations = {
    ENG: {
      tag: "Available for Internship & Freelance",
      greeting: "Hi, I'm Putri Indah",
      lastName: "Cahyani",
      role: "Information Technology Student",
      quote: '"Passionate in Technology, Innovation, and Problem Solving"',
      tagline: "8th-semester student at Universitas 'Aisyiyah Yogyakarta. Focused on building meaningful technology-based solutions.",
      expertise: "Hands-on experience in Web Development (Laravel, Java) and a deep interest in Data Engineering.",
      btn1: "VIEW_SYSTEMS",
      btn2: "INITIATE_CONTACT",
      contact: "Contact Me",
      stats: [
        { label: "Semester", value: "08" },
        { label: "Tech Stack", value: "10+" },
        { label: "Commitment", value: "100%" }
      ]
    },
    ID: {
      tag: "Tersedia untuk Magang & Freelance",
      greeting: "Hai, Saya Putri Indah",
      lastName: "Cahyani",
      role: "Mahasiswi Teknologi Informasi",
      quote: '"Bersemangat dalam Teknologi, Inovasi, dan Pemecahan Masalah"',
      tagline: "Mahasiswi semester 8 di Universitas 'Aisyiyah Yogyakarta. Berfokus pada pembangunan solusi berbasis teknologi yang bermakna.",
      expertise: "Pengalaman praktis dalam Web Development (Laravel, Java) dan minat mendalam di bidang Data Engineering.",
      btn1: "LIHAT_SISTEM",
      btn2: "HUBUNGI_SAYA",
      contact: "Hubungi Saya",
      stats: [
        { label: "Semester", value: "08" },
        { label: "Tech Stack", value: "10+" },
        { label: "Komitmen", value: "100%" }
      ]
    }
  };

  const t = translations[language];

  const techIcons = [
    { icon: "fa-brands fa-laravel", name: "Laravel" },
    { icon: "fa-brands fa-react", name: "React" },
    { icon: "fa-brands fa-js", name: "JS" },
    { icon: "fa-brands fa-python", name: "Python" },
    { icon: "fa-brands fa-java", name: "Java" }
  ];

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <section className="hero" id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Aurora Background */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <Aurora colorStops={["#ff007f", "#e0aaff", "#ff3399"]} speed={0.5} />
        </div>

        {/* Floating Orbs */}
        <motion.div 
          style={{ position: 'absolute', top: '15%', right: '10%', width: '150px', height: '150px', borderRadius: '50%', background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)', filter: 'blur(30px)', zIndex: 0 }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Floating Interactive Tech Orbs */}
        <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, pointerEvents: 'none', zIndex: 1 }}>
          {techIcons.map((tech, i) => {
            const positions = [
              { left: '10%', top: '15%' },
              { left: '85%', top: '20%' },
              { left: '15%', top: '75%' },
              { left: '80%', top: '80%' },
              { left: '50%', top: '10%' }
            ];
            const pos = positions[i] || { left: '50%', top: '50%' };

            return (
              <motion.div
                key={i}
                drag
                dragMomentum={true}
                whileDrag={{ scale: 1.2 }}
                style={{
                  position: 'absolute',
                  left: pos.left,
                  top: pos.top,
                  width: window.innerWidth < 768 ? '50px' : '65px',
                  height: window.innerWidth < 768 ? '50px' : '65px',
                  background: 'rgba(255, 0, 127, 0.05)',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(255, 0, 127, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'grab',
                  pointerEvents: 'auto',
                  boxShadow: '0 0 25px rgba(255, 0, 127, 0.1)',
                  opacity: 0.9,
                  zIndex: 10
                }}
              animate={{
                y: [0, (i % 2 === 0 ? -25 : 25), 0],
                x: [0, (i % 3 === 0 ? 15 : -15), 0],
                rotate: [0, (i % 2 === 0 ? 10 : -10), 0]
              }}
              transition={{
                duration: 5 + (i % 5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1
              }}
            >
              <i className={tech.icon} style={{ fontSize: '1.5rem', color: 'var(--secondary)', filter: 'drop-shadow(0 0 5px var(--primary-glow))' }}></i>
              
              {/* Subtle Label on Hover */}
              <motion.span 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{ position: 'absolute', bottom: '-20px', color: 'white', fontSize: '0.6rem', fontWeight: 'bold', fontFamily: 'JetBrains Mono', pointerEvents: 'none' }}
              >
                {tech.name}
              </motion.span>
            </motion.div>
            );
          })}
        </div>

        <div className="container mobile-center" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100%', position: 'relative', zIndex: 1 }}>
          <div className="hero-content animate-fade" style={{ flex: '1', minWidth: '300px' }}>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="section-tag" 
              style={{ letterSpacing: '4px', color: 'var(--secondary)', marginBottom: '1.5rem' }}
            >
              {t.tag}
            </motion.span>
            
            <h1 className="hero-name" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: '1', marginBottom: '1.5rem', textShadow: '0 0 20px rgba(255, 0, 127, 0.3)' }}>
              {t.greeting} <br/> {t.lastName}
            </h1>
            
            <div style={{ marginBottom: '3.5rem' }}>
              <p style={{ color: 'var(--primary)', fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.5rem', fontFamily: 'Orbitron, sans-serif', textTransform: 'uppercase', letterSpacing: '2px' }}>
                {t.role}
              </p>
              <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '1.1rem', fontWeight: '500', opacity: 0.9 }}>
                {t.quote}
              </p>
            </div>

            {/* Quick Stats */}
            <div style={{ display: 'flex', gap: '3rem', marginBottom: '3.5rem' }}>
              {t.stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                >
                  <h3 style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '0.3rem', fontFamily: 'Orbitron, sans-serif' }}>{stat.value}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1.5px' }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link to="/projects" className="btn btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: '15px' }}>
                <i className="fas fa-terminal"></i> {t.btn1}
              </Link>
              <Link to="/experience" className="btn btn-secondary" style={{ padding: '1rem 2.5rem', borderRadius: '15px' }}>
                <i className="fas fa-code-branch"></i> {t.btn2}
              </Link>
            </div>
          </div>
          
          {/* Custom Profile Card */}
          <div className="hero-image animate-fade" style={{ flex: '0.8', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '600px', position: 'relative', animationDelay: '0.2s', minWidth: '350px' }}>
            <motion.div
              style={{
                width: '340px',
                height: '540px',
                background: 'linear-gradient(180deg, rgba(48, 2, 21, 0.9) 0%, rgba(10, 1, 4, 0.95) 100%)',
                borderRadius: '40px',
                border: '1px solid rgba(255, 0, 127, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                padding: '25px',
                position: 'relative',
                boxShadow: '0 40px 80px -20px rgba(255, 0, 127, 0.3)',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)'
              }}
              whileHover={{ rotateY: 8, rotateX: -4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              {/* Scanline Effect on Card */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'repeating-linear-gradient(transparent, transparent 2px, rgba(255, 0, 127, 0.02) 3px)', pointerEvents: 'none' }}></div>

              <div style={{ textAlign: 'center', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
                <h3 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '4px', fontFamily: 'Orbitron, sans-serif' }}>Putri Indah C</h3>
                <p style={{ color: 'var(--secondary)', fontSize: '0.75rem', fontWeight: 'bold' }}>{t.role}</p>
              </div>

              <div style={{ flex: '1', width: '100%', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255, 0, 127, 0.1)', marginBottom: '15px', position: 'relative', zIndex: 1 }}>
                <img src="/images/home_profile.jpg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ 
                background: 'rgba(255, 0, 127, 0.05)', 
                borderRadius: '16px', 
                padding: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '1px solid rgba(255, 0, 127, 0.1)',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--primary)' }}>
                     <img src="/images/profile1.jpeg" alt="Small Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ color: 'white', fontSize: '0.7rem', fontWeight: '600' }}>@pxuutzz</p>
                    <p style={{ color: '#ff007f', fontSize: '0.6rem' }}>● Online</p>
                  </div>
                </div>
                <Link to="/contact" style={{ 
                  background: 'rgba(255, 0, 127, 0.2)', 
                  color: 'white', 
                  fontSize: '0.65rem', 
                  padding: '6px 12px', 
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 0, 127, 0.3)',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}>
                  {t.contact}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
