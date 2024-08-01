import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

    const ExpenseDataHandler = (entertedExpenseData) => {
        const expenseData = {
            ...entertedExpenseData,
            id: Math.random().toString()
        };
        props.addExpense(expenseData)
    };


    return( <div className='new-expense'>
    <h1>Expense</h1>
    <ExpenseForm  SaveExpenseData={ExpenseDataHandler} />

    </div>
    );
};


export default NewExpense;