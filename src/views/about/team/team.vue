<template>
  <div class='team'>
    <div class="head">
      <!-- 粘性布局 -->
      <van-sticky>
         <van-search v-model="value" show-action placeholder="请输入搜索关键词" @focus="change(false)" @clear="change(true)" @search="onSearch">
          <template #action>
            <div @click="onSearch">搜索</div>
          </template>
        </van-search>
      </van-sticky>
    </div>
    <div class="centre" v-if="focusShow">
      <div class="title">我的团队业绩</div>
      <div class="team-lists">
        <div class="list" v-for="(item,index) in list" :key="index">
          <div class="list-div1">{{item.name}}</div>
          <div class="list-div2">{{item.agg}}</div>
          <div class="list-div3">
            <span>{{item.agse}}</span>
          </div>
        </div>
      </div>
      <div class="title">我的推荐人</div>
      <div class="content">
        <div class="line">
          <div class="name-box">
            <img src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLWj05bgtKHicEvGgTBhVwlkcQ7BUgReYWQGhQRrM5iaME8eWnGACDo58wtL4vbmpE0eGNNNYpMp24A/132" alt="" class="icon">
            <span class="name"> 乌托邦（**斌)</span>
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
      </div>
      <div class="title">直推理事及其团队业绩</div>
      <!-- <div class="wrap_view">
        <van-empty description="您还没有邀请任何理事,">
          <div class="wrap_div">赶快组建属于您自己的团队吧</div>
          <van-button round type="info" class="bottom-button">
            去邀请
          </van-button>
        </van-empty>
      </div> -->
      <div class="content">
        <div class="line">
          <div class="name-box">
            <img src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLWj05bgtKHicEvGgTBhVwlkcQ7BUgReYWQGhQRrM5iaME8eWnGACDo58wtL4vbmpE0eGNNNYpMp24A/132" alt="" class="icon">
            <span class="name"> 乌托邦（**斌)</span>
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
        <div class="content-div" v-for="(item,index) in listapse" :key="index">
          <div class="time">加入时间：{{item.title}}</div>
          <div class="content-list" v-show='openShow' v-html="item.content">
          </div>
          <unfoldandfoldu :colour="'#f78400'" :showText="'团队业绩'" :hideText="'团队业绩'" :openShow="openShow" @toFather="collapse"></unfoldandfoldu>
        </div>
      </div>
      <div class="tail">
        -------- 已经到底了 ------
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Dialog } from 'vant'
import unfoldandfoldu from '@/components/unfoldAndFoldu'
export default {
  name: 'team',
  data() {
    return {
      focusShow:true,
      openShow: false,
      centreShow: true,
      tel: '',
      value: '',
      listapse: [
        {
          title: '2020-09-09',
          content:
            '【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。 <br>  <br>其余银行一般达到结算规则后3个工作日左右，客户或者合伙人需要到平台上进行进度查询，各家银行审核进度不同，状态更新也有延迟；【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。 <br>  <br>其余银行一般达到结算规则后3个工作日左右，客户或者合伙人需要到平台上进行进度查询，各家银行审核进度不同，状态更新也有延迟；【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。'
        }
      ],
      list: [
        {
          name: '直推理事数(人)',
          agg: 10,
          agse: '昨日+10'
        },
        {
          name: '直推理事数(人)',
          agg: 10,
          agse: '昨日+10'
        },
        {
          name: '直推理事数(人)',
          agg: 10,
          agse: '昨日+10'
        },
        {
          name: '直推理事数(人)',
          agg: 10,
          agse: '昨日+10'
        }
      ]
    }
  },
  components: { unfoldandfoldu },
  created() {},
  mounted() {},
  methods: {
    change(val){
       this.focusShow=val
       if(val==true){
         document.getElementsByTagName("input")[0].blur()
       }
    },
    collapse(ind) {
      this.openShow = ind
      console.log(ind)
    },
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
    },
    onSearch(val) {
      Toast(val)
    },
    onCancel() {
      Toast('取消')
    }
  }
}
</script>
<style>
.team .van-empty {
  padding: 0;
}
.bottom-button {
  width: 90px;
  height: 30px;
}
.wrap_view .van-empty__bottom {
  margin-top: 0px;
  text-align: center;
}
</style>
<style>
.team .van-search__action {
  color: #3b3453;
}
</style>
<style lang="scss"  scoped>
.team {
  color: #3b3453;
  .head {
    width: 100%;
    height: 55px;
  }
  .title {
    font-size: 20px;
    line-height: 30px;
    font-weight: 700;
    padding: 20px;
  }
  .team-lists {
    width: 85%;
    padding: 15px 10px 5px 10px;
    margin: 0 auto;
    border-radius: 5px;
    background: #fff;
    overflow: hidden;
    .list {
      width: 50%;
      height: 90px;
      margin-bottom: 5px;
      float: left;
      div {
        text-align: center;
      }
      .list-div1 {
        font-size: 12px;
        color: #605f6b;
      }
      .list-div2 {
        font-size: 24px;
        color: #3b3453;
        font-weight: 800;
        margin: 6px 0;
      }
      .list-div3 {
        span {
          width: auto;
          background: #d6d6e0;
          font-size: 2.667vw;
          color: #fff;
          border-radius: 18.667vw 18.667vw 18.667vw 0.267vw;
          padding: 2px 6px;
        }
      }
    }
  }
  .content {
    width: 85%;
    margin: 0 auto;
    padding: 20px 10px 10px 10px;
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
      margin-left: 2px;
    }
    .name-box {
      float: left;
      max-width: 200px;
      .name {
        max-width: 140px;
        text-indent: 2px;
        font-size: 16px;
        line-height: 20px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
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
  .wrap_view {
    padding-bottom: 30px;
    .wrap_div {
      margin-top: 2px;
      margin-bottom: 16px;
      padding: 0 6px;
      color: #969799;
      font-size: 14px;
    }
  }
  .content-div {
    padding: 8px 20px;
    margin: 0 auto;
    margin-bottom: 16px;
    border-radius: 6px;
    background: #fff;
    .time {
      font-size: 15px;
      line-height: 18px;
      color: #333;
      margin-bottom: 10px;
    }
    .content-list {
      font-size: 12px;
      line-height: 20px;
      color: #999;
    }
    .hide-over {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      max-height: 40px;
      line-height: 20px;
    }
  }
  .tail {
    font-size: 10px;
    text-align: center;
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #c8c9cc;
    margin-top: 10px;
    margin-bottom: 100px;
  }
}
</style>
