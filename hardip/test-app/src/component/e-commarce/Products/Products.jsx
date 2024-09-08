import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../Products/ProductDetailPage.css';
import { addtocartapi, getalladdtocartapi, getproductapi } from '../../../reducers/ProoductSlice';

const Products = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { Products } = useSelector((state) => state.ProductData);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getproductapi()).then(res => {
      if (res.type === 'api/products/fulfilled') {
        setLoading(false);
        dispatch(getalladdtocartapi());
      }
    });
  }, [dispatch]);

  const handleAddtoCart = (item) => {
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

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
        <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
          <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
          <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
          <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
          <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
        </svg>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row flex-wrap">
        {
          Products && Products.products[0].products.map((item) =>
            <div className="col-3 m-4" key={item.id} onClick={() => handleProductClick(item.id)}>
              <div className="card border-0 rounded-0 shadow" style={{ width: "18rem" }}>
                <img src={item.images[0]} className="card-img-top rounded-0 product-img" alt="..." />
                <div className="card-body mt-3 mb-3">
                  <div className="row">
                    <div className="col-10">
                      <h4 className="card-title title">{item.title}</h4>
                      <p className="card-text">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        (123)
                      </p>
                    </div>
                    <div className="col-2">
                      <i className="bi bi-bookmark-plus fs-2"></i>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center text-center g-0">
                  <div className="col-4">
                    <h5>${item.price}</h5>
                  </div>
                  <div className="col-8">
                    <button
                      className="btn btn-dark w-100 p-3 rounded-0 text-warning"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddtoCart(item);
                      }}
                    >ADD TO CART</button>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Products;
