import React, { useState } from 'react'
import "./Shop.css"
import {PRODUCTS} from "../../products"
import Product from './Product'
import {Link} from "react-router-dom"
import {HiShoppingCart} from "react-icons/hi"


const Shop = () => {
  const [activeSpan, setActiveSpan] = useState("")


  const span = () =>{
    setActiveSpan("activeSpan")
  }

  return (
    <section id='shop'>
        <div className="container">
            <div className="shop-wrapper">
                <div className="shop-headline">
                    <h1 className="headline">Něco si můžete <br /><span className="headline-bigger">Koupit</span></h1>
                </div>
                <div className="products">
                  {PRODUCTS.map((product) => <Product activeSpan={span} data={product}/>)}
                </div>
            </div>
            <div className='cart'>
              <Link className='cart-icon' to="/cart"><HiShoppingCart/></Link>
              <span className={activeSpan}></span>
            </div>
        </div>
    </section>
  )
}

export default Shop