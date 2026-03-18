import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Feedback = () => {
  return (
    <section id="testimonials" className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Customer <span style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>Feedback</span>
        </motion.h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Trust and collaboration are the foundations of my work.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {portfolioData.testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{ 
              padding: '3rem', 
              background: 'white', 
              border: '1px solid var(--border-color)', 
              borderRadius: '24px',
              position: 'relative',
              boxShadow: 'var(--shadow-sm)'
            }}
            whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
          >
            <div style={{ position: 'absolute', top: '2rem', right: '3rem', color: 'rgba(197, 163, 134, 0.15)' }}>
              <Quote size={60} fill="currentColor" />
            </div>

            <div style={{ display: 'flex', gap: '0.4rem', color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
              {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
            </div>

            <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', fontStyle: 'italic' }}>
              "{testimonial.text}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: 'var(--accent-primary)', border: '1px solid var(--border-color)' }}>
                {testimonial.name[0]}
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>{testimonial.name}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
