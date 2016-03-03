---
layout: default
---

# Node tutorial

This is a  quick introduction to using Javascript on the command line using Node JS.

## Testing what we've done

There are some pre-written tests that will track your progress through this tutorial. To test that you have done the right thing you need to have the `mocha` module installed.

Install it by typing this into a terminal window:

```
sudo npm install -g mocha
```

The `-g` is for global package. That means you will be able to run mocha from the command line, from any directory.

You now need to:

* fork the [Node-Tutorial](https://github.com/codex-academy/Node-Tutorial) repository;
* clone a copy into your local projects folder;
* open a new terminal window and change into the `node-tutorial` folder;
* do all the work below in the `node-tutorial` folder.

Run mocha in that folder by typing `mocha` and press enter. You should a message saying `0 passing (1ms)` and you should get messages about some failing tests.

As you work your way through the tasks run the `mocha` command after each test to see which tests are passing and which are not. As you progress, more and more of the tests should pass.

## Hello terminal

Create a file called `hello.js` in the node-tutorial folder. In the script write 'hello world!' to the console.

You can run the program from the command line using: `node hello.js`

Run `mocha` from the command line. At least one test should pass.

Next go on to [Filter some numbers](filter.html).
