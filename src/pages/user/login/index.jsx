import { LockTwoTone, UserOutlined } from '@ant-design/icons';
import { Alert, message } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { connect, useIntl } from 'umi';
import styles from './index.less';

const LoginMessage = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login = (props) => {
  const { userLogin = {}, submitting } = props;
  const { status, type: loginType } = userLogin;
  const intl = useIntl();

  const handleSubmit = (values) => {
    const { dispatch } = props;
    if (values.userName !== 'admin' && values.passWord !== '123456') {
      message.error('账号或密码错误，请重新输入！');
    } else {
      dispatch({
        type: 'login/login',
        payload: { ...values },
      });
    }
  };

  return (
    <div className={styles.main}>
      <ProForm
        initialValues={{
          autoLogin: true,
        }}
        submitter={{
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            loading: submitting,
            size: 'large',
            style: {
              width: '100%',
            },
          },
        }}
        onFinish={async (values) => {
          handleSubmit(values);
        }}
      >
        {/* <Tabs activeKey={type} onChange={setType}>
          <Tabs.TabPane
            key="account"
            tab={intl.formatMessage({
              id: 'pages.login.accountLogin.tab',
              defaultMessage: '账户密码登录',
            })}
          />
          <Tabs.TabPane
            key="mobile"
            tab={intl.formatMessage({
              id: 'pages.login.phoneLogin.tab',
              defaultMessage: '手机号登录',
            })}
          />
        </Tabs> */}

        {status === 'error' && loginType === 'account' && !submitting && (
          <LoginMessage
            content={intl.formatMessage({
              id: 'pages.login.accountLogin.errorMessage',
              defaultMessage: '账户或密码错误',
            })}
          />
        )}

        <>
          <ProFormText
            name="userName"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={styles.prefixIcon} />,
            }}
            placeholder="请输入用户名(admin)"
            rules={[
              {
                required: true,
                message: '用户名是必填项！',
              },
            ]}
          />
          <ProFormText.Password
            name="passWord"
            fieldProps={{
              size: 'large',
              prefix: <LockTwoTone className={styles.prefixIcon} />,
            }}
            placeholder="请输入密码(123456)"
            rules={[
              {
                required: true,
                message: '密码是必填项！',
              },
            ]}
          />
        </>
        {/* <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码 ?
          </a>
        </div> */}
      </ProForm>
    </div>
  );
};

export default connect(({ login, loading }) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(Login);

Login.propTypes = {
  dispatch: PropTypes.any,
  userLogin: PropTypes.any,
  submitting: PropTypes.any,
};

LoginMessage.propTypes = {
  content: PropTypes.any,
};
