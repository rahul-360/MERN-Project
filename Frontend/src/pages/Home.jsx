import React from "react";
import "../style/Home.css";
import { Container, Row, Col } from "reactstrap";

import worldImg from "../file/image/world.png";
import heroImg from "../file/image/Travel1.jpg";
import heroImg02 from "../file/image/Travel2.jpg";
import experienceImg from "../file/image/experience.jpg";
import heroVideo from "../file/image/hero-video.mp4";

import Subtitle from "./../shared/subtitle";
import SearchBar from "./../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import NewsLetter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      <section>
        <section className="first">
          <Container>
            <Row>
              <Col lg="6">
                <div className="hero_content">
                  <div className="hero_subtitle d-flex align-items-center">
                    <Subtitle subtitle={"Know Before You Go"} />
                    <img src={worldImg} alt="" />
                  </div>
                  <h1>
                    Traveling opens the door to creating <span> memories</span>
                  </h1>
                  <p>
                    “Travelling – it leaves you speechless, then turns you into
                    a storyteller.”
                  </p>
                </div>
              </Col>

              <Col lg="2">
                <div className="hero_img-box">
                  <img src={heroImg} alt="" />
                </div>
              </Col>
              <Col lg="2">
                <div className="hero_img-box hero__video-box mt-4">
                  <video src={heroVideo} alt="" controls />
                </div>
              </Col>
              <Col lg="2">
                <div className="hero_img-box mt-5">
                  <img src={heroImg02} alt="" />
                </div>
              </Col>

              <Col className="SearchBar">
                <SearchBar />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="second">
          <Container>
            <Row>
              <div className="serviceList">
                <Col lg="3">
                  <h5 className="services_subtitle">What we serve</h5>
                  <h2 className="services_title">We offer our best services</h2>
                </Col>
                <ServiceList />
              </div>
            </Row>
          </Container>
        </section>

        <section className="third">
          <Container>
            <Row>
              <Col lg="12" className="explore mb-2">
                <Subtitle subtitle={"Explore"} />
                <h2 className="featured_tour-title">Our featured tours</h2>
              </Col>

              <Col className="featuredTourList">
                <FeaturedTourList />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="fourth">
          <Container>
            <Row>
              <Col lg="6">
                <div className="experience_content">
                  <Subtitle subtitle={"Experience"} />
                  <h2>
                    With our all experience <br /> we will serve you
                  </h2>
                  <p>
                    “The gladdest moment in human life, me thinks, is a
                    departure into unknown lands.”
                    <br /> Quas aliquam, hic tempora inventore suscipit unde.{" "}
                  </p>
                </div>

                <div className="counter_wrapper d-flex align-items-center gap-5">
                  <div className="counter_box">
                    <span>12k+</span>
                    <h6>Successful trip</h6>
                  </div>
                  <div className="counter_box">
                    <span>2k+</span>
                    <h6>Regular clients</h6>
                  </div>
                  <div className="counter_box">
                    <span>15</span>
                    <h6>Year experience</h6>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="experience_img">
                  <img src={experienceImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="fifth">
          <Container>
            <Row>
              <Col lg="12">
                <Subtitle subtitle={"Gallery"} />
                <h2 className="gallery_title">
                  Visit our customers tour gallery
                </h2>
              </Col>

              <Col lg="12">
                <MasonryImagesGallery />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="sixth">
          <Container>
            <Row>
              <Col lg="12">
                <Subtitle subtitle={"Fans Love"} />
                <h2 className="testimonial_title">
                  What our fans say about us
                </h2>
              </Col>
              <Col className="Testimonials" lg="12">
                <Testimonials />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="seven">
          <NewsLetter />
        </section>
      </section>
    </>
  );
};

export default Home;
