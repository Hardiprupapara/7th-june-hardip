import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector } from 'react-redux/es/hooks/useSelector';

const Navbar = () => {
    const selector=useSelector((state)=>
    state.cart
    )
    return (
        <>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}} className='navbar'>

            <span className='logo'>Fake store</span>
            <div>
                <Link className='navLink' to="/">Home</Link>
                <Link className='navLink' to="/cart"><i class="fa-solid fa-cart-shopping"></i>Cart</Link>
                <span className='cartCount'>
                    cart items:{selector.length}
                </span>
            </div>
        </div>



        </>
    );
};

export default Navbar;