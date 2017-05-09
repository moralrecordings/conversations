
import Shepherd from 'tether-shepherd';
require('tether-shepherd/dist/css/shepherd-theme-dark.css');

var tour = new Shepherd.Tour({
    defaults: {
        classes: 'shepherd-theme-dark'
    }
});

tour.addStep({
    id: 'setAccount',
    text: '<p>You can change the account used to reply to a message by selecting it here, or using the number keys on the keyboard.</p><p>The message you just received was addressed to the <b>@KingsleySnacks</b> account, so select it here!</p>',
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
    if (Shepherd.activeTour && (Shepherd.activeTour.getCurrentStep() == 'setAccount')) {
        if (account == 'KingsleySnacks') {
            Shepherd.activeTour.show('openMessage');
        }
    }
});

export default {
    tour: tour,
    mediator: mediator,
    messageType: 'ks_empty'   
};
