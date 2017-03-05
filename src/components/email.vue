<template>
    <div class="window resizable" v-bind:style="{ width: width + 'px', height: height + 'px' }">
        <div class="titlebar active">
            <span class="titlebar-text">{{ messages[messageIndex].subject }}</span>
            <button>×</button>
        </div>
        <div class="body-container"><div class="body email-body">
            
            <div class="email-select overflow">
                <div v-for="(message, index) in messages" class="email-select-row clickable" v-bind:class="{ active: index == messageIndex, unread: message.read != true }" v-on:click="setMessage(index)">
                    <span>{{ message.date.format('D MMM') }}</span>
                    <p class="sender">{{ message.sender }}</p>
                    <p>{{ message.subject }}</p>
                </div>
            </div>
            <div class="email-message overflow">
                <p style="margin-top: 0;">
                    <span style="display: block"><b>From:</b> {{ messages[messageIndex].sender }} &lt;{{ messages[messageIndex].senderMail }}&gt;</span>
                    <span style="display: block"><b>To:</b> {{ messages[messageIndex].recipient }} &lt;{{ messages[messageIndex].recipientMail }}&gt;</span>
                    <span style="display: block"><b>Subject:</b> {{ messages[messageIndex].subject }}</span>
                </p>
                <hr/>
                <div v-html="messages[messageIndex].content"/>
            </div>

        </div></div>
    </div>
</template>

<style scoped>
.email-body {
    display: flex;
    flex-direction: row;
}

.email-select {
    display: block;
    min-width: 200px;
    height: 100%;    
}

.email-select-row {
    padding: 0.5em;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #cccccc;
}

.email-select-row span {
    float: right; 
    text-align: right;
}

.email-select-row p {
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
    margin: 0;
}

.email-select-row p.sender {
    margin-right: 4em;
}


.unread {
    font-weight: bold;
}

.email-message {
    padding: 0.5em;
}
</style>

<script>
import moment from 'moment';

import emails from 'emails';
emails.reverse();

export default {
    name: 'email-app',
    props: ['width', 'height'],
    data: function() {
        return {
            messages: emails,
            messageIndex: 0
        };
    },
    methods: {
        setMessage: function(index) {
            this.messages[this.messageIndex].read = true;
            this.messageIndex = index;

        }
    }
};
</script>
