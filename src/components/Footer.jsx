import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { name, email, github, linkedin } = portfolioData.personalInfo;

  return (
    <footer style={{ background: 'white', borderTop: '1px solid var(--border-color)', padding: 'clamp(3.5rem, 8vw, 5rem) 0 3rem 0' }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '2.5rem',
          marginBottom: 'clamp(2.5rem, 6vw, 4rem)'
        }} className="footer-top">
          <div style={{ flex: '1 1 300px' }}>
             <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '0.8rem' }}>{name.split(' ')[0]} <span style={{ fontStyle: 'italic', fontWeight: '400', color: 'var(--accent-primary)' }}>{name.split(' ')[1]}</span></h3>
             <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', lineHeight: '1.6', fontSize: '0.95rem' }}>
               Building digital experiences with precision, passion, and a focus on impact.
             </p>
          </div>
          
          <div style={{ display: 'flex', gap: 'clamp(1.2rem, 3vw, 2rem)' }}>
            <a href={`https://${github}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: 'color 0.3s' }}>
              <Github size={20} />
            </a>
            <a href={`https://${linkedin}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: 'color 0.3s' }}>
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${email}`} style={{ color: 'var(--text-primary)', transition: 'color 0.3s' }}>
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '500' }}>
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            style={{ 
              background: 'var(--bg-primary)', 
              border: '1px solid var(--border-color)', 
              padding: '0.8rem 1.5rem', 
              borderRadius: '12px', 
              fontSize: '0.8rem', 
              fontWeight: '700', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: 'var(--text-primary)'
            }}
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
