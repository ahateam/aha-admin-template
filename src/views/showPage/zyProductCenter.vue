<template>
  <div>
    <el-row :gutter="20" >
      <el-col :span="11">
        <div  style="background: #fff;padding: 20px 20px;height: 150px">
          <el-row>
            <content-to-title :title="title"></content-to-title>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-row :gutter="80" style="height: 82px;margin-bottom: 8px;">
                  <el-col :span="8">
                    <div style="width: 80px;height: 80px;border-radius: 50%;overflow: hidden;">
                      <img src="@/assets/image/touxiang.png" alt="" style="width: 80px;">
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div style="height: 80px">
                      <p class="p-box">Hi</p>
                      <p class="p-box">碟信互联（北京）信息技术有限公司（自助通）</p>
                      <p class="p-box">13910137831</p>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                        <span  style="color: #28b88c;cursor: pointer;">
                          <i class="iconfont icon-iconfont-5" style="font-size: 20px;position: relative;top: 2px;"></i>
                          <span style="font-size: 12px;">  已认证</span>
                        </span>
                </el-row>
              </el-col>
              <el-col :span="12"  style="border-left: 1px solid rgba(0,0,0,.2);">
                <div style="width:100%;text-align: center;">
                  <p>
                    <span class="text-back" >当前余额</span>
                    <span class="text-blue"  > ( 元 ) </span>
                  </p>
                  <p class="text-number" >
                    10
                  </p>
                  <el-button type="danger" size="mini">
                    <i class="iconfont icon-qiandai"></i>  去充值
                  </el-button>
                </div>
              </el-col>
            </el-row>
          </el-row>
        </div>
      </el-col>
      <el-col :span="13">
        <div style="background: #fff;padding: 20px 20px;height: 150px">
          <el-row>
            <content-to-title :title="title1"></content-to-title>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div style="width: 100%;text-align: center">
                <p>
                  <span class="text-back">今日总查询量</span><span class="text-blue"> ( 条 ) </span>
                </p>
                <p class="text-number">
                  0
                </p>
                <p style="width: 100%;text-align: center">
                  <span style="font-size: 12px;color: #b6b7c9;"> 同比昨日 </span><span style="font-size: 12px;color: #47d0d8;"> <i class="iconfont icon-web-icon-"></i>0%</span>
                </p>
              </div>
            </el-col>
            <el-col :span="6">
              <div style="width: 100%;text-align: center">
                <p>
                  <span class="text-back">今日成功查询量</span><span class="text-blue"> ( 条 ) </span>
                </p>
                <p class="text-number">
                  0
                </p>
                <p style="width: 100%;text-align: center">
                  <span style="font-size: 12px;color: #b6b7c9;"> 同比昨日 </span><span style="font-size: 12px;color: #f56c6c;"> <i class="iconfont icon-web-icon-1"></i>5%</span>
                </p>
              </div>
            </el-col>
            <el-col :span="6">
              <div style="width: 100%;text-align: center">
                <p>
                  <span class="text-back">本月总查询量</span><span class="text-blue"> ( 条 ) </span>
                </p>
                <p class="text-number">
                  0
                </p>
                <p style="width: 100%;text-align: center">
                  <span style="font-size: 12px;color: #b6b7c9;"> 同比上月 </span><span style="font-size: 12px;color: #47d0d8;"> <i class="iconfont icon-web-icon-"></i>0%</span>
                </p>
              </div>
            </el-col>
            <el-col :span="6">
              <div style="width: 100%;text-align: center">
                <p>
                  <span class="text-back">本月成功查询量</span><span class="text-blue"> ( 条 ) </span>
                </p>
                <p class="text-number">
                  0
                </p>
                <p style="width: 100%;text-align: center">
                  <span style="font-size: 12px;color: #b6b7c9;"> 同比上月 </span><span style="font-size: 12px;color: #47d0d8;"> <i class="iconfont icon-web-icon-"></i>0%</span>
                </p>
              </div>
            </el-col>
          </el-row>
        </div>

      </el-col>
    </el-row>

    <el-row style="margin-top: 20px">
      <el-col :span="24" style="background: #fff;padding: 20px 20px;">
        <el-row>
          <content-more-title :title="title2"></content-more-title>
        </el-row>
        <el-row :gutter="20">
          <product-sec-box :productSecData="productSecData"></product-sec-box>
        </el-row>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-col :span="24" style="background: #fff;padding: 20px">
        <el-row>
          <content-more-title :title="title2"></content-more-title>
        </el-row>
        <el-row :gutter="20">
          <product-sec-box :productSecData="productSecData1"></product-sec-box>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ContentToTitle from '@/components/ContentToTitle'
  import ContentMoreTitle from '@/components/ContentMoreTitle'
  import ProductSecBox from '@/components/ProductSecBox'

  export default {
    name: "zyProductCenter",
    components:{
      ContentToTitle,
      ContentMoreTitle,
      ProductSecBox
    },
    data(){
      return {
        title:'账户信息',
        title1:'使用统计',
        title2:'已激活产品',
        productSecData:[
          {
            icon:'iconfont icon-APIguanli',
            title:'空号检测API',
            content:'真实有效号码检测',
            price:'0.002~0.005元/条'
          },
          {
            icon:'iconfont icon-chaxun1',
            title:'号码实时查询',
            content:'号码实时查询',
            price:'0.5元/条'
          },
          {
            icon:'iconfont icon-yangmaodang-',
            title:'羊毛党检测API',
            content:'反机器欺诈 异常IP 异常手机号检测',
            price:'0.05元/条'
          },
          {
            icon:'iconfont icon-tupian',
            title:'图片OCR',
            content:'AI深度学习超高识别准确率',
            price:'0.1~0.5元/条'
          }
        ],
        productSecData1:[
          {
            icon:'iconfont icon-anquanfanghu',
            title:'信用反欺诈',
            content:'信用反欺诈',
            price:'0.05元/条'
          },
          {
            icon:'iconfont icon-credentials_icon',
            title:'身份证实名认证',
            content:'准确校验姓名与身份证号是否一致',
            price:'0.3元/条'
          },
          {
            icon:'iconfont icon-sanjicaidan',
            title:'运营商三要素',
            content:'运营商三要素',
            price:'0.5元/条'
          },
          {
            icon:'iconfont icon-weibiaoti3',
            title:'银行卡四要素',
            content:'银联数据 检测率高',
            price:'0.3~0.35元/条'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  p{
    margin: 0;
    padding: 0;
  }
  .p-box{
    width: 100%;
    font-size: 12px;
    color: #848a9f;;
    height: 23px;
    line-height: 23px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .text-back{
    width: 100%;
    font-size: 12px;
    color:#848a9f;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .text-blue{
    width: 100%;
    font-size: 14px;
    color:#649eff;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .text-number{
    width: 100%;
    height: 34px;
    line-height: 34px;
    font-size: 30px;
    color: #59607c;
    margin: 15px 0;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
