import './style.css'
import react from './images/react.png'
import node from './images/node.png'
import redux from './images/redux.png'
import javascript from './images/javascript.png'
import handlebars from './images/handlebars.png'
import express from './images/express.png'
import less from './images/less.png'

function Gallery() {
    return <div className='Lending-gallery'>
        <img src={javascript} className='Lending-galleryImage'/>
        <img src={react} className='Lending-galleryImage'/>
        <img src={redux} className='Lending-galleryImage'/>
        <img src={less} className='Lending-galleryImage'/>
        <img src={node} className='Lending-galleryImage'/>
        <img src={express} className='Lending-galleryImage'/>
        <img src={handlebars} className='Lending-galleryImage'/>
    </div>
}

export default Gallery