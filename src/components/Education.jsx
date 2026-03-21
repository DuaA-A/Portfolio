import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
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
            Academic <span style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>Journey</span>
          </motion.h2>
        </motion.div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', paddingLeft: 'clamp(0rem, 5vw, 2rem)' }}>
        {/* Progress line - Responsive Positioning */}
        <div style={{ 
          position: 'absolute', 
          left: 'clamp(31px, 8vw, 31px)', 
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
            style={{ 
              display: 'flex', 
              gap: 'clamp(1.5rem, 5vw, 2.5rem)', 
              marginBottom: 'clamp(2.5rem, 8vw, 4rem)', 
              position: 'relative', 
              zIndex: 1 
            }}
          >
            <div style={{ 
              flexShrink: 0,
              width: 'clamp(48px, 12vw, 64px)', 
              height: 'clamp(48px, 12vw, 64px)', 
              borderRadius: 'clamp(14px, 3vw, 20px)', 
              background: 'white', 
              border: '2px solid var(--accent-primary)',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--accent-primary)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <GraduationCap size={24} />
            </div>

            <div style={{ 
              background: 'white', 
              padding: 'clamp(1.5rem, 5vw, 2.5rem)', 
              borderRadius: '24px', 
              border: '1px solid var(--border-color)', 
              boxShadow: 'var(--shadow-sm)',
              width: '100%',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1.2rem' }}>
                <div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.4rem)', color: 'var(--text-primary)', marginBottom: '0.4rem', lineHeight: '1.3' }}>{edu.degree}</h3>
                  <p style={{ color: 'var(--accent-primary)', fontWeight: '600', fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' }}>{edu.institution}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '500' }}>{edu.faculty}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: '500', background: 'var(--bg-primary)', padding: '0.4rem 1rem', borderRadius: '100px' }}>
                  <Calendar size={12} /> {edu.period}
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                <div style={{ marginTop: '0.2rem', color: 'var(--accent-primary)', flexShrink: 0 }}><BookOpen size={16} /></div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)' }}>
                  <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Core focus:</span> {edu.details}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
