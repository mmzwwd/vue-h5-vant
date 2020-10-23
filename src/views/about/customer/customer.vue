<template>
  <div class='customer'>
    <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch">
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <div class="cardInfo">
      <div class="item" v-for="item in list">
        <div class="name">{{item.name}}</div>
        <div class="number">{{item.number}}</div>
      </div>
    </div>
    <div class="tabView">
      <div class="header-tab">
        <div :class='["tab", {"active":textShow}]' @click="tabClick(true)">已申卡客户</div>
        <div :class='["tab", {"active":!textShow}]' @click="tabClick(false)">未申卡客户</div>
      </div>
    </div>
    <!-- <div class="empty">
      <van-empty description="您还没有任何客户，赶紧去推广吧">
        <van-button round type="danger" class="bottom-button">
          去推广
        </van-button>
      </van-empty>
    </div> -->
    <div class="custom-list" v-for="(customList,index) in customListe">
      <div class="item">
        <div class="item-lis">
          <img class="item-img" src="https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epHuy1OOTMw7564rZQkcK7OMWhpqiaMF0qwY2qwOPEP12asgWSES4cZkEmoXYhHdjZNH7ucNwUyJjA/132" alt="">
          <div class="item-name">{{customList.title}}</div>
          <div class="item-type">理事</div>
        </div>
        <div class="item-phone">18810563078</div>
      </div>
      <div class="bank">
        <div class="bank-title">通过我推荐申请的银行</div>
        <div class="bank-list" v-for="(item,inde) in customList.bankList" v-if="inde==0 || customList.openShow">
          <div class="bank-lis">
            <img class="bank-img" src="https://m.rong360.com/static/img/credit/bank/3.png" alt="">
            <div class="bank-name">{{item.name}}</div>
            <div class="bank-type">待查询</div>
          </div>
          <div class="bank-invalid">28天后失效</div>
        </div>
      </div>
      <div class="item-show">
        <unfoldandfoldu :colour="'#f78400'" :showText="'展开'" :hideText="'收起'" :openShow="customList.openShow" :ind="index" @toFather="collapse"></unfoldandfoldu>
      </div>
    </div>
  </div>
</template>

<script>
import unfoldandfoldu from '@/components/unfoldAndFoldu'
export default {
  name: 'customer',
  data() {
    return {
      customListe: [
        {
          openShow: false,
          title: '卢屋王企鹅',
          bankList: [
            {
              name: '交通银行'
            },
            {
              name: '农业银行'
            },
            {
              name: '光大银行'
            }
          ]
        },
        {
          openShow: false,
          title: '卢屋王企鹅',
          bankList: [
            {
              name: '交通银行'
            },
            {
              name: '农业银行'
            },
            {
              name: '光大银行'
            }
          ]
        }
      ],
      textShow: true,
      value: '',
      list: [
        { name: '已申卡客户数(人)', number: 0 },
        { name: '未申卡客户数(人)', number: 0 }
      ]
    }
  },
  components: { unfoldandfoldu },
  created() {},
  mounted() {},
  methods: {
    collapse(type, ind) {
      this.openShow = type
      this.$set(this.customListe[ind], 'openShow', type)
      console.log(ind)
    },
    tabClick(type) {
      this.$toast.loading({
        // message: '加载中...',
        duration: 1000,
        forbidClick: true
      })
      console.log(11111111)
      // 手动清除 Toast
      this.textShow = type
      // this.$toast.clear()
      console.log(22222222222)
    },
    onSearch() {}
  }
}
</script>
<style lang='scss' scoped>
.customer {
  width: 100%;
  .cardInfo {
    display: block;
    overflow: hidden;
    width: 92%;
    height: 84px;
    background: -webkit-linear-gradient(right, #f97100, #ff9047);
    border-radius: 6px;
    margin: 10px auto;
    .item {
      float: left;
      width: 50%;
      color: #fff;
      .name {
        margin-top: 16px;
        line-height: 17px;
        font-size: 14px;
        text-align: center;
      }
      .number {
        line-height: 37px;
        font-size: 24px;
        font-weight: 700;
        text-align: center;
      }
    }
  }
  .tabView {
    overflow: hidden;
    width: 92%;
    height: 36px;
    margin: 10px auto;
    .header-tab {
      .tab {
        font-size: 16px;
        color: #3b3453;
        margin-right: 15px;
        line-height: 28px;
        float: left;
      }
      .active {
        font-size: 20px;
        font-weight: 700;
        position: relative;
      }
      .active:after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        width: 100%;
        height: 2px;
        background-image: linear-gradient(90deg, #f98400, #ffa347);
      }
    }
  }
  .empty {
    width: 100%;
    .bottom-button {
      background-color: #ff9047;
      border: 1px solid #ff9047;
      height: 30px;
    }
  }
  .custom-list {
    width: 92%;
    border-radius: 6px;
    margin: 10px auto;
    background: #fff;
    .item {
      margin: 8px;
      position: relative;
      font-size: 12px;
      border-bottom: 1px solid #cccccc;
      .item-phone {
        position: absolute;
        top: 17px;
        right: 10px;
        font-size: 14px;
      }
      .item-img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
      }
      .item-lis {
        padding-top: 10px;
        display: flex;
        width: 61%;
        justify-content: space-between;
        height: 40px;
      }
      .item-name {
        zoom: 0.9;
        max-width: 111px;
        font-size: 15px;
        height: 30px;
        line-height: 30px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .item-type {
        font-size: 10px;
        zoom: 0.9;
        height: 18px;
        line-height: 21px;
        margin-top: 5px;
        padding: 1px 5px;
        color: #ff3f3f;
        border: 1px solid #ff3f3f;
        border-radius: 3px;
      }
    }
    .bank {
      padding: 0 10px;
      .bank-title {
        zoom: 0.9;
        font-size: 10px;
        color: #cccccc;
        margin: 0 auto;
      }
    }
    .bank-list {
      font-size: 12px;
      line-height: 38px;
      color: #cccccc;
      position: relative;
      .bank-invalid {
        position: absolute;
        top: 10px;
        right: 10px;
      }
      .bank-img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
      }
      .bank-lis {
        padding-top: 10px;
        display: flex;
        width: 61%;
        justify-content: space-between;
        height: 40px;
      }
      .bank-name {
        max-width: 100px;
        font-size: 15px;
        line-height: 30px;
        font-weight: 700;
        color: #3b3453;
        overflow: hidden;
      }
      .bank-type {
        max-width: 60px;
        font-size: 12px;
        height: 20px;
        line-height: 21px;
        margin-top: 6px;
        padding: 1px 5px;
      }
    }
    .item-show {
      height: 20px;
      width: 90%;
      margin: 0 auto;
      padding-bottom: 10px;
    }
  }
}
</style>
