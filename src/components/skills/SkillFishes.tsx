import React, { useEffect, useState, useMemo } from "react";
import '../../styles/skills.css';
import { motion, useAnimation } from "framer-motion";
import { ReactComponent as SharkSvg } from '../../assets/shark.svg'; // Import the SVG as a React component

// Define the structure for each shark's properties
interface SharkProps {
  skill: string;
  initialDirection: "left" | "right";
  topPosition: number; // Percentage (10% - 70%)
  delay: number; // Seconds
  duration: number; // Seconds
}

// SVG Shark Component
const Shark: React.FC<SharkProps> = React.memo(
  ({ skill, initialDirection, topPosition, delay, duration }) => {
    const controls = useAnimation();
    const [direction, setDirection] = useState(initialDirection);

    useEffect(() => {
      const animate = async () => {
        try {
          await controls.start({
            x: direction === "left" ? "100%" : "-100%",
            transition: { duration, delay },
          });
          setDirection(direction === "left" ? "right" : "left");
        } catch (error) {
          console.error(`Animation error for ${skill}:`, error);
        }
      };
      animate();
    }, [controls, direction, duration, delay, skill]);

    return (
      <motion.div
        style={{
          position: "absolute",
          top: `${topPosition}%`,
          left: direction === "left" ? "-100px" : "calc(100% + 100px)",
        }}
        animate={controls}
      >
        <SharkSvg width="100" height="50" />
        <div className="skill-label">{skill}</div>
      </motion.div>
    );
  }
);

interface SkillFishesProps {
  skills: string[];
}

const SkillFishes: React.FC<SkillFishesProps> = ({ skills }) => {
  const sharks = useMemo(() => {
    return skills.map((skill, index) => ({
      skill,
      initialDirection: index % 2 === 0 ? "left" : "right",
      topPosition: 10 + (index * 60) / skills.length,
      delay: Math.random() * 2,
      duration: 5 + Math.random() * 5,
    }));
  }, [skills]);

  return (
    <div className="aquarium">
      {sharks.map((shark) => (
        <Shark key={shark.skill} {...shark} initialDirection={shark.initialDirection as "left" | "right"} />
      ))}
    </div>
  );
};

// Existing Bubbles Component
const Bubbles: React.FC = () => {
  const [bubbles, setBubbles] = useState<
    { id: number; left: string; size: number; duration: number }[]
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) => [
        ...prev,
        {
          id: Date.now(),
          left: `${Math.random() * 100}%`,
          size: Math.random() * 20 + 10,
          duration: Math.random() * 3 + 2,
        },
      ]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      setBubbles((prev) =>
        prev.filter((bubble) => Date.now() - bubble.id < 5000)
      );
    }, 1000);

    return () => clearInterval(cleanupInterval);
  }, []);

  return (
    <div className="bubble-container">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            left: bubble.left,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animation: `rise ${bubble.duration}s linear`,
          }}
        />
      ))}
    </div>
  );
};

export default SkillFishes;