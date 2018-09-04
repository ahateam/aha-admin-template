<template>
  <el-menu
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <!--<span v-if="value.child != null" v-for="value in navibarData.navibar" >  &lt;!&ndash;第一层遍历&ndash;&gt;-->
    <!--<el-submenu index="value.id">-->
    <!--<template slot="title">{{value.name}}</template>-->
    <!--<span v-if="res.child != null"  v-for="res in value.child" >   &lt;!&ndash;第二层遍历&ndash;&gt;-->
    <!--<el-submenu :index="res.id">-->
    <!--<template slot="title">{{res.name}}</template>-->
    <!--<span v-for="res2 in res.child" >              &lt;!&ndash;第三层遍历&ndash;&gt;-->
    <!--<el-menu-item :index="res2.id">{{res2.name}}</el-menu-item>-->
    <!--</span>-->
    <!--</el-submenu>-->
    <!--</span>-->
    <!--<span v-else>-->
    <!--<el-menu-item :index="res.id">{{res.name}}</el-menu-item>-->
    <!--</span>-->
    <!--</el-submenu>-->
    <!--</span>-->
    <!--<span v-else >-->
    <!--<el-menu-item index="value.id">{{value.name}}</el-menu-item>-->
    <!--</span>-->
    <el-menu-item index="1">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>


  </el-menu>

</template>

<script>

  export default {
    props: {
      naviBarConfig: {
        type: Array,
        required: true
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>
<style scoped>

</style>
