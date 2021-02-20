import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { history, connect } from 'umi';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

const AvatarDropdown = (props) => {
  const {
    dispatch,
    currentUser: {
      data: { name, avatar },
    },
  } = props;

  const onMenuClick = (event) => {
    const { key } = event;

    if (key === 'logout') {
      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }

      return;
    }

    history.push(`/personal/${key}`);
  };

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="center">
        <UserOutlined />
        个人中心
      </Menu.Item>
      <Menu.Item key="user">
        <SettingOutlined />
        个人设置
      </Menu.Item>
      <Menu.Divider />

      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );

  return name ? (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar size="small" className={styles.avatar} src={avatar} alt="avatar" />
        <span className={`${styles.name} anticon`}>{name}</span>
      </span>
    </HeaderDropdown>
  ) : (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );
};

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(AvatarDropdown);

AvatarDropdown.propTypes = {
  dispatch: PropTypes.any,
  currentUser: PropTypes.any,
  menu: PropTypes.any,
};
