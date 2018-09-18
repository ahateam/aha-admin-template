<template>
    <div>
      <el-row class="row-first" >
        <content-to-title title="mock测试： /user "></content-to-title>
         <el-row style="margin-top: 20px;border-bottom: 1px solid #ddd;" v-for="(item,_index) in userData" :key="_index">
             <p>
               <span>姓名：</span><span>{{item.name}}</span>
             </p>
             <p>
               <span>头像：</span><span>{{item.thunb_img}}</span>
             </p>
             <p>
               <span>邮箱：</span> <span>{{item.email}}</span>
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
            userData:[]
          }
      },
      mounted(){
          this.getUserData()
      },
      methods:{
          getUserData(){
            console.log('开始请求');
            let that = this;
            this.$http.get('/user')
              .then(function (res) {
                console.log('请求成功了');
                that.userData = res.data.data;
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
