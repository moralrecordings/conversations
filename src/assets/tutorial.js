
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

var mediator = new Shepherd.Evented;
mediator.on('setAccount', function (account) {
    if (Shepherd.activeTour && (Shepherd.activeTour.getCurrentStep().id == 'setAccount')) {
        if (account == 'KingsleySnacks') {
            Shepherd.activeTour.show('openMessage');
        }
    }
});

var glue = function () {
    tour.start();

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

    var setAccountSelect  = $('.window-accounts input[value="KingsleySnacks"]');
    var setAccount = function () {
        if (setAccountSelect[0].checked && Shepherd.activeTour && (Shepherd.activeTour.getCurrentStep().id == 'setAccount')){
            Shepherd.activeTour.show('openMessage');
            openMessage();
            setAccountSelect.off('change', setAccount);
        }
    };
    setAccountSelect.on('change', setAccount);

    var openMessageSelect = $('.window-messages button.message-block');
    var openMessage = function (ev) {
        console.log($('.window-messages button.message-block'));
        var test = ev ? ev[0] : false;
        if (test || !$('.window-messages .message-hidden').hasClass('closed')) {
            Shepherd.activeTour.show('selectType');
            selectType();
            openMessageSelect.off('toggleHide', openMessage);
        }
    };
    openMessageSelect.on('toggleHide', openMessage);

    var selectTypeSelect = $('.window-messages select[name="replyType"]');
    var selectType = function () {
        if (selectTypeSelect.value == '2') { // product issue
            Shepherd.activeTour.show('selectSubtype');
            selectSubtype();
            selectTypeSelect.off('change', selectType);
        }
    };
    selectTypeSelect.on('change', selectType);


};

export default {
    tour: tour,
    glue: glue,
    mediator: mediator,
    messageType: 'ks_empty'   
};
