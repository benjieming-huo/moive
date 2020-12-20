<template>
    <div style="height:44px">
       <div :class="{topheader: show}">
            <van-tabs @click="changeTab" v-model="active">
            <van-tab title="正在热播"></van-tab>
            <van-tab title="即将上映"></van-tab>
            </van-tabs>
       </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Tab, Tabs} from 'vant';
    Vue.use(Tab);
    Vue.use(Tabs)
export default {
    data () {
        return {
            active:0,
            show:true,
            url:["/films/nowplaying","/films/comingsoon"]
        }
    },
    created () {
      this.active=this.url.indexOf(this.$route.path);
    },
    mounted(){
        window.addEventListener('scroll',()=>{
            let top =document.documentElement.scrollTop;
            if(top>200){
                this.show=true;
            }else{
                this.show=false
            }
        })
    },
    methods:{
        changeTab(index){
            // console.log(index)
            this.$router.push(this.url[index])
        }
    }
}
</script>
<style lang="scss" scoped>
// 吸顶的样式
.topheader {
    position: fixed;
    z-index: 999;
    width: 100%;
    top: 0;
}
</style>
