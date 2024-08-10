import React , {useState, useEffect } from 'react'
import CommonSection from '../shared/CommonSection'

import '../style/Travel.css';

import tourData from '../file/data/tours'
import TourCard from './../shared/TourCard'
import SearchBar from '../shared/SearchBar';
import Newsletter from './../shared/Newsletter';
import { Container, Row, Col } from 'reactstrap';

const Travel =() => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
    window.scrollTo(0,0)
 }, [page])

  return (
    <>
      <CommonSection title={"All Tours"}/>
      <section className='First pt-2'>
        <Container>
          <Row>
            <SearchBar/>
          </Row>
        </Container>
      </section>

      <section className='Second pt-2'>
        <Container>
          <Row>
            {
              tourData?.map(tour => (<Col lg='3' md='6' sm='6' className='mb-4' key={tour.id}> <TourCard tour={tour} /> </Col>))
            }

            <Col lg='12'>
              <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
              {[...Array(pageCount).keys()].map(number => (
                <span key={number} onClick={() => setPage(number)}
                  className={page === number ? 'active__page' : ''}>
                  {number + 1}
              </span>
              ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='Third'>
      <Newsletter/>
      </section>
      
    </>
  )
}

export default Travel