<template>
    <div id="conversations" class="app" v-bind:class="[theme]">
        <template v-for="(asset, index) in svgAssets">
            <div style="display: none" v-bind:key="index" v-html="asset"/>
        </template>
        <div class="desktop" v-bind:class="'bg-'+level"> 
            <mr-email-app v-bind:width="emailPos.w" v-bind:height="emailPos.h" v-bind:xPos="emailPos.x" v-bind:yPos="emailPos.y" v-bind:level="emailLevel" v-bind:todayOnly="endless" v-if="showEmail" v-on:close="closeEmailWindow"/>
            <mr-accounts-app v-bind:xPos="accountsPos.x" v-bind:yPos="accountsPos.y" v-bind:level="level" v-if="showIssues" v-on:changeAccount="changeAccount"/>
            <mr-activity-app v-bind:timer="timer" v-bind:score="score" v-bind:maxWarnings="maxWarnings" v-bind:maxQueue="maxQueue" v-bind:resolutionTarget="resolutionRate" v-bind:xPos="activityPos.x" v-bind:yPos="activityPos.y" v-bind:endless="endless" v-on:startShift="start" v-if="showIssues" />
            <mr-attachment-app v-for="att in attachments" v-bind:key="att.name" v-if="att.show" v-bind:width="att.width" v-bind:height="att.height" v-bind:xPos="att.xPos" v-bind:yPos="att.yPos" v-bind:src="att.src" v-bind:name="att.name" v-on:close="closeAttachmentWindow"/>
            <!-- message windows -->
            <mr-messages-app v-bind:class="{ close: showFail||showSuccess }" v-for="msgId in messageWindows" v-bind:key="msgId" v-bind:account="account" v-bind:message="messages[msgId]" v-bind:level="level" v-on:submitMessage="submitMessage" v-on:expire="expireMessage" v-on:close="closeMessageWindow"/>
            <!-- tutorial messages -->
            <mr-messages-app v-if="tutorialMessage" v-bind:account="account" v-bind:message="tutorialMessage" v-bind:level="level" v-on:submitMessage="submitTutorialMessage"  v-on:close="closeTutorialMessageWindow" />
            <!-- warning window -->
            <mr-warning-app v-bind:xPos="warningPos.x" v-bind:yPos="warningPos.y" v-if="showWarning" v-bind:errors="warningErrors" v-on:close="closeWarningWindow"/>
            <mr-settings-app v-bind:xPos="settingsPos.x" v-bind:yPos="settingsPos.y" v-if="showSettings" v-on:close="closeSettingsWindow" v-on:logout="logout" v-on:debugWin="showSuccessWindow" v-on:debugLose="showFailWindow" v-on:debugEmails="showAllEmails" v-on:debugSpawn="spawnMessage" v-on:debugTest="spawnTest"/>
            <mr-fail-app v-bind:xPos="failPos.x" v-bind:yPos="failPos.y" v-bind:endless="endless" v-if="showFail" v-on:logout="logout"/>
            <mr-success-app v-bind:xPos="successPos.x" v-bind:yPos="successPos.y" v-bind:level="level" v-if="showSuccess" v-on:nextLevel="nextLevel"/>
        </div>
        <div class="taskbar">
            <span class="progs">
                <button v-on:click="showEmailWindow" title="Email" v-bind:class="{ throb: flashEmail }">
                    <svg width="32" height="32">
                        <use x="0" y="0" transform="scale(0.5)" xlink:href="#emailIcon"/>
                    </svg>
                    <span>ExpressMail</span>
                </button>
                <button v-on:click="showIssueWindow" title="IssueMagic" v-bind:class="{ throb: flashIssues }">
                    <svg width="32" height="32">
                        <use x="0" y="0"  transform="scale(0.5)" xlink:href="#activityIcon"/>
                    </svg>
                    <span>IssueMagic</span>
                </button>
                <button v-for="att in attachments" v-bind:key="att.name" v-on:click="showAttachmentWindow(att)" title="Attachment">
                    <svg width="32" height="32">
                        <use x="0" y="0"  transform="scale(0.5)" xlink:href="#attachmentIcon"/>
                    </svg>
                    <span>{{ att.name }}</span>
                </button>
            </span>
            <button v-on:click="showSettingsWindow" title="Settings">
                <svg width="32" height="32">
                    <use x="0" y="0"  transform="scale(0.5)" xlink:href="#settingsIcon"/>
                </svg>
                <span>Settings</span>
            </button>
            <div class="clock">
                <span style="font-size: 1.5em;">{{ clock.topLine }}</span><br/>{{ clock.bottomLine }}
            </div>
        </div>
        <div class="fader" v-bind:class="{ active: fadeout }">
        </div>
    </div>
</template>


<style lang="scss">
// load the Ubuntu font family, if not found locally
@font-face {
    font-family: "Ubuntu";
    src: local("Ubuntu Regular"), url("../node_modules/ubuntu-fontface/fonts/ubuntu-regular-webfont.woff") format("woff"); 
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Ubuntu";
    src: local("Ubuntu Italic"), url("../node_modules/ubuntu-fontface/fonts/ubuntu-regular-italic-webfont.woff") format("woff"); 
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: "Ubuntu";
    src: local("Ubuntu Bold"), url("../node_modules/ubuntu-fontface/fonts/ubuntu-bold-webfont.woff") format("woff"); 
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: "Ubuntu";
    src: local("Ubuntu Bold Italic"), url("../node_modules/ubuntu-fontface/fonts/ubuntu-bold-italic-webfont.woff") format("woff"); 
    font-weight: bold;
    font-style: italic;
}



// baseline style rules
html, body {
    height: 100%;
    margin: 0px;
    overflow: hidden;
    font-size: 14px;
    line-height: 1.5em;
}

// chrome makes arial the default for widgets? whyyyyyy
html, body, input, textarea, select, button {
    font-family: "Ubuntu", sans-serif;
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
    background-repeat: repeat;
}

// taskbar
.taskbar {
    padding: 4px;
    display: flex;
}

.taskbar .progs {
    flex: 1;
}

.taskbar .clock {
    text-align: center;
    width: 120px;
    margin-top: 0.5em;
    cursor: default;
    user-select: none;
}

.taskbar button {
    background: transparent;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 4px;
    color: inherit;
    min-width: 84px;
}

.taskbar button svg {
    margin: auto;
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
    text-align: center;
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
            color: $active_text;
        }
        50% {
            fill: lighten($active, 25%);
            color: lighten($active, 25%);
        }
        100% {
            fill: $active_text;
            color: $active_text;
        }
    }

    .#{$class} .taskbar svg {
        display: block;
        fill: mix($active_text, lighten($active, 25%), 50%);
    }

    .#{$class} .taskbar .throb {
        font-weight: bold;
    }
    
    .#{$class} .taskbar .throb svg, .#{$class} .taskbar .throb {
        animation-name: #{$class}-svgthrob;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }

    .#{$class} .taskbar button:hover, .#{$class} .taskbar button:hover .throb,  {
        animation: none;
        color: $active_text;
    }

    .#{$class} .taskbar button:hover svg, .#{$class} .taskbar button:hover .throb svg,  {
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


// classes for background patterns!
.bg-0 { background-image: url('assets/bg_0.svg'); }
.bg-1 { background-image: url('assets/bg_1.svg'); }
.bg-2 { background-image: url('assets/bg_2.svg'); }
.bg-3 { background-image: url('assets/bg_3.svg'); }
.bg-4 { background-image: url('assets/bg_4.svg'); }
.bg-5 { background-image: url('assets/bg_5.svg'); }
.bg-6 { background-image: url('assets/bg_6.svg'); }
.bg-7 { background-image: url('assets/bg_7.svg'); }
.bg-8 { background-image: url('assets/bg_8.svg'); }
.bg-9 { background-image: url('assets/bg_9.svg'); }
.bg-10 { background-image: url('assets/bg_10.svg'); }
.bg-11 { background-image: url('assets/bg_11.svg'); }



</style>


<script>
import Vue from 'vue';
import debounce from 'debounce';
import moment from 'moment';
import $ from 'jquery';

import email from './components/email';
import messages from './components/messages';
import accounts from './components/accounts';
import attachment from './components/attachment';
import activity from './components/activity';
import settings from './components/settings';
import success from './components/success';
import fail from './components/fail';
import warning from './components/warning';

import firehose from './firehose';
import traffic from './assets/traffic';
import tutorial from './assets/tutorial';

// sometimes there'll be SVGs we want to be able to style with CSS
// these have to be inserted inline as <svg> DOM spew instead of an <img> tag
// the GOOD news is that this only has to be done once, then you can throw down
// <use xlink:href="#svgid"/> to happily stamp it in multiple places.
var svgAssets = [
    require('./assets/egg.rawsvg'),
    require('./assets/email.rawsvg'),
    require('./assets/activity.rawsvg'),
    require('./assets/settings.rawsvg'),
    require('./assets/attachment.rawsvg'),
];
var audioAssets = {
    'boot': new Audio(require('./assets/boot.mp3')),
    'messageGet': new Audio(require('./assets/message_get.mp3')),
    'messageSend': new Audio(require('./assets/message_send.mp3')),
    'tick': new Audio(require('./assets/tick.mp3')),
    'fired': new Audio(require('./assets/fired.mp3')),
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
        showSettings: false,
        showFail: false,
        showSuccess: false,

        // flashing icons
        flashEmail: true,
        flashIssues: false,

        // tutorial flags
        tutorialMode: false,
        tutorialMessage: null,
        
        // endless mode flags
        endless: false,

        // window position hacks
        activityPos: {x: 0, y: 0},
        accountsPos: {x: 300, y: 300},
        warningPos: {x: 300, y: 300},
        failPos: {x: 0, y: 0},
        successPos: {x: 0, y: 0},
        emailPos: {x: 0, y: 0, w: 1000, h: 600},
        settingsPos: {x: 0, y: 0},

        // messages produced in current session
        messages: [
        ],
        // message window list
        messageWindows: [
        ],
        // attachments available in current session
        attachments: [
        ],

        // fader state
        fadeout: false,

        // level ID
        level: 0,
        emailLevel: 0,

        // score and timekeeping
        score: {open: 0, rslv: 0, warn: 0, rslvTime: 0, globalRslv: 0, globalRslvTime: 0, globalTotal: 0},
        timer: {duration: 0, count: 0, clock: '-:--', interval: null, nextMessage: null},

        // fake datetime widget
        clock: {time: moment(), interval: null, topLine: '', bottomLine: ''},

        // default gameplay limits
        maxWarnings: 5,
        maxQueue: 0,
        resolutionRate: 0.5,

        // theming elements
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
            var index = vm.messageWindows.findIndex(function (el) {
                return el === ev.id;
            });
            console.log(vm.messageWindows[index]);
            if (index != -1) {
                vm.messageWindows.splice(index, 1);
            }
        }, 200),
        closeWarningWindow: debounce(function(ev) {
            console.log('closeWarningWindow');
            this.showWarning = false;
        }, 200),
        closeSettingsWindow: debounce(function(ev) {
            console.log('closeSettingsWindow');
            this.showSettings = false;
        }, 200),
        closeAttachmentWindow: debounce(function(ev) {
            console.log('closeAttachmentWindow');
            var index = this.attachments.findIndex(function (el) {
                return el.name === ev.id;
            });
            this.attachments[index].show = false;
        }, 200),
        showEmailWindow: function() {
            console.log('showEmailWindow');
            this.emailPos.w = Math.min( 1000, $('.desktop').width()-64 );
            this.emailPos.h = Math.min( 600, $('.desktop').height()-64 );
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
        showSettingsWindow: function() {
            console.log('showSettingsWindow');
            this.settingsPos.x = $('.desktop').width() - 420 -16;
            this.settingsPos.y = 16;
            this.showSettings = true;
        },
        showFailWindow: function () {
            this.failPos.x = ($('.desktop').width() - 800)/2;
            this.failPos.y = ($('.desktop').height() - 320)/2;
            audioAssets.fired.play();
            this.showFail = true;
        },
        showSuccessWindow: function () {
            this.successPos.x = ($('.desktop').width() - 800)/2;
            this.successPos.y = ($('.desktop').height() - 320)/2;
            this.showSuccess = true;
        },
        showAttachmentWindow: function (att) {
            att.width = Math.min( 640, $('.desktop').width()-64 );
            att.height = Math.min( 480, $('.desktop').height()-64 );
            att.xPos = ($('.desktop').width() - att.width)/2;
            att.yPos = ($('.desktop').height() - att.height)/2;
            att.show = true;
        },
        showAllEmails: function () {
            this.emailLevel = 11;
        },
        updateClock: function () {
            this.clock.topLine = this.clock.time.format('h:mm A');
            this.clock.bottomLine = this.clock.time.format('Do MMM YYYY');
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
            audioAssets.messageGet.currentTime = 0;
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
                message: firehose.getMessageBody(tutorial.messageType),
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
            if (this.endless) {
                this.timer.clock = moment.duration(
                    this.timer.count, 'seconds'
                ).format('m:ss', {trim: false});
            } else { 
                this.timer.clock = moment.duration(
                    this.timer.duration-this.timer.count, 'seconds'
                ).format('m:ss', {trim: false});
            }
            if (this.timer.duration - this.timer.count < 15) {
                audioAssets.tick.currentTime = 0;
                audioAssets.tick.play();
            }

            if ((this.maxWarnings && (this.score.warn >= this.maxWarnings)) || (this.maxQueue && (this.score.open >= this.maxQueue))) {
                this.stopShift();
                this.showFailWindow();
            } else if (this.timer.count >= this.timer.duration) {
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

        spawnTest: function () {
            var msgId = this.messages.length;
            this.score.open += 1;
            this.messages.push({
                id: msgId,
                user: firehose.getUser(),
                loc: firehose.getMessageLocation(),
                type: 'ks_foreign',
                message: '@CapnJackFoods 😭😭😭 WHAT IS THIS can\'t believe this bag of peanut poppers has a gigantic SPIDER in it, I expected more you fuckers',
                created: moment(),
                eggColour: randomEggColour(),
                xPos: '400px',
                yPos: '200px'
            });
            this.messageWindows.push(msgId);
        },
        spawnMessage: function() {
            audioAssets.messageGet.currentTime = 0;
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
                $.extend(msgData, {
                    id: msgId,
                    user: firehose.getUser(),
                    loc: firehose.getMessageLocation(),
                    created: moment(),
                    eggColour: randomEggColour(),
                    xPos: Math.floor( Math.random()*xRange )+xOffset +'px',
                    yPos: Math.floor( Math.random()*yRange )+yOffset +'px',
                });
                this.messages.push(msgData);
                this.messageWindows.push(msgId);
            }
        },
        expireMessage: function (ev) {
            var vm = this;
            setTimeout(function () {
                vm.warningErrors = ['Message reply was not sent in the required timeframe.'];
                vm.score.warn += 1;
                vm.score.open -= 1;
                if (vm.score.warn < vm.maxWarnings) {
                    vm.showWarningWindow();
                } 
            }, 2000);
        },
        submitMessage: function (ev) {
            audioAssets.messageSend.currentTime = 0;
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
                    }
                } else {
                    console.log(moment().diff(vm.messages[ev.id].created));
                    vm.score.rslv += 1;
                    vm.score.rslvTime += moment().diff(vm.messages[ev.id].created);
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
            var vm = this;
            this.fadeout = true;
            setTimeout(function () {
                vm.$router.push('/');
            }, 1200);
        },
        nextLevel: function (ev) {
            var vm = this;
            if (vm.level+1 >= traffic.levelCutOff) {
                vm.logout();
                return;
            }
            this.fadeout = true;
            this.$store.commit('completeLevel', {
                level: vm.level,
                stats: {
                    resolved: this.score.rslv,
                    resolvedTime: this.score.rslvTime,
                    unanswered: this.score.open,
                    warnings: this.score.warn
                }
            });

            setTimeout(function () {
                vm.$router.push('/session/'+traffic.levels[vm.level+1].name);
            }, 1200);
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
                vm.tutorialMode = true;
            }
            // set email level
            vm.emailLevel = levelID;

            vm.attachments = [];
            for (var i=1; i<traffic.forms.attachments.length; i++) {
                if (traffic.forms.attachments[i].visibleLevel <= vm.level) {
                    vm.attachments.push({
                        'name': traffic.forms.attachments[i].name,
                        'src': traffic.forms.attachments[i].filename,
                        'show': false,
                        'xPos': 0, 'yPos': 0, 'width': 640, 'height': 480
                    });
                }
            }

            vm.endless = level.endless || vm.endless;
            vm.maxWarnings = level.maxWarnings || vm.maxWarnings;
            vm.maxQueue = level.maxQueue || vm.maxQueue;
            vm.resolutionRate = level.resolutionRate;

            var glob = vm.$store.getters.globalResolution(vm.level);
            vm.score.globalRslv = glob.resolved;
            vm.score.globalRslvTime = glob.resolvedTime;
            vm.score.globalTotal = glob.total;

            // set fake clock to start of day
            vm.clock.time = moment(traffic.timesheets[vm.level].date, 'YYYY/MM/DD').subtract(6, 'days').add(8, 'hours').add(Math.floor(Math.random()*30), 'minutes');
            vm.updateClock();

            // deploy godawful startup jingle
            audioAssets.boot.play();
        },
    },
    beforeMount: function () {
        var vm = this;
        var update = function () {
            vm.clock.time.add(1, 'minutes')
            vm.updateClock();
        };
        vm.clock.interval = setInterval(update, 60000);
    },
    beforeDestroy: function () {
        var vm = this;
        clearInterval(vm.clock.interval);
        vm.clock.interval = null;
    },
    beforeRouteEnter: function (to, from, next) {
        console.log('beforeRouteEnter');
        console.log([to, from, next]);
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
        console.log('beforeRouteUpdate');
        console.log([to, from, next]);
        var levelID = firehose.getLevelByName(to.params.session_id);
        if ((levelID < 0) || (levelID > this.$store.getters.maxLevel)) {
            next('/');
            return;
        }
        this.reset(levelID);
        next();
    },
    beforeRouteLeave: function (to, from, next) {
        console.log('beforeRouteLeave');
        console.log([to, from, next]);
        this.stopShift();
        next();
    },
    components: {
        'mr-email-app': email,
        'mr-messages-app': messages,
        'mr-accounts-app': accounts,
        'mr-attachment-app': attachment,
        'mr-activity-app': activity,
        'mr-settings-app': settings,
        'mr-success-app': success,
        'mr-fail-app': fail,
        'mr-warning-app': warning,
    },
};
</script>

