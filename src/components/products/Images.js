import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../../css/product.css"

const Images = ({ product: { thumbnail, images } }) => {
    const [mainImage, setMainImage] = useState();

    return (
        <div className='image-wrapper'>
            <div id="image-contener">
                <img src={mainImage ? mainImage : thumbnail ? thumbnail : images[0]} alt='' />
            </div>
            <div className='chose-image'>
                {images.map((image) => { return <div className='wrapp-image'><img src={image} alt='' onClick={() => setMainImage(image)} /> </div> })}
            </div>
        </div >
    )
}

export default Images;