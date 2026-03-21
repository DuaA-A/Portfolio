import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Add a keyframes animation for the gradient button
const gradientAnimation = `
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const FloatingParticles = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: -1 }}>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.4, 0],
            scale: [0, 1.2, 0]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '8px',
            height: '8px',
            background: 'var(--accent-primary)',
            borderRadius: '50%',
            filter: 'blur(2px)'
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const { name, tagline, summary, title } = portfolioData.personalInfo;

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
        padding: '160px 0 80px 0',
        background: 'var(--bg-primary)'
      }}
      className="container"
    >
      <style>{gradientAnimation}</style>
      <FloatingParticles />


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
            {title}
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
              style={{
                background: 'linear-gradient(-45deg, #C5A386, #8E6E53, #D4B996, #A68B71)',
                backgroundSize: '400% 400%',
                animation: 'gradient 8s ease infinite',
                border: 'none'
              }}
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
            x: 0
          }}
          transition={{
            opacity: { duration: 1.2, delay: 0.2 },
            scale: { duration: 1.2, delay: 0.2 },
            x: { duration: 1.2, delay: 0.2 }
          }}
          whileHover={{ scale: 1.02 }} // Interactive feel
          style={{ position: 'relative', justifySelf: 'center' }}
        >
          <div className="arched-frame" style={{
            width: '380px',
            height: '520px',
            margin: '0 auto',
            borderRadius: '190px 190px 40px 40px',
            border: '2px solid var(--accent-primary)', // Restored and emphasized border
            padding: '16px', // Original padding
            background: 'white',
            boxShadow: '0 40px 80px -15px rgba(0,0,0,0.15)',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: '176px 176px 26px 26px' }}>
              <img
                src={portfolioData.personalInfo.heroImage || "https://drive.google.com/file/d/1Wgj1RrNqaHp6bz9jL2COxr8T1WrojHbR/view"}//
                alt={name}
                className="hero-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(3%) contrast(105%)' }}
              />
            </div>
            {/* Static decorative element outside the image border */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '-10px',
              right: '-10px',
              bottom: '-10px',
              border: '1px solid var(--border-color)',
              borderRadius: '200px 200px 50px 50px',
              zIndex: -1,
              pointerEvents: 'none'
            }} />
          </div>

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
