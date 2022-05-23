import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.sass'
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate data={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
