#! /usr/bin/env node

// The above line means that env will find node on our system and use it to execute this file. This means we can execute it with "./ex1.js" rather than "./ex1.js node".

"use strict";

// path is built into node
const path = require("path");
const fs = require("fs");

// Minimist is a function/library that applies conventions to command line inputs. The second parameter is default configs.
// We use slice(2) here because the first argument is always the path the node, and the second is always the path to the file. After that is an array of all the input values.
const args = require("minimist")(process.argv.slice(2), {
  boolean: ["help"],
  string: ["file"],
});

if (args.help) {
  printHelp();
} else if (args.file) {
  processFile(path.resolve(args.file));
} else {
  error("Incorrect usage.", true);
}

// ********************

function processFile(filepath) {
  // If we don't specify an encoding as the second param we can't use console.log because readFileSync returns a Buffer, and console.log will print the Buffer as a string: <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 0a>
  const contents = fs.readFileSync(filepath, "utf8");

  process.stdout.write(contents);
}

function error(msg, includeHelp = false) {
  console.error(msg);
  if (includeHelp) {
    console.log("");
    printHelp();
  }
}

function printHelp() {
  console.log("ex1 usage:");
  console.log("  ex1.js --file={FILENAME}");
  console.log("");
  console.log("--help                 print this help");
  console.log("--file={FILENAME}      process the file");
  console.log("");
}
// process.stdout.write("Hello world\n");