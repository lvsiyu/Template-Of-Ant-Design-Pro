import React from 'react';
import ReactEcharts from 'echarts-for-react';

const EchartsAreaLine = () => {
  const getOption = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {},
      },
    ],
  };

  return <ReactEcharts option={getOption} style={{ width: '100%', height: '100%' }} />;
};

export default EchartsAreaLine;
