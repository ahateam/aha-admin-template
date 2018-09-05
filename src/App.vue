<template>
  <div id="app">
    <router-view/>

  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        clientWidth: '',
        clientHeight: '',
      }
    },
    mounted() {
      //窗口大小监听器--start
      // 窗口大小初始值
      this.clientWidth = document.body.clientWidth;
      this.clientHeight = document.body.clientHeight;
      // 监听window的resize事件，尺寸变化时更新变量的值
      const that = this;
      window.onresize = function windowResize() {
        that.clientWidth = document.body.clientWidth;
        that.clientHeight = document.body.clientHeight;
      };
      //窗口大小监听器--end

    }
  }
</script >

<style scoped>
:root{
  --small-padding:10px 10px;

}
</style>
