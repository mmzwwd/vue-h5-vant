<template>
  <div class='service'>
    <div class="copartner ">
      <div class="tip">
        <p>您好，我是小新，很高兴为您服务!</p>
      </div>
      <div class="main">
        <div class="msg-item" v-for="(serviceItem,index) in serviceList" :key="index">
          <div class="left" v-if="serviceItem.type=='left'">
            <div class="avater">
              <img :src="serviceItem.img" alt="">
            </div>
            <div class="content">
              <div class="name">{{serviceItem.name}}</div>
              <div class="msg-box">
                <div class="text">{{serviceItem.text}}</div>
                <div class="btn-column">
                  <div class="btn" @click="count()" v-if="serviceItem.btn">{{serviceItem.btn}}</div>
                  <div class="btn" @click="other()" v-if="serviceItem.btn1">{{serviceItem.btn1}}</div>
                  <div class="btn" @click="choice()" v-if="serviceItem.btn2">{{serviceItem.btn2}}</div>

                </div>
              </div>
            </div>
          </div>
          <div class="right" v-if="serviceItem.type=='right'">
            <div class="status"></div>
            <div class="content">
              <div class="msg-box">
                <div class="text">{{serviceItem.text}}</div>
              </div>
            </div>
            <div class="avater">
              <img :src="serviceItem.img" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="mainNone"></div>
    </div>
    <div class="bottom-wrap">
      <van-search class="active" v-model="value" shape="round" background="#fff" placeholder="请输入" />
      <div class="btn" @click="sendOut()">发送</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'service',
  data() {
    return {
      value: '',
      serviceList: [
        {
          nmae: '小新',
          type: 'left',
          img: 'https://static.rong360.com/upload/png/b2/36/b23612bacf1694be0019c3b29ebfed16.png',
          text: '您好，我是客服小新，很高兴为您服务，请您选择以下您想咨询的问题',
          btn: '订单结算问题',
          btn1: '其他问题'
        }
      ]
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    count() {
      let a = {
        type: 'right',
        img:
          'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epHuy1OOTMw7564rZQkcK7OMWhpqiaMF0qwY2qwOPEP12asgWSES4cZkEmoXYhHdjZNH7ucNwUyJjA/132',
        text: '订单结算问题'
      }
      this.serviceList.push(a)
      let b = {
        nmae: '小新',
        type: 'left',
        img: 'https://static.rong360.com/upload/png/b2/36/b23612bacf1694be0019c3b29ebfed16.png',
        text: '点击按钮，选择您想要查询的订单',
        btn2: '选择订单'
      }
      this.serviceList.push(b)
    },
    sendOut() {
      if (this.value) {
        let a = {
          type: 'right',
          img:
            'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epHuy1OOTMw7564rZQkcK7OMWhpqiaMF0qwY2qwOPEP12asgWSES4cZkEmoXYhHdjZNH7ucNwUyJjA/132',
          text: this.value
        }
        this.serviceList.push(a)
      }
    },
    choice() {},
    other() {}
  }
}
</script>
<style  lang='scss' scoped>
.service {
  width: 100%;
  .copartner {
    padding: 10px 10px 20px;
    .tip {
      text-align: center;
      margin-bottom: 18px;
      p {
        color: #605f6b;
        background-color: #e5e6e8;
        display: inline-block;
        padding: 4px 10px;
        border-radius: 16px;
        line-height: 18px;
      }
    }
    .main {
      .msg-item {
        width: 100%;
        overflow: hidden;
        margin-bottom: 10px;
        .left {
          max-width: 280px;
          margin-bottom: 10px;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          .avater {
            margin-right: 16px;
            overflow: hidden;
            width: 44px;
            height: 45px;
            vertical-align: middle;
            text-align: center;
            img {
              width: 100%;
              border-radius: 50%;
            }
          }
          .content {
            flex: 1;
            .name {
              color: #605f6b;
              text-align: left;
              font-size: 12px;
              margin-bottom: 8px;
              line-height: 14px;
            }
            .msg-box {
              background: #fff;
              box-shadow: 2px 3px 0 #e8e8e8;
              box-sizing: border-box;
              border-radius: 4px;
              padding: 10px 12px 0;
              display: inline-block;
              .text {
                color: #3b3453;
                font-size: 14px;
                line-height: 16px;
                text-align: justify;
                padding-bottom: 8px;
                word-break: break-all;
              }
              .btn-column {
                padding-bottom: 8px;
                .btn {
                  background-color: rgba(247, 132, 0, 0.1);
                  color: #f78400;
                  display: block;
                  width: 80%;
                  padding: 6px 12px;
                  line-height: 16px;
                  font-size: 12px;
                  text-align: left;
                  border-radius: 10px;
                  margin-bottom: 8px;
                }
              }
            }
          }
        }
        .right {
          float: right;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          max-width: 200px;
          overflow: hidden;
          .status {
            width: 14px;
            height: 14px;
            margin: 15px 2px 15px 0px;
            background-size: 100% 100%;
            background-position: 50%;
          }
          .content {
            margin: 6px 0;
            flex: 1;
            .msg-box {
              padding: 6px 9px;
              background-color: rgba(247, 132, 0, 0.8);
              box-sizing: border-box;
              border-radius: 6px;
              display: inline-block;
              .text {
                color: #fff;
                font-size: 14px;
                text-align: justify;
                padding-bottom: 2px;
                word-break: break-all;
              }
            }
          }
          .avater {
            margin-left: 4px;
            overflow: hidden;
            width: 44px;
            height: 45px;
            vertical-align: middle;
            text-align: center;
            img {
              width: 100%;
              border-radius: 50%;
            }
          }
        }
      }
    }
    .mainNone {
      width: 100%;
      height: 36px;
      //   background: #fff;
    }
  }
  .bottom-wrap {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 46px;
    background: hsla(0, 0%, 100%, 0.9);
    box-shadow: 0 -0.10667rem 0.53333rem 0 rgba(0, 0, 0, 0.07);
    display: flex;
    box-align: center;
    align-items: center;
    justify-content: space-between;
    padding: 3px 6px 4px 5px;
    .active {
      width: 84%;
    }
    .btn {
      background-image: linear-gradient(90deg, #f98400, #ffa347);
      color: #fff;
      padding: 8px 14px;
      border-radius: 10px;
      font-size: 12px;
      line-height: 20px;
      box-sizing: border-box;
    }
  }
}
</style>
