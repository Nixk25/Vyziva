import React, { useContext } from 'react'
import "./Product.css"
import {AiOutlinePlus} from "react-icons/ai"
import {ShopContext} from "../../context/shop-context"



const Product = (props) => {
    const {id, productName,price,image} = props.data;

    const {addToCart} = useContext(ShopContext)
  
  


    return (
    <div className='product'>
        <div className="description" >
            <img src={image} alt="vyzivove doplnky" />
            <p className='name'><b>{productName}</b></p>
            <p>Cena: {price}Kč</p>
            <button className="addToCartBtn" onClick={props.activeSpan}>
                <span className='button-text'>Přidat do košíku</span>
                <span className='button-icon'><AiOutlinePlus/></span>
            </button>
        </div>
    </div>
  )
}

export default Product