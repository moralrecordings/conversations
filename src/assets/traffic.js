
// Information for populating the response form.
// We don't want to overwhelm people with options, so we introduce dumb rules
// slowly over time. 'visibleLevel' is used to control what level of the game
// an option is first visible on.
var forms = {
    // Social media accounts
    accounts: [
        { id: 'AlliedBrandsInc', name: 'Allied Brands Inc.', theme: 'theme-allied', icon: require('assets/allied_icon.svg'), visibleLevel: 0 }, 
        { id: 'KingsleySnacks', name: 'Kingsley® Snacks', theme: 'theme-kingsley', icon: require('assets/kingsley_icon.svg'), visibleLevel: 0 }, 
        { id: 'CapnJackFoods', name: 'Cap\'n Jack Foods', theme: 'theme-allied', icon: require('assets/allied_icon.svg'), visibleLevel: 1 }, 
        { id: 'excelsior_rx', name: 'Excelsior Pharmaceuticals', theme: 'theme-excelsior', icon: require('assets/excelsior_icon.svg'), visibleLevel: 2 },
    ],
    // Message types and subtypes
    types: [
        { id: 'blank', name: '----', visibleLevel: 0 },
        { id: 'compliment', name: 'Compliment', visibleLevel: 0, subtypeName: 'Source', subtypes: [
            { id: 'blank', name: '----', visibleLevel: 0 },
            { id: 'experience', name: 'Good experience', visibleLevel: 0 },
            { id: 'advertising', name: 'Advertising campaign', visibleLevel: 0 },
        ]},
        { id: 'issue', name: 'Product issue', visibleLevel: 0, subtypeName: 'Issue type', subtypes: [
            { id: 'blank', name: '----', visibleLevel: 0 },
            { id: 'misshapen', name: 'Misshapen product', visibleLevel: 0 },
            { id: 'spoilage', name: 'Spoilage', visibleLevel: 0 },
            { id: 'emptyPackaging', name: 'Empty packaging', visibleLevel: 0 },
            { id: 'foreignObject', name: 'Foreign object', visibleLevel: 0 },
            { id: 'sideEffects', name: 'Side effects', visibleLevel: 2 },
            { id: 'pricing', name: 'Pricing', visibleLevel: 2 },
        ]},
        { id: 'abuse', name: 'Abuse', visibleLevel: 6, subtypeName: 'Abuse type', subtypes: [
            { id: 'blank', name: '----', visibleLevel: 0 },
            { id: 'hateSpeech', name: 'Hate speech', visibleLevel: 0 },
            { id: 'stalking', name: 'Stalking', visibleLevel: 0 },
            { id: 'extortion', name: 'Extortion', visibleLevel: 0 },
            { id: 'deathThreat', name: 'Death threat', visibleLevel: 0 },
            { id: 'personal', name: 'Personal attack', visibleLevel: 0 },
        ]}
    ],
    // Flags
    flags: [
        { id: 'litigious', name: 'Litigious', visibleLevel: 1 },
        { id: 'suicidal', name: 'Suicide risk', visibleLevel: 5 },
    ],
    // Attachments
    attachmentsVisibleLevel: 5,
    attachments: [
        { id: 'blank', name: '----', visibleLevel: 5 },
        { id: 'ricardo', name: '20111129FPDraftFINAL2.jpg', visibleLevel: 5 },
    ]
}


var messageTypes = {
    'ks_compliment': { account: 'KingsleySnacks', type: 'compliment', subtype: ''}, 
    'ks_foreign': { account: 'KingsleySnacks', type: 'issue', subtype: 'foreignObject' },
    'ks_foreignLegal': { account: 'KingsleySnacks', type: 'issue', subtype: 'foreignObject', flags: {litigious: true} },
    'ks_empty': { account: 'KingsleySnacks', type: 'issue', subtype: 'emptyPackaging' },
    'ks_spoil': { account: 'KingsleySnacks', type: 'issue', subtype: 'spoilage' },
};


var levels = {
    0: {
        time: 180,
        firstTimeDelay: true,
        timeline: [
            {
                endMark: 180, periodMin: 3.0, periodMax: 5.0,
                grammar: [
                    { weight: 40, type: 'ks_foreign' },
                    { weight: 20, type: 'ks_spoil' },
                    { weight: 10, type: 'ks_empty' },
                    { weight: 20, type: 'ks_compliment' },
                ]
            }
        ]
    }
}

export default {
    forms: forms,
    levels: levels,
    messageTypes: messageTypes,

};
