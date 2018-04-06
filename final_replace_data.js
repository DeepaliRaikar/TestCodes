
// include file system module
var fs = require('fs');
var XLSX = require('xlsx');
var workbook = XLSX.readFile('L1U1_Teaching Guide for Prepare Mode.xlsx');
// var workbook = XLSX.readFile('test.xlsx');

var sheet_name_list = workbook.SheetNames;
var replace_string  = "";
var initial_row = 3;
var row_data = [" "];
sheet_name_list.forEach(function(y) {
    var worksheet = workbook.Sheets[y];
    worksheet['!rowBreaks'];
    var headers = {};
    var data = [];

    y = y.replace('-', '_').toLowerCase();
    if(y == 'week_1'){
      for(z in worksheet) {
          if(z[0] === '!') continue;
          //parse out the column, row, and value
          var col = z.substring(0,1);
          var row = parseInt(z.substring(1));
          var value = worksheet[z].v;

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

      for(var data_count = 1; data_count <= data.length; data_count++){
        var relative_path = "";
        row_data.shift();
        row_data.push(data[data_count-1]);
        relative_path += "./"+row_data[0]["Main sections"]+"/";
        relative_path += "screen_"+row_data[0]["Screen"].split("/",1)+"/";

        // stringify row_data
        screen_data = JSON.stringify(row_data, null, 2).substr(1).slice(0, -1);
          // creati individual file for specific folder
        fs.writeFile(relative_path+'/test.js', screen_data, 'utf8', function (err) {
           if (err) return console.log(err);
           console.log("file write successful");
        });
      }
      // console.log(JSON.stringify(row_data, null, 2).substr(1).slice(0, -1));


      // Stringify and Pretty print json object
      data = JSON.stringify(data, null, 4);
      row_data = JSON.stringify(row_data, null, 4);
      replace_string = data;

      //console.dir(data, {depth: null, colors: true});
      // append data to file
    }
});
// console.log(replace_string);
//newStr now contains 'StringIWant'

fs.readFile('test.js', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var getFromBetween = {
      results:[],
      string:"",
      getFromBetween:function (sub1,sub2) {
          if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
          var SP = this.string.indexOf(sub1)+sub1.length;
          var string1 = this.string.substr(0,SP);
          var string2 = this.string.substr(SP);
          var TP = string1.length + string2.indexOf(sub2);
          return this.string.substring(SP,TP);
      },
      removeFromBetween:function (sub1,sub2) {
          if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
          var removal = sub1+this.getFromBetween(sub1,sub2)+sub2;
          this.string = this.string.replace(removal,"");
      },
      getAllResults:function (sub1,sub2) {
          // first check to see if we do have both substrings
          if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return;

          // find one result
          var result = this.getFromBetween(sub1,sub2);
          // push it to the results array
          this.results.push(result);
          // remove the most recently found one from the string
          this.removeFromBetween(sub1,sub2);

          // if there's more substrings
          if(this.string.indexOf(sub1) > -1 && this.string.indexOf(sub2) > -1) {
              this.getAllResults(sub1,sub2);
          }
          else return;
      },
      get:function (string,sub1,sub2) {
          this.results = [];
          this.string = string;
          this.getAllResults(sub1,sub2);
          return this.results;
      }
  };

  var file = fs.readFileSync('test.js', "utf8");
  // console.log(file);

  var result = getFromBetween.get(file,'"prepareData":','"preloadData"');
  fs.appendFileSync('test_splitstring.js',result, 'utf8');
  result = file.replace(result, replace_string);
  fs.writeFile('test.js', row_data, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
