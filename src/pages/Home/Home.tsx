import React, { useEffect } from 'react';
import SEO from '../../components/common/SEO';
import { motion, useAnimation } from 'framer-motion';
import ProjectCard from '../../components/home/ProjectCard';
import { useTheme } from '../../ThemeContext';
import moi from '../../assets/jehan.png';
import '../../styles/global.css';
import './Home.css';
import sudoku from '../../assets/sudoku.jpg';
import event from '../../assets/events.jpg';
import social from '../../assets/social-media.png';

const Home: React.FC = () => {
  const { theme } = useTheme();
  const controls = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      try {
        await controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        });
      } catch (error) {
      }
    };
    startAnimation();
  }, [controls]);

  const projects = [
    {
      title: 'Sudoku Solver',
      description: 'An efficient Sudoku solving application.',
      imageUrl: sudoku,
    },
    {
      title: 'Event Management',
      description: 'A platform to manage and organize events.',
      imageUrl: event,
    },
    {
      title: 'Social Media App',
      description: 'A mobile app for connecting with friends.',
      imageUrl: social,
    },
  ];

  return (
    <div className={`home-container ${theme}`}>
      <SEO 
        title="Home - Adrien BONY"
        description="Welcome to my portfolio website."
        keywords="home, portfolio, web developer"
      />
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        <h1>Welcome to My Portfolio</h1>
        <h2>I'm Adrien, a Web Developer</h2>
      </motion.div>
      <div className="about">
        <motion.div
          className="profile-pic-container"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img src={moi} alt="Adrien BONY" className="profile-pic" />
        </motion.div>
        <div className="about-text">
          <p>
            Hello! I'm Adrien, a passionate web developer with a keen eye for creating beautiful, functional, and user-friendly websites.
          </p>
          <p>
            With 3 years of experience in the field, I've worked on a wide range of projects, from small business websites to large-scale web applications.
          </p>
          <p>
            When I'm not coding, you can find me at the gym. I believe that a well-rounded life contributes to creative problem-solving in my work.
          </p>
        </div>
      </div>
      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </section>
      <section className="cta">
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/contact'}
        >
          Contact Me
        </motion.button>
      </section>
    </div>
  );
};

export default Home;