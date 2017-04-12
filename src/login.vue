<template>
    <div id="login" class="app">
        <div class="app-inner">
            <div class="login-frame"><div class="login-window">
                <p style="text-align: center;"><img v-bind:src="require('assets/logo-crap.jpg')" style="border: 1px solid #cccccc;"/><br/>Select remote session:</p>
                <ul style="list-style: none; padding: 0; margin: auto;">
                    <li><button class="session-button">us3appprod020_FIRSTTIME</button></li>
                    <li><button class="session-button">us1appprod103_WEEK1</button></li>
                    <li><button class="session-button">us2appprod004_WEEK2</button></li>
                    <li><button class="session-button">us6appprod090_WEEK3</button></li>
                    <li><button class="session-button">us1appprod107_WEEK4</button></li>
                    <li><button class="session-button">us3appprod055_WEEK5</button></li>
                    <li><button class="session-button">us2appprod024_WEEK6</button></li>
                    <li><button class="session-button">us6appprod060_WEEK7</button></li>
                </ul>
            </div></div>
        </div>
        <div class="footer">
            <p>
                <span class="chunk"><b>RemoteTeamPro Server v6.0.31.2303</b></span> - <span class="chunk">Copyright (c) 2006 Alwyn Megasoftware Ltd.</span><br/>
                <span class="chunk scare blink">TRIAL PERIOD EXPIRED!</span> <span class="chunk scare">Please contact your local sales representative today.</span><br/>
                <span class="chunk">You are on day <b>1825</b> of your 30 day trial.</span>
            </p>
        </div>
    </div>
</template>

<style>
// baseline style rules
html, body {
    height: 100%;
    margin: 0px;
    overflow: hidden;
    font-size: 14px;
    font-family: "Ubuntu", sans-serif;
    line-height: 1.5em;
}

.app {
    display: flex; 
    flex-direction: column; 
    height: 100%
}

.app-inner {
    flex: 1 0 auto;
}

.login-frame {
    display: flex; 
    align-items: center; 
    justify-content: center; 
    height: 100%; 
    background-color: #316fbd; 
}

.login-window {
    border: 1px solid black; 
    padding: 1em; 
    min-width: 480px;
    background-color: white;
}

.footer { 
    border-top: 1px solid #11335c; 
    box-sizing: border-box; 
    padding-left: 1em; 
    padding-right: 1em; 
    width: 100%; 
    text-align: center; 
    background-color: #dddddd;
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

.session-button {
    padding: 1em;
    min-width: 256px;
}
</style>

<script>
export default {
    data: function () {
        return {
            
        };
    }
};
</script>
