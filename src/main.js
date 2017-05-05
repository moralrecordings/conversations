// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import VueRouter from 'vue-router';

import 'jquery-ui-bundle/jquery-ui.structure.css';
require('jquery-ui-bundle');
require('jquery-ui-touch-punch');

require('moment-duration-format');

import conversations from './conversations';
import login from './login';

Vue.use(Vuex);
Vue.use(VueRouter);

const routes = [
    { path: '/conversations', component: conversations },
    { path: '/', component: login }
];

const router = new VueRouter({
    routes: routes   
});

const store = new Vuex.Store({
    state: {
        level: 0
    },
    plugins: [createPersistedState({
        key: 'mr_conversations'
    })]
});

global.conversations = new Vue({
    el: '#conversations',
    store: store,
    template: '<router-view/>',
    router: router
});
