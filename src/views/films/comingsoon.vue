<template>
    <div id="contion">
    <van-loading class="a1" size="24px" v-show="Loading">加载中...</van-loading>
       <van-card
       v-for="item in list"
       :key="item.filmId"
       @click="getDetail(item.filmId)"
       
       >
        <template #thumb>
            <img :src="item.poster" />
        </template>
         <template #title>
            <span style="fontSize:15px; fontWeight:blod;color:#191a1b">{{item.name}}
                <span class="item">{{item.filmType.name}}</span>
            </span>
        </template>
        <template #desc>
            <div class="dd">
                <div style="fontSize:13px; color: #797d82;">主演:{{item.actors | changeActor}}
                <div class="nowPlayingFilm-buy" style="float: right;">预约</div></div>
                <div style="fontSize:13px; color: #797d82;">上映日期：</div>
            </div>
        </template>
       </van-card>
    </div>
</template>
<script>
//引入地址
import Vue from 'vue';
import uri from '@/config/uri';
import { Card,Loading} from 'vant';
Vue.use(Card);
Vue.use(Loading);
export default {
   data () {
       return {
           list:[],
           pageNum:1,
           Loading:true,
       }
   },
   created () {
     this.$http.get(uri.getComingSoon).then(ret=>{  
         this.list=ret.data.films;
          console.log(this.list);
          this.Loading=false;
     })
   },
   filters: {
       changeActor(actors){
           if(actors){
               let str ="";
               actors.forEach((el)=>{
                   str+=el.name +" ";
               })
               return str.substr(0,6)+"..."
           }else {
                return "暂无主演";
            }
       }
   },
   methods: {
      getDetail(filmId){
           console.log(filmId);
          this.$router.push('/films/'+filmId)
      }
   }
   
}
</script>
<style lang="scss" scoped>
    .a1{
        text-align: center;
    }
    img{
        width: 66px;
    height: 90px;
    border-radius: 0; 
    }
    #contion{
        margin-bottom: 44px;
    }
    .van-card__thumb {
    margin-right: 0px;
    width: 80px;
}
.item {
    font-size: 9px;
    color: #fff;
    margin-left: 2px;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
}
.dd{
    margin-top: 20px;
}
.nowPlayingFilm-buy {
    line-height: 20px;
    height: 20px;
    width: 40px;
    border: 1px solid;
   color: #ff5f16;
    font-size: 13px;
    text-align: center;
    border-radius: 2px;
    position: relative;
}
</style>