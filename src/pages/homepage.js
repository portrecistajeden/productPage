import './homepage.css';
import FullscreenSlider from '../components/fullscreenSlider';
import ProductsSlider from '../components/productsSlider';

export default function Homepage () {

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

   
    return(
        <div id='homepageWrapper'>            
            <FullscreenSlider images={images}/>   

            <h2 id='latestProducts'>Latest products</h2>

            <ProductsSlider products={latest}/>           
        </div>
    );
};