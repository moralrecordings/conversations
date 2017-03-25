// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';

import 'jquery-ui-bundle/jquery-ui.structure.css';
require('jquery-ui-bundle');

import conversations from './conversations';
import login from './login';

Vue.use(VueRouter);

const routes = [
    { path: '/conversations', component: conversations },
    { path: '/', component: login }
];

const router = new VueRouter({
    routes: routes   
});

global.conversations = new Vue({
    el: '#conversations',
    template: '<router-view/>',
    router: router
});
