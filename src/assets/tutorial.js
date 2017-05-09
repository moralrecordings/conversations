
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



    var setAccountSelect  = '.window-accounts input[value="KingsleySnacks"]';
    var setAccount = function (ev) {
        console.log(ev);
        console.log(Shepherd.activeTour);
        if (this.checked && Shepherd.activeTour && (Shepherd.activeTour.getCurrentStep().id == 'setAccount')){
            Shepherd.activeTour.show('openMessage');
            $(setAccountSelect).off('change', setAccount);
        }
    };
    $(setAccountSelect).on('change', setAccount);

    var openMessageSelect = '.window-messages button.message-block';
    var openMessage = function (ev) {
        
    };
    $('.window-messages button.message-block').one('click', function (ev) {
        
    });
    
};

export default {
    tour: tour,
    glue: glue,
    mediator: mediator,
    messageType: 'ks_empty'   
};
