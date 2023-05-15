import './banner.css'
import { useEffect } from 'react';

export default function Banner({imgSource, bannerContent}) {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('showBanner');  
                entry.target.classList.remove('hiddenBanner');              
            }
            else {
                entry.target.classList.remove('showBanner');
                entry.target.classList.add('hiddenBanner'); 
            }
        });
    }
    );  

    useEffect(() =>{
        const hiddenElements = document.querySelectorAll('.hiddenBanner');
        hiddenElements.forEach((element) => {observer.observe(element)});
    }, [])


    return(
        <div className='bannerContainer'>

            <div className='bgImage' style={{backgroundImage:`url(${imgSource})`}}></div>
            <div className='bannerWrapper hiddenBanner' >
                <h2 className='boldHeaderWhite'>
                    {bannerContent['firstLine'].normal} <span className='transparentText'>{bannerContent['firstLine'].transparent}</span>
                </h2>
                <h3 className='boldHeaderWhite'>
                    <span className='transparentText'>{bannerContent['secondLine'].transparent}</span> {bannerContent['secondLine'].normal}
                </h3>
                <a href='/#' className='aboutButton'>
                    {bannerContent['buttonText']}
                </a>
            </div>
        </div>
    )
}