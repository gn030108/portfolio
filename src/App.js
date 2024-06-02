import { useRef } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import Project from './component/Project';
import Skill from './component/Skill';
import Top from './component/Top';
import Contact from './component/Contact';

function App() {
  const navbarRef = useRef(null); // 네비게이션 바의 ref
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);



  return (
    <div className="App">
      <header ref={navbarRef}>
        <Navbar 
          refs={{navbarRef, aboutRef, skillRef, projectRef, contactRef}}/>
      </header>
      <Top />
      <section ref={aboutRef}><About/></section>
      <section ref={skillRef}><Skill/></section>
      <section ref={projectRef}><Project/></section>
      <section ref={contactRef}><Contact/></section>
    </div>
  );
}

export default App;