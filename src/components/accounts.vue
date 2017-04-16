<template>
    <div class="window" v-window v-bind:style="{ left: xPos + 'px', top: yPos + 'px' }">
        <div class="titlebar active">
            <span class="titlebar-text">Accounts</span>
        </div>
        <div class="body-container"><div class="body">
            <form>
                <label v-for="(account, index) in forms.accounts" v-if="account.visibleLevel <= $store.state.level" v-bind:title="'@' + account.id + ' - ' + account.name" >
                    <input style="display: none" type="radio" name="accounts" v-on:change="changeAccount(index)"/>
                    <img class="picker" v-bind:src="account.icon"/>
                </label>
            </form>
            <!--button class="account-switch" v-for="account in forms.accounts" v-if="account.visibleLevel <= $store.state.level" v-bind:title="'@' + account.id + ' - ' + account.name" ><img v-bind:src="account.icon"/></button-->
        </div></div>
    </div>
</template>

<style scoped>

.body {
    padding: 0.5em;
}
</style>

<script>

import traffic from 'assets/traffic';

export default {
    name: 'accounts-app',
    props: ['xPos', 'yPos'],
    methods: {
        changeAccount: function (index) {
            this.$emit('changeAccount', this.forms.accounts[index]);
        }
    },
    data: function() {
        return {
            forms: traffic.forms 
        };
    }
};
</script>
