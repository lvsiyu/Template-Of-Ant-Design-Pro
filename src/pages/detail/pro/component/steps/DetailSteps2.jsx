import React, { Fragment } from 'react';
import { RouteContext } from '@ant-design/pro-layout';
import { Steps, Popover, Badge } from 'antd';
import { DingdingOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import styles from '../../style/index.less';

const { Step } = Steps;

const desc1 = (
  <div className={classNames(styles.textSecondary, styles.stepDescription)}>
    <Fragment>
      曲丽丽
      <DingdingOutlined style={{ marginLeft: 8 }} />
    </Fragment>
    <div>2016-12-12 12:32</div>
  </div>
);
const desc2 = (
  <div className={styles.stepDescription}>
    <Fragment>
      周毛毛
      <DingdingOutlined style={{ color: '#00A0E9', marginLeft: 8 }} />
    </Fragment>
    <div>
      <a>催一下</a>
    </div>
  </div>
);

const popoverContent = (
  <div style={{ width: 160 }}>
    吴加号
    <span className={styles.textSecondary} style={{ float: 'right' }}>
      <Badge status="default" text={<span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>未响应</span>} />
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

const DetailSteps2 = () => {
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
