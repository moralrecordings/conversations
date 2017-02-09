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

export default {
    name: 'email',
    data: function() {
        return {
            width: 800,
            height: 480,
            messages: [
                {
                    'date': moment('20111031', 'YYYYMMDD'),
                    'unread': true,
                    'sender': 'EasyJob Careers',
                    'senderMail': 'alerts@easyjob',
                    'recipient': 'Me',
                    'recipientMail': 'againstpollution@ichiromail',
                    'subject': 'Position Match - Allied Brands Inc., Social Media Specialist',
                    'content': `<p>Allied Brands Inc. is a leading multinational consumer goods company headquartered in Scranton, PA. We specialise in foods, confectionary, cosmetics, pharmaceuticals, private-label goods and specialty products.</p>

                        <p>Our marketing team is expanding, as part of a strategy to centralise the brand messaging from our diverse family of products. We need a quick-thinking and independent social media ninja to help drive customer engagement and brand awareness across our multiple North American businesses.</p>

                        <h3>Required skills</h3>
                        <ul>
                        <li>Previous experience in a digital marketing or PR environment</li>
                        <li>All-encompassing knowledge of social media platforms</li>
                        <li>An inherent understanding of popular-culture and current trends is a must</li>
                        <li>Strong literacy and copy writing skills</li>
                        </ul>

                        <p>This is a casual position, with a two-month internship period to provide on-the-job training and to confirm your efficacy for the role, and is a fantastic opportunity for a social media lover to advance their career!</p>`
                }
            ],
            messageIndex: 0
        };
    }
};
</script>
