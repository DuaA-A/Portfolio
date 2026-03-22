import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { name } = portfolioData.personalInfo;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isMobileMenuOpen]);

  const hasData = (key) => portfolioData[key] && portfolioData[key].length > 0;

  const navLinks = [
    { name: 'Home', href: '#', show: true },
    { name: 'About', href: '#about', show: !!portfolioData.personalInfo },
    { name: 'Education', href: '#education', show: hasData('education') },
    { name: 'Skills', href: '#skills', show: hasData('skills') },
    { name: 'Projects', href: '#projects', show: hasData('projects') },
    { name: 'Contact', href: '#contact', show: true },
  ].filter(link => link.show);

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '1rem 0' : '2rem 0',
        background: isScrolled ? 'rgba(250, 249, 246, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        borderBottom: isScrolled ? '1px solid rgba(166, 139, 113, 0.1)' : 'none'
      }}
    >
      <div className="navbar-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          href="#" 
          className="serif" 
          style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '700', textDecoration: 'none', color: 'var(--text-primary)', letterSpacing: '-0.5px', zIndex: 1100 }}
        >
          {name.split(' ')[0]}<span style={{ color: 'var(--accent-primary)' }}>.</span>{name.split(' ')[1] ? name.split(' ')[1][0] : ''}
        </motion.a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link, i) => (
            <motion.a 
              key={link.name} 
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontWeight: '600',
                fontSize: '0.75rem',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseOver={(e) => e.target.style.color = 'var(--accent-dark)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div 
          style={{ display: 'none', cursor: 'pointer', zIndex: 1100, padding: '0.5rem' }} 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} style={{ color: 'var(--text-primary)' }} /> : <Menu size={28} style={{ color: 'var(--text-primary)' }} />}
        </div>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              position: 'fixed',
              top: '4.5rem',
              right: 'var(--container-padding)',
              width: 'min(280px, calc(100vw - 3rem))',
              background: 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(25px) saturate(180%)',
              zIndex: 1050,
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem',
              borderRadius: '24px',
              border: '1px solid rgba(197, 160, 89, 0.1)',
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', width: '100%' }}>
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                    fontWeight: '600',
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid rgba(197, 160, 89, 0.05)',
                    padding: '0.5rem 0',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span className="serif" style={{ fontSize: '1.3rem' }}>{link.name}</span>
                  <ArrowUpRight size={18} style={{ opacity: 0.4, color: 'var(--accent-primary)' }} />
                </motion.a>
              ))}
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
