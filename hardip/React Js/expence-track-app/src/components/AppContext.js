import { createContext, useReducer } from "react";

const initialState = {
	expenses: [
		{ id: '', name: '', cost: 0 },
	],
	balance:0
};


const AppReducer = (state, action) => {
	console.log({...state},"state")
	console.log(action,"action")
	switch (action.type) {
		case 'ADD_BALANCE':
			return {...state,
				balance: Number(state.balance) + Number(action.payload)
			}
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
		default:
			return state;
	}
};



export const AppContext = createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				expenses: state.expenses,
				balance: state.balance,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};