import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
       <div className="container mt-5 pt-5 mb-5">
            <div className="row">
           <div className="col-md-3"> 
                <h5 className="text-secondary">Information</h5>
               <div className="pt-4">
               <p className="contact-info">About Us</p>
                <p className="contact-info">Contact Us</p>
                <p className="contact-info">News</p>
                <p className="contact-info">Store</p>
               </div>
           </div>
           <div className="col-md-3"> 
           <h5 className="text-secondary">Collection</h5>
           <div className="pt-4">
               <p className="contact-info">Wooden Chair</p>
                <p className="contact-info">Royal Cloth Sofa</p>
                <p className="contact-info">Accent Chair</p>
                <p className="contact-info">Bed</p>
                <p className="contact-info">Hanging Lamp</p>
               </div>
           </div>
           <div className="col-md-3">
           <h5 className="text-secondary">My Account</h5>
           <div className="pt-4">
               <p className="contact-info">My Account</p>
                <p className="contact-info">Wishlist</p>
                <p className="contact-info">Community</p>
                <p className="contact-info">Order History</p>
                <p className="contact-info">My Cart</p>
               </div>
           </div>
           <div className="col-md-3">
           <h5 className="text-secondary">Newsletter</h5>
           <div className="pt-4">
               <p className="contact-info">Subscribe to get latest news, update and information.</p>
               <input className="input contact-info" placeholder="Enter Email Here..." type="text" name="" id="" />
               </div>
           </div>

        </div>
       </div>
    );
};

export default Footer;