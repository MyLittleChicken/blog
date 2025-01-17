import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggleButton.css';

// eslint-disable-next-line react/prop-types
function ThemeToggleButton({ toggleTheme, theme }) {
    return (
        <button className="theme-toggle-button" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
    );
}

export default ThemeToggleButton;