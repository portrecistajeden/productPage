import './home.css';
import { useEffect, useRef, useState } from 'react';

export default function Home () {

    const images = ['slideshow1.jpg',
                    'slideshow2.jpg',
                    'slideshow3.jpg',
                    'slideshow4.jpg'];

    const latest = ['latest1.jpg',
                    'latest2.jpg',
                    'latest3.jpg',
                    'latest4.jpg',
                    'latest5.jpg',
                    'latest6.jpg',
                    'latest7.jpg',
                    'latest8.jpg',
                    'latest9.jpg',
                    'latest10.jpg',];

    const [index, setIndex] = useState(0);
    const [productIndex, setProductIndex] = useState(0);
    const delay = 5000;
    const timeoutRef = useRef(null);
    const latestProductWidth = 400;
    
    const [windowSize, setWindowSize] = useState(document.documentElement.clientWidth);
    let dots = [];

    const getDotsArray = (latestProductsOnScreen) => {
        let dots = [];
        for(let i=0; i < latestProductsOnScreen; i++){
            dots.push(i);
        }
        return dots;
    }
    dots = getDotsArray(Math.ceil(10/Math.floor(document.documentElement.clientWidth/latestProductWidth)));
    let latestProductMargin = (windowSize - Math.floor(windowSize/latestProductWidth) * latestProductWidth)/(Math.floor(windowSize/latestProductWidth) * 2);

    
    
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([document.documentElement.clientWidth]);
            dots = getDotsArray(Math.ceil(10/Math.floor(windowSize/latestProductWidth)));
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);


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

    useEffect(() => {
        if(productIndex>=dots.length){
            setProductIndex(0);
        }
    },[dots])

    return(
        <div id='homepageWrapper'>
            <div className='slideShow homeGallerySlideShow'>
                <div className='slideShowSlider' style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}>
                    {images.map((_, idx) => 
                        <img className={`slide homeGallerySlide ${index === idx ? "activeSlide" : ""}`} key={idx} src={require(`../photos/homepage/${images[idx]}`)}/>
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
            
            <h2 id='latestProducts'>Latest products</h2>

            <div className='latestWrapper'>
                <div className='slideShow latestSlideShow'>
                    <div className='slideShowSlider' style={{transform: `translate3d(${-productIndex * 100}%, 0, 0)`}}>
                        {latest.map((_, idx) => (
                            <div className='slide latestSlide' key={idx} style={{margin:`0 ${latestProductMargin}px`}}>
                                <img className='latestImg' src={require(`../photos/latest/${latest[idx]}`)}/>
                            </div>
                        ))}
                    </div>

                    <div className="slideShowDots latestProductsDots">
                    {dots.map((_, idx) =>
                        <div key={idx} 
                            className={`slideShowDot dotsLatest ${productIndex === idx ? "active" : ""}`} 
                            onClick={() => {setProductIndex(idx)}}>
                        </div>
                    )}
                </div>
                </div>
            </div>
        </div>
    );
};