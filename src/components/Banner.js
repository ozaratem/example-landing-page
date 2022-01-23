import React from "react";

function Banner() {
    return <section id="banner">
        <h1>
            Build a landing page for your business <br />
            or project and generate more leads!
        </h1>
        <div className="input-container">
            <input className="input" type="text" placeholder="Enter your email..." />
            <button className="button">Sign up!</button>
        </div>
    </section>
}

export default Banner;