<template>
  <div>

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
  </div>
</template>

<script>
  import RadioText from '@/components/RadioText.vue';
  import Echarts from '@/components/Echats.vue';

  import Lang from '@/components/Lang.vue';

  import EchartsBar from '@/components/EchartsBar.vue';
  import Search from '@/components/Search.vue';

  import radioTextData from '@/config/RadioTextData.js'

    export default {
        name: "home",
        components: {
          RadioText,
          Echarts,
          EchartsBar,
          Search,
          Lang
        },
      methods: {
        switchLang() {
          if (this.$i18n.locale == 'en') {
            this.$i18n.locale = 'cn'
          } else {
            this.$i18n.locale = 'en'
          }
        }
      },
      data() {
        return {
          radioData: radioTextData.radioTextData[0],
          radioData1: radioTextData.radioTextData[1],
        }
      },
    }
</script>

<style scoped lang="scss">



  .row-first {
    background: #fff;
    padding: $small-padding;
  }

  .row-style {
    background: #fff;
    margin-top: 20px;
    padding: $small-padding;
  }
</style>
