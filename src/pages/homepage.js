import './homepage.css';
import FullscreenSlider from '../components/fullscreenSlider';
import ProductsSlider from '../components/productsSlider';
import GridGallery from '../components/gridGallery';
import { galleryItems } from '../data/galleryItems';
import { latestItems } from '../data/latestItems';
import { useState, useEffect } from "react";

export default function Homepage () {
    
    const viewportSize = useWindowSize();

    const images = ['slideshow1.jpg',
                    'slideshow2.jpg',
                    'slideshow3.jpg',
                    'slideshow4.jpg'];

    const scrollDown = (y) => {
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }

    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
          width: undefined,
          height: undefined,
        });
        useEffect(() => {
          // Handler to call on window resize
          function handleResize() {
            // Set window width/height to state
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          }
          // Add event listener
          window.addEventListener("resize", handleResize);
          // Call handler right away so state gets updated with initial window size
          handleResize();
          // Remove event listener on cleanup
          return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
        return windowSize;
    }
   
    return(
        <div id='homepageWrapper'>            
            <FullscreenSlider images={images}/>   

            <h1 onClick={() => scrollDown(viewportSize.height)}>
                <span className='transparentText'>MODERN</span> PHOTOGRAPHY
                <br/>BEGINS <span className='transparentText'>HERE</span>
                <br/>↓
            </h1>

            <h2 id='latestProducts'>LATEST PRODUCTS</h2>

            <ProductsSlider products={latestItems}/> 

            <h2>SHOP BY CATEGORY</h2>

            <GridGallery galleryItems={galleryItems}/>          
        </div>
    );
};