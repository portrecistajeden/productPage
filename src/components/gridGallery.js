import './gridGallery.css';

export default function GridGallery({galleryItems}) {

    

    const mappedItems = galleryItems.map((elem, index) => 
        <div className={`wrapper ${elem.aspect}`}>
            <div style={{overflow: 'hidden',
                        height: '100%'}}>
                <a href='/#' key={index} className={`imgWrapperAnchor`}>
                    <img className={`gridGalleryImg`} src={require(`../${elem.path}`)} />    
                </a>
                    <p className='gridItemText'>{elem.text}</p>            
            </div>
        </div>
        );

    return(
        <div className='gridGalleryWrapper'>
            <div className='gridGallery'>
                {mappedItems}
            </div>
        </div>
    )
}