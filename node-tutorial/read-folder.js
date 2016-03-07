
var readFolder = function(folderName){
  fs = require('fs');
  var files = fs.readdirSync(folderName);
  var linesInFiles = [];
  files.forEach(function(fileName){
    var content = fs.readFileSync('./files/week1/' + fileName, "utf8");
    var rows = content.split('\n');
    rows.forEach(function(row){
      linesInFiles.push(row);
    });
  });
  return linesInFiles;
};

exports.linesInFiles = function(folderName){
  var linesInFiles = readFolder(folderName);
  return linesInFiles;
};

exports.linesInFilesAsync = function(folderName, callback){
var linesInFilesAsync = readFolder(folderName);
  return callback(null,linesInFilesAsync);
};
