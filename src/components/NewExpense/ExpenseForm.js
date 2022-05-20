import './ExpenseForm.sass'
import {useEffect, useState} from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  //
  // const [userInput, setUserInput] = useState({
  //   titleChangeHandler: '',
  //   amountChangeHandler: '',
  //   dateChangeHandler: '',
  // })


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   titleChangeHandler: event.target.value
    // })
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   amountChangeHandler: event.target.value
    // })
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   dateChangeHandler: event.target.value
    // })
  }

  // console.log(userInput)

  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData()
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }


  return (
    <form action="#" onSubmit={submitHandler}>
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
                 min='2022-01-01'
                 max='2023-12-31'/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button>
          Add Expense
        </button>
      </div>

    </form>
  )
}
export default ExpenseForm