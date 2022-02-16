import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {

  return (
    <div className="chart">
      {props.chartData.map((point) => {
        const barHeightPercent = (point.value / props.maxValue) * 100;
        return (
          <ChartBar
            key={point.month}
            barHeight={barHeightPercent}
            month={point.month}
          />
        );
      })}
    </div>
  );
}

export default Chart;
