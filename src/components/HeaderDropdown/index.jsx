import { Dropdown } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.less';

const HeaderDropdown = ({ overlayClassName: cls, ...restProps }) => (
  <Dropdown overlayClassName={classNames(styles.container, cls)} {...restProps} />
);

export default HeaderDropdown;

HeaderDropdown.propTypes = {
  overlayClassName: PropTypes.any,
};
