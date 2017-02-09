// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import conversations from './conversations';

global.conversations = new Vue({
    el: '#conversations',
    template: '<conversations/>',
    components: { conversations },
});
