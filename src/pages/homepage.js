import './homepage.css';
import FullscreenSlider from '../components/fullscreenSlider';
import ProductsSlider from '../components/productsSlider';
import GridGallery from '../components/gridGallery';
import { galleryItems } from '../data/galleryItems';
import { latestItems } from '../data/latestItems';
import { useState, useEffect } from "react";
import TextGraphic from '../components/textGraphic';
import image from '../photos/latest/latest6.jpg'

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
        }, []); 
        return windowSize;
    }
   
    return(
        <div id='homepageWrapper'>            
            <FullscreenSlider images={images}/>   

            <h1 className='openingHeader boldHeader' onClick={() => scrollDown(viewportSize.height)}>
                <span className='transparentText'>MODERN</span> PHOTOGRAPHY
                <br/>BEGINS <span className='transparentText'>HERE</span>
                <br/>↓
            </h1>

            <h2 className='homepageHeader' id='latestProducts'><span className='transparentText'>LATEST</span> PRODUCTS</h2>

            <ProductsSlider products={latestItems}/> 

            <h2 className='homepageHeader'>SHOP BY <span className='transparentText'>CATEGORY</span></h2>

            <GridGallery galleryItems={galleryItems}/>      

            <TextGraphic imgSource={image}/>    

        </div>
    );
};