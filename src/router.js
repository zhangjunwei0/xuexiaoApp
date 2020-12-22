import Vue from 'vue'
import Router from 'vue-router'
import guanli from './views/guanli.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: guanli
    }]
})