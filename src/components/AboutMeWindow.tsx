interface AboutMeWindowProps {
    onClose: () => void;
}

export default function AboutMeWindow({ onClose }: AboutMeWindowProps) {
    return (
        <div className="floating-window-aboutme">
            <div className="window">
                <div className="window-header">
                    <div className="window-title">About Me</div>
                    <div className="window-close" onClick={onClose}>X</div>
                </div>
                <div className="window-content">
                <div className="aboutme-container">
                    <p className="AboutMe-text">I'm Jenny Svensson, a dedicated individual on a journey to becoming a Frontend Developer.
                        In my world, nostalgia is a powerful force. I find joy in exploring the past and infusing its essence into my work,
                        creating interfaces that evoke familiar emotions. This blend of modern technology and sentimentality allows me to connect with users on a deeper level.
                        <br /><br />
                        Beyond the screen, you'll find me embracing an active lifestyle. Whether it's a workout session or spending quality time with my beloved family,
                        I believe in nurturing both my mind and body. These moments of balance fuel my creativity and inspire me to bring fresh ideas to the table.
                        <br /><br />
                        Please join me on this exciting journey as I transform code into captivating experiences.
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
}