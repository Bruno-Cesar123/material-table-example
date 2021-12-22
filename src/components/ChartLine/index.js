import { useState, useEffect } from 'react';
import Chart from "react-apexcharts";

export function ChartLine() {
  const [chartData, setChartData] = useState({
    labels: {
      categories: [],
    },
    series: [
      {
        name: '',
        data: [],
      }
    ]
  });

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/exchange_rates')
    .then(response => response.json())
    .then(response => {

      const parsed = Object.entries(response.rates);
      const data = parsed.map(p => p[1]).map(p => ({ name: p.name, value: p.value }));

      const myLabels = data.map((x) => x.name);
      const mySeries = data.map((x) => x.value);

      setChartData({
        labels: {
          categories: myLabels,
        },
        series: [
          {
            name: 'QTD',
            data: mySeries,
          }
        ]
      })
    })
  }, [])

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  };


  return (
    <Chart
      options={{...options, xaxis: chartData.labels}}
      series={chartData.series}
      type="line"
      height="600"
    />
  )
}