import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import ReactEcharts from 'echarts-for-react';
import styles from './index.less';

const VisualizationForEcharts = () => {
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

  const item1 = {
    color: '#F54F4A',
  };
  const item2 = {
    color: '#FF8C75',
  };
  const item3 = {
    color: '#FFB499',
  };

  const data = [
    {
      children: [
        {
          value: 5,
          children: [
            {
              value: 1,
              itemStyle: item1,
            },
            {
              value: 2,
              children: [
                {
                  value: 1,
                  itemStyle: item2,
                },
              ],
            },
            {
              children: [
                {
                  value: 1,
                },
              ],
            },
          ],
          itemStyle: item1,
        },
        {
          value: 10,
          children: [
            {
              value: 6,
              children: [
                {
                  value: 1,
                  itemStyle: item1,
                },
                {
                  value: 1,
                },
                {
                  value: 1,
                  itemStyle: item2,
                },
                {
                  value: 1,
                },
              ],
              itemStyle: item3,
            },
            {
              value: 2,
              children: [
                {
                  value: 1,
                },
              ],
              itemStyle: item3,
            },
            {
              children: [
                {
                  value: 1,
                  itemStyle: item2,
                },
              ],
            },
          ],
          itemStyle: item1,
        },
      ],
      itemStyle: item1,
    },
    {
      value: 9,
      children: [
        {
          value: 4,
          children: [
            {
              value: 2,
              itemStyle: item2,
            },
            {
              children: [
                {
                  value: 1,
                  itemStyle: item1,
                },
              ],
            },
          ],
          itemStyle: item1,
        },
        {
          children: [
            {
              value: 3,
              children: [
                {
                  value: 1,
                },
                {
                  value: 1,
                  itemStyle: item2,
                },
              ],
            },
          ],
          itemStyle: item3,
        },
      ],
      itemStyle: item2,
    },
    {
      value: 7,
      children: [
        {
          children: [
            {
              value: 1,
              itemStyle: item3,
            },
            {
              value: 3,
              children: [
                {
                  value: 1,
                  itemStyle: item2,
                },
                {
                  value: 1,
                },
              ],
              itemStyle: item2,
            },
            {
              value: 2,
              children: [
                {
                  value: 1,
                },
                {
                  value: 1,
                  itemStyle: item1,
                },
              ],
              itemStyle: item1,
            },
          ],
          itemStyle: item3,
        },
      ],
      itemStyle: item1,
    },
    {
      children: [
        {
          value: 6,
          children: [
            {
              value: 1,
              itemStyle: item2,
            },
            {
              value: 2,
              children: [
                {
                  value: 2,
                  itemStyle: item2,
                },
              ],
              itemStyle: item1,
            },
            {
              value: 1,
              itemStyle: item3,
            },
          ],
          itemStyle: item3,
        },
        {
          value: 3,
          children: [
            {
              value: 1,
            },
            {
              children: [
                {
                  value: 1,
                  itemStyle: item2,
                },
              ],
            },
            {
              value: 1,
            },
          ],
          itemStyle: item3,
        },
      ],
      itemStyle: item1,
    },
  ];

  const getOption2 = {
    series: {
      radius: ['15%', '80%'],
      type: 'sunburst',
      sort: null,
      emphasis: {
        focus: 'ancestor',
      },
      data,
      label: {
        rotate: 'radial',
      },
      levels: [],
      itemStyle: {
        color: '#ddd',
        borderWidth: 2,
      },
    },
  };
  return (
    <PageContainer>
      <ProCard title="基本图表" headerBordered gutter={16} style={{ marginTop: 20 }}>
        <ProCard className={styles.card} bordered headerBordered title="折线图">
          <ReactEcharts option={getOption} style={{ width: '100%', height: '100%' }} />
        </ProCard>
        <ProCard className={styles.card} bordered headerBordered title="玫瑰图">
          <ReactEcharts option={getOption2} style={{ width: '100%', height: '100%' }} />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default VisualizationForEcharts;
