import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const categories = ["Frontend", "Backend", "Engineering", "Tools"];

  return (
    <section id="skills" className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', fontSize: '3.5rem' }}
        >
          Specialized <span style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>Skillset</span>
        </motion.h2>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2.5rem'
      }}>
        {categories.map((category, catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.15 }}
            style={{ 
              padding: '2.5rem', 
              background: 'white', 
              border: '1px solid var(--border-color)', 
              borderRadius: '24px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <h4 style={{ 
              fontSize: '0.85rem', 
              fontWeight: '700', 
              textTransform: 'uppercase', 
              color: 'var(--accent-dark)', 
              letterSpacing: '2px',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem'
            }}>
              <span style={{ width: '20px', height: '1px', background: 'var(--accent-primary)' }}></span>
              {category}
            </h4>
            
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {portfolioData.skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                      <span style={{ fontWeight: '600', fontSize: '1rem', color: 'var(--text-primary)' }}>{skill.name}</span>
                      <span style={{ fontSize: '0.9rem', color: 'var(--accent-dark)', fontWeight: '700' }}>{skill.level}%</span>
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
