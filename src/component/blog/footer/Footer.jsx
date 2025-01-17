import { useState } from 'react';
import { FaApple, FaTerminal, FaCog } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`footer ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="footer-icons">
                <FaApple className="footer-icon" title="Finder" />
                <FaTerminal className="footer-icon" title="Terminal" />
                <FaCog className="footer-icon" title="Settings" />
            </div>
        </div>
    );
}

export default Footer;