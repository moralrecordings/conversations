<template>
    <div id="conversations" class="app" style="display: flex; flex-direction: column; height: 100%">
        <div class="desktop theme-blue" style="flex: 1 0 auto">

            <mr-email-app width="1000" height="600"/>
            <mr-messages-app v-for="message in messages" v-bind:message="message"/>

        </div>
    </div>
</template>


<style>
html, body {
    height: 100%;
    margin: 0px;
    overflow: hidden;
    font-size: 14px;
    font-family: "Ubuntu", sans-serif;
    line-height: 1.5em;
}

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

.titlebar button:hover {
    border: 1px solid white;
}

.titlebar-text {
    flex: 1; 
    width: 0; 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
}


.theme-blue .body-container {
    background: white;
}

.theme-blue .active {
    border-color: #216778;
    background-color: #37abc8; 
    color: white;
}

.theme-blue .active.titlebar {
    border-top-color: #5fbcd3;
    border-left-color: #5fbcd3; 
    border-right-color: #2c89a0; 
    border-bottom-color: #2c89a0;
}

.overflow {
    overflow: auto;
}

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

.body {
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 100%;
}


</style>


<script>
import interact from 'interactjs';

import email from './components/email';
import messages from './components/messages';

require('./assets/logo.svg');

interact('.titlebar').draggable({
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

    target.style.left = x + 'px';
    target.style.top = y + 'px';       

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
});


export default {
    name: 'conversations',
    data: function () {
        return {
            messages: [
                { user: 'SalmonMan23', body: 'I can\'t believe this @KingsleySnacks why is there a large ass fly in this choc bar, you can do better ffs', loc: 'Cook County, IL, USA' },
                { user: 'PatriotXXL', body: 'wtf @KingsleySnacks you expect me to eat that', loc: 'Salt Lake City, UT, USA' },
            ]
        }
    },
    components: {
        'mr-email-app': email,
        'mr-messages-app': messages,
    },
};
</script>

