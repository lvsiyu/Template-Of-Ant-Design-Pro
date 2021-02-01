import React, { Fragment } from 'react';
import ProForm, { ProFormText, ProFormCheckbox, ProFormDatePicker } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';

const StepsForm2 = () => {
  return (
    <Fragment>
      <ProCard
        style={{
          minWidth: 800,
          marginBottom: 16,
          maxWidth: '100%',
        }}
      >
        <ProFormCheckbox.Group
          name="checkbox"
          label="多选内容"
          width="lg"
          options={['多选项1', '多选项2', '多选项3', '多选项4']}
        />
        <ProForm.Group>
          <ProFormText name="dbname" label="输入框" />
          <ProFormDatePicker name="datetime" label="日期选择框" width="sm" />
        </ProForm.Group>
        <ProFormCheckbox.Group
          name="checkbox"
          label="多选内容"
          options={['多选项1', '多选项2', '多选项3', '多选项4']}
        />
      </ProCard>
    </Fragment>
  );
};

export default StepsForm2;
