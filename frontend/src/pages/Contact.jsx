import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

function Contact() {
  const { language } = useLanguage();

  const translations = {
    ENG: {
      tag: "Establish_Connection",
      title: "Contact Me",
      subtitle: "Have a question or want to collaborate? Feel free to reach out!",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your full name",
      emailLabel: "Email Address",
      emailPlaceholder: "email@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Topic of your message",
      messageLabel: "Message",
      messagePlaceholder: "Write your message here...",
      sendBtn: "Send Message"
    },
    ID: {
      tag: "Bangun_Koneksi",
      title: "Hubungi Saya",
      subtitle: "Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya!",
      nameLabel: "Nama Lengkap",
      namePlaceholder: "Masukkan nama lengkap Anda",
      emailLabel: "Alamat Email",
      emailPlaceholder: "email@contoh.com",
      subjectLabel: "Subjek",
      subjectPlaceholder: "Topik pesan Anda",
      messageLabel: "Pesan",
      messagePlaceholder: "Tulis pesan Anda di sini...",
      sendBtn: "Kirim Pesan"
    }
  };

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState(null); // 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.target);
    formData.append("access_key", "eca92544-1e08-43e0-9128-424599626412"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const t = translations[language];

  return (
    <section className="contact" id="contact" style={{ paddingTop: '120px', paddingBottom: '120px', minHeight: '80vh' }}>
      <div className="container">
        <div className="section-header animate-fade">
          <span className="section-tag">{t.tag}</span>
          <h2 className="hero-name" style={{ fontSize: '3rem', marginBottom: '1rem' }}>{t.title}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>{t.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a href="mailto:putriindah2343@gmail.com" className="glass-card contact-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', transition: 'all 0.3s ease' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', color: 'var(--primary)' }}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.2rem' }}>Email</h4>
                <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>putriindah2343@gmail.com</p>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/putri-indah-cahyani-85b181322/" target="_blank" rel="noopener noreferrer" className="glass-card contact-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', transition: 'all 0.3s ease' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', color: 'var(--secondary)' }}>
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '0.2rem' }}>LinkedIn</h4>
                <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>Putri Indah Cahyani</p>
              </div>
            </a>

            <a href="https://www.instagram.com/putriindahchyni_/" target="_blank" rel="noopener noreferrer" className="glass-card contact-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', transition: 'all 0.3s ease' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(217, 70, 239, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', color: '#d946ef' }}>
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div>
                <h4 style={{ color: '#d946ef', marginBottom: '0.2rem' }}>Instagram</h4>
                <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>@putriindahchyni_</p>
              </div>
            </a>

            <a href="https://x.com/pxuutzz" target="_blank" rel="noopener noreferrer" className="glass-card contact-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', transition: 'all 0.3s ease' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', color: 'white' }}>
                <i className="fa-brands fa-x-twitter"></i>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.2rem' }}>X (Twitter)</h4>
                <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>@pxuutzz</p>
              </div>
            </a>

            <a href="https://github.com/Pxuutzzzz" target="_blank" rel="noopener noreferrer" className="glass-card contact-link" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', transition: 'all 0.3s ease' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(224, 170, 255, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', color: '#c084fc' }}>
                <i className="fa-brands fa-github"></i>
              </div>
              <div>
                <h4 style={{ color: '#c084fc', marginBottom: '0.2rem' }}>GitHub</h4>
                <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>Pxuutzzzz</p>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="glass-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '2rem' }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={handleSubmit}>
              <div>
                <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{t.nameLabel}</label>
                <input type="text" name="name" required placeholder={t.namePlaceholder} style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', color: 'white', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{t.emailLabel}</label>
                <input type="email" name="email" required placeholder={t.emailPlaceholder} style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', color: 'white', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{t.subjectLabel}</label>
                <input type="text" name="subject" required placeholder={t.subjectPlaceholder} style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', color: 'white', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{t.messageLabel}</label>
                <textarea rows="4" name="message" required placeholder={t.messagePlaceholder} style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', color: 'white', outline: 'none', resize: 'none' }}></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn btn-primary" 
                style={{ 
                  padding: '1rem', 
                  width: '100%', 
                  fontWeight: '600', 
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                  position: 'relative'
                }}
              >
                {isSubmitting ? (language === 'ENG' ? "Sending..." : "Mengirim...") : t.sendBtn}
              </button>

              {status === 'success' && (
                <p style={{ color: '#10b981', fontSize: '0.9rem', textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>
                  {language === 'ENG' ? "✓ Message sent successfully!" : "✓ Pesan berhasil terkirim!"}
                </p>
              )}
              {status === 'error' && (
                <p style={{ color: '#ef4444', fontSize: '0.9rem', textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>
                  {language === 'ENG' ? "✗ Failed to send. Please try again." : "✗ Gagal mengirim. Silakan coba lagi."}
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
