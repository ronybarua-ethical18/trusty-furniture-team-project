import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
const Navigation = ({ cart }) => {
    const [productCount, setProductCount] = useState(0);
    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty
        })
        setProductCount(count)
    }, [cart, productCount])
    return (
        <div>
            <Navbar className="bg-white shadow py-2 px-5" fixed="top" expand="lg">
                <Navbar.Brand href="/"><Link to="/home" className="nav-links"><strong>Trusty Furniture</strong></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                       <Nav.Link> <Link to="/home" className="nav-links">Home</Link></Nav.Link>
                        <Nav.Link href="#link" className="nav-links">Featured</Nav.Link>
                        <Nav.Link>
                            <Link to="/cart" className="cart-counter">
                                <span className="nav-links"><FontAwesomeIcon icon={faCartPlus} className="me-2 nav-links"></FontAwesomeIcon>Cart</span>
                                <b className="ms-2 item-number">{productCount}</b>
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}
export default connect(mapStateToProps)(Navigation);