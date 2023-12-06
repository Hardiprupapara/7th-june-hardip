import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Remaining = () => {
	const { expenses, balance } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);

	const alertType = totalExpenses > balance ? 'alert-danger' : 'alert-success';

	return (
		<div className={`alert ${alertType}`}>
			<span>Remaining: ₹{balance - totalExpenses}</span>
		</div>
	);
};

export default Remaining;