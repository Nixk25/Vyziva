import React from 'react'
import "./CartItem.css"



const CartItem = (props) => {

    const{id,productName, price, image} = props.data;


  return (
    <section className='cart-section'>
      <div className="cart-item">
        <img src={image} alt="vyziva"/>
        <p>{productName}</p>
        <p>{price}Kč</p>
        <hr />
    </div>
    </section>
    
  )
}

export default CartItem