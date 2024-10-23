import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';
import SEO from '../../components/common/SEO/SEO';
import ProjectCardDetailled from '../../components/common/ProjectCard.tsx/ProjectCardDetailled';
import sudoku from '../../assets/sudoku.jpg';
import event from '../../assets/events.jpg';
import social from '../../assets/social-media.png';
import { useTranslation } from 'react-i18next';
import './Projects.css';

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const projectsData = [
    {
      title: t('projects.sudoku.title'),
      description: t('projects.sudoku.description'),
      technologies: ["Python", "Flutter", "Flask", "OpenCV", "TensorFlow"],
      image: sudoku,
      complementaryText: t('projects.sudoku.note')
    },
    {
      title: t('projects.eventManagement.title'),
      description: t('projects.eventManagement.description'),
      technologies: ["HTML", "CSS", "JavaScript", "Firebase", "Google Maps API", "Android"],
      image: event,
      complementaryText: t('projects.eventManagement.note')
    },
    {
      title: t('projects.socialNetwork.title'),
      description: t('projects.socialNetwork.description'),
      technologies: ["React Native", "REST API", "MVC", "Web Development"],
      image: social,
    }
  ];

  return (
    <div className={`projects-page ${theme}`}>
      <SEO 
        title={t('projects.title')}
        description={t('projects.title')}
        keywords="projects, sudoku solver, event management, social network, react native, python, flutter"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="projects-content"
      >
        <h1>{t('projects.title')}</h1>
        <p className="projects-description">{t('projects.description')}</p>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCardDetailled
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </motion.div>

      <section className="cta">
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/skills")}
        >
          {t("projects.cta")}
        </motion.button>
      </section>
    </div>
  );
};

export default Projects;