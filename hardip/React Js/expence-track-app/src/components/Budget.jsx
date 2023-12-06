import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Budget = () => {

    const { balance } = useContext(AppContext);

	// const totalBalance = balance+balance

	// const totalBalance = balance.reduce((total, item) => {
	// 	return (total = total +Number (item.balance));
	// }, 0);

	console.log(balance)
	return (
		<div className='alert alert-secondary'>
			<span>Balance: ₹{balance}</span>
		</div>
	);
};

export default Budget;