import React, { Fragment } from 'react';
import { ProFormSelect, ProFormCheckbox } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';

const StepsForm3 = () => {
  return (
    <Fragment>
      <ProCard
        style={{
          marginBottom: 16,
          minWidth: 800,
          maxWidth: '100%',
        }}
      >
        <ProFormCheckbox.Group
          name="checkbox"
          label="多选项"
          rules={[
            {
              required: true,
            },
          ]}
          options={['多选项1', '多选项2', '多选项3', '多选项4']}
        />
        <ProFormSelect
          label="下拉选择"
          name="remark"
          rules={[
            {
              required: true,
            },
          ]}
          width="md"
          initialValue="1"
          options={[
            { value: '1', label: '选项1' },
            { value: '2', label: '选项2' },
          ]}
        />
        <ProFormSelect
          label="下拉选择"
          name="remark2"
          width="md"
          initialValue="2"
          options={[
            { value: '1', label: '选项1' },
            { value: '2', label: '选项2' },
          ]}
        />
      </ProCard>
    </Fragment>
  );
};

export default StepsForm3;
