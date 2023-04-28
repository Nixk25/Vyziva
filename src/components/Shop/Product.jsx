import React from 'react'
import "./Product.css"
import {AiOutlinePlus} from "react-icons/ai"



const Product = ({product, handleAddToCart}) => {


  
    return (
    <div className='product' >
        <div className="container">
        <div className="description" >
            <img className='product-img' src={product.image.url} alt="vyzivove doplnky" />
            <p className='name'><b>{product.name}</b></p>
            <strong><p>Cena: {product.price.formatted_with_code}</p></strong>
            <button className="addToCartBtn" onClick={() => handleAddToCart(product.id, 1)} >
                <span className='button-text'>Přidat do košíku</span>
                <span className='button-icon'><AiOutlinePlus/></span>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Product