var messageTypes = {
    'ks_compliment': { account: 'kingsleysnacks', type: 'compliment', reason: ''}, 
    'ks_foreign': { account: 'kingsleysnacks', type: 'defect', reason: 'foreignObject' },
    'ks_foreignLegal': { account: 'kingsleysnacks', type: 'defect', reason: 'foreignObject', litigious: true },
    'ks_empty': { account: 'kingsleysnacks', type: 'defect', reason: 'emptyPackaging' },
    'ks_spoil': { account: 'kingsleysnacks', type: 'defect', reason: 'spoilage' },
};


export default {
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
