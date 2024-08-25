import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';
import SEO from '../../components/common/SEO';
import moi from '../../assets/jehan.png';
import '../../styles/global.css';
import './About.css';

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`about-page ${theme}`}>
      <SEO 
        title="About Me - Adrien BONY"
        description="Learn more about me, a passionate web developer"
        keywords="about, web developer, designer, skills, experience"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="about-content"
      >
        <h1>About Me</h1>
        <div className="about-grid">
          <motion.div
            className="profile-pic-container"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={moi}
              alt="Adrien BONY"
              className="profile-pic"
            />
          </motion.div>
          <div className="about-text">
            <p>
              Hello! I'm Adrien, a passionate web developer with a keen eye for creating beautiful, functional, and user-friendly websites.
            </p>
            <p>
              With 3 years of experience in the field, I've had the opportunity to work on a wide range of projects, from small business websites to large-scale web applications. My expertise lies in full stack development.
            </p>
            <p>
              When I'm not coding, you can find me at the gym. I believe that a well-rounded life contributes to creative problem-solving in my work.
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>My Skills</h2>
          <div className="skills-grid">
            {['React', 'Angular', 'TypeScript', 'C#', 'Java', 'Git'].map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-badge"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1, type: 'spring' }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>Let's Connect</h2>
          <p>
            I'm always excited to take on new challenges and collaborate on interesting projects. If you'd like to work together or just have a chat, feel free to reach out!
          </p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/contact'}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;