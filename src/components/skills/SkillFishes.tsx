import React, { useEffect, useState } from "react";
import "./skills.css";

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
    <div className="aquarium">
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
      <div className="aquarium-ground"></div>
    </div>
  );
};

export default Bubbles;
