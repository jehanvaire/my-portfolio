import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';
import SEO from '../../components/common/SEO';
import SkillChart from '../../components/skills/SkillChart';
import '../../styles/global.css';
import './Skills.css';

const Skills: React.FC = () => {
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C/C++", level: 55 },
        { name: "Python", level: 65 },
        { name: "Java", level: 70 },
        { name: "C#", level: 75 },
        { name: "JS/TS", level: 90 },
        { name: "HTML/CSS", level: 95 },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Vue JS", level: 65 },
        { name: "Dot Net", level: 75 },
        { name: "Spring Boot", level: 75 },
        { name: "React Native", level: 80 },
        { name: "React", level: 85 },
        { name: "Angular", level: 90 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PLSQL", level: 50 },
        { name: "MongoDB", level: 70 },
        { name: "SQL", level: 90 },
        { name: "PostgreSQL", level: 95 },
      ]
    },
    {
      title: "Office Suite",
      skills: [
        { name: "Canva", level: 85 },
        { name: "Excel", level: 90 },
        { name: "PowerPoint", level: 95 },
        { name: "Word", level: 95 },
      ]
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
            <SkillChart skills={category.skills} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;