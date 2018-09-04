const page1 = [
  {
    path: '/',
    name: 'home',
    icon: 'el-icon-time',
    id: '1'
  },
  {
    path: '/list',
    name: 'document',
    icon: 'el-icon-time',
    id:'2',
    child: [
      {
        path: 'list',
        name: 'document1',
        id:'2-1',
        child:[
          {
            path: 'list',
            name: 'document2',
            id:'2-1-1',
          },
          {
            path: 'list',
            name: 'document3',
            id:'2-1-2',
          },
          {
            path: 'list',
            name: 'document4',
            id:'2-1-3',
          }
        ]
      },
      {
        path: 'dist1',
        name: 'document5',
        id:'2-2',
      },
      {
        path: 'dist2',
        name: 'echarts',
        id:'2-3',
      },
      {
        path: 'dist3',
        name: 'table',
        id:'2-4',
      },
      {
        path: 'dist4',
        name: 'set5',
        id:'2-5',
      }
    ]
  },
  {
    path: '/set',
    name: 'set',
    icon: 'el-icon-time',
    id:'3',
    child: [
      {
        path: 'set',
        name: 'set',
        id:'3-1',
      },
      {
        path: 'loginSet',
        name: 'set1',
        id:'3-2',
      },
      {
        path: 'userSet',
        name: 'set2',
        id:'3-3',
      }
    ]
  },
  {
    path: '/',
    name: 'component',
    icon: 'el-icon-time',
    id: '4'
  },
  {
    path: '/',
    name: 'component',
    icon: 'el-icon-time',
    id: '5'
  },
  {
    path: '/',
    name: 'component1',
    icon: 'el-icon-time',
    id: '6'
  },
  {
    path: '/',
    name: 'component2',
    icon: 'el-icon-time',
    id: '7'
  },
  {
    path: '/',
    name: 'component3',
    icon: 'el-icon-time',
    id: '8'
  },{
    path: '/',
    name: 'component4',
    icon: 'el-icon-time',
    id: '9'
  },
  {
    path: '/',
    name: 'component5',
    icon: 'el-icon-time',
    id: '10'
  },

];
const pageConfig = {
  pages:
    [{
      page: {
        path:"/qiye",
        sidebar: page1,
        navibar: page1,
      }
    }, {page: {}}, {page: {}}, {page: {}}],
}

export default {
  pageConfig
}


