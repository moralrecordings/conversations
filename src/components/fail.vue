<template>
    <div class="window" v-window v-bind:style="{ left: xPos + 'px', top: yPos + 'px' }">
        <div class="titlebar active">
            <span class="titlebar-text">Message from HR</span>
        </div>
        <div class="body-container"><div class="body">
            <div v-html="message"/>
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
import traffic from 'assets/traffic';

export default {
    name: 'fail-app',
    props: ['xPos', 'yPos', 'endless'],
    methods: {
        logout: function () {
            this.$emit('logout');
        }
    },
    data: function() {
        return {
        };
    },
    computed: {
        message: function () {
            if (this.endless) {
                return traffic.text.failureEndless;
            } else {
                return traffic.text.failure;
            }
        }
    }
};
</script>
