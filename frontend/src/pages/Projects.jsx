import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Aurora from '../components/Aurora/Aurora.jsx';
import { useLanguage } from '../context/LanguageContext';

const ProjectCard = ({ project, index }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const moveSlide = (direction) => {
    let newSlide = currentSlide + direction;
    if (newSlide < 0) newSlide = project.images.length - 1;
    if (newSlide >= project.images.length) newSlide = 0;
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    if (project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % project.images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [project.images.length]);

  return (
    <motion.div 
      className="glass-card project-card" 
      style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.4)', borderColor: 'var(--primary)' }}
    >
      <div className="project-slider" style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
         <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)', height: '100%' }}>
             {project.images.map((img, i) => (
               <img key={i} src={img} alt={`${project.title} ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             ))}
         </div>
         {project.images.length > 1 && (
           <div className="slider-controls">
               <button className="slide-btn" onClick={(e) => { e.stopPropagation(); moveSlide(-1); }}><i className="fas fa-chevron-left"></i></button>
               <button className="slide-btn" onClick={(e) => { e.stopPropagation(); moveSlide(1); }}><i className="fas fa-chevron-right"></i></button>
           </div>
         )}
         <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '5px' }}>
            {project.images.map((_, i) => (
              <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: currentSlide === i ? 'var(--primary)' : 'rgba(255,255,255,0.3)' }}></div>
            ))}
         </div>
      </div>
      <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: 'bold', fontFamily: "'JetBrains Mono'" }}>{project.tag}</div>
        <h3 className="project-title" style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: 'white' }}>{project.title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.5' }}>{project.description}</p>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: 'auto' }}>
          {project.tech.map((t, i) => (
            <span key={i} style={{ padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '0.65rem', color: 'var(--secondary)' }}>{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

function Projects() {
  const { language } = useLanguage();

  const translations = {
    ENG: {
      tag: "Deployed_Systems",
      title: "Project Modules"
    },
    ID: {
      tag: "Sistem_Tersedia",
      title: "Modul Proyek"
    }
  };

  const t = translations[language];

  const projects = [
    { 
      title: "Patient Finder Game", 
      tag: "01 // JAVA_DESKTOP", 
      images: ["/images/game1.png", "/images/game2.png"], 
      description: language === 'ENG' ? "A Java-based desktop application designed to help medical staff efficiently track and locate patient data." : "Aplikasi desktop berbasis Java yang dirancang untuk membantu staf medis melacak dan menemukan data pasien secara efisien.", 
      tech: ["JAVA", "OOP"] 
    },
    { 
      title: "Library Management Website", 
      tag: "02 // UI_UX_DESIGN", 
      images: ["/images/desain.png"], 
      description: language === 'ENG' ? "A UI/UX design for a library management system featuring a book catalogue and online borrowing interface." : "Desain UI/UX untuk sistem manajemen perpustakaan yang menampilkan katalog buku dan antarmuka peminjaman online.", 
      tech: ["FIGMA", "UI/UX", "PROTOTYPING"] 
    },
    { 
      title: "Medical Records - Laravel", 
      tag: "03 // WEB_APP", 
      images: ["/images/rekamedislaravel1.jpg", "/images/rekamedislaravel2.jpg"], 
      description: language === 'ENG' ? "A web-based medical records information system built with Laravel, covering patient data management." : "Sistem informasi rekam medis berbasis web yang dibangun dengan Laravel, mencakup manajemen data pasien.", 
      tech: ["LARAVEL", "PHP", "MYSQL"] 
    },
    { 
      title: "Health Navigation Website", 
      tag: "04 // WEB_APP", 
      images: ["/images/heathnav.png"], 
      description: language === 'ENG' ? "A digital health navigation platform that helps users find trusted medical information and nearby healthcare facilities." : "Platform navigasi kesehatan digital yang membantu pengguna menemukan informasi medis terpercaya dan fasilitas kesehatan terdekat.", 
      tech: ["LARAVEL", "BOOTSTRAP"] 
    },
    { 
      title: "Fuzzy Logic Project", 
      tag: "05 // RESEARCH_AI", 
      images: ["/images/logikafuzzy.png"], 
      description: language === 'ENG' ? "Implementation of a fuzzy logic-based system for intelligent decision-making in data classification." : "Implementasi sistem berbasis logika fuzzy untuk pengambilan keputusan cerdas dalam klasifikasi data.", 
      tech: ["FUZZY LOGIC", "DATA ANALYSIS"] 
    },
    { 
      title: "Medical Records GUI – Java", 
      tag: "06 // JAVA_DESKTOP", 
      images: ["/images/rekamedisgui1.png", "/images/rekamedisgui2.png"], 
      description: language === 'ENG' ? "A Java-based desktop application with a graphical user interface for managing patient medical records." : "Aplikasi desktop berbasis Java dengan antarmuka grafis untuk mengelola rekam medis pasien.", 
      tech: ["JAVA", "GUI", "OOP"] 
    },
    { 
      title: "TIRS Wellness Tourism", 
      tag: "07 // RESEARCH", 
      images: ["/images/wellnesstourism1.jpg", "/images/wellnesstourism2.png"], 
      description: language === 'ENG' ? "A wellness tourism article exploring Flower Therapy to promote holistic health services." : "Artikel wellness tourism yang mengeksplorasi Terapi Bunga untuk mempromosikan layanan kesehatan holistik.", 
      tech: ["ARTICLE", "WELLNESS", "PKM"] 
    },
    { 
      title: "SPK Saham BBCA – XGBoost", 
      tag: "08 // MACHINE_LEARNING", 
      images: ["/images/spk1.png", "/images/spk2.png", "/images/spk3.png"], 
      description: language === 'ENG' ? "Decision Support System for predicting BBCA stock trends using the XGBoost algorithm." : "Sistem Pendukung Keputusan untuk memprediksi tren saham BBCA menggunakan algoritma XGBoost.", 
      tech: ["XGBOOST", "PREDICTION", "PYTHON"] 
    },
    { 
      title: "Mental Health Risk Prediction", 
      tag: "09 // ML_WEB_PLATFORM", 
      images: ["/images/mh1.png", "/images/mh2.png", "/images/mh3.png", "/images/mh4.png"], 
      description: language === 'ENG' ? "A web-based intelligent system predicting mental health risks using the Random Forest algorithm." : "Sistem cerdas berbasis web yang memprediksi risiko kesehatan mental menggunakan algoritma Random Forest.", 
      tech: ["RANDOM FOREST", "WEB SYSTEM"] 
    },
    { 
      title: "Apache Airflow Pipeline", 
      tag: "10 // DATA_ENGINEERING", 
      images: ["/images/etl1.png", "/images/etl2.png"], 
      description: language === 'ENG' ? "ETL Pipeline Automation analyzing massive data flows with Apache Airflow." : "Otomasi Pipeline ETL yang menganalisis aliran data masif dengan Apache Airflow.", 
      tech: ["APACHE AIRFLOW", "ETL", "TWITTER API"] 
    }
  ];

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Aurora colorStops={["#0a0104", "#ff007f", "#e0aaff"]} speed={0.5} />
      </div>

      <section className="projects" id="projects" style={{ paddingTop: '120px', paddingBottom: '120px', minHeight: '80vh', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="section-header animate-fade">
            <span className="section-tag">{t.tag}</span>
            <h2 className="hero-name" style={{ fontSize: '3rem', marginBottom: '3rem' }}>{t.title}</h2>
          </div>
          <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {projects.map((proj, idx) => <ProjectCard key={idx} index={idx} project={proj} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
