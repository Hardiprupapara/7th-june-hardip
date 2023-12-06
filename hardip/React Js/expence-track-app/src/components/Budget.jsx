import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Budget = () => {

    const { expenses } = useContext(AppContext);

	const totalBalance = expenses.reduce((total, item) => {
		return (total = total + item.balance);
	}, 0);

	return (
		<div className='alert alert-secondary'>
			<span>Balance: ₹{totalBalance}</span>
			{console.log(totalBalance)}
		</div>
	);
};

export default Budget;