import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 20,
      right: 20,
    },
  },

  borderRadius: 5,
  scales: {
    x: {
      stacked: true,
      grid: {
        drawBorder: false,
        lineWidth: 0,
      },
    },
    // y: {
    //   stacked: true,
    // },
    y: {
      display: false,
    },
  },
};

export default function ChartBar({ data }) {
  const dataSet = {
    labels: data.map(item => item.created_at),
    datasets: [
      {
        data: data.map(item => item.total),
        backgroundColor: ['#B2C5D4'],
      },
    ],
  };

  return <Bar options={options} data={dataSet} />;
}
