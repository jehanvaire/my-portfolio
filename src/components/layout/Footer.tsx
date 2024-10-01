import React from 'react';
import { useTheme } from '../../ThemeContext';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../../styles/layout.css';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/jehanvaire' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/adrien-bony-826b0a213/' },
  ];

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-content">
        <div className="footer-left">
          <h2>Adrien Bony</h2>
          <p>Full Stack Developer</p>
        </div>
        <div className="footer-center">
          <ul className="horizontal-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <div className="social-icons">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Adrien Bony. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;