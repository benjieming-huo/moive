
import films from '@/views/films/films';
import nowplaying from '@/views/films/nowplaying';
import comingsoon from '@/views/films/comingsoon';
var film={ 
    path: '/films', 
    // 嵌套路由在写好之后要在嵌套路由的父容器写一个渲染容器
    component: films, redirect:"/films/nowplaying",
    children:[
      { path: 'nowplaying', component: nowplaying},
      { path: 'comingsoon', component: comingsoon},
    ]
  };
  export default film;