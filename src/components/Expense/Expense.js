import './Expense.sass'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import {useState} from "react";

const Expense = (props) => {

  const [selectedYear, setSelectedYear] = useState('2020')

  const filterChangedHandler = selectedYear => {
    setSelectedYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  })

  let expenseContent = <p>No Expense Found.</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.length > 0 &&
      filteredExpenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}/>
      ))
  }

  return (
    <div>


      <Card className='expense'>
        <ExpensesFilter selected={selectedYear} onFilterChange={filterChangedHandler}/>
        {expenseContent}
      </Card>
    </div>
  )
}

export default Expense
