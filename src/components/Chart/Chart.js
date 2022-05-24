import './Chart.sass'
import ChartBar from "./ChartBar";

const Chart = props => {

  const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value)
  const totalMaxValue = Math.max(...dataPointsValue)

  console.log(dataPointsValue,totalMaxValue)

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}

        />
      ))}
    </div>
  )
}
export default Chart;