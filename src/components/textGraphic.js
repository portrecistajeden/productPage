import './textGraphic.css'
import { useEffect } from 'react';

export default function TextGraphic({imgSource}) {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('showTextGraphic');  
                entry.target.classList.remove('hiddenTextGraphic');              
            }
            else {
                entry.target.classList.remove('showTextGraphic');
                entry.target.classList.add('hiddenTextGraphic'); 
            }
        });
    }
    );  

    useEffect(() =>{
        const hiddenElements = document.querySelectorAll('.hiddenTextGraphic');
        hiddenElements.forEach((element) => {observer.observe(element)});
    }, [])

    return(
        <div style={{overflow:'hidden', height: '500px'}}>

        <div className='textGraphicWrapper hiddenTextGraphic'>
            <img src={imgSource}/>
            <h2 className='boldHeaderWhite'>
                THE FUJIFILM <span className='transparentText'>STORY</span>
            </h2>
            <h3 className='boldHeaderWhite'>
                <span className='transparentText'>TRULLY</span> AWESOME
            </h3>
            <a href='/#' className='aboutButton'>
                ABOUT
            </a>
        </div>
        </div>
    )
}