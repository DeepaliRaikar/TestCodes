
// include file system module
var fs = require('fs');
var XLSX = require('xlsx');
// var workbook = XLSX.readFile('L1U1_Teaching Guide for Prepare Mode.xlsx');
var workbook = XLSX.readFile('test.xlsx');

function convertToJSON(array) {
  var first = array[0].join()
  var headers = first.split(',');

  var jsonData = [];
  for ( var i = 1, length = array.length; i < length; i++ )
  {

    var myRow = array[i].join();
    var row = myRow.split(',');

    var data = {};
    for ( var x = 0; x < row.length; x++ )
    {
      data[headers[x]] = row[x];
    }
    jsonData.push(data);

  }
  return jsonData;
};
