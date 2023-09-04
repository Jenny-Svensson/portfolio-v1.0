import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface ContactWindowProps {
    onClose: () => void;
}

export default function ProjectWindow({ onClose }: ContactWindowProps) {
    return (
        <div className="floating-window-contact">
            <div className="window">
                <div className="window-header">
                    <div className="window-title">Contact info</div>
                    <div className="window-close" onClick={onClose}>X</div>
                </div>
                <div className="window-content">
                    <div className="contact-container">
                        <h4>Let's talk!</h4>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto: ntlj_@hotmail.com">ntlj_@hotmail.com</a> <br />
                            <FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/Jenny-Svensson">Jenny-Svensson</a> <br />
                            <FontAwesomeIcon icon={faLinkedin} /> <a href="https://www.linkedin.com/in/jenny-svensson-210376157/">Jenny Svensson</a>
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
}
