import React, { useEffect, useState } from 'react';
import { useAuth } from '../../layout/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import { getalladdtocartapi } from '../../reducers/ProoductSlice';
import { Link } from 'react-router-dom';

const NavBar = ({ setCollapsed, collapsed }) => {

    const [cartproduct, setCartProduct] = useState([]);

    const { logout } = useAuth();
    const dispetch = useDispatch()
    const { GetAllCartData } = useSelector((state) => state.ProductData)


    useEffect(() => {
        dispetch(getalladdtocartapi())
    }, []);

    return (
        <nav class="navbar text-white py-3">
            <div class="container-fluid d-flex justify-content-between align-items-center">
                <div>
                    <button className="sb-button btn btn-rounded" onClick={() => setCollapsed(!collapsed)}>
                        <i class="bi bi-list text-white"></i>
                    </button>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='like-icon mx-2'><i class="bi bi-heart fs-4"></i></span>
                    <Link to='/Cart'>
                        <span className='cart-icon'><i class="bi bi-cart fs-4"></i></span>
                        <span className='cart'>{GetAllCartData?.cartData?.length ? GetAllCartData?.cartData?.length : 0}</span>
                    </Link>
                    {/* <span className='like'>{GetAllCartData?.cartData?.length ? GetAllCartData?.cartData?.length : 0}</span> */}


                    {/* <input className='form-control' placeholder='serch' type="text" name="" id="" /> */}
                    <span className='mx-2 text-white'><i class="bi bi-box-arrow-right fs-4" onClick={(e) => logout()}></i></span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;