import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: props.barHeight + "%" }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.month}</div>
    </div>
  );
}

export default ChartBar;
