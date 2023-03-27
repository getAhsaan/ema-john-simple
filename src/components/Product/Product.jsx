import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <div>
                    <h4 className='product-name'>{name}</h4>
                    <h6 className='product-price'>Price: ${price}</h6>
                </div>
                <div>
                    <p>Manufacturer : {seller}</p>
                    <p>Rating : {ratings} Stars</p>
                </div>
            </div>
            <button>Add to Cart <span>ICON</span></button>

        </div>
    );
};

export default Product;