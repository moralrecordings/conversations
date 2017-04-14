<template>
    <div class="window" v-window>
        <div class="titlebar active">
            <span class="titlebar-text">Accounts</span>
        </div>
        <div class="body-container"><div class="body">
            <button class="account-switch" v-for="account in forms.accounts" v-bind:title="'@' + account.id + ' - ' + account.name" ><img v-bind:src="account.icon"/></button>
        </div></div>
    </div>
</template>

<style scoped>
.account-switch {
    padding: 4px;
    display: block;
    border: 1px solid #cccccc;
    border-radius: 4px;
}
</style>

<script>

import traffic from 'assets/traffic';

export default {
    name: 'accounts-app',
    methods: {

    },
    data: function() {
        return {
            forms: traffic.forms,
        };
    }
};
</script>
