<template>
  <div class='cardOne'>
    <div class="header">
      <div class="logo"><img class="logo-img" src="https://m.rong360.com/static/img/credit/bank/3.png" alt=""></div>
      <div class="info">
        <div class="name">光大银行</div>
        <div class="desc" style="color:#cdcddf;"> 星巴克专享送满40减20</div>
      </div>
    </div>
    <div class="body-list">
      <div class="item" v-for="item in list" @click="creditClick">
        <div class="card-img"><img src="https://img.rong360.com/0/a446a/cimg/39/396e22f3632e1b305d43200bd8332ec66414cb55_200x124.jpeg" alt=""></div>
        <div class="info">
          <div class="card-name">光大阳光本草岐黄菁英信用卡</div>
          <div class="desc">世界中医药日当月多倍积分</div>
          <div class="tags">
            <span class="tags-span" style="margin-right:5px;">特色主题卡</span>
            <span class="tags-span">免年费</span>
          </div>
        </div>
      </div>
    </div>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/cardOne">信用卡办理</van-tabbar-item>
        <van-tabbar-item icon="search" to="/order">订单查询</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'cardOne',
  data() {
    return {
      activeNames: ['1'],
      list: [{ id: 123 }, { id: 123 }, { id: 123 }, { id: 123 }]
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    courseClick() {
      this.$router.push('/pushTutorial')
    },
    creditClick() {
      this.$router.push('/creditCard')
    }
  }
}
</script>
<style>
.cardOne .title-wrap {
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: #3b3453;
}
</style>
<style lang="scss"  scoped>
.cardOne {
  background: #fff;
  min-height: 100%;
  .header {
    width: 100%;
    height: 48px;
    padding: 20px 0 20px 20px;
    background-image: url('./../../assets/img/image/upload.png');
    background-size: cover;
    background-repeat: no-repeat;
    .logo {
      width: 48px;
      height: 48px;
      background: #fff;
      border-radius: 50%;
      float: left;
      .logo-img {
        width: 30px;
        margin: 9px;
      }
    }
    .info {
      height: 100%;
      float: left;
      margin-left: 8px;
      margin-top: 3px;
      color: #fff;
      .name {
        font-size: 20px;
        font-weight: 700;
        line-height: 26px;
        margin-bottom: 2px;
      }
    }
  }
  .activity {
    .tag {
      align-items: center;
      font-size: 12px;
      color: #f43;
      background-color: rgba(255, 68, 51, 0.05);
      line-height: 20px;
      box-sizing: border-box;
      border-radius: 20px 1px 1px 20px;
      border: 1px solid rgba(255, 68, 51, 0.4);
      padding: 4px 4px 1px 8px;
      background-size: 5px 4px;
      background-repeat: no-repeat;
      background-position: 1.333vw;
      margin-bottom: 2.667vw;
      display: inline-flex;
      -webkit-box-align: center;
    }
    .text {
      color: #605f6b;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 20px;
    }
  }
  .sub-title {
    color: #605f6b;
    font-size: 14px;
    line-height: 20px;
    .text {
      margin-bottom: 10px;
    }
  }
  .text-area {
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
      color: #f78400;
      font-size: 14px;
      line-height: 30px;
      float: right;
    }
  }
  .body-list {
    margin: 0 20px;
    .item {
      display: flex;
      -webkit-box-align: center;
      padding: 18px 0;
      box-sizing: border-box;
      .card-img {
        width: 100px;
        height: 62px;
        border-radius: 4px;
        margin-right: 15px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .info {
        padding: 2px 0;
        box-sizing: border-box;
        -webkit-box-flex: 1;
        flex: 1;
        width: 0;
        .card-name {
          color: #3b3453;
          font-size: 16px;
          line-height: 20px;
          font-weight: 700;
          margin-bottom: 5px;
          word-break: break-all;
        }
        .desc {
          color: #9a99a3;
          font-size: 12px;
          line-height: 16px;
          margin-bottom: 5px;
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
        }
        .tags {
          color: #f78400;
          font-size: 10px;
          .tags-span {
            border: 1px solid rgba(247, 132, 0, 0.5);
            height: 14px;
            padding: 2px 4px;
            border-radius: 4px;
          }
        }
      }
    }
  }
}
</style>
