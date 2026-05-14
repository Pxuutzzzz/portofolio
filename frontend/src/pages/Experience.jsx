import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Aurora from '../components/Aurora/Aurora.jsx';

function Experience() {
  const { language } = useLanguage();

  const translations = {
    ENG: {
      tag: "Career_Path",
      title: "Timeline",
      galleryTag: "Activity_Gallery",
      experiences: [
        { 
          category: "Competition",
          title: "1st Place Winner – LKTI Munas APSI-PTMA 2026", 
          desc: "National Essay Competition | 15 April 2026", 
          details: "Awarded 1st Place in the National Essay Competition at Munas APSI-PTMA 2026, with the theme 'Accelerating SDGs through Tech Innovation and Creative Strategies Based on Progressive Islamic Values'.", 
          color: "var(--primary)", 
          glow: true 
        },
        { category: "Competition", title: "Participant – Excess 2025", desc: "International Essay Competition | 2025", details: "Participated as a contestant in the international-level essay competition, demonstrating critical thinking and global awareness.", color: "var(--primary)", glow: true },
        { category: "Internship", title: "IT Team Intern – Full Stack Developer", desc: "RS Queen Latifah Yogyakarta | Oct 2024 – Jan 2025", details: "Completed an internship as a Full Stack Developer contributing to IT operations, system development, and digitalization in the healthcare sector.", color: "var(--secondary)" },
        { category: "Competition", title: "Gold Medalist – KMM & PKMM 2024", desc: "Software Application Development Category | 9 October 2024", details: "Awarded the Gold Medal for the project titled 'Sistem Informasi Kesehatan Pengembangan Perangkat Lunak Medical Tourism Berbasis Aplikasi Android di Purwokerto'.", color: "var(--primary)", glow: true },
        { category: "Competition", title: "Participant – GEMASTIK 2024", desc: "National Student Exhibition in ICT | 2024", details: "Competed as a participant in GEMASTIK 2024 in the competitive programming division.", color: "var(--secondary)" },
        { category: "Competition", title: "Programming Team – GEMASTIK 2023", desc: "National Student Exhibition in ICT | 16 July 2023", details: "Participated as a team member in the competitive programming category, utilizing C++ to solve complex algorithmic challenges.", color: "var(--border)" },
        { category: "PKM", title: "PKM (Student Creativity Program)", desc: "Universitas 'Aisyiyah Yogyakarta | 2023 – 2024", details: "Participated in the Student Creativity Program (PKM), developing innovative technology-based projects.", color: "var(--border)" },
        { category: "Committee", title: "Campus Committee", desc: "Universitas 'Aisyiyah Yogyakarta | 2022 – Present", details: "Actively involved in various campus event committees, strengthening organizational skills.", color: "var(--border)" },
        { category: "Organization", title: "HIMA ITECH", desc: "Universitas 'Aisyiyah Yogyakarta | 2022 – 2024", details: "Active member of the Information Technology Student Association, participating in academic events.", color: "var(--border)" },
        { category: "Organization", title: "OSIS & PMR", desc: "SMA Negeri 1 Bukit Kemuning | 2019 – 2022", details: "Developed leadership and teamwork skills in OSIS and Youth Red Cross.", color: "var(--border)" }
      ]
    },
    ID: {
      tag: "Jalur_Karir",
      title: "Riwayat",
      galleryTag: "Galeri_Aktivitas",
      experiences: [
        { 
          category: "Lomba",
          title: "JUARA I – LKTI Munas APSI-PTMA 2026", 
          desc: "Lomba Karya Tulis Ilmiah Nasional | 15 April 2026", 
          details: "Berhasil meraih JUARA I pada Lomba Karya Tulis Ilmiah dalam rangkaian acara Musyawarah Nasional APSI-PTMA 2026 dengan tema 'Akselerasi SDGs melalui Inovasi Teknologi dan Strategi Kreatif Berbasis Nilai Islam Berkemajuan'.", 
          color: "var(--primary)", 
          glow: true 
        },
        { category: "Lomba", title: "Peserta – Excess 2025", desc: "Kompetisi Esai Internasional | 2025", details: "Berpartisipasi sebagai kontestan dalam kompetisi esai tingkat internasional, menunjukkan pemikiran kritis dan kesadaran global.", color: "var(--primary)", glow: true },
        { category: "Magang", title: "Intern Tim IT – Pengembang Full Stack", desc: "RS Queen Latifah Yogyakarta | Okt 2024 – Jan 2025", details: "Menyelesaikan magang sebagai Full Stack Developer yang berkontribusi pada operasi IT, pengembangan sistem, dan digitalisasi di sektor kesehatan.", color: "var(--secondary)" },
        { category: "Lomba", title: "Peraih Medali Emas – KMM & PKMM 2024", desc: "Kategori Pengembangan Aplikasi Perangkat Lunak | 9 Oktober 2024", details: "Dianugerahi Medali Emas untuk proyek berjudul 'Sistem Informasi Kesehatan Pengembangan Perangkat Lunak Medical Tourism Berbasis Aplikasi Android di Purwokerto'.", color: "var(--primary)", glow: true },
        { category: "Lomba", title: "Peserta – GEMASTIK 2024", desc: "Pagelaran Mahasiswa Nasional Bidang TIK | 2024", details: "Berkompetisi sebagai peserta dalam GEMASTIK 2024 di divisi pemrograman kompetitif.", color: "var(--secondary)" },
        { category: "Lomba", title: "Tim Pemrograman – GEMASTIK 2023", desc: "Pagelaran Mahasiswa Nasional Bidang TIK | 16 Juli 2023", details: "Berpartisipasi sebagai anggota tim dalam kategori pemrograman kompetitif, menggunakan C++ untuk menyelesaikan tantangan algoritma yang kompleks.", color: "var(--border)" },
        { category: "PKM", title: "PKM (Program Kreativitas Mahasiswa)", desc: "Universitas 'Aisyiyah Yogyakarta | 2023 – 2024", details: "Berpartisipasi dalam Program Kreativitas Mahasiswa (PKM), mengembangkan proyek berbasis teknologi yang inovatif.", color: "var(--border)" },
        { category: "Kepanitiaan", title: "Panitia Kampus", desc: "Universitas 'Aisyiyah Yogyakarta | 2022 – Sekarang", details: "Aktif terlibat dalam berbagai kepanitiaan acara kampus, memperkuat keterampilan organisasi.", color: "var(--border)" },
        { category: "Organisasi", title: "HIMA ITECH", desc: "Universitas 'Aisyiyah Yogyakarta | 2022 – 2024", details: "Anggota aktif Himpunan Mahasiswa Teknologi Informasi, berpartisipasi dalam acara akademik.", color: "var(--border)" },
        { category: "Organisasi", title: "OSIS & PMR", desc: "SMA Negeri 1 Bukit Kemuning | 2019 – 2022", details: "Mengembangkan keterampilan kepemimpinan dan kerja tim di OSIS dan Palang Merah Remaja.", color: "var(--border)" }
      ]
    }
  };

  const t = translations[language];

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Aurora colorStops={["#0a0104", "#ff007f", "#e0aaff"]} speed={0.5} />
      </div>

      <section className="experience" id="experience" style={{ paddingTop: '120px', paddingBottom: '120px', minHeight: '80vh', position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header animate-fade">
            <span className="section-tag">{t.tag}</span>
            <h2 className="hero-name" style={{ fontSize: '3rem', marginBottom: '3rem' }}>{t.title}</h2>
            <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--border)' }}>
              {/* Animated Timeline Line Overlay */}
              <motion.div 
                style={{ position: 'absolute', left: '-2px', top: 0, width: '2px', background: 'linear-gradient(to bottom, var(--primary), var(--secondary))', height: '100%', originY: 0 }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {t.experiences.map((exp, idx) => (
                <motion.div 
                  key={idx} 
                  className="glass-card" 
                  style={{ marginBottom: '2.5rem', position: 'relative', border: '1px solid rgba(255, 0, 127, 0.1)', overflow: 'hidden' }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ x: 10, borderColor: 'var(--primary)', boxShadow: '0 10px 30px rgba(255, 0, 127, 0.2)' }}
                >
                    {/* Pulsing Dot */}
                    <div style={{ position: 'absolute', left: '-2.6rem', top: '1.5rem', width: '1.2rem', height: '1.2rem', background: exp.color, borderRadius: '50%', zIndex: 2 }}>
                       <motion.div 
                         style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', background: exp.color }}
                         animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                         transition={{ duration: 2, repeat: Infinity }}
                       />
                    </div>

                    <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                      <span style={{ 
                        fontSize: '0.6rem', 
                        fontWeight: '800', 
                        textTransform: 'uppercase', 
                        letterSpacing: '1px',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '20px',
                        background: 'rgba(255, 0, 127, 0.1)',
                        color: 'var(--primary)',
                        border: '1px solid rgba(255, 0, 127, 0.2)',
                        backdropFilter: 'blur(5px)'
                      }}>
                        {exp.category}
                      </span>
                    </div>

                    <h4 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '0.4rem', fontFamily: 'Orbitron, sans-serif' }}>{exp.title}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--secondary)', marginBottom: '0.8rem', fontWeight: '600' }}>{exp.desc}</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{exp.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Infinite Scrolling Collage Banner */}
        <div style={{ marginTop: '5rem', width: '100%', overflow: 'hidden', background: 'rgba(255, 0, 127, 0.03)', padding: '3rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', position: 'relative' }}>
          <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <span className="section-tag">{t.galleryTag}</span>
          </div>
          <motion.div 
            style={{ display: 'flex', width: '200%' }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[1, 2, 3, 4].map((i) => (
              <img key={i} src="/images/activity_collage.png" alt="Activity Collage" style={{ height: '300px', objectFit: 'cover', margin: '0 15px', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }} />
            ))}
          </motion.div>
          {/* Scanline Effect on Banner */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'repeating-linear-gradient(transparent, transparent 2px, rgba(255, 0, 127, 0.05) 3px)', pointerEvents: 'none' }}></div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
