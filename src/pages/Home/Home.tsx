import React from 'react';
import SEO from '../../components/common/SEO';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/home/ProjectCard';
import SkillFishes from '../../components/skills/SkillFishes';
import { useTheme } from '../../ThemeContext';
import moi from '../../assets/jehan.png';
import '../../styles/global.css';
import './Home.css';
import sudoku from '../../assets/sudoku.jpg';
import event from '../../assets/events.jpg';
import social from '../../assets/social-media.png';


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
          <div className="profile-pic-container">
            <img src={moi} alt="Adrien BONY" className="profile-pic" />
          </div>
          <p>
            I'm a full stack developer with a passion for creating web applications. I'm currently working at <a href="https://www.infotel.com" target="_blank" rel="noopener noreferrer">Infotel</a> as a full stack developer.
          </p>
        </section>

        <section className="projects">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            <ProjectCard 
              title="Sudoku Solver from Image" 
              description="A Python project that solves Sudoku puzzles from images. Includes a Flutter mobile app and a Flask API. Uses OpenCV and TensorFlow." 
              imageUrl={sudoku} 
            />
            <ProjectCard 
              title="Event Management Website" 
              description="A web-based event management system using Google Maps API. Built with HTML/CSS/JavaScript and connected to Firebase. Includes an Android companion app." 
              imageUrl={event} 
            />
            <ProjectCard 
              title="Social Network Mobile App" 
              description="A mobile application combining features of LinkedIn and Instagram. Built with React Native, uses REST API, and follows MVC architecture. Includes a web application counterpart." 
              imageUrl={social} 
            />
          </div>
        </section>

        <section className="skills">
          <h2>My Skills (work in progress)</h2>
          <SkillFishes 
          // skills={[
          //   "React",
          //   "TypeScript",
          //   "HTML/CSS",
          //   "Node.js",
          //   "Git",
            // "MongoDB",
            // "PostgreSQL",
            // "Python",
            // "REST API",
            // "MVC",
            // "Web Development",
            // "React Native",
            // "C/C++",
            // "Java",
            // "C#",
            // "JS/TS",
          // ]} 
          />
        </section>

        <section className="cta">
          <h2>Let's Work Together</h2>
          <button className="cta-button">Contact Me</button>
        </section>
    </div>
  );
};

export default Home;