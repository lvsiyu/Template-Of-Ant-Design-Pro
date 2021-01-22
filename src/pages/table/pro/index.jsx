import React, { useState } from 'react';
import { Card, Menu, Descriptions } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { MailOutlined } from '@ant-design/icons';

const PrpTables = () => {
  const [key, setKey] = useState('1');

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
      name: `TradeCode ${i}`,
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
      title: '更新时间',
      key: 'since2',
      dataIndex: 'createdAt',
      valueType: 'date',
    },
    {
      title: '执行进度',
      dataIndex: 'progress',
      valueType: 'progress',
    },
  ];
  return (
    <PageContainer>
      <ProTable
        columns={columns}
        rowKey="key"
        pagination={{
          showSizeChanger: true,
        }}
        tableRender={(_, dom) => (
          <div
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Menu
              onSelect={(e) => setKey(e.key)}
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <Menu.SubMenu
                key="sub1"
                title={
                  <span>
                    <MailOutlined />
                    <span>Navigation One</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="g1" title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </Menu.SubMenu>
            </Menu>
            <div
              style={{
                flex: 1,
              }}
            >
              {dom}
            </div>
          </div>
        )}
        tableExtraRender={(_, data) => (
          <Card>
            <Descriptions size="small" column={3}>
              <Descriptions.Item label="Row">{data.length}</Descriptions.Item>
              <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
              <Descriptions.Item label="Association">
                <a>421421</a>
              </Descriptions.Item>
              <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
              <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
            </Descriptions>
          </Card>
        )}
        params={{
          key,
        }}
        request={async () => {
          await waitTime(200);
          return {
            success: true,
            data: tableListDataSource,
          };
        }}
        dateFormatter="string"
        headerTitle="自定义表格主体"
      />
    </PageContainer>
  );
};

export default PrpTables;
