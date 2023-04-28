import './blogPost.css';

import { useEffect } from 'react';

export default function BlogPost({imgSource, content, photoOnLeft}) {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('showBlogPost');  
                entry.target.classList.remove('hiddenBlogPost');              
            }
            else {
                entry.target.classList.remove('showBlogPost');
                entry.target.classList.add('hiddenBlogPost'); 
            }
        });
    }
    );  

    useEffect(() =>{
        const hiddenElements = document.querySelectorAll('.hiddenBlogPost');
        hiddenElements.forEach((element) => {observer.observe(element)});
    }, [])

    return( 
    <div className='blogPostWrapper'>
        {photoOnLeft ? 
        <>
        <div className={`blogPostImage imageFrame ${photoOnLeft ? 'frameLeft' : 'frameRight'} hiddenBlogPost`}>
        </div>
        <div className='blogPostImage'>
                <img src={imgSource} />
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
        <div className={`blogPostImage imageFrame ${photoOnLeft ? 'frameLeft' : 'frameRight'} hiddenBlogPost`}>
        </div>
        <div className='blogPostImage'>
                <img src={imgSource} />
        </div> 
        </>
        }
    </div>
    )
}