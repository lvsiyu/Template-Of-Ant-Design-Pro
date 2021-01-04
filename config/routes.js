export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/visualization/basis',
              },
              {
                name: '可视化数据',
                icon: 'LineChartOutlined',
                path: '/visualization',
                routes: [
                  {
                    name: '多种统计图',
                    path: '/visualization/basis',
                    component: './visualization/basis',
                  },
                  {
                    name: '弹框统计图',
                    path: '/visualization/modals',
                    component: './visualization/modals',
                  },
                  {
                    component: './404',
                  },
                ],
              },
              {
                name: '地图可视化',
                icon: 'DribbbleOutlined',
                path: '/map',
                routes: [
                  {
                    name: '基础地图',
                    path: '/map/basis',
                    component: './map/basis',
                  },
                  {
                    name: '弹框地图',
                    path: '/map/modals',
                    component: './map/modals',
                  },
                  {
                    name: '交互地图',
                    path: '/map/action',
                    component: './map/action',
                  },
                  {
                    component: './404',
                  },
                ],
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
