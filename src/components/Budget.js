import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
//import {currency} from '/Currency'

const Budget = (props) => {
	const { budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);

    return (
		<div className='alert alert-secondary'>
			<span>
                Budget: {currency}
                <input 
                    type="number"
                    step="10"
                    onChange={(event)=> dispatch({
                        type: 'SET_BUDGET',
                        payload: event.target.value,
                    })}
                    value={budget}>
                        </input>
            </span>
		</div>
	);
};

export default Budget;
