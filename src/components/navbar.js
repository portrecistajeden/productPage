import { useState } from 'react';
import './navbar.css'

export default function Navbar() {

    const [transparent, setTransparent] = useState(false);

    const toggleNavbarTransparency = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 10) {
            setTransparent(true);
        }
        else {
            setTransparent(false);
        }

    }

    window.addEventListener('scroll', toggleNavbarTransparency);

    return (
        <div id='navbar' style={{backgroundColor: `rgba(0, 0, 0, ${transparent ? '1' : '0'})`}}>
            Navbar
        </div>
    );
}