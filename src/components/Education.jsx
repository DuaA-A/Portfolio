import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  if (!portfolioData.education || portfolioData.education.length === 0) return null;

  return (
    <section id="education" className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 8vw, 4rem)' }}>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {portfolioData.sectionTitles?.education || "Academic Journey"}
          </motion.h2>
        </motion.div>
      </div>

      <div className="education-container" style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
        {/* Progress line - Hidden on Mobile via CSS */}
        <div className="timeline-line" style={{ 
          position: 'absolute', 
          left: '31px', 
          top: '0', 
          bottom: '0', 
          width: '2px', 
          background: 'linear-gradient(180deg, var(--accent-primary) 0%, rgba(197, 163, 134, 0.1) 100%)',
          zIndex: 0
        }}></div>

        {portfolioData.education.map((edu, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="education-item"
            style={{ 
              display: 'flex', 
              gap: 'clamp(1rem, 5vw, 2.5rem)', 
              marginBottom: 'clamp(2rem, 8vw, 4.5rem)', 
              position: 'relative', 
              zIndex: 1 
            }}
          >
            {/* Desktop Icon - Hidden on Mobile */}
            <div className="education-icon-desktop" style={{ 
              flexShrink: 0,
              width: '64px', 
              height: '64px', 
              borderRadius: '20px', 
              background: 'white', 
              border: '1px solid var(--border-color)',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--accent-primary)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <GraduationCap size={28} />
            </div>

            <div style={{ 
              background: 'white', 
              padding: 'clamp(1.5rem, 5vw, 2.5rem)', 
              borderRadius: '28px', 
              border: '1px solid var(--border-color)', 
              boxShadow: 'var(--shadow-sm)',
              width: '100%',
              transition: 'all 0.3s ease'
            }}>
              {/* Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.45rem)', color: 'var(--text-primary)', marginBottom: '0.2rem', lineHeight: '1.2' }}>{edu.degree}</h3>
                  <p style={{ color: 'var(--accent-primary)', fontWeight: '700', fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' }}>{edu.institution}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: '600', background: 'var(--bg-primary)', padding: '0.4rem 1rem', borderRadius: '100px', border: '1px solid var(--border-color)' }}>
                  <Calendar size={12} /> {edu.period}
                </div>
              </div>

              <div style={{ marginBottom: '1.2rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '500' }}>{edu.faculty}</p>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'var(--bg-primary)', padding: '1.2rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <div style={{ marginTop: '0.2rem', color: 'var(--accent-primary)', flexShrink: 0 }}><BookOpen size={18} /></div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)' }}>
                  <span style={{ fontWeight: '800', color: 'var(--text-primary)', marginRight: '0.5rem' }}>Specialization:</span> {edu.details}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line { display: none; }
          .education-icon-desktop { display: none; }
          .education-container { padding-left: 0 !important; }
          .education-item { 
            flex-direction: column; 
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
