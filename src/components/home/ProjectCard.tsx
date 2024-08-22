import React from "react";
import { motion } from "framer-motion";
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
  return (
    <motion.div
      className="project-card"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
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
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;