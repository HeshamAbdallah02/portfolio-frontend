// src/App.js
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';
import axios from 'axios';
import './App.css';

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/profile');
        setProfile(response.data);
        
        // Set theme variables
        if (response.data.theme) {
          document.documentElement.style.setProperty('--primary-color', response.data.theme.primaryColor);
          document.documentElement.style.setProperty('--background-color', response.data.theme.backgroundColor);
          document.documentElement.style.setProperty('--text-color', response.data.theme.textColor);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="App">
      <Header />
      <main>
        <section id="home">
          <Hero profile={profile} />
        </section>
        <section id="about">
          <About profile={profile} />
        </section>
        <section id="skills">
          <Skills profile={profile} /> {/* Added profile prop here */}
        </section>
        <section id="projects">
          <Projects profile={profile} />
        </section>
        {/* <section id="contact">
          <Contact />
        </section> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;