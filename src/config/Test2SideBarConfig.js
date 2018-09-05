export default {
  name: 'test2SideBar',//组件唯一标识，如重名则可能出现问题。菜单的id也是根据它拼的
  data: [
    {
      path: '/',
      name: 'home',
      icon: 'el-icon-time',
    },
    {
      path: '/',
      name: 'document',
      icon: 'el-icon-time',
      child: [
        {
          path: '/',
          name: 'document1',
          child: [
            {
              path: '/',
              name: 'document2',
            },
            {
              path: '/',
              name: 'document3',
            },
            {
              path: '/',
              name: 'document4',
            }
          ]
        },
        {
          path: '/',
          name: 'component',
        },
        {
          path: '/',
          name: 'component1',
        },
        {
          path: '/',
          name: 'component2',
        },
        {
          path: '/',
          name: 'component3',
        }
      ]
    },
    {
      path: '/',
      name: 'table',
      icon: 'el-icon-time',
      child: [
        {
          path: '/',
          name: 'echarts',
        },
        {
          path: '/',
          name: 'set',
        },
        {
          path: '/',
          name: 'set1',
        }
      ]
    },
    {
      path: '/',
      name: 'table',
      icon: 'el-icon-time',
      child: [
        {
          path: '/',
          name: 'echarts',
        },
        {
          path: '/',
          name: 'set',
        },
        {
          path: '/',
          name: 'set1',
        }
      ]
    },
    {
      path: '/',
      name: 'table',
      icon: 'el-icon-time',
      child: [
        {
          path: '/',
          name: 'echarts',
        },
        {
          path: '/',
          name: 'set',
        },
        {
          path: '/',
          name: 'set1',
        }
      ]
    }
  ]
};



