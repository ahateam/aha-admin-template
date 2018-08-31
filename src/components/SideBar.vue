<template>

  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
      <span v-if="value.child != null" v-for="value in sliderData.sidebar" >  <!--第一层遍历-->
        <el-submenu :index="value.id">
          <template slot="title">
            <i :class="value.icon"></i>
            <span>{{value.name}}</span>
          </template>
          <span v-if="res.child != null"  v-for="res in value.child" >   <!--第二层遍历-->
            <el-submenu :index="res.id">
              <template slot="title">{{res.name}}</template>
              <span v-for="res2 in res.child" >              <!--第三层遍历-->
                <el-menu-item :index="res2.id">
                  <span slot="title" >{{res2.name}}</span>
                </el-menu-item>
              </span>
            </el-submenu>
          </span>
          <span v-else>
            <el-menu-item :index="res.id">
              <span slot="title" >{{res.name}} </span>
            </el-menu-item>
          </span>
        </el-submenu>
      </span>
    <span v-else >
      <el-menu-item  :index="value.id">
        <i :class="value.icon" ></i>
        <span slot="title" >{{value.name}} </span>
      </el-menu-item>
    </span>
  </el-menu>

</template>

<script>


  export default {
    name: 'SideBar',
    props: {
      sliderData: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>
<style scoped>

</style>
