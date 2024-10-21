import React from 'react';
import './SkillCategory.css';

interface SkillCategoryProps {
  title: string;
  skills: { name: string; icon: string }[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="skill-category">
      <h2 className="skill-category-title">{title}</h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;