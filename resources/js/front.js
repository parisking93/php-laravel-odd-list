
require('./bootstrap');

window.Vue = require('vue');
window.axios = require('axios');

import router from './router';

// import Vue from 'vue';
import App from './views/App';

const app = new Vue({
    el:'#root',
    render : h => h(App),
    router
});
