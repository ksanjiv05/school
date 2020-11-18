import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',

      backgroundColor: '#f70b83',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const Charts = () => {
  return (
    <>
      <div className="leftchart">
        <Bar
          data={state}
          // data={{ labels: [], datasets: [{}] }}
          options={{
            title: {
              display: true,
              text: 'Average Rainfall per month',
              fontSize: 20,
              fontColor: 'white',
            },
            legend: {
              display: true,
              position: 'right',
            },

            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
      <div className="rightchart">
        <Doughnut
          data={state}
          options={{
            title: {
              display: true,
              text: 'Average Rainfall per month',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'right',
            },
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
    </>
  );
};

export default Charts;
