<template>
    <div >
      <el-row class="nav-radio" >
        <el-col :span="2" style="margin-left: 20px"><span><b style="font-size: 15px">{{title}}:</b></span></el-col>
        <el-col :span="21">
          <div class="radio-text">
            <el-tag class=" radio-active" :class="{active:index == isActive}"  @click.native="checkedItem(index)"  v-for="(item,index) in texts" :key="index">{{item}}</el-tag>
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
      props: {
        title: {
          type: String,
          required: true
        },
        texts: {
          type: Array,
          required: true
        }
      },
      data() {
        return {
          isActive: 0
        }
      }
    }
</script>
<style  scoped>
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
radio-active:active{
  color: #fff;
  background: #409EFF;
}


</style>
