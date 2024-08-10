import React from 'react'
import "./tour-card.css"
import calculateAvgRating from '../utilise/avgRating';

import { Card, CardBody } from 'reactstrap';
import {Link} from 'react-router-dom';
import { RiMapPin2Line } from "react-icons/ri";
import { RiStarFill } from "react-icons/ri";

const TourCard = ({tour}) => {
   const { id, title, city, photo, price, featured, reviews } = tour;

   const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className='tour_card'>
    <Card>
    <Card>
         <div className='tour_img'>
            <div className="tour__img">
               <img src={photo} alt="tour-img" />
               {featured && <span>Featured</span>}
            </div>
         </div>
      </Card>
      

      <CardBody>
               <div className="card__top d-flex align-items-center justify-content-between">
                  <span className="tour__location d-flex align-items-center gap-1">
                     <i class='ri-map-pin-line'><RiMapPin2Line/></i> {city}
                  </span>
                  <span className="tour__rating d-flex align-items-center gap-1">
                     <i class='ri-star-fill'><RiStarFill/></i> {avgRating === 0 ? null : avgRating}
                     {totalRating === 0 ? ('Not rated') : <span>({reviews.length})</span> }
                     

                  </span>
               </div>

               <h5 className='tour__title'><Link to={`/tour/${id}`}>{title}</Link></h5>

               <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                  <h5>INR {price} <span> /per person</span></h5>

               <button className='btn booking_btn'>
                  <Link to={`/tour/${id}`}>
                     <button className=' booking__btn'>Book Now</button>
                  </Link>
               </button>

               </div>
      </CardBody>
    </Card>


    </div>
  )
}

export default TourCard