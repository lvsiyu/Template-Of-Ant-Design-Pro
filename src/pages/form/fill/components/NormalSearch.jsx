import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'umi';
import { message } from 'antd';
import {
  QueryFilter,
  ProFormText,
  ProFormSelect,
  ProFormDatePicker,
  ProFormDateRangePicker,
} from '@ant-design/pro-form';

const NormalSearch = (props) => {
  const { dispatch } = props;

  const submitForm = (values) => {
    dispatch({
      type: 'modalFormModel/queryModalForm',
      payload: {
        value: values,
        callback: () => {
          message.success('提交成功');
          return true;
        },
      },
    });
  };

  return (
    <QueryFilter onFinish={async (values) => submitForm(values)} defaultCollapsed>
      <ProFormText name="name" label="应用名称" rules={[{ required: true }]} />
      <ProFormText name="creater" label="创建人" />
      <ProFormSelect name="sex" label="性别" showSearch valueEnum={{ man: '男', woman: '女' }} />
      <ProFormText name="status" label="应用状态" />
      <ProFormDatePicker name="startdate" label="响应日期" />
      <ProFormDateRangePicker name="create" label="创建时间" colSize={2} />
    </QueryFilter>
  );
};

export default connect(({ modalFormModel }) => ({
  queryModalForm: modalFormModel.queryModalForm,
}))(NormalSearch);

NormalSearch.propTypes = {
  dispatch: PropTypes.any,
};
