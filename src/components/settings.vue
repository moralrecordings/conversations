<template>
    <div class="window" v-window v-bind:style="{ left: xPos + 'px', top: yPos + 'px' }" v-bind:class="{ close: closed }">
        <div class="titlebar active">
            <span class="titlebar-text">Settings</span>
            <button v-on:click="close">×</button>
        </div>
        <div class="body-container"><div class="body">
            <button class="form" v-on:click="debugSpawn">DEBUG - Spawn angry tweet</button>
            <button class="form" v-on:click="debugWin">DEBUG - Win</button>
            <button class="form" v-on:click="debugTest">DEBUG - Test</button>
            <button class="form" v-on:click="logout">Logout</button>
        </div></div>
    </div>
</template>

<style scoped>

.window {
    width: 400px;
}

.body {
    padding: 1em;
    font-size: 18px;
    text-align: left;
}
</style>

<script>


export default {
    name: 'settings-app',
    props: ['xPos', 'yPos'],
    methods: {
        close: function () {
            this.closed = true;
            this.$emit('close');
        },
        debugTest: function () {
            this.$emit('debugTest');
        },
        debugSpawn: function () {
            this.$emit('debugSpawn');
        },
        debugWin: function () {
            this.$emit('debugWin');
        },
        logout: function () {
            this.$emit('logout');
        }
    },
    data: function() {
        return {
            closed: false
        };
    }
};
</script>
