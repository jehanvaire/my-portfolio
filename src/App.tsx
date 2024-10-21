import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { ThemeProvider } from "./ThemeContext";
import './App.css';

const Home = lazy(() => import("./pages/Home/Home"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <main className="main-content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;