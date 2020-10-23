<template>
  <div class='singleposter'>
    <div class="propag">
      <propag> </propag>
    </div>
  </div>
</template>

<script>
import propag from '@/components/propag'
export default {
  name: 'singleposter',
  data() {
    return {}
  },
  components: { propag },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.singleposter {
  width: 80%;
  padding: 10px;
  margin: 0 auto;
  .propag {
    // margin: 0 auto;
  }
}
</style>
