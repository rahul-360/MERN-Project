import React from "react";
import "./Testimonials.css";

import per01 from "../../file/image/Person-1.jpg";
import per02 from "../../file/image/Person-2.jpg";
import per03 from "../../file/image/Person-3.jpg";
import per04 from "../../file/image/Person-4.jpg";
import per05 from "../../file/image/Person-5.jpg";
import per06 from "../../file/image/Person-6.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="per01">
        <p>
          The great glory of travel, to me, is not just what I see that's new to
          me in countries visited, but that in almost every one of them I change
          from an outsider looking in to an insider looking out.
        </p>

        <div className="Per gap-4 mt-3">
          <img src={per01} className="img1" alt="" />
          <div>
            <h6 className="name mb-0 mt-3">Amitosh Kumar</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="per02">
        <p>
          To my mind, the greatest reward and luxury of travel is to be able
          to experience everyday things as if for the first time, to be in a
          position in which almost nothing is so familiar it is taken for
          granted.”
        </p>

        <div className="Per gap-4 mt-3">
          <img src={per02} className="img2" alt="" />
          <div>
            <h6 className="name mb-0 mt-3">Apurva Kumar</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="per03">
        <p>
          The very basic core of a man's living spirit is his passion for
          adventure. The joy of life comes from our encounters with new
          experiences, and hence there is no greater joy than to have an
          endlessly changing horizon, for each day to have a new and different
          sun.
        </p>

        <div className="Per gap-4 mt-3">
          <img src={per03} className="img3" alt="" />
          <div>
            <h6 className="name mb-0 mt-3">Abhishek Kumar</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="per04">
        <p>
          It is only in adventure that some people succeed in knowing
          themselves – in finding themselves.
        </p>

        <div className="Per gap-4 mt-3">
          <img src={per04} className="img4" alt="" />
          <div>
            <h6 className="name mb-0 mt-3">Nandani Kumari</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="per05">
        <p>Not all those who wander are lost.</p>

        <div className="Per gap-4 mt-3">
          <img src={per05} className="img5" alt="" />
          <div>
            <h6 className="name mb-0 mt-3">Sankalp Rai</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="per06">
        <p>
          An understanding of the natural world and what’s in it is a source of
          not only a great curiosity but great fulfilment.
        </p>

        <div className="Per gap-4 mt-3">
          <img src={per06} className="img6" alt="" />
          <div>
            <h6 className="name mb-0 mt-3">Deepa Singh</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
