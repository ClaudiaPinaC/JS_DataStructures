// Hash map implementation with a 'Separate Chaining' technique to resolve collisions
class Hash {
  constructor(V) {
    this.BUCKET = V; // n de buckets
    this.table = new Array(V); // pointer to an array containing buckets
    for (let i = 0; i < V; i++) {
      this.table[i] = new Array();
    }
  }

  // inserts a key into the hash table
  insertItem(x) {
    const index = this.hashFunction(x);
    this.table[index].push(x);
  }

  // deletes a key from hash table
  deleteItem(key) {
    const index = this.hashFunction(key); // get the hash index of key
    const i = this.table[index].indexOf(key); // find the key in (index)th list
    // if the key is founded in the hash table, then it will remove it with splice
    if (i !== -1) {
      this.table[index].splice(i, 1);
    }
  }

  // hash function to map values to key
  hashFunction(x) {
    return x % this.BUCKET;
  }

  // function to display hash table
  displayHash() {
    for (let i = 0; i < this.BUCKET; i++) {
      let str = `${i}`;
      for (let j = 0; j < this.table[i].length; j++) {
        str += ` --> ${this.table[i][j]}`;
      }
      console.log(str);
    }
  }
}

// Driver program
const newKeys = [15, 11, 27, 8, 12];
const newKeysTotal = newKeys.length;

const hashTable = new Hash(7); // 7 is the number of 'buckets' in the hash table
for (let i = 0; i < newKeysTotal; i++) {
  hashTable.insertItem(newKeys[i]); // inserting new keys on buckets
}

hashTable.deleteItem(12); // deletes num 12 from hash table
hashTable.displayHash(); // display the hash table
