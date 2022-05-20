import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.sass'
import Card from "../UI/Card";
import {useState} from "react";



const ExpenseItem = ({element}) => {


  const [title, setTitle] = useState(element.title);





  //
  // const handlerClick = () => {
  //  setTitle('Update')
  //   console.log(title)
  // }


  return (
    <Card className='expense-item'>
      <ExpenseDate data={element}/>
      <div className='expense-item__description'>{title}</div>
      <div className='expense-item__price'>{element.amount}</div>
    </Card>
  )
}

export default ExpenseItem
