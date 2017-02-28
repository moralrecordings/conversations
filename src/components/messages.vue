<template>
    <div class="messages-app">
        <div v-for="msg in messages" class="window resizable" v-bind:style="{ width: msg.width + 'px', height: msg.height + 'px' }">
            <div class="titlebar active">
                <span class="titlebar-text">{{ msg.user }}</span>
                <button>×</button>
            </div>
            <div class="body-container"><div class="body">
                {{ msg.body }}
            </div></div>
        </div>
    </div>
</template>

<style scoped>

</style>

<script>
export default {
    name: 'messages-app',
    props: [],
    data: function () {
        return {
            messages: [
                { user: 'SalmonMan23', body: 'I can\'t believe this @KingsleySnacks why is there a large ass fly in this choc bar, you can do better ffs', loc: 'Cook County, IL', width: 400, height: 200 },
                { user: 'PatriotXXL', body: 'wtf @KingsleySnacks you expect me to eat that', loc: 'Salt Lake City, UT', width: 400, height: 200 },
            ]
        }
    },

}
</script>
