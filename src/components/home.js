import './home.css';
import { useEffect, useRef, useState } from 'react';

export default function Home () {

    const images = ['slideshow1.jpg',
                    'slideshow2.jpg',
                    'slideshow3.jpg',
                    'slideshow4.jpg'];

    const [index, setIndex] = useState(0);
    const delay = 5000;
    const timeoutRef = useRef(null);
    
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
    }


    useEffect(()=> {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) => 
                prevIndex===images.length -1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    },[index])

    return(
        <div id='homepageWrapper'>
            <div className='slideShow'>
                <div className='slideShowSlider' style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}>
                    {images.map((_, idx) => 
                        <img className={`slide ${index === idx ? "activeSlide" : ""}`} ket={idx} src={require(`../photos/homepage/${images[idx]}`)}/>
                    )}
                </div>

                <div className="slideShowDots">
                    {images.map((_, idx) => (
                        <div key={idx} 
                            className={`slideShowDot ${index === idx ? "active" : ""}`} 
                            onClick={() => {setIndex(idx)}}>
                        </div>
                    ))}
                </div>
            </div>
            <div className='textBox'>

            </div>
        </div>
    );
};