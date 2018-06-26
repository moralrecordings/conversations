<template>
    <div class="window" v-window.resizable v-bind:class="{ close: closed }" v-bind:style="{ width: width + 'px', height: height + 'px', left: xPos + 'px', top: yPos + 'px' }">
        <div class="titlebar active">
            <span class="titlebar-text">{{ name }}</span>
            <button v-on:click="close">×</button>
        </div>
        <div class="body-container"><div class="body">

        </div></div>
    </div>
</template>

<style scoped>
.body {
    background-image: url('../assets/placeholder.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}
</style>

<script>
import traffic from '@/assets/traffic';

export default {
    name: 'attachment-app',
    props: ['width', 'height', 'xPos', 'yPos', 'src', 'name'],
    methods: {
        close: function() {
            this.closed = true;
            this.$emit('close', {
                id: this.name   
            });
        },
    },
    data: function() {
        return {
            closed: false
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
