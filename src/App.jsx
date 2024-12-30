
import './App.scss'
import React, {useState} from 'react';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Aside from '../src/components/Aside/Aside';
import Hero from './components/Home/Home';
import About from '../src/components/About/About';
import Services from '../src/components/Services/Services';
import Skills from '../src/components/Skills/Skills';
import Education from '../src/components/Education/Education';
import Experience from '../src/components/Experience/Experience';
import Work from '../src/components/Work/Work';
import Contact from '../src/components/Contact/Contact';
import emailjs from '@emailjs/browser'

emailjs.init("C6WVnCIEbfAHvufTP");

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <button 
        className="nav-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle navigation"
      >
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      
      <Aside isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <main className="main-content">
        <Hero id="home" />
        <About id="about" />
        <Services id="services" />
        <Skills id="skills" />
        <Work id="work" />
        {/* <Education id="education" />
        <Experience id="experience" /> */}
        <Contact id="contact" />
      </main>
    </div>
  );
}

export default App
