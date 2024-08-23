import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from '../../ThemeContext';
import './home.css';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const controls = useAnimation();
  const [shadowColor, setShadowColor] = useState('');

  useEffect(() => {
    const newShadowColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)';
    setShadowColor(newShadowColor);
    controls.start({ boxShadow: `0px 5px 15px ${newShadowColor}` });
  }, [theme, controls]);

  const handleLearnMore = () => {
    navigate('/projects');
  };

  return (
    <motion.div
      className="project-card"
      initial={{ boxShadow: `0px 5px 15px ${shadowColor}` }}
      animate={controls}
      whileHover={{
        scale: 1.05,
        boxShadow: `0px 10px 30px ${shadowColor}`,
      }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <motion.button
          className="project-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleLearnMore}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;