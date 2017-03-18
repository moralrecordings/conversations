import tracery from 'tracery-grammar';
import grammarData from './assets/grammar';

var grammar = tracery.createGrammar(grammarData);
grammar.addModifiers(tracery.baseEngModifiers);

export default {
    grammar: grammar,
    generateMessage: function () {
        return this.grammar.flatten('#discoveryMessage#');
    }
};
