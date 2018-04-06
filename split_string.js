
// include file system module
var fs = require('fs');
// const search_variable = "prepareData";
//
// var file = fs.readFileSync('data.js', "utf8");
// var tmpStr  = file.match("prepareData(.*)},");
// console.log(JSON.stringify(tmpStr, null, 2));

 var traverseFileSystem = function (currentPath) {
    console.log(currentPath);
    var files = fs.readdirSync(currentPath);
    for (var i in files) {
       var currentFile = currentPath + '/' + files[i];
       var stats = fs.statSync(currentFile);
       if (stats.isFile()) {
       console.log(currentFile);
       }
      else if (stats.isDirectory()) {
             traverseFileSystem(currentFile);
           }
     }
   };
  traverseFileSystem('./');
