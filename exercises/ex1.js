#! /usr/bin/env node

// The above line means that env will find node on our system and use it to execute this file. This means we can execute it with "./ex1.js" rather than "./ex1.js node".

"use strict";

printHelp();

// ********************

function printHelp() {
  console.log("ex1 usage:");
  console.log("  ex1.js --help");
  console.log("");
  console.log("--help               print this help");
  console.log("");
}
// process.stdout.write("Hello world\n");