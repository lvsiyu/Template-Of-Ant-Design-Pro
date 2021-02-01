import React, { Fragment } from 'react';
import ProForm, {
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormDigit,
} from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';

const StepsForm1 = () => {
  return (
    <Fragment>
      <ProCard
        title="第一步卡片1"
        bordered
        headerBordered
        collapsible
        style={{
          marginBottom: 16,
          minWidth: 800,
          maxWidth: '100%',
        }}
      >
        <ProFormText
          name="name"
          width="md"
          label="内容1"
          tooltip="此项为必填"
          placeholder="请输入"
          rules={[{ required: true }]}
        />
        <ProForm.Group title="内容2" size={8}>
          <ProFormSelect width="sm" name="source" placeholder="请选择" />
          <ProFormSelect width="sm" name="target" placeholder="请选择" />
        </ProForm.Group>
      </ProCard>

      <ProCard
        title="第一步卡片2"
        bordered
        headerBordered
        collapsible
        style={{
          minWidth: 800,
          marginBottom: 16,
        }}
      >
        <ProFormDigit
          name="xs"
          label="XS号表单"
          initialValue={9999}
          tooltip="悬浮出现的气泡。"
          placeholder="请输入"
          width="xs"
        />
        <ProFormText name="s" label="S号表单" placeholder="请输入" width="sm" />
        <ProFormDateRangePicker name="m" label="M 号表单" />
        <ProFormSelect
          name="l"
          label="L 号表单"
          fieldProps={{
            mode: 'tags',
          }}
          width="lg"
          initialValue={['选项1', '选项2']}
          options={['选项1', '选项2', '选项3'].map((item) => ({
            label: item,
            value: item,
          }))}
        />
      </ProCard>
    </Fragment>
  );
};

export default StepsForm1;
