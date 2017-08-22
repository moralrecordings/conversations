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
    { path: '/session/:session_id', component: conversations },
    { path: '/', component: login }
];

const router = new VueRouter({
    routes: routes   
});

const store = new Vuex.Store({
    state: {
        stats: []
    },
    getters: {
        maxLevel: function (state) {
            return state.stats.length;
        },
        unlocked: function (state, level) {
            return function (level) {
                return (level <= state.stats.length);
            }
        },
        globalResolution: function (state, level) {
            return function (level) {
                var result = {
                    resolvedTime: 0,
                    resolved: 0,
                    total: 0,
                };
                if (!level) {
                    return result;
                }

                for (var i=0; i<level; i++) {
                    if (state.stats[i]) {
                        result.resolvedTime += state.stats[i].resolvedTime;
                        result.resolved += state.stats[i].resolved;
                        result.total += state.stats[i].resolved + state.stats[i].warnings + state.stats[i].unanswered;
                    }
                }
                return result;
            }
        },
    },
    plugins: [createPersistedState({
        key: 'mr_conversations',
        paths: []
    })],
    mutations: {
        completeLevel: function (state, payload) { 
            while (state.stats.length <= payload.level) {
                state.stats.push(null);
            }
            state.stats[payload.level] = payload.stats;
        }
    }
});

global.conversations = new Vue({
    el: '#conversations',
    store: store,
    template: '<router-view/>',
    router: router
});
