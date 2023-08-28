import AboutMe from './AboutMe';

function Windows() {
    return (
        <div className="window">
          <div className="window-header">
            <div className="window-title">Jenny Svensson - Portfolio</div>
            <div className="window-close">X</div>
          </div>
          <div className="window-content">
            <AboutMe />
          </div>
        </div>
      );
    }

export default Windows;