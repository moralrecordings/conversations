<template>
    <div class="window resizable" v-bind:style="{ width: width + 'px' }">
        <div class="titlebar active">
            <span class="titlebar-text">@{{ message.user }} - {{ message.loc }}</span>
            <button>×</button>
        </div>
        <div class="body-container"><div class="body">
            <div class="message-block clickable" v-on:click="hidden = !hidden">
                <div class="message-avatar"></div>

                <span class="message-body">{{ message.body }}</span>
            </div>
            <div v-bind:class="{ closed: hidden }" class="message-hidden">
                <button>Oh noes!</button>
                <label>Reason<select>
                    <option>----</option>
                    <option>Misshapen product</option>
                    <option>Spoilage</option>
                    <option>Empty packaging</option>
                    <option>Foreign object</option>
                </select></label>
                <button>Oh noes!</button>
                <button>Oh noes!</button>
                <button>Oh noes!</button>

            </div>
        </div></div>
    </div>
</template>

<style scoped>
.message-block {
    margin: 0.5em;
}

.message-hidden {
    margin: 0.5em;
    overflow-y: hidden;
    max-height: 100px;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;
}

.message-hidden.closed {
    max-height: 0;
}

.message-avatar {
    width: 48px;
    height: 48px;
    float: left;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
    background-color: teal;
    border-radius: 3px;
}

.message-body {
    font-size: 18px;
}

.message-block button, .message-block select, .message-block input {
    width: 100%;
    display: block;
    margin: 0 0 1rem 0;
}
</style>

<script>
export default {
    name: 'messages-app',
    props: ['message'],
    data: function () {
        return {
            hidden: true,
            width: 400
        }
    },

}
</script>
