import React, { useEffect, useState, useMemo } from "react";
import "./skills.css";
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
const Shark: React.FC<SharkProps> = React.memo(({ skill, initialDirection, topPosition, delay, duration }) => {
  const [color, setColor] = useState<string>("#ffffff");
  const [direction, setDirection] = useState<"left" | "right">(initialDirection);
  const controls = useAnimation();

  useEffect(() => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    setColor(randomColor);
  }, []);

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          x: direction === "right" ? window.innerWidth - 600 : -50,
          transition: { duration, ease: "linear" },
        });
        setDirection(prev => prev === "right" ? "left" : "right");
      }
    };
    animate();
  }, [controls, direction, duration]);

  // Function to calculate font size based on skill name length
  const calculateFontSize = (skillName: string) => {
    const baseSize = 16; // Base font size in pixels
    const maxLength = 10; // Maximum length for full size
    const minSize = 10; // Minimum font size in pixels

    if (skillName.length <= maxLength) {
      return `${baseSize}px`;
    } else {
      const reducedSize = Math.max(baseSize - (skillName.length - maxLength), minSize);
      return `${reducedSize}px`;
    }
  };

  // Function to determine text color based on background brightness
  const getTextColor = (bgColor: string) => {
    // Convert hex to RGB
    const r = parseInt(bgColor.slice(1, 3), 16);
    const g = parseInt(bgColor.slice(3, 5), 16);
    const b = parseInt(bgColor.slice(5, 7), 16);
    
    // Calculate brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    
    // Return black for bright backgrounds, white for dark
    return brightness > 128 ? '#000000' : '#ffffff';
  };

  // Memoize the text color calculation
  const textColor = useMemo(() => getTextColor(color), [color]);

  return (
    <motion.div
      className={`fish ${direction === "left" ? "" : "fish-mirror"}`}
      animate={controls}
      initial={{ x: direction === "right" ? -50 : window.innerWidth - 500 }}
      style={{ top: `${topPosition}%` }}
      aria-label={`Shark representing skill ${skill}`}
    >
      <SharkSvg className="fish-svg" style={{ fill: color }} />
      <span 
        className="skill-text" 
        style={{ 
          fontSize: calculateFontSize(skill),
          color: textColor
        }}
      >
        {skill}
      </span>
    </motion.div>
  );
});

interface SkillFishesProps {
  skills: string[];
}

const SkillFishes: React.FC<SkillFishesProps> = ({ skills }) => {
  const [sharks, setSharks] = useState<SharkProps[]>([]);

  useEffect(() => {
    // Shuffle skills to randomize the order
    const shuffledSkills = [...skills].sort(() => Math.random() - 0.5);

    // Initialize sharks with random properties
    const initialSharks: SharkProps[] = shuffledSkills.slice(0, 10).map((skill) => ({
      skill,
      initialDirection: Math.random() > 0.5 ? "right" : "left",
      topPosition: Math.floor(Math.random() * 70),
      delay: Math.random() * 5, // 0 - 2 seconds
      duration: Math.random() * 5 + 10, // 10 - 15 seconds
    }));

    setSharks(initialSharks);
  }, [skills]);

  return (
    <div className="aquarium">
      {/* Bubbles */}
      <Bubbles />
      {/* Sharks */}
      <div className="fish-container">
        {sharks.map((shark, index) => (
          <Shark key={`${shark.skill}-${index}`} {...shark} />
        ))}
      </div>
      <div className="aquarium-ground"></div>
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