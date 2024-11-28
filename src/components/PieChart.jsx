"use client";

import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Despesas", "Receitas"],
    datasets: [
      {
        label: "Colors",
        data: [55, 45],
        backgroundColor: [
          "rgb(207, 15, 57)",
          "#4bb137",
        ],
        borderColor: [
          "rgb(207, 15, 57)",
          "#4bb137",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;