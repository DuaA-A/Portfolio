import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional <span style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>Experience</span>
        </motion.h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
          Bridging the gap between industrial software development and academic excellence.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', maxWidth: '900px', margin: '0 auto' }}>
        {portfolioData.experience.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '80px 1fr', 
              gap: '2rem',
              background: 'white',
              padding: '3rem',
              borderRadius: '32px',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background Accent */}
            <div style={{ 
              position: 'absolute', 
              top: '-50px', 
              right: '-50px', 
              width: '150px', 
              height: '150px', 
              background: 'rgba(197, 163, 134, 0.05)', 
              borderRadius: '50%',
              zIndex: 0
            }}></div>

            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '24px', 
              background: 'rgba(197, 163, 134, 0.1)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--accent-primary)',
              zIndex: 1
            }}>
              {exp.title.includes('Instructor') ? <GraduationCap size={32} /> : <Briefcase size={32} />}
            </div>

            <div style={{ zIndex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>{exp.title}</h3>
                  <p style={{ color: 'var(--accent-primary)', fontWeight: '700', fontSize: '1rem' }}>{exp.company}</p>
                </div>
                <span style={{ 
                  padding: '0.5rem 1.2rem', 
                  background: 'var(--bg-primary)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '100px', 
                  fontSize: '0.85rem', 
                  fontWeight: '600',
                  color: 'var(--text-secondary)'
                }}>
                  {exp.period}
                </span>
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem', fontSize: '1.05rem' }}>
                {exp.description}
              </p>

              <div style={{ display: 'grid', gap: '1rem' }}>
                {exp.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ marginTop: '0.5rem' }}>
                      <ChevronRight size={16} color="var(--accent-primary)" />
                    </div>
                    <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
