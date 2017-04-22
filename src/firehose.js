import tracery from 'tracery-grammar';
import grammarData from './assets/grammar';
import traffic from './assets/traffic';

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
    generateMessage: function (level, time) {
        // FIXME: do proper timecheck!
        var grammarWeight = traffic.levels[level].timeline[0].grammar;
        return this.getMessage(grammarWeight);
    },
    getMessage: function (grammarWeight) {
        var sum = 0;
        grammarWeight.forEach(function (el) {
            sum += el.weight;
        });
        var pos = Math.random()*sum;
        var messageType = grammarWeight.find(function (el) {
            if (pos > el.weight) {
                pos -= el.weight;
                return false;
            }
            return true;
        }).type;

        return this.grammar.flatten('#'+messageType+'#');
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
        return this.grammar.flatten('#'+responseType+'#');
    },
};
