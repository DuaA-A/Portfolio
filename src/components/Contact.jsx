import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { email, location, github, linkedin } = portfolioData.personalInfo;

  return (
    <section id="contact" className="section-padding container">
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', 
        gap: 'clamp(3rem, 8vw, 6rem)', 
        alignItems: 'start',
        background: 'white',
        padding: 'clamp(2rem, 5vw, 5rem)',
        borderRadius: 'clamp(24px, 5vw, 40px)',
        border: '1px solid var(--border-color)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
      }} className="contact-grid">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '1.5rem !important' }}
          >
            Get in <span style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>Touch</span>
          </motion.h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
            I am always open to discussing new projects, creative ideas, or teaching opportunities.
          </p>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{ padding: 'clamp(0.8rem, 2vw, 1.2rem)', background: 'var(--bg-primary)', borderRadius: '16px', color: 'var(--accent-primary)' }}>
                <Mail size={24} />
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Email Me</p>
                <a href={`mailto:${email}`} style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600', wordBreak: 'break-all' }}>{email}</a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{ padding: 'clamp(0.8rem, 2vw, 1.2rem)', background: 'var(--bg-primary)', borderRadius: '16px', color: 'var(--accent-primary)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Location</p>
                <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'var(--text-primary)', fontWeight: '600' }}>{location}</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
            <a href={`https://${github}`} target="_blank" rel="noopener noreferrer" style={{ padding: '0.9rem', border: '1px solid var(--border-color)', borderRadius: '50%', color: 'var(--text-primary)', transition: 'all 0.3s ease', display: 'flex' }}>
              <Github size={20} />
            </a>
            <a href={`https://${linkedin}`} target="_blank" rel="noopener noreferrer" style={{ padding: '0.9rem', border: '1px solid var(--border-color)', borderRadius: '50%', color: 'var(--text-primary)', transition: 'all 0.3s ease', display: 'flex' }}>
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           style={{ background: 'var(--bg-primary)', padding: 'clamp(2rem, 6vw, 4rem)', borderRadius: '32px', textAlign: 'center' }}
        >
          <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '1.2rem' }}>Ready to <span style={{ fontStyle: 'italic' }}>Work</span> Together?</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.7', fontSize: '0.95rem' }}>
            Whether you have a specific project in mind or just want to explore my technical qualifications, I'm here to collaborate.
          </p>
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              alignItems: 'center' 
            }}
            className="contact-buttons"
          >
            <a href={`mailto:${email}`} className="btn-premium" style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center' }}>
               Send Me a Message <Mail size={18} />
            </a>
            <a href={portfolioData.personalInfo.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center' }}>
               View Professional CV <ExternalLink size={18} />
            </a>
          </div>
          <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
            Expect a response within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
