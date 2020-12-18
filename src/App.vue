<template>
  <div id="app">
 <Header></Header>
  <Footer></Footer>
    <router-view/>
  </div>
</template>

<!-- //测试代码可用性 -->
<script>
import Footer from "@/components/Navigation/Footer";
import Header from "@/components/Navigation/header";
// import uri from  "@/config/uri";


export default {
  // async created () {
  //   let ret =await this.$http.get(uri.getCity);
  //   console.log(ret);
  // }
  components:{
    Footer,
    Header,
  }
}
</script>
