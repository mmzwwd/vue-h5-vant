<!-- home -->
<template>
  <div class="index-container">
    <div class="ap-warpper">
      <div class="warpper">
        <div class="warpper-bar">
          信用卡
          <span class="bar-span">
            <van-icon class="iconSetting" name="setting-o" size="0.62rem" @click="settingClick" />
            <van-icon class="iconComment" name="comment-o" size="0.62rem" dot @click="noticeClick" />
          </span>
        </div>
        <div class="warpper-box">
          <van-swipe class="my-swipe" style="height:100%;" :autoplay="5000" indicator-color="white">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img class="my-swipe-img" :src="image.imageurl" alt="">
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
     </div>
    <div class="banner">
      <div class="banner-div">
        <img class="banner-img" v-for="(image, index) in images" :key="index" :src="image.imageurl" alt="">
      </div>
    </div>
    <div class="text">
      <div class="text-span">推荐银行</div>
      <div class="text-span-one" @click="policy">奖励政策<van-icon class="text-span-icon" name="arrow" /></div>
    </div>
    <div class="bank-list">
      <div class="copartner" v-for="(item,index) in list" :key="index" @click="cardListCliack(item.id)">
        <div class="logo"><img style="width: 100%;" :src="item.iconImage" alt=""></div>
        <div class="name">{{item.name}}</div>
        <div class="tags"><span style="background: rgba(250,100,0,.08);margin: 0 auto;">{{item.settlementInterval}}</span></div>
        <div class="desc"><span>{{item.specialOffer}}</span></div>
        <div class="red-btn">奖励￥{{item.bounty}}</div>
      </div>
    </div>
    <!-- <van-cell icon="success" v-for="item in list" :key="item" :title="item" /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { logins,recommendBankall,bannerall} from '../../api/user';

  export default {
    computed: {
      ...mapGetters(['userName'])
    },
  data() {
    return {
      img: './../../assets/img/image/backg.png',
      images: [],
      list: []
    }
  },
  mounted() {
    // this.isOpenId()
    this.bankscontroller()
    this.bannerall()
  },

  methods: {
    bannerall(){
      let data={
        loginId:"",
        accessToken:"",
      }
      bannerall(data).then(res=>{
        console.log(res)
        this.images=res.data
      })
    },
    bankscontroller(){
    let Data = {
      accessToken:"",
      loginId:"",
      };
      recommendBankall(Data).then(res => {   
        this.list=  res.data
      })
    },
    settingClick(){
    this.$router.push('/setting')
    },
    noticeClick() {
      this.$router.push('/notice')
    },
    isOpenId(){
      let Data = {
        openId:'undefined'
    };
      logins(Data).then(res => {      
         })
     this.$store.commit('SET_USER_NAME', '真乖')
      this.$store.dispatch('setIsOpen', '1')
      console.log( this.$store.state)
    },
    policy() {
      this.$router.push('/pricePolicy')
    },
    cardListCliack(ids) {
      this.$router.push({ path: '/cardList', query: { id: ids } })
    }
  }
}
</script>
<style>
.index-container .my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  /* background-color: #39a9ed; */
}
.index-container.my-swipe .van-swipe-item img {
  width: 96%;
  height: 100%;
  margin: 0 auto;
  border-radius: 10px;
}
.my-swipe-img{
  width: 96%;
  border-radius: 10px;
  height: 100%;
}
</style>
<style lang="scss" scoped>
.index-container {
  .ap-warpper{
    height: 200px;
  }
  .warpper {
    width: 100%;
    height: 100px;
    background-image: url(./../../assets/images/beij.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -6vw;
    .warpper-bar{
      width: 93%;
      margin: 0 auto;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 2px;
      color: #5a382b;
      position: relative;
      padding-top: 10px;
      .bar-span{
      width: auto;
      display: block;
      position: absolute;
      top:10px;
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
    .warpper-box {
      width: 90%;
      margin: 0 auto;
      height: 120px;
      padding-top:10px;
    }
  }
  .banner {
    width: 98%;
    height: 70px;
    // margin-top: 90px;
    overflow: hidden;
    .banner-div::-webkit-scrollbar {
      display: none;
    }
    .banner-div {
      overflow: scroll;
      overflow-x: scroll;
      white-space: nowrap;
      .banner-img {
        width: 140px;
        height: 70px;
        margin-left: 20px;
        border-radius: 8px;
        // float: left;
        text-align: center;
      }
    }
  }
  .text {
    margin: 16px;
    margin-top: 15px;
    display: block;
    height: 30px;
    .text-span {
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
      color: #3b3453;
      float: left;
    }
    .text-span-one {
      color: #EFB178;
      font-size: 14px;
      line-height: 32px;
      float: right;
      .text-span-icon{
        vertical-align: middle;
        font-size: 18px;
      }
    }
  }
  .bank-list {
    margin: 16px;
    flex-wrap: wrap;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .copartner {
      width: 31%;
      overflow: hidden;
      height: auto;
      background: #fff;
      border-radius: 10px;
      margin: 0 4px;
      margin-bottom: 10px;
      .logo {
        width: 20px;
        height: 20px;
        margin: 0 auto;
      }
      .name {
        text-align: center;
        font-size: 16px;
        color: #3b3453;
        font-weight: 700;
        margin: 10px 0;
      }
      .tags {
        color: #f78400;
        line-height: 20px;
        font-size: 10px;
        margin-bottom: 8px;
        padding: 0 2px;
        text-align: center;
        display: flex;
        span{
          padding: 0 2px;
        }
      }
      .desc {
        width: 90%;
        color: #9a99a3;
        display: flex;
        font-size: 10px;
        margin: 0 auto;
        margin-bottom: 8px;
        white-space: nowrap;
        overflow: hidden;
        span{
          transform: scale(0.9);
        }
      }
      .red-btn {
        background: #FEC841;
        text-align: center;
        line-height: 24px;
        font-size: 14px;
        font-weight: 600;
        color: #fff;
      }
    }
  }
}
</style>
