import './homepage.css';
import FullscreenSlider from '../components/fullscreenSlider';
import ProductsSlider from '../components/productsSlider';
import GridGallery from '../components/gridGallery';
import { galleryItems } from '../data/galleryItems';
import { latestItems } from '../data/latestItems';

export default function Homepage () {

    const images = ['slideshow1.jpg',
                    'slideshow2.jpg',
                    'slideshow3.jpg',
                    'slideshow4.jpg'];

    

   
    return(
        <div id='homepageWrapper'>            
            <FullscreenSlider images={images}/>   

            <h2 id='latestProducts'>LATEST PRODUCTS</h2>

            <ProductsSlider products={latestItems}/> 

            <h2>SHOP BY CATEGORY</h2>

            <GridGallery galleryItems={galleryItems}/>          
        </div>
    );
};