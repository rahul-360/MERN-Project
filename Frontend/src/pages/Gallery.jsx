import React from 'react'

import '../style/Gallery.css'

import { Container, Row, Col } from 'reactstrap'
import Subtitle from './../shared/subtitle'
import PhotoGallery from '../components/Photo-gallery/photoGallery'

const Gallery = () => {
  return (
    <section className='Gallery'>
         <Container>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Gallery'} />
                  <h2 className="gallery__title">Visit our customers tour gallery</h2>
               </Col>
               <Col lg='12'>
               <PhotoGallery />
               </Col>
            </Row>
         </Container>
    </section>
  )
}

export default Gallery