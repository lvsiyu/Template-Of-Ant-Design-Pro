import { Row, Col, Card } from 'antd';
import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import * as Charts from './components/index';

const BasisVisualization = () => {
  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={16}>
          <Card title="主折线图" style={{ height: '509px' }}>
            <Charts.LineCharts />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="柱状图" style={{ marginBottom: '16px', height: '246px' }}>
            <Charts.ColumnCharts />
          </Card>
          <Card title="饼图" style={{ height: '246px' }}>
            <Charts.PieCharts />
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: '16px' }}>
        <Col span={12}>
          <Card title="条形图">
            <Charts.BarCharts />
          </Card>
        </Col>
        <Col span={6}>
          <Card title="雷达图">
            <Charts.RadarCharts />
          </Card>
        </Col>
        <Col span={6}>
          <Card title="词云图">
            <Charts.WordCloudCharts />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default BasisVisualization;
