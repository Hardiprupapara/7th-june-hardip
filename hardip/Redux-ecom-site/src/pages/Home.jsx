import React from 'react';
import Products from '../components/Products';

const Home = () => {
    return (
        <div>
            <h2 className='heading'> welcom to store</h2>
            <section>
                <h3>Products</h3>
                <Products></Products>
            </section>
        </div>
    );
};

export default Home;