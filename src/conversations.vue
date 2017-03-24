<template>
    <div id="conversations" class="app">
        <div class="desktop theme-blue" style="flex: 1 0 auto">

            <button v-on:click="spawnMessage" style="position: absolute; width: 128px; height: 128px; right: 64px; bottom: 64px;">New message</button>
            
            <mr-email-app width="1000" height="600"/>
            <mr-messages-app v-for="message in messages" v-bind:message="message"/>
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

// window class, for the topmost level floating box
.window {
    position: absolute;
    border: 1px solid;
    border-radius: 4px;
    display: flex;
    flex-direction: column; 
    box-sizing: border-box;
    min-width: 200px;
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
    transition-property: all;
    transition-duration: .5s;
    transition-timing-function: ease;
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



// Scripting is fun! Let's generate the boilerplate CSS for the colour scheme. 
// For the window theme, we want to rig it so you can add a class to the top-level window div,
// with colour rules that affect all the child divs.
// To save lots of copypasting, let's make a template set of instructions that themes the window
// based on a small set of colour variables.
// First argument is a string with the CSS selector to bind it to.

@mixin theme_factory($class, $bg, $bg_text, $active, $active_text, $inactive, $inactive_text) {
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

    #{$class} .active.titlebar {
        border-top-color: lighten($active, 15%);
        border-left-color: lighten($active, 15%);
        border-bottom-color: darken($active, 15%);
        border-right-color: darken($active, 15%);
        background-color: $active;
        color: $active_text;
    }

    #{$class} .active.titlebar button:hover {
        border: 1px solid $active_text;
    }
}


// Now we can crank out one colour scheme class per line
@include theme_factory( ".theme-blue", white, black, #37abc8, white, #bbbbbb, white );




</style>


<script>
//import interact from 'interactjs';
import Vue from 'vue';

import email from './components/email';
import messages from './components/messages';

import firehose from './firehose';

require('./assets/logo.svg');

// sometimes you want the ability to add arbitrary chunks of JS to components.
// in this case, we want an easy way to add movable window functionality
// to whatever thing we make. this is easy to do with jQuery (aka. the 
// Krazy Glue of the internet), but how do we merge the web 2.0 DOMfoolery
// with a web 3.0 reactgasm?
// vue.js lets you make custom directives which e.g. let you wire up events
// upon the element being inserted. this is good, as the component model 
// doesn't really believe in inheritance or mixins.
Vue.directive('window', {
    inserted: function (el) {
        $(el).draggable({
            scroll: false,
            handle: '.titlebar',
            containment: '.desktop'
        });
    }
});

/*interact('.titlebar').draggable({
    inertia: true,
    restrict: {
        restriction: '.app',
        endOnly: true,
        elementRect: { top: 0, left: 0.5, bottom: 1, right: 0.5 }
    },

}).on('dragmove', function (ev) {
    var target = ev.target.parentNode;
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + ev.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + ev.dy;

//    target.style.left = x + 'px';
//    target.style.top = y + 'px';       

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
});*/


export default {
    name: 'conversations',
    data: function () {
        return {
            messages: [
                { user: 'SalmonMan23', body: 'I can\'t believe this @KingsleySnacks why is there a large ass fly in this choc bar, you can do better ffs', loc: 'Cook County, IL, USA' },
                { user: 'PatriotXXL', body: 'wtf @KingsleySnacks you expect me to eat that', loc: 'Salt Lake City, UT, USA' },
            ]
        };
    },
    methods: {
        spawnMessage: function() {
            this.messages.push({
                user: 'ToolbeltKiller',
                loc: 'Newbridge, NJ, USA',
                body: firehose.generateMessage(),
                xPos: Math.floor( Math.random()*640 ),
                yPos: Math.floor( Math.random()*480 ),
            });
        }
    },
    components: {
        'mr-email-app': email,
        'mr-messages-app': messages,
    },
};
</script>

