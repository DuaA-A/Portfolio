import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  if (!portfolioData.skills || portfolioData.skills.length === 0) return null;
  const categories = [...new Set(portfolioData.skills.map(s => s.category))];

  return (
    <section id="skills" className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 8vw, 4rem)' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          {portfolioData.sectionTitles?.skills || "Specialized Skillset"}
        </motion.h2>
      </div>

      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 45%, 1fr), 1fr))', 
          gap: 'clamp(1.5rem, 4vw, 2.5rem)',
          maxWidth: '1000px',
          margin: '0 auto'
        }} 
        className="skills-grid"
      >
        {categories.map((category, catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.15 }}
            style={{ 
              padding: 'clamp(1.5rem, 5vw, 2.5rem)', 
              background: 'white', 
              border: '1px solid var(--border-color)', 
              borderRadius: '24px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <h4 style={{ 
              fontSize: '0.75rem', 
              fontWeight: '700', 
              textTransform: 'uppercase', 
              color: 'var(--accent-dark)', 
              letterSpacing: '2px',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem'
            }}>
              <span style={{ width: '20px', height: '1px', background: 'var(--accent-primary)' }}></span>
              {category}
            </h4>
            
            <div style={{ display: 'grid', gap: '1.2rem' }}>
              {portfolioData.skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-primary)' }}>{skill.name}</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--accent-dark)', fontWeight: '700' }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: '6px', background: 'var(--bg-primary)', borderRadius: '10px', overflow: 'hidden' }}>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.5 + (index * 0.1) }}
                        style={{ height: '100%', background: 'var(--accent-primary)', borderRadius: '10px' }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
