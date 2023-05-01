import './fullscreenSlider.css';
import { useEffect, useRef, useState } from 'react';

export default function FullscreenSlider({images}) {

    const timeoutRef = useRef(null);
    const delay = 5000;
    const [index, setIndex] = useState(0);

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

    return (
        <div className='slideShow homeGallerySlideShow'>
                <div className='slideShowSlider' style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}>
                    {images.map((elem, idx) => 
                        <img className={`slide homeGallerySlide ${index === idx ? "activeSlide" : ""}`} key={idx} src={elem}/>
                    )}
                </div>

                <div className="slideShowDots dotsHomeGallery">
                    {images.map((_, idx) => (
                        <div key={idx} 
                            className={`slideShowDot ${index === idx ? "active" : ""}`} 
                            onClick={() => {setIndex(idx)}}>
                        </div>
                    ))}
                </div>
            </div>
    );
}