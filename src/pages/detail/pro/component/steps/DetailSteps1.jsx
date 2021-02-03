import React, { Fragment } from 'react';
import { RouteContext } from '@ant-design/pro-layout';
import { Steps, Popconfirm, message } from 'antd';
import moment from 'moment';
import classNames from 'classnames';
import styles from '../../style/index.less';

const { Step } = Steps;

const DetailSteps1 = () => {
  const confirm = () => {
    message.success('简易操作了一波');
  };

  const cancel = () => {
    message.error('取消操作了一波');
  };

  const desc1 = (
    <div className={classNames(styles.textSecondary, styles.stepDescription)}>
      <Fragment>操作人1</Fragment>
      <div>{moment(new Date()).format('YYYY-MM-DD HH:mm')}</div>
    </div>
  );

  const desc2 = (
    <div className={styles.stepDescription}>
      <Fragment>操作人2</Fragment>
      <div>
        <Popconfirm
          title="是否确认该操作"
          onConfirm={confirm}
          onCancel={cancel}
          okText="是"
          cancelText="否"
        >
          <a>简易操作</a>
        </Popconfirm>
      </div>
    </div>
  );
  return (
    <RouteContext.Consumer>
      {({ isMobile }) => (
        <Steps direction={isMobile ? 'vertical' : 'horizontal'} current={1} percent={60}>
          <Step title="第一步骤" description={desc1} />
          <Step title="第二步骤" description={desc2} />
          <Step title="第三步骤" />
          <Step title="完成步骤" />
        </Steps>
      )}
    </RouteContext.Consumer>
  );
};

export default DetailSteps1;
