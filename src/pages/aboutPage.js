import './aboutPage.css';
import texts from '../texts/homepageTexts.json'
import BlogPost from '../components/blogPost';
import img4 from '../photos/homepage/slideshow4.jpg';
import Footer from '../components/footer';

export default function AboutPage() {
    return (
        <div className="aboutWrapper">
            <span style={{height: '200px', width: '90vw'}}></span>
            <h2 className='homepageHeader'>ABOUT <span className='transparentText'>FUJIFILM</span></h2>   
            <div className='aboutTextsWrapper'>
                <p>
                    {texts.aboutPage.firstLine}
                </p>        
                <p>
                    {texts.aboutPage.secondLine}
                </p>
            </div>

            <BlogPost imgSource={img4} content={texts.blogPost1} photoOnLeft={true}/>

            <Footer />
        </div>
    )
}