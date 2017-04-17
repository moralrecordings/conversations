<template>
    <div class="window" v-window v-bind:style="{ left: xPos + 'px', top: yPos + 'px' }">
        <div class="titlebar active">
            <span class="titlebar-text">Message from HR</span>
        </div>
        <div class="body-container"><div class="body">
            <p>We regret to inform you that the business has opted not to renew your contract at this time, and your internship has been terminated, effective immediately.</p>
            <p>The feedback from your manager and co-workers has been decisive, and convinced us you are not a good cultural fit for our company.</p>
            <p>We thank you for the good work you've done for Allied Brands and wish you well on your future endeavors.</p>
            <button class="form">Log out</button>
        </div></div>
    </div>
</template>

<style scoped>

.window {
    width: 800px;
}

.body {
    padding: 1em;
    font-size: 18px;
    text-align: left;
}
</style>

<script>

import traffic from 'assets/traffic';

export default {
    name: 'fail-app',
    props: ['xPos', 'yPos'],
    methods: {

    },
    data: function() {
        return {
            forms: traffic.forms,
        };
    }
};
</script>
