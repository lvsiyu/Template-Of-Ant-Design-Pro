import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Tooltip, Space, Table } from 'antd';
import ProTable from '@ant-design/pro-table';
import { queryModalTable2 } from '../service/index';

const ProcessMap = {
  close: 'normal',
  running: 'active',
  online: 'success',
  error: 'exception',
};

const tableDate = (text, record) => (
  <Tooltip title={`${record.date} ${record.time}`}>
    <span>{`${record.date} ${record.time}`}</span>
  </Tooltip>
);

const TableModal = (props) => {
  const { visible, handleClickOk, handleClickCancel } = props;
  const [selectData, setSelectData] = useState([]);
  const ref = useRef();

  const handleSelectData = (selectedRowKeys, selectedRows, onCleanSelected) => {
    setSelectData(selectedRows);
    return (
      <Space size={24}>
        <span>
          已选 {selectedRowKeys.length} 项
          <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>
            取消选择
          </a>
        </span>
      </Space>
    );
  };

  const handleClearSelectForOk = () => {
    ref.current.clearSelected();
    handleClickOk(selectData);
  };

  const handleClearSelectForCancel = () => {
    ref.current.clearSelected();
    setSelectData([]);
    handleClickCancel();
  };

  const columns = [
    {
      title: '排序',
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '基本名称',
      dataIndex: 'name',
      valueType: 'input',
      ellipsis: true,
    },
    {
      title: '基本描述',
      dataIndex: 'description',
      search: false,
      ellipsis: true,
    },
    {
      title: '日期显示',
      dataIndex: 'date-time',
      valueType: 'input',
      search: false,
      ellipsis: true,
      render: (text, record) => tableDate(text, record),
    },
    {
      title: '状态',
      dataIndex: 'status',
      initialValue: 'all',
      valueType: 'select',
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        close: { text: '关闭', status: 'Default' },
        running: { text: '运行中', status: 'Processing' },
        online: { text: '已上线', status: 'Success' },
        error: { text: '异常', status: 'Error' },
      },
    },
    {
      title: '进度展示',
      dataIndex: 'progress',
      valueType: (item) => ({
        type: 'progress',
        status: ProcessMap[item.status],
      }),
    },
    {
      title: '时间选择',
      dataIndex: 'selectTime',
      hideInTable: true,
      valueType: 'dateTime',
    },
  ];

  return (
    <Modal
      title="弹框列表"
      visible={visible}
      onOk={handleClearSelectForOk}
      onCancel={handleClearSelectForCancel}
      width={1000}
      centered
    >
      <ProTable
        rowKey="id"
        actionRef={ref}
        search={{
          filterType: 'light',
        }}
        bordered
        pagination={{
          showQuickJumper: true,
          pageSize: 10,
        }}
        rowSelection={{
          // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
          // 注释该行则默认不显示下拉选项
          selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
        }}
        tableAlertRender={({ selectedRowKeys, selectedRows, onCleanSelected }) =>
          handleSelectData(selectedRowKeys, selectedRows, onCleanSelected)
        }
        tableAlertOptionRender={() => {
          return (
            <Space size={16}>
              <a>操作1</a>
              <a>操作2</a>
            </Space>
          );
        }}
        headerTitle="弹框表格"
        request={(params) => queryModalTable2({ ...params })}
        columns={columns}
      />
    </Modal>
  );
};

export default TableModal;

TableModal.propTypes = {
  visible: PropTypes.any,
  handleClickOk: PropTypes.any,
  handleClickCancel: PropTypes.any,
};
