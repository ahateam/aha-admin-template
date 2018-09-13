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
          path: '/document',
          name: 'documentSet',
        },
        {
          path:'componentsDocument',
          name:'componentsDocument'
        }
      ]
    },
    {
      path:'/',
      name:'components',
      icon:'el-icon-time',
      child:[
        {
          path:'/btnComponents',
          name:'btnComponents'
        },
        {
          path:'/checkedComponents',
          name:'checkedComponents'
        },
        {
          path:'/inputComponents',
          name:'inputComponents'
        },
        {
          path:'/selectComponents',
          name:'selectComponents'
        },
        {
          path:'/timerComponents',
          name:'timerComponents'
        },
        {
          path:'/uploadComponents',
          name:'uploadComponents'
        }
      ]
    },
    {
      path: '/',
      name: 'formCenter',
      icon: 'el-icon-time',
      child: [
        {
          path: '/formCenter',
          name: 'formCenter',
        }
      ]
    },
    {
      path: '/',
      name: 'table',
      icon: 'el-icon-time',
      child: [
        {
          path: '/tableCenter',
          name: 'tableCenter',
        },
        {
          path: '/VCharts',
          name: 'VCharts',
        }
      ]
    },
  ]
};



