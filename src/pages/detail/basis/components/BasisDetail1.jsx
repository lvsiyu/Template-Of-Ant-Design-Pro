import React from 'react';
import PropTypes from 'prop-types';
import { Descriptions } from 'antd';

const BasisDetail1 = (props) => {
  const { data } = props;
  return (
    <Descriptions title="详情展示1" style={{ marginBottom: 32 }}>
      <Descriptions.Item label="详情标题1">{data.text1}</Descriptions.Item>
      <Descriptions.Item label="详情标题2">{data.text2}</Descriptions.Item>
      <Descriptions.Item label="详情标题3">{data.text3}</Descriptions.Item>
      <Descriptions.Item label="详情标题4">{data.text4}</Descriptions.Item>
    </Descriptions>
  );
};

export default BasisDetail1;

BasisDetail1.propTypes = {
  data: PropTypes.any,
};
