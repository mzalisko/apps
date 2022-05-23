import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: 'Car Insurance',
    amount: 1234.54,
    date: new Date(2001, 2, 3)
  },
  {
    id: 2,
    title: 'Shopping',
    amount: 34.24,
    date: new Date(2012, 6, 15)
  },
  {
    id: 3,
    title: 'Phone',
    amount: 674.84,
    date: new Date(2022, 3, 29)
  }

]


const App = () => {
  const [data, setData] = useState(DUMMY_EXPENSES)


  const addExpenseHandler = expense => {
    setData(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }


  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={data}/>
    </>
  )


}

export default App;
