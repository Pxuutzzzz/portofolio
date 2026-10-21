// ===== PORTFOLIO TRANSLATIONS (EN & ID) =====
const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      skills: "Skills",
      certifications: "Certifications",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact"
    },

    // Hero Section
    hero: {
      badge: '<i class="fas fa-sparkles"></i> <span>Fresh Graduate · Available for Opportunities</span>',
      greeting: 'Hi, I\'m <span class="name-highlight">Putri Indah</span><br />Cahyani <span class="wave">👋</span>',
      status: '<i class="fas fa-user-graduate"></i> Fresh Graduate in Information Technology',
      tagline: '"Information Technology Graduate passionate about Web Development, Machine Learning, Data Engineering, and Data Processing"',
      btn_portfolio: '<i class="fas fa-eye"></i> View Portfolio',
      btn_contact: '<i class="fas fa-paper-plane"></i> Contact Me',
      btn_hire: '<i class="fas fa-envelope"></i> Hire Me',
      stat_gpa: "GPA / 4.00",
      stat_skills: "Tech Skills",
      stat_projects: "Projects",
      card_verified: '<i class="fas fa-check-circle"></i> VERIFIED',
      card_role: "S1 Information Technology",
      card_status: '<span class="pulse-dot graduated"></span> Graduated',
      scroll: "Scroll"
    },

    // About Section
    about: {
      tag: "About Me",
      title: "Get to Know Me",
      p1: 'Hello! I\'m <strong>Putri Indah Cahyani</strong>, a Fresh Graduate in <strong>Information Technology</strong> from <strong>Universitas \'Aisyiyah Yogyakarta</strong> with a GPA of <strong>3.80 / 4.00</strong>.',
      p2: 'I have comprehensive experience in <strong>web development, data processing, machine learning, and data engineering</strong>. Skilled in <strong>Laravel, PHP, Python, MySQL, PostgreSQL, Excel, and Google Sheets</strong>, with proven hands-on experience in <strong>Quality Assurance (QA), data validation, documentation, administrative support, Tracer Study, and accreditation</strong>.',
      p3: 'Detail-oriented, adaptive, and proficient in problem-solving, communication, and both independent and team-based work.',
      highlight_edu_sub: "S1 Information Technology | GPA: 3.80 / 4.00 (2022 – 2026)",
      highlight_cert_title: "Certified Business Intelligence Analyst",
      highlight_cert_sub: "BNSP – LSP Digital (2026 – 2029)"
    },

    // Education Section
    education: {
      tag: "Education History",
      title: "Academic Journey",
      sma_sub: "Science",
      sma_desc: "Completed high school majoring in Science while actively participating in OSIS (Student Council) and PMR (Youth Red Cross), developing leadership, social awareness, and teamwork skills.",
      univ_badge: '<i class="fas fa-check-circle" style="color:#16a34a;"></i> Graduated · GPA 3.80',
      univ_sub: "S1 Information Technology | GPA: 3.80 / 4.00",
      univ_desc: "Graduated with high honors (GPA 3.80/4.00). Actively focused on Web Development, Machine Learning, Data Engineering, and contributed significantly to the Tracer Study & Accreditation Team as well as HIMA ITECH."
    },

    // Skills Section
    skills: {
      tag: "Expertise",
      title: "Skills & Abilities",
      hard_heading: "Technical & Hard Skills",
      soft_heading: "Professional Soft Skills",
      team_title: "Teamwork & Collaboration",
      team_desc: "Effective in cross-functional team collaboration, synchronization, and peer review.",
      data_title: "Data Validation & Detail",
      data_desc: "Meticulous precision in data auditing, tracer study monitoring, and document archiving.",
      comm_title: "Communication",
      comm_desc: "Clear, articulate communication with alumni, stakeholders, and multidisciplinary teams.",
      time_title: "Time Management",
      time_desc: "Disciplined prioritization to meet demanding project and accreditation deadlines.",
      prob_title: "Problem Solving",
      prob_desc: "Analytical thinking to diagnose system bugs, optimize workflows, and develop ML pipelines.",
      adapt_title: "Adaptability",
      adapt_desc: "Fast learner quick to adopt new frameworks, architectures, and emerging technologies."
    },

    // Certifications Section
    cert: {
      tag: "Credentials",
      title: "Certifications & Training",
      badge_certified: '<i class="fas fa-check-circle"></i> Certified',
      badge_training: '<i class="fas fa-award"></i> Intensive Training',
      c1_desc: "Certified national professional competency in Business Intelligence, data analytics, dimensional modeling, KPI dashboards, and business insights generation.",
      c2_desc: "Comprehensive training in data warehouse design, ETL workflows, data visualization, business reporting, and practical analytics problem-solving."
    },

    // Projects Section
    projects: {
      tag: "Portfolio",
      title: "My Projects",
      subtitle: "Showcase of web applications, machine learning systems, data engineering pipelines, and health tech solutions",
      filter_all: "All Projects (18)",
      filter_web: "Web Development",
      filter_ml: "Machine Learning & AI",
      filter_data: "Data Engineering & Analytics",
      filter_other: "Other Applications",
      btn_detail: '<i class="fas fa-external-link-alt"></i> View Details',
      btn_github: '<i class="fab fa-github"></i> GitHub',
      btn_modal_github: '<i class="fab fa-github"></i> View Repository on GitHub',

      // Descriptions for Project Cards
      mbg_desc: "A full-stack web application for real-time monitoring of Free Nutritional Meal (MBG) distribution, equipped with courier GPS tracking via WebSocket, nutrition menu management, financial reports, and a public dashboard based on Laravel & Vite.",
      nexora_desc: "A dbt-based e-commerce data analytics platform with an end-to-end transformation pipeline, including staging layer, intermediate models for order & cart item aggregation, and ready-to-use marts for business reporting built on modular SQL with automatic schema validation.",
      misoa_desc: "A modern culinary product digital catalog website for 'Misoa Mamak' featuring interactive image sliders, product category filters, detail modals, and seamless direct WhatsApp ordering integration.",
      mh_desc: "A web-based mental health risk prediction application built with Laravel and Python Flask. Implements the Random Forest algorithm with full data preprocessing pipeline to identify risk levels.",
      airflow_desc: "Automated end-to-end ETL pipeline orchestration using Apache Airflow and Docker to extract, preprocess, and load social media X data for mental health text analytics.",
      bbca_desc: "Decision Support System (SPK) for predicting BBCA stock price movements using the XGBoost algorithm, featuring automated feature engineering and financial trend evaluation.",
      tracer_desc: "Comprehensive database and analytics system supporting Tracer Study data collection, survey response validation, and data preparation for LAMINFOKOM & GA study program accreditation.",
      obesitas_desc: "Machine learning model predicting obesity levels based on eating habits and physical conditions, comparing multiple algorithms including Random Forest, SVM, and Neural Networks.",
      stroke_desc: "Medical risk prediction system classifying stroke probability from patient clinical records and lifestyle metrics using scikit-learn classification pipelines.",
      typhoid_desc: "Diagnostic decision support tool predicting typhoid fever infection probability from clinical laboratory test features and patient symptom records.",
      ikn_desc: "Natural Language Processing (NLP) pipeline analyzing public sentiment towards the Nusantara Capital City (IKN) on social media, featuring text normalization and sentiment polarity modeling.",
      healthnav_desc: "Award-winning Android medical tourism digital guide connecting users with accredited healthcare providers, regional tourist destinations, and real-time navigation in Purwokerto.",
      rekamedis_laravel_desc: "Comprehensive hospital electronic medical records management system built with Laravel, featuring role-based access control, patient admissions, doctor diagnostics, and clinical history reports.",
      rekamedis_gui_desc: "Desktop medical records GUI application built in Java with Swing and MySQL, featuring patient registration, appointment scheduling, and diagnosis logging using OOP principles.",
      game_desc: "Desktop 2D educational patient tracker game developed in Java with Java Swing and OOP architecture, simulating clinical patient search workflows.",
      wellness_desc: "PKM research article published on Kompasiana exploring flower therapy (Terapi Bunga) and technology-integrated wellness tourism in Indonesia.",
      perpus_desc: "Complete UI/UX design mockup and interactive prototype for a modern academic library management platform created using Figma.",
      fuzzy_desc: "Computational implementation of fuzzy inference systems (Mamdani and Sugeno methods) for multi-criteria automated decision support under uncertainty."
    },

    // Experience Section
    experience: {
      tag: "Experience",
      title: "Organizations & Activities",
      tracer_title: "Surveyor Tracer Study & Accreditation Team",
      tracer_sub: "Program Studi Teknologi Informasi – Universitas 'Aisyiyah Yogyakarta",
      tracer_b1: "Collect data and contact alumni of the Information Technology Study Program to complete the Tracer Study questionnaire.",
      tracer_b2: "Communicate and follow up with alumni regarding questionnaire completion.",
      tracer_b3: "Manage, summarize, and monitor Tracer Study data using Microsoft Excel.",
      tracer_b4: "Check and validate data to ensure completeness and accuracy of information.",
      tracer_b5: "Archive and manage supporting documents for the Tracer Study and accreditation.",
      tracer_b6: "Involved in data and document preparation for LAMINFOKOM accreditation and GA Accreditation of the Information Technology Study Program.",
      tracer_b7: "Coordinate with the team in collecting, checking, and compiling data and documents.",

      apsi_title: "First Place – APSI-PTMA Scientific Writing Competition",
      apsi_sub: "Musyawarah Nasional APSI-PTMA 2026",
      apsi_desc: "Awarded <strong>1st Place (Juara I)</strong> in the National Scientific Writing Competition (Lomba Karya Tulis Ilmiah) at the APSI-PTMA National Conference 2026.",

      queen_title: "Full Stack Developer Internship – IT Team",
      queen_sub: "Queen Latifah Hospital Yogyakarta",
      queen_b1: "Developed and maintained an internal web system to support hospital operations and patient data management.",
      queen_b2: "Contributed to the digitalization of healthcare workflows using Laravel and MySQL.",
      queen_b3: "Conducted quality assurance (QA) testing and data input into the medical information system.",
      queen_b4: "Coordinated with the cross-functional team in the development and maintenance of the hospital information system.",

      excess_title: "Participant – Excess 2025",
      excess_sub: "International Essay Competition",
      excess_desc: "Participated as a delegate in the Excess 2025 international-level essay competition, demonstrating critical analytical thinking, research, and global technological perspectives.",

      gold_title: "Gold Medal – KMM & PKM 2024",
      gold_sub: "Software Application Development Category",
      gold_desc: "Awarded the <strong>Gold Medal</strong> for the project titled <em>\"Sistem Informasi Kesehatan Pengembangan Perangkat Lunak Medical Tourism Berbasis Aplikasi Android di Purwokerto\"</em>.",

      gemastik24_title: "Participant – GEMASTIK 2024",
      gemastik24_sub: "National Student Exhibition in ICT (Competitive Programming)",
      gemastik24_desc: "Competed as a contestant in the National Student Exhibition in Information and Communication Technology (GEMASTIK XVII 2024) in the competitive programming division.",

      gemastik23_title: "Programming Team – GEMASTIK 2023",
      gemastik23_sub: "National Student Exhibition in ICT (Programming Category)",
      gemastik23_desc: "Competed as a team member in the programming category of GEMASTIK XVI 2023, solving complex algorithmic problems using C++.",

      pkm_title: "PKM (Student Creativity Program)",
      pkm_sub: "Universitas 'Aisyiyah Yogyakarta",
      pkm_desc: "Actively involved in the Student Creativity Program (PKM), conceptualizing and implementing technology-driven solutions for social and community development.",

      panitia_title: "Campus Committee Member",
      panitia_sub: "Universitas 'Aisyiyah Yogyakarta",
      panitia_desc: "Served in various campus event committees, organizing academic seminars, technology workshops, and institutional student activities.",

      hima_title: "Active Member – HIMA ITECH",
      hima_sub: "Information Technology Student Association – Universitas 'Aisyiyah Yogyakarta",
      hima_desc: "Active member contributing to student governance, technology seminars, collaborative study sessions, and departmental community initiatives.",

      osis_title: "OSIS & PMR Member",
      osis_sub: "SMA Negeri 1 Bukit Kemuning",
      osis_desc: "Active in Student Council (OSIS) and Youth Red Cross (PMR), honing leadership, public speaking, event coordination, and social responsibility."
    },

    // Contact Section
    contact: {
      tag: "Get In Touch",
      title: "Contact Me",
      subtitle: "Have a question or want to collaborate? Feel free to reach out!",
      lbl_name: '<i class="fas fa-user"></i> Full Name',
      lbl_email: '<i class="fas fa-envelope"></i> Email',
      lbl_subject: '<i class="fas fa-tag"></i> Subject',
      lbl_message: '<i class="fas fa-comment"></i> Message',
      placeholder_name: "Enter your full name",
      placeholder_subject: "Topic of your message",
      placeholder_message: "Write your message here...",
      btn_send: '<i class="fas fa-paper-plane"></i> Send Message',
      btn_sending: '<i class="fas fa-spinner fa-spin"></i> Sending Message...',
      btn_sent: '<i class="fas fa-check"></i> Message Sent!',
      msg_success: '<i class="fas fa-check-circle"></i> Message sent successfully to <strong>putriindah2343@gmail.com</strong>! Thank you 🌸',
      msg_error: '<i class="fas fa-exclamation-triangle"></i> Network issue. <a href="{mailtoUrl}" target="_blank">Click here to send directly via Email App / Gmail</a>'
    },

    // Footer Section
    footer: {
      slogan: "Passionate in Technology, Innovation, and Problem Solving",
      nav_title: "Navigation",
      skills_title: "Core Skills",
      copyright: "&copy; 2026 Putri Indah Cahyani. All rights reserved. Fresh Graduate in Information Technology."
    }
  },

  id: {
    // Navigation
    nav: {
      home: "Beranda",
      about: "Tentang",
      education: "Pendidikan",
      skills: "Keahlian",
      certifications: "Sertifikasi",
      projects: "Proyek",
      experience: "Pengalaman",
      contact: "Kontak"
    },

    // Hero Section
    hero: {
      badge: '<i class="fas fa-sparkles"></i> <span>Fresh Graduate · Terbuka untuk Peluang Kerja</span>',
      greeting: 'Halo, Saya <span class="name-highlight">Putri Indah</span><br />Cahyani <span class="wave">👋</span>',
      status: '<i class="fas fa-user-graduate"></i> Sarjana Fresh Graduate Teknologi Informasi',
      tagline: '"Lulusan Sarjana Teknologi Informasi yang berfokus pada Web Development, Machine Learning, Data Engineering, dan Pengolahan Data"',
      btn_portfolio: '<i class="fas fa-eye"></i> Lihat Portofolio',
      btn_contact: '<i class="fas fa-paper-plane"></i> Hubungi Saya',
      btn_hire: '<i class="fas fa-envelope"></i> Rekrut Saya',
      stat_gpa: "IPK / 4.00",
      stat_skills: "Keahlian Teknis",
      stat_projects: "Proyek",
      card_verified: '<i class="fas fa-check-circle"></i> TERVERIFIKASI',
      card_role: "S1 Teknologi Informasi",
      card_status: '<span class="pulse-dot graduated"></span> Lulus (Alumni)',
      scroll: "Gulir"
    },

    // About Section
    about: {
      tag: "Tentang Saya",
      title: "Kenali Saya Lebih Dekat",
      p1: 'Halo! Saya <strong>Putri Indah Cahyani</strong>, seorang Fresh Graduate <strong>Sarjana Teknologi Informasi</strong> dari <strong>Universitas \'Aisyiyah Yogyakarta</strong> dengan IPK <strong>3.80 / 4.00</strong>.',
      p2: 'Saya memiliki pengalaman komprehensif di bidang <strong>pengembangan web, pengolahan data, machine learning, dan data engineering</strong>. Terampil dalam <strong>Laravel, PHP, Python, MySQL, PostgreSQL, Excel, dan Google Sheets</strong>, dengan pengalaman nyata dalam <strong>Quality Assurance (QA), validasi data, dokumentasi, administrasi, Tracer Study, dan akreditasi</strong>.',
      p3: 'Berorientasi pada detail, adaptif, serta memiliki kemampuan pemecahan masalah dan komunikasi yang kuat, siap berkontribusi secara mandiri maupun dalam tim kolaboratif.',
      highlight_edu_sub: "S1 Teknologi Informasi | IPK: 3.80 / 4.00 (2022 – 2026)",
      highlight_cert_title: "Certified Business Intelligence Analyst",
      highlight_cert_sub: "BNSP – LSP Digital (2026 – 2029)"
    },

    // Education Section
    education: {
      tag: "Riwayat Pendidikan",
      title: "Perjalanan Akademik",
      sma_sub: "MIPA (Ilmu Pengetahuan Alam)",
      sma_desc: "Menyelesaikan sekolah menengah atas jurusan MIPA sambil aktif berpartisipasi dalam OSIS dan PMR (Palang Merah Remaja), mengasah keterampilan kepemimpinan, kepedulian sosial, dan kerja sama tim.",
      univ_badge: '<i class="fas fa-check-circle" style="color:#16a34a;"></i> Lulus · IPK 3.80',
      univ_sub: "S1 Teknologi Informasi | IPK: 3.80 / 4.00",
      univ_desc: "Lulus dengan predikat sangat memuaskan (IPK 3.80/4.00). Berfokus pada Web Development, Machine Learning, Data Engineering, serta berkontribusi signifikan pada Tim Tracer Study & Akreditasi Program Studi dan HIMA ITECH."
    },

    // Skills Section
    skills: {
      tag: "Keahlian",
      title: "Keahlian & Kemampuan",
      hard_heading: "Keahlian Teknis & Hard Skills",
      soft_heading: "Kemampuan Interpersonal (Soft Skills)",
      team_title: "Kerja Tim & Kolaborasi",
      team_desc: "Mampu bekerja secara efektif dalam kolaborasi tim lintas fungsi, sinkronisasi kerja, dan evaluasi berkala.",
      data_title: "Validasi Data & Ketelitian",
      data_desc: "Ketelitian tinggi dalam audit data, monitoring tracer study, dan pengarsipan dokumen akreditasi.",
      comm_title: "Komunikasi Efektif",
      comm_desc: "Komunikasi yang lugas, terstruktur, dan persuasif dengan alumni, pimpinan prodi, dan tim kerja.",
      time_title: "Manajemen Waktu",
      time_desc: "Disiplin dalam penentuan prioritas tugas untuk memenuhi tenggat waktu proyek dan target kerja.",
      prob_title: "Pemecahan Masalah",
      prob_desc: "Pola pikir analitis dalam menelusuri bug sistem, efisiensi alur kerja, dan perancangan pipeline ML.",
      adapt_title: "Adaptabilitas Cepat",
      adapt_desc: "Cepat belajar dan tanggap dalam mengadopsi framework baru, arsitektur data, dan teknologi terkini."
    },

    // Certifications Section
    cert: {
      tag: "Kredensial",
      title: "Sertifikasi & Pelatihan",
      badge_certified: '<i class="fas fa-check-circle"></i> Tersertifikasi',
      badge_training: '<i class="fas fa-award"></i> Pelatihan Intensif',
      c1_desc: "Sertifikasi kompetensi kerja nasional bidang Business Intelligence, analitik data, pemodelan dimensional, dashboard KPI, dan penyusunan insight bisnis.",
      c2_desc: "Pelatihan komprehensif dalam desain data warehouse, alur kerja ETL, visualisasi data, pelaporan bisnis, dan penyelesaian studi kasus analitik praktis."
    },

    // Projects Section
    projects: {
      tag: "Portofolio",
      title: "Koleksi Proyek Saya",
      subtitle: "Kumpulan aplikasi web, sistem machine learning, pipeline data engineering, dan solusi teknologi kesehatan",
      filter_all: "Semua Proyek (18)",
      filter_web: "Pengembangan Web",
      filter_ml: "Machine Learning & AI",
      filter_data: "Data Engineering & Analitik",
      filter_other: "Aplikasi Lainnya",
      btn_detail: '<i class="fas fa-external-link-alt"></i> Lihat Detail',
      btn_github: '<i class="fab fa-github"></i> GitHub',
      btn_modal_github: '<i class="fab fa-github"></i> Buka Repository di GitHub',

      // Descriptions for Project Cards
      mbg_desc: "Aplikasi web full-stack untuk pemantauan real-time distribusi Makan Bergizi Gratis (MBG), dilengkapi pelacakan GPS kurir via WebSocket, manajemen menu gizi, laporan keuangan, dan dashboard publik berbasis Laravel & Vite.",
      nexora_desc: "Platform analitik data e-commerce berbasis dbt dengan pipeline transformasi end-to-end, mencakup staging layer, model perantara agregasi pesanan & keranjang, serta marts siap pakai untuk pelaporan bisnis berbasis modular SQL dengan validasi skema otomatis.",
      misoa_desc: "Website katalog digital kuliner modern untuk 'Misoa Mamak' dengan slider gambar interaktif, filter kategori produk, modal detail, dan integrasi pemesanan langsung via WhatsApp.",
      mh_desc: "Aplikasi web prediksi risiko kesehatan mental berbasis Laravel dan Python Flask. Menerapkan algoritma Random Forest dengan pipeline prapemrosesan data lengkap untuk mengidentifikasi tingkat risiko pengguna.",
      airflow_desc: "Otomasi orkestrasi pipeline ETL end-to-end menggunakan Apache Airflow dan Docker untuk ekstraksi, prapemrosesan, dan penyimpanan data media sosial X untuk analisis teks kesehatan mental.",
      bbca_desc: "Sistem Pendukung Keputusan (SPK) untuk memprediksi tren pergerakan harga saham BBCA menggunakan algoritma XGBoost, dilengkapi rekayasa fitur otomatis dan evaluasi tren keuangan.",
      tracer_desc: "Sistem basis data dan analitik terstruktur untuk pengumpulan data Tracer Study, validasi respons kuesioner alumni, serta persiapan data akreditasi prodi LAMINFOKOM & GA.",
      obesitas_desc: "Model machine learning untuk memprediksi tingkat obesitas berdasarkan kebiasaan makan dan kondisi fisik, membandingkan algoritma Random Forest, SVM, dan Neural Networks.",
      stroke_desc: "Sistem prediksi risiko medis untuk mengklasifikasikan probabilitas stroke dari rekam data klinis pasien dan gaya hidup menggunakan pipeline klasifikasi scikit-learn.",
      typhoid_desc: "Alat bantu keputusan diagnostik untuk memprediksi kemungkinan infeksi demam tifoid dari fitur laboratorium klinis dan rekam gejala pasien.",
      ikn_desc: "Pipeline Natural Language Processing (NLP) untuk menganalisis sentimen publik terhadap Ibu Kota Nusantara (IKN) di media sosial, dilengkapi normalisasi teks dan pemodelan polaritas.",
      healthnav_desc: "Aplikasi panduan digital medical tourism berbasis Android peraih Medali Emas, menghubungkan pengguna dengan fasilitas kesehatan terakreditasi, destinasi wisata, dan navigasi real-time di Purwokerto.",
      rekamedis_laravel_desc: "Sistem informasi rekam medis elektronik rumah sakit berbasis web yang dibangun dengan Laravel, dilengkapi kontrol akses berbasis peran, penerimaan pasien, catatan dokter, dan riwayat klinis.",
      rekamedis_gui_desc: "Aplikasi GUI desktop rekam medis rumah sakit berbasis Java Swing dan MySQL, mencakup pendaftaran pasien, jadwal konsultasi, dan rekam diagnosis berbasis OOP.",
      game_desc: "Game desktop 2D edukatif pencarian pasien berbasis Java Swing dengan arsitektur OOP, mensimulasikan alur pencarian data rekam medis di fasilitas kesehatan.",
      wellness_desc: "Artikel penelitian PKM yang dipublikasikan di Kompasiana mengeksplorasi inovasi Terapi Bunga dan wellness tourism berbasis teknologi di Indonesia.",
      perpus_desc: "Mockup desain UI/UX dan prototipe interaktif untuk platform sistem manajemen perpustakaan modern yang dirancang menggunakan Figma.",
      fuzzy_desc: "Implementasi komputasi logika fuzzy (metode Mamdani dan Sugeno) untuk pengambilan keputusan otomatis multi-kriteria dalam kondisi ketidakpastian."
    },

    // Experience Section
    experience: {
      tag: "Pengalaman",
      title: "Organisasi & Pengalaman Kerja",
      tracer_title: "Surveyor Tracer Study & Tim Akreditasi",
      tracer_sub: "Program Studi Teknologi Informasi – Universitas 'Aisyiyah Yogyakarta",
      tracer_b1: "Mengumpulkan data dan menghubungi alumni Program Studi Teknologi Informasi untuk pengisian kuesioner Tracer Study.",
      tracer_b2: "Berkomunikasi dan melakukan follow up secara intensif kepada alumni terkait pengisian kuesioner.",
      tracer_b3: "Mengelola, merekapitulasi, dan memonitor data Tracer Study menggunakan Microsoft Excel.",
      tracer_b4: "Memeriksa dan memvalidasi data untuk memastikan kelengkapan dan keakuratan informasi.",
      tracer_b5: "Mengarsipkan dan mengelola dokumen pendukung Tracer Study serta kebutuhan akreditasi program studi.",
      tracer_b6: "Terlibat dalam penyiapan data dan dokumen untuk Akreditasi LAMINFOKOM dan GA Program Studi Teknologi Informasi.",
      tracer_b7: "Berkoordinasi dengan tim kerja dalam pengumpulan, pengecekan, dan penyusunan data serta dokumen.",

      apsi_title: "Juara I – Lomba Karya Tulis Ilmiah Nasional APSI-PTMA",
      apsi_sub: "Musyawarah Nasional APSI-PTMA 2026",
      apsi_desc: "Meraih <strong>Juara I</strong> dalam Lomba Karya Tulis Ilmiah (LKTI) Tingkat Nasional pada Musyawarah Nasional APSI-PTMA 2026.",

      queen_title: "Intern Tim IT – Pengembang Full Stack",
      queen_sub: "RS Queen Latifah Yogyakarta",
      queen_b1: "Mengembangkan dan memelihara sistem web internal untuk mendukung operasional rumah sakit dan manajemen data pasien.",
      queen_b2: "Berkontribusi pada digitalisasi alur kerja layanan kesehatan menggunakan Laravel dan MySQL.",
      queen_b3: "Melakukan pengujian Quality Assurance (QA) dan entri data ke dalam sistem informasi medis.",
      queen_b4: "Berkoordinasi dengan tim lintas fungsi dalam pemeliharaan dan pengembangan sistem informasi rumah sakit.",

      excess_title: "Peserta – Excess 2025",
      excess_sub: "Kompetisi Esai Tingkat Internasional",
      excess_desc: "Berpartisipasi sebagai delegasi dalam kompetisi esai tingkat internasional Excess 2025, mendemonstrasikan pemikiran analitis kritis, riset, dan wawasan teknologi global.",

      gold_title: "Medali Emas – KMM & PKM 2024",
      gold_sub: "Kategori Pengembangan Aplikasi Perangkat Lunak",
      gold_desc: "Dianugerahi <strong>Medali Emas</strong> untuk proyek berjudul <em>\"Sistem Informasi Kesehatan Pengembangan Perangkat Lunak Medical Tourism Berbasis Aplikasi Android di Purwokerto\"</em>.",

      gemastik24_title: "Peserta – GEMASTIK 2024",
      gemastik24_sub: "Pagelaran Mahasiswa Nasional Bidang TIK (Divisi Pemrograman Kompetitif)",
      gemastik24_desc: "Berkompetisi sebagai peserta dalam Pagelaran Mahasiswa Nasional Bidang Teknologi Informasi dan Komunikasi (GEMASTIK XVII 2024) di divisi pemrograman kompetitif.",

      gemastik23_title: "Tim Pemrograman – GEMASTIK 2023",
      gemastik23_sub: "Pagelaran Mahasiswa Nasional Bidang TIK (Divisi Pemrograman)",
      gemastik23_desc: "Berpartisipasi sebagai anggota tim dalam kategori pemrograman GEMASTIK XVI 2023, menyelesaikan tantangan algoritma kompleks menggunakan C++.",

      pkm_title: "PKM (Program Kreativitas Mahasiswa)",
      pkm_sub: "Universitas 'Aisyiyah Yogyakarta",
      pkm_desc: "Aktif terlibat dalam Program Kreativitas Mahasiswa (PKM), merancang dan mengimplementasikan solusi inovatif berbasis teknologi untuk masyarakat.",

      panitia_title: "Anggota Kepanitiaan Kampus",
      panitia_sub: "Universitas 'Aisyiyah Yogyakarta",
      panitia_desc: "Terlibat aktif dalam berbagai kepanitiaan acara kampus, seminar akademik, lokakarya teknologi, dan kegiatan kelembagaan mahasiswa.",

      hima_title: "Anggota Aktif – HIMA ITECH",
      hima_sub: "Himpunan Mahasiswa Teknologi Informasi – Universitas 'Aisyiyah Yogyakarta",
      hima_desc: "Anggota aktif yang berkontribusi dalam kepengurusan mahasiswa, seminar teknologi, kelompok belajar bersama, dan program kemahasiswaan jurusan.",

      osis_title: "Anggota OSIS & PMR",
      osis_sub: "SMA Negeri 1 Bukit Kemuning",
      osis_desc: "Aktif dalam Organisasi Siswa Intra Sekolah (OSIS) dan Palang Merah Remaja (PMR), mengasah kepemimpinan, komunikasi publik, dan kepedulian sosial."
    },

    // Contact Section
    contact: {
      tag: "Hubungi Saya",
      title: "Kontak & Kolaborasi",
      subtitle: "Ada pertanyaan atau ingin berdiskusi dan berkolaborasi? Jangan ragu untuk menghubungi saya!",
      lbl_name: '<i class="fas fa-user"></i> Nama Lengkap',
      lbl_email: '<i class="fas fa-envelope"></i> Alamat Email',
      lbl_subject: '<i class="fas fa-tag"></i> Subjek Pesan',
      lbl_message: '<i class="fas fa-comment"></i> Isi Pesan',
      placeholder_name: "Masukkan nama lengkap Anda",
      placeholder_subject: "Topik pesan Anda",
      placeholder_message: "Tuliskan pesan Anda di sini...",
      btn_send: '<i class="fas fa-paper-plane"></i> Kirim Pesan',
      btn_sending: '<i class="fas fa-spinner fa-spin"></i> Mengirim Pesan...',
      btn_sent: '<i class="fas fa-check"></i> Pesan Terkirim!',
      msg_success: '<i class="fas fa-check-circle"></i> Pesan berhasil dikirim ke <strong>putriindah2343@gmail.com</strong>! Terima kasih 🌸',
      msg_error: '<i class="fas fa-exclamation-triangle"></i> Terkendala jaringan. <a href="{mailtoUrl}" target="_blank">Klik di sini untuk langsung kirim via Email App / Gmail</a>'
    },

    // Footer Section
    footer: {
      slogan: "Bersemangat dalam Teknologi, Inovasi, dan Pemecahan Masalah",
      nav_title: "Navigasi",
      skills_title: "Keahlian Utama",
      copyright: "&copy; 2026 Putri Indah Cahyani. Seluruh hak cipta dilindungi. Sarjana Fresh Graduate Teknologi Informasi."
    }
  }
};

// Helper function to safely fetch nested keys e.g. "hero.greeting"
function getNestedTranslation(obj, keyPath) {
  if (!obj || !keyPath) return undefined;
  return keyPath.split('.').reduce((prev, curr) => (prev && prev[curr] !== undefined ? prev[curr] : undefined), obj);
}
