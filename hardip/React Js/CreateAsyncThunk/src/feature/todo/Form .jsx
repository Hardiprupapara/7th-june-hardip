import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, dummiproductApi } from '../feature/todo/todoSlice'
const Form = () => {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value)
  const { ProductStatedata } = useSelector((state) => state.counter)

  useEffect(() => {
    dispatch(dummiproductApi())
  }, [])

  return (
    <div>
      <button onClick={() => { dispatch(increment()) }}>+incriment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-decrement</button>
      {
        ProductStatedata?.products?.map((item, index) => (
          <ul key={index}>
            <div style={{display:'block'}}>
              <img style={{ width: '10%' }} src={item.images[1]} alt="" />
              <h3>{item.brand}</h3>
              <p>Price: {item.price}</p>
              <p>stock:{item.stock}</p>
            </div>
          </ul>
        ))
      }
    </div>
  )
}

export default Form 
