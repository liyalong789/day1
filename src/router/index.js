import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/list'
import Gou from '@/components/gou'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'List',
      component:List
    },
    {
      path: '/gou',
      name: 'Goy',
      component:Gou
    },
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: Home,
    //   children:[
    //     {
    //       path:'my',
    //       name:'my',
    //       component:My
    //     },
    //     {
    //       path:'',
    //       redirect:'/home/list'
    //     }
    //   ]
    // },
    {
      path:"/",
      redirect:"/list"
    }
  ]
})
