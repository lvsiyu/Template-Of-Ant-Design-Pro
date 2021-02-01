import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'umi';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { StepsForm } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { message } from 'antd';
import { StepsForm1, StepsForm2, StepsForm3 } from './components/index';

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

const StepsFormPage = (props) => {
  const { dispatch, step1Status, step2Status, step3Status } = props;
  console.log(step1Status, step2Status, step3Status);

  const submitFormSuccess = () => {
    message.success('提交成功');
  };

  const submitStep1 = async (values) => {
    let status = false;
    await waitTime(2000);
    await dispatch({
      type: 'stepsForm/querySteps1',
      payload: {
        value: values,
        callback: (resp) => {
          if (resp.code === 0) {
            message.success('提交成功');
            status = true;
          } else {
            message.error('提交失败');
            status = false;
          }
        },
      },
    });
    return status;
  };

  const submitStep2 = async (values) => {
    let status = false;
    await waitTime(2000);
    await dispatch({
      type: 'stepsForm/querySteps2',
      payload: {
        value: values,
        callback: (resp) => {
          if (resp.code === 0) {
            message.success('提交成功');
            status = true;
          } else {
            message.error('提交失败');
            status = false;
          }
        },
      },
    });
    return status;
  };

  const submitStep3 = async (values) => {
    let status = false;
    await waitTime(2000);
    await dispatch({
      type: 'stepsForm/querySteps3',
      payload: {
        value: values,
        callback: (resp) => {
          if (resp.code === 0) {
            message.success('提交成功');
            status = true;
          } else {
            message.error('提交失败');
            status = false;
          }
        },
      },
    });
    return status;
  };

  const submitForm = (values) => {
    dispatch({
      type: 'stepsForm/queryBasisFormData',
      payload: {
        value: values,
        callback: submitFormSuccess,
      },
    });
  };
  return (
    <PageContainer>
      <ProCard>
        <StepsForm
          submitter={{ render: (_, dom) => basisFormFooter(_, dom) }}
          onFinish={async (values) => {
            await waitTime(2000);
            await submitForm(values);
          }}
          formProps={{ validateMessages: { required: '此项为必填项' } }}
        >
          <StepsForm.StepForm
            name="base"
            title="第一步骤"
            onFinish={(values) => submitStep1(values)}
          >
            <StepsForm1 />
          </StepsForm.StepForm>
          <StepsForm.StepForm
            name="checkbox"
            title="第二步骤"
            onFinish={(values) => submitStep2(values)}
          >
            <StepsForm2 />
          </StepsForm.StepForm>
          <StepsForm.StepForm
            name="time"
            title="第三步骤"
            onFinish={(values) => submitStep3(values)}
          >
            <StepsForm3 />
          </StepsForm.StepForm>
        </StepsForm>
      </ProCard>
    </PageContainer>
  );
};

export default connect(({ stepsForm }) => ({
  queryBasisFormData: stepsForm.queryBasisFormData,
  step1Status: stepsForm.step1Status,
  step2Status: stepsForm.step2Status,
  step3Status: stepsForm.step3Status,
}))(StepsFormPage);

StepsFormPage.propTypes = {
  dispatch: PropTypes.any,
  step1Status: PropTypes.any,
  step2Status: PropTypes.any,
  step3Status: PropTypes.any,
};
