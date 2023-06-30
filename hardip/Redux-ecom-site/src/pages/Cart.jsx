import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
// import { useSelector ,} from 'react-redux/es/hooks/useSelector';
import { remove } from '../store/cartSlice';


const Cart = () => {
    const dispetch = useDispatch();
    // const products = useSelector((state) => state.cart);
    const products = useSelector((state) => state.cart);

    const handleRemove=(productid)=>{
        dispetch(remove(productid));
        console.log(productid);
    };
    return (
        <div>
            <h3>cart</h3>
            <div className='cartWrapper'>
                {
                    products.map(product => (
                        <div key={product.id} className='cartCard'>
                            <img src={product.image} alt="" />
                            <h5>{product.title}</h5>
                            <h5>${product.price}</h5>
                            <div>

                            <button className='btn mx-2' 
                            onClick={() => handleRemove(product.id)}>Remove</button>
                        <button className='btn'>Buy</button>
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Cart;


// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { remove } from '../store/cartSlice';

// const Cart = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.cart.products);

//   const handleRemove = (productId) => {
//     dispatch(remove(productId));
//     console.log(productId);
//   };

//   if (!products || products.length === 0) {
//     return <p>No items in the cart.</p>;
//   }

//   return (
//     <div>
//       <h3>Cart</h3>
//       <div className='cartWrapper'>
//         {products.map((product) => (
//           <div key={product.id} className='cartCard'>
//             <img src={product.image} alt='' />
//             <h5>{product.title}</h5>
//             <h5>${product.price}</h5>
//             <button className='btn' onClick={() => handleRemove(product.id)}>
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;
