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
          text: 'Price'
        }
      },
    
      xAxis: {
        accessibility: {
          rangeDescription: 'Range: 2012 to 2020'
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
          pointStart: 2010
        }
      },
    
      series: [{
        name: 'Facebook',
        data: [100, 120, 150, 170, 121, 153, 321, 330]
      }, {
        name: 'Apple',
        data: [200, 202, 220, 235, 240, 226, 231, 241]
      }, {
        name: 'Microsoft',
        data: [170, 178, 176, 167, 157, 189, 139, 180]
      }, {
        name: 'Google',
        data: [890, 861, 857, 865, 800, 908, 947, 879]
      }, {
        name: 'Amazon',
        data: [1356, 1252, 1454, 1565, 2151, 2021, 1897, 2324]
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