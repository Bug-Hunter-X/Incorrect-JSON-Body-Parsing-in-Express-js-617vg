# Incorrect JSON Body Parsing in Express.js

This repository demonstrates a common error in Express.js applications where the request body is not parsed correctly when using the deprecated `body-parser` middleware or forgetting to use `express.json()`.  The example showcases the problematic code and its solution.

## Problem

The `bug.js` file contains an Express.js server that attempts to process JSON data from a POST request. However, due to the lack of proper middleware to parse the JSON, the request body remains unparsed, leading to an empty object `req.body`.

## Solution

The `bugSolution.js` file demonstrates the correct approach. It uses the built-in `express.json()` middleware to parse the incoming JSON data before it reaches the request handler.