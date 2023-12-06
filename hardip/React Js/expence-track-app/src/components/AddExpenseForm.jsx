import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from './AppContext';

const AddExpenseForm = () => {

  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [balance, setBalance] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
      balance: parseInt(balance)
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });

    dispatch({
      type: 'ADD_BALANCE',
      payload: balance,
    });

    setName('');
    setCost('');
    setBalance('')

  };

  return (
    <form onSubmit={onSubmit}>
      <div className='row align-items-center'>
        <div className='col-sm'>
          <label for='name'>Name</label>
          <input
            required='required'
            type='text'
            className='form-control'
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className='col-sm'>
          <label for='cost'>Cost</label>
          <input
            required='required'
            type='text'
            className='form-control'
            id='cost'
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          ></input>
        </div>
        <div className='col-sm'>
          <label for='balance'>Add Balance</label>
          <input
            type='text'
            className='form-control'
            id='balance'
            value={balance}
            onChange={(event) => setBalance(event.target.value)}
          ></input>
        </div>
        <div className='col-sm'>
          <button type='submit' className='btn btn-primary mt-3'>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;