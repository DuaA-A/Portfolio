import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { name, tagline, summary } = portfolioData.personalInfo;

  return (
    <section 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '160px 0 80px 0' // Perfect visual balance for 80px navbar
      }} 
      className="container"
    >
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 0.75fr)', // Adjusted for slightly wider content
        gap: '5rem', 
        alignItems: 'center',
        width: '100%'
      }} className="hero-grid">
        
        {/* Left Side: Content - BRIEF USP */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ textAlign: 'left' }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="serif" 
            style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '4px', display: 'block', marginBottom: '1.2rem', textTransform: 'uppercase' }}
          >
            Software Engineer & Instructor
          </motion.span>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-1.5px' }}>
            {name.split(' ')[0]} <span style={{ fontStyle: 'italic', fontWeight: '400', color: 'var(--accent-primary)' }}>{name.split(' ').slice(1, 2)}</span> {name.split(' ').slice(2).join(' ')}
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: '600', marginBottom: '1.2rem', maxWidth: '600px', lineHeight: '1.4' }}>
            {tagline}
          </p>

          <p style={{ marginBottom: '2.5rem', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '480px', fontSize: '1rem' }}>
            {summary}
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="btn-premium"
            >
              Explore Projects <ArrowRight size={18} style={{ marginLeft: '10px' }} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={portfolioData.personalInfo.cvUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View CV
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            x: 0,
            y: [0, -15, 0] 
          }}
          transition={{ 
            opacity: { duration: 1.2, delay: 0.2 },
            scale: { duration: 1.2, delay: 0.2 },
            x: { duration: 1.2, delay: 0.2 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" } 
          }}
          whileHover={{ scale: 1.02 }} // Interactive feel
          style={{ position: 'relative', justifySelf: 'center' }}
        >
          <div className="arched-frame" style={{ 
            width: '380px', // Increased slightly more as requested
            height: '520px', 
            margin: '0 auto',
            borderRadius: '190px 190px 40px 40px', 
            border: '1px solid var(--border-color)',
            padding: '14px',
            background: 'white',
            boxShadow: '0 40px 80px -15px rgba(0,0,0,0.15)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: '176px 176px 26px 26px' }}>
              <img 
                src={portfolioData.personalInfo.heroImage || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"} 
                alt={name} 
                className="hero-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(3%) contrast(105%)' }}
              />
            </div>
          </div>
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ 
              position: 'absolute', 
              bottom: '-30px', 
              right: '-30px', 
              width: '120px', 
              height: '120px', 
              border: '2px dashed var(--accent-primary)',
              zIndex: -1,
              borderRadius: '40px',
              opacity: 0.2
            }}
          ></motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ 
          position: 'absolute', 
          bottom: '40px', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          color: 'var(--accent-primary)',
          opacity: 0.5
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <MousePointer2 size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
