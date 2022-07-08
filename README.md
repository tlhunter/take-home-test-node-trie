# Node.js Trie

Note: Project is not available on NPM.

## Usage

```js
const Trie = require('trie.js'); // whereever you save trie.js
const words = new Trie();

words.add('the');
words.add('their');
words.add('there');
words.add('orange');

words.has('the') === true // Contains the word 'the'
words.has('ther') === false // Doesn't contain a word 'ther'
words.count('th') === 3 // Has three words that begin with 'th'
words.count() === 4 // Contains 4 words total
words.has('banana') === false // Does not contain 'banana'
```

## Testing

Execute the following:

```sh
./test.js
```
