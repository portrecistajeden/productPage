import './footer.css';
import logo from '../photos/logo/Fujifilm_logo_logotype.png';

export default function Footer () {
    return (
        <div className='footerWrapper'>
            <img className='footerLogo' src={logo}/>
            <p className='footerText'>
                © 2023 Not a real fujifilm, please don't sue me 
            </p>
        </div>
    )
}