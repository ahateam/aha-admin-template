<template>

  <el-container class="content-box">
    <el-header class="head">
      <navi-bar :naviBarConfig="naviBarConfig" :naviBarMode="'horizontal'"></navi-bar>
    </el-header>
    <el-container class="content">
      <el-aside>
        <navi-bar :naviBarConfig="sideBarConfig" :naviBarMode="'vertical'"></navi-bar>
      </el-aside>
      <el-main>
        <el-row class="row-style">
          <search></search>
        </el-row>
        <el-row class="row-style">
          <radio-text :radioData="radioData"></radio-text>
          <radio-text :radioData="radioData1"></radio-text>
        </el-row>
        <el-row class="row-style">
          <el-col :span="12">
            <echarts></echarts>
          </el-col>
          <el-col :span="12">
            <echarts-bar></echarts-bar>
          </el-col>
        </el-row>
        <!--<router-view></router-view>-->
      </el-main>

    </el-container>


  </el-container>

</template>

<script>

  import NaviBar from '@/components/NaviBar.vue';
  import RadioText from '@/components/RadioText.vue';
  import Echarts from '@/components/Echats.vue';
  import EchartsBar from '@/components/EchartsBar.vue';
  import Search from '@/components/Search.vue';

  import test1SideBarConfig from '@/config/Test1SideBarConfig.js';
  import test2SideBarConfig from '@/config/Test2SideBarConfig.js';

  import radioTextData from '@/config/RadioTextData.js'

  export default {

    data() {
      return {
        sideBarConfig: test2SideBarConfig,
        naviBarConfig: test1SideBarConfig,
        radioData: radioTextData.radioTextData[0],
        radioData1: radioTextData.radioTextData[1],
      }
    },
    components: {
      NaviBar,
      RadioText,
      Echarts,
      EchartsBar,
      Search
    }
  }

</script>
<style scoped>

  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }

  .head {
    padding: 0;
  }

  .content-box {
    height: 100vh;
  }

  .content {
    background: #f0f2f5
  }

  .side-bar {
    height: 100%;
  }

  .row-style {
    background: #fff;
    margin-top: 20px;
    padding: 10px 10px;
  }
</style>
