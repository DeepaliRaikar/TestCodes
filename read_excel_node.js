
var fs = require('fs');
var xlsx = require('node-xlsx');

// var array = xlsx.parse(__dirname + '/file_name.xlsx');
var __dirname = '.';
var array = xlsx.parse(__dirname + '/test.xlsx');

var array = xlsx.parse(fs.readFileSync(__dirname + '/test.xlsx'));
var data = {};
function convertToJSON(array) {
  var first = array[0].join()
  var headers = first.split(',');

  var jsonData = [];
  for ( var i = 1; length = array.length; i++ )
  {
    var myRow = array[i].join();
      var row = myRow.split(',');


    for ( var x = 0; x < row.length; x++ )
    {
      data[headers[x]] = row[x];
    }
    jsonData.push(data);

  }
  return jsonData;
};

var importedData = JSON.stringify(convertToJSON(data));
console.log(importedData);
