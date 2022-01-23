import React from 'react';
import testimonial1 from '../assets/testimonials-1.jpg';
import testimonial2 from '../assets/testimonials-2.jpg';
import testimonial3 from '../assets/testimonials-3.jpg';

function Testimonials() {
    return <section id="testimonials">
    <h1>What People are saying...</h1>
    <div className="testy">
      {/*<!-- Columna 1 -->*/}
      <div className="column one">
        <img src={testimonial1} alt="avatar1" />
        <h4>Margaret E.</h4>
        <p>"This is fantastic! Thanks so much guys!"</p>
      </div>
      {/*<!-- Columna 2 -->*/}
      <div className="column two">
        <img src={testimonial2} alt="avatar2" />
        <h4>Fred S.</h4>
        <p>
          "Bootstrap is amazing! I've been using it to create lots of super
          nice landing pages"
        </p>
      </div>
      {/*<!-- Columna 3 -->*/}
      <div className="column three">
        <img src={testimonial3} alt="avatar3" />
        <h4>Margaret E.</h4>
        <p>
          "Thanks so much for making this free resources available to us!"
        </p>
      </div>
    </div>
  </section>
}

export  default Testimonials;