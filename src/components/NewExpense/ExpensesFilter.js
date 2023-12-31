import React  from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    // const [enteredYear, setEnteredYear]= useState(props.value);
    
    const yearChangeHandler = (e) =>{
    const year = e.target.value;
    props.onSaveYear(year);
    // console.log(year);

}


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter expenses by year</label>
        <select className='valueSelector' value={props.selected} onChange={yearChangeHandler}>
        <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;