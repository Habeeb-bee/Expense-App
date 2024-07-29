import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  
  const dataPointsValue = props.dataPoints.map( (datapoint)=> datapoint.value)  //the dataPoints is gotten from chartDataPoints in ExpenseChart.js 
  const totalMax = Math.max(...dataPointsValue);

  return (
    <div className="chart">  
      {props.dataPoints.map((dataPoint) => ( 
        <ChartBar
        key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
