import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import GlobalReputation from './components/GlobalReputation';
import Community from './components/Community';
import WriteupBlog from './components/WriteupBlog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';
import AudioPlayer from './components/AudioPlayer';
import { useTheme } from './context/ThemeContext';

function App() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 relative overflow-hidden">
        <BackgroundEffect />
        <Header />
        <main>
          <Hero />
          <About />
          <Expertise />
          <Experience />
          <Certifications />
          <GlobalReputation />
          <Community />
          <WriteupBlog />
          <Contact />
        </main>
        <Footer />
        <AudioPlayer />
      </div>
    </div>
  );
}

export default App;