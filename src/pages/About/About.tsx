import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from '../../ThemeContext';
import SEO from '../../components/common/SEO';
import moi from '../../assets/jehan.png';
import '../../styles/global.css';
import './About.css';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const { t } = useTranslation();

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
        title={t('about.title')}
        description={t('home.about.intro')}
        keywords="about, web developer, designer, skills, experience"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="about-content"
      >
        <h1>{t('about.title')}</h1>
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
            <p>{t('home.about.intro')}</p>
            <p>{t('home.about.experience')}</p>
            <p>{t('home.about.personal')}</p>
          </motion.div>
        </div>
        <motion.div variants={itemVariants}>
          <h2>{t('about.connect')}</h2>
          <p>{t('about.cta')}</p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/contact'}
          >
            {t('home.cta')}
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;