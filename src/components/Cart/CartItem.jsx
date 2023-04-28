import React from 'react'
import "./CartItem.css"



const CartItem = ({item, handleRemoveFromCart, handleUpdateCartQty}) => {



  return (
    <section className='cart-section'>
        <div className="cart-item" key={item.id}>
          <img src={item.image.url} alt="vyziva"/>
          <p>{item.name}</p>
          <p>{item?.line_total.formatted_with_code}</p>
          <div className="buttons-cart__item">
            <button className='minus-btn' onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</button>
            <p>{item.quantity}</p>
            <button className='plus-btn' onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
            <button className='delete-btn' onClick={() =>handleRemoveFromCart(item.id)}>&times;</button>
          </div>
      </div>
    </section>
    
  )
}

export default CartItem