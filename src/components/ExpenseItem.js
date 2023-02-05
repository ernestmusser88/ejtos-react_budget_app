import React, { useContext } from 'react';
import { FcEmptyTrash } from "react-icons/fc";
import { FcPlus } from "react-icons/fc";
import { FaMinusCircle } from "react-icons/fa";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	const increaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: 10,
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense
		});

	}

    const decreaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: 10,
		};

		dispatch({
			type: 'RED_EXPENSE',
			payload: expense
		});

	}


	return (
		<tr>
		<td>{props.name}</td>
		<td>{currency}{props.cost}</td>
		<td><FcPlus  onClick={event=> increaseAllocation(props.name)}>+</FcPlus></td>
		<td><FaMinusCircle color="red"  onClick={event=> decreaseAllocation(props.name)}>-</FaMinusCircle></td>
		<td><FcEmptyTrash size='1.5em' onClick={handleDeleteExpense}></FcEmptyTrash></td>
		</tr>
	);
};

export default ExpenseItem;

