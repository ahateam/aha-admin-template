const pageConfig = {
  pages:
    [{
      page: {
        path:"/qiye",
        sidebar: {},
        navibar: {},
      }
    }, {page: {}}, {page: {}}, {page: {}}],
}

const old = [
  {
    path: '/',
    name: '系统首页',
    icon: 'el-icon-time',
  },
  {
    path: '/list',
    name: '导航天梯',
    icon: 'el-icon-time',
    children: [
      {
        path: 'list',
        name: '导航栏一',
      },
      {
        path: 'dist1',
        name: '导航栏二',
      },
      {
        path: 'dist2',
        name: '导航栏三',
      },
      {
        path: 'dist3',
        name: '导航栏四',
      },
      {
        path: 'dist4',
        name: '导航栏五',
      }
    ]
  },
  {
    path: '/set',
    name: '系统设置',
    icon: 'el-icon-time',
    children: [
      {
        path: 'set',
        name: '系统设置',
      },
      {
        path: 'loginSet',
        name: '登陆设置'
      },
      {
        path: 'userSet',
        name: '用户设置'
      }
    ]
  }
];

export default {
  sliderData: function () {
    return pageConfig;
  }
}


