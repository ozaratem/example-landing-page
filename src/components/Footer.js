import React from 'react';

function Footer() {
    return <section id="footer">
        <div className="footer-content">
            <div className="footer-links">
                <ul>
                    <li>
                        <p>About</p> 
                        <p>Contact</p> 
                        <p>Term of Use</p> 
                        <p>Privacy Policy</p>
                    </li>
                </ul>
            </div>
            <div className="footer-bottom"> &copy;Brand 2020. All Rights Reserved</div>
        </div>
        <div className="footer-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
        </div>
    </section>
}

export default Footer;