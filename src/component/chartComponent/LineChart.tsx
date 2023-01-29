import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart: React.FC = () => {
  const labels = ["1月", "2月", "3月", "4月", "5月", "6月"];
  const graphData = {
    labels: labels,
    datasets: [
      {
        label: "A社",
        data: [65, 59, 60, 81, 56, 55],
        borderColor: "rgb(75, 192, 192)",
      },
      {
        label: "B社",
        data: [60, 55, 57, 61, 75, 50],
        borderColor: "rgb(75, 100, 192)",
      },
    ],
  };
  const options: {} = {
    maintainAspectRatio: false,
  };

  const divStyle: React.CSSProperties = {
    marginLeft: "auto",
    marginRight: "auto",
    margin: "10px",
    width: "500px",
  };

  return (
    <div>
      <Line
        height={200}
        width={300}
        data={graphData}
        options={options}
        id="chart-key"
      />
    </div>
  );
};

export default LineChart;
