<template>
    <div>
      <span v-if="alertCode==1">
       <el-alert
         :title="alertTitle"
         type="success">
        </el-alert>
      </span>
      <span v-if="alertCode==2">
          <el-alert
            :itle="alertTitle"
            type="info">
        </el-alert>
      </span>
      <span v-if="alertCode==0">
             <el-alert
               :title="alertTitle"
               type="warning">
            </el-alert>
      </span>
      <span v-if="alertCode==-1">
          <el-alert
            :title="alertTitle"
            type="error">
          </el-alert>
      </span>


    </div>
</template>

<script>
    export default {
        name: "Alert",
      props:{
        alertTitle:String,
        alertCode:Number
      },
    }
</script>

<style scoped>

</style>
