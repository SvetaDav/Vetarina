import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Kontakt from '@/components/Kontakt'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Kontakt',
      name: 'Kontakt',
      component: Kontakt
    }
 

  ],
  mode:"history"
})
