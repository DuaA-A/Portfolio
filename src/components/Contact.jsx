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
        gridTemplateColumns: '1fr 1.2fr', 
        gap: '6rem', 
        alignItems: 'start',
        background: 'white',
        padding: '5rem',
        borderRadius: '40px',
        border: '1px solid var(--border-color)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
      }}>
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
          >
            Get in <span style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>Touch</span>
          </motion.h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '3rem' }}>
            I am always open to discussing new projects, creative ideas, or teaching opportunities.
          </p>

          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ padding: '1.2rem', background: 'var(--bg-primary)', borderRadius: '20px', color: 'var(--accent-primary)' }}>
                <Mail size={24} />
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Email Me</p>
                <a href={`mailto:${email}`} style={{ fontSize: '1.1rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600' }}>{email}</a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ padding: '1.2rem', background: 'var(--bg-primary)', borderRadius: '20px', color: 'var(--accent-primary)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Location</p>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '600' }}>{location}</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.2rem', marginTop: '4rem' }}>
            <a href={`https://${github}`} target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '50%', color: 'var(--text-primary)', transition: 'all 0.3s ease' }}>
              <Github size={22} />
            </a>
            <a href={`https://${linkedin}`} target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '50%', color: 'var(--text-primary)', transition: 'all 0.3s ease' }}>
              <Linkedin size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           style={{ background: 'var(--bg-primary)', padding: '4rem', borderRadius: '32px', textAlign: 'center' }}
        >
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Ready to <span style={{ fontStyle: 'italic' }}>Work</span> Together?</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: '1.7' }}>
            Whether you have a specific project in mind or just want to explore my technical qualifications, I'm here to collaborate.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <a href={`mailto:${email}`} className="btn-premium" style={{ width: '100%', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
               Send Me a Message <Mail size={18} />
            </a>
            <a href={portfolioData.personalInfo.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ width: '100%', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
               View Professional CV <ExternalLink size={18} />
            </a>
          </div>
          <p style={{ marginTop: '2.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
            Expect a response within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
