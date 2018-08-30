<template>

  <el-container>

    <el-header>
      <navi-bar :navibarData="navibarData"></navi-bar>
    </el-header>

    <el-container>

      <el-aside>
        <side-bar :sliderData="sliderData"></side-bar>
      </el-aside>

      <el-main>

        <router-view></router-view>
      </el-main>

    </el-container>


  </el-container>

</template>

<script>

  import NaviBar from '@/components/NaviBar.vue';
  import SideBar from '@/components/SideBar.vue';
  import RadioText from '@/components/RadioText.vue'
  import pageConfig from '@/data/PageConfig.js';


  export default {
    name: 'Main',
    data() {
      return {
        sliderData: pageConfig.pageConfig.pages[0].page,
        navibarData:pageConfig.pageConfig.pages[0].page
      }
    },
    components: {
      SideBar,
      NaviBar,
    }
  }

</script>
<style scoped>

</style>
