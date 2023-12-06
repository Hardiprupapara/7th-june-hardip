import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from './AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    return (
        <li className='list-group-item  w-50'>
            <div className='d-flex justify-content-between align-items-center'>
                {props.name}
                <div className='px-3 d-flex align-items-center'>
                    <span>
                    ₹{props.cost}
                    </span>
                    <span>
                        <TiDelete size='1.5em' className='ms-2' onClick={handleDeleteExpense}></TiDelete>
                    </span>
                </div>
            </div>
        </li >
    );
};

export default ExpenseItem;