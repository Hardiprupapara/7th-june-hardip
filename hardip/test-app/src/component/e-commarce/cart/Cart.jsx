import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCartApi, getalladdtocartapi, removeItemFromCart, updateCartQuantity } from '../../../reducers/ProoductSlice';
import './Cart.css';

const Cart = () => {


    const [cartdata, SetCartData] = useState([])


    const dispatch = useDispatch();
    const { Cart, GetAllCartData, isLoading, isError, isSuccess } = useSelector((state) => state.ProductData);

    useEffect(() => {
        dispatch(getalladdtocartapi());
    }, []);

    const handleRemove = (id) => {
        dispatch(deleteFromCartApi(id)).then(res => {
            if (res.type === 'api/deleteFromCart/fulfilled') {
                dispatch(getalladdtocartapi())
            }
        });
    };

    console.log(GetAllCartData?.cartData?.length,"GetAllCartData?.cartData")

    // const handleQuantityChange = (id, quantity) => {
    //     dispatch(updateCartQuantity({ id, quantity }));
    // };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Shopping Cart</h2>
            {isLoading ? (
                <div className="alert alert-info">Loading...</div>
            ) : (
                <div className="row">
                    <div className="col-md-8">
                        {
                            GetAllCartData?.cartData?.length === 0 ? (
                                <div className="alert alert-info">Your cart is empty.</div>
                            ) : (
                                GetAllCartData?.cartData && GetAllCartData?.cartData?.map((item) => (
                                    <div className="card mb-3" key={item.id}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.name}</h5>
                                                    <p className="card-text">Price: ${item.price}</p>
                                                    {/* <p className="card-text">Quantity: {item.quantity}</p> */}
                                                    <div className="d-flex mb-3">
                                                        {/* <button className="btn btn-outline-secondary" type="button" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                                    <input type="text" className="form-control w-25 text-center" value={item.quantity} readOnly />
                                                    <button className="btn btn-outline-secondary" type="button" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button> */}
                                                    </div>
                                                    <button className="btn btn-danger" onClick={() => handleRemove(item._id)}>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Order Summary</h5>
                                {/* <p className="card-text">
                                    Total Quantity: {Cart.reduce((acc, item) => acc + item.quantity, 0)}
                                </p>
                                <p className="card-text">
                                    Total Amount: ${Cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                                </p> */}
                                <button className="btn btn-success btn-lg btn-block">Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
