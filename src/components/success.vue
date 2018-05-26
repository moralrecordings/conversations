<template>
    <div class="window" v-window v-bind:style="{ left: xPos + 'px', top: yPos + 'px' }">
        <div class="titlebar active">
            <span class="titlebar-text">Message from Supervisor</span>
        </div>
        <div class="body-container"><div class="body">
            <p>Your timesheet for the current quarter:</p>
            <table class="timesheet">
                <thead><tr>
                    <td style="text-align: left;">Week ending</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td><td>Sun</td>
                </tr></thead>
                <tbody>
                    <tr v-for="(times, index) in timesheets.slice(0, level+1)" v-bind:class="{active: level == index}" style="text-align: center;">
                        <td style="text-align: left;">{{ times.date }}</td>
                        <td v-for="n in 7">{{ times.hours[n-1] }}<span v-if="times.overtime[n-1]" class="overtime">+{{ times.overtime[n-1] }}</span></td>
                    </tr>
                    
                    <tr><td>Total hours:</td><td colspan="7">{{ timesheets[level].hours.reduce(function (a, b) { return a+b; }) }}</td></tr>
                    <tr v-if="timesheets[level].overtime.reduce(function (a, b) { return a+b; })"><td>Total overtime:</td><td colspan="7">{{ timesheets[level].overtime.reduce(function (a, b) { return a+b; }) }}</td></tr>
                    <tr><td>[NON-BILLED] Internship:</td><td colspan="7">-{{ timesheets[level].hours.reduce(function (a, b) { return a+b; }) }}</td></tr>
                    <tr v-if="timesheets[level].overtime.reduce(function (a, b) { return a+b; })"><td>[NON-BILLED] Overtime:</td><td colspan="7">-{{ timesheets[level].overtime.reduce(function (a, b) { return a+b; }) }}</td></tr>
                    <tr><td>Balance payable:</td><td colspan="7">$0.00</td></tr>
                </tbody>
            </table>
            <button class="form" v-on:click="logout">End session</button>
        </div></div>
    </div>
</template>

<style scoped>

.overtime {
    color: red;
}

.timesheet {
    font-size: 18px;
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1em;
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
    text-align: left;
}
</style>

<script>

import traffic from 'assets/traffic';

export default {
    name: 'success-app',
    props: ['xPos', 'yPos', 'level'],
    methods: {
        logout: function () {
            this.$emit('nextLevel');
        }
    },
    data: function() {
        return {
            timesheets: traffic.timesheets
        };
    }
};
</script>
