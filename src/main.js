// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import base from './base';

Vue.use(VueRouter);

global.conversations = new Vue({
    el: '#conversations',
    template: '<mr-base/>',
    components: { 
        'mr-base': base
    },
});
