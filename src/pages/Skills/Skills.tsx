import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';
import SEO from '../../components/SEO';
import '../styles/global.css';

const Skills: React.FC = () => {
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: "Langages de programmation",
      skills: ["C#", "Java", "Python", "HTML/CSS", "JS/TS"]
    },
    {
      title: "Outils de développement",
      skills: ["Angular", "React", "React Native", "Vue JS", "Dot Net", "Spring Boot"]
    },
    {
      title: "Bases de données",
      skills: ["SQL", "PLSQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Suite Office",
      skills: ["Word", "Excel", "PowerPoint", "Canva"]
    }
  ];

  return (
    <div className={`skills-page ${theme}`}>
      <SEO 
        title="My Skills - Your Name"
        description="Explore my technical skills in programming languages, development tools, databases, and office suites."
        keywords="skills, programming, web development, databases, office suite"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="skills-content"
      >
        <h1>My Skills</h1>
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2>{category.title}</h2>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  className="skill-badge"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: skillIndex * 0.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;