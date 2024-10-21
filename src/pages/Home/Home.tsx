import React, { useEffect } from "react";
import SEO from "../../components/common/SEO/SEO";
import { motion, useAnimation } from "framer-motion";
import ProjectCard from "../../components/common/ProjectCard.tsx/ProjectCard";
import { useTheme } from "../../ThemeContext";
import sudoku from "../../assets/sudoku.jpg";
import event from "../../assets/events.jpg";
import social from "../../assets/social-media.png";
import { useTranslation } from "react-i18next";
import ProfilePic from "../../components/common/ProfilePic/ProfilePic";
import "./Home.css";

const Home: React.FC = () => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const { t } = useTranslation();

  useEffect(() => {
    const startAnimation = async () => {
      try {
        await controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        });
      } catch (error) {}
    };
    startAnimation();
  }, [controls]);

  const projects = [
    {
      title: t("projects.sudoku.title"),
      description: t("projects.sudoku.description"),
      imageUrl: sudoku,
    },
    {
      title: t("projects.eventManagement.title"),
      description: t("projects.eventManagement.description"),
      imageUrl: event,
    },
    {
      title: t("projects.socialNetwork.title"),
      description: t("projects.socialNetwork.description"),
      imageUrl: social,
    },
  ];

  return (
    <div className={`home-container ${theme}`}>
      <SEO
        title={t("home.welcome")}
        description={t("home.about.intro")}
        keywords="home, portfolio, web developer"
      />
      <motion.div
        className="text-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        <h1>{t("home.welcome")}</h1>
        <h2>{t("home.subtitle")}</h2>
      </motion.div>
      <div className="about">
        <ProfilePic />
        <div className="about-text-home">
          <p>{t("home.about.intro")}</p>
          <p>{t("home.about.experience")}</p>
          <p>{t("home.about.personal")}</p>
        </div>
      </div>

      <section className="cta">
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/projects")}
        >
          {t("home.cta")}
        </motion.button>
      </section>
    </div>
  );
};

export default Home;
