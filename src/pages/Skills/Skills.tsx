import React from 'react';
import { useTheme } from '../../ThemeContext';
import SEO from '../../components/common/SEO';
import SkillCategory from '../../components/skills/SkillCategory';
import '../../styles/global.css';
import './Skills.css';
import {angular, react, canva, typescript, springboot, mysql, git, htmlCss, mongodb, officeSuite, opencv, postgresql, python, cpp, sql, docker, express, vue, tensorflow, csharpDotnet} from '../../assets/tools';

const Skills: React.FC = () => {
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: "The ones I use everyday at work",
      skills: [
        { name: "JS/TS", icon: typescript },
        { name: "Java Spring Boot", icon: springboot },
        { name: "C# .NET", icon: csharpDotnet },
        { name: "React / React Native", icon: react },
        { name: "Angular", icon: angular },
        { name: "Express", icon: express },
        { name: "MongoDB", icon: mongodb },
        { name: "PostgreSQL", icon: postgresql },
        { name: "Git", icon: git },
      ]
    },
    {
      title: "The ones I really like",
      skills: [
        { name: "Python", icon: python },
        { name: "OpenCV", icon: opencv },
        { name: "TensorFlow", icon: tensorflow },
        { name: "Vue JS", icon: vue },
        { name: "Office Suite", icon: officeSuite },
        { name: "Canva", icon: canva },
        { name: "MySQL", icon: mysql },
        { name: "Docker", icon: docker },
      ]
    },
    {
      title: "The basics",
      skills: [
        { name: "C/C++", icon: cpp },
        { name: "HTML/CSS", icon: htmlCss },
        { name: "SQL", icon: sql },
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
      <div className="skills-content">
        <h1>My Skills</h1>
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} title={category.title} skills={category.skills} />
        ))}
      </div>
    </div>
  );
};

export default Skills;