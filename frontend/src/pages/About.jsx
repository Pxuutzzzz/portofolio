import Lanyard from '../components/Lanyard/Lanyard.jsx';
import Aurora from '../components/Aurora/Aurora.jsx';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

function About() {
  const { language } = useLanguage();

  const translations = {
    ENG: {
      tag: "Available for Internship & Freelance",
      title: "Putri Indah C.",
      bio: "Hello! I'm Putri Indah Cahyani, an 8th-semester Information Technology student with a deep interest in Data Engineering and Web Development. I specialize in building robust data pipelines, full-stack systems using Laravel and Java, and creating user-centric digital solutions. I am committed to continuous learning and architecting technology that solves real-world problems.",
      hardSkills: "Hard Skills",
      softSkills: "Soft Skills",
      eduTitle: "Education History",
      eduTag: "Academic_Journey",
      education: [
        { 
          name: "Universitas 'Aisyiyah Yogyakarta", 
          period: "2022 – Present", 
          degree: "B.Sc. Information Technology – Semester 8", 
          desc: "Pursuing a degree in Information Technology. Actively involved in HIMA ITECH and various campus committee activities.", 
          tags: ["HIMA ITECH", "Semester 8"], 
          status: "In Progress",
          icon: "fa-graduation-cap"
        },
        { 
          name: "SMA Negeri 1 Bukit Kemuning", 
          period: "2019 – 2022", 
          degree: "Senior High School", 
          desc: "Completed high school while actively participating in OSIS (Student Council) and PMR (Youth Red Cross), developing leadership and social awareness skills.", 
          tags: ["OSIS", "PMR"], 
          status: "Completed",
          icon: "fa-school"
        }
      ],
      softSkillsList: [
        { title: "Teamwork", desc: "Able to work collaboratively and effectively in a team", icon: "fa-users" },
        { title: "Leadership", desc: "Experienced in leading teams and organizations", icon: "fa-crown" },
        { title: "Communication", desc: "Communicative and able to articulate ideas clearly", icon: "fa-comments" },
        { title: "Time Management", desc: "Disciplined in managing time and priorities effectively", icon: "fa-clock" },
        { title: "Problem Solving", desc: "Creative in finding solutions to complex challenges", icon: "fa-lightbulb" },
        { title: "Adaptability", desc: "Quick to adapt to new environments and situations", icon: "fa-arrows-rotate" }
      ]
    },
    ID: {
      tag: "Tersedia untuk Magang & Freelance",
      title: "Putri Indah C.",
      bio: "Halo! Saya Putri Indah Cahyani, mahasiswi Teknologi Informasi semester 8 dengan minat mendalam di bidang Data Engineering dan Web Development. Saya berspesialisasi dalam membangun pipa data yang kuat, sistem full-stack menggunakan Laravel dan Java, serta menciptakan solusi digital yang berpusat pada pengguna. Saya berkomitmen untuk terus belajar dan merancang teknologi yang memecahkan masalah dunia nyata.",
      hardSkills: "Keahlian Teknis",
      softSkills: "Keahlian Interpersonal",
      eduTitle: "Riwayat Pendidikan",
      eduTag: "Perjalanan_Akademik",
      education: [
        { 
          name: "Universitas 'Aisyiyah Yogyakarta", 
          period: "2022 – Sekarang", 
          degree: "S1 Teknologi Informasi – Semester 8", 
          desc: "Sedang menempuh pendidikan sarjana Teknologi Informasi. Aktif terlibat dalam HIMA ITECH dan berbagai kegiatan kepanitiaan kampus.", 
          tags: ["HIMA ITECH", "Semester 8"], 
          status: "Sedang Berjalan",
          icon: "fa-graduation-cap"
        },
        { 
          name: "SMA Negeri 1 Bukit Kemuning", 
          period: "2019 – 2022", 
          degree: "Sekolah Menengah Atas", 
          desc: "Menyelesaikan SMA sambil aktif berpartisipasi dalam OSIS dan PMR, mengembangkan keterampilan kepemimpinan dan kesadaran sosial.", 
          tags: ["OSIS", "PMR"], 
          status: "Selesai",
          icon: "fa-school"
        }
      ],
      softSkillsList: [
        { title: "Kerja Tim", desc: "Mampu bekerja secara kolaboratif dan efektif dalam tim", icon: "fa-users" },
        { title: "Kepemimpinan", desc: "Berpengalaman dalam memimpin tim dan organisasi", icon: "fa-crown" },
        { title: "Komunikasi", desc: "Komunikatif dan mampu menyampaikan ide dengan jelas", icon: "fa-comments" },
        { title: "Manajemen Waktu", desc: "Disiplin dalam mengelola waktu dan prioritas secara efektif", icon: "fa-clock" },
        { title: "Pemecahan Masalah", desc: "Kreatif dalam mencari solusi untuk tantangan yang kompleks", icon: "fa-lightbulb" },
        { title: "Adaptabilitas", desc: "Cepat beradaptasi dengan lingkungan dan situasi baru", icon: "fa-arrows-rotate" }
      ]
    }
  };

  const t = translations[language];

  const hardSkills = [
    { name: "Laravel", icon: "fa-brands fa-laravel", color: "#ff2d20" },
    { name: "Java", icon: "fa-brands fa-java", color: "#f8981d" },
    { name: "HTML", icon: "fa-brands fa-html5", color: "#e34f26" },
    { name: "CSS", icon: "fa-brands fa-css3-alt", color: "#1572b6" },
    { name: "JavaScript", icon: "fa-brands fa-js", color: "#f7df1e" },
    { name: "PHP", icon: "fa-brands fa-php", color: "#777bb4" },
    { name: "MySQL", icon: "fas fa-database", color: "#4479a1" },
    { name: "Git", icon: "fa-brands fa-git-alt", color: "#f05032" },
    { name: "Big Data", icon: "fas fa-network-wired", color: "#06b6d4" },
    { name: "PostgreSQL", icon: "fas fa-database", color: "#336791" },
    { name: "Office", icon: "fas fa-file-word", color: "#2b579a" },
    { name: "Data Entry", icon: "fas fa-keyboard", color: "#8e8e8e" },
    { name: "QA", icon: "fas fa-vial", color: "#00af91" }
  ];

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Aurora colorStops={["#0a0104", "#ff007f", "#e0aaff"]} speed={0.5} />
      </div>
      
      <section className="about" id="about" style={{ paddingTop: '120px', paddingBottom: '120px', minHeight: '80vh', position: 'relative', zIndex: 1 }}>
        <div className="container">
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', marginBottom: '100px' }}>
            <div style={{ flex: '1.2', minWidth: '300px' }}>
              <div className="section-header animate-fade">
                <span className="section-tag" style={{ letterSpacing: '4px' }}>{t.tag}</span>
                <h2 className="hero-name" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>{t.title}</h2>
                
                {/* Interesting Bio Container */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  style={{ 
                    background: 'rgba(255, 0, 127, 0.03)', 
                    borderLeft: '4px solid var(--primary)', 
                    padding: '2rem', 
                    borderRadius: '0 20px 20px 0',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '20px 0 40px rgba(255, 0, 127, 0.05)'
                  }}
                >
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                    {language === 'ENG' ? (
                      <>
                        Hello! I'm <span style={{ color: 'white', fontWeight: 'bold' }}>Putri Indah Cahyani</span>, an 8th-semester student with a deep interest in <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Data Engineering</span> and <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>Web Development</span>. 
                        <br/><br/>
                        I specialize in building robust <span style={{ borderBottom: '1px dashed var(--primary)' }}>data pipelines</span>, full-stack systems using <span style={{ color: 'var(--primary)' }}>Laravel</span> and <span style={{ color: 'var(--primary)' }}>Java</span>, and creating user-centric digital solutions.
                      </>
                    ) : (
                      <>
                        Halo! Saya <span style={{ color: 'white', fontWeight: 'bold' }}>Putri Indah Cahyani</span>, mahasiswi semester 8 dengan minat mendalam di bidang <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Data Engineering</span> dan <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>Web Development</span>. 
                        <br/><br/>
                        Saya berspesialisasi dalam membangun <span style={{ borderBottom: '1px dashed var(--primary)' }}>pipa data</span> yang kuat, sistem full-stack menggunakan <span style={{ color: 'var(--primary)' }}>Laravel</span> dan <span style={{ color: 'var(--primary)' }}>Java</span>, serta menciptakan solusi digital yang berpusat pada pengguna.
                      </>
                    )}
                  </p>
                </motion.div>
              </div>
            </div>

            <div style={{ flex: '0.8', minWidth: '300px', display: 'flex', justifyContent: 'center', height: '500px', position: 'relative' }}>
               <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                  <Lanyard position={[0, 0, 18]} gravity={[0, -40, 0]} />
               </div>
            </div>
          </div>

          {/* Academic Journey Section */}
          <div style={{ marginBottom: '100px' }}>
            <div className="section-header" style={{ marginBottom: '3rem' }}>
              <span className="section-tag">{t.eduTag}</span>
              <h2 style={{ fontSize: '2.5rem', color: 'white', fontFamily: 'Orbitron, sans-serif' }}>{t.eduTitle}</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              {t.education.map((edu, i) => (
                <motion.div 
                  key={i} 
                  className="glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ borderColor: 'var(--primary)', scale: 1.02 }}
                  style={{ border: '1px solid rgba(255, 0, 127, 0.1)', padding: '2rem' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255, 0, 127, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', color: 'var(--primary)' }}>
                      <i className={`fas ${edu.icon}`}></i>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--secondary)', fontWeight: 'bold', background: 'rgba(224, 170, 255, 0.1)', padding: '4px 12px', borderRadius: '20px', border: '1px solid rgba(224, 170, 255, 0.2)' }}>{edu.status}</span>
                  </div>
                  <h3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '0.5rem' }}>{edu.name}</h3>
                  <p style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{edu.period}</p>
                  <p style={{ color: 'var(--secondary)', fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>{edu.degree}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>{edu.desc}</p>
                  <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                    {edu.tags.map((tag, j) => (
                      <span key={j} style={{ fontSize: '0.7rem', color: 'var(--text-muted)', border: '1px solid var(--border)', padding: '2px 10px', borderRadius: '4px' }}>{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            {/* Hard Skills */}
            <motion.div 
              className="glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontFamily: 'Orbitron, sans-serif' }}><i className="fas fa-code"></i> {t.hardSkills}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {hardSkills.map((skill, i) => (
                  <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border)', color: 'var(--text-primary)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', transition: 'var(--transition)' }} className="skill-tag">
                    <i className={skill.icon} style={{ color: skill.color }}></i>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div 
              className="glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', fontFamily: 'Orbitron, sans-serif' }}><i className="fas fa-user-gear"></i> {t.softSkills}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                {t.softSkillsList.map((skill, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <i className={`fas ${skill.icon}`} style={{ color: 'var(--secondary)', marginTop: '0.3rem' }}></i>
                    <div>
                      <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '0.2rem' }}>{skill.title}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );
}

export default About;
