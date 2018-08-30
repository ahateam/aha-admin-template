<template>
  <div id="box">
    <el-container  id="hebox">
      <el-aside width="200px" style="background: #545c64" >
        <el-col :span="24" style="overflow: hidden">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"    tyle="border: none">

            <span  v-for="item in sliderData" >
              <span v-if="ti.child != null" v-for="(ti,key) in item" >

                  <el-submenu :index="key">
                      <template slot="title">
                        <i :class="ti.icon"></i>
                        <span>{{ti.name}}</span>
                      </template>

                        <span v-if="res.child != null"  v-for="(res,_index) in ti.child" >

                           </el-submenu>
                        </span>
                <!--二级列表没有子节点渲染-->
                        <span v-else>
                            <el-menu-item :index="key+'-'+_index">
                            <span slot="title" >{{res.name}} </span>
                            </el-menu-item>
                        </span>
                      </el-submenu>
              </span>
                   <!--第一层没有子节点渲染-->
              <span v-else >
                  <el-menu-item  :index="key">
                  <i :class="ti.icon" ></i>
                  <span slot="title" >{{ti.name}} </span>
                </el-menu-item>
              </span>

          </span>

          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <el-header style="background: #fff">
          <div style="float: left">
            <i class="el-icon-upload"></i>
          </div>
          <el-breadcrumb style="line-height: 60px;float: left;margin-left: 20px;color:#303133;" separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><span style="color: #97a8be">活动管理</span></el-breadcrumb-item>
            <el-breadcrumb-item > <span style="color: #97a8be">活动列表</span></el-breadcrumb-item>
            <el-breadcrumb-item ><span style="color: #97a8be">活动详情</span></el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main>
          <span  v-for="item in sliderData" >

            <span v-if="ti.child != null" v-for="(ti,index) in item" :key="index" >
              {{index}}..
                 {{ti.name}}：
                      <span v-if="res.child != null"  v-for="(res,_index) in ti.child" :key="index+'-'+_index" >
                            {{res.name}}
                            <span v-for="(res2,__index) in res.child" >
                              三级：{{res2.name}}
                            </span>
                      </span>
                     <!--二级列表没有子节点渲染-->
                      <span v-else>
                        二级：
                        {{res.path}}{{res.name}}
                      </span>
            </span>
            <!--第一层没有子节点渲染-->
            <span v-else>
              {{index}}..
               一级： {{ti.index}}  |
            </span>

          </span>

        </el-main>
      </el-container>
    </el-container>


  </div>
</template>

<script>
  import sliderData from '@/sliderData/sliderData';

  export default {
    name: 'Main',
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    data() {
      return {
        clientWidth: '',
        clientHeight: '',
        device: '',
        hebox: '',
        sliderData:sliderData
      }
    },
    mounted() {

      //窗口大小监听器--start
      // 窗口大小初始值
      this.clientWidth = document.body.clientWidth;
      this.clientHeight = document.body.clientHeight;
      document.getElementById('hebox').style.height=this.clientHeight+'px';
      // 监听window的resize事件，尺寸变化时更新变量的值
      const that = this;
      window.onresize = function windowResize() {
        that.clientWidth = document.body.clientWidth;
        that.clientHeight = document.body.clientHeight;
        document.getElementById('hebox').style.height=that.clientHeight+'px';
      };
      //窗口大小监听器--end

    }
  }

</script>
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>
