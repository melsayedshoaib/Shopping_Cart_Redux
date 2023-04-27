import { clearCart, decreaseCart, increaseCart, removeFromCart } from '../../store/Slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux'

import React from 'react'

export default function Cart() {
  let dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartSlice)
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return (
    <div className='container-fluid'>
      {cart.length > 0 && <div className="row d-flex align-items-center">
        {cart.map((item) => {
          return <>
          <div className="col-md-8 text-center fs-5" key={item.id}>
            <img src={ item.image} className='w-50' height={'350px'} alt='item' />
              <h2 className='mt-3 text-primary fw-bolder'>{ item.title.substring(0,15)}...</h2>
              <p className='mt-3'><span className='text-primary fw-bold'>Category: </span> <span>{item.category }</span></p>
              <p className='mt-3'><span className='text-primary fw-bold'>Description: </span><span>{item.description.substring(0, 30)}...</span></p>
              <p className='mt-3'><span className='text-primary fw-bold'>Price: </span><span> ${ item.price}</span></p>
              <p className='mt-3'><span className='text-primary fw-bold'>Rating: </span><span> <i class="fa-solid fa-star fa-2xs"></i> {item.rating.rate}</span></p>
              <p><span className='text-primary fw-bold'>Amount</span>: ${item.price.toFixed(2) * item.quantity}</p>
              <div className='text-end my-3'>
                <button className='btn btn-outline-danger' onClick={() => dispatch(removeFromCart(item))}>Remove From Cart</button>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-evenly">
              <div>
                <button className='btn btn-danger fs-3' onClick={() => item.quantity > 1 ? dispatch(decreaseCart(item)) : dispatch(removeFromCart(item))}>-</button>
              </div>
              <p className='fs-3'>{item.quantity}</p>
              <div>
                <button className="btn btn-primary fs-3" onClick={() => dispatch(increaseCart(item))}>+</button>
              </div>
            </div>
          </>
        })}
      </div>}
      {cart.length > 0 && <div className="text-end">
        <button onClick={() => dispatch(clearCart())} className='btn btn-danger fs-3 my-3'>Clear Cart</button>
        <p className='bg-success d-inline-block text-white py-2 mx-2 px-2 rounded-4'>Total Amount: ${ totalAmount.toFixed(2)}</p>
      </div>}
    </div>
  )
}