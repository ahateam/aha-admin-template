<template>

  <el-container class="content-box">
    <el-header class="head">
      <navi-bar :naviBarConfig="naviBarConfig" :naviBarMode="'horizontal'"></navi-bar>
    </el-header>


    <el-container class="content">

      <div class="side-bar">
        <navi-bar :naviBarConfig="sideBarConfig" :naviBarMode="'vertical'" :isCollapse="isCollapse" ></navi-bar>
      </div>

      <el-main >
        <el-row class="row-first">
          <el-radio-group v-model="isCollapse" size="mini">
            <el-radio-button :label="false">{{$t('content.open')}}</el-radio-button>
            <el-radio-button :label="true">{{$t('content.pack_up')}}</el-radio-button>
          </el-radio-group>
          </el-row>
        <el-row class="row-style">
          <search></search>
          <el-button type="success" @click="switchLang()">{{$t('content.change_language')}}</el-button>
        </el-row>
        <el-row class="row-style">
          <radio-text :radioData="radioData"></radio-text>
          <radio-text :radioData="radioData1"></radio-text>
        </el-row>
        <el-row class="row-style">
          <el-col :span="12">
            <echarts></echarts>
          </el-col>
          <el-col :span="12">
            <echarts-bar></echarts-bar>
          </el-col>
        </el-row>
        <el-row>
          <lang></lang>
        </el-row>
        <!--<router-view></router-view>-->
      </el-main>
    </el-container>
  </el-container>

</template>

<script>

  import NaviBar from '@/components/NaviBar.vue';
  import RadioText from '@/components/RadioText.vue';
  import Echarts from '@/components/Echats.vue';

  import Lang from '@/components/Lang.vue';

  import EchartsBar from '@/components/EchartsBar.vue';
  import Search from '@/components/Search.vue';

  import test1SideBarConfig from '@/config/Test1SideBarConfig.js';
  import test2SideBarConfig from '@/config/Test2SideBarConfig.js';

  import radioTextData from '@/config/RadioTextData.js'



  export default {

    components: {
      NaviBar,
      RadioText,
      Echarts,
      EchartsBar,
      Search,
      Lang
    },

    name: 'Main',
    methods:{
      switchLang()  {
        if(this.$i18n.locale == 'en'){
          this.$i18n.locale = 'cn'
        }else{
          this.$i18n.locale = 'en'
        }
      }
    },

    data() {
      return {
        sideBarConfig: test2SideBarConfig,
        naviBarConfig: test1SideBarConfig,
        isCollapse: false,
        radioData: radioTextData.radioTextData[0],
        radioData1: radioTextData.radioTextData[1],
      }
    },


  }

</script>
<style  scoped lang="scss">
  .head {
    background-color: $navi-bg-color;
  }
  .content-box {
    height: 100vh;
  }
  .content {
    background: $content-bg-color;
  }
  .side-bar{
    overflow-y: auto;
  }
  .row-first{
    background: #fff;
    padding:$small-padding;
  }
  .row-style{
    background: #fff;
    margin-top: 20px;
    padding: $small-padding;
  }
</style>
