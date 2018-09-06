<template>

  <el-menu
    mode="horizontal"
    default-active="1"
    :background-color="bgColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
  >

    <!--第一层遍历-->
    <!--用组件name拼接索引作为子菜单的index编号，可以避免出现id混乱-->
    <el-submenu v-if="item.child != null" v-for="(item,ind) in topBarConfig.data"
                :key="ind"
                :index="topBarConfig.name + '-' + ind">
      <template slot="title" v-on:click="linkTo(item.path)">
        <i :class="item.icon"></i>
        <span>{{$t('router.'+item.name)}}</span>
      </template>

      <!--第二层遍历-->
      <!--用组件name拼接索引作为子菜单的index编号，可以避免出现id混乱-->
      <el-submenu v-if="child.child != null" v-for="(child,childInd) in item.child"
                  :key="childInd"
                  :index="topBarConfig.name + '-' + ind + '-' + childInd">
        <template slot="title" v-on:click="linkTo(child.path)">
          <span>{{$t('router.'+child.name)}}</span>
        </template>

        <!--第三层遍历-->
        <!--用组件name拼接索引作为子菜单的index编号，可以避免出现id混乱-->
        <el-menu-item v-for="(grandChild,grandChildInd) in child.child"
                      :key="grandChildInd"
                      :index="topBarConfig.name + '-' + ind + '-' + childInd + '-' + grandChildInd"
                      v-on:click="linkTo(grandChild.path)">
          {{$t('router.'+grandChild.name)}}
        </el-menu-item>
      </el-submenu>

      <!--第二层遍历，只有一个节点-->
      <el-menu-item v-else :index="topBarConfig.name + '-' + ind + '-' + childInd"
                    v-on:click="linkTo(child.path)">
        {{$t('router.'+child.name)}}
      </el-menu-item>
    </el-submenu>

    <!--第一层遍历，只有一个节点-->
    <el-menu-item v-else :index="topBarConfig.name + '-0'" v-on:click="linkTo(item.path)">
      <i :class="item.icon"></i>
      <span>{{$t('router.'+item.name)}}</span>
    </el-menu-item>


  </el-menu>

</template>

<script>

  export default {
    props: {
      topBarConfig: {
        type: Object,
        required: true,
      },
      bgColor: {
        type: String,
        default: '#545c64'
      },
      textColor: {
        type: String,
        default: '#fff'
      },
      activeTextColor: {
        type: String,
        default: '#ffd04b'
      },
    },
    methods: {
      linkTo(path) {
        console.info("top-bar-goto>>>" + path);
        if (path != null) {
          this.$router.push(path);
        }
      },
    }
  }

</script>
<style scoped lang="scss">
</style>
