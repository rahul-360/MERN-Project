import React, { useRef } from 'react'
import './search-bar.css'
import { Col, Form, FormGroup } from 'reactstrap'

import { RiMapPin2Line } from "react-icons/ri";
import { RiMapPinTimeLine } from "react-icons/ri";
import { RiGroupLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
   const locationRef = useRef('')
   const distanceRef = useRef(0)
   const maxGroupSizeRef = useRef(0)

   const searchHandler = async() => {
      const location = locationRef.current.value
      const distance = distanceRef.current.value
      const maxGroupSize = maxGroupSizeRef.current.value

      if (location === '' || distance === '' || maxGroupSize === '') {
         return alert('All fields are required!')
      }

   }

   return <Col className="search" lg="12">
      <div className="search__bar">
         <Form className='searchform d-flex align-items-center'>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
               <span><i class='ri-map-pin-line'><RiMapPin2Line/></i></span>
               <div className='padd'>
                  <h6>Location</h6>
                  <input type="text" placeholder='Where are you going?' ref={locationRef}/>
               </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
               <span><i class='ri-map-pin-time-line'><RiMapPinTimeLine/></i></span>
               <div className='padd'>
                  <h6>Distance</h6>
                  <input type="number" placeholder='Distance k/m' ref={distanceRef}/>
               </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-last'>
               <span><i class='ri-group-line'><RiGroupLine/></i></span>
               <div className='padd'>
                  <h6>Max People</h6>
                  <input type="number" placeholder='0' ref={maxGroupSizeRef}/>
               </div>
            </FormGroup>

            <span className='search__icon' type='submit' onClick={searchHandler}>
               <i class='ri-search-line'><RiSearchLine/></i>
            </span>

         </Form>
      </div>
   </Col>
}

export default SearchBar