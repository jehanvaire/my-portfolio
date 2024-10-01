import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from '../../ThemeContext';
import SEO from '../../components/common/SEO';
import SkillFishes from '../../components/skills/SkillFishes';
import moi from '../../assets/jehan.png';
import '../../styles/global.css';
import './About.css';

const About: React.FC = () => {
  const { theme } = useTheme();
  const controls = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      try {
        await controls.start({ opacity: 1, y: 0 });
      } catch (error) {
        console.error('About animation error:', error);
      }
    };
    startAnimation();
  }, [controls]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`about-page ${theme}`}>
      <SEO 
        title="About Me - Adrien BONY"
        description="Learn more about me, a passionate web developer"
        keywords="about, web developer, designer, skills, experience"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
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
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              Hello! I'm Adrien, a passionate web developer with a keen eye for creating beautiful, functional, and user-friendly websites.
            </p>
            <p>
              With 3 years of experience in the field, I've had the opportunity to work on a wide range of projects, from small business websites to large-scale web applications. My expertise lies in full stack development.
            </p>
            <p>
              When I'm not coding, you can find me at the gym. I believe that a well-rounded life contributes to creative problem-solving in my work.
            </p>
          </motion.div>
        </div>
        <motion.div variants={itemVariants}>
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