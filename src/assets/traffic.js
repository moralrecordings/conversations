
// Information for populating the response form.
// We don't want to overwhelm people with options, so we introduce dumb rules
// slowly over time. 'visibleLevel' is used to control what level of the game
// an option is first visible on.
var forms = {
    // Social media accounts
    accounts: [
        { id: 'AlliedBrandsInc', name: 'Allied Brands Inc.', theme: 'theme-allied', icon: require('assets/allied_icon.svg'), visibleLevel: 0 }, 
        { id: 'KingsleySnacks', name: 'Kingsley® Snacks', theme: 'theme-kingsley', icon: require('assets/kingsley_icon.svg'), visibleLevel: 0 }, 
        { id: 'CapnJackFoods', name: 'Cap\'n Jack Foods', theme: 'theme-capnjack', icon: require('assets/capnjack_icon.svg'), visibleLevel: 1 }, 
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
    attachmentsVisibleLevel: 3,
    attachments: [
        { id: 'blank', name: '----', visibleLevel: 3 },
        { id: 'ricardo', name: '20111121FPDraftFINAL2.jpg', visibleLevel: 3 },
        { id: 'shaftoproxin', name: '20111129 FINAL KC APPROVED amend2.jpg', visibleLevel: 5 },
    ]
}

// all the types of customer feedback 
var messageTypes = {
    'ks_experience': { account: 'KingsleySnacks', type: 'compliment', subtype: 'experience' }, 
    'ks_advertising': { account: 'KingsleySnacks', type: 'compliment', subtype: 'advertising' }, 
    'ks_foreign': { account: 'KingsleySnacks', type: 'issue', subtype: 'foreignObject' },
    'ks_foreignLegal': { account: 'KingsleySnacks', type: 'issue', subtype: 'foreignObject', flags: {litigious: true} },
    'ks_empty': { account: 'KingsleySnacks', type: 'issue', subtype: 'emptyPackaging' },
    'ks_spoil': { account: 'KingsleySnacks', type: 'issue', subtype: 'spoilage' },
    'ks_misshapen': { account: 'KingsleySnacks', type: 'issue', subtype: 'misshapen' },
};

// reply with the first response type in the list that matches all of the criteria
var responses = [
    {type: 'ks_compliment_reply', match: {account: 'KingsleySnacks', type: 'compliment'}},
    {type: 'ks_issue_reply', match: {account: 'KingsleySnacks', type: 'issue'}},
    {type: 'cj_issue_reply', match: {account: 'CapnJackFoods', type: 'issue'}},
    {type: 'generic_reply', match: {}},
];

var levels = [
    {
        duration: 120,
        maxWarnings: 5,
        resolutionRate: 0.4,
        firstTimeDelay: true,
        timeline: [
            {
                endMark: 120, periodMin: 5.0, periodMax: 10.0,
                grammar: [
                    { weight: 50, type: 'ks_foreign' },
                    { weight: 5, type: 'ks_spoil' },
                    { weight: 10, type: 'ks_empty' },
                    { weight: 5, type: 'ks_misshapen' },
                    { weight: 20, type: 'ks_experience' },
                    { weight: 10, type: 'ks_advertising' },
                ]
            }
        ]
    }
]


export default {
    forms: forms,
    messageTypes: messageTypes,
    responses: responses,
    levels: levels,
};
