import React, { Fragment, useState } from 'react';
import { Space } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { queryFormList } from './service/index';
import { ModalsFormNormal, ModalsFormDrawer } from './modals/index';

const ModalsForm = () => {
  const [modalVisit, setModalVisit] = useState(false);
  const [drawerVisit, setDrawerVisit] = useState(false);

  const modalFormAction = () => {
    return (
      <Space>
        <a
          onClick={() => {
            setModalVisit(true);
          }}
        >
          普通弹框
        </a>
        <a
          onClick={() => {
            setDrawerVisit(true);
          }}
        >
          抽屉弹框
        </a>
      </Space>
    );
  };

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      valueType: 'input',
      ellipsis: true,
      width: 100,
    },
    {
      title: '性别',
      dataIndex: 'sex',
      ellipsis: true,
      width: 50,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      valueType: 'input',
      ellipsis: true,
      width: 50,
    },
    {
      title: '住址',
      dataIndex: 'address',
      search: false,
      ellipsis: true,
    },
    {
      title: '备注',
      dataIndex: 'discription',
      search: false,
      ellipsis: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      width: 140,
      render: modalFormAction,
    },
  ];
  return (
    <Fragment>
      <PageContainer>
        <ProTable
          rowKey="id"
          search={{
            labelWidth: 120,
          }}
          bordered
          pagination={{
            showQuickJumper: true,
          }}
          headerTitle="弹框表单"
          request={(params) => queryFormList({ ...params })}
          columns={columns}
        />
      </PageContainer>

      <ModalsFormNormal modalVisit={modalVisit} setModalVisit={setModalVisit} />
      <ModalsFormDrawer drawerVisit={drawerVisit} setDrawerVisit={setDrawerVisit} />
    </Fragment>
  );
};

export default ModalsForm;
