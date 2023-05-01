import FullscreenSlider from "../components/fullscreenSlider";
import image2 from '../photos/latest/latest2.jpg';
import image9 from '../photos/latest/latest9.jpg';
import image10 from '../photos/latest/latest10.jpg';
import BlogPost from "../components/blogPost";
import texts from '../texts/homepageTexts.json';
import Footer from "../components/footer";

export default function ProductsPage () {

    const images = [image2, image9, image10];

    return (
        <div>
            <FullscreenSlider images={images}/>

            <BlogPost imgSource={image9} content={texts.blogPost1} photoOnLeft={true}/>

            <BlogPost imgSource={image2} content={texts.blogPost1} photoOnLeft={false}/>
            
            <BlogPost imgSource={image10} content={texts.blogPost1} photoOnLeft={true}/>

            <Footer />
        </div>
    )
}