import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from '../../ThemeContext';
import Modal from './Modal';

interface ProjectCardDetailedProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  complementaryText: string;
}

const ProjectCardDetailed: React.FC<ProjectCardDetailedProps> = ({
  title,
  description,
  technologies,
  image,
  complementaryText,
}) => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const [shadowColor, setShadowColor] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const newShadowColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)';
    setShadowColor(newShadowColor);
    controls.start({ boxShadow: `0px 5px 15px ${newShadowColor}` });
  }, [theme, controls]);

  const handleLearnMore = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.div
        className={`project-card ${theme}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, boxShadow: `0px 5px 15px ${shadowColor}` }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.05,
          boxShadow: `0px 10px 30px ${shadowColor}`,
        }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={image} alt={title} className="project-image" />
        <div className="project-info">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="project-technologies">
            {technologies.map(tech => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
          <motion.button
            className="project-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLearnMore}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        technologies={technologies}
        image={image}
        complementaryText={complementaryText}
      />
    </>
  );
};

export default ProjectCardDetailed;