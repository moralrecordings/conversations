
import Shepherd from 'tether-shepherd';
require('tether-shepherd/dist/css/shepherd-theme-dark.css');

var tour = new Shepherd.Tour({
    defaults: {
        classes: 'shepherd-theme-dark'
    }
});

tour.addStep({
    id: 'setAccount',
    text: '<p>You can change the account used to reply to a message by selecting it here.</p><p>The message you just received was addressed to the <b>@KingsleySnacks</b> account, so select it here!</p>',
    buttons: false,
    attachTo: {
        element: '.window-accounts input[value="KingsleySnacks"] + img',
        on: 'left'
    },
}).addStep({
    id: 'openMessage',
    text: '<p>Expand the response form by clicking on the message.</p>',
    buttons: false,
    attachTo: {
        element: '.window-messages button.message-block',
        on: 'right'
    }
}).addStep({
    id: 'selectType',
    text: '<p>In IssueMagic, customer messages have to be classified for QA before you can send an appropriate response.</p><p>For this message the customer is reporting a bad product experience, so pick the <b>"Product issue"</b> category.</p>',
    buttons: false,
    attachTo: {
        element: '.window-messages select[name="replyType"]',
        on: 'right'
    }

}).addStep({
    id: 'selectSubtype',
    text: '<p>Further to that, this customer has purchased a product with missing contents, so select the <b>"Empty packaging"</b> subtype.</p>',
    buttons: false,
    attachTo: {
        element: '.window-messages select[name="replySubtype"]',
        on: 'right'
    }

}).addStep({
    id: 'sendResponse',
    text: '<p>You\'re all set! Now type out your full response and hit "Enter" to send.</p>',
    buttons: false,
    attachTo: {
        element: '.window-messages textarea[name="replyFull"]',
        on: 'right'
    }
}).addStep({
    id: 'readFeedback',
    text: '<p>The response you sent had some issues which caused it to be rejected. Review the feedback from your supervisor and try again.</p>',
    buttons: false,
    attachTo: {
        element: '.window-warning .body',
        on: 'left'
    }

});


var glue = function () {
    tour.start();

    global.$ = $;

    // for sanity's sake, we won't add tutorial hooks to all of the vue.js code.
    // no, instead we'll do things the bonkers way with selectors and jquery!
    //
    // see, we know that when the tutorial code is going to be invoked, there will be a
    // single message window, plus all of the issuemagic controls. which means we can 
    // use a DOM selector to pick out the individual elements and put a temporary event
    // hook on activating them which moves the tutorial forward. nicer than having
    // to click NEXT NEXT NEXT all the damn time.
    //
    // it almost seems like we could use jquery's .one() method to make an event that
    // removes itself after use, but really we want to remove it after the tutorial moves
    // forward. so we're going to make a bunch of callbacks which check the status of the UI, 
    // and if they match, move the tour up by one. oh and we'll call the next callback in the 
    // chain while we're here, as we don't want to bother with tutorial steps that aren't 
    // relevant because the user has already clicked on ahead. 
    //
    // these callbacks are temporarily wired up with bits of the UI, the wires get cut after
    // the tutorial step changes.

    // wrapper to check for the current step before invoking a callback.
    // this is used for wiring up to events.
    var stepCheck = function (name, cb) {
        return function () {
            console.log('STEPCHECK '+name);
            if (tour && tour.getCurrentStep().id == name) {
                cb();
            }
        }
    }


    var setAccountSelect  = $('.window-accounts input[value="KingsleySnacks"]');
    var setAccount = function () {
        console.log('setAccount');
        if (setAccountSelect[0].checked) {
            tour.show('openMessage');
            openMessage();
            setAccountSelect.off('change', setAccountCB);
        }
    };
    var setAccountCB = stepCheck('setAccount', setAccount);
    setAccountSelect.on('change', setAccountCB);

    var openMessageSelect = $('.window-messages button.message-block');
    var openMessage = function () {
        // we check for the closed class, which gets applied after vue.js eats the click
        // so lets hack it in with a delay!
        // DONT'T JUDGE
        setTimeout(function () {
            if (!$('.window-messages .message-hidden').hasClass('closed')) {
                tour.show('selectType');
                selectType();
                openMessageSelect.off('click', openMessageCB);
            }
        }, 50);
    };
    var openMessageCB = stepCheck('openMessage', openMessage);
    openMessageSelect.on('click', openMessageCB);

    var selectTypeSelect = $('.window-messages select[name="replyType"]');
    var selectType = function () {
        console.log('selectType');
        setTimeout(function () {
            if (selectTypeSelect[0].value == '2') { // product issue
                selectTypeSelect.off('change', selectTypeCB);
                setTimeout( function () {
                    $('.window-messages select[name="replySubtype"]').on('change', selectSubtypeCB);

                    tour.show('selectSubtype');
                }, 50);
            }
        }, 50);
    };
    var selectTypeCB = stepCheck('selectType', selectType);
    selectTypeSelect.on('change', selectTypeCB);

    // following elements are behind a v-if rendering switch, and need to be hooked at runtime
    var selectSubtype = function () {
        setTimeout(function () {
            var selectSubtypeSelect = $('.window-messages select[name="replySubtype"]');
            if (selectSubtypeSelect[0].value == '3') { // empty packaging
                tour.show('sendResponse');
                selectSubtypeSelect.off('change', selectSubtypeCB);
            }
        }, 50);
    };
    var selectSubtypeCB = stepCheck('selectSubtype', selectSubtype);


};


export default {
    tour: tour,
    glue: glue,
    messageType: 'ks_empty'   
};
