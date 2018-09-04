<template>

  <el-container>

    <el-header class="head">

      <navi-bar :naviBarConfig="naviBarConfig"></navi-bar>
    </el-header>

    <el-container>
      <el-aside>
        <side-bar :sideBarConfig="sideBarConfig"></side-bar>
      </el-aside>
      <el-main>
        <el-row>
          <search></search>
        </el-row>
        <el-row>
          <radio-text :radioData="radioData"></radio-text>
          <radio-text :radioData="radioData1"></radio-text>
        </el-row>
        <el-row>
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
  import SideBar from '@/components/SideBar.vue';
  import RadioText from '@/components/RadioText.vue';
  import Echarts from '@/components/Echats.vue';
  import EchartsBar from '@/components/EchartsBar.vue';
  import Search from '@/components/Search.vue';

  import test1SideBarConfig from '@/config/Test1SideBarConfig.js';
  import test2SideBarConfig from '@/config/Test2SideBarConfig.js';
  import naviBarConfig from '@/config/NaviBarConfig.js';

  import radioTextData from '@/config/RadioTextData.js'

  export default {

    data() {
      return {
        sideBarConfig: test2SideBarConfig,
        naviBarConfig: naviBarConfig,
        radioData: radioTextData.radioTextData[0],
        radioData1: radioTextData.radioTextData[1],
      }
    },
    components: {
      SideBar,
      NaviBar,
      RadioText,
      Echarts,
      EchartsBar,
      Search
    }
  }

</script>
<style scoped>

</style>
