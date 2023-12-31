import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/Expenses.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Nav from "./components/Nav/Nav";
// import "bootstrap/dist/css/bootstrap.min.css";

const dummyExpensesArray = [
  {
    id: "e1",
    title: "Built & hosted new projects",
    amount: 500.67,
    date: new Date(2023, 10, 4),
  },
 
  {
    id: "e2",
    title: "Car oil",
    amount: 900.32,
    date: new Date(2023, 6, 19),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 400.67,
    date: new Date(2023, 6, 19),
  },
  {
    id: "e4",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 6, 19),
  },
  {
    id: "e5",
    title: "Toilet paper",
    amount: 50.67,
    date: new Date(2022, 6, 19),
  },
  {
    id: "e6",
    title: "Groceries",
    amount: 250.67,
    date: new Date(2022, 6, 23),
  }
];

function App() {
  const [expensesArray, setExpensesArray] = useState(dummyExpensesArray);

  const addExpenseHandler = (expense) => {
    setExpensesArray((prevExpensesArray) => {
      return [expense, ...prevExpensesArray];
    });
    // console.log("in app js");
    // console.log(expense);  4   
  };
  
  return (
    <div className="container-fluid">
      <Nav></Nav>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expensesArray}></Expenses>
    </div>
  );
}

export default App;
