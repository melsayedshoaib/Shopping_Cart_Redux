import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const { cart } = useSelector((state) => state.cartSlice)
    let totalQuantity = 0;
    cart.map((item) => {
        return totalQuantity += item.quantity;
    })
return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light navbar-dark bg-dark">
            <div class="container">
                <Link class="navbar-brand" to="">Shopping Cart <span style={{color: 'violet'}}>Redux</span></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <Link class="nav-link" to="products">Products</Link>
                            </li>
                            <li class="nav-item position-relative">
                            <Link class="nav-link" to="cart"><i class="fa-solid fa-cart-shopping"></i> <span className='badge bg-primary position-absolute top-0'>{ totalQuantity}</span></Link>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
    </div>
)
}
