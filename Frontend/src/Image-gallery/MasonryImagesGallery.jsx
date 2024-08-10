import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import galleryImages from './galleryImage'
import './MasonryImagesGallery.css'

const MasonryImagesGallery = () => {
   return (
      <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:1, 992:4}}>
         <div className='masonryImage' gutter='1rem'>
            {
               galleryImages.map((item, index) => (
                  <img className='masonry_img' src={item} key={index} alt="" />
               ))
            }
         </div>
      </ResponsiveMasonry>
   )
}

export default MasonryImagesGallery;