import React from 'react';

function Aspects() {
    return <section id="aspects">
    {/*<!-- row 1 -->*/}
    <div className="row first">
      <div className="content">
        <h3>Fully Responsive Design</h3>
        <p>
          When you use a theme created with Bootstrap, you know that the theme
          will look great on any device, whether it's a phone, tablet, or
          desktop the page will behave responsively!
        </p>
      </div>
      <div className="image first"></div>
    </div>
    {/*<!-- row 2 -->*/}
    <div className="row second">
      <div className="image second"></div>
      <div className="content">
        <h3>Updated for Boostrap 4</h3>
        <p>
          Newly improved, and full of great utility classes, Boostrap 4 is
          leadding the way in mobile responsive web development! All of the
          themes are now using Boostrap 4!
        </p>
      </div>
    </div>
    {/*<!-- row 3 -->*/}
    <div className="row third">
      <div className="content">
        <h3>Easy to Use & Customize</h3>
        <p>
          Landing Page is just HTML and CSS with a splash of SCSS for user who
          demand some deeper customization option. Out of the box, just add
          your content and images, and your new landing page will be ready to
          go!
        </p>
      </div>
      <div className="image third"></div>
    </div>
  </section>
}

export default Aspects;