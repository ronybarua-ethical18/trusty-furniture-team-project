import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addToCart, loadCurrentItem } from '../../Redux/Shopping/shoppingActions';
import './SingleProduct.css'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
const SingleProduct = ({ productData, addToCart, loadCurrentItem }) => {
    return (
        <div className="col-md-4 h-100">
            <Card className="w-100 p-4 new-arrival shadow mb-4 rounded-lg">
                <Card.Img variant="top" src={productData.productImg} className="product-image" />
                <Card.Body>
                        <div className="d-flex justify-content-between  align-items-center">
                            <h4>{productData.productName}</h4>
                        <Link to={`/products/${productData.id}`}>
                            <FontAwesomeIcon onClick={() => loadCurrentItem(productData)} icon={faEye}></FontAwesomeIcon>
                        </Link>
                        </div>
                        <strong>${productData.price}</strong>
                    <div className="d-flex justify-content-evenly mt-3">
                        <Button onClick={() => addToCart(productData.id)} className="w-100" id="default-btn"><FontAwesomeIcon className="me-2" icon={faCartPlus}></FontAwesomeIcon><span>Add to cart</span></Button>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}
export default connect(null, mapDispatchToProps)(SingleProduct);