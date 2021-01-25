import React from 'react';
import PropTypes from 'prop-types';
import { Card, Descriptions } from 'antd';
import moment from 'moment';

const ProTableDescriptions = (props) => {
  const { data } = props;
  return (
    <Card>
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="子菜单长度">{data.length}</Descriptions.Item>
        <Descriptions.Item label="创建人">
          {data && data.length > 0 && data[0].name}
        </Descriptions.Item>
        <Descriptions.Item label="编号">
          <a>421421</a>
        </Descriptions.Item>
        <Descriptions.Item label="创建时间">
          {moment(data && data.length > 0 && data[0].createdAt).format('YYYY-MM-DD hh:ss:mm')}
        </Descriptions.Item>
        <Descriptions.Item label="更新时间">
          {moment(data && data.length > 0 && data[0].createdAt).format('YYYY-MM-DD hh:ss:mm')}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default ProTableDescriptions;
ProTableDescriptions.propTypes = {
  data: PropTypes.any,
};
