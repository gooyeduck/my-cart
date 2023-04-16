import { useState } from "react";
import img from '../../assets/dummy-product.png';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import './_products.scss';

const Products = () => {
    return (
        <ul className="wfc-products-section">
            <li className="product-details">
                <img src={img}/>
                <h5>Product 1</h5>
                <p>$25</p>
                <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis cursus nibh, ac finibus leo. Pellentesque semper sed est consectetur facilisis.</article>
                <button className="product-button-group">
                    {<FaPlusCircle/>}
                    <input type="text" name="product_number"/>
                    {<FaMinusCircle/>}
                </button> 
            </li>
            <li className="product-details">
                <img src={img}/>
                <h5>Product 2</h5>
                <p>$25</p>
                <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis cursus nibh, ac finibus leo. Pellentesque semper sed est consectetur facilisis.</article> 
                <button className="product-button-group">
                    {<FaPlusCircle/>}
                    <input type="text" name="product_number"/>
                    {<FaMinusCircle/>}
                </button>
            </li>
            <li className="product-details">
                <img src={img}/>
                <h5>Product 3</h5>
                <p>$25</p>
                <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis cursus nibh, ac finibus leo. Pellentesque semper sed est consectetur facilisis.</article> 
                <button className="product-button-group">
                    {<FaPlusCircle/>}
                    <input type="text" name="product_number"/>
                    {<FaMinusCircle/>}
                </button>            
            </li>
        </ul>
    )
}

export default Products;