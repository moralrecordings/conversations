<template>
    <div class="window" v-window.resizable v-bind:class="{ close: closed }" v-bind:style="{ width: width + 'px', height: height + 'px', left: xPos + 'px', top: yPos + 'px' }">
        <div class="titlebar active">
            <span class="titlebar-text">Inbox - {{ emails[selectIndex].subject }}</span>
            <button v-on:click="close">×</button>
        </div>
        <div class="body-container"><div class="body email-body">
            
            <div class="email-select overflow">
                <template v-for="(messageGroup, groupIndex) in messages">
                    <div v-if="messages.length-1 -groupIndex <= $store.state.level" class="email-group">
                        {{ getGroup(groupIndex) }}
                    </div>
                    <button v-for="(message, messageIndex) in messageGroup" class="email-select-row clickable" v-bind:class="{ active: message.index == selectIndex, unread: message.read != true }" v-if="$store.state.level >= emails[message.index].visibleLevel" v-on:click="setMessage(groupIndex, messageIndex)">
                        <span>{{ emails[message.index].date.format('D MMM') }}</span>
                        <p class="sender">{{ emails[message.index].sender }}</p>
                        <p>{{ emails[message.index].subject }}</p>
                    </button>
                </template>
            </div>
            <div class="email-message overflow">
                <p style="margin-top: 0;">
                    <span style="display: block"><b>From:</b> {{ emails[selectIndex].sender }} &lt;{{ emails[selectIndex].senderMail }}&gt;</span>
                    <span style="display: block"><b>To:</b> {{ emails[selectIndex].recipient }} &lt;{{ emails[selectIndex].recipientMail }}&gt;</span>
                    <span style="display: block"><b>Subject:</b> {{ emails[selectIndex].subject }}</span>
                </p>
                <hr/>
                <div v-html="emails[selectIndex].content"/>
            </div>

        </div></div>
    </div>
</template>

<style scoped>
.email-body {
    height: 100%;
    display: flex;
    flex-direction: row;
}

.email-select {
    display: block;
    min-width: 200px;
}

.email-group {
    padding-left: 0.5em;
    font-style: italic;
    font-size: 0.8rem;    
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #cccccc;
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
    line-height: 1.5em;
    text-align: left;
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

import emails from 'assets/emails';

export default {
    name: 'email-app',
    props: ['width', 'height', 'xPos', 'yPos'],
    data: function() {
        return {
            emails: emails,
            messages: [],
            selectIndex: 0,
            closed: false
        };
    },
    methods: {

        close: function() {
            this.closed = true;
            this.$emit('close');
        },
        getGroup: function(index) {
            var week = this.messages.length-1 - index;
            var test = this.$store.state.level - week;
            if (test < 1) {
                return 'This week';
            } else if (test < 2) {
                return 'Last week';
            }  
            return Number(test).toString() + ' weeks ago';
        },
        setMessage: function(groupIndex, messageIndex) {
            this.messages[groupIndex][messageIndex].read = true;
            this.selectIndex = this.messages[groupIndex][messageIndex].index;
            $('.email-message').scrollTop(0);
        }
    },
    mounted: function () {
        var vm = this;
        emails.forEach(function (el, index) {
            if (el.visibleLevel > vm.$store.state.level) {
                return;
            }
            if (vm.messages.length <= el.visibleLevel) {
                for (var i=0; i<el.visibleLevel - vm.messages.length+1; i += 1) {
                    vm.messages.push([]);
                }
            }
            vm.messages[el.visibleLevel].push({
                index: index,
                read: false,
            });
        });
        vm.messages.forEach(function (el) {
            el.sort(function (emailA, emailB) {
                return vm.emails[emailB.index].date - vm.emails[emailA.index].date;
            });
            console.log(el);
        });
        vm.messages.reverse();
        vm.selectIndex = vm.messages[0][0].index;
        console.log(vm.messages);
    },
};
</script>
