<template>
  <div id="app">
    <!-- <van-cell title="申卡订单" is-link to="order" /> -->
    <!-- <van-cell title="单元格" value="内容" size="large" /> -->
    <div class="warpper">
      <div class="warpper-bar">
        个人中心
        <span class="bar-span">
          <van-icon class="iconSetting" name="setting-o" @click="settingClick" />
          <van-icon class="iconComment" name="comment-o" dot @click="noticeClick" />
        </span>
      </div>
    </div>
     <div class="warpper-box">
       <div class="warpper-left">
          <img class="warpper-left-img" :src="require('../../assets/img/MovieDetails/r3.jpg')" alt=""> 
       </div>
        <div class="warpper-right">
          <p class="warpper-right-p"> 姓名</p>
          <div class="warpper-right-div  right-div">136****1234 <span>理事</span></div>
          <div class="warpper-right-div">申卡码：234532 <span class="warpper-right-span">复制</span></div>
        </div>
        <div class="warpper-box-left">
         <div class="box-left-div">可提现收入 <span :class='{bg:isactive}' @click="bgHide()"> <van-icon name="eye-o" /></span></div>
         <div class="box-left-div1" v-if="isactive">￥ 0.00</div>
          <div class="box-left-div1 box-left-div3" v-if="!isactive">  **** </div>
         <div class="box-left-div2">(总收入100.00元)</div>
        </div>
        <div class="warpper-box-right">
          <van-button class="box-right-button" color="#dcdcdc" type="primary" round  @click="cashOutClick">提现</van-button>
          <van-button class="box-right-button" color="#fba979" round  plain @click="bannerClick">明细</van-button>
        </div>
    </div>
    <div class="grade" @click='levelIndex'>
      <p class="p1"> 理事</p>
      <p class="p2"> 本月还需1,000元业绩可晋升为x1</p>
      <van-icon class="icon" name="arrow" />
    </div>
    <div class="frame"> 
      <div class="frames"> 
        <van-cell is-link  v-for="(item,index) in routList"  :key='index' :border="false" :to="item.to">
          <template #title>
           <span class="frames-span">
              <!-- <img class="frames-img" :src="require('../../assets/img/image/tg.png')" alt="">  -->
            <van-icon size="0.5rem" :name="item.icon" style="vertical-align: middle;" />
            {{item.name}}</span>
          </template>
        </van-cell>
        
        <van-divider :style="{width:'94%'}" />
         <van-cell is-link  v-for="(item,index) in routList1"  :key='index' :border="false" :to="item.to">
          <template #title>
           <span class="frames-span">
              <!-- <img class="frames-img" :src="require('../../assets/img/image/tg.png')" alt="">  -->
              <van-icon  size="0.5rem" style="vertical-align: middle;" :name="item.icon" />
            {{item.name}}</span>
          </template>
        </van-cell>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Divider,Icon } from 'vant';
Vue.use(Divider);
Vue.use(Icon);
export default {
  name: 'hello',
  data() {
    return {
      user: { name: '', age: '', school: '' },
      routList:[
        { 
          name:'申卡订单',
          to:'',
          //order,
          icon:'balance-list-o'
        },
        { 
          name:'推广海报',
          to:'extend',
          icon:'orders-o',
        },
        { 
          name:'我的客户',
          to:'customer',
          icon:'manager-o'
        },
        { 
          name:'我的团队',
          to:'team',
          icon:'friends-o'
        },
      ],
      routList1:[
        { 
          name:'联系推荐人',
          to:'contacts',
          icon:'newspaper-o'
        },
        { 
          name:'常见问题',
          to:'matter',
          icon:'question-o'
        },
        { 
          name:'在线客服',
          to:'service',
          icon:'phone-circle-o',
        },
        { 
          name:'设置',
          to:'setting',
          icon:'setting-o',
        },
      ],
      isactive:true,
    }
  },
  mounted(){
      console.log( this.$store.state)
  },
  methods: {
    bgHide(){
      this.isactive=!this.isactive
    },
    settingClick(){
    this.$router.push('/setting')
    },
    noticeClick() {
      this.$router.push('/notice')
    },
    levelIndex() {
      this.$router.push('/levelIndex')
    },
    cashOutClick(){
      this.$router.push('/cashOut')

    },
    bannerClick() {
      this.$router.push('/income')
    },
    insert: function () {
      this.users.push(this.user)
    },
    remove: function (index) {
      this.users.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.frame{
  // width: 80%;
  height: auto;
  margin: 0 auto;
  background: #fff;
  .frames{
   width: 99%;
  height: auto;
  margin: 0 auto;
  .frames-span{
  line-height: 22px;
  height: 22px;
  }
  .frames-img{
    width: 22px;
    height: 22px;
    vertical-align:middle;
  }
  }
}
  .warpper {
    width: 100%;
    height: 100px;
    background-image: url(./../../assets/images/beij.png);
    background-size: cover;
    background-repeat: no-repeat;
    .warpper-bar{
      width: 93%;
      margin: 0 auto;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 2px;
      color: #303133;
      position: relative;
       .bar-span{
      width: auto;
      display: block;
      position: absolute;
      top:0;
      right:0;
      }
      .iconSetting{
        vertical-align: middle;
        margin-right: 10px;
        font-size: 20px;
      }
      .iconComment{
        vertical-align: middle;        
        font-size: 20px;
      }
    }
  }
  .warpper-box {
      width: 90%;
      margin: 0 auto;
      height: 140px;
      margin-top: -30px;
      background: #fff;
      padding: 10px;
      border-radius:10px ;
      position: relative;
      z-index: 10;
      .warpper-left{
        width:86px;
        height: 70px;
        float: left;
        .warpper-left-img{
          width: 82%;
          margin: 0 auto;
          border-radius: 50%;
        }
      }
      .warpper-right{
       float: right;
       width: 70%;
       height: 70px;
       .warpper-right-p{
         font-size: 18px;
         font-weight: 600;
         letter-spacing: 1px;
       }
       .right-div{
        margin-top: 6px;
       }
       .warpper-right-div{
         color: #ccc;
         font-size: 12px;
         line-height: 22px;
          span{
           color: #000;
           padding-left: 10px;
         }
         .warpper-right-span{
            background: rgba(250, 100, 0, 0.1);
            color: #f78400;
            border-radius:4px ;
            padding: 0.10667rem 0.13333rem;
            margin-left: 0.26667rem;
            border: 0.05333rem;
         }
       }
      }
      .warpper-box-left{
        margin-top: 5px;
        float: left;
        width: 140px;
        height: 60px;
        // background: lightcoral;
        text-align: left;
        .box-left-div{
          line-height: 22px;
          height: 22px;
          position: relative;
          .bg{
             color: rgb(252, 151, 47);
          }
          span{
            font-size: 20px;
            margin-top: 2px;
            vertical-align: middle;
            display: inline-block;
            // position: absolute;
            // top: 0;
            // left:80px;
          }
        }
        .box-left-div1{
          font-size: 20px;
          line-height:26px;
          height: 26px;
          color: #000;
          flex-wrap: 700;
        }
        .box-left-div2{
          font-size: 12px;
          color: #ccc;
        }
         .box-left-div3{
          line-height:36px;
          font-size: 26px;
        }
      }
      .warpper-box-right{
        margin-top: 30px;
        float: right;
        .box-right-button{
          width: auto;
          height: 30px;
          margin-left: 10px;
        }
      }
  }
  .grade{
    background-image: url(./../../assets/images/beij.png);
    width:90%;
    padding: 12px 10px;
    margin: 0 auto;
    height: 60px;
    border-radius:10px ;
    margin-top: -10px;
    margin-bottom: 10px;
    position: relative;
    z-index: 8;
    color: #fff;
    .p1{
      margin-top: 10px;
      line-height: 28px;
      font-size: 18px;
    }
    .p2{
      margin-top: 10px;
      font-size: 12px;
    }
    .icon{
      position: absolute;
      top: 40px;
      right: 10px;
      font-size: 18px;
    }
  }
  
</style>
