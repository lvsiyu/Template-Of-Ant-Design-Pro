import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'umi';
import { message } from 'antd';
import {
  QueryFilter,
  ProFormText,
  ProFormDatePicker,
  ProFormRadio,
  ProFormCheckbox,
} from '@ant-design/pro-form';

const VerticalSearch = (props) => {
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
    <QueryFilter onFinish={async (values) => submitForm(values)} layout="vertical">
      <ProFormText name="name" label="这是一个超级超级长的名称" />
      <ProFormDatePicker name="birth" label="创建时间" />
      <ProFormText name="status" label="应用状态" />
      <ProFormRadio.Group
        name="freq"
        label="查询频度"
        options={[
          { value: 'weekly', label: '每周' },
          { value: 'quarterly', label: '每季度' },
          { value: 'monthly', label: '每月' },
          { value: 'yearly', label: '每年' },
        ]}
      />
      <ProFormCheckbox.Group
        name="checkbox"
        label="行业分布"
        options={['农业', '制造业', '互联网']}
      />
    </QueryFilter>
  );
};

export default connect(({ modalFormModel }) => ({
  queryModalForm: modalFormModel.queryModalForm,
}))(VerticalSearch);

VerticalSearch.propTypes = {
  dispatch: PropTypes.any,
};
