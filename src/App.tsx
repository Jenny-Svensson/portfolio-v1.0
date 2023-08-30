import { useState } from 'react';
import './App.css'
import AboutMeWindow from './components/AboutMeWindow';
import ProjectWindow from './components/ProjectWindow';
import ContactWindow from './components/ContactWindow';

function App() {
  const [openAboutMe, setOpenAboutMe] = useState(false);
  const [openProject, setOpenProject] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  const openAboutMeWindow = () => {
    setOpenAboutMe(true);
  }

  const closeAboutMeWindow = () => {
    setOpenAboutMe(false);
  };

  const openProjectWindow = () => {
    setOpenProject(true);
  }

  const closeProjectWindow = () => {
    setOpenProject(true);
    (false);
  };

  const openContactWindow = () => {
    setOpenContact(true);
  }

  const closeContactWindow = () => {
    setOpenContact(false);
  };


  return (
    <>

      <div className="window">
        <div className="window-header">
          <div className="window-title">Jenny Svensson - Portfolio</div>
          <div className="window-close">X</div>
        </div>
        <div className="window-content">
          <div className="Homepage-container">

            <span className="Greeting-text">Hello,</span>

            <h3>
              My name is Jenny Svensson
              and I'm a soon-to-be Frontend Developer
              based in Malmö, Sweden.
            </h3>

            <img
              src="src\assets\img\Untitled-1.png"
              className="AboutMe-img"
              alt="a shiba dog with japanese theme background with sakura and a mountain" />

            <div>
              <button onClick={openAboutMeWindow}>About me</button>
              { /** if the value on the left of && is true, the value on the right is evaluated and returned **/}
              {openAboutMe && (<AboutMeWindow onClose={closeAboutMeWindow} />)}

              <button onClick={openProjectWindow}>Project</button>
              {openProject && (<ProjectWindow onClose={closeProjectWindow} />)}

              <button onClick={openContactWindow}>Contact</button>
              {openContact && (<ContactWindow onClose={closeContactWindow} />)}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App;
