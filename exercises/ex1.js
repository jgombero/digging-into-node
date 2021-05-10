#! /usr/bin/env node

// The above line means that env will find node on our system and use it to execute this file. This means we can execute it with "./ex1.js" rather than "./ex1.js node".

"use strict";

// Minimist is a built-in function that applies conventions to command line inputs. The second parameter is default configs.
// We use slice(2) here because the first argument is always the path the node, and the second is always the path to the file. After that is an array of all the input values.
const args = require("minimist")(process.argv.slice(2), {
  boolean: ["help"],
  string: ["file"],
});
console.log(args);

// printHelp();

// ********************

function printHelp() {
  console.log("ex1 usage:");
  console.log("  ex1.js --help");
  console.log("");
  console.log("--help               print this help");
  console.log("");
}
// process.stdout.write("Hello world\n");