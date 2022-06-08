import Vue from 'vue';
import router from './router';
import Index from "./components/Index";
import Paginate from 'vuejs-paginate'
// import store from './store'

require('./bootstrap');

const app = new Vue({
    el: '#app',
    components:{
        Index, Paginate
    },
    router
});
