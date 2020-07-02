import { Options } from 'highcharts';

export const lineChartOptions: Options = {
    title: {
        text: 'FAMGA Stock Price since 2012'
      },
    
      subtitle: {
        text: 'Data sourced from *****'
      },
    
      yAxis: {
        title: {
          text: 'Price ($)'
        }
      },
    
      xAxis: {
        title: {
          text: 'Year'
        },
        accessibility: {
          rangeDescription: 'Range: 2012 to 2019'
        }
      },
    
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
    
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2012
        },
      },
    
      series: [{
        type: 'line',
        name: 'Facebook',
        data: [24.6729, 35.4808 , 68.7622, 88.7719, 117.0351, 156.5762, 171.5109, 181.6375]
      }, {
        type: 'line',
        name: 'Apple',
        data: [82.2928, 67.5193, 92.2646, 120.0385, 104.6040, 150.5511, 189.0534, 208.2559]
      }, {
        type: 'line',
        name: 'Microsoft',
        data: [29.8203, 32.4915, 42.4533, 46.7136, 55.2593, 71.9840, 101.0340, 130.3820]
      }, {
        type: 'line',
        name: 'Google',
        data: [642.8165, 884.2413, 713.9654, 619.9836, 763.2142, 939.7734, 1122.0436, 1191.2169]
      }, {
        type: 'line',
        name: 'Amazon',
        data: [220.3037, 298.0322, 332.5510, 478.1373, 699.5231, 968.1670, 1641.7262, 1789.1929]
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    }