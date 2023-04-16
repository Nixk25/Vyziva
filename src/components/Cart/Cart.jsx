import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Cart.css"
import {PRODUCTS} from "../../products"
import {ShopContext} from "../../context/shop-context"
import CartItem from './CartItem'


const Cart = () => {
  const {cartItems} = useContext(ShopContext)



  return (
    <div>
      <div>
        <h1 className='headline'>Váš košík</h1>
      </div>
      <div>
        {PRODUCTS.map((product)=>{
          if (cartItems[product.id] !==0){
            return <CartItem data={product}/>
          }
        })}
      </div>
    </div>
  )
}

export default Cart