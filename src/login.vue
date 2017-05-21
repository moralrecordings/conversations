<template>
    <div id="login" class="app">
        <div class="app-inner">
            <div class="login-frame"><div class="login-window">
                <p style="text-align: center;"><img v-bind:src="require('assets/logo-crap.jpg')" style="border: 1px solid #cccccc;"/><br/>Select remote session to join:</p>
                <ul class="session-list">
                    <li v-for="(level, index) in levels">
                        <button v-if="index <= $store.state.savedLevel" class="session-button" v-on:click="loadLevel(index)">{{ level.name }}</button>
                        <button v-else class="session-button" disabled>{{ level.name }}</button>
                    </li>
                    <li><button class="session-button" disabled>us4appprod096_ENDLESS</button></li>
                </ul>
            </div></div>
        </div>
        <div class="footer">
            <p>
                <span class="chunk"><b>RemoteTeamPro Server v6.0.31.2303</b></span> - <span class="chunk">Copyright (c) 2006 <u>Alwyn Megasoftware Ltd.</u></span><br/>
                <span class="chunk scare blink">TRIAL PERIOD EXPIRED!</span> <span class="chunk scare">Please contact your local sales representative today.</span><br/>
                <span class="chunk">You are on day <b>1825</b> of your 30 day trial.</span>
            </p>
        </div>
        <div class="fader" v-bind:class="{ active: fadeout }">
        </div>
        <div class="intro" v-if="showIntro != 0" v-bind:class="{ psyche: showIntro == 1 }">
        </div>
    </div>
</template>

<style lang="scss">
// see style rules in conversations.vue

.app-inner {
    flex: 1 0 auto;
    display: flex;
}

.login-frame {
    width: 100%;
    display: flex; 
    align-items: center; 
    justify-content: center; 
//    height: 100%; 
    background-color: #316fbd; 
}

.login-window {
    border: 1px solid black; 
    padding: 1em; 
    min-width: 480px;
    width: 800px;
    background-color: white;
}

.footer { 
    border-top: 1px solid #11335c; 
    box-sizing: border-box; 
    padding-left: 1em; 
    padding-right: 1em; 
    width: 100%; 
    text-align: center; 
    background-color: black;
    color: white;
}

.footer p {
    margin: 0;
    line-height: 1.4em;
    font-size: 0.8em;
}

.footer u {
    cursor: pointer;
}

.chunk { 
    display: inline-block;
}

.scare {
    color: red; 
    font-weight: bold;
}

@keyframes blink {
  50% {
    opacity: 0.0;
  }
}

.blink {
  animation: blink 1s step-start 0s infinite;
  -webkit-animation: blink 1s step-start 0s infinite;
}

.session-list {
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    padding: 0;
    margin: auto;
}

.session-list li {
    flex: 0 0 33.333333333%;
    text-align: center;
    margin-bottom: 0.5em;
}

.session-button {
    padding: 1em;
    box-sizing: border-box;
    width: 100%;
}

.intro {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999999;
    background-color: black;
}

.intro.psyche {
    background-image: url('assets/plugin.svg');
    background-repeat: no-repeat;
    background-position: center;
}


</style>

<script>
import traffic from './assets/traffic';

export default {
    data: function () {
        return {
            levels: traffic.levels,
            fadeout: false,
            showIntro: 1
        };
    },
    methods: {
        loadLevel: function (level) {
            this.fadeout = true;
        }
    },
    mounted: function () {
        var vm = this;
        setTimeout(function () {
            vm.showIntro = 2;
            setTimeout(function () {
                vm.showIntro = 0;
            }, 500);
        }, 500);
    }
};
</script>
