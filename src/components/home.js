import './home.css';
import { useEffect, useRef, useState } from 'react';

export default function Home () {

    const colors = ['#F9E2AF','#009FBD','#77037B'];
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
                prevIndex===colors.length -1 ? 0 : prevIndex + 1
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
                    {colors.map((backgroundColor, index) => 
                        <div className='slide' key={index} style={{backgroundColor}}></div>
                    )}
                </div>

                <div className="slideShowDots">
                    {colors.map((_, idx) => (
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