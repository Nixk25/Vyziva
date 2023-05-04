import React, { useEffect, useState } from 'react'
import {HiShoppingCart} from 'react-icons/hi';
import { commerce } from '../lib/commerce';
import { Link } from 'react-router-dom';
import "./ProductView.css"
import Spinner from '../Spinner/Spinner';

const ProductView = ({totalItems}) => {
  const [product, setProduct] = useState({});
  const [loading,setLoading] = useState(true); 


  const fetchProducts = async (id) =>{
    const response = await commerce.products.retrieve(id);
    const {name, price, image, description} = response;
    setProduct({id,name,description,image, price}) 
  }

  useEffect(() => {
    const id = window.location.pathname.split("/");
    fetchProducts(id);
  },[])


  return (
    <section onLoad={() => {setLoading(false)}} className='product-view'>
      {loading && <Spinner/>}
      <div className='container'>
        <div className='product-view'>
        <div className='product-view__info' >
          <div className='img-wrapper'>
            <img src={product.image?.url} alt=""/>
          </div>
          <div className='text'>
            <div className="upper-title">
              <h2 className='title'>{product?.name}</h2>
              <p className='product-view__price'>Cena: <strong>{product?.price?.formatted_with_code}</strong></p>
              <Link to="/"><button className='back-to__main'>Jít zpět nakupovat</button></Link>
            </div>
            <p  dangerouslySetInnerHTML={{__html: product.description}} className='product-view__description'></p>
            <div className="cart-total">
              <Link  to="/cart" className='cart-icon'><HiShoppingCart/></Link>
              <span className='totalProducts'>{totalItems}</span>
            </div>
          </div>
        </div>
        </div>  
      </div>
    </section>
  )
}

export default ProductView