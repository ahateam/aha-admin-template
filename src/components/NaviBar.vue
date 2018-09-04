<template>

  <el-menu
    :mode="naviBarMode"
    :collapse="isCollapse"
    class="el-menu-vertical-demo"
    default-active="1"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">

    <!--第一层遍历-->
    <!--用组件name拼接索引作为子菜单的index编号，可以避免出现id混乱-->
    <el-submenu v-if="item.child != null" v-for="(item,ind) in naviBarConfig.data"
                :key="ind"
                :index="naviBarConfig.name + '-' + ind">
      <template slot="title" v-on:click="linkTo(item.path)">
        <i :class="item.icon"></i>
        <span>{{item.name}}</span>
      </template>

      <!--第二层遍历-->
      <!--用组件name拼接索引作为子菜单的index编号，可以避免出现id混乱-->
      <el-submenu v-if="child.child != null" v-for="(child,childInd) in item.child"
                  :key="childInd"
                  :index="naviBarConfig.name + '-' + ind + '-' + childInd">
        <template slot="title" v-on:click="linkTo(child.path)">
          <span>{{child.name}}</span>
        </template>

        <!--第三层遍历-->
        <!--用组件name拼接索引作为子菜单的index编号，可以避免出现id混乱-->
        <el-menu-item v-for="(grandChild,grandChildInd) in child.child"
                      :key="grandChildInd"
                      :index="naviBarConfig.name + '-' + ind + '-' + childInd + '-' + grandChildInd"
                      v-on:click="linkTo(grandChild.path)">
          {{grandChild.name}}
        </el-menu-item>
      </el-submenu>

      <!--第二层遍历，只有一个节点-->
      <el-menu-item v-else :index="naviBarConfig.name + '-' + ind + '-' + childInd"
                    v-on:click="linkTo(child.path)">
        {{child.name}}
      </el-menu-item>
    </el-submenu>

    <!--第一层遍历，只有一个节点-->
    <el-menu-item v-else :index="naviBarConfig.name + '-0'" v-on:click="linkTo(item.path)">
      <i :class="item.icon"></i>
      <span>{{item.name}}</span>
    </el-menu-item>


  </el-menu>

</template>

<script>

  export default {
    props: {
      naviBarConfig: {
        type: Object,
        required: true,
      },
      naviBarMode: {
        type: String,
        required: true,
      },
      isCollapse: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    methods: {
      linkTo(path) {
        console.info("navi-bar-goto>>>" + path);
        if (path != null) {
          this.$router.push(path);
        }
      },
    }
  }

</script>
<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
