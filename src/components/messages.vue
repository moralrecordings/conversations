<template>
    <div class="window" v-window.under v-bind:style="{ width: width, left: message.xPos, top: message.yPos }">
        <div class="titlebar">
            <span class="titlebar-text">@{{ message.user }} - {{ message.loc }}</span>
            <button>×</button>
        </div>
        <div class="body-container"><div class="body">
            <div class="message-block clickable" v-on:click="hidden = !hidden">
                <svg class="message-avatar">
                    <use x="0" y="0" xlink:href="#eggAvatar" v-bind:style="{ fill: eggColour }"/>
                </svg>

                <span class="message-body">{{ message.body }}</span>
            </div>
            <div v-bind:class="{ closed: hidden }" class="message-hidden">
                <label>Category<select>
                    <option>----</option>
                    <option>Compliment</option>
                    <option>Product issue</option>
                    <option>Abuse</option>
                </select></label>               
                <label>Reason<select>
                    <option>----</option>
                    <option>Misshapen product</option>
                    <option>Spoilage</option>
                    <option>Empty packaging</option>
                    <option>Foreign object</option>
                </select></label>
                <label>Type of abuse<select>
                    <option>----</option>
                    <option>Hate speech</option>
                    <option>Stalking</option>
                    <option>Extortion</option>
                    <option>Death threat</option>
                </select></label>
                <label><input type="checkbox"/> Litigious</label>
                <label><input type="checkbox"/> Suicide risk</label>
                <label>Attachment<select>
                    <option>----</option>
                    <option>20111129FPDraftHeroFINAL2.jpg</option>
                </select></label>
                <label>Reply
                    <textarea v-bind:class="{ ready: replyReady }" v-on:keydown="typing" v-model="replyFull" placeholder="Reply to customer"/>
                </label>
            </div>
        </div></div>
    </div>
</template>

<style scoped>
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

select {
    display: block;    
    font-family: inherit;
    font-size: 1rem;
    line-height: normal;
    width: 100%;
    height: 2.4375rem;
    margin: 0 0 1rem;

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

// cribbed from https://www.quora.com/What-is-the-meaning-of-the-color-of-Twitters-egg-avatars?share=1
var eggColours = [
    '#346A85', '#AFE356', '#348569', '#F6A43D', '#AAD3E6',
    '#7F3485', '#992B41', '#3B94D9', '#E95F28', '#4A913C',
    '#FFAC33', '#8899A6', '#744EAA', '#BE1931',

// plus tango colours because they are great
    '#EDD400', '#73D216', '#F57900', '#3465A4', '#75507B', '#C17D11', '#CC0000'
];

export default {
    name: 'messages-app',
    props: ['message'],
    methods: {
        typing: function (ev) {
            if (this.replyContent.length < this.message.reply.length) {
                this.replyContent += this.message.reply[this.replyContent.length];
            }
            if (this.replyContent.length == this.message.reply.length) {
                this.replyReady = true;
            }

            ev.preventDefault();
        }
    },
    computed: {
        replyFull: {
            get: function () {
                return '@' + this.message.user + ' ' + this.replyContent;
            }
        }
    },
    data: function () {
        return {
            hidden: true,
            width: '400px',
            eggColour: eggColours[Math.floor(Math.random()*eggColours.length)],
            replyContent: '',
            replyReady: false
        }
    },

}
</script>
