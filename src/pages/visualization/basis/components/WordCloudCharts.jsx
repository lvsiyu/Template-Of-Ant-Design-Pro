import React, { useEffect } from 'react';
import { Skeleton } from 'antd';
import { connect } from 'umi';
import { WordCloud } from '@ant-design/charts';

const WordCloudCharts = (props) => {
  const { dispatch, wordCloudData } = props;
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'basis/queryWordCloud',
      });
    }
  }, []);
  const config = {
    data: wordCloudData,
    wordField: 'x',
    weightField: 'value',
    color: '#122c6a',
    height: 200,
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [16, 50],
    },
    interactions: [{ type: 'element-active' }],
    state: { active: { style: { lineWidth: 1 } } },
  };

  return wordCloudData ? <WordCloud {...config} /> : <Skeleton style={{ height: '200px' }} />;
};

export default connect(({ basis }) => ({
  wordCloudData: basis.wordCloudData,
}))(WordCloudCharts);
