<template>
  <div class='levelIndex'>
    <div class="header">
      <div class="text">当前等级</div>
      <div class="level">
        <van-steps :active="active" active-icon="success" active-color="#ececf3">
          <van-step> <span class="levelSpan">理事</span> </van-step>
          <van-step>理事X1</van-step>
        </van-steps>
      </div>
    </div>
    <div class="main">
      <div class="board">
        <div class="title">本月晋升进度</div>
        <div class="item">
          <div>本月总业绩(元)</div>
          <div class="weight">10</div>
        </div>
        <div class="sub">
          <div class="item">
            <div>本月总业绩(元)</div>
            <div class="weight">10</div>
          </div>
          <div class="item">
            <div>本月总业绩(元)</div>
            <div class="weight">10</div>
          </div>
        </div>
        <div class="tip">
          <div class="tag update">升级</div>
          <div class="text">本月还需1,000元业绩可晋升为x1</div>
        </div>
      </div>
    </div>
    <van-sticky>
      <div class="sticky">
        <div class="header-tab"><span>等级规则</span></div>
      </div>
    </van-sticky>
    <div class="tab-page">
      <div class="content">
        <div class="title">一、升级规则</div>
        <div class="conten">平台将根据您的<span>每月总业绩和您的直推理事等级</span>，按照下表的计算方法实时统计并确定您的等级和奖励系数。</div>
      </div>
      <div class="vant-table">
        <table cellspacing="0" style="width:100%" class="table">
          <tr>
            <th class="th table-td" v-for="(item, index) in option.column" :key="index">{{ item.label }}</th>
          </tr>
          <tr v-for="(item, index) in tableData" :key="index" class="list-tr">
            <td class="table-td" v-for="(context, i) in option.column" :key="i">
              <img class="table-img" v-if="context.prop=='roomType'" :src="item.imgs" alt="">
              {{ item[context.prop] }}
            </td>
          </tr>
        </table>
      </div>
      <div class="light">每月总业绩计算方法</div>
      <div class="with-bg">
        每月总业绩 = 个人业绩 + 团队业绩
      </div>
      <div class="content"> 每月总业绩仅影响您的理事等级，非个人可提现金额；每月总业绩以自然月为周期进行实时统计，仅核算当月申卡且批卡的批卡奖金受益。</div>
      <div class="content"> ※ 2020年10月团队奖发放时间为2020年11月12日左右，发放形式为直接发放至您确认过的银行卡内，具体操作以2020年11月通知为准。</div>
      <div class="title">二、保级规则</div>
      <div class="content">每个自然月的第一天开始，您当月的初始级别由您上月业绩决定；</div>
      <div class="content">若您的当月业绩和直推理事等级符合升级规则即可继续升级，每月升级数不限，可直接冲至最高级；若您的当月业绩和直推理事等级仍达到与上月相同的等级要求，则当月保级；</div>
      <div class="content">若您的当月业绩和直推理事等级未达到与上月相同的等级要求，则下月级别将根据您的当月业绩自动降级到对应档位，</div>
      <div class="light">但团队奖励会按上月级别对应比例发放</div>
      <div class="with-bg">
        举例：理事A在8月1日成为X3理事。
        <br>
        8月业绩达到30万，且满足直推理事人数，则实时升级到了X5，并在9月初领到了X5系数的团队奖；理事A，9月业绩只有10万，没有达到X5等级要求，则10月初始级别评定为X4，但仍可领取X5系数的团队奖；10月理事A业绩仍旧只有10万，则11月初始级别依旧为X4，并领取X4系数的团队奖。
      </div>
      <div class="content">每月业绩均从0开始计算，不会与上月累加。</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Step, Steps } from 'vant'

Vue.use(Step)
Vue.use(Steps)
export default {
  name: 'levelIndex',
  data() {
    return {
      active: 1,
      option: {
        column: [
          {
            label: '理事等级',
            prop: 'roomType'
          },
          {
            label: '当月业绩m(元)',
            prop: 'closedAccount'
          },
          {
            label: 'X3及以上直推理事数',
            prop: 'noAccount'
          },
          {
            label: '奖励系数',
            prop: 'givePrice'
          }
        ]
      },
      tableData: [
        {
          roomType: '理事x1',
          closedAccount: '1000<m≤1万',
          noAccount: '0',
          givePrice: '31%'
        },
        {
          roomType: '理事x1',
          closedAccount: '1000<m≤1万',
          noAccount: '0',
          givePrice: '31%'
        },
        {
          roomType: '理事x1',
          closedAccount: '1000<m≤1万',
          noAccount: '0',
          givePrice: '31%'
        },
        {
          roomType: '理事x1',
          closedAccount: '1000<m≤1万',
          noAccount: '0',
          givePrice: '31%'
        },

        {
          roomType: '理事x1',
          closedAccount: '1000<m≤1万',
          noAccount: '0',
          givePrice: '31%'
        }
      ]
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style>
.levelIndex .van-steps {
  background-color: transparent;
}
.levelIndex .van-sticky {
  background: #fff;
}
</style>
<style  lang='scss' scoped>
.levelIndex {
  width: 100%;
  .header {
    width: 100%;
    height: 240px;
    background-image: url(https://static.rong360.com/upload/png/de/d6/ded68a39ea788c8923028a3399825f4b.png);
    padding: 20px 0 30px;
    .text {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 10px;
      text-align: center;
      color: #fff;
    }
    .level {
      padding: 0 20px;
      width: 200px;
      box-sizing: border-box;
      margin-bottom: 16px;
      font-size: 12px;
      float: right;
      .levelSpan {
        font-size: 16px;
        color: #fff;
      }
    }
  }
  .board {
    width: 80%;
    margin: 0 auto;
    margin-top: -30px;
    padding: 20px 14px;
    background: #fff;
    text-align: center;
    border-radius: 6px;
    .title {
      font-size: 16px;
      font-weight: 700;
      line-height: 22px;
      color: #3b3453;
      text-align: center;
      margin-bottom: 15px;
    }
    .item {
      margin-bottom: 5px;
      .weight {
        font-weight: 700;
        font-size: 24px;
        color: #3b3453;
        line-height: 36px;
      }
    }
    .sub {
      margin-bottom: 15px;
      padding: 30px 0 10px;
      width: 84%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      position: relative;
      border-radius: 6px;
      background: #f6f6f6;
      .item {
        position: relative;
        z-index: 2;
        margin-bottom: 5px;
        .item div {
          flex: 1 1 auto;
        }
        .weight {
          font-size: 20px;
          color: #3b3453;
          line-height: 32px;
        }
      }
    }
    .tip {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      .tag {
        padding: 2px 4px;
        -webkit-border-radius: 1px 1px 1px 0;
        border-radius: 1px 1px 1px 0;
        background-image: linear-gradient(90deg, #ff634c, #ff3737);
        color: #fff;
        font-size: 10px;
        white-space: nowrap;
        margin-right: 5px;
      }
      .text {
        color: #605f6b;
        font-size: 12px;
        line-height: 17px;
      }
    }
  }
  .sticky {
    width: 100%;
    background: #fff;
    .header-tab {
      background: #fff;
      width: 88%;
      margin: 0 auto;
      text-align: left;
      margin-top: 10px;
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;

      span {
        padding-bottom: 3px;
        border-bottom: 4px solid #f98400;
      }
    }
  }
  .tab-page {
    width: 88%;
    padding: 15px 0;
    margin: 0 auto;
    margin-bottom: 20px;

    .title {
      line-height: 20px;
      font-size: 16px;
      color: #3b3453;
      padding-bottom: 12px;
      font-weight: 700;
      padding-top: 20px;
    }
    .conten {
      line-height: 20px;
      font-size: 12px;
      color: #3b3453;
      span {
        font-weight: 700;
      }
    }
    .vant-table {
      .table {
        // border-radius: 0.185185rem;
        .th {
          height: 40px;
          line-height: 40px;
          // background-color: #393943;
          background-color: #ececf3;
          color: #3b3453;
          text-align: center;
          // border-top-left-radius: 0.185185rem;
          // border-top-right-radius: 0.185185rem;
        }
        .list-tr {
          height: 40px;
          text-align: center;
        }
        .list-tr td {
          max-width: 130px;
        }
        .list-tr:nth-child(2n) {
          // background-color: #33333b;
        }
      }
    }
    .light {
      font-weight: 700;
      line-height: 20px;
      font-size: 14px;
      margin: 6px 0;
    }
    .with-bg {
      font-weight: 700;
      line-height: 20px;
      padding: 14px 10px;
      font-size: 14px;
      background-color: #ececf3;
      box-sizing: border-box;
      margin: 10px 0;
    }
  }
  .table {
    border: 1px solid #d6d6e0;
  }
  .table-td {
    border: solid #d6d6e0 1px;
  }
}
</style>
