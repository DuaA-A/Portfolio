import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Feedback = () => {
  return (
    <section id="testimonials" className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Customer <span style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>Feedback</span>
        </motion.h2>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', 
        gap: '2rem',
        alignItems: 'stretch' // Ensure equal height/width layout feel
      }}>
        {portfolioData.testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
        ))}
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isLongText = testimonial.text.length > 200;
  const displayedText = isExpanded ? testimonial.text : testimonial.text.slice(0, 200);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{ 
        padding: '2.5rem', 
        background: 'white', 
        border: '1px solid var(--border-color)', 
        borderRadius: '24px',
        position: 'relative',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between'
      }}
      whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
    >
      <div style={{ position: 'absolute', top: '2rem', right: '2rem', color: 'rgba(197, 163, 134, 0.1)' }}>
        <Quote size={50} fill="currentColor" />
      </div>

      <div>
        <div style={{ display: 'flex', gap: '0.3rem', color: 'var(--accent-primary)', marginBottom: '1.2rem' }}>
          {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
        </div>

        <p style={{ color: 'var(--text-primary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem', fontStyle: 'italic' }}>
          "{displayedText}{!isExpanded && isLongText ? '...' : ''}"
        </p>
        
        {isLongText && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--accent-primary)', 
              fontWeight: '700', 
              fontSize: '0.85rem', 
              cursor: 'pointer',
              marginBottom: '1.5rem',
              padding: 0
            }}
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: 'var(--accent-primary)', border: '1px solid var(--border-color)', fontSize: '0.9rem' }}>
          {testimonial.name[0]}
        </div>
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)' }}>{testimonial.name}</h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Feedback;
