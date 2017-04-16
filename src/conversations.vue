<template>
    <div id="conversations" class="app" v-bind:class="[theme]">
        <template v-for="asset in svgAssets">
            <div style="display: none" v-html="asset"/>
        </template>
        <div class="desktop"> 
            <mr-email-app width="1000" height="600" v-if="showEmail" v-on:close="closeEmailWindow"/>
            <mr-accounts-app xPos="100" yPos="100" v-if="showIssues" v-on:changeAccount="changeAccount"/>
            <mr-activity-app width="300" v-if="showIssues" />
            <mr-messages-app v-for="msgId in messageWindows" :key="msgId" v-bind:message="messages[msgId]" v-on:submitMessage="submitMessage" v-on:close="closeMessageWindow"/>
        </div>
        <div class="taskbar">
            <button v-on:click="showEmailWindow">EMail</button>
            <button v-on:click="showIssueWindow">IssueMagic</button>
            <button v-on:click="spawnMessage">Spawn angry tweet</button>
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
}

// window class, for the topmost level floating box
.window {
    position: absolute;
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
    flex: 1 0 auto;
    height: 1%; 
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
.titlebar, .clickable, .desktop, .taskbar, .body-container  {
    transition-property: background, border, color;
    transition-duration: .3s;
    transition-timing-function: ease;
}


// Scripting is fun! Let's generate the boilerplate CSS for the colour scheme. 
// For the window theme, we want to rig it so you can add a class to the top-level window div,
// with colour rules that affect all the child divs.
// To save lots of copypasting, let's make a template set of instructions that themes the window
// based on a small set of colour variables.
// First argument is a string with the CSS selector to bind it to, rest are colour variables

@mixin theme_factory($class, $bg, $bg_text, $active, $active_text, $inactive, $inactive_text) {
    #{$class} .desktop {
        background-color: darken($active, 15%);
    }

    #{$class} .body-container {
        background-color: $bg;
        color: $bg_text;
    }

    #{$class} .clickable {
        background-color: $bg;
        color: $bg_text;
    }

    #{$class} .clickable:hover {
        background-color: darken($bg, 5%);
    }

    #{$class} .active.clickable {
        border-color: darken($active, 5%);
        background-color: $active;
        color: $active_text;
    }

    #{$class} .active.clickable:hover {
        background-color: darken($active, 5%);
    }

    #{$class} .window .titlebar {
        border-top-color: lighten($inactive, 15%);
        border-left-color: lighten($inactive, 15%);
        border-bottom-color: darken($inactive, 15%);
        border-right-color: darken($inactive, 15%);
        background-color: $inactive;
        color: $inactive_text;
    }

    #{$class} .window .titlebar button:hover {
        border: 1px solid $inactive_text;
    }

    #{$class} .window.active .titlebar {
        border-top-color: lighten($active, 15%);
        border-left-color: lighten($active, 15%);
        border-bottom-color: darken($active, 15%);
        border-right-color: darken($active, 15%);
        background-color: $active;
        color: $active_text;
    }

//    #{$class} .window.active .titlebar button {
//        border: 1px solid;
//        border-color: darken($active, 10%);
//    }

    #{$class} .window.active .titlebar button:hover {
        border: 1px solid;
        border-color: $active_text;
    }

    #{$class} .taskbar {
        border: 1px solid;
        border-top-color: lighten($active, 15%);
        border-left-color: lighten($active, 15%);
        border-bottom-color: darken($active, 15%);
        border-right-color: darken($active, 15%);
        background-color: $active;
        color: $active_text;
    }

    #{$class} input[type=radio] + .picker {
        border: 1px solid $inactive;
        border-radius: 4px;
    }

    #{$class} input[type=radio]:active + .picker {
        border-color: darken($active, 15%);
    }

    #{$class} input[type=radio]:checked + .picker, #{$class} input[type=radio]:hover:checked + .picker {
        border-color: $active;
    }

    #{$class} input[type=radio]:hover + .picker {
        border-color: $active;
    }

}


// Now we can crank out one colour scheme class per line
@include theme_factory( ".theme-allied", white, black, #37abc8, white, #b0b0b0, white );
@include theme_factory( ".theme-kingsley", #fffbea, #403501, #bc2e00, #ffe980, #a68075, #dfded8 );
@include theme_factory( ".theme-excelsior", #eeeeec, black, white, #cc0000, #d7cfcf, #666666 ); 




</style>


<script>
import Vue from 'vue';

import email from './components/email';
import messages from './components/messages';
import accounts from './components/accounts';
import activity from './components/activity';

import firehose from './firehose';

var svgAssets = [
    require('assets/egg.rawsvg')
];

// top level window management crap!
var windowList = [];

// fake window ordering using CSS z-index. 
// every time we select a window, increase this by 1.
var zLevel = 1;
var zBump = function (el) {
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
        );
        /*).on('drag', function (ev, ui) {
            ev.target.dataset.xPos = ui.offset.left;  
            ev.target.dataset.yPos = ui.offset.top;
        });*/

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



export default {
    name: 'conversations',
    data: function () {
        return {
            showEmail: false,
            showIssues: false,
            messages: [
            ],
            messageWindows: [
            ],
            svgAssets: svgAssets,
            theme: 'theme-allied',
        };
    },
    methods: {
        closeEmailWindow: function(ev) {
            console.log('closeEmailWindow');
            this.showEmail = false;
        },
        closeMessageWindow: function(ev) {
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
        },
        showEmailWindow: function() {
            console.log('showEmailWindow');
            this.showEmail = true;
        },
        showIssueWindow: function() {
            console.log('showIssueWindow');
            this.showIssues = true;
        },
        spawnMessage: function() {
            var xOffset = 32;
            var xRange = $('.desktop').width() - 64 - 400;
            var yOffset = 32;
            var yRange = $('.desktop').height() - 64 - 400;
            var msgId = this.messages.length;
            this.messages.push({
                id: msgId,
                user: 'ToolbeltKiller',
                loc: 'Newbridge, NJ, USA',
                body: firehose.generateMessage(),
                eggColour: randomEggColour(),
                xPos: Math.floor( Math.random()*xRange )+xOffset +'px',
                yPos: Math.floor( Math.random()*yRange )+yOffset +'px',
                reply: 'dude I just work here chill please'
            });
            this.messageWindows.push(msgId);
        },
        submitMessage: function (ev) {
            console.log('submitMessage');
            console.log(ev);
        },
        changeAccount: function (ev) {
            console.log('changeAccount');
            console.log(ev);
            this.theme = ev.theme;
        }
    },
    components: {
        'mr-email-app': email,
        'mr-messages-app': messages,
        'mr-accounts-app': accounts,
        'mr-activity-app': activity
    },
};
</script>

