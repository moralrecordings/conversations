<template>
    <div class="window" v-window.resizable v-bind:class="{ close: closed }" v-bind:style="{ width: width + 'px', height: height + 'px', left: xPos + 'px', top: yPos + 'px' }">
        <div class="titlebar active">
            <span class="titlebar-text">Inbox - {{ emails[selectIndex].subject }}</span>
            <button v-on:click="close">×</button>
        </div>
        <div class="body-container"><div class="body email-body">
            
            <div class="email-select overflow">
                <template v-for="(messageGroup, groupIndex) in messages" >
                    <div v-bind:key="groupIndex" v-if="(messages.length-1-groupIndex <= level) && (messageGroup.length)" class="email-group">
                        {{ getGroup(groupIndex) }}
                    </div>
                    <button v-for="(message, messageIndex) in messageGroup" v-bind:key="message.index" class="email-select-row clickable" v-bind:class="{ active: message.index == selectIndex, unread: message.read != true }" v-if="(level >= emails[message.index].visibleLevel) && !(emails[message.index].recalled)" v-on:click="setMessage(groupIndex, messageIndex)">
                        <span>{{ emails[message.index].date.format('D MMM') }}</span>
                        <p class="sender">{{ emails[message.index].sender }}</p>
                        <p>{{ emails[message.index].subject }}</p>
                    </button>
                </template>
            </div>
            <div class="email-message overflow" tabindex="0">
                <p style="margin-top: 0;">
                    <span style="display: block"><b>From:</b> {{ emails[selectIndex].sender }} &lt;{{ emails[selectIndex].senderMail }}&gt;</span>
                    <span style="display: block"><b>To:</b> {{ emails[selectIndex].recipient }} &lt;{{ emails[selectIndex].recipientMail }}&gt;</span>
                    <span style="display: block"><b>Subject:</b> {{ emails[selectIndex].subject }}</span>
                </p>
                <hr/>
                <div v-if="emails[selectIndex].recalled">This email message has been recalled.</div>
                <div v-html="emails[selectIndex].content" v-bind:class="{ recalled: emails[selectIndex].recalled }"/>
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
    min-width: 260px;
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
    padding: 1em;
}

.recalled {
    opacity: 0.3;
}
</style>

<script>
import $ from 'jquery';

import emails from '@/assets/emails';

export default {
    name: 'email-app',
    props: ['width', 'height', 'xPos', 'yPos', 'level', 'todayOnly'],
    data: function() {
        return {
            emails: emails,
            messages: [],
            selectIndex: 0,
            closed: false
        };
    },
    watch: {
        level: function (newLevel, oldLevel) {
            this.load(newLevel);
        }
    },
    methods: {
        close: function() {
            this.closed = true;
            this.$emit('close');
        },
        getGroup: function(index) {
            var week = this.messages.length-1 - index;
            var test = this.level - week;
            if (test < 1) {
                return 'This week';
            } else if (test < 2) {
                return 'Last week';
            }  
            return Number(test).toString() + ' weeks ago';
        },
        setMessage: function(groupIndex, messageIndex) {
            var vm = this;
            vm.messages[groupIndex][messageIndex].read = true;
            vm.selectIndex = vm.messages[groupIndex][messageIndex].index;
            $('.email-message').scrollTop(0);
            if (vm.emails[vm.selectIndex].recallAfter && !(vm.messages[groupIndex][messageIndex].recaller)) {
                console.log(`timebomb set for ${vm.emails[vm.selectIndex].recallAfter}`);
                vm.messages[groupIndex][messageIndex].recaller = setTimeout(function () {
                    console.log(vm.emails[vm.selectIndex]);
                    vm.emails[vm.selectIndex].recalled = true;
                    vm.$forceUpdate();
                }, vm.emails[vm.selectIndex].recallAfter);
            }
        },
        load: function(levelFilter) {
            var vm = this;
            vm.messages.length = 0;
            emails.forEach(function (el, index) {
                if (vm.todayOnly && (el.visibleLevel != levelFilter)) {
                    return;
                }
                if (el.visibleLevel > vm.level) {
                    return;
                }
                if (vm.messages.length < el.visibleLevel+1) {
                    var size = el.visibleLevel+1 - vm.messages.length
                    for (var i=0; i<size; i += 1) {
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
            });
            vm.messages.reverse();
            vm.selectIndex = vm.messages[0][0].index;

        }
    },
    mounted: function () {
        this.load(this.level);
    },
};
</script>
