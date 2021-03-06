import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import {connect} from 'react-redux'
import { adjustQty, removeFromCart } from '../../Redux/Shopping/shoppingActions';
import './CartItem.css'
const CartItem = ({itemData, removeFromCart, adjustQty}) => {
    const [input, setInput] = useState(itemData.qty)

    const handleOnChange = e =>{
        setInput(e.target.value)
        adjustQty(itemData.id, e.target.value)
    }
    return (
            <div className="col-md-6">
                <Card className="w-100 p-4 shadow mb-4">
                    <Card.Img variant="top" src={itemData.productImg} className="product-image" />
                    <Card.Body>
                        <Card.Title>{itemData.productName}</Card.Title>
                        <div className="d-flex justify-content-between">
                            <strong>${itemData.price}</strong>
                            <input onChange={handleOnChange} type="number" min="1" id="qty" name="qty" value={input} />
                        </div>
                    </Card.Body>
                    <Button  id="default-btn" onClick={() => removeFromCart(itemData.id)}>Remove Item</Button>
                </Card>
            </div>
    );
};
const mapStateToDispatch = (dispatch) => {
    return{
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id, value))
    }
}
export default connect (null, mapStateToDispatch)(CartItem);