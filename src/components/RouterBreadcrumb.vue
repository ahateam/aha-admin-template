<!--
路由面包屑组件
根据当前页面的路由信息，展示面包屑
-->

<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <el-breadcrumb-item v-for="(item,index)  in matched" :key="item.path" v-if='item.title'>
      <span v-if='item.redirect==="noredirect"||index==nodes.length-1' class="no-redirect">{{generateTitle(item.meta.title)}}</span>
      <router-link v-else :to="item.redirect||item.path">{{generateTitle(item.meta.title)}}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>

  export default {
    created() {
      let matched = this.$route.matched
      const first = matched[0];
      //定义第一个节点
      const index = {path: '/index', meta: {title: 'index'}};
      if (first) {
        if (first.name !== 'index') {
          //首节点不是index，则在前面加上index
          matched = [index].concat(matched);
        }
      } else {
        //没有首节点，则定义首节点
        matched = [index];
      }
      this.matched = matched;
    },
    data() {
      return {
        matched: null
      }
    },
  }
</script>

<style scoped>
</style>
