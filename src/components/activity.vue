<template>
    <div class="window" v-window v-bind:style="{ left: xPos + 'px', top: yPos + 'px' }">
        <div class="titlebar active">
            <span class="titlebar-text">IssueMagic</span>
        </div>
        <div class="body-container"><div class="body">
            <button class="form">Begin shift</button>
            <div class="head">Time remaining:</div>
            <div class="sub">5:30</div>
            <div class="head">
                <div class="quart">Open</div><div class="quart">Rslv.</div><div class="quart">Warn</div><div class="quart">Total</div>
            </div>
            <div class="sub">
                <div class="quart">{{ score.open }}</div><div class="quart">{{ score.rslv }}</div><div class="quart">{{ score.warn }}/{{ maxWarnings }}</div><div class="quart">{{ scoreTotal }}</div>
            </div>
            <div class="head">Avg. resolution time:</div>
            <div class="sub">10.6 sec</div>
            <div class="head">Resolution rate:</div>
            <div class="sub">{{ resolutionRate }}</div>
            <div class="head">Avg. resolution time (global):</div>
            <div class="sub">10.6 sec</div>
            <div class="head">Resolution rate (global):</div>
            <div class="sub">40%</div>
            
        </div></div>
    </div>
</template>

<style scoped>

.window {
    width: 300px;
}

.head {
    margin-top: 0.5em;
    font-size: 16px;
    font-weight: bold;
}

.sub {
    font-size: 16px;
}

.quart {
    display: inline-block;
    width: 25%;
}

.body {
    padding: 0.5em;
    text-align: center;
}
</style>

<script>

import traffic from 'assets/traffic';

export default {
    name: 'activity-app',
    props: ['xPos', 'yPos', 'score', 'maxWarnings'],
    methods: {

    },
    computed: {
        scoreTotal: {
            get: function () {
                return this.score.open+this.score.rslv+this.score.warn;
            }
        },
        resolutionRate: {
            get: function () {
                return this.scoreTotal ? Number(Math.floor(100*this.score.rslv/this.scoreTotal)).toString()+'%' : '-';
            }
        },
    },
    data: function() {
        return {
            forms: traffic.forms,
        };
    }
};
</script>
