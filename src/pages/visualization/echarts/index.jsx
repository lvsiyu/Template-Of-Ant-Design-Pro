import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Row, Col } from 'antd';
import ProCard from '@ant-design/pro-card';
import { Lines, Sunbursts } from './components/index';
import styles from './index.less';

const VisualizationForEcharts = () => {
  return (
    <PageContainer title="使用Echarts创建基本图表">
      <ProCard direction="column" ghost gutter={[0, 16]}>
        <ProCard title="折线图" headerBordered>
          <Row gutter={[8, 8]}>
            <Col span={8}>
              <ProCard className={styles.card4} bordered headerBordered title="基础折线图">
                <Lines.EchartsBasisLine />
              </ProCard>
            </Col>
            <Col span={8}>
              <ProCard className={styles.card4} bordered headerBordered title="平滑折线图">
                <Lines.EchartsSmoothLine />
              </ProCard>
            </Col>
            <Col span={8}>
              <ProCard className={styles.card4} bordered headerBordered title="面积折线图">
                <Lines.EchartsAreaLine />
              </ProCard>
            </Col>
          </Row>
        </ProCard>
        <ProCard title="旭日图" headerBordered>
          <Row gutter={[8, 8]}>
            <Col span={8}>
              <ProCard className={styles.card5} bordered headerBordered title="基础旭日图">
                <Sunbursts.EchartsBasisSunburst />
              </ProCard>
            </Col>
          </Row>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default VisualizationForEcharts;
