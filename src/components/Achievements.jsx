import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Key <span style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>Achievements</span>
        </motion.h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
        {portfolioData.achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ 
              padding: '2.5rem', 
              background: 'white', 
              border: '1px solid var(--border-color)', 
              borderRadius: '24px', // More rounded for trendy look
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            whileHover={{ y: -10, boxShadow: 'var(--shadow-md)' }}
          >
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '15px', 
              background: 'rgba(197, 163, 134, 0.1)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--accent-primary)'
            }}>
              {achievement.type === 'Award' ? <Trophy size={24} /> : <Award size={24} />}
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{achievement.title}</h3>
              <p style={{ color: 'var(--accent-primary)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{achievement.issuer}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{achievement.year}</span>
                {achievement.grade && (
                  <span style={{ 
                    padding: '0.3rem 0.8rem', 
                    background: 'rgba(39, 201, 63, 0.1)', 
                    color: '#27c93f', 
                    borderRadius: '20px', 
                    fontSize: '0.8rem', 
                    fontWeight: '700' 
                  }}>
                    Grade: {achievement.grade}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
