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
                            <img src="#" className="img-container" />
                            <h4>Project 1</h4>
                        </div>
                        <div className="project-2">
                            <img src="#" className="img-container" />
                            <h4>Project 2</h4>
                        </div>
                        <div className="project-3">
                            <img src="#" className="img-container" />
                            <h4>Project 3</h4>
                        </div>
                        <div className="project-4">
                            <img src="#" className="img-container" />
                            <h4>Project 4</h4>
                        </div>

                        <p>Here are some of my projects, please feel free to connect with me on GitHub for more.</p>

                    </div>
                </div>
            </div>
        </div>
    );
}
