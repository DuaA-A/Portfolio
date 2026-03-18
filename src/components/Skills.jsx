import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const categories = ["Frontend", "Backend", "Engineering", "Tools"];

  return (
    <section id="skills" className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          Specialized <span style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>Skillset</span>
        </motion.h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Expertise across the full software development lifecycle.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
        {categories.map((category, catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
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
              fontSize: '0.8rem', 
              fontWeight: '700', 
              textTransform: 'uppercase', 
              color: 'var(--accent-primary)', 
              letterSpacing: '2px',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem'
            }}>
              <span style={{ width: '20px', height: '1px', background: 'var(--accent-primary)' }}></span>
              {category}
            </h4>
            
            <div style={{ display: 'grid', gap: '1.8rem' }}>
              {portfolioData.skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                      <span style={{ fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-primary)' }}>{skill.name}</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: '700' }}>{skill.level}%</span>
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
