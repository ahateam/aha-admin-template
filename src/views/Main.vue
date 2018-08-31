<template>

  <el-container>

    <el-header class="head">

      <navi-bar :navibarData="navibarData"></navi-bar>
    </el-header>

    <el-container>

      <el-aside>
        <side-bar :sliderData="sliderData"></side-bar>
      </el-aside>

      <el-main>

        <radio-text :radioData="radioData"></radio-text>
        <echarts></echarts>
        <!--<router-view></router-view>-->
      </el-main>

    </el-container>


  </el-container>

</template>

<script>

  import NaviBar from '@/components/NaviBar.vue';
  import SideBar from '@/components/SideBar.vue';
  import RadioText from '@/components/RadioText.vue';
  import Echarts from '@/components/Echats.vue'
  import pageConfig from '@/data/PageConfig.js';
  import radioTextData from '@/data/RadioTextData.js'

  export default {
    name: 'Main',
    data() {
      return {
      sliderData: pageConfig.pageConfig.pages[0].page,
      navibarData:pageConfig.pageConfig.pages[0].page,
      radioData: radioTextData.radioTextData[0]
    }
  },
    components: {
      SideBar,
      NaviBar,
      RadioText,
      Echarts
    }
  }

</script>
<style scoped>
  .head{
    padding: 0;
  }
</style>
