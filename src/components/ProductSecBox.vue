<template>
    <div>

      <el-col :xl="6" :lg="8" :md="12" :sm="12" :xs="12" v-for="(item,_idnex) in productSecData" :key="_idnex">
        <div class="product-sec-box" >
          <el-row style="padding-bottom:16px;border-bottom: 1px solid #eee ">
            <div style="width: 62px;height: 62px;float: left;line-height: 62px;text-align: center;overflow: hidden">
              <i :class="item.icon" style="font-size:50px;color: #669aff;"></i>
            </div>
            <div style="float: left;margin-left: 15px">
              <p class="text-title">{{item.title}}</p>
              <p class="text-content">{{item.content}}</p>
            </div><div style="clear: both"></div>
          </el-row>
          <el-row style="padding-top: 10px;height: 32px">
            <div style="float: left;height: 32px;line-height: 32px;font-size: 12px;color: #ff5054;">
              {{item.price}}
            </div>
            <div style="float: right">
              <el-button plain size="mini" style="font-size: 12px;color: #84899f;">
                <i class="iconfont icon-jiantou-you-cuxiantiao-fill" style="font-size: 12px"></i>  查看详情
              </el-button>
            </div>
          </el-row>
        </div>
      </el-col>
    </div>
</template>

<script>
    export default {
        name: "ProductSecBox",
        props:{
          productSecData:Array,
        }
    }
</script>

<style scoped lang="scss">
  p{
    margin: 0;
    padding: 0;
  }
  .product-sec-box{
    margin-top: 10px;
    padding: 20px;
    border: 1px solid #eee;
    cursor: pointer;
    transition:all ease .3s ;
    border-radius: 4px;
  }

  .text-title{
    height: 25px;
    line-height: 25px;
    font-size: 16px;
    color: #59607c;
  }
  .text-content{
    font-size: 12px;
    color: #848a9f;
  }
  .product-sec-box:hover{
    border: 1px solid #669aff;
  }
  .product-sec-box:hover .text-title{
    color: #669aff;
    font-weight: 700;
  }
</style>
