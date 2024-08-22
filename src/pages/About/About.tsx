import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';
import SEO from '../../components/SEO';
import moi from '../../assets/jehan.png';
import '../styles/global.css';

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`about-page ${theme}`}>
      <SEO 
        title="About Me - Your Name"
        description="Learn more about Your Name, a passionate web developer and designer."
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
          <motion.img
            src={moi}
            alt="Your Name"
            className="profile-pic"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <div className="about-text">
            <p>
              Hello! I'm [Your Name], a passionate web developer and designer with a keen eye for creating beautiful, functional, and user-friendly websites.
            </p>
            <p>
              With [X] years of experience in the field, I've had the opportunity to work on a wide range of projects, from small business websites to large-scale web applications. My expertise lies in front-end development, with a strong focus on React and TypeScript.
            </p>
            <p>
              When I'm not coding, you can find me [mention some hobbies or interests]. I believe that a well-rounded life contributes to creative problem-solving in my work.
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
            {['React', 'TypeScript', 'CSS', 'HTML', 'Node.js', 'Git'].map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-badge"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1, type: 'spring' }}
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
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;