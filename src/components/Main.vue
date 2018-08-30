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
            active-text-color="#ffd04b" style="border: none">
            <el-menu-item index="1">
              <i class="el-icon-info"></i>
              <span slot="title">小红椒系统首页</span>
            </el-menu-item>

            <el-submenu v-if="item.children.length > 1" v-for="(item,index) in pageConfig" :key="item.path" index="72">

              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="17-1">选项1</el-menu-item>
                <el-menu-item index="71-2">选项2</el-menu-item>
                <el-menu-item index="717-3">选项1</el-menu-item>
                <el-menu-item index="71-4">选项2</el-menu-item>
                <el-menu-item index="177-5">选项1</el-menu-item>
                <el-menu-item index="17-6">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航天梯</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项1</el-menu-item>
                <el-menu-item index="1-4">选项2</el-menu-item>
                <el-menu-item index="1-5">选项1</el-menu-item>
                <el-menu-item index="1-6">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>导航天梯</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项1</el-menu-item>
                <el-menu-item index="3-4">选项2</el-menu-item>
                <el-menu-item index="3-5">选项1</el-menu-item>
                <el-menu-item index="3-6">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
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
        <el-main>Main</el-main>
      </el-container>
    </el-container>


  </div>
</template>

<script>
  import pageConfig from '@/pageConfig/pageConfig';

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
        pageConfig:pageConfig.pageConfig
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
