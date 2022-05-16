import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    {
      title: 'Car Insurance',
      amount: 1234.54,
      date: new Date(2001, 2, 23)
    },
    {
      title: 'Shopping',
      amount: 34.24,
      date: new Date(2001, 2, 23)
    },
    {
      title: 'Phone',
      amount: 674.84,
      date: new Date(2001, 2, 23)
    }
  ]


  return (
    <ExpenseItem/>

  )


}

export default App;
