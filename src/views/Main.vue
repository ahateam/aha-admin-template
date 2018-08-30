<template>

  <el-container>

    <el-header>
      <navi-bar></navi-bar>
    </el-header>

    <el-container>

      <el-aside>
        <side-bar></side-bar>
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

  export default {
    name: 'Main',
    props:{},
    components: {
      SideBar,
      NaviBar,
    }
  }

</script>
<style scoped>

</style>
