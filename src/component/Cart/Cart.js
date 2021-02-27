import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    // reduce er structure:
    // const total=cart.reduce((total,element)=>total+element.price,0)

    const total = cart.reduce((total,prd)=>total+prd.price,0)

    let shipping=0;
    if(total>35){
        shipping=0;
    }
    else if(total>15){
        shipping=4.99;
    }
    else if(total>0){
        shipping=12.99;
    }
    const tax = Math.round(total/10)
    return (
        <div>
            <h4>Order summery</h4>
            <p>Item Ordered:{cart.length}</p>
            <p>Product Price:{total}</p>
            <p>Shipping cost:{shipping}</p>
            <p>Tax +Vat:{tax}</p>
            <p>Total Price:{total + shipping + tax}</p>
        </div>
    );
};

export default Cart;