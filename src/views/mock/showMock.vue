<template>
    <div>
      <el-row class="row-first" >
        <content-to-title title="mock测试： /优惠卷列表 "></content-to-title>
         <el-row style="margin-top: 20px;border-bottom: 1px solid #ddd;" v-for="(item,_index) in couponList" :key="_index">
           <p>
             <span>类型：</span><span>{{item.type}}</span>
           </p>
           <p>
             <span>名称：</span><span>{{item.name}}</span>
           </p>
           <p>
             <span>有效期：</span> <span>{{item.date}}</span>
           </p>
           <p>
             <span>剩余数量：</span> <span>{{item.stock}}</span>
           </p>
           <p>
             <span>全部状态：</span> <span>{{item.state}}</span>
           </p>
         </el-row>
      </el-row>
    </div>
</template>

<script>
  import ContentToTitle from '@/components/ContentToTitle'

    export default {
        name: "showMock",
      components:{
        ContentToTitle
      },
      data(){
          return{
            couponList:[],
          }
      },

      mounted(){
          this.getUserData()
      },

      methods:{
          getUserData(){
            console.log('开始请求');

            let that = this;

            this.$http.get('/coupon')
              .then(function (res) {
                console.log('请求成功了');
                console.log(res);
                that.couponList = res.data.data;
              })
              .catch(function (err) {
                console.log('错误连接'+err);
              })
          }
      }
    }
</script>

<style scoped lang="scss">
  .row-first {
    background: #fff;
    padding: $small-padding;
    margin: 10px;
  }
  p{
    padding: 0;
  }
</style>
