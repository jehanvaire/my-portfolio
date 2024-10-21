import React from "react";
import { useTheme } from "../../ThemeContext";
import SEO from "../../components/common/SEO/SEO";
import SkillCategory from "../../components/skills/SkillCategory";
import {
  angular,
  react,
  canva,
  typescript,
  springboot,
  mysql,
  git,
  htmlCss,
  mongodb,
  officeSuite,
  opencv,
  postgresql,
  python,
  cpp,
  sql,
  docker,
  express,
  vue,
  tensorflow,
  csharpDotnet,
} from "../../assets/tools";
import { useTranslation } from "react-i18next";
import "./Skills.css";

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t("skills.categories.everyday"),
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
      ],
    },
    {
      title: t("skills.categories.favorite"),
      skills: [
        { name: "Python", icon: python },
        { name: "OpenCV", icon: opencv },
        { name: "TensorFlow", icon: tensorflow },
        { name: "Vue JS", icon: vue },
        { name: "Office", icon: officeSuite },
        { name: "Canva", icon: canva },
        { name: "MySQL", icon: mysql },
        { name: "Docker", icon: docker },
      ],
    },
    {
      title: t("skills.categories.basics"),
      skills: [
        { name: "C/C++", icon: cpp },
        { name: "HTML/CSS", icon: htmlCss },
        { name: "SQL", icon: sql },
      ],
    },
  ];

  return (
    <div className={`skills-container ${theme}`}>
      <SEO
        title={t("skills.title")}
        description={t("skills.title")}
        keywords="skills, programming, web development, databases, office suite"
      />
      <h1>{t("skills.title")}</h1>
      <div className="skill-categories">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
