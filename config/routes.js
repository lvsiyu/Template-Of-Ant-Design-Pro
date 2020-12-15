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
                name: '市域可视化',
                icon: 'LineChartOutlined',
                path: '/visualization',
                routes: [
                  {
                    name: '市域基本信息',
                    path: '/visualization/basis',
                    component: './visualization/basis',
                  },
                  {
                    name: '重点人员管控',
                    path: '/visualization/personnel',
                    component: './visualization/personnel',
                  },
                  {
                    name: '重点单位场所管控',
                    path: '/visualization/place',
                    component: './visualization/place',
                  },
                  {
                    name: '重点车辆管控',
                    path: '/visualization/car',
                    component: './visualization/car',
                  },
                  {
                    name: '矛盾纠纷',
                    path: '/visualization/contradiction',
                    component: './visualization/contradiction',
                  },
                  {
                    name: '安全隐患',
                    path: '/visualization/security',
                    component: './visualization/security',
                  },
                  {
                    name: '治安防范',
                    path: '/visualization/guard',
                    component: './visualization/guard',
                  },
                  {
                    component: './404',
                  },
                ],
              },
              {
                name: '网络化信息管理',
                icon: 'GlobalOutlined',
                path: '/grid',
                routes: [
                  {
                    name: '网络信息维护',
                    path: '/grid/network',
                    component: './grid/network',
                  },
                  {
                    component: './404',
                  },
                ],
              },
              {
                name: '四单任务管理',
                icon: 'FileTextOutlined',
                path: '/task',
                routes: [
                  {
                    name: '四单任务分配',
                    path: '/task/distribution',
                    component: './task/distribution',
                  },
                  {
                    name: '四单任务统计',
                    path: '/task/statistics',
                    component: './task/statistics',
                  },
                  {
                    component: './404',
                  },
                ],
              },
              {
                name: '临时任务管理',
                icon: 'ProjectOutlined',
                path: '/temporary',
                routes: [
                  {
                    name: '临时任务分配',
                    path: '/temporary/distribution',
                    component: './temporary/distribution',
                  },
                  {
                    name: '临时任务统计',
                    path: '/temporary/statistics',
                    component: './temporary/statistics',
                  },
                  {
                    component: './404',
                  },
                ],
              },
              {
                name: '用户管理',
                icon: 'SettingOutlined',
                path: '/setting',
                routes: [
                  {
                    name: '用户信息管理',
                    path: '/setting/user',
                    component: './setting/user',
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
