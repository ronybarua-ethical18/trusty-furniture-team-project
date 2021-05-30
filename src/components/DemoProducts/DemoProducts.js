import React from "react";
import "./DemoProducts.css";
import armChair from "../../images/armChair.png";
import hanging from "../../images/hangingLamp.png";
import stoolChair from '../../images/stoolChair.png'

const DemoProducts = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-3">
          <div className="box1">
            <img className="arm-img pt-5" src={armChair} alt="" srcset="" />
            <div className="chair-detail pt-4 pb-3">
              <h5 className="arm">Arm Chair</h5>
              <p className="text-secondary">
                <small>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, cum distinctio.
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 box2">
          <div className="row">
           <div className="col-md-5">
               <img className="box2-img p-5 pt-5" src={stoolChair} alt="" srcset="" />
               </div>
           <div className="col-md-7"> 
              <div className="box2-detail pt-5 pr-2">
              <h5 className="arm">Latest Designed Stool and Chair</h5>
               <p className="text-secondary"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam praesentium, commodi similique illum sed in?</small></p>
               <h6 className="text-secondary">Sales start from <span className="price">$99.00</span></h6>
               <button className="box2-btn mt-2"><small>Discover more</small></button>
              </div>
           </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="box1">
            <img className="arm-img pt-1" src={hanging} alt="" srcset="" />
            <div className="chair-detail pt-4 pb-3">
              <h5 className="arm">Hanging Lamp</h5>
              <p className="text-secondary">
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, cum distinctio.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoProducts;
