import React from 'react';
import { Button } from 'react-bootstrap';
import banner from '../../images/banner.png'
const BannerContent = () => {
    return (
        <div className="container bannerContent">
            <div className="row p-4 d-flex align-items-center">
                <div className="col-md-6 ">
                    <div className="content  ">
                       <div>
                            <h3>Wonderful Design Collection</h3>
                            <h1>Trusty Furniture With Awesome Design</h1>
                            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.</p>
                            <Button id="default-btn">More Info</Button>
                       </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={banner} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BannerContent;