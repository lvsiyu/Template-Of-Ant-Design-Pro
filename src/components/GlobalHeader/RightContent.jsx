import { Tooltip, Tag, message } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import PropTypes from 'prop-types';
import { connect, Link } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight = (props) => {
  const { theme, layout } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <div className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索(请输入关键字回车搜索)"
        options={[
          {
            label: <Link to="/visualization/basis">可视化数据</Link>,
            value: '可视化数据',
          },
          {
            label: <Link to="/table/basis">表格模板</Link>,
            value: '表格模板',
          },
          {
            label: <Link to="/list/basis">列表模板</Link>,
            value: '列表模板',
          },
          {
            label: <Link to="/detail/basis">详情模板</Link>,
            value: '详情模板',
          },
          {
            label: <Link to="/card/basis">卡片模板</Link>,
            value: '卡片模板',
          },
          {
            label: <Link to="/form/basis">表单模板</Link>,
            value: '表单模板',
          },
          {
            label: <Link to="/setting/user">用户中心</Link>,
            value: '用户中心',
          },
        ]}
        onSearch={(value) => {
          message.success(`搜索内容为: ${value}`);
        }}
      />
      <Tooltip title="使用文档">
        <a
          style={{
            color: 'inherit',
          }}
          target="_blank"
          href="https://pro.ant.design/docs/getting-started"
          rel="noopener noreferrer"
          className={styles.action}
        >
          <QuestionCircleOutlined />
        </a>
      </Tooltip>
      <Avatar />
      {REACT_APP_ENV && (
        <span>
          <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
        </span>
      )}
    </div>
  );
};

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);

GlobalHeaderRight.propTypes = {
  theme: PropTypes.any,
  layout: PropTypes.any,
};
