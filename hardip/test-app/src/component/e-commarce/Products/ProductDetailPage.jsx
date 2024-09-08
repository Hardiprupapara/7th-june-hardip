import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtocartapi, getalladdtocartapi, getproductapi } from '../../../reducers/ProoductSlice';
import '../Products/ProductDetailPage.css';

const ProductDetailPage = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const { Products } = useSelector((state) => state.ProductData);

    useEffect(() => {
        if (Products && Products.products[0].products.length > 0) {
            const foundProduct = Products.products[0].products.find(p => p.id === parseInt(id));
            setProduct(foundProduct);
        } else {
            dispatch(getproductapi()).then(res => {
                if (res.type === 'api/products/fulfilled') {
                    const foundProduct = res.payload.products[0].products.find(p => p.id === parseInt(id));
                    setProduct(foundProduct);
                }
            });
        }
    }, [dispatch, id, Products]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const addToCart = (item) => {
        // Add functionality for adding product to cart
        dispatch(addtocartapi({
            name: item.title,
            price: item.price,
            image: item.images[0]
        })).then(res => {
            if (res.type === 'api/addtocart/fulfilled') {
                dispatch(getalladdtocartapi());
            }
        });
    };

    const buyNow = () => {
        // Add functionality for buying product
        alert('Buy now clicked!');
    };

    return (
        <div className="container product-page">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.images[0]} className="img-fluid" alt={product.title} />
                </div>
                <div className="col-md-6">
                    <h1>{product.title}</h1>
                    <p className="price">${product.price}</p>
                    <p className="description">{product.description}</p>
                    <p className="rating">Rating: {product.rating} ★ ({product.reviews.length} reviews)</p>
                    <p className="seller">Seller: {product.seller}</p>
                    <p className="delivery-date">{product.deliveryDate}</p>
                    <button className="btn btn-primary btn-lg  mx-2" onClick={(e)=>addToCart(product)}>Add to Cart</button>
                    <button className="btn btn-success btn-lg " onClick={buyNow}>Buy Now</button>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <h2>Reviews</h2>
                    {product.reviews.length === 0 ? (
                        <p>No reviews yet.</p>
                    ) : (
                        <ul className="list-group">
                            {product.reviews.map((review) => (
                                <li key={review.id} className="list-group-item">
                                    <p><strong>{review.reviewerName}</strong> ({review.reviewerEmail})</p>
                                    <p>Rating: {review.rating} ★</p>
                                    <p>{review.comment}</p>
                                    <p><small>{new Date(review.date).toLocaleDateString()}</small></p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
