/* eslint-disable no-undef */
import useStyles from './styles';
import Table from '../Components/Table';
import Button from '../Components/Button';
import CommonAppStore from '../Stores';
import { useState } from 'react';
import { observer } from 'mobx-react';
import { Bar } from 'react-chartjs-2';
import BarChart from '../Components/Bar';

const Page = () => {

  const c = useStyles();      
  const data = {
    labels: CommonAppStore.chartLabel,
    datasets: [
      {
        label: '# Histogram Users',
        data: CommonAppStore.chartData,
        // backgroundColor: [
        //   'rgba(255, 99, 132, 0.2)',
        //   'rgba(54, 162, 235, 0.2)',
        //   'rgba(255, 206, 86, 0.2)',
        //   'rgba(75, 192, 192, 0.2)',
        //   'rgba(153, 102, 255, 0.2)',
        //   'rgba(255, 159, 64, 0.2)',
        // ],
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
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
  
  async function Calculate() {
    await CommonAppStore.getData();
  }

  return (
    <div className={c.Main}>
      <div style={{width: '41%'}}>
        <Table />
      </div>
      <div className={c.Metric}>
        <div className={c.MetricInformation}>
          <div>
          <label className={c.Label}>Rolling Retention 7 day = {CommonAppStore.metric}% </label>
          </div>
          <div>
          <Button name="Calculate" action={Calculate} />
          </div>
        </div>
        <div className={c.Bar}>
          {/* <BarChart /> */}
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default observer(Page);
