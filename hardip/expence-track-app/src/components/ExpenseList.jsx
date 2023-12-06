import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem.jsx';
import { AppContext } from './AppContext.js';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
		<ul className='list-group'>
			{expenses.map((expense) => (
				<ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
			))}
		</ul>
    )
}

export default ExpenseList;