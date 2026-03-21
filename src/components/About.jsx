import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding container">
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', 
        gap: 'clamp(2rem, 8vw, 6rem)', 
        alignItems: 'center' 
      }} className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about-image-wrapper"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div className="arched-frame" style={{ 
            width: '100%', 
            maxWidth: '380px',
            aspectRatio: '1 / 1.2',
            borderRadius: 'clamp(100px, 40vw, 250px) clamp(100px, 40vw, 250px) 40px 40px', 
            border: '1px solid var(--border-color)', 
            padding: 'clamp(8px, 2vw, 12px)', 
            background: 'white' 
          }}>
            <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: 'clamp(90px, 38vw, 240px) clamp(90px, 38vw, 240px) 30px 30px' }}>
              <img
                src="https://drive.google.com/file/d/1Wgj1RrNqaHp6bz9jL2COxr8T1WrojHbR/view"
                alt="About"
                style={{ filter: 'sepia(30%) contrast(105%) brightness(95%)', width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ width: '100%' }}
          className="about-content"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A Brief <span style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>Introduction</span>
          </motion.h2>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.2rem)', color: 'var(--text-primary)', lineHeight: '1.8', marginBottom: '1.5rem', fontWeight: '500' }}>
            I am a Software Engineer based in Giza, Egypt, with a passion for building systems that are as technically robust as they are visually stunning.
          </p>
          <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
            Currently pursuing my B.Sc. in Information Systems at Cairo University, I have dedicated myself to mastering the full-stack ecosystem. From designing complex Data Warehouses to crafting high-performance React applications, my approach is always driven by clean code and user-centric problem solving.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', 
              gap: 'clamp(1rem, 3vw, 2rem)' 
            }}
          >
            <div style={{ padding: 'clamp(1rem, 5vw, 1.5rem)', borderLeft: '3px solid var(--accent-primary)', background: 'rgba(197, 163, 134, 0.05)', borderRadius: '0 12px 12px 0' }}>
              <h4 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', marginBottom: '0.2rem', color: 'var(--accent-primary)' }}>2+</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Years Experience</p>
            </div>
            <div style={{ padding: 'clamp(1rem, 5vw, 1.5rem)', borderLeft: '3px solid var(--accent-primary)', background: 'rgba(197, 163, 134, 0.05)', borderRadius: '0 12px 12px 0' }}>
              <h4 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', marginBottom: '0.2rem', color: 'var(--accent-primary)' }}>10+</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Projects Delivered</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
