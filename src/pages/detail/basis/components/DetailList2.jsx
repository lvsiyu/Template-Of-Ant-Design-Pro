import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Table } from 'antd';

const DetailList2 = (props) => {
  const { basicProgress, loading } = props;

  const status = (text) => {
    if (text === 'success') {
      return <Badge status="success" text="成功" />;
    }
    return <Badge status="processing" text="进行中" />;
  };

  const progressColumns = [
    {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '进度',
      dataIndex: 'rate',
      key: 'rate',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (text) => status(text),
    },
    {
      title: '角色',
      dataIndex: 'operator',
      key: 'operator',
    },
    {
      title: '耗时',
      dataIndex: 'cost',
      key: 'cost',
    },
  ];

  return (
    <Table
      bordered
      style={{ marginBottom: 16 }}
      pagination={false}
      loading={loading}
      dataSource={basicProgress}
      columns={progressColumns}
    />
  );
};

export default DetailList2;

DetailList2.propTypes = {
  basicProgress: PropTypes.any,
  loading: PropTypes.any,
};
