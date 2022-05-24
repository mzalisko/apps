import './Expense.sass'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import {useState} from "react";
import ExpenseList from "./ExpenseList/ExpenseList";
import Chart from "../Chart/Chart";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

const Expense = (props) => {

  const [selectedYear, setSelectedYear] = useState('2022')

  const filterChangedHandler = selectedYear => {
    setSelectedYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  })


  return (
    <div>


      <Card className='expense'>
        <ExpensesFilter selected={selectedYear} onFilterChange={filterChangedHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expense
