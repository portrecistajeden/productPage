import { useState } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import logo from '../photos/logo/Fujifilm_logo_logotype.png';

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
        <div id='navbar'className={`${transparent ? 'visibleNavbar' : 'transparentNavbar'}`}>
            <div className='linkContainer'>
                <Link className='navlink' to='/'><img className='navbarLogo' src={logo}/></Link>
                <Link className='navlink' to='/products'>PRODUCTS</Link>
                <Link className='navlink' to='/about'>ABOUT</Link>
            </div>
        </div>
    );
}