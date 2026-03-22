import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ArrowRight, Code, Laptop, Smartphone, Database, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ProjectCard = ({ project, onClick }) => {
  const getIcon = (type) => {
    if (type.toLowerCase().includes('website')) return <Laptop size={20} />;
    if (type.toLowerCase().includes('mobile')) return <Smartphone size={20} />;
    if (type.toLowerCase().includes('backend') || type.toLowerCase().includes('data')) return <Database size={20} />;
    return <Code size={20} />;
  };

  const projectImage = project.images && project.images.length > 0 
    ? project.images[0] 
    : `https://placehold.co/600x400/C5A386/FFFFFF/png?text=${encodeURIComponent(project.title)}`;

  return (
    <motion.div
      layoutId={`project-${project.id}`}
      onClick={() => onClick(project)}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }}
      className="project-card"
      style={{ 
        cursor: 'pointer',
        background: 'white',
        borderRadius: '24px',
        border: '1px solid var(--border-color)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div style={{ 
        height: 'clamp(220px, 35vw, 320px)', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        <img 
          src={projectImage} 
          alt={project.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
          className="project-card-img"
        />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.4))',
          opacity: 1
        }}></div>
      </div>
 
      <div style={{ padding: '0.8rem 1.2rem', background: 'white', borderTop: '1px solid var(--border-color)' }}>
         <h3 style={{ fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: '700', margin: 0 }}>{project.title}</h3>
      </div>
    </motion.div>
  );
};

const Modal = ({ project, onClose }) => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  if (!project) return null;

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % project.images.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        background: 'rgba(18, 18, 18, 0.85)', 
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.5rem, 5vw, 2rem)'
      }}
    >
      <motion.div
        layoutId={`project-${project.id}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        style={{
          background: 'white',
          width: '100%', 
          maxWidth: '1200px',
          maxHeight: '95vh',
          borderRadius: 'clamp(24px, 5vw, 40px)',
          overflow: 'hidden',
          boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        <div style={{ overflowY: 'auto', flex: 1 }} className="modal-scroll-container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'minmax(0, 1fr)',
            lg: { gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)' }
          }} className="modal-grid">
            
            {/* Image Section */}
            <div style={{ position: 'relative', background: '#121212', aspectRatio: '16 / 10', overflow: 'hidden' }} className="modal-image-section">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImg}
                  src={project.images[currentImg]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </AnimatePresence>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.6))' }}></div>
              
              <button 
                onClick={prevImg} 
                style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)', width: '44px', height: '44px', borderRadius: '50%', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImg} 
                style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)', width: '44px', height: '44px', borderRadius: '50%', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}
              >
                <ChevronRight size={24} />
              </button>
              
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.6rem', zIndex: 1 }}>
                {project.images.map((_, i) => (
                  <div key={i} onClick={() => setCurrentImg(i)} style={{ width: i === currentImg ? '30px' : '8px', height: '8px', borderRadius: '4px', background: 'white', cursor: 'pointer', opacity: i === currentImg ? 1 : 0.5, transition: 'all 0.3s ease' }}></div>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div style={{ padding: 'clamp(1.5rem, 5vw, 3.5rem)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '2.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-primary)', marginBottom: '0.8rem', display: 'block' }}>Project Analysis</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '1.2rem', lineHeight: '1.2' }}>{project.title}</h2>
                <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>{project.description}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ background: 'var(--bg-primary)', padding: '1.2rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                  <p style={{ fontSize: '0.65rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '0.3rem' }}>My Role</p>
                  <p style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '0.95rem' }}>{project.role}</p>
                </div>
                <div style={{ background: 'var(--bg-primary)', padding: '1.2rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                  <p style={{ fontSize: '0.65rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '0.3rem' }}>Platform</p>
                  <p style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '0.95rem' }}>{project.type}</p>
                </div>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                 <p style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-primary)', marginBottom: '1rem' }}>Technologies Used</p>
                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {project.tools.map((tool) => (
                      <span key={tool} style={{ fontSize: '0.8rem', fontWeight: '600', background: 'white', padding: '0.5rem 1.2rem', borderRadius: '12px', border: '1px solid var(--border-color)', color: 'var(--text-primary)', boxShadow: 'var(--shadow-xs)' }}>{tool}</span>
                    ))}
                  </div>
              </div>

              <div 
                style={{ marginTop: 'auto', display: 'grid', gap: '1rem' }} 
                className="modal-buttons"
              >
                <a href={project.github} className="btn-premium" style={{ padding: '0.9rem 1.5rem' }}><Github size={18} style={{ marginRight: '8px' }} /> Source</a>
                <a href={project.link} className="btn-outline" style={{ padding: '0.9rem 1.5rem' }}><ExternalLink size={18} style={{ marginRight: '8px' }} /> Live</a>
              </div>
            </div>
          </div>
        </div>
        <button 
          onClick={onClose} 
          style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', background: 'white', border: 'none', width: '44px', height: '44px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)', zIndex: 10 }}
        >
          <X size={20} />
        </button>
      </motion.div>
      <style>{`
        @media (min-width: 1024px) {
          .modal-grid { grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr) !important; }
          .modal-image-section { aspect-ratio: auto !important; height: auto !important; }
        }
      `}</style>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  if (!portfolioData.projects || portfolioData.projects.length === 0) return null;

  return (
    <section id="projects" style={{ padding: 'var(--section-padding) 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background Watermark - Responsive sizing */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        style={{
          position: 'absolute',
          top: '2rem',
          left: '-5%',
          fontSize: 'clamp(5rem, 15vw, 15rem)',
          fontWeight: '900',
          color: 'var(--text-primary)',
          letterSpacing: '-0.05em',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
          filter: 'blur(8px)',
          lineHeight: 1
        }}
      >
        PORTFOLIO
      </motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', width: '100%', marginBottom: 'clamp(2.5rem, 8vw, 4rem)' }}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              {portfolioData.sectionTitles?.projects || "Featured Projects"}
            </motion.h2>
          </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(280px, 45vw, 360px), 1fr))', 
          gap: 'clamp(1.5rem, 4vw, 2.5rem)' 
        }}>
          {portfolioData.projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={setSelectedProject} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Modal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
