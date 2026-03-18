import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
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
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Foundational engineering knowledge and continuous learning.</p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
        {/* Progress line */}
        <div style={{ 
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
            style={{ display: 'flex', gap: '2.5rem', marginBottom: '4rem', position: 'relative', zIndex: 1 }}
          >
            <div style={{ 
              flexShrink: 0,
              width: '64px', 
              height: '64px', 
              borderRadius: '20px', 
              background: 'white', 
              border: '2px solid var(--accent-primary)',
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
              padding: '2.5rem', 
              borderRadius: '24px', 
              border: '1px solid var(--border-color)', 
              boxShadow: 'var(--shadow-sm)',
              width: '100%',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{edu.degree}</h3>
                  <p style={{ color: 'var(--accent-primary)', fontWeight: '600', fontSize: '1rem' }}>{edu.institution} — {edu.faculty}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500', background: 'var(--bg-primary)', padding: '0.4rem 1rem', borderRadius: '100px' }}>
                  <Calendar size={14} /> {edu.period}
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ marginTop: '0.4rem', color: 'var(--accent-primary)' }}><BookOpen size={18} /></div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
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
