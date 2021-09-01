/* eslint-disable no-undef */
import useStyles from './styles';
import Table from '../Components/Table';
import Button from '../Components/Button';
import CommonAppStore from '../Stores';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
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
