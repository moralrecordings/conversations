<template>
    <div class="window window-activity" v-window v-bind:style="{ left: xPos + 'px', top: yPos + 'px' }">
        <div class="titlebar active">
            <span class="titlebar-text">IssueMagic</span>
        </div>
        <div class="body-container"><div class="body">
            <button class="form" v-bind:disabled="!startActive" v-on:click="startShift">Begin shift</button>
            <div class="head" v-if="endless">Time elasped:</div><div class="head" v-else>Time remaining:</div>
            <div class="timer">{{ timer.clock }}</div>
            <div class="head">
                <div class="quart">Open</div><div class="quart">Rslv.</div><div class="quart">Warn</div><div class="quart">Total</div>
            </div>
            <div class="sub">
                <div class="quart">{{ score.open }}<template v-if="maxQueue">/{{ maxQueue }}</template></div><div class="quart">{{ score.rslv }}</div><div class="quart">{{ score.warn }}<template v-if="maxWarnings">/{{ maxWarnings }}</template></div><div class="quart">{{ scoreTotal }}</div>
            </div>
            <template v-if="endless">
            <div class="head">Resolution rate:</div>
            <div class="sub">{{ resolutionRate }}</div>
            </template><template v-else>
                <div class="head">
                    <div class="half">Resolution rate:</div><div class="half">Target rate:</div>
                </div>
                <div class="sub">
                    <div class="half">{{ resolutionRate }}</div><div class="half">{{ resolutionTargetRate }}</div>
                </div>
            </template>
            <div class="head">Avg. resolution time:</div>
            <div class="sub">{{ avgResolutionTime }}</div>
            <template v-if="!endless">
                <div class="head">Resolution rate (to date):</div>
                <div class="sub">{{ globalAvgResolutionRate }}</div>
                <div class="head">Avg. resolution time (to date):</div>
                <div class="sub">{{ globalAvgResolutionTime }}</div>
            </template>
            
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

.timer {
    font-size: 32px;
    margin-top: 0.3em;
    margin-bottom: 0.5em;
}

.half {
    display: inline-block;
    width: 50%;
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
    props: ['xPos', 'yPos', 'score', 'timer', 'maxWarnings', 'maxQueue', 'resolutionTarget', 'endless'],
    data: function() {
        return {
            forms: traffic.forms,
            startActive: true,
        };
    },
    methods: {
        startShift: function () {
            this.startActive = false;
            this.$emit('startShift');
        }
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
        resolutionTargetRate: {
            get: function () {
                return Number(Math.floor(this.resolutionTarget*100)).toString()+'%';
            }
        },
        avgResolutionTime: {
            get: function () {
                return this.score.rslv ? Number(Math.round(this.score.rslvTime/(100*this.score.rslv))/10).toString()+' sec' : '-';
            }
        },
        globalAvgResolutionTime: {
            get: function () {
                return this.score.rslv+this.score.globalRslv ? Number(Math.round((this.score.rslvTime+this.score.globalRslvTime)/(100*(this.score.rslv+this.score.globalRslv)))/10).toString()+' sec' : '-';
            }
        },
        globalAvgResolutionRate: {
            get: function () {
                return this.score.globalTotal ? Number(Math.floor(100*(this.score.globalRslv+this.score.rslv)/(this.score.globalTotal+this.score.open+this.score.rslv+this.score.warn))).toString()+'%' : '-';
            }
        }
    },
};
</script>
