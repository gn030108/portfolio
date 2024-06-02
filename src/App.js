import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import Project from './component/Project';
import Skill from './component/Skill';
import Top from './component/Top';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <header><Navbar/></header>
      <Top/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
