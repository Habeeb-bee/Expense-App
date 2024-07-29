import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";

const ExpenseList = (props) => {
  let expenseContent = (
    <h2 className="expenses-list__fallback">Found no expenses.</h2>
  );

  if (props.items.length > 0) {
    expenseContent = props.items.map((expenses) => (
      <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    ));
  }

  return expenseContent;
};

export default ExpenseList;
