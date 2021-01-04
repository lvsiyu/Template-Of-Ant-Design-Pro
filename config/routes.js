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
