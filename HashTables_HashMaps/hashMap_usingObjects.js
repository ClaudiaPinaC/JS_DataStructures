// HashMap using an object
const hashmap = {};

// Adding key value pairs
hashmap["apple"] = 1;
hashmap["banana"] = 2;
hashmap["orange"] = 3;

// Accessing values
console.log(hashmap["apple"]); //output: 1

console.log("banana" in hashmap); // output: true

// iterating over keys
for (const key in hashmap) {
  console.log(`${key}: ${hashmap[key]}`);
}
