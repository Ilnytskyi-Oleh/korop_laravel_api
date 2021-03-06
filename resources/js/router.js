import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/', component: () => import('./components/Home'),
            name:'home'
        },
        {
            path:'/categories/create', component: () => import('./components/CategoriesCreate'),
            name:'categories.create'
        },
    ]
})
