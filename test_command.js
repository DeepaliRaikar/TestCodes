// Example Node.js program to append data to file
var fs = require('fs');
var XLSX = require('xlsx');
var workbook = XLSX.readFile('L1U1_Teaching Guide for Prepare Mode.xlsx');
var sheet_name_list = workbook.SheetNames;
var week_name = "week1";
sheet_name_list.forEach(function(y) {
    var worksheet = workbook.Sheets[y];
    var headers = {};
    var data = [];
      console.log(y.replace('-', '_').toLowerCase());
    for(z in worksheet) {
        if(z[0] === '!') continue;
        //parse out the column, row, and value
        var col = z.substring(0,1);
        var row = parseInt(z.substring(1));
        var value = worksheet[z].s;

        //store header names
        if(row == 1) {
            headers[col] = value;
            continue;
        }
        if(!data[row]) data[row]={};

        data[row][headers[col]] = value;

    }
    //drop those first two rows which are empty

    data.shift();
    data.shift();
    // console.log(data);

    // Stringify and Pretty print json object
    data = JSON.stringify(data, null, 4);
    //console.dir(data, {depth: null, colors: true});
    // append data to file
    fs.appendFileSync('test.js',data, 'utf8');
});
