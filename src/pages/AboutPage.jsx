import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="about-container">
            <h2>About Us</h2>
            <p>Welcome to our modern e-commerce store! We provide high-quality products at great prices.</p>
            <p>Our mission is to create the best shopping experience with a seamless and intuitive user interface.</p>
            <Link to="/" className="back-button">Back to Home</Link>
        </div>
    );
};

export default AboutPage;
