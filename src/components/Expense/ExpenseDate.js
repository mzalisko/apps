const ExpenseDate = ({data}) => {
 const month = data.date.toLocaleString('ua',{month:'long'})
 const year = data.date.toLocaleString('ua',{year:'numeric'})
  const day = data.date.toLocaleString('ua',{day:'numeric'})

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>

  )
}

export default ExpenseDate
