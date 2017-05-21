<template>
    <div class="window" v-window v-bind:style="{ left: xPos + 'px', top: yPos + 'px' }">
        <div class="titlebar active">
            <span class="titlebar-text">Message from Supervisor</span>
        </div>
        <div class="body-container"><div class="body">
            <p>Timesheet summary:</p>
            <table class="timesheet">
                <thead><tr>
                    <td style="text-align: left;">Week ending</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td><td>Sun</td>
                </tr></thead>
                <tbody>
                    <tr class="active" style="text-align: center;"><td style="text-align: left;">2011/11/06</td><td>8</td><td>8</td><td>8</td><td>8</td><td>8</td><td>0</td><td>0</td></tr>
                    
                    <tr><td>Total hours:</td><td colspan="7">48</td></tr>
                    <tr><td>Internship:</td><td colspan="7">-40</td></tr>
                    <tr><td>Non-costed non-billed:</td><td colspan="7">-8</td></tr>
                    <tr><td>Amount payable:</td><td colspan="7">$0.00</td></tr>
                </tbody>
            </table>
            <button class="form" v-on:click="logout">End session</button>
        </div></div>
    </div>
</template>

<style scoped>

.timesheet {
    width: 100%;
    border-collapse: collapse;
}

.timesheet thead {
    font-weight: bold; 
    text-align: center;
}

.timesheet tr td {
    padding: 0.25em;
}

.timesheet tr.active {
     background-color: white; 
     color: #333333;
     border: 1px solid black;
}

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
    name: 'success-app',
    props: ['xPos', 'yPos'],
    methods: {
        logout: function () {
            this.$emit('logout');
        }
    },
    data: function() {
        return {
        };
    }
};
</script>
