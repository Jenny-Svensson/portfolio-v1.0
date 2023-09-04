interface ProjectWindowProps {
    onClose: () => void;
}

export default function ProjectWindow({ onClose }: ProjectWindowProps) {
    return (
        <div className="floating-window-project">
            <div className="window">
                <div className="window-header">
                    <div className="window-title">My Projects</div>
                    <div className="window-close" onClick={onClose}>X</div>
                </div>
                <div className="window-content">
                    <div className="project-container">
                        <div className="project-1">
                            <a href="https://github.com/Jenny-Svensson/blackjack-typescript"><img src="src/assets/img/typescript-blackjack.png" alt="picture of a blackjack board where player starts with two 10s and dealer starts with a 10" className="img-container" /></a>
                            <h4>Blackjack game</h4>
                        </div>
                        <div className="project-2">
                        <a href="https://github.com/Jenny-Svensson/bookAPI"><img src="src/assets/img/js-bookfinder.png" className="img-container" /></a>
                            <h4>Bookfinder</h4>
                        </div>
                        <div className="project-3">
                        <a href="https://github.com/Jenny-Svensson/passwordGenerator"><img src="src/assets/img/js-passwordgenerator.png" className="img-container" /></a>
                            <h4>Password generator</h4>
                        </div>
                        <div className="project-4">
                        <a href="#"><img src="#" className="img-container" /></a>
                            <h4>Project 4</h4>
                        </div>

                        <span>These are some of my projects, feel free to check my GitHub for more!</span>

                    </div>
                </div>
            </div>
        </div>
    );
}
