<template>
    <div id="conter">
        <van-pull-refresh
            v-model="isloading2"
            success-text="刷新成功"
            @refresh="onRefresh">  
    <van-loading class="aa" size="24px"  v-show="isloading">加载中...</van-loading>
         <van-card 
            v-for="item in list"
            :key="item.filmId"  
            @click="gotoDetail(item.filmId)"
            >
            <template #thumb>
                <img :src="item.poster">
            </template>
             <template #title>
               <span style="fontSize:15px;fontWeight:blod;color:#191a1b">
                    {{item.name}}<span class="item">{{item.filmType.name}}</span>
               </span>
            </template>
            <template #desc>
                <div>
                    <div style="fontSize:13px;    color: #797d82;" >
                        观众评分<span style="color:#ffb232;fontSize:13px; color: #797d82;">{{item.grade}}</span>
                    </div>
                    <div style="fontSize:13px; color: #797d82;">主演：{{ item.actors | parserActors }}
                          <div class="nowPlayingFilm-buy" style="float: right;">购票</div>
                    </div>
                  
                    <div style="fontSize:13px; color: #797d82;">{{ item.nation }} | {{ item.runtime }}分钟</div>
                </div>
            </template>
         </van-card> 
          </van-pull-refresh>  
    </div>
     
</template>
<script>
    import uri from '@/config/uri';
    import Vue from 'vue';
    import { Card,Loading,PullRefresh } from 'vant';
    Vue.use(Loading);
    Vue.use(Card);
    Vue.use(PullRefresh);
export default {
    data () {
        return {
            list:[],
            //加载loading插件
            isloading:true,
            isloading2:true,
            pageNum: 1,
        }
    },
    //主角名字过长处理
    filters:{
        parserActors(actors){  
            if(actors){ 
                let str="";
                actors.forEach(el=>{
                     str += el.name + " ";
                });
                 return str.substr(0, 6) + "...";
            }else {
                return "暂无主演";
            }
        }
    },
    created () {
        this.getdata();
    },
    methods:{
         //默认获取第一页的数据
          getdata(dd=null){
            this.$http.get(uri.getNowplaying+`?pageNum=${this.pageNum}`)
            .then(ret=>{
                if(this.pageNum<Math.ceil(ret.data.total/10)){
                    this.pageNum++;
                      this.list=[...ret.data.films,...this.list]
                        
                }
                if(dd==null){
                     this.isloading = false;
                }else{
                    dd();
                }
        })
       },
        //去详情页
        gotoDetail(filmId){
            console.log(filmId);
            this.$router.push("/films/"+filmId);
        },
        //获取数据有数据加载中组件就会消失
        onRefresh(){
            this.getdata(()=>{
                this.isloading2=false;
            })
        },
       
     
    }
}
</script>
<style lang="scss" scoped>
    .aa{
        text-align:center;
    }
    #conter{
        margin-bottom: 50px;
    }
    img {
    width: 66px;
    height: 90px;
    border-radius: 0;
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
.van-card__thumb {
    margin-right: 0px;
    width: 80px;
}
.nowPlayingFilm-buy {
    line-height: 25px;
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