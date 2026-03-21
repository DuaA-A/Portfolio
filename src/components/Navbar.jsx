import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
          Duaa<span style={{ color: 'var(--accent-primary)' }}>.</span>A
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
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
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
              inset: 0,
              background: 'var(--bg-primary)',
              zIndex: 1050,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px', margin: '0 auto', width: '100%' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '4px', color: 'var(--accent-primary)', marginBottom: '1rem' }}>Menu</span>
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
                    fontWeight: '700',
                    fontSize: 'clamp(2rem, 8vw, 3rem)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid rgba(166, 139, 113, 0.1)',
                    paddingBottom: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span className="serif">{link.name}</span>
                  <ArrowUpRight size={24} style={{ opacity: 0.3 }} />
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                style={{ marginTop: '2rem', textAlign: 'center' }}
              >
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>© 2024 Duaa Abdel-Ati</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
