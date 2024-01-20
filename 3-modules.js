//Modules
//CommonJs every file in node is module(by default)
//Modules-Encapsulated Code (only share  minimum what we waant )

const { john, peter } = require("./4-names.js");
// const names = require("./4-names.js");
const sayHi = require("./5-utils.js");
const { singlePerson, items } = require("./6-alternativeFlavor.js");
const data = require("./6-alternativeFlavor.js");
require("./7-mindGrenade.js");
sayHi("batuhan");
// console.log(names);
// console.log(sayHi);
// sayHi(peter);
// sayHi(john);
// // sayHi(names.peter);
// // sayHi(names.john);
// console.log(singlePerson.name);
// console.log(items);
// console.log(data.singlePerson.name);
// console.log(data.items);
