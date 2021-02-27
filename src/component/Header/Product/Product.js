import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    
    const {img,name,seller,price,stock}=props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <br/>
                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} left in stock - Order soon</p>
                <button 
                   className="main-btn"
                   onClick={() => props.handleAddProduct(props.product)}
                   >
                    <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;