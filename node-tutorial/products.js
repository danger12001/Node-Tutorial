module.exports = function() {
    var fs = require("fs");
    var contents = fs.readFileSync('./files/products.csv', 'utf8');
    var contentsArray = [];
    var productsArray = [];
    var products = [];
    //Creates a function that returns a list of products:

    // splits strings into contentsArray
    var lines = contents.split('\n');
    //removes commas
    lines.forEach(function(word) {
      var withoutcommas = word.split(',');
      contentsArray.push(withoutcommas);
    });
    //b) filter list of products from contentsArray
    contentsArray.forEach(function(item, array) {
      productsArray.push(item[1]);
    });
    //c) make sure list is unique
    function productNames(callback) { // This part is important for callbacks to work.
      var products = []; // For this function to async, it'll need to "return" something. So we make the products array only for this function.
      for (i = 0; i < productsArray.length; i++) {
        var find = products.indexOf(productsArray[i]);
        if (find < 0) {
          products.push(productsArray[i]);
        }
      }
      callback(null, products);
    }
    function productsSold(callback) {
      var productitems = {};

      productNames(function(err, products) { //getting the data via the callback. Now products has right data.
        // Go through each unique product
        products.map(function(productName) {
          // looking at  inventory data again
          for (i = 0; i < contentsArray.length; i++) {
            // Is the product in the array?
            if (contentsArray[i].indexOf(productName) > -1) {
              // Grab number
              var number = contentsArray[i][2];


              if (!productitems[productName]) {
                productitems[productName] = 0;
              }
              productitems[productName] = productitems[productName] + parseInt(number, 10);
            }
          }
        });
        callback(null, productitems);
      });
		}
    this.productNames = productNames;
    this.productsSold = productsSold;
  };
