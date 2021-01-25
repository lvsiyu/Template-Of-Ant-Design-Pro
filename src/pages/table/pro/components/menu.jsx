import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const ProTableMenu = (props) => {
  const { dom, setKey, openKeys, onOpenChange } = props;
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
      }}
    >
      <Menu
        onSelect={(e) => setKey(e.key)}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        mode="inline"
      >
        <Menu.SubMenu
          key="sub1"
          title={
            <span>
              <MailOutlined />
              <span>菜单1</span>
            </span>
          }
        >
          <Menu.Item key="1">子菜单1</Menu.Item>
          <Menu.Item key="2">子菜单2</Menu.Item>
          <Menu.Item key="3">子菜单3</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="sub2"
          title={
            <span>
              <MailOutlined />
              <span>菜单2</span>
            </span>
          }
        >
          <Menu.Item key="5">子菜单5</Menu.Item>
          <Menu.Item key="6">子菜单6</Menu.Item>
          <Menu.Item key="7">子菜单7</Menu.Item>
        </Menu.SubMenu>
      </Menu>
      <div
        style={{
          flex: 1,
        }}
      >
        {dom}
      </div>
    </div>
  );
};

export default ProTableMenu;
ProTableMenu.propTypes = {
  dom: PropTypes.any,
  setKey: PropTypes.any,
  openKeys: PropTypes.any,
  onOpenChange: PropTypes.any,
};
