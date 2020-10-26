<template>
  <div class='pricePolicy'>
    <div class="title">信用卡推广奖励政策</div>
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
    <div>
      <div class="sub-title">结算规则：</div>
      <div class="content">首次申请某一银行信用卡，资料审批通过，收到核卡短信通知，并查询到申卡进度为审批成功，即可享受该银行对应的“奖励金额”；</div>
    </div>
    <div>
      <div class="sub-title">结算周期：</div>
      <div class="content">平台会在您进度查询显示成功后实时结算奖励；对于支持“自动结算”的银行，平台会为您自动更新进度，进度查询显示批卡成功后便会为您结算奖励。</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pricePolicy',
  data() {
    return {
      list: ['银行', '结算节点', '奖励金', '结算方式', '发短信后结算时长'],
      option: {
        column: [
          {
            label: '银行',
            prop: 'roomType'
          },
          {
            label: '结算节点',
            prop: 'closedAccount'
          },
          {
            label: '奖励金',
            prop: 'noAccount'
          },
          {
            label: '结算方式',
            prop: 'givePrice'
          },
          {
            label: '发短信后结算时长',
            prop: 'totalPrice'
          }
        ]
      },
      tableData: [
        {
          imgs: 'https://m.rong360.com/static/img/credit/bank/2.png',
          closedAccount: '批卡结算',
          givePrice: '查询结算或T+2自动结算',
          noAccount: 130,
          roomType: '平安初审版',
          totalPrice: '查询批卡成功后实时结算或T+2个工作日自动结算'
        },
        {
          imgs: 'https://m.rong360.com/static/img/credit/bank/2.png',
          closedAccount: '批卡结算',
          givePrice: '查询结算或T+2自动结算',
          noAccount: 130,
          roomType: '平安初审版',
          totalPrice: '查询批卡成功后实时结算或T+2个工作日自动结算'
        },
        {
          imgs: 'https://m.rong360.com/static/img/credit/bank/2.png',
          closedAccount: '批卡结算',
          givePrice: '查询结算或T+2自动结算',
          noAccount: 130,
          roomType: '平安初审版',
          totalPrice: '查询批卡成功后实时结算或T+2个工作日自动结算'
        },
        {
          imgs: 'https://m.rong360.com/static/img/credit/bank/2.png',
          closedAccount: '批卡结算',
          givePrice: '查询结算或T+2自动结算',
          noAccount: 130,
          roomType: '平安初审版',
          totalPrice: '查询批卡成功后实时结算或T+2个工作日自动结算'
        },
        {
          imgs: 'https://m.rong360.com/static/img/credit/bank/2.png',
          closedAccount: '批卡结算',
          givePrice: '查询结算或T+2自动结算',
          noAccount: 130,
          roomType: '平安初审版',
          totalPrice: '查询批卡成功后实时结算或T+2个工作日自动结算'
        },
        {
          imgs: 'https://m.rong360.com/static/img/credit/bank/2.png',
          closedAccount: '批卡结算',
          givePrice: '查询结算或T+2自动结算',
          noAccount: 130,
          roomType: '平安初审版',
          totalPrice: '查询批卡成功后实时结算或T+2个工作日自动结算'
        },
        {
          imgs: 'https://m.rong360.com/static/img/credit/bank/2.png',
          closedAccount: '批卡结算',
          givePrice: '查询结算或T+2自动结算',
          noAccount: 130,
          roomType: '平安初审版',
          totalPrice: '查询批卡成功后实时结算或T+2个工作日自动结算'
        },
        {
          imgs: 'https://m.rong360.com/static/img/credit/bank/2.png',
          closedAccount: '批卡结算',
          givePrice: '查询结算或T+2自动结算',
          noAccount: 130,
          roomType: '平安初审版',
          totalPrice: '查询批卡成功后实时结算或T+2个工作日自动结算'
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
<style lang="scss"  scoped>
.pricePolicy {
  padding: 20px 15px;
  .title {
    color: #3b3453;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 20px;
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
  .sub-title {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 10px;
    font-weight: 400;
    margin-top: 10px;
  }
  .content {
    color: #605f6b;
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 8px;
    letter-spacing: 1px;
  }
  .table {
    border: 1px solid #d6d6e0;
  }
  .table-td {
    border: solid #d6d6e0 1px;
  }
  td:nth-child(1) {
    width: 56px;
  }
  td:nth-child(2) {
    width: 56px;
  }
  td:nth-child(3) {
    width: 36px;
  }
  td:nth-child(4) {
    width: 70px;
  }
  .table-img {
    width: 12px;
    height: 12px;
  }
}
</style>
