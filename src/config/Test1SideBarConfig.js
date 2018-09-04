export default {
  name: 'test1NaviBar',//组件唯一标识，如重名则可能出现问题。菜单的id也是根据它拼的
  data: [

    {
      path: '/',
      name: '导航天梯',
      icon: 'el-icon-time',
      child: [
        {
          path: '/',
          name: '导航栏2',
          child: [
            {
              path: '/',
              name: '导航栏31',
            },
            {
              path: '/',
              name: '导航栏32',
            },
            {
              path: '/',
              name: '导航栏33',
            }
          ]
        },
        {
          path: '/',
          name: '导航栏二',
        },
        {
          path: '/',
          name: '导航栏三',
        },
        {
          path: '/',
          name: '导航栏四',
        },
        {
          path: '/',
          name: '导航栏五',
        }
      ]
    },
    {
      path: '/',
      name: '系统设置',
      icon: 'el-icon-time',
      child: [
        {
          path: '/',
          name: '系统设置',
        },
        {
          path: '/',
          name: '登陆设置',
        },
        {
          path: '/',
          name: '用户设置',
        }
      ]
    },
    {
      path: '/',
      name: '系统设置xxx',
      icon: 'el-icon-time',
      child: [
        {
          path: '/',
          name: '系统设置',
        },
        {
          path: '/',
          name: '登陆设置',
        },
        {
          path: '/',
          name: '用户设置',
        }
      ]
    },
  ]
};



