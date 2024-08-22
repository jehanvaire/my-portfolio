import React from 'react';
import { motion } from 'framer-motion';
import './skills.css';

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <motion.div 
        className="skill-progress"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="skill-progress-bar"></div>
      </motion.div>
    </div>
  );
};

export default SkillBar;
