import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { WordCloud } from '@ant-design/charts';

const WordCloudChartsModal = (props) => {
  const { wordCloudData, isModalVisible, handleOk, handleCancel } = props;
  const config = {
    data: wordCloudData,
    wordField: 'x',
    weightField: 'value',
    color: '#122c6a',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [16, 50],
    },
    interactions: [{ type: 'element-active' }],
    state: { active: { style: { lineWidth: 1 } } },
  };

  return (
    <Modal
      title="饼图"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
      centered
      destroyOnClose
    >
      <WordCloud {...config} />
    </Modal>
  );
};

export default WordCloudChartsModal;

WordCloudChartsModal.propTypes = {
  wordCloudData: PropTypes.any,
  isModalVisible: PropTypes.any,
  handleOk: PropTypes.any,
  handleCancel: PropTypes.any,
};
