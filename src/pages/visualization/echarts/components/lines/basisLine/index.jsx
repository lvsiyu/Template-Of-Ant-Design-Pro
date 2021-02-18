import React from 'react';
import ReactEcharts from 'echarts-for-react';

const EchartsBasisLine = () => {
  const getOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  };

  return <ReactEcharts option={getOption} style={{ width: '100%', height: '100%' }} />;
};

export default EchartsBasisLine;
