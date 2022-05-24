import './ExpenseList.sass'
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpenseList = (props) => {
  let expenseContent = <p>No Expense Found.</p>;


  if (props.items.length > 0) {
    expenseContent = props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}/>
      ))
  }

  return(
    <ul className='expenses-list'>
      <li className='expenses-list__fallback'>
        {expenseContent}
      </li>
    </ul>
  )

};


export default ExpenseList