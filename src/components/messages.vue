<template>
    <div class="window" v-window.under="{ xPos: message.xPos, yPos: message.yPos }" v-bind:class="{ flyout: flyout, close: closed }">
        <div class="titlebar">
            <span class="titlebar-text">@{{ message.user }} - {{ message.loc }}</span>
            <button v-on:click="close">×</button>
        </div>
        <div class="body-container"><div class="body">
            <div tabindex="0" class="message-block clickable" v-on:click="hidden = !hidden">
                <svg class="message-avatar">
                    <use x="0" y="0" xlink:href="#eggAvatar" v-bind:style="{ fill: message.eggColour }"/>
                </svg>

                <span class="message-body">{{ message.body }}</span>
            </div>
            
            <div v-bind:class="{ closed: hidden }" class="message-hidden">
                <label>Category<select class="form" v-model="replyType" v-on:change="changeType">
                    <option v-for="(type, index) in forms.types" v-if="type.visibleLevel <= $store.state.level" v-bind:value="index">{{ type.name }}</option>
                </select></label>               
                <label v-if="forms.types[replyType].subtypes">{{ forms.types[replyType].subtypeName }}<select class="form" v-model="replySubtype" v-on:change="changeReply">
                    <option v-for="(subtype, index) in forms.types[replyType].subtypes" v-if="subtype.visibleLevel <= $store.state.level" v-bind:value="index">{{ subtype.name }}</option>
                </select></label>

                
                <template v-if="forms.types[replyType].id == 'blank'">
                </template><template v-else-if="forms.types[replyType].id == 'abuse'">
                    <button class="form">Report user</button>
                </template><template v-else>
                    <label v-for="(flag, index) in forms.flags"  v-if="flag.visibleLevel <= $store.state.level"><input type="checkbox" v-model="replyFlags[index]" v-on:change="changeReply"/> {{ flag.name }}</label>
                    <label v-if="forms.attachmentsVisibleLevel <= $store.state.level">Attachment<select class="form" v-model="replyAttachment" v-on:change="changeReply">
                        <option v-for="(attach, index) in forms.attachments" v-if="attach.visibleLevel <= $store.state.level" v-bind:value="index">{{ attach.name }}</option>
                    </select></label>
                    <label>Reply
                        <textarea v-bind:class="{ ready: replyReady }" v-on:keydown="typing" v-model="replyFull" placeholder="Reply to customer"/>
                    </label>
                </template> 
                
            </div>
        </div></div>
    </div>
</template>

<style scoped>
.window {
    width: 400px;
}

label {
    display: block;
    margin: 0;
    font-size: 0.875rem;
    font-weight: normal;
    line-height: 1.8;
}

[type="text"], [type="password"], [type="date"], [type="datetime"], [type="datetime-local"], [type="month"], [type="week"], [type="email"], [type="number"], [type="search"], [type="tel"], [type="time"], [type="url"], [type="color"], textarea {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 2.4375rem;
    margin: 0 0 1rem;
    padding: 0.5rem;
  
}

textarea {
    height: 64px;
    resize: none;
}

textarea.ready {
    border: 1px solid #4e9a06;
    background: #d2f4b1;
}



.message-block {
    display: inline-block;
    margin: 0.5em;
}

.message-hidden {
    margin: 0.5em;
    overflow-y: hidden;
    max-height: 500px;
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

import debounce from 'debounce';
import traffic from 'assets/traffic';

export default {
    name: 'messages-app',
    props: ['message'],
    data: function () {
        return {
            forms: traffic.forms,
            replyType: 0,
            replySubtype: 0,
            replyFlags: {},
            replyAttachment: 0,
            flyout: false,
            hidden: true,
            replyContent: '',
            replyReady: false,
            closed: false
        }
    },
    methods: {
        typing: function (ev) {
            var vm = this;
            if (this.replyContent.length < this.message.reply.length) {
                this.replyContent += this.message.reply[this.replyContent.length];
            }
            if (this.replyContent.length == this.message.reply.length) {
                this.replyReady = true;
            }

            if (ev.keyCode == 13) { // enter
                vm.submit();
            }

            ev.preventDefault();
        },
        changeType: function (ev) {
            this.replySubtype = 0;
            this.changeReply(ev);
        },
        changeReply: function (ev) {
            this.replyContent = '';
            this.replyReady = false;
        },
        submit: debounce(function () {
            var vm = this;
            this.flyout = true;
            var result = {
                id: this.message.id,
                type: this.forms.types[this.replyType].id,
                subtype: this.forms.types[this.replyType].subtypes[this.replySubtype].id,
                attachment: this.forms.attachments[this.replyAttachment].id,
                ready: this.replyReady,
                flags: {},
            };
            this.forms.flags.forEach(function (el, index) {
                result.flags[el.id] = vm.replyFlags[index] ? true : false; 
            });

            this.$emit('submitMessage', result);
            setTimeout(this.close, 500);
        }, 2000, true),
        close: function () {
            this.closed = true;
            this.$emit('close', {
                id: this.message.id
            });
        },
    },
    computed: {
        replyFull: {
            get: function () {
                return '@' + this.message.user + ' ' + this.replyContent;
            }
        },
    },


}
</script>
