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
                    name: '使用Echarts',
                    path: '/visualization/echarts',
                    component: './visualization/echarts',
                  },
                  {
                    component: './404',
                  },
                ],
              },
              /* {
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
              }, */
              {
                name: '表格模板',
                icon: 'TableOutlined',
                path: '/table',
                routes: [
                  {
                    name: '基础表格',
                    path: '/table/basis',
                    component: './table/basis',
                  },
                  {
                    name: '弹框表格',
                    path: '/table/modals',
                    component: './table/modals',
                  },
                  {
                    name: '左右结构表格',
                    path: '/table/tabs',
                    component: './table/tabs',
                  },
                  {
                    name: '复杂结构表格',
                    path: '/table/pro',
                    component: './table/pro',
                  },
                  {
                    component: './404',
                  },
                ],
              },
              {
                name: '列表模板',
                icon: 'UnorderedListOutlined',
                path: '/list',
                routes: [
                  {
                    name: '基础列表',
                    path: '/list/basis',
                    component: './list/basis',
                  },
                  {
                    name: '弹框列表',
                    path: '/list/modals',
                    component: './list/modals',
                  },
                  {
                    name: '详情列表',
                    path: '/list/details',
                    component: './list/details',
                  },
                  {
                    component: './404',
                  },
                ],
              },
              {
                name: '详情模板',
                icon: 'AppstoreOutlined',
                path: '/detail',
                routes: [
                  {
                    name: '基础详情',
                    path: '/detail/basis',
                    component: './detail/basis',
                  },
                  {
                    name: '高级详情',
                    path: '/detail/pro',
                    component: './detail/pro',
                  },
                  {
                    component: './404',
                  },
                ],
              },
              {
                name: '卡片模板',
                icon: 'CreditCardOutlined',
                path: '/card',
                routes: [
                  {
                    name: '基础卡片',
                    path: '/card/basis',
                    component: './card/basis',
                  },
                  {
                    name: '分步卡片',
                    path: '/card/step',
                    component: './card/step',
                  },
                  {
                    name: '交互卡片',
                    path: '/card/action',
                    component: './card/action',
                  },
                  {
                    name: '高级卡片',
                    path: '/card/pro',
                    component: './card/pro',
                  },
                  {
                    component: './404',
                  },
                ],
              },
              {
                name: '表单模板',
                icon: 'FormOutlined',
                path: '/form',
                routes: [
                  {
                    name: '基础表单',
                    path: '/form/basis',
                    component: './form/basis',
                  },
                  {
                    name: '弹框表单',
                    path: '/form/modals',
                    component: './form/modals',
                  },
                  {
                    name: '分步表单',
                    path: '/form/steps',
                    component: './form/steps',
                  },
                  {
                    name: '登录表单',
                    path: '/form/login',
                    component: './form/login',
                  },
                  {
                    name: '筛选表单',
                    path: '/form/fill',
                    component: './form/fill',
                  },
                  {
                    component: './404',
                  },
                ],
              },
              {
                name: '用户中心',
                icon: 'UserOutlined',
                path: '/personal',
                routes: [
                  {
                    name: '个人中心',
                    path: '/personal/center',
                    component: './personal/center',
                  },
                  {
                    name: '用户设置',
                    path: '/personal/user',
                    component: './personal/user',
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
