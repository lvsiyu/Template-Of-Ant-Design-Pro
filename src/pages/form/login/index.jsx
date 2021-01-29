import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { message } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'umi';
import ProForm, { ProFormText, ProFormCaptcha } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { MobileTwoTone, MailTwoTone } from '@ant-design/icons';
import logo from '@/assets/logo.svg';

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const LoginForm = (props) => {
  const { dispatch } = props;

  const submitFormSuccess = () => {
    message.success('提交成功');
  };

  const submitForm = (values) => {
    dispatch({
      type: 'loginForm/queryLoginFormData',
      payload: {
        value: values,
        callback: submitFormSuccess,
      },
    });
  };
  return (
    <PageContainer>
      <ProCard>
        <div
          style={{
            width: 330,
            margin: 'auto',
          }}
        >
          <ProCard bordered>
            <ProForm
              onFinish={async (values) => {
                await waitTime(2000);
                submitForm(values);
              }}
              submitter={{
                searchConfig: {
                  submitText: '登录',
                },
                render: (_, dom) => dom.pop(),
                submitButtonProps: {
                  size: 'large',
                  style: {
                    width: '100%',
                  },
                },
              }}
            >
              <h1
                style={{
                  textAlign: 'center',
                }}
              >
                <img
                  style={{
                    height: '44px',
                    marginRight: 16,
                  }}
                  alt="logo"
                  src={logo}
                />
                登陆模板
              </h1>
              <div
                style={{
                  marginTop: 12,
                  textAlign: 'center',
                  marginBottom: 40,
                }}
              >
                我是副标题我是副标题我是副标题我是副标题
              </div>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileTwoTone />,
                }}
                name="phone"
                placeholder="请输入手机号"
                rules={[
                  {
                    required: true,
                    message: '请输入手机号!',
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: '不合法的手机号格式!',
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: <MailTwoTone />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                phoneName="phone"
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: '请输入验证码',
                  },
                ]}
                placeholder="请输入验证码"
                onGetCaptcha={async (phone) => {
                  await waitTime(1000);
                  message.success(`手机号 ${phone} 验证码发送成功!`);
                }}
              />
            </ProForm>
          </ProCard>
        </div>
      </ProCard>
    </PageContainer>
  );
};

export default connect(({ loginForm }) => ({
  queryLoginFormData: loginForm.queryLoginFormData,
}))(LoginForm);

LoginForm.propTypes = {
  dispatch: PropTypes.any,
};
