import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import photoImages from './photoImage'

const photoGallery = () => {
   return (
      <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:1, 992:4}}>
         <Masonry gutter='1rem'>
            {
               photoImages.map((item, index) => (
                  <img className='photo__img' src={item} key={index} alt="" 
                  style={{'width':'100%', 'height':'500px', 'display':'block', 'borderRadius':'10px'}}/>
               ))
            }
         </Masonry>
      </ResponsiveMasonry>
   )
}

export default photoGallery