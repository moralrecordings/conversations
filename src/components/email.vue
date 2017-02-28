<template>
    <div class="window resizable" v-bind:style="{ width: width + 'px', height: height + 'px' }">
        <div class="titlebar active">
            <span class="titlebar-text">{{ messages[messageIndex].subject }}</span>
            <button>×</button>
        </div>
        <div class="body-container"><div class="body email-body">
            
            <div class="email-select overflow">
                <div v-for="(message, index) in messages" class="email-select-row" v-bind:class="{ active: index == messageIndex, unread: message.unread }">
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
    user-select: none;
    -moz-user-select: none;
    cursor: default;
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

var loadMessage = function(name) {
    var data = require('emails/'+name+'.json');
    data.date = moment(data.date, 'YYYYMMDD');
    return data;
}

export default {
    name: 'email-app',
    props: ['width', 'height'],
    data: function() {
        return {
            messages: [
                loadMessage('day1_2'),
                loadMessage('day1_1')
            ],
            messageIndex: 0
        };
    }
};
</script>
