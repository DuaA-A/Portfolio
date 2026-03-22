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
  const isMobileApp = project.imageType === 'mobile';

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
        background: 'rgba(10, 10, 10, 0.95)', 
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.5rem, 5vw, 3rem)'
      }}
    >
      <motion.div
        layoutId={`project-${project.id}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        style={{
          background: 'white',
          width: '100%', 
          maxWidth: isMobileApp ? '1000px' : '1300px',
          maxHeight: '90vh',
          borderRadius: '32px',
          overflow: 'hidden',
          boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        <div style={{ overflowY: 'auto', flex: 1 }} className="modal-scroll-container">
          <div className={`modal-grid ${isMobileApp ? 'mobile-project-layout' : ''}`} style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr',
          }}>
            
            {/* Image / Mockup Section */}
            <div style={{ 
              position: 'relative', 
              background: isMobileApp ? 'var(--bg-secondary)' : '#0D0D0D', 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: isMobileApp ? '500px' : 'clamp(300px, 60vh, 600px)',
              padding: '2rem',
              borderRight: isMobileApp ? '1px solid var(--border-color)' : 'none'
            }} className="modal-image-section">
              
              {isMobileApp ? (
                /* Phone Mockup Frame */
                <div className="phone-mockup">
                  <div className="phone-screen">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImg}
                        src={project.images[currentImg]}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </AnimatePresence>
                  </div>
                  <div className="phone-home-indicator"></div>
                </div>
              ) : (
                /* Standard Gallery */
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImg}
                    src={project.images[currentImg]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%', 
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))'
                    }}
                  />
                </AnimatePresence>
              )}
              
              {/* Gallery Navigation */}
              {project.images.length > 1 && (
                <>
                  <button onClick={prevImg} className="modal-nav-btn" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}>
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={nextImg} className="modal-nav-btn" style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)' }}>
                    <ChevronRight size={24} />
                  </button>
                  <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.6rem', padding: '0.6rem 1rem', borderRadius: '100px', background: 'rgba(0,0,0,0.1)', backdropFilter: 'blur(10px)' }}>
                    {project.images.map((_, i) => (
                      <div key={i} onClick={() => setCurrentImg(i)} style={{ width: i === currentImg ? '20px' : '6px', height: '6px', borderRadius: '3px', background: isMobileApp ? 'var(--accent-primary)' : 'white', cursor: 'pointer', opacity: i === currentImg ? 1 : 0.3, transition: 'all 0.3s ease' }}></div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content Section */}
            <div style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', background: 'white' }}>
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '4px', color: 'var(--accent-primary)', marginBottom: '1rem', display: 'block' }}>Project Discovery</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>{project.title}</h2>
                <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2.5rem' }}>{project.description}</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
                  <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '16px' }}>
                    <p style={{ fontSize: '0.6rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '0.3rem' }}>Role</p>
                    <p style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '0.9rem' }}>{project.role}</p>
                  </div>
                  <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '16px' }}>
                    <p style={{ fontSize: '0.6rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '0.3rem' }}>Platform</p>
                    <p style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '0.9rem' }}>{project.type}</p>
                  </div>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                   <p style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '1rem' }}>Stack</p>
                   <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                      {project.tools.map((tool) => (
                        <span key={tool} style={{ fontSize: '0.8rem', fontWeight: '600', background: 'var(--bg-secondary)', padding: '0.5rem 1rem', borderRadius: '10px', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>{tool}</span>
                      ))}
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-premium" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>Source Code</a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>Live Preview</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button onClick={onClose} style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', background: 'white', border: 'none', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', zIndex: 10 }}>
          <X size={20} />
        </button>
      </motion.div>
      <style>{`
        .phone-mockup {
          width: 280px;
          height: 560px;
          background: #111;
          border-radius: 40px;
          border: 10px solid #222;
          box-shadow: 0 40px 80px -20px rgba(0,0,0,0.4), inset 0 0 10px rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
        }
        .phone-screen {
          width: 100%;
          height: 100%;
          background: #000;
          overflow: hidden;
        }
        .phone-home-indicator {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: rgba(255,255,255,0.3);
          border-radius: 10px;
        }
        .modal-nav-btn {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.2);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
        }
        @media (min-width: 1024px) {
          .mobile-project-layout {
            grid-template-columns: 1fr 1fr !important;
          }
          .mobile-project-layout .modal-image-section {
            min-height: 80vh !important;
          }
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
