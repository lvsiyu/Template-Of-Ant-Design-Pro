import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'umi';
import { message } from 'antd';
import ProForm, {
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
  ModalForm,
} from '@ant-design/pro-form';

const ModalsFormNormal = (props) => {
  const { dispatch, modalVisit, setModalVisit } = props;

  const submitForm = (values) => {
    dispatch({
      type: 'modalFormModel/queryModalForm',
      payload: {
        value: values,
        callback: () => {
          message.success('提交成功');
          setModalVisit(false);
          return true;
        },
      },
    });
  };

  return (
    <ModalForm
      title="新建表单"
      visible={modalVisit}
      onFinish={(values) => submitForm(values)}
      onVisibleChange={setModalVisit}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="input1"
          label="输入框1"
          tooltip="必填项，最长为 24 位"
          placeholder="请输入"
          rules={[{ required: true, message: '请输入内容!' }]}
        />
        <ProFormText width="md" name="input2" label="输入框2" placeholder="请输入" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText width="md" name="input3" label="输入框3" placeholder="请输入" />
        <ProFormDateRangePicker name="datepicker" label="时间范围选择框" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          options={[
            { value: 'option1', label: '选项1' },
            { value: 'option2', label: '选项2' },
          ]}
          width="xs"
          name="select1"
          label="单选框1"
        />
        <ProFormSelect
          width="xs"
          options={[
            { value: 'option1', label: '选项1' },
            { value: 'option2', label: '选项2' },
          ]}
          name="select2"
          label="单选框2"
        />
      </ProForm.Group>
      <ProFormText width="sm" name="text4" label="输入框4" />
      <ProFormText name="text5" disabled label="不可选输入框1" initialValue="默认值默认值" />
      <ProFormText width="xs" name="text6" disabled label="不可选输入框2" initialValue="默认值" />
    </ModalForm>
  );
};

export default connect(({ modalFormModel }) => ({
  queryModalForm: modalFormModel.queryModalForm,
}))(ModalsFormNormal);

ModalsFormNormal.propTypes = {
  dispatch: PropTypes.any,
  modalVisit: PropTypes.any,
  setModalVisit: PropTypes.any,
};
