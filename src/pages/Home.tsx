import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import SkillBar from '../components/SkillBarProps';
import { useTheme } from '../ThemeContext';
import '../styles/global.css';

const Home: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className={`home-container ${theme}`}>
      <SEO 
        title="Your Name - Web Developer Portfolio"
        description="Welcome to my portfolio showcasing my web development projects and skills."
        keywords="web developer, react, typescript, portfolio"
      />
        <section className="hero">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm Your Name
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Web Developer & Designer
          </motion.h2>
        </section>

        <section className="about">
          <img src="../assets/jehan.png" alt="Your Name" className="profile-pic" />
          <p>Brief introduction about yourself and your passion for web development.</p>
        </section>

        <section className="projects">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            <ProjectCard title="Project 1" description="Short description" imageUrl="/project1.jpg" />
            <ProjectCard title="Project 2" description="Short description" imageUrl="/project2.jpg" />
            <ProjectCard title="Project 3" description="Short description" imageUrl="/project3.jpg" />
          </div>
        </section>

        <section className="skills">
          <h2>My Skills</h2>
          <SkillBar skill="React" percentage={90} />
          <SkillBar skill="TypeScript" percentage={85} />
          <SkillBar skill="CSS" percentage={80} />
        </section>

        <section className="cta">
          <h2>Let's Work Together</h2>
          <button className="cta-button">Contact Me</button>
        </section>
    </div>
  );
};

export default Home;