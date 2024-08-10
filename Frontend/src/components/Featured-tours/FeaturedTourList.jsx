import React from 'react'
import './FeaturedTourList.css'

import TourCard from '../../shared/TourCard'
import tourData from '../../file/data/tours'
import { Col } from 'reactstrap'



const FeaturedTourList = () => {

   return (
      <>

         {
            tourData?.map(tour => (
               <Col lg='3' md='4' sm='6' className='FeaturedTourList mb-2' key={tour.id}>
                  <TourCard tour={tour} />
               </Col>
            ))
         }
      </>
   )
}

export default FeaturedTourList 