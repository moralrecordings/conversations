<template>
    <div id="conversations" class="app" v-bind:class="[theme]">
        <template v-for="asset in svgAssets">
            <div style="display: none" v-html="asset"/>
        </template>
        <div class="desktop"> 
            <mr-email-app v-bind:width="emailPos.w" v-bind:height="emailPos.h" v-bind:xPos="emailPos.x" v-bind:yPos="emailPos.y" v-bind:level="level" v-if="showEmail" v-on:close="closeEmailWindow"/>
            <mr-accounts-app v-bind:xPos="accountsPos.x" v-bind:yPos="accountsPos.y" v-bind:level="level" v-if="showIssues" v-on:changeAccount="changeAccount"/>
            <mr-activity-app v-bind:timer="timer" v-bind:score="score" v-bind:maxWarnings="maxWarnings" v-bind:resolutionTarget="resolutionRate" v-bind:xPos="activityPos.x" v-bind:yPos="activityPos.y" v-on:startShift="start" v-if="showIssues" />
            <!-- message windows -->
            <mr-messages-app v-bind:class="{ close: showFail||showSuccess }" v-for="msgId in messageWindows" :key="msgId" v-bind:account="account" v-bind:message="messages[msgId]" v-bind:level="level" v-on:submitMessage="submitMessage" v-on:close="closeMessageWindow"/>
            <!-- tutorial messages -->
            <mr-messages-app v-if="tutorialMessage" v-bind:account="account" v-bind:message="tutorialMessage" v-bind:level="level" v-on:submitMessage="submitTutorialMessage"  v-on:close="closeTutorialMessageWindow" />
            <!-- warning window -->
            <mr-warning-app v-bind:xPos="warningPos.x" v-bind:yPos="warningPos.y" v-if="showWarning" v-bind:errors="warningErrors" v-on:close="closeWarningWindow"/>
            <mr-fail-app v-bind:xPos="failPos.x" v-bind:yPos="failPos.y" v-if="showFail" v-on:logout="logout"/>
            <mr-success-app v-bind:xPos="successPos.x" v-bind:yPos="successPos.y" v-bind:level="level" v-if="showSuccess" v-on:nextLevel="nextLevel"/>
        </div>
        <div class="taskbar">
            <button v-on:click="showEmailWindow" title="Email">
                <svg width="64" height="64" v-bind:class="{ throb: flashEmail }">
                    <use x="0" y="0" xlink:href="#emailIcon"/>
                </svg>
            </button>
            <button v-on:click="showIssueWindow" title="IssueMagic">
                <svg width="64" height="64" v-bind:class="{ throb: flashIssues }">
                    <use x="0" y="0" xlink:href="#activityIcon"/>
                </svg>
            </button>
            <button v-on:click="spawnMessage">DEBUG - Spawn angry tweet</button>
            <button v-on:click="showSuccessWindow">DEBUG - Win</button>
        </div>
    </div>
</template>


<style lang="scss">
// baseline style rules
html, body {
    height: 100%;
    margin: 0px;
    overflow: hidden;
    font-size: 14px;
    font-family: "Ubuntu", sans-serif;
    line-height: 1.5em;
}

// tweak for mobile safari
body {
    position: relative;
}

// fade to black
.fader { 
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999999;
    pointer-events: none;
    transition-property: background;
    transition-timing-function: ease;
}

.fader.active {
    background-color: black;
    transition-duration: 1s;
    pointer-events: auto;
}

// app container sizing
.app {
    display: flex; 
    flex-direction: column; 
    height: 100%
}

// desktop flex magic
.desktop {
    flex: 1 0 auto;
    border-bottom: 1px solid black;
}

// taskbar
.taskbar {
    padding: 4px;
    height: 66px;
}

.taskbar button {
    background: transparent;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 0;
    color: inherit;
}


// window class, for the topmost level floating box
.window {
    position: absolute;
    margin: 0;
    border: 1px solid black;
    border-radius: 4px;
    display: flex;
    flex-direction: column; 
    box-sizing: border-box;
    min-height: 64px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

// titlebar block for a window
.titlebar {
    display: flex;
    padding: 0.5em;
    font-weight: bold;
    line-height: 1.8em; 
    border: 1px solid;
    border-top-left-radius: 2px; 
    border-top-right-radius: 2px;
    cursor: default;
    user-select: none;
    -moz-user-select: none;
}

// close button on the title bar
.titlebar button {
    font-weight: bold;
    font-size: 16px;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 2px;
    padding: 0 6px 0 6px;
    margin: 0;
}

.titlebar button {
    color: inherit;
}

// text spacing on the title bar
.titlebar-text {
    flex: 1; 
    width: 0; 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
}

// clickable div (e.g. message body, email side pane)
.clickable {
    cursor: pointer;
    user-select: none;
    -moz-user-select: none;
    // we need to use this with <button> to get click handlers, 
    display: block;
    border: 0;
    padding: 0;
    text-align: inherit;
    width: 100%;
    font-family: "Ubuntu", sans-serif;
}

// picker div (e.g. account selector) 
input[type=radio] + .picker {
    display: block;
    opacity: 0.5;
    cursor: pointer;
    transition-property: opacity;
    transition-duration: .3s;
    transition-timing-function: ease;
}

input[type=radio]:hover + .picker {
    opacity: 0.8;
}

input[type=radio]:checked + .picker {
    opacity: 1.0;
}

.form {
    display: block;    
    font-family: inherit;
    font-size: 1rem;
    line-height: normal;
    width: 100%;
    height: 2.4375rem;
    margin: 0 0 1rem;
}

// class for divs which are meant to scroll as a pane inside the parent (e.g. email body)
.overflow {
    overflow: auto;
}

// window contents (outer frame)
// we use border-box a lot; the default CSS box model assumed width and height == usable width 
// and height inside of the div box, which excludes padding and border thickness. 
// this meant that e.g. "width: 100%" was always (border + padding)*2 px wider than you wanted 
// and required hand-mauling with hacks like negative margins. those were truly dark days.
// border-box measures height and width as the outer extremities of the box, which
// from a design perspective is waaaaay easier. thank you IE, you weren't all bad!
.body-container {
    flex: 1;
    overflow: auto;
    // stupid hack to make window overflow work
    // breaks under webkit
    // height: 1%; 
    box-sizing: border-box;
    border: 1px solid;
    border-top-color: #f0fefe;
    border-left-color: #f0fefe;
    border-bottom-color: #dbe2e3;
    border-right-color: #dbe2e3;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
}

// window contents (inner frame, to reset the width and height)
.body {
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 100%;
}

// dumb fade between themes
.titlebar, .clickable, .desktop, .taskbar, .body-container, .taskbar svg {
    transition-property: background, border, color, fill;
    transition-duration: .3s;
    transition-timing-function: ease;
}

// flyout animation for sent messages
@keyframes flyout {
    from {
        opacity: 1;
        transform: scale(1);
    }

    to {
        opacity: 0;
        transform: translate3d(2000px, 0, 0) scale(.1);
        transform-origin: right center;
    }
}


// zoom animation for appearing windows
@keyframes zoomIn {
    from {
        opacity: 0;
        transform: scale3d(.3, .3, .3);
    }

    50% {
        opacity: 1;
    }
}

// zoom animation for disappearing windows
@keyframes zoomOut {
    from {
        transform: scale(1);
    }
    
    50% {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: scale3d(.3, .3, .3);
    }
}



.window {
    animation-name: zoomIn;
    animation-duration: 0.15s;
    animation-fill-mode: forwards;
}

.window.flyout, .window.flyout.close {
    animation-name: flyout;
    animation-duration: 0.75s;
    animation-fill-mode: forwards;
}

.window.close {
    animation-name: zoomOut;
    animation-duration: 0.15s;
    animation-fill-mode: forwards;
}

// Scripting is fun! Let's generate the boilerplate CSS for the colour scheme. 
// For the window theme, we want to rig it so you can add a class to the top-level window div,
// with colour rules that affect all the child divs.
// To save lots of copypasting, let's make a template set of instructions that themes the window
// based on a small set of colour variables.
// First argument is a string with the CSS selector to bind it to, rest are colour variables

@mixin theme_factory($class, $bg, $bg_text, $active, $active_text, $inactive, $inactive_text) {
    .#{$class} .desktop {
        background-color: darken($active, 15%);
    }

    .#{$class} .body-container {
        background-color: $bg;
        color: $bg_text;
    }

    .#{$class} .clickable {
        background-color: $bg;
        color: $bg_text;
    }

    .#{$class} .clickable:hover {
        background-color: darken($bg, 5%);
    }

    .#{$class} .active.clickable {
        border-color: darken($active, 5%);
        background-color: $active;
        color: $active_text;
    }

    .#{$class} .active.clickable:hover {
        background-color: darken($active, 5%);
    }

    .#{$class} .window .titlebar {
        border-top-color: lighten($inactive, 15%);
        border-left-color: lighten($inactive, 15%);
        border-bottom-color: darken($inactive, 15%);
        border-right-color: darken($inactive, 15%);
        background-color: $inactive;
        color: $inactive_text;
    }

    .#{$class} .window .titlebar button:hover {
        border: 1px solid $inactive_text;
    }

    .#{$class} .window.active .titlebar button:hover, 
    .#{$class} .taskbar button:hover {
        border: 1px solid;
        border-color: $active_text;
    }

    .#{$class} .window.active .titlebar {
        border-top-color: lighten($active, 15%);
        border-left-color: lighten($active, 15%);
        border-bottom-color: darken($active, 15%);
        border-right-color: darken($active, 15%);
        background-color: $active;
        color: $active_text;
    }

//    .#{$class} .window.active .titlebar button {
//        border: 1px solid;
//        border-color: darken($active, 10%);
//    }


    .#{$class} .taskbar {
        border: 1px solid;
        border-top-color: lighten($active, 15%);
        border-left-color: lighten($active, 15%);
        border-bottom-color: darken($active, 15%);
        border-right-color: darken($active, 15%);
        background-color: $active;
        color: $active_text;
    }

    @keyframes #{$class}-svgthrob {
        0% {
            fill: $active_text;
        }
        50% {
            fill: lighten($active, 25%);
        }
        100% {
            fill: $active_text;
        }
    }

    .#{$class} .taskbar svg {
        display: block;
        fill: mix($active_text, lighten($active, 25%), 50%);
    }

    .#{$class} .taskbar svg.throb {
        animation-name: #{$class}-svgthrob;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }

    .#{$class} .taskbar button:hover svg, .#{$class} .taskbar button:hover svg.throb {
        animation: none;
        fill: $active_text;
    }

    .#{$class} input[type=radio] + .picker {
        border: 1px solid $inactive;
        border-radius: 4px;
    }

    .#{$class} input[type=radio]:active + .picker {
        border-color: darken($active, 15%);
    }

    .#{$class} input[type=radio]:checked + .picker, .#{$class} input[type=radio]:hover:checked + .picker {
        border-color: $active;
    }

    .#{$class} input[type=radio]:hover + .picker {
        border-color: $active;
    }

}


// Now we can crank out one colour scheme class per line
@include theme_factory( "theme-allied", white, black, #37abc8, white, #b0b0b0, white );
@include theme_factory( "theme-kingsley", #fffbea, #403501, #bc2e00, #ffe980, #a68075, #dfded8 );
@include theme_factory( "theme-capnjack", #f3f7fb, #0a172a, #204a87, white, #666666, white );
@include theme_factory( "theme-excelsior", #eeeeec, black, white, #cc0000, #d7cfcf, #666666 ); 




</style>


<script>
import Vue from 'vue';
import debounce from 'debounce';
import moment from 'moment';

import email from './components/email';
import messages from './components/messages';
import accounts from './components/accounts';
import activity from './components/activity';
import success from './components/success';
import fail from './components/fail';
import warning from './components/warning';

import firehose from './firehose';
import traffic from 'assets/traffic';
import tutorial from 'assets/tutorial';

// sometimes there'll be SVGs we want to be able to style with CSS
// these have to be inserted inline as <svg> DOM spew instead of an <img> tag
// the GOOD news is that this only has to be done once, then you can throw down
// <use xlink:href="#svgid"/> to happily stamp it in multiple places.
var svgAssets = [
    require('assets/egg.rawsvg'),
    require('assets/email.rawsvg'),
    require('assets/activity.rawsvg'),
];
var audioAssets = {
    'tick': new Audio(require('assets/tick.mp3')),
    'messageSend': new Audio(require('assets/message_send.mp3')),
    'messageGet': new Audio(require('assets/message_get.mp3'))
};

// top level window management crap!
var windowList = [];

// fake window ordering using CSS z-index. 
// every time we select a window, increase this by 1.
var zLevel = 1;
var zBump = function (el) {
    if ($(el).hasClass('active')) {
        // window is already in front, short circuit
        return;
    }
    if (el.style.zIndex != zLevel) {
        zLevel += 1;
        el.style.zIndex = zLevel;
    } 
    // active window gets a coloured titlebar
    $('.window').removeClass('active');
    $(el).addClass('active');
    var index = windowList.findIndex(function (fel) {
        return fel === el;
    });
    if (index != -1) {
        windowList.splice(index, 1);
    }
    windowList.push(el);
}
var zBumpCb = function (ev) {
    zBump(ev.currentTarget);
}

// sometimes you want the ability to add arbitrary chunks of JS to components.
// in this case, we want an easy way to add movable window functionality
// to whatever thing we make. this is easy to do with jQuery (aka. the 
// Krazy Glue of the internet), but how do we merge the web 2.0 DOMfoolery
// with a web 3.0 reactgasm?
// vue.js lets you make custom directives which e.g. let you wire up events
// upon the DOM element being inserted. this is good, as the component model 
// doesn't really believe in inheritance or mixins.
Vue.directive('window', {
    bind: function (el, binding, vnode) {
        // add to the window list
        windowList.push(el);

        if (binding.value) {
            if (binding.value.xPos) {
        //        el.dataset.xPos = binding.value.xPos;
                el.style.left = binding.value.xPos;
            }
            if (binding.value.yPos) {
        //        el.dataset.yPos = binding.value.yPos;
                el.style.top = binding.value.yPos;
            }
        }

        // add a jQuery UI draggable interaction to the window div
        $(el).draggable({
            scroll: false,
            handle: '.titlebar',
            //containment: '.desktop',
            start: zBumpCb,
        }).mousedown(
            zBumpCb
        ).focusin(
            zBumpCb
        );
        /*).on('drag', function (ev, ui) {
            ev.target.dataset.xPos = ui.offset.left;  
            ev.target.dataset.yPos = ui.offset.top;
        });*/
        
        // some awful browsers will add "position: relative" to the window? clobber that.
        el.style.position = '';

        // resizable modifier makes the window resizable
        if (binding.modifiers.resizable) {
            $(el).resizable({
                containment: '.desktop',
                minHeight: 240,
                minWidth: 240
            });
        }
        
        // if we use the "under" modifier, don't make the new window appear in
        // front of whatever is active.
        if (binding.modifiers.under) {
            el.style.zIndex = Math.max(zLevel-1, 0);
        // otherwise, bump it to the front!
        } else {
            zBump(el);
        }
    },

    unbind: function(el, binding, vnode) {
        console.log('UNBIND');
        var index = windowList.findIndex(function (fel) {
            return fel === el;
        });
        console.log(index);
        if (index != -1) {
            windowList.splice(index, 1);
            if (windowList.length) {
                zBump(windowList[windowList.length-1]);
            }
        }
    }
});

// cribbed from https://www.quora.com/What-is-the-meaning-of-the-color-of-Twitters-egg-avatars?share=1
var eggColours = [
    '#346A85', '#AFE356', '#348569', '#F6A43D', '#AAD3E6',
    '#7F3485', '#992B41', '#3B94D9', '#E95F28', '#4A913C',
    '#FFAC33', '#8899A6', '#744EAA', '#BE1931',

// plus tango colours because they are great
    '#EDD400', '#73D216', '#F57900', '#3465A4', '#75507B', '#C17D11', '#CC0000'
];

var randomEggColour = function () {
    return eggColours[Math.floor(Math.random()*eggColours.length)];
};


// initial data constructor method.
// moved out here into the void of space, so we can call it on route change

var initialData = function () {
    return {
        // window visibility flags
        showEmail: false,
        showIssues: false,
        showWarning: false,
        showFail: false,
        showSuccess: false,

        // flashing icons
        flashEmail: true,
        flashIssues: false,

        // tutorial flags
        tutorialMode: false,
        tutorialMessage: null,

        // window position hacks
        activityPos: {x: 0, y: 0},
        accountsPos: {x: 300, y: 300},
        warningPos: {x: 300, y: 300},
        failPos: {x: 0, y: 0},
        successPos: {x: 0, y: 0},
        emailPos: {x: 0, y: 0, w: 1000, h: 600},

        // messages produced in current session
        messages: [
        ],
        // message window list
        messageWindows: [
        ],

        level: 0,

        score: {open: 0, rslv: 0, warn: 0},
        timer: {duration: 0, count: 0, clock: '-:--', interval: null, nextMessage: null},
        
        maxWarnings: 5,
        resolutionRate: 0.5,

        svgAssets: svgAssets,
        theme: 'theme-allied',
        account: 'AlliedBrandsInc',
    };
}

export default {
    name: 'conversations',
    data: function () {
        return initialData();
    },
    methods: {
        closeEmailWindow: debounce(function(ev) {
            console.log('closeEmailWindow');
            this.showEmail = false;
        }, 200),
        closeMessageWindow: debounce(function(ev) {
            var vm = this;
            console.log('closeMessageWindow');
            console.log(ev);
            var index = this.messageWindows.findIndex(function (el) {
                return el === ev.id;
            });
            console.log(this.messageWindows[index]);
            if (index != -1) {
                this.messageWindows.splice(index, 1);
            }
        }, 200),
        closeWarningWindow: debounce(function(ev) {
            console.log('closeWarningWindow');
            this.showWarning = false;
        }, 200),
        showEmailWindow: function() {
            console.log('showEmailWindow');
            this.emailPos.x = ($('.desktop').width() - this.emailPos.w)/2;
            this.emailPos.y = ($('.desktop').height() - this.emailPos.h)/2;
            this.showEmail = true;
            this.flashEmail = false;
        },
        showIssueWindow: function() {
            console.log('showIssueWindow');
            this.accountsPos.x = $('.desktop').width() - 96; 
            this.accountsPos.y = ($('.desktop').height() - 320)/2; 
            this.activityPos.x = 16;
            this.activityPos.y = ($('.desktop').height() - 400)/2;
            this.showIssues = true;
        },
        showWarningWindow: function() {
            console.log('showWarningWindow');
            this.warningPos.x = $('.desktop').width() - 420 -16;
            this.warningPos.y = 16;
            this.showWarning = true;
        },
        showFailWindow: function () {
            this.failPos.x = ($('.desktop').width() - 800)/2;
            this.failPos.y = ($('.desktop').height() - 320)/2;
            this.showFail = true;
        },
        showSuccessWindow: function () {
            this.successPos.x = ($('.desktop').width() - 800)/2;
            this.successPos.y = ($('.desktop').height() - 320)/2;
            this.showSuccess = true;
        },
        start: function () {
            if (this.tutorialMode) {
                this.startTutorial();
            } else {
                this.startShift();
            }
        },

        // methods for running the tutorial 
        startTutorial: function () {
            this.spawnTutorialMessage();
            // cheat the race condition by giving the JS engine time to breathe
            setTimeout(tutorial.glue, 250);
        },
        spawnTutorialMessage: function (ev) {
            audioAssets.messageGet.play();                        
            var xOffset = 32;
            var xRange = $('.desktop').width() - 64 - 400;
            var yOffset = 32;
            var yRange = $('.desktop').height() - 64 - 500;
            this.tutorialMessage = {
                id: 'tut',
                user: firehose.getUser(),
                loc: firehose.getMessageLocation(),
                type: tutorial.messageType,
                body: firehose.getMessageBody(tutorial.messageType),
                created: moment(),
                eggColour: randomEggColour(),
                xPos: Math.floor( ( xOffset + xRange )/2 ) +'px',
                yPos: Math.floor( ( yOffset + yRange )/2 ) +'px'
            };
        },
        submitTutorialMessage: function (ev) {
            audioAssets.messageSend.play();
            var vm = this;
            var results = firehose.validate(tutorial.messageType, ev);
            tutorial.tour.hide();
            vm.closeWarningWindow();
            setTimeout(function () {
                vm.tutorialMessage = null;
            }, 300);

            if (!results.valid) {
                setTimeout(function () {
                    vm.warningErrors = results.errors;
                    vm.showWarningWindow();
                    vm.spawnTutorialMessage();
                    setTimeout(function () {
                        tutorial.tour.show('readFeedback');
                    }, 300);
                }, 1000);
            } else {
                // tutorial is ALL DONE
                vm.tutorialMode = false;
                tutorial.tour.complete();
                vm.startShift();
            }
        },
        closeTutorialMessageWindow: function (ev) {
            var vm = this;
            tutorial.tour.complete();
            setTimeout(function () {
                vm.tutorialMessage = null;
            }, 300);
            setTimeout(function () {
                vm.startTutorial();
            }, 1000);
        },
        // methods for running the game
        startShift: function () {
            this.timer.duration = firehose.getLevel(this.level).duration;
            this.timer.count = 0;
            this.timer.interval = setInterval(this._countdownCB, 1000);
            this.timer.nextMessage = setTimeout(this._trafficCB, 1000);
        },
        stopShift: function () {
            if (this.timer.interval != null) {    
                clearInterval(this.timer.interval);
                this.timer.interval = null;
            }
            if (this.timer.nextMessage != null) {
                clearTimeout(this.timer.nextMessage);
                this.timer.nextMessage = null;
            }
        },
        _countdownCB: function () {
            this.timer.count += 1;
            this.timer.clock = moment.duration(
                this.timer.duration-this.timer.count, 'seconds'
            ).format('m:ss', {trim: false});
            if (this.timer.duration - this.timer.count < 15) {
                audioAssets['tick'].play();
            }
            if (this.timer.count >= this.timer.duration) {
                console.log('TIME OVER!');
                this.stopShift();
                if ((this.score.rslv / (this.score.open+this.score.rslv+this.score.warn))< this.resolutionRate) {
                    // we're below the target completed rate, bomb out
                    this.showFailWindow();
                } else {
                    this.showSuccessWindow();
                }
            }
        },
        _trafficCB: function () {
            console.log('traffic!');
            if (!this.timer.interval) {
                // timer is off, short circuit
                this.timer.nextMessage = null;
                return;
            }
            this.spawnMessage();
            this.timer.nextMessage = setTimeout(this._trafficCB, Math.floor(1000*firehose.getPeriod(this.level, this.timer.count)));
        },
        spawnMessage: function() {
            audioAssets.messageGet.play();            
            var xOffset = 32;
            var xRange = $('.desktop').width() - 64 - 400;
            var yOffset = 32;
            var yRange = $('.desktop').height() - 64 - 500;
            var msgId = this.messages.length;
            var msgData = firehose.generateMessage(this.level, this.timer.count);
            // during mercy periods, firehose.generateMessage can refuse 
            // to return anything
            if (msgData) {
                this.score.open += 1;
                this.messages.push({
                    id: msgId,
                    user: firehose.getUser(),
                    loc: firehose.getMessageLocation(),
                    type: msgData.type,
                    body: msgData.message,
                    created: moment(),
                    eggColour: randomEggColour(),
                    xPos: Math.floor( Math.random()*xRange )+xOffset +'px',
                    yPos: Math.floor( Math.random()*yRange )+yOffset +'px'
                });
                this.messageWindows.push(msgId);
            }
        },

        submitMessage: function (ev) {
            audioAssets.messageSend.play();            
            var vm = this;
            console.log('submitMessage');
            console.log(ev);
            var results = firehose.validate(this.messages[ev.id].type, ev);
            this.closeWarningWindow();
            setTimeout(function () {
                if (!results.valid) {
                    vm.warningErrors = results.errors;
                    vm.score.warn += 1;
                    if (vm.score.warn < vm.maxWarnings) {
                        vm.showWarningWindow();
                    } else {
                        vm.stopShift();
                        vm.showFailWindow();
                    }
                } else {
                    console.log(moment().diff(vm.messages[ev.id].created));
                    vm.score.rslv += 1;
                }
                vm.score.open -= 1;
            }, 2000);
        },
        changeAccount: function (ev) {
            console.log('changeAccount');
            console.log(ev);
            this.theme = ev.theme;
            this.account = ev.id;
        },
        logout: function (ev) {

        },
        nextLevel: function (ev) {

        },
        reset: function (levelID) {
            var vm = this;
            // if a game is in progress, turn off the timers
            vm.stopShift();
            // wipe the slate clean
            $.extend(vm.$data, initialData());
            
            // level-specific setup crap
            vm.level = levelID;
            var level = firehose.getLevel(vm.level);
            if (level.tutorial) {
                this.tutorialMode = true;
            }
            this.maxWarnings = level.maxWarnings;
            this.resolutionRate = level.resolutionRate;
        },
    },
    mounted: function () {
        console.log(audioAssets);
    },
    beforeRouteEnter: function (to, from, next) {
        var levelID = firehose.getLevelByName(to.params.session_id);
        if (levelID < 0) {
            next('/');
            return;
        }
        next(function (vm) {
            vm.reset(levelID);
        });
    },
    beforeRouteUpdate: function (to, from, next) {
        var levelID = firehose.getLevelByName(to.params.session_id);
        if (levelID < 0) {
            next('/');
            return;
        }
        this.reset(levelID);
        next();
    },
    components: {
        'mr-email-app': email,
        'mr-messages-app': messages,
        'mr-accounts-app': accounts,
        'mr-activity-app': activity,
        'mr-success-app': success,
        'mr-fail-app': fail,
        'mr-warning-app': warning,
    },
};
</script>

