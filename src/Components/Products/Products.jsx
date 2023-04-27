import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom';
import  { addToCart } from '../../store/Slices/cartSlice';
import { getProducts } from '../../store/Slices/productsSlice'
import { getSingleProduct } from '../../store/Slices/singleProductSlice';

export default function Products() {
  const dispatch = useDispatch();
  const retrievedData = useCallback(() => {
    dispatch(getProducts())
  }, [dispatch])
  const { products, isLoading } = useSelector((state) => state.productsSlice)
  useEffect(retrievedData, [retrievedData])
  return (
    <div className='container-fluid bg-dark'>
      {isLoading ? <div className='vh-100 d-flex align-items-center justify-content-center'>
        <span class="loader"></span>
      </div> : products.length > 0 && <div className='row'>
          {products.slice(1).map((product) => {
            let quantity = 1;
            product = { ...product, quantity: quantity }
            return <>
              <div className="col-md-4 mb-5" key={product.id}>
                <Link className='text-decoration-none text-white' onClick={() => dispatch(getSingleProduct(product.id))} to={`/about/${product.id}`}>
                <img src={ product.image} className='w-100' height={'350px'} alt='product' />
              <h2 className='mt-3' style={{color: 'violet'}}>{ product.title.substring(0,15)}...</h2>
              <p className='mt-3 text-white'><span style={{color: 'violet'}}>Category: </span> <span>{product.category }</span></p>
              <p className='mt-3 text-white'><span style={{ color: 'violet' }}>Description: </span><span>{product.description.substring(0, 150)}...</span></p>
              <p className='mt-3 text-white'><span style={{ color: 'violet' }}>Price: </span><span> ${ product.price}</span></p>
                <p className='mt-3 text-white'><span style={{ color: 'violet' }}>Rating: </span><span style={{ color: 'gold' }}> <i class="fa-solid fa-star fa-2xs"></i> {product.rating.rate}</span></p>
                </Link>
                <button onClick={() => dispatch(addToCart(product))} className='btn btn-outline-primary text-white'>Add to cart</button>
              </div>
            </>
        })}
      </div>}
    </div>
  )
}
