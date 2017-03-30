import tracery from 'tracery-grammar';
import grammarData from './assets/grammar';

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
    generateMessage: function () {
        return this.grammar.flatten('#ks_foreign#');
    }
};
