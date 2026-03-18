import React, { useState } from 'react';
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

  return (
    <motion.div
      layoutId={`project-${project.id}`}
      onClick={() => onClick(project)}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -15, boxShadow: '0 30px 60px -12px rgba(0,0,0,0.1)' }}
      style={{ 
        cursor: 'pointer',
        background: 'white',
        borderRadius: '32px',
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
        height: '260px', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        <img 
          src={project.images[0]} 
          alt={project.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
          className="project-card-img"
        />
        <div style={{ 
          position: 'absolute', 
          top: '1.5rem', 
          right: '1.5rem', 
          background: 'rgba(255, 255, 255, 0.9)', 
          backdropFilter: 'blur(4px)',
          padding: '0.6rem', 
          borderRadius: '16px',
          boxShadow: 'var(--shadow-sm)',
          color: 'var(--accent-primary)'
        }}>
          {getIcon(project.type)}
        </div>
      </div>

      <div style={{ padding: '2.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-primary)', marginBottom: '0.8rem', display: 'block' }}>
          {project.type}
        </span>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem', flexGrow: 1 }}>
          {project.description.slice(0, 110)}...
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
          {project.tools.slice(0, 3).map((tool) => (
            <span key={tool} style={{ 
              fontSize: '0.75rem', 
              fontWeight: '600', 
              background: 'var(--bg-primary)', 
              padding: '0.4rem 1rem', 
              borderRadius: '100px',
              border: '1px solid var(--border-color)',
              color: 'var(--accent-dark)'
            }}>
              {tool}
            </span>
          ))}
        </div>

        <div style={{ color: 'var(--accent-primary)', fontWeight: '700', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          Explore Full Case Study <ArrowRight size={18} />
        </div>
      </div>
    </motion.div>
  );
};

const Modal = ({ project, onClose }) => {
  const [currentImg, setCurrentImg] = useState(0);

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
        background: 'rgba(18, 18, 18, 0.8)', // Deeper, more premium backdrop
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
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
          width: '90%', // User requested 90%
          maxWidth: '1400px',
          height: '90vh',
          borderRadius: '40px',
          overflow: 'hidden',
          boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.4)',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
          position: 'relative'
        }}
      >
        {/* Left Side: Massive Image Gallery */}
        <div style={{ position: 'relative', background: '#000', overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImg}
              src={project.images[currentImg]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </AnimatePresence>
          
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.4))' }}></div>

          {/* Gallery Controls */}
          <button 
             onClick={prevImg}
             style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)', width: '60px', height: '60px', borderRadius: '50%', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <ChevronLeft size={32} />
          </button>
          <button 
             onClick={nextImg}
             style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)', width: '60px', height: '60px', borderRadius: '50%', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <ChevronRight size={32} />
          </button>

          {/* Dots */}
          <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.8rem' }}>
            {project.images.map((_, i) => (
              <div 
                key={i} 
                onClick={() => setCurrentImg(i)}
                style={{ width: i === currentImg ? '40px' : '10px', height: '10px', borderRadius: '5px', background: 'white', cursor: 'pointer', opacity: i === currentImg ? 1 : 0.5, transition: 'all 0.3s ease' }}
              ></div>
            ))}
          </div>
        </div>

        {/* Right Side: Content */}
        <div style={{ padding: '4rem', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--accent-primary)', marginBottom: '1rem', display: 'block' }}>
              Project Analysis
            </span>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{project.title}</h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              {project.description}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
            <div style={{ background: 'var(--bg-primary)', padding: '1.8rem', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
              <p style={{ fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>My Role</p>
              <p style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '1.1rem' }}>{project.role}</p>
            </div>
            <div style={{ background: 'var(--bg-primary)', padding: '1.8rem', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
              <p style={{ fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Platform</p>
              <p style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '1.1rem' }}>{project.type}</p>
            </div>
          </div>

          <div style={{ marginBottom: '4rem' }}>
             <p style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Technologies Used</p>
             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {project.tools.map((tool) => (
                  <span key={tool} style={{ 
                    fontSize: '0.85rem', 
                    fontWeight: '600', 
                    background: 'white', 
                    padding: '0.6rem 1.4rem', 
                    borderRadius: '16px',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    boxShadow: 'var(--shadow-xs)'
                  }}>
                    {tool}
                  </span>
                ))}
              </div>
          </div>

          <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <a href={project.github} className="btn-premium" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
              <Github size={20} style={{ marginRight: '10px' }} /> View Source
            </a>
            <a href={project.link} className="btn-outline" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
              <ExternalLink size={20} style={{ marginRight: '10px' }} /> Live Experience
            </a>
          </div>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{ 
            position: 'absolute', 
            top: '2.5rem', 
            right: '2.5rem', 
            background: 'white', 
            border: 'none', 
            width: '50px', 
            height: '50px', 
            borderRadius: '50%', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-md)',
            zIndex: 10
          }}
        >
          <X size={24} />
        </button>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ color: 'var(--accent-primary)', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '1.2rem', display: 'block' }}
        >
          Portfolio
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured <span style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>Projects</span>
        </motion.h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto' }}>Exploring the intersection of architectural backend and premium digital experiences.</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
        gap: '3rem' 
      }}>
        {portfolioData.projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={setSelectedProject} 
          />
        ))}
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
