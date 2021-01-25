import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { ProTableMenu, ProTableDescriptions } from './components/index';

const rootSubmenuKeys = ['sub1', 'sub2'];

const PrpTables = () => {
  const [key, setKey] = useState('1');
  const [openKeys, setOpenKeys] = React.useState(['sub1']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((items) => openKeys.indexOf(items) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const waitTime = (time = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };
  const tableListDataSource = [];
  for (let i = 0; i < 2; i += 1) {
    tableListDataSource.push({
      key: i,
      name: `创建人 ${i}`,
      createdAt: Date.now() - Math.floor(Math.random() * 2000),
      progress: Math.ceil(Math.random() * 100) + 1,
    });
  }
  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: 80,
    },
    {
      title: '创建人',
      dataIndex: 'name',
      valueType: 'string',
    },
    {
      title: '时间',
      dataIndex: 'createdAt',
      valueType: 'date',
    },
    {
      title: '进度条',
      dataIndex: 'progress',
      valueType: 'progress',
    },
  ];
  return (
    <PageContainer>
      <ProTable
        columns={columns}
        bordered
        rowKey="key"
        pagination={{
          showSizeChanger: true,
        }}
        tableRender={(_, dom) => (
          <ProTableMenu dom={dom} setKey={setKey} openKeys={openKeys} onOpenChange={onOpenChange} />
        )}
        tableExtraRender={(_, data) => <ProTableDescriptions data={data} />}
        params={{ key }}
        request={async () => {
          await waitTime(200);
          return {
            success: true,
            data: tableListDataSource,
          };
        }}
        dateFormatter="string"
        headerTitle={`子菜单${key}`}
      />
    </PageContainer>
  );
};

export default PrpTables;
