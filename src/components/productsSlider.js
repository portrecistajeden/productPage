import './productsSlider.css';
import { useEffect, useState } from 'react';

export default function ProductsSlider({products}) {

    const [productIndex, setProductIndex] = useState(0);
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

    useEffect(() => {
        setWindowSize(document.documentElement.clientWidth);
    }, [])

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

    useEffect(() => {
        if(productIndex>=dots.length){
            setProductIndex(0);
        }
    },[dots])

    return(
        <div className='latestWrapper'>

            <div className='slideShow latestSlideShow'>
                <div className='slideShowSlider' style={{transform: `translate3d(${-productIndex * 100}%, 0, 0)`}}>
                    {products.map((elem, idx) => (
                        <div className='slide latestSlide' key={idx} style={{margin:`0 ${latestProductMargin}px`}}>
                            <a href='/#' style={{textDecoration: 'none'}}>
                                <img className='latestImg' src={require(`../photos/latest/${elem.path}`)}/>

                                <p className='slideText'>{elem.text}</p>
                                <p className='secondarySlideText'>{elem.secondaryText}</p>
                                <p className='priceText'>{elem.price}</p>
                            </a>
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
    );
}