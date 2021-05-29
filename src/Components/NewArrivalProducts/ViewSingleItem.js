import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux'
import { addToCart } from '../../Redux/Shopping/shoppingActions';
import Navigation from '../Navigation/Navigation';
const ViewSingleItem = ({ currentItem, addToCart }) => {
    return (
        <div className="container" id="single-item">
            <Navigation></Navigation>
            <div className="row" id="default-margin">
                <div className="col-md-4 offset-md-4">
                    <Card className="w-100 p-2 shadow mb-4">
                        <Card.Img variant="top" src={currentItem.productImg} className="product-image" />
                        <Card.Body>
                            <h3>{currentItem.productName}</h3>
                            <p>{currentItem.ProductDesc}</p>
                            <strong>${currentItem.price}</strong><br></br>
                            <Button className="mt-3 w-100" id="default-btn" onClick={() => addToCart(currentItem.id)}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        currentItem: state.shop.currentItem
    }
}
const mapStateToDispatch = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(ViewSingleItem);