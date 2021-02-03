import React, { Fragment } from 'react';
import { RouteContext } from '@ant-design/pro-layout';
import { Button, Dropdown, Menu, Descriptions, Statistic } from 'antd';
import { DownOutlined, EllipsisOutlined } from '@ant-design/icons';
import styles from '../../style/index.less';

const ButtonGroup = Button.Group;

const menu = (
  <Menu>
    <Menu.Item key="1">选项一</Menu.Item>
    <Menu.Item key="2">选项二</Menu.Item>
    <Menu.Item key="3">选项三</Menu.Item>
  </Menu>
);
const mobileMenu = (
  <Menu>
    <Menu.Item key="1">操作一</Menu.Item>
    <Menu.Item key="2">操作二</Menu.Item>
    <Menu.Item key="3">选项一</Menu.Item>
    <Menu.Item key="4">选项二</Menu.Item>
    <Menu.Item key="">选项三</Menu.Item>
  </Menu>
);

const ProDetailHeaderExtra = (
  <div className={styles.moreInfo}>
    <Statistic title="大小标题" value="大小内容1" />
    <Statistic title="大小金额" value={568.08} prefix="¥" />
  </div>
);

const ProDetailHeaderDescription = (
  <RouteContext.Consumer>
    {({ isMobile }) => (
      <Descriptions className={styles.headerList} size="small" column={isMobile ? 1 : 2}>
        <Descriptions.Item label="标题1">标题1</Descriptions.Item>
        <Descriptions.Item label="标题2">标题2</Descriptions.Item>
        <Descriptions.Item label="时间标题">2017-07-07</Descriptions.Item>
        <Descriptions.Item label="操作标题">
          <a href="">操作内容</a>
        </Descriptions.Item>
        <Descriptions.Item label="时间范围">2017-07-07 ~ 2017-08-08</Descriptions.Item>
        <Descriptions.Item label="备注标题">备注标题备注标题备注标题备注标题</Descriptions.Item>
      </Descriptions>
    )}
  </RouteContext.Consumer>
);

const ProDetailHeaderAction = (
  <RouteContext.Consumer>
    {({ isMobile }) => {
      if (isMobile) {
        return (
          <Dropdown.Button
            type="primary"
            icon={<DownOutlined />}
            overlay={mobileMenu}
            placement="bottomRight"
          >
            主操作
          </Dropdown.Button>
        );
      }
      return (
        <Fragment>
          <ButtonGroup>
            <Button>操作一</Button>
            <Button>操作二</Button>
            <Dropdown overlay={menu} placement="bottomRight">
              <Button>
                <EllipsisOutlined />
              </Button>
            </Dropdown>
          </ButtonGroup>
          <Button type="primary">主操作</Button>
        </Fragment>
      );
    }}
  </RouteContext.Consumer>
);

export { ProDetailHeaderExtra, ProDetailHeaderDescription, ProDetailHeaderAction };
