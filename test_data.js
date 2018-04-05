
// include file system module
var fs = require('fs');

const XLSX = require('xlsx');
const xslx_path = "../Deepali/Scholastic/01_Client_Inputs/manuscript/L1/Unit_1/L1U1_Teaching Guide for Prepare Mode.xlsx";
const workbook = XLSX.readFile(xslx_path);
const sheet_name_list = workbook.SheetNames;
const search_variable = "prepareData";


var data = JSON.stringify(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]));
console.log(data.values);
var data1 = "";
var split_lines = 0;
var split_columns = 0;
sheet_name_list.forEach(function(y) {
  const worksheet = y;

  // console.log(worksheet);
  // data1 += y;
  data1 += JSON.stringify(XLSX.utils.sheet_to_json(workbook.Sheets[y]));

});
split_lines = data1.split("},{");
split_columns = data1.split('","'); //split_columns.length-1



fs.readFile("data.js", function(err, content) {

    if (err) throw err;

     console.log(content.indexOf(search_variable)>-1 ? "has string" : "does not have string");

});


// append data to file
fs.appendFile('test.js',data, 'utf8',
    // callback function
    function(err) {
        if (err) throw err;
        // if no error
        console.log("Data is appended to file successfully.")
});
