import './Expense.sass'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expense =({data}) => {


  return (
    <Card className='expense'>
      {
        data.map(item => {
          return <ExpenseItem key={item.id} element={item} />
        })
      }

    </Card>
  )
}

export default Expense
