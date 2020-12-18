<template>
    <div>
    <!-- vant组件轮播图 -->
         <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
         <van-swipe-item>1</van-swipe-item>
         <van-swipe-item>2</van-swipe-item>
         <van-swipe-item>3</van-swipe-item>
         <van-swipe-item>4</van-swipe-item>
         </van-swipe>
   <!-- vant组件轮播图 -->
    </div>
</template>
<script>
// vant组件轮播图
        import Vue from 'vue';
        import { Swipe, SwipeItem } from 'vant';
        Vue.use(Swipe);
        Vue.use(SwipeItem);
// vant组件轮播图

export default {
    
}
</script>
<style lang="scss">
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
