import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';
import SEO from '../../components/common/SEO';
import '../../styles/global.css';
import './Projects.css';
import sudoku from '../../assets/sudoku.jpg';
import event from '../../assets/events.jpg';
import social from '../../assets/social-media.png';

const projectsData = [
  {
    title: "Sudoku Solver from Image",
    description: "A Python project that solves Sudoku puzzles from images. Includes a Flutter mobile app and a Flask API. Uses OpenCV and TensorFlow.",
    technologies: ["Python", "Flutter", "Flask", "OpenCV", "TensorFlow"],
    image: sudoku
  },
  {
    title: "Event Management Website",
    description: "A web-based event management system using Google Maps API. Built with HTML/CSS/JavaScript and connected to Firebase. Includes an Android companion app.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase", "Google Maps API", "Android"],
    image: event
  },
  {
    title: "Social Network Mobile App",
    description: "A mobile application combining features of LinkedIn and Instagram. Built with React Native, uses REST API, and follows MVC architecture. Includes a web application counterpart.",
    technologies: ["React Native", "REST API", "MVC", "Web Development"],
    image: social
  }
];

const Projects: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`projects-page ${theme}`}>
      <SEO 
        title="My Projects - Your Name"
        description="Explore the projects I've worked on, including a Sudoku solver, event management website, and social network mobile app."
        keywords="projects, sudoku solver, event management, social network, react native, python, flutter"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="projects-content"
      >
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              className={`project-card ${theme}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <motion.button
                  className="project-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;