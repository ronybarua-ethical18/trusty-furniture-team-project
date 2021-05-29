import React from 'react';
import { Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="container text-center shadow p-5">
            <div className="row">
                <h2>Get In Touch</h2>
                <div className="contact mt-3">
                    <input type="text" id="qty" placeholder="Enter your email" />
                    <Button id="default-btn">Get In Touch</Button>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;
