import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  const data = [
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
      date: new Date(20012, 6, 15)
    },
    {
      id: 3,
      title: 'Phone',
      amount: 674.84,
      date: new Date(2022, 3, 29)
    }

  ]


  return (
    <>
      <NewExpense/>
      <Expense data={data}/>
    </>


  )


}

export default App;
