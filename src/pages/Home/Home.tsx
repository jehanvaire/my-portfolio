import React from 'react';
import SEO from '../../components/common/SEO';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/home/ProjectCard';
import SkillBar from '../../components/skills/SkillBarProps';
import { useTheme } from '../../ThemeContext';
import moi from '../../assets/jehan.png';
import '../../styles/global.css';
import './Home.css';

const Home: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className={`home-container ${theme}`}>
      <SEO 
        title="Adrien BONY - Web Developer Portfolio"
        description="Welcome to my portfolio showcasing my web development projects and skills."
        keywords="web developer, react, typescript, portfolio"
      />
        <section className="hero">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm Adrien
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full Stack Developer
          </motion.h2>
        </section>

        <section className="about">
          <img src={moi} alt="Your Name" className="profile-pic" />
          <p>
            I'm a full stack developer with a passion for creating web applications. I'm currently working at <a href="https://www.infotel.com" target="_blank" rel="noopener noreferrer">Infotel</a> as a full stack developer.
          </p>
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