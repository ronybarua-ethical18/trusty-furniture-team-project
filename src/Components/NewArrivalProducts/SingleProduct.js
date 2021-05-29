import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addToCart, loadCurrentItem } from '../../Redux/Shopping/shoppingActions';
import './SingleProduct.css'
import {connect} from 'react-redux'
const SingleProduct = ({productData, addToCart, loadCurrentItem}) => {
    // const { id, productName, ProductDesc, productImg, price } = props.productData
    return (
        <div className="new-arrival col-md-4 h-100">
            <Card className="w-100 p-4 shadow">
                <Card.Img variant="top" src={productData.productImg} className="product-image" />
                <Card.Body>
                    <Card.Title>{productData.productName}</Card.Title>
                    <p>{productData.ProductDesc}</p>
                    <strong>{productData.price}</strong>
                    <div className="d-flex  justify-content between p-3">
                       <Link to ={`/products/${productData.id}`}>
                        <Button onClick={() => loadCurrentItem(productData)} variant="primary">View Item</Button></Link>
                        <Button onClick={() => addToCart(productData.id)} variant="primary">Add to cart</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

const mapDispatchToProps = dispatch =>{
    return{
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}
export default connect(null, mapDispatchToProps)(SingleProduct);