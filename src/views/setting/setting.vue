<template>
  <div class='setting'>
    <van-cell title="隐私政策" is-link to="agreement" />
    <van-cell title="关于" is-link to="infoabout" />
  </div>
</template>

<script>
export default {
  name: 'setting',
  data() {
    return {
      list: [],
      content: [
        {
          id: 1,
          name: '慧聪数科',
          enabled: true,
          pid: 0,
          children: [
            { id: 2, name: '市场部', enabled: true, pid: 1, createTime: 1553476532000, label: '市场部' },
            { id: 5, name: '产品风险', enabled: true, pid: 1, createTime: 1553476844000, label: '产品风险' },
            { id: 6, name: '技术部', enabled: true, pid: 1, createTime: 1553478738000, label: '技术部' },
            { id: 7, name: '大数据部', enabled: true, pid: 1, createTime: 1553483090000, label: '大数据部' },
            { id: 8, name: '财务部', enabled: true, pid: 1, createTime: 1553483093000, label: '财务部' },
            { id: 11, name: '人事部', enabled: true, pid: 1, createTime: 1553483278000, label: '人事部' },
            {
              id: 13,
              name: '渠道',
              enabled: true,
              pid: 1,
              children: [
                {
                  id: 14,
                  name: '北京营销公司',
                  enabled: true,
                  pid: 13,
                  createTime: 1602763440000,
                  label: '北京营销公司'
                }
              ],
              createTime: 1602763415000,
              label: '渠道'
            },
            { id: 15, name: '电销组', enabled: true, pid: 1, createTime: 1602763476000, label: '电销组' }
          ],
          createTime: 1551413257000,
          label: '慧聪数科'
        },
        {
          id: 1,
          name: '慧聪数科',
          enabled: true,
          pid: 0,
          children: [
            { id: 2, name: '市场部', enabled: true, pid: 1, createTime: 1553476532000, label: '市场部' },
            { id: 5, name: '产品风险', enabled: true, pid: 1, createTime: 1553476844000, label: '产品风险' },
            { id: 6, name: '技术部', enabled: true, pid: 1, createTime: 1553478738000, label: '技术部' },
            { id: 7, name: '大数据部', enabled: true, pid: 1, createTime: 1553483090000, label: '大数据部' },
            { id: 8, name: '财务部', enabled: true, pid: 1, createTime: 1553483093000, label: '财务部' },
            { id: 11, name: '人事部', enabled: true, pid: 1, createTime: 1553483278000, label: '人事部' },
            {
              id: 13,
              name: '渠道',
              enabled: true,
              pid: 1,
              children: [
                {
                  id: 14,
                  name: '北京营销公司',
                  enabled: true,
                  pid: 13,
                  createTime: 1602763440000,
                  label: '北京营销公司'
                }
              ],
              createTime: 1602763415000,
              label: '渠道'
            },
            { id: 15, name: '电销组', enabled: true, pid: 1, createTime: 1602763476000, label: '电销组' }
          ],
          createTime: 1551413257000,
          label: '慧聪数科'
        },
        {
          id: 1,
          name: '慧聪数科',
          enabled: true,
          pid: 0,
          children: [
            { id: 2, name: '市场部', enabled: true, pid: 1, createTime: 1553476532000, label: '市场部' },
            { id: 5, name: '产品风险', enabled: true, pid: 1, createTime: 1553476844000, label: '产品风险' },
            { id: 6, name: '技术部', enabled: true, pid: 1, createTime: 1553478738000, label: '技术部' },
            { id: 7, name: '大数据部', enabled: true, pid: 1, createTime: 1553483090000, label: '大数据部' },
            { id: 8, name: '财务部', enabled: true, pid: 1, createTime: 1553483093000, label: '财务部' },
            { id: 11, name: '人事部', enabled: true, pid: 1, createTime: 1553483278000, label: '人事部' },
            {
              id: 13,
              name: '渠道',
              enabled: true,
              pid: 1,
              children: [
                {
                  id: 14,
                  name: '北京营销公司',
                  enabled: true,
                  pid: 13,
                  createTime: 1602763440000,
                  label: '北京营销公司'
                }
              ],
              createTime: 1602763415000,
              label: '渠道'
            },
            { id: 15, name: '电销组', enabled: true, pid: 1, createTime: 1602763476000, label: '电销组' }
          ],
          createTime: 1551413257000,
          label: '慧聪数科'
        }
      ]
    }
  },
  components: {},
  created() {},
  mounted() {
    this.add()
  },
  methods: {
    add() {
      this.content.forEach((item, index) => {
        let data = {
          id: item.id,
          label: item.label,
          name: item.name
        }
        this.list.push(data)
        item.children.forEach((chilitem, index) => {
          this.list.push(chilitem)
        })
      })

      console.log(this.list)
    }
  }
}
</script>
<style  scoped>
.setting {
  height: 100%;
}
</style>
