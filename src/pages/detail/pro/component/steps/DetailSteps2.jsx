import React, { Fragment } from 'react';
import { RouteContext } from '@ant-design/pro-layout';
import { Steps, Popover, Badge, Popconfirm, message } from 'antd';
import moment from 'moment';
import classNames from 'classnames';
import styles from '../../style/index.less';

const { Step } = Steps;

const DetailSteps2 = () => {
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

  const popoverContent = (
    <div style={{ width: 160 }}>
      操作人2
      <span className={styles.textSecondary} style={{ float: 'right' }}>
        <Badge
          status="default"
          text={<span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>未响应状态</span>}
        />
      </span>
      <div className={styles.textSecondary} style={{ marginTop: 4 }}>
        耗时：2小时25分钟
      </div>
    </div>
  );

  const customDot = (dot, { status }) => {
    if (status === 'process') {
      return (
        <Popover placement="topLeft" arrowPointAtCenter content={popoverContent}>
          {dot}
        </Popover>
      );
    }
    return dot;
  };

  return (
    <RouteContext.Consumer>
      {({ isMobile }) => (
        <Steps direction={isMobile ? 'vertical' : 'horizontal'} progressDot={customDot} current={1}>
          <Step title="创建项目" description={desc1} />
          <Step title="部门初审" description={desc2} />
          <Step title="财务复核" />
          <Step title="完成" />
        </Steps>
      )}
    </RouteContext.Consumer>
  );
};

export default DetailSteps2;
