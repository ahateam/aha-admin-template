<template>

  <el-menu
    @open="handleOpen"
    @close="handleClose"
    default-active="1"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">

    <!--第一层遍历-->
    <span v-if="item.child != null" v-for="(item,ind) in sideBarConfig.data">
        <!--用组件name拼接索引作为子菜单的index编号，可以避免出现id混乱-->
          <el-submenu :index="sideBarConfig.name + '-' + ind">
          <template slot="title" v-on:click="linkTo(item.path)">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>

            <!--第二层遍历-->
          <span v-if="child.child != null" v-for="(child,childInd) in item.child">
            <!--用组件name拼接索引作为子菜单的index编号，可以避免出现id混乱-->
              <el-submenu :index="sideBarConfig.name + '-' + ind + '-' + childInd">
              <template slot="title" v-on:click="linkTo(child.path)">
                <span>{{child.name}}</span>
              </template>

                <!--第三层遍历-->
              <span v-for="(grandChild,grandChildInd) in child.child">
                <!--用组件name拼接索引作为子菜单的index编号，可以避免出现id混乱-->
                <el-menu-item :index="sideBarConfig.name + '-' + ind + '-' + childInd + '-' + grandChildInd"
                              v-on:click="linkTo(grandChild.path)">
                  <span slot="title">{{grandChild.name}}</span>
                </el-menu-item>
              </span>
            </el-submenu>
          </span>

            <!--第二层遍历，只有一个节点-->
            <el-menu-item v-else :index="sideBarConfig.name + '-' + ind + '-' + childInd"
                          v-on:click="linkTo(child.path)">
              <span slot="title">{{child.name}} </span>
            </el-menu-item>
        </el-submenu>
      </span>

    <!--第一层遍历，只有一个节点-->
    <el-menu-item v-else :index="sideBarConfig.name + '-0'" v-on:click="linkTo(item.path)">
      <i :class="item.icon"></i>
      <span slot="title">{{item.name}}</span>
    </el-menu-item>

  </el-menu>

</template>

<script>

  export default {
    props: {
      sideBarConfig: {
        type: Object,
        required: true
      }
    },
    methods: {
      linkTo(path) {
        console.info("goto>>>" + path);
        if (path != null) {
          this.$router.push(path);
        }
      },
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
