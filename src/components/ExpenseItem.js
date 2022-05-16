import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.sass'

function ExpenseItem() {
  return(
    <div className='expense-item'>
      <ExpenseDate/>
      <div className='expense-item__description'>
        <h2>Toilet paper</h2>
        <div className='expense-item__price'>$234.23</div>
      </div>

    </div>
  )
}
export  default  ExpenseItem
