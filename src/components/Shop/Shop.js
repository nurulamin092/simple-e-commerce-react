import React from 'react';
import './Shop.css'
const Shop = () => {
    return (
        <div className='shop-container'>
            <div className='products-container col-md-10'>
                <h1>This is product</h1>
            </div>
            <div className='order-detail col-md-2'>
                <h1>This is order <summary></summary></h1>
            </div>
        </div>
    );
};

export default Shop;