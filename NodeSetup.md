---
layout: default
title: Node Setup
---

# Setup Node JS

## Installing Node JS

On Ubuntu you can install Node JS from the command line using `apt-get`. You should already have it installed on your laptop if you completed the codeX intro.

To check that you have it installed, and what version, run `nodejs -v` for the terminal. If you get an error, follow through installation instructions below. Otherwise jump down to [Node JS Javascript from the command line](#node-js-javascript-from-the-command-line).

### Installation instructions

* `sudo apt-get install node-legacy` (this will instal Node as `node` and the `nodejs` command)
* `sudo apt-get install npm` (this will install Node Package Manager, which we'l learn more about later)

Open a terminal window:

* Type `nodejs` and press enter. You should now be in a Node JS console. You can use Ctrl+C to get out of it.
* Type `npm` you should see some information about npm on the console.

Now you are ready to use JavaScript from the command line.

## Node JS Javascript from the command line

Let's run a simple JavaScript script from the command line:

* Create a file called `hello.js`.
* Copy this text into the file: `console.log('hello world!');`.
* Save the file.
* Now run it using `nodejs hello.js`.
* What happens?

You liberated your JavaScript knowledge from the browser and moved it to the command line!

Now prove this to yourself and write some JavaScript that uses:

* an `if` statement;
* a `for` loop;
* a simple function;
* whatever else you need to get comfortable.

Create about 5 different JavaScript (.js) files to get more comfortable with JavaScript on the command line.

You can run the scripts using `nodejs filename.js`.
