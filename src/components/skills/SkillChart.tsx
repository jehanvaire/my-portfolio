import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './skills.css';

interface Skill {
  name: string;
  level: number;
}

interface SkillChartProps {
  skills: Skill[];
}

const SkillChart: React.FC<SkillChartProps> = ({ skills }) => {
  const [showBubbles, setShowBubbles] = useState(true);
  const animationPlayedRef = useRef(false);

  useEffect(() => {
    if (!animationPlayedRef.current) {
      animationPlayedRef.current = true;
      const bubbleTimer = setTimeout(() => {
        setShowBubbles(false);
      }, 4000);
      return () => {
        clearTimeout(bubbleTimer);
      };
    }
  }, []);

  const createBubbles = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <div
        key={i}
        className="bubble"
        style={{
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 10 + 5}px`,
          animationDuration: `2s`,
          animationDelay: `${Math.random() * 0.5}s`,
        }}
      />
    ));
  };

  return (
    <div className="skill-chart-container">
      <div className="skill-chart">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-bar vertical"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ minHeight: '200px', width: '60px' }}
          >
            <div className="skill-progress vertical">
              <motion.div
                className="skill-progress-bar vertical"
                initial={{ height: 0 }}
                animate={{ height: `${skill.level}%` }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ alignSelf: 'flex-end', position: 'relative' }}
              >
                {showBubbles && createBubbles(10)}
                <motion.div
                  className="skill-percentage"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, delay: index * 0.1 + 0.5 }}
                >
                  {skill.level}
                </motion.div>
              </motion.div>
            </div>
            <div className="skill-info vertical">
              <span>{skill.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillChart;