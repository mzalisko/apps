import './ExpenseForm.sass'
import {useEffect, useState} from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }


  return (
    <form action="src/components/NewExpense/ExpenseForm#" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="#">Title</label>
          <input value={enteredTitle}
                 type="text"
                 onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="#">Amount</label>
          <input value={enteredAmount}
                 onChange={amountChangeHandler}
                 type="number"
                 min='0.01'
                 step='0.01'/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="#">Date</label>
          <input value={enteredDate}
                 onChange={dateChangeHandler} type="date"
                 min='2019-01-01'
                 max='2030-12-31'/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">
          Add Expense
        </button>
      </div>
    </form>
  )
}
export default ExpenseForm