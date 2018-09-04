export default {
  name: 'test1sideBar',//组件唯一标识，如重名则可能出现问题。菜单的id也是根据它拼的
  data: [
    {
      path: '/',
      name: '系统首页',
      icon: 'el-icon-time',
      id: '1'
    },
    {
      path: '/list',
      name: '导航天梯',
      icon: 'el-icon-time',
      id: '2',
      child: [
        {
          path: 'list',
          name: '导航栏2',
          id: '2-1',
          child: [
            {
              path: 'list',
              name: '导航栏31',
              id: '2-1-1',
            },
            {
              path: 'list',
              name: '导航栏32',
              id: '2-1-2',
            },
            {
              path: 'list',
              name: '导航栏33',
              id: '2-1-3',
            }
          ]
        },
        {
          path: 'dist1',
          name: '导航栏二',
          id: '2-2',
        },
        {
          path: 'dist2',
          name: '导航栏三',
          id: '2-3',
        },
        {
          path: 'dist3',
          name: '导航栏四',
          id: '2-4',
        },
        {
          path: 'dist4',
          name: '导航栏五',
          id: '2-5',
        }
      ]
    },
    {
      path: '/set',
      name: '系统设置',
      icon: 'el-icon-time',
      id: '3',
      child: [
        {
          path: 'set',
          name: '系统设置',
          id: '3-1',
        },
        {
          path: 'loginSet',
          name: '登陆设置',
          id: '3-2',
        },
        {
          path: 'userSet',
          name: '用户设置',
          id: '3-3',
        }
      ]
    },
    {
      path: '/',
      name: '系统首页1',
      icon: 'el-icon-time',
      id: '4'
    },
    {
      path: '/',
      name: '系统首页2',
      icon: 'el-icon-time',
      id: '5'
    },
    {
      path: '/',
      name: '系统首页3',
      icon: 'el-icon-time',
      id: '6'
    },
    {
      path: '/',
      name: '系统首页4',
      icon: 'el-icon-time',
      id: '7'
    },
    {
      path: '/',
      name: '系统首页5',
      icon: 'el-icon-time',
      id: '8'
    }, {
      path: '/',
      name: '系统首页6',
      icon: 'el-icon-time',
      id: '9'
    },
    {
      path: '/',
      name: '系统首页7',
      icon: 'el-icon-time',
      id: '10'
    },
  ]
};



