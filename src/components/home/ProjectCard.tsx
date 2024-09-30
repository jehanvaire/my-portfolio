import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from '../../ThemeContext';
import '../../styles/home.css';

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
    const startAnimation = async () => {
      try {
        await controls.start({ boxShadow: `0px 5px 15px ${newShadowColor}` });
      } catch (error) {
        console.error(`Animation error for ${title}:`, error);
      }
    };
    startAnimation();
  }, [theme, controls, title]);

  const handleLearnMore = () => {
    navigate('/projects');
  };

  return (
    <motion.div
      className="project-card"
      animate={controls}
      initial={false} // Prevent Framer Motion from setting initial styles
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