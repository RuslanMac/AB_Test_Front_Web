import { Bar } from 'react-chartjs-2';
import { observer } from 'mobx-react';
import CommonAppStore from '../../Stores';
const BarChart = () => {
  const data = {
    labels: CommonAppStore.chartLabel,
    datasets: [
      {
        label: '# Histogram Users',
        data: CommonAppStore.chartData, 
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return <Bar data={data} options={options} />;
};

export default observer(BarChart);
