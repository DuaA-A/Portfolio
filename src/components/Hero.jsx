import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

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
        padding: 'clamp(120px, 15vh, 180px) 0 clamp(40px, 5vh, 80px) 0',
        background: 'var(--bg-primary)'
      }}
      className="container"
    >
      <style>{gradientAnimation}</style>
      <FloatingParticles />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
        gap: 'clamp(2rem, 5vw, 5rem)',
        alignItems: 'center',
        width: '100%'
      }} className="hero-grid">

        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ textAlign: 'inherit' }}
          className="hero-content"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="serif"
            style={{ 
              color: 'var(--accent-primary)', 
              fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', 
              fontWeight: '600', 
              letterSpacing: 'clamp(2px, 1vw, 4px)', 
              display: 'block', 
              marginBottom: '1rem', 
              textTransform: 'uppercase' 
            }}
          >
            {title}
          </motion.span>

          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
            lineHeight: '1.1', 
            marginBottom: '1.5rem', 
            letterSpacing: '-1.5px',
            fontWeight: '700'
          }}>
            {name.split(' ').slice(0, Math.max(1, Math.ceil(name.split(' ').length / 2) - 1)).join(' ')} <br />
            <span style={{ fontStyle: 'italic', fontWeight: '400', color: 'var(--accent-primary)' }}>{name.split(' ').slice(Math.max(1, Math.ceil(name.split(' ').length / 2) - 1), Math.ceil(name.split(' ').length / 2)).join(' ')}</span> {name.split(' ').slice(Math.ceil(name.split(' ').length / 2)).join(' ')}
          </h1>
          
          {/* Mobile-only Image */}
          <div className="mobile-only" style={{ marginBottom: '2.5rem', width: '100%', maxWidth: '340px', margin: '0 auto 2.5rem auto' }}>
             <div className="arched-frame" style={{
                width: '100%',
                aspectRatio: '380 / 520',
                borderRadius: 'clamp(100px, 30vw, 190px) clamp(100px, 30vw, 190px) 40px 40px',
                border: '2px solid var(--accent-primary)',
                padding: 'clamp(8px, 2vw, 16px)',
                background: 'white',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  overflow: 'hidden', 
                  borderRadius: 'clamp(90px, 28vw, 176px) clamp(90px, 28vw, 176px) 26px 26px' 
                }}>
                  <img
                    src={portfolioData.personalInfo.heroImage || "https://placehold.co/600x800/white/C5A386?text=Hero+Image"}
                    alt={name}
                    className="hero-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
          </div>

          <p style={{ 
            fontSize: 'clamp(1rem, 3vw, 1.25rem)', 
            color: 'var(--text-primary)', 
            fontWeight: '600', 
            marginBottom: '1.2rem', 
            maxWidth: '600px', 
            lineHeight: '1.4' 
          }}>
            {tagline}
          </p>

          <p style={{ 
            marginBottom: '2.5rem', 
            color: 'var(--text-secondary)', 
            lineHeight: '1.7', 
            maxWidth: '480px', 
            fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' 
          }}>
            {summary}
          </p>

          <div 
            style={{ 
              display: 'flex', 
              gap: '1.2rem', 
              flexWrap: 'wrap', 
              justifyContent: 'inherit',
              width: '100%',
              alignItems: 'center'
            }}
            className="hero-buttons"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="btn-premium"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              Explore Projects <ArrowRight size={18} style={{ marginLeft: '10px' }} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="hero-image-wrapper desktop-only"
          style={{ position: 'relative', justifySelf: 'center', width: '100%', maxWidth: '400px' }}
        >
          <div className="arched-frame" style={{
            width: '100%',
            aspectRatio: '380 / 520',
            borderRadius: 'clamp(100px, 30vw, 190px) clamp(100px, 30vw, 190px) 40px 40px',
            border: '2px solid var(--accent-primary)',
            padding: 'clamp(8px, 2vw, 16px)',
            background: 'white',
            boxShadow: '0 40px 80px -15px rgba(0,0,0,0.15)',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{ 
              width: '100%', 
              height: '100%', 
              overflow: 'hidden', 
              borderRadius: 'clamp(90px, 28vw, 176px) clamp(90px, 28vw, 176px) 26px 26px' 
            }}>
              <img
                src={portfolioData.personalInfo.heroImage || "https://placehold.co/600x800/white/C5A386?text=Hero+Image"}
                alt={name}
                className="hero-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(3%) contrast(105%)' }}
              />
            </div>
            {/* Static decorative element */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '-10px',
              right: '-10px',
              bottom: '-10px',
              border: '1px solid var(--border-color)',
              borderRadius: 'clamp(110px, 32vw, 200px) clamp(110px, 32vw, 200px) 50px 50px',
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
        className="scroll-indicator"
        style={{
          position: 'absolute',
          bottom: '2rem',
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
