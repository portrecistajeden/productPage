import './homepage.css';
import FullscreenSlider from '../components/fullscreenSlider';
import ProductsSlider from '../components/productsSlider';
import GridGallery from '../components/gridGallery';
import { galleryItems } from '../data/galleryItems';
import { latestItems } from '../data/latestItems';
import { useState, useEffect } from "react";
import Banner from '../components/banner';
import image6 from '../photos/latest/latest6.jpg';
import image4 from '../photos/latest/latest4.jpg';
import image9 from '../photos/latest/latest9.jpg';
import texts from '../texts/homepageTexts.json';
import BlogPost from '../components/blogPost';
import img1 from '../photos/homepage/slideshow1.jpg';
import img2 from '../photos/homepage/slideshow2.jpg';
import img3 from '../photos/homepage/slideshow3.jpg';
import img4 from '../photos/homepage/slideshow4.jpg';
import Footer from '../components/footer';

export default function Homepage () {
    
    const viewportSize = useWindowSize();

    const images = [img1, img2, img3, img4];

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
            </h1>

            {/* <h2 className='homepageHeader' id='latestProducts'><span className='transparentText'>LATEST</span> PRODUCTS</h2>

            <ProductsSlider products={latestItems}/>  */}

            <h2 className='homepageHeader'>SHOP BY <span className='transparentText'>CATEGORY</span></h2>

            <GridGallery galleryItems={galleryItems}/>      

            <Banner imgSource={image6} bannerContent={texts.banner1} transparentWords={['STORY', 'TRULLY']}/>    

            <BlogPost imgSource={img1} content={texts.blogPost1} photoOnLeft={true}/>

            <BlogPost imgSource={image9} content={texts.blogPost1} photoOnLeft={false}/>

            <Footer />
        </div>
    );
};