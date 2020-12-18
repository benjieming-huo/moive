<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<!-- //测试代码可用性 -->
<script>
import uri from  "@/config/uri";
export default {
  async created () {
    let ret =await this.$http.get(uri.getCity);
    console.log(ret);
  }
}
</script>>
<style lang="scss">
</style>
