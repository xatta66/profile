import React, { useRef } from "react";
import About from "./components/About/about";
import Contacts from "./components/Contacts/contacts";
import Projects from "./components/Profile/projects";
import './App.css';


function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({  behavior: 'smooth' });
  };

  return (
    <div className="App">
      <div className="header" >
        <button className='headerButtons' onClick={() => scrollToRef(aboutRef)}> Обо мне </button>
        <button className='headerButtons' onClick={() => scrollToRef(projectsRef)}> Мои работы </button>
        <button className='headerButtons' onClick={() => scrollToRef(contactsRef)}> Контакты </button>
      </div>
      <div className="restApp">
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Contacts ref={contactsRef} />
      </div>
    </div>
  );
}

export default App;



