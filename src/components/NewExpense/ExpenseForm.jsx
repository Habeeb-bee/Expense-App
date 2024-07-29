import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // const titleChange = (event) => {
  //   // SetEntered(event.target.value);

  //   setUserInput((prev) => {
  //     return {
  //       ...prev,
  //       enteredTitle: event.target.value,
  //     };
  //   });
  // };

  // const amountChange = (event) => {
  //   // SetEntered(event.target.value);

  //   setUserInput({
  //     ...userInput,
  //     enteredAmount: event.target.value,
  //   });
  // };

  // const dateChange = (event) => {
  //   // SetEntered(event.target.value);

  //   setUserInput({
  //     ...userInput,
  //     enteredDate: event.target.value,
  //   });
  // };

  const submitEvent = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData);
    event.target.reset()

    const expenseData = {
      title: formEntries.title,
      amount: formEntries.amount,
      date: new Date(formEntries.date),
    };

    props.SaveExpenseData(expenseData);

  };


  return (
    <form onSubmit={submitEvent}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"  name="title" />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            placeholder="$"
            name="amount"
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" name="date" />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
