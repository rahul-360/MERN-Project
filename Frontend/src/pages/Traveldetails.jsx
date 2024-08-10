import React, {useRef, useState} from 'react'
import '../style/Traveldetails.css'

import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import {useParams} from 'react-router-dom'
import tourData from '../file/data/tours'
import calculateAvgRating from '../utilise/avgRating'
import avatar from '../file/image/avatar.png'

import Newsletter from '../shared/Newsletter'
import Booking from '../components/Booking/Booking'


import { RiStarFill } from "react-icons/ri";
import { RiMapPinUserFill } from "react-icons/ri";
import { RiMapPinFill } from "react-icons/ri";
import { BiRupee } from "react-icons/bi";
import { RiGroupFill } from "react-icons/ri";
import { RiPinDistanceFill } from "react-icons/ri";

const Traveldetails = () => {

  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);

  const tour = tourData.find(tour => tour.id === id);

  const { photo, title, desc, price, reviews, city, address, distance, maxGroupSize } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: 'numeric', month: 'long', year: 'numeric' }

  const submitHandler = async e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value

    alert(`${reviewText}, ${tourRating}`);


  }

  return(
    <>
    <section className='Traveldetails'>
      <Container>
        <Row>
          <Col lg="8">

          <div className="tour_content">
            <img src={photo} alt="" />

            <div className='tour_info'>
            <h2>{title}</h2>

            <div className='d-flex align-items-center gap-5'>

              <span className="tour__rating d-flex align-items-center gap-1">
                     <i class='ri-star-fill' style={{'color':'var(--secondary-color)'}}><RiStarFill/></i> {avgRating === 0 ? null : avgRating}
                     {totalRating === 0 ? ('Not rated') : <span>({reviews.length})</span> }
                     
              </span>

              <span>
                    <i class='ri-map-pin-user-fill'><RiMapPinUserFill/></i> {address}
              </span>

            </div>
                    
              <div className='tour_extra-details'>
              
                <span>
                  <i class='ri-map-pin-line'><RiMapPinFill/></i>{city}
                </span>
                <span>
                  <i class='BiRupee'><BiRupee/></i>{price} /Per Person
                </span>
                <span>
                  <i class='RiPinDistanceFill'><RiPinDistanceFill/></i>{distance} k/m
                </span>
                <span>
                  <i class='RiGroupFill'><RiGroupFill/></i>{maxGroupSize} People
                </span>  
                   
              </div>   

                  <h5>Description</h5>
                  <p>{desc}</p>

            </div>

              <div className='tour_reviews mt-4'>
                <h4>Reviews ({reviews?.length} reviews)</h4>

                <Form onSubmit={submitHandler}>

                  <div className='d-flex align-items-center gap-3 mb-4'>

                    <span onClick={() => setTourRating(1)}>
                    <i class='ri-star-fill' style={{'color':'var(--secondary-color)'}}><RiStarFill/></i>
                    </span>
                    <span onClick={() => setTourRating(2)}>
                    <i class='ri-star-fill' style={{'color':'var(--secondary-color)'}}><RiStarFill/></i>
                    </span>
                    <span onClick={() => setTourRating(3)}>
                    <i class='ri-star-fill' style={{'color':'var(--secondary-color)'}}><RiStarFill/></i>
                    </span>
                    <span onClick={() => setTourRating(4)}>
                    <i class='ri-star-fill' style={{'color':'var(--secondary-color)'}}><RiStarFill/></i>
                    </span>
                    <span onClick={() => setTourRating(5)}>
                    <i class='ri-star-fill' style={{'color':'var(--secondary-color)'}}><RiStarFill/></i>
                    </span>
                    
                  </div>

                  <div className='review_input'>
                    <input type='text' ref={reviewMsgRef} placeholder='' required/>
                    <button className='btn btn-primary' type='submit'>Submit</button>
                  </div>

                </Form>

                <ListGroup className='user_reviews'>
                  {
                    reviews?.map(review =>(
                      <div className='review_item'>

                        <img src={avatar} alt='' />

                        <div className='w-100'>
                          <div className='d-flex align-items-center justify-content-between'>
  
                          <div>
                            <h5>Mayank</h5>
                            <p>{new Date ("07-29-2023").toLocaleDateString("en-US", options)}</p>
                          </div>


                          <span className='d-flex align-items-center'>
                            {review.rating}<i class='ri-star-s-fill'><RiStarFill/></i>
                          </span>

                          </div>

                            <h6>Amazing Experience</h6>

                        </div>
                      </div> 
                    ))
                  }
                </ListGroup>
              </div>

            </div>
          </Col>

        <Col lg=''>
          <Booking tour={tour} avgRating={avgRating}/>
        </Col>

        </Row>

      </Container>
      <Newsletter/>
    </section>
  </>
  ) 

}

export default Traveldetails
