import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';
import { connect } from 'umi';
import { WordCloud } from '@ant-design/charts';

const WordCloudCharts = (props) => {
  const { dispatch, wordCloudData } = props;
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'modalsVisualization/queryWordCloud',
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

export default connect(({ modalsVisualization }) => ({
  wordCloudData: modalsVisualization.wordCloudData,
}))(WordCloudCharts);

WordCloudCharts.propTypes = {
  dispatch: PropTypes.any,
  wordCloudData: PropTypes.any,
};
