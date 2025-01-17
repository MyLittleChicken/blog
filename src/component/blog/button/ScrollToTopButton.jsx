import { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        const postListElement = document.querySelector('.post-list');
        if (postListElement) {
            postListElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            &#8679;
        </div>
    );
}

export default ScrollToTopButton;