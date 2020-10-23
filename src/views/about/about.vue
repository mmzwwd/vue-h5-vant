<template>
  <div id="app">
    <van-cell title="路由跳转" is-link to="index" />
    <van-cell title="推广海报" is-link to="extend" />
    <van-cell title="我的客户" is-link to="customer" />
    <van-cell title="我的团队" is-link to="team" />
    <van-cell title="联系推荐人" is-link to="contacts" />
    <van-cell title="常见问题" is-link to="matter" />
    <van-cell title="设置" is-link to="setting" />
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      user: { name: '', age: '', school: '' }
    }
  },
  methods: {
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
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
tr,
th {
  text-align: center;
}
</style>
