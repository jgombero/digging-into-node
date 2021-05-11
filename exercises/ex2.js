#! /usr/bin/env node

// The above line means that env will find node on our system and use it to execute this file. This means we can execute it with "./ex1.js" rather than "./ex1.js node".

"use strict";

const util = require("util");
const path = require("path");
const fs = require("fs");
const getStdin = require("get-stdin");

// Minimist is a function/library that applies conventions to command line inputs. The second parameter is default configs.
// We use slice(2) here because the first argument is always the path to node, and the second is always the path to the file. After that is an object of all the input properties and values.
const args = require("minimist")(process.argv.slice(2), {
  boolean: ["help", "in"],
  string: ["file"],
});

const BASE_PATH = path.resolve(process.env.BASE_PATH || __dirname);


if (args.help) {
  printHelp();
} else if (args.in || args._.includes("-")) {
  getStdin().then(processFile).catch(error);
} else if (args.file) {
  fs.readFile(path.join(BASE_PATH, args.file), function onContents(err, contents) {
    if (err) {
      // Use toString method beause the error will once again be a Buffer
      error(err.toString());
    } else {
      processFile(contents.toString());
    }
  });
} else {
  error("Incorrect usage.", true);
}

// ********************

function processFile(contents) {
  contents = contents.toUpperCase();
  process.stdout.write(contents);
}

function processFileSync(filepath) {
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
  console.log("--in, -                process stdin");
  console.log("");
}