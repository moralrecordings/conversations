<template>
    <div class="window" v-window.under v-bind:style="{ left: xPos + 'px', top: yPos + 'px' }"  v-bind:class="{ close: closed }">
        <div class="titlebar active">
            <span class="titlebar-text">Message from Supervisor</span>
            <button v-on:click="close">×</button>
        </div>
        <div class="body-container"><div class="body">
            Last customer response contained errors:
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>

        </div></div>
    </div>
</template>

<style scoped>

.window {
    width: 420px;
}

.head {
    margin-top: 0.5em;
    font-size: 16px;
    font-weight: bold;
}

.sub {
    font-size: 16px;
}

.quart {
    display: inline-block;
    width: 25%;
}

.body {
    padding: 1em;
}

.body ul {
    padding-left: 1em;
}
</style>

<script>

import traffic from 'assets/traffic';

export default {
    name: 'warning-app',
    props: ['xPos', 'yPos', 'errors'],
    methods: {
        close: function () {
            this.closed = true;
            this.$emit('close');
        },
    },
    data: function() {
        return {
            closed: false
        };
    }
};
</script>
