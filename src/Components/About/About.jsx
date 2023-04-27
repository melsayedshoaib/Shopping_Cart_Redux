import { useDispatch, useSelector } from 'react-redux'

import React from 'react'
import { addToCart } from '../../store/Slices/cartSlice';

export default function About() {
const dispatch = useDispatch();
let { singleProduct, isLoading } = useSelector((state) => state.singleProductSlice)
let quantity = 1;
singleProduct = { ...singleProduct, quantity: quantity }
return (
    <div className='container-fluid'>
        <div className="row d-flex align-items-center">
            {isLoading ? <div className='d-flex align-items-center justify-content-center'>
        <span class="loader"></span>
        </div>: <>
                <div className="col-md-4">
                <img src={singleProduct.image} className='w-100' height={"450px"} alt="product" />
            </div>
            <div className="col-md-8">
                <h2 className='mt-3' style={{color: 'violet'}}>{ singleProduct.title}...</h2>
                <p className='mt-3 text-dark'><span style={{color: 'violet'}}>Category: </span> <span>{singleProduct.category }</span></p>
                <p className='mt-3 text-dark'><span style={{ color: 'violet' }}>Description: </span><span> { singleProduct.description.substring(0,75)}...</span></p>
                <p className='mt-3 text-dark'><span style={{ color: 'violet' }}>Price: </span><span> ${ singleProduct.price}</span></p>
                <p className='mt-3 text-whdarkite'><span style={{ color: 'violet' }}>Rating: </span><span style={{ color: 'gold' }}> <i class="fa-solid fa-star fa-2xs"></i> {singleProduct.rating.rate}</span></p>
                <button onClick={() => dispatch(addToCart(singleProduct))} className='btn btn-outline-primary text-dark my-3' style={{width: 'fit-content'}}>Add to cart</button>
            </div>
            </>}
        </div>
    </div>
)
}