import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects';
import Service from './components/Service/Service';
import Design from './components/Design/Design';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Skills/>
      <Design/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
