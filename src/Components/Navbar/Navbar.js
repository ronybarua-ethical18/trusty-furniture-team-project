import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
const Navbar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Trusty Furniture</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Featured</Nav.Link>
                        <Link to="/cart">
                            <span>Cart</span>
                            <div className="cart-counter">1</div>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

const mapStateToProps = state =>{
    return{
        cart:state.shop.cart
    }
}
export default connect(mapStateToProps)(Navbar);