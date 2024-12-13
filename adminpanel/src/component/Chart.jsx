import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useTheme } from "@mui/material/styles";

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FastingBarChart = ({ fastingData }) => {
  const theme = useTheme();
  // Process data for the chart
  const labels = fastingData.map((entry) => new Date(entry.createdAt).toLocaleDateString()); // Days of fasting
  const hours = fastingData.map((entry) => (entry.totalSecond / 60).toFixed(2)); // Convert seconds to minute
  fastingData.map((entry) => console.log(entry))
  const data = {
    labels, // Days
    datasets: [
      {
        label: 'Fasting Minute',
        data: hours, // Minute hours
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Fasting Minute Per Day',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Minute',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default FastingBarChart;
