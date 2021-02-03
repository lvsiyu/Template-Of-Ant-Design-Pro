import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'umi';
import { Card, Divider } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProSkeleton from '@ant-design/pro-skeleton';
import { BasisDetail1, BasisDetail2, DetailList1, DetailList2 } from './components/index';
import styles from './style/index.less';

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const BasisDetail = (props) => {
  const { dispatch, basisDetailData, loading } = props;

  useEffect(() => {
    async function fetchData() {
      await waitTime(2000);
      if (dispatch) {
        dispatch({
          type: 'basisDetail/queryBasisDetail',
        });
      }
    }
    fetchData();
  }, [dispatch]);

  return (
    <PageContainer>
      <Card bordered={false}>
        {basisDetailData ? (
          <Fragment>
            <BasisDetail1 data={basisDetailData.basisDescriptionData1} loading={loading} />
            <Divider style={{ marginBottom: 32 }} />
            <BasisDetail2 data={basisDetailData.basisDescriptionData2} loading={loading} />
            <Divider style={{ marginBottom: 32 }} />
            <div className={styles.title}>详情列表1</div>
            <DetailList1 basicGoods={basisDetailData.basicGoods} loading={loading} />
            <div className={styles.title}>详情列表2</div>
            <DetailList2 basicProgress={basisDetailData.basicProgress} loading={loading} />
          </Fragment>
        ) : (
          <ProSkeleton type="descriptions" pageHeader={false} />
        )}
      </Card>
    </PageContainer>
  );
};

export default connect(({ basisDetail, loading }) => ({
  basisDetailData: basisDetail.basisDetailData,
  loading: loading.effects['basisDetail/queryBasisDetail'],
}))(BasisDetail);

BasisDetail.propTypes = {
  dispatch: PropTypes.any,
  loading: PropTypes.any,
  basisDetailData: PropTypes.any,
};
