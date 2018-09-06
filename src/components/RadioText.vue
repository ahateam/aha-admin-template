<template>
    <div >
      <el-row class="nav-radio" >
        <el-col :span="2" class="title-box" ><span><b>{{$t('content.'+radioData.title)}}:</b></span></el-col>
        <el-col :span="21">
          <div class="radio-text">
            <el-tag class="radio-active" size="mini"  :class="{active:index == isActive}"  @click.native="checkedItem(index)"  v-for="(item,index) in radioData.texts" :key="index">{{$t('content.'+item)}}</el-tag>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
      name: 'radio-text',
      methods: {
        checkedItem(index) {
          this.isActive = index
        }
      },
      props:{
        radioData:Object
      },
      data() {
        return {
          isActive: 0,
        }
      }
    }
</script>
<style  scoped>
  .title-box{
    margin-left: 20px;
    font-size: 14px
  }
.nav-radio{
    color:#333;
    line-height: 40px;
    padding: 5px 0;
    background: #FFFFFF;
  }
  .radio-active{
    margin-left: 10px;
    cursor: pointer;
  }
.radio-active:hover{
  color: #fff;
  background: #409EFF;
}
.active{
  color: #fff;
  background: #409EFF;
}


</style>
