import React, { useEffect, useState } from 'react';
import NewArrivalProducts from '../NewArrivalProducts/NewArrivalProducts';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
const Home = ({ cart }) => {
    // initialize firebase
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    const [productCount, setProductCount] = useState(0);
    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty
        })
        setProductCount(count)
    }, [cart, productCount])
    return (
        <div className="container">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Trusty Furniture</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Featured</Nav.Link>
                        <Link to="/cart">
                            <span>Cart</span>
                            <b className="ms-2 cart-counter">{productCount}</b>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <NewArrivalProducts></NewArrivalProducts>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}
export default connect(mapStateToProps)(Home);