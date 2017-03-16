<template>
    <router-view></router-view>
</template>
<style>

</style>
<script>
import conversations from './conversations';
import login from './login';

const routes = [
    { path: '/conversations', component: conversations },
    { path: '/login', component: login }
]
</script>
