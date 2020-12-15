import { Space } from 'antd';
import React, { useState, Fragment } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { selectStationValue } from '@/utils/dictionary';
import { queryDistribution } from './service/index';
import AssignmentsModal from './modals/AssignmentsModal';

const TemporaryDistribution = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalSelect, setModalSelect] = useState({ selectData: 0 });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (data) => {
    setIsModalVisible(false);
    setModalSelect({ selectData: data });
    console.log(modalSelect.selectData);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: '单位名称',
      dataIndex: 'name',
      valueType: 'input',
    },
    {
      title: '单位类型',
      dataIndex: 'type',
      search: false,
    },
    {
      title: '单位地址',
      dataIndex: 'address',
      valueType: 'input',
    },
    {
      title: '采集时间',
      dataIndex: 'time',
      search: false,
    },
    {
      title: '采集派出所',
      dataIndex: 'station',
      valueType: 'select',
      valueEnum: selectStationValue,
    },
    {
      title: '采集人',
      dataIndex: 'collectionPeople',
      search: false,
    },
    {
      title: '采集开始时间',
      dataIndex: 'collectionStartTime',
      hideInTable: true,
      valueType: 'dateTime',
    },
    {
      title: '采集结束时间',
      dataIndex: 'collectionEndTime',
      hideInTable: true,
      valueType: 'dateTime',
    },
    /* {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: () => (
        <Fragment>
          <a>操作</a>
          <Divider type="vertical" />
          <a>操作</a>
        </Fragment>
      ),
    }, */
  ];
  return (
    <Fragment>
      <PageContainer>
        <ProTable
          rowKey="id"
          search={{
            labelWidth: 120,
          }}
          rowSelection={{
            selections: false,
          }}
          tableAlertRender={({ selectedRowKeys, onCleanSelected }) => (
            <Space size={24}>
              <span>
                已选 {selectedRowKeys.length} 项
                <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>
                  取消选择
                </a>
              </span>
            </Space>
          )}
          tableAlertOptionRender={() => {
            return (
              <Space size={16}>
                <a onClick={showModal}>分配任务</a>
                <a>导出数据</a>
              </Space>
            );
          }}
          bordered
          pagination={{
            showQuickJumper: true,
          }}
          headerTitle="临时任务列表"
          request={(params) => queryDistribution({ ...params })}
          columns={columns}
        />
      </PageContainer>
      <AssignmentsModal
        visible={isModalVisible}
        handleClickOk={handleOk}
        handleClickCancel={handleCancel}
      />
    </Fragment>
  );
};

export default TemporaryDistribution;
