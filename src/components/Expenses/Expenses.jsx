import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";
import { useState } from "react";

const Expenses = function (props) {
  const [filteredYear, setYear] = useState("2024");

  const filterChange = (year) => {
    setYear(year);
   
  };



  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });




  return (
    <div>
    <Card className="expenses">

      <ExpenseFilter selected={filteredYear} onChangeYear={filterChange} />
      <ExpenseChart expenses={filteredExpenses}/>
     <ExpenseList items={filteredExpenses}/>
    </Card>
    </div>
  );
};

export default Expenses;
