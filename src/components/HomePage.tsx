import { useState } from "react";
import AboutMeWindow from './AboutMeWindow'

function AboutMe() {
  const [openAboutMe, setOpenAboutMe] = useState(false);

  const openAboutMeWindow = () => {
    setOpenAboutMe(true);
  }

  const closeAboutMeWindow = () => {
    setOpenAboutMe(false);
  };


  return (
    <>
      <div className="AboutMe-container">

        <span className="Greeting-text">Hello,</span>

        <h3>My name is Jenny Svensson
          and I'm a soon-to-be Frontend Developer
          based in Malmö, Sweden.
        </h3>

        <img
          src="src\assets\img\Untitled-1.png"
          className="AboutMe-img"
          alt="a shiba dog with japanese theme background with sakura and a mountain" />

        <div>
          <button onClick={openAboutMeWindow}>About me</button>
          { /** if the value on the left of && is true, the value on the right is evaluated and returned **/ }
            { openAboutMe && ( <AboutMeWindow onClose={closeAboutMeWindow} /> ) } 
            
          <button>Project</button>
          <button>Contact</button>
        </div>
      </div>
    </>
  )
}

export default AboutMe;