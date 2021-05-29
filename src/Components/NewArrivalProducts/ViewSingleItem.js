import React from 'react';
import { Button } from 'react-bootstrap';
import {connect}  from 'react-redux'
import { addToCart } from '../../Redux/Shopping/shoppingActions';
const ViewSingleItem = ({currentItem, addToCart}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h3>{currentItem.productName}</h3>
                    <p>{currentItem.ProductDesc}</p>
                    <h4>{currentItem.price}</h4>
                    <Button onClick={() => addToCart(currentItem.id)}>Add to Cart</Button>
                </div>
                <div className="col-md-6">
                    <img src={currentItem.productImg} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return{
        currentItem: state.shop.currentItem
    }
}
const mapStateToDispatch = (dispatch) =>{
    return{
        addToCart: (id) => dispatch(addToCart(id)) 
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(ViewSingleItem);