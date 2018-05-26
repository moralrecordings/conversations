import tracery from 'tracery-grammar';
import grammarData from './assets/grammar';
import traffic from './assets/traffic';

// lets bloat this up some more by including an enormous name list!
import firstNames from 'random-name/first-names.json';
import lastNames from 'random-name/names.json';


var getRandomChoice = function(table) {
    var source = table;
    var sum = 0;
    source.forEach(function (el) {
        sum += el.weight;
    });
    return function () {
        // for periods with no messages defined, return null
        if ((source.length == 0) || (sum == 0)) {
            return null;
        }

        var pos = Math.random()*sum;
        return source.find(function (el) {
            if (pos > el.weight) {
                pos -= el.weight;
                return false;
            }
            return true;
        });
    };
};

// pregenerate random choice closures
traffic.locations = getRandomChoice(traffic.locations);
traffic.levels.forEach(function (el) {
    if (el.timeline) {
        var gram = null;
        el.timeline.forEach(function (fl) {
            if (fl.grammar) {
                gram = fl.grammar;
            }
            fl.grammar = getRandomChoice(gram);
        });
    }
});


var conversationsMods = {
    upper: function( s ) {
        return s.toUpperCase();
    },
    lower: function( s ) {
        return s.toLowerCase();
    },
    randomUpper: function( s, params ) {
        var prob = parseInt(params[0]);
        return (Math.random()*100 <= prob)? s.toUpperCase(): s;
    }
};

var grammar = tracery.createGrammar(grammarData);
grammar.addModifiers(tracery.baseEngModifiers);
grammar.addModifiers(conversationsMods);
grammar.distribution = 'shuffle';

export default {
    grammar: grammar,
    getLevel: function (level) {
        return traffic.levels[level];
    },
    getLevelByName: function (name) {
        return traffic.levels.findIndex(function (el) {
            return name == el.name
        });
    },
    getTimeline: function (level, time) {
        return traffic.levels[level].timeline.find(function (el) {
            return time <= el.endMark;   
        });
    },
    getPeriod: function (level, time) {
        var timeline = this.getTimeline(level, time);
        return timeline.periodMin + Math.random()*(timeline.periodMax -timeline.periodMin);
    },
    generateMessage: function (level, time) {
        var messageType = this.getTimeline(level, time).grammar();
        if (messageType && messageType.type) {
            var result = {
                message: this.getMessageBody(messageType.type),
            };
            return $.extend(result, messageType);
        }
        return null;
    },
    getMessageBody: function (type) {
        return this.grammar.flatten('#'+type+'#');
    },
    getMessageLocation: function () {
        var locale = traffic.locations();
        return locale.name + ', ' + locale.state;
    },
    getUser: function () {
        // get a random first and last name as a basis
        var first = firstNames[Math.floor(Math.random()*firstNames.length)];
        var last = lastNames[Math.floor(Math.random()*lastNames.length)];
        
        return first+last;
    },
    generateResponse: function (params) {
        var responseType = traffic.responses.find(function (el) {
            for (var key in el.match) {
                if (!(key in params)) {
                    return false;
                } else if (key === 'flags') {
                    for (var flag in el.match[key]) {
                        var test2 = !(flag in params[key]);
                        if (test2) {
                            return false;
                        } else if (el.match[key][flag] != params[key][flag]) {
                            return false;
                        }
                    }
                } else if (el.match[key] != params[key]) {
                    return false;
                }
            }
            return true;
        }).type;
        return {
            type: responseType,
            response: this.grammar.flatten('#'+responseType+'#'),
        };
    },
    validate: function (messageType, response) {
        var match = traffic.messageTypes[messageType];
        var errors = [];
        if (match.account != response.account) {
            errors.push('Reply should be sent from @'+match.account+' account.');
        }
        
        var type = traffic.forms.types.find(function (el) {
            return el.id === match.type;
        });
        if (match.type && (match.type != response.type)) {
            errors.push('Category should be "'+type.name+'".');
        }
        if (match.subtype && (match.subtype != response.subtype)) {
            var subtype = type.subtypes.find(function (el) {
                return el.id === match.subtype;
            });
            errors.push('Category subtype should be "'+subtype.name+'".');
        }
        for (var flag in response.flags) {
            var flagName = traffic.forms.flags.find(function (el) {
                return el.id === flag;
            }).name;
            if (response.flags[flag] === true) {
                if (!(match.flags) || !(flag in match.flags)) {
                    errors.push('Flag "'+flagName+'" does not apply to this message.');
                }
            } else if ('flags' in match) {
                if ((flag in match.flags) && (match.flags[flag] === true)) {
                    errors.push('Flag "'+flagName+'" should have been set.');
                }
            }
        }
        if ('attachment' in match) {
            if (match.attachment != response.attachment) {
                var attachName = traffic.forms.attachments.find(function (el) {
                    return el.id === match.attachment;
                }).name;
                errors.push('Attachment should be "'+attachName+'".');
            }
        } else {
            if (response.attachment != 'blank') {
                errors.push('No attachment required.');
            }
        }
        if (!response.ready) {
            errors.push('Reply was sent unfinished.');
        }
        return {
            valid: errors.length === 0,
            errors: errors
        };
    },
};
