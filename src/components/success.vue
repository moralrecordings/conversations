<template>
    <div class="window" v-window v-bind:style="{ left: xPos + 'px', top: yPos + 'px' }">
        <div class="titlebar active">
            <span class="titlebar-text">Message from Supervisor</span>
        </div>
        <div class="body-container"><div class="body">
            <p>You're the man now dog!</p>
            <button class="form" v-on:click="logout">Log out</button>
        </div></div>
    </div>
</template>

<style scoped>

.window {
    width: 800px;
}

.body {
    padding: 1em;
    font-size: 18px;
    text-align: left;
}
</style>

<script>


export default {
    name: 'success-app',
    props: ['xPos', 'yPos'],
    methods: {
        logout: function () {
            this.$emit('logout');
        }
    },
    data: function() {
        return {
        };
    }
};
</script>
