import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props.product);
    const { img, name, price, seller, ratings, id } = props.product;
    const handleAddToCard = props.handleAddToCard;

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
            <button onClick={() => handleAddToCard(props.product)}>
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>

        </div>
    );
};

export default Product;