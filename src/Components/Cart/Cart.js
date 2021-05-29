import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux'
import CartItem from './CartItem';
const Cart = ({cart}) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() =>{
        let items = 0;
        let price = 0;
        cart.forEach(item => {
            items += item.qty
            price += item.qty * item.price
        })
        setTotalItems(items)
        setTotalPrice(price)
    },[cart, totalPrice, totalItems, setTotalPrice, setTotalItems])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        {
                            cart.map(item => <CartItem key={item.id} itemData={item}></CartItem>)
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="cart-summary shadow p-3">
                        <h1>Cart Summary</h1>
                        <div className="price">
                            <span>Total Items: {totalItems}</span>
                            <span>Price: ${totalPrice}</span>
                        </div>
                        <Button>Proceed to checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return{
        cart: state.shop.cart
    }
}
export default connect(mapStateToProps)(Cart);