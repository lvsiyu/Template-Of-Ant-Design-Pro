import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Progress, Tag, Space } from 'antd';
import ProList from '@ant-design/pro-list';

const dataSource = [];
for (let i = 0; i < 10; i += 1) {
  dataSource.push({
    title: `标题${i + 1}`,
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  });
}

const BasisList = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys) => setSelectedRowKeys(keys),
  };

  const basisListTag = () => {
    return (
      <Space size={0}>
        <Tag color="blue">tag1</Tag>
        <Tag color="#5BD8A6">tag2</Tag>
      </Space>
    );
  };

  const basisListProgress = () => {
    return (
      <div style={{ minWidth: 200, flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ width: '200px' }}>
          <div>发布中</div>
          <Progress percent={80} />
        </div>
      </div>
    );
  };

  const basisListDescription = () => {
    return (
      <span style={{ maxWidth: 200 }}>
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
      </span>
    );
  };

  const basisListAction = () => {
    return <a>操作</a>;
  };

  const basisListToolBar = () => {
    return [
      <Button key="3" type="primary">
        按钮
      </Button>,
    ];
  };

  return (
    <PageContainer>
      <ProList
        rowKey="title"
        headerTitle="基础列表"
        toolBarRender={basisListToolBar}
        expandable={{ expandedRowKeys, onExpandedRowsChange: setExpandedRowKeys }}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
        rowSelection={rowSelection}
        split
        metas={{
          title: {},
          subTitle: { render: basisListTag },
          description: { render: basisListDescription },
          avatar: {},
          content: { render: basisListProgress },
          actions: { render: basisListAction },
        }}
      />
    </PageContainer>
  );
};

export default BasisList;
