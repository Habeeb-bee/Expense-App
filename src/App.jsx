import { useState } from 'react'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

import './App.css'


const oldExpenses = [
  {

    id:'e1',
    title: "paper",
    amount: 2,
    date: new Date(2024, 8, 23),
  },

  {
    id:'e2',
    title: "chair",
    amount: 4,
    date: new Date(2022, 4, 6),
  },

  {
    id:'e3',
    title: "keyboard",
    amount: 1.2,
    date: new Date(2024, 4, 16),
  },
];


function App() {
  const [expenses, addedExpense] = useState(oldExpenses);

  const addExpenseHandler = (newExpense) => {
    addedExpense((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <>
      <div className="App">
      <NewExpense addExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  
      
      
    </>
  )
}

export default App
