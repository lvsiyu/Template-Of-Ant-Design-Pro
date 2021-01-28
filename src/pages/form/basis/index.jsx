import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'umi';
import { message } from 'antd';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import ProForm, {
  ProFormText,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormRadio,
  ProFormUploadButton,
  ProFormDigit,
  ProFormTextArea,
  ProFormCheckbox,
} from '@ant-design/pro-form';

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const basisFormFooter = (_, dom) => {
  return <FooterToolbar>{dom}</FooterToolbar>;
};

const BasisForm = (props) => {
  const { dispatch } = props;

  const submitFormSuccess = () => {
    message.success('提交成功');
  };

  const submitForm = (values) => {
    dispatch({
      type: 'basisForm/queryBasisFormData',
      payload: {
        value: values,
        callback: submitFormSuccess,
      },
    });
  };

  return (
    <PageContainer>
      <ProForm
        submitter={{
          render: (_, dom) => basisFormFooter(_, dom),
        }}
        onFinish={async (values) => {
          await waitTime(2000);
          submitForm(values);
        }}
      >
        <ProCard gutter={[{ xs: 8, sm: 8, md: 16, lg: 24, xl: 32 }, 16]}>
          <ProCard bordered headerBordered title="输入框">
            <ProForm.Group>
              <ProFormText
                name="text1"
                label="默认长度的输入框"
                tooltip="最长为 24 位"
                placeholder="请输入"
                rules={[{ required: true, message: '请输入内容!' }]}
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormText width="xs" name="text2" label="104长度的输入框" placeholder="请输入" />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormText width="sm" name="text3" label="216长度的输入框" placeholder="请输入" />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormText width="md" name="text4" label="328长度的输入框" placeholder="请输入" />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormText width="lg" name="text5" label="440长度的输入框" placeholder="请输入" />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormText width="xl" name="text6" label="552长度的输入框" placeholder="请输入" />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormDigit width="md" name="num" label="数字输入框" initialValue={5} />
            </ProForm.Group>
            <ProFormText name="text7" label="未限制长度的输入框" placeholder="请输入" />
          </ProCard>
          <ProCard bordered headerBordered title="选择框">
            <ProForm.Group>
              <ProFormDatePicker width="md" name="datepicker" label="日期选择框" />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormDateRangePicker width="md" name="rangepicker" label="日期范围选择框" />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormSelect
                options={[{ value: 'chapter', label: '选项1' }]}
                width="md"
                name="select"
                label="下拉选择框"
              />
            </ProForm.Group>

            <ProForm.Group>
              <ProFormSelect
                initialValue="option1"
                options={[{ value: 'option1', label: '选项1' }]}
                width="md"
                name="initialselect"
                label="带默认值的下拉选择框"
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormRadio.Group
                label="单选框"
                name="radio"
                initialValue="单选1"
                options={['单选1', '单选2', '单选3']}
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormCheckbox.Group
                label="多选框"
                name="checkbox"
                options={['多选1', '多选2', '多选3']}
              />
            </ProForm.Group>
            <ProFormUploadButton
              extra="支持扩展名：.jpg .zip .doc .wps"
              label="倒签报备附件"
              name="file"
              title="上传文件"
            />
            <ProFormTextArea width="xl" label="合同备注说明" name="remark" />
          </ProCard>
        </ProCard>
      </ProForm>
    </PageContainer>
  );
};

export default connect(({ basisForm }) => ({
  queryBasisFormData: basisForm.queryBasisFormData,
}))(BasisForm);

BasisForm.propTypes = {
  dispatch: PropTypes.any,
};
