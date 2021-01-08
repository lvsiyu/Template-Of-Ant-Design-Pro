import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { Radar } from '@ant-design/charts';

const RadarChartsModal = (props) => {
  const { radarData, isModalVisible, handleOk, handleCancel } = props;
  const config = {
    data: radarData && radarData.map((d) => ({ ...d, star: Math.log(d.star).toFixed(2) })),
    xField: 'name',
    yField: 'star',
    meta: {
      star: {
        alias: '分数',
        min: 0,
        nice: true,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
    },
    yAxis: {
      label: false,
      grid: {
        alternateColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    // 开启辅助点
    point: {},
    area: {},
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
      <Radar {...config} />
    </Modal>
  );
};

export default RadarChartsModal;

RadarChartsModal.propTypes = {
  radarData: PropTypes.any,
  isModalVisible: PropTypes.any,
  handleOk: PropTypes.any,
  handleCancel: PropTypes.any,
};
