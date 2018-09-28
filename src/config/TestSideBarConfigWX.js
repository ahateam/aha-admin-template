export default {
  name: 'test2SideBar',//组件唯一标识，如重名则可能出现问题。菜单的id也是根据它拼的
  data: [
    {
      path:'/wx/home',
      name:'home',
      icon: 'el-icon-time',
    },
    {
      path:'/',
      name:'coupon',
      icon: 'el-icon-time',
      child:[
        {
          path:'/couponList',
          name:'couponList',
        },
        {
          path:'/couponAdd',
          name:'couponAdd',
        },
        {
          path:'/couponAddSuccess',
          name:'couponAddSuccess',
        },
        {
          path:'/couponSet',
          name:'couponSet',
        }
      ]
    }
  ]
};



