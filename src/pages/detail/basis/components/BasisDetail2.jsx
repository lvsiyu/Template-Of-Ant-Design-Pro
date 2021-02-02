import React from 'react';
import PropTypes from 'prop-types';
import { Descriptions } from 'antd';

const BasisDetail2 = (props) => {
  const { data } = props;
  return (
    <Descriptions title="详情展示2" style={{ marginBottom: 32 }}>
      <Descriptions.Item label="详情标题1">{data.text1}</Descriptions.Item>
      <Descriptions.Item label="详情标题2">{data.text2}</Descriptions.Item>
      <Descriptions.Item label="详情标题3">{data.text3}</Descriptions.Item>
      <Descriptions.Item label="详情标题4">{data.text4}</Descriptions.Item>
      <Descriptions.Item label="详情标题5">{data.text5}</Descriptions.Item>
    </Descriptions>
  );
};

export default BasisDetail2;

BasisDetail2.propTypes = {
  data: PropTypes.any,
};
