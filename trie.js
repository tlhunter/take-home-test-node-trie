// When a terminator appears in a children Map it means the represented word exists in the Trie
const TERMINATOR = Symbol('terminator');

function newEntry () {
  return {
    count: 0,
    children: new Map(),
  };
}

/**
 * Trie class
 *
 * Note that these operations are case-sensitive
 */
class Trie {
  constructor () {
    this.root = newEntry();
  }

  /**
   * Adds this string into the Trie
   */
  add (string) {
    const chars = string.split('');
    let node = this.root;

    for (const char of chars) {
      if (!node.children.has(char)) {
        node.children.set(char, newEntry());
      }
      node.count++;
      node = node.children.get(char);
    }

    node.count++;
    node.children.set(TERMINATOR, true);
  }

  /**
   * Determine whether this exact string exist in our Trie
   */
  has (string) {
    const chars = string.split('');
    let node = this.root;

    for (const char of chars) {
      if (!node.children.has(char)) {
        return false; // e.g. we have theater, but searched for theatr
      }
      node = node.children.get(char);
    }

    if (node.children.get(TERMINATOR)) {
      return true;
    }

    // e.g., we have there, but searched for the
    return false;
  }

  /**
   * Counts how many entries exist beginning at this prefix
   */
  count (prefix = '') {
    const chars = prefix.split('');
    let node = this.root;

    for (const char of chars) {
      if (!node.children.has(char)) {
        return 0; // e.g. we have theater, but searched for theatr
      }
      node = node.children.get(char);
    }

    return node.count;
  }
};

module.exports = Trie;
