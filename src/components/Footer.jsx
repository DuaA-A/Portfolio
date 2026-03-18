import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { name, email, phone, location, github, linkedin } = portfolioData.personalInfo;

  return (
    <footer id="contact" style={{ backgroundColor: '#2D2D2D', color: 'white', padding: '6rem 0 3rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          <div>
            <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>{name}</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
              Full-Stack Developer specializing in React.js and Spring Boot. Bridging engineering with design.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-sans)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px' }}>Contact</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                <Mail size={18} color="var(--accent-primary)" /> {email}
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                <Phone size={18} color="var(--accent-primary)" /> {phone}
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                <MapPin size={18} color="var(--accent-primary)" /> {location}
              </li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-sans)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px' }}>Socials</h3>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href={`https://${github}`} target="_blank" rel="noreferrer" style={{ color: 'white', transition: 'color 0.3s ease' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'white'}>
                <Github size={24} />
              </a>
              <a href={`https://${linkedin}`} target="_blank" rel="noreferrer" style={{ color: 'white', transition: 'color 0.3s ease' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'white'}>
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} {name}. All rights reserved. Professional Portfolio.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
