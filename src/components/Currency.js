import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = (props) => {
  const [ currency,setCurrency ] = useState('');
  const { dispatch } = useContext(AppContext);
  
  const updateCurrency = (event) => {

    dispatch({
          type: 'CHG_CURRENCY',
          payload: event.target.value,
        });
    setCurrency(event.target.value);
    return;
  }
  
  return (
    <div className='alert-success'>  
      <select 
        className='alert alert-success dropdown-toggle'
        id='currency'
        size='sm'
        onChange={(event) =>updateCurrency(event)}>{currency}
          
          <option value='£'>£ Pound</option>
          <option value='$'>$ Dollar</option>
          <option value='€'>€ Euro</option>
          <option value='₹'>₹ Rupee</option>
      
      </select>
    </div>

  );
};

export default Currency;

        //onChange={(event) =>updateCurrency(event)}>Currency ({currency})
