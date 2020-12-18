// 这个js文件是请求地址文件配置

// 指定代理的前缀
let prefix ="/api/";
// 导出
export default{
    //城市信息的获取
    getCity:prefix+'getCitiesInfo',
    //正在热映
    getNowplaying:prefix+'getNowPlayingFilmList',
    //即将上映
    getComingSoon:prefix+'getComingSoonFilmList'

}
