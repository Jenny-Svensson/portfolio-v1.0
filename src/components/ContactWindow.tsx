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

                        <p>Contact info.</p>

                    </div>
                </div>
            </div>
    );
}
