import React from 'react';
import '../index.css'; 

export default function Footer(props) {
    return (
        <footer>
            <div className="footer-container">
                <h1 aria-label="Contact us">Contact us</h1>
                <p><a href=" " aria-label="Send an email to unicycle@uw.edu">unicycle@uw.edu</a ></p >
                <p><a href="tel:206-123-1234" aria-label="Call us at 206-123-1234"> 206-123-1234</a ></p >
                <p>&copy; Unicycle AU23</p >
            </div>
        </footer>
    );
}