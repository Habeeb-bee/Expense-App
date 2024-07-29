import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { label:'Jan', value:0},
    { label:'Feb', value:0},
    { label:'Mar', value:0},
    { label:'Apr', value:0},
    { label:'May', value:0},
    { label:'Jun', value:0},
    { label:'Jul', value:0},
    { label:'Aug', value:0},
    { label:'Sep', value:0},
    { label:'Oct', value:0},
    { label:'Nov', value:0},
    { label:'Dec', value:0},

  ]


  for (const expense of props.expenses) { 
     const expenseMonth = expense.date.getMonth(); //the expense.date.getMonth() is from the filteredExpenses in Expenses.js same as the props.expenses
     chartDataPoints[expenseMonth].value += expense.amount; // overhere we are changing the value to the amount spent by adding the value of the oldExpense amount
  }


    return <Chart dataPoints={chartDataPoints}/>
};

export default ExpenseChart