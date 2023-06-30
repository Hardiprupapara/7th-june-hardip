import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';



const Products = () => {
    const dispetch=useDispatch();

    const[products ,setProducts]=useState([]);

    useEffect(()=>{
        const fetchProducts= async ()=>{
            const res=await fetch('https://fakestoreapi.com/products');
            const data=await res.json();
            console.log(data);
            setProducts(data)
        }
        fetchProducts();
    },[]);


    const handleAdd=(product)=>{
        dispetch(add(product))
        console.log(product,"product");
        // alert("add to cart successfull")
    }
    return (
        <div className='productsWrapper'>
            {
                products.map((product)=>(
                    <div className='card' key={product.id}>
                        <img src={product.image} alt="" />
                        <h3>{product.title}</h3>
                        <h4>${product.price}</h4>
                        <button className='btn' onClick={()=>{handleAdd(product)}}>add to cart</button>
                    </div>
                ))
            }
            
        </div>
    );
};

export default Products;