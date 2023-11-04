import React from 'react'
import "./Cart.css"
import CartItem from './CartItem'
import {Link} from "react-router-dom"

const Cart = ({cart, handleUpdateCartQty,handleRemoveFromCart,handleEmptyCart}) => {

  const EmptyCart = () => (
    <div className='empty'>
      <p className='nothing'>Nemáte žádné věci v košíku</p>
      <Link to="/"><button className='back-to__main'>Zpět do obchodu</button></Link>
    </div>
  )


  const FilledCart = () =>(
    <>
      <div className="cart-items">
        {cart?.line_items && cart?.line_items.map((item)=>(
          <div className="items" key={item.id}>
            <div><CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart}  /></div>
          </div>
        ))}
      </div>
        <div className="details">
          <div className="subtotal">
            <strong>Celkem: {cart?.subtotal?.formatted_with_code}</strong>
          </div>
          <div className="buttons-cart">
            <Link to="/"><button className='back-to__main'>Zpět do obchodu</button></Link>
            <button className="empty-cart" onClick={handleEmptyCart}>Vyprázdnit košík</button>
            <Link to="/checkout"><button className='checkout'>Zaplatit</button></Link>
          </div>
        </div>
  </>
  )

  if (!cart?.line_items) return "Loading...";

  return (
    <div>
      <div>
        <h1 className='headline'>Váš košík</h1>
        {cart?.line_items?.length ===0 ? <EmptyCart/> : <FilledCart/>} 
      </div>
    </div>
  )
}

export default Cart