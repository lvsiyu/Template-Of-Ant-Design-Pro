import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'umi';
import { message } from 'antd';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import ProForm, {
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormRadio,
  ProFormUploadButton,
  ProFormDigit,
  ProFormTextArea,
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
      <ProCard>
        <ProForm
          submitter={{
            render: (_, dom) => basisFormFooter(_, dom),
          }}
          onFinish={async (values) => {
            await waitTime(2000);
            submitForm(values);
          }}
        >
          <ProForm.Group>
            <ProFormText
              name="text1"
              label="限制长度的输入框"
              tooltip="最长为 24 位"
              placeholder="请输入"
              rules={[{ required: true, message: '请输入内容!' }]}
            />
            <ProFormText width="md" name="text2" label="未限制长度的输入框" placeholder="请输入" />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormText name="text3" label="默认长度的输入框" placeholder="请输入" />
            <ProFormDateRangePicker width="md" name="rangepicker" label="时间范围选择框" />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormSelect
              options={[
                {
                  value: 'chapter',
                  label: '盖章后生效',
                },
              ]}
              width="xs"
              name="chapter"
              label="合同约定生效方式"
            />
            <ProFormSelect
              width="xs"
              options={[
                {
                  value: 'time',
                  label: '履行完终止',
                },
              ]}
              name="unusedMode"
              label="合同约定失效效方式"
            />
          </ProForm.Group>
          <ProFormText width="sm" name="id" label="主合同编号" />
          <ProFormText name="project" disabled label="项目名称" initialValue="xxxx项目" />
          <ProFormText width="xs" name="mangerName" disabled label="商务经理" initialValue="启途" />
          <ProForm.Group>
            <ProFormSelect
              initialValue="money"
              options={[
                {
                  value: 'money',
                  label: '确认金额',
                },
              ]}
              width="xs"
              name="useMode"
              label="金额类型"
            />
            <ProFormSelect
              options={[
                {
                  value: '6',
                  label: '6%',
                },
                {
                  value: '12',
                  label: '12%',
                },
              ]}
              initialValue="6"
              width="xs"
              name="taxRate"
              label="税率"
            />
            <ProFormRadio.Group
              label="发票类型"
              name="invoiceType"
              initialValue="发票"
              options={['发票', '普票', '无票']}
            />
          </ProForm.Group>
          <ProFormUploadButton
            extra="支持扩展名：.jpg .zip .doc .wps"
            label="倒签报备附件"
            name="file"
            title="上传文件"
          />
          <ProFormDigit width="xs" name="num" label="合同份数" initialValue={5} />
          <ProFormTextArea width="xl" label="合同备注说明" name="remark" />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};

export default connect(({ basisForm }) => ({
  queryBasisFormData: basisForm.queryBasisFormData,
}))(BasisForm);

BasisForm.propTypes = {
  dispatch: PropTypes.any,
};
