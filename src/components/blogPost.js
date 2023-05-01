import { useElementOnScreen } from '../customHooks';
import './blogPost.css';

export default function BlogPost({imgSource, content, photoOnLeft}) {

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.4
    })

    return( 
    <div ref={containerRef} className='blogPostWrapper'>
        {photoOnLeft ? 
        <>
        <div className={`blogPostImage imageFrame ${photoOnLeft ? 'frameLeft' : 'frameRight'} ${isVisible ? '' : 'hiddenBlogPost'}`}>
        </div>
        <div className={`blogPostImage`}>
                <img className={`${isVisible ? 'showImg' : 'hiddenImg'}`} src={imgSource} />
        </div> 
        </>
        : 
        <>
        </>
        }
        <div className={`blogPostTextWrapper ${photoOnLeft ? 'alignLeft' : 'alignRight'}`}>

            <h2 className='homepageHeader'>
                {content['title'].normal}
                <span className='transparentText'>
                {content['title'].transparent}                    
                </span>
            </h2>
            <p className='blogPostText'>
                {content["text"]}
            </p>
            <a href={content['anchorHREF']} className='blogPostAnchor'>
                {content['anchorText']}
            </a>
        </div>
        {photoOnLeft ? 
        <>
        </>            
        : 
        <>
        <div className={`blogPostImage imageFrame ${photoOnLeft ? 'frameLeft' : 'frameRight'} ${isVisible ? '' : 'hiddenBlogPost'}`}>
        </div>
        <div className={`blogPostImage`}>
                <img className={`${isVisible ? 'showImg' : 'hiddenImg'}`} src={imgSource} />
        </div> 
        </>
        }
    </div>
    )
}