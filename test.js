#!/usr/bin/env node

const util = require('util');
const assert = require('assert');

const Trie = require('./trie.js');

const trie = new Trie();

assert.equal(trie.count(), 0, 'has no entries');

trie.add('the');
assert.equal(trie.count(), 1, 'has one entry');
console.log(util.inspect(trie, {showHidden: false, depth: null}));

trie.add('them');
assert.equal(trie.count(), 2, 'has two entries');

trie.add('there');
assert.equal(trie.count(), 3, 'has three entries');
assert.equal(trie.count('the'), 3, 'three start with "the"');
console.log(util.inspect(trie, {showHidden: false, depth: null}));

assert(trie.has('the'), 'has exactly "the"');
assert(trie.has('them'), 'has exactly "them"');
assert(trie.has('there'), 'has exactly "there"');

assert(!trie.has('their'), 'does not have exactly "their"');
assert(!trie.has('banana'), 'does not have exactly "banana"');

console.log('all tests pass');
