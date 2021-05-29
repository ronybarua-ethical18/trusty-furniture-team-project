import React from 'react';
import SingleProduct from './SingleProduct';
import { connect } from 'react-redux'
const NewArrivalProducts = ({ products }) => {
    return (
        <div className="container">
            <div className="row">
                {
                    products.map(product => <SingleProduct key={product.id} productData={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(NewArrivalProducts);