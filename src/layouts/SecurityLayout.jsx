import React, { useState, useEffect } from 'react';
import { PageLoading } from '@ant-design/pro-layout';
import { Redirect, connect } from 'umi';
import { stringify } from 'querystring';

const SecurityLayout = (props) => {
  const [isReady, setIsReady] = useState(false);
  const { children, loading, currentUser, dispatch } = props; // You can replace it to your authentication rule (such as check token exists)
  // 你可以把它替换成你自己的登录认证规则（比如判断 token 是否存在）

  useEffect(() => {
    if (dispatch) {
      setIsReady(true);
      if (dispatch) {
        dispatch({
          type: 'user/fetchCurrent',
        });
      }
    }
  }, [dispatch]);

  const isLogin = currentUser && currentUser.data;
  const queryString = stringify({
    redirect: window.location.href,
  });

  if ((!isLogin && loading) || !isReady) {
    return <PageLoading />;
  }

  if (!isLogin && window.location.pathname !== '/user/login') {
    return <Redirect to={`/user/login?${queryString}`} />;
  }

  return children;
};

export default connect(({ user, loading }) => ({
  currentUser: user.currentUser,
  loading: loading.models.user,
}))(SecurityLayout);
