<template>
  <div class="contacts">
    <div class="title">我的专属客服</div>
    <div class="content">
      <div class="line">
        <img src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLWj05bgtKHicEvGgTBhVwlkcQ7BUgReYWQGhQRrM5iaME8eWnGACDo58wtL4vbmpE0eGNNNYpMp24A/132" alt="" class="icon">
        <div class="name-box">
          <span class="name">℃●⊙█▂♂James</span>
          <br>
          <span class="iden">身份：合伙人</span>
        </div>
        <div class="contact-icon tag" @click="dialog()">
          <img src="https://static.rong360.com/gl/uploads/allimg/181017/211_1653087492.png" alt="">
        </div>
        <div class="contact-icon iphone">
          <a :href="'tel:' + tel">
            <img src="https://static.rong360.com/upload/png/68/b6/68b65cc3474e1d79d4dbd0f769f4d8ab.png" alt="">
          </a>
        </div>
      </div>
      <div class="contact-line">
        专属客服是面向用户的第一责任人，在享有平台相关权益的同时，也肩负对用户进行指导、培训和排忌解惑的责任和义务。
      </div>
    </div>
    <div class="content time-content">
      <p class="p1">您已加入团队3天</p>
      <p class="p2">关系绑定时间：2020年10月19日 14:36:00</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Dialog } from 'vant'
import Clipboard from 'clipboard'
export default {
  name: 'ClipboardTest',
  data() {
    return {
      tel: 18810563078
    }
  },
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    dialog() {
      Dialog.confirm({
        width: '68%',
        confirmButtonText: '去粘贴',
        title: '微信号：james212155',
        message: '已复制，可直接粘贴'
      })
        .then(() => {
          // on confirm
          this.copyLink(this.tel)
        })
        .catch(() => {
          // on cancel
        })
    },
    copyLink(data) {
      console.log(data)
      let clipboard = new Clipboard('.van-hairline--left', {
        text: function () {
          return data
        }
      })
      console.log(11111111)
      clipboard.on('success', e => {
        console.log('成功')
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        console.log('失败')
        clipboard.destroy()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  padding: 20px;
  height: 100%;
  color: #3b3453;
  box-sizing: border-box;
  .title {
    margin-bottom: 14px;
    font-size: 20px;
    line-height: 30px;
    font-weight: 700;
  }
  .content {
    padding: 30px 16px 30px 20px;
    background: #fff;
    border-radius: 4px;
  }
  .line {
    height: 60px;
    display: flex;
    justify-content: space-between;
    .icon {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      float: left;
    }
    .name-box {
      float: left;
      max-width: 135px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      .name {
        font-size: 16px;
        line-height: 16px;
      }
      .iden {
        color: #999;
        font-size: 14px;
        line-height: 40px;
      }
    }
    .contact-icon {
      width: 45px;
      height: 47px;
      float: left;
      img {
        width: 100%;
      }
    }
  }
  .contact-line {
    margin-top: 2px;
    font-size: 10px;
    letter-spacing: 1px;
    line-height: 14px;
    color: #666;
  }
}
.time-content {
  margin-top: 20px;
  .p1 {
    font-size: 16px;
    color: #333;
  }
  .p2 {
    font-size: 12px;
    color: #666;
    margin-top: 10px;
  }
}
</style>
