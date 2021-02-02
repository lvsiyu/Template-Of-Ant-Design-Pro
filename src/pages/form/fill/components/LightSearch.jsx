import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'umi';
import { message } from 'antd';
import {
  LightFilter,
  ProFormText,
  ProFormDatePicker,
  ProFormSelect,
  ProFormDigit,
  ProFormSwitch,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormTimePicker,
  ProFormSlider,
  ProFormFieldSet,
} from '@ant-design/pro-form';

const LightSearch = (props) => {
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
    <LightFilter
      initialValues={{
        name1: 'yutingzhao1991',
        name3: '2020-08-19',
        range: [20, 80],
        sex: [
          { value: 'open1', label: '打开' },
          { value: 'closed2', label: '关闭' },
        ],
      }}
      size="middle"
      onFinish={async (values) => submitForm(values)}
    >
      <ProFormSelect
        name="sex"
        label="性别"
        showSearch
        allowClear={false}
        fieldProps={{
          labelInValue: true,
        }}
        valueEnum={{
          man: '男',
          woman: '女',
        }}
      />
      <ProFormSelect
        name="area"
        label="地区"
        mode="multiple"
        valueEnum={{
          beijing: '北京',
          shanghai: '上海',
          hangzhou: '杭州',
          long: '这是一个很长的用来测试溢出的项目',
        }}
      />
      <ProFormDigit name="count" label="数量" />
      <ProFormSlider name="range" label="范围" range />
      <ProFormText name="name1" label="名称" />
      <ProFormSwitch name="open" label="开关" secondary />
      <ProFormText name="name2" label="地址" secondary />
      <ProFormDatePicker name="name3" label="不能清空的日期" allowClear={false} />
      <ProFormDateRangePicker name="date" label="日期范围" />
      <ProFormDateTimePicker name="datetime" label="日期时间" />
      <ProFormTimePicker name="time" label="时间" />
      <ProFormFieldSet name="name" label="姓名">
        <ProFormText />
        <ProFormText />
      </ProFormFieldSet>
    </LightFilter>
  );
};

export default connect(({ modalFormModel }) => ({
  queryModalForm: modalFormModel.queryModalForm,
}))(LightSearch);

LightSearch.propTypes = {
  dispatch: PropTypes.any,
};
