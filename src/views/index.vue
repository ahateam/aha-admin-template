<template>

  <el-container class="content-box">
    <el-header :style="{background:this.GLOBAL.naviBarBgColor}">
      <top-bar :topBarConfig="topBarConfig"
               :bgColor="this.GLOBAL.naviBarBgColor"
               :activeTextColor="this.GLOBAL.naviBarActiveColor"
               :textColor="this.GLOBAL.naviBarTextColor"></top-bar>
    </el-header>


    <el-container class="content">

      <div class="side-bar">
        <side-bar :sideBarConfig="sideBarConfig"
                  :isCollapse="isCollapse"
                  :bgColor="this.GLOBAL.naviBarBgColor"
                  :activeTextColor="this.GLOBAL.naviBarActiveColor"
                  :textColor="this.GLOBAL.naviBarTextColor"></side-bar>
      </div>

      <el-main class="main-box">
        <el-row class="row-first">
        <el-col :span="4">
          <el-radio-group v-model="isCollapse" size="mini">
            <el-radio-button :label="false">{{$t('content.open')}}</el-radio-button>
            <el-radio-button :label="true">{{$t('content.pack_up')}}</el-radio-button>
          </el-radio-group>
        </el-col>
          <el-col :span="18"  >
              <el-breadcrumb separator="/" >
                <el-breadcrumb-item class="text-item" :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/"  class="text-item">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item  class="text-item">活动列表</el-breadcrumb-item>
                <el-breadcrumb-item  class="text-item">活动详情</el-breadcrumb-item>
              </el-breadcrumb>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" style="background: #67c23a;height: 22px;">
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <alert-top :alertTitle="alertTitle" :alertCode="alertCode"></alert-top>
          </el-col>
        </el-row>
        <div class="main-content">
          <router-view></router-view>
        </div>

      </el-main>
    </el-container>
  </el-container>

</template>

<script>
  import TopBar from '@/components/TopBar.vue';
  import SideBar from '@/components/SideBar.vue';
  import topBarConfig from '@/config/TestTopBarConfig.js';
  import sideBarConfig from '@/config/TestSideBarConfig.js';
  import AlertTop from '@/components/Alert'

  export default {

    components: {
      TopBar,
      SideBar,
      AlertTop,
    },
    name: 'Main',
    data() {
      return {
        isCollapse: false,
        topBarConfig: topBarConfig,
        sideBarConfig: sideBarConfig,
        alertTitle:'操作成功',
        alertCode:'1'
      }
    },


  }

</script>
<style scoped lang="scss">
  .content-box {
    height: 100vh;
  }

  .row-first {
    background: #fff;
    padding: $small-padding;

  }
  .text-item{
    line-height: 28px;
  }
  .content {
    background: $content-bg-color;
  }

  .side-bar {
    overflow-y: auto;

  }
.main-box{
  padding: 0;
}
  .main-content{
    padding: 20px 20px;
  }
</style>
