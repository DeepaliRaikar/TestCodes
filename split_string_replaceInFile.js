
// include file system module
var fs = require('fs');

// include XLSX to read an excel worksheet
var XLSX = require('xlsx');
var workbook = XLSX.readFile('LU_Teaching Guide for Prepare Mode.xlsx');

var sheet_name_list = workbook.SheetNames;
var row_data = [" "];
var replace_string = "";

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
sheet_name_list.forEach(function(worksheet_name) {
    var worksheet = workbook.Sheets[worksheet_name];
    worksheet['!rowBreaks'];
    var headers = {};
    var data = [];
    var column_count = 0;


    worksheet_name = worksheet_name.replace('-', '_').toLowerCase();
    if(worksheet_name == 'week_1'){
      for(z in worksheet) {
          column_count += 1;
          if(z[0] === '!') continue;
          //parse out the column, row, and value
          var col = z.substring(0,1);
          var row = parseInt(z.substring(1));

          if(col == 'A'){
            column_count = 0;
          }

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
        // Store the Level name to use it in the relative path
        var section_name = row_data[0]["Level"].toLowerCase();
        var unit_name = row_data[0]["Unit"].toLowerCase();
        if(section_name == "l1")
          section_name = "level_1";
        else if(section_name == "l2")
          section_name = "level_2";
      
        // Store the Section name to use it in the relative path
        var section_name = row_data[0]["Main sections"].replace('-', '_').toLowerCase();
        //Store the Screen number to use it in the relative path
        var screen_num = row_data[0]["Screen"].split("/",1);


        relative_path += "./"+section_name+"/"+"screen_"+screen_num+"/";
        delete row_data[0]["Main sections"];
        delete row_data[0]["Week"];
        delete row_data[0]["Screen"];
        // delete row_data[0]["Level"];
        // delete row_data[0]["Unit"];

        // Stringify row_data
        screen_data = JSON.stringify(row_data, null, 2).substr(1).slice(0, -1).trim()+",";
        screen_data += "\r\n  // ===== preloadData data object contains data used for preloading ====== //\r\n\t";

        replace_string = screen_data;

        var file = fs.readFileSync(relative_path+'data.js', "utf8");

        // Fetch the string to be replaced from '"prepareData":' to '"preloadData"'
        var string_to_replace = getFromBetween.get(file,'"prepareData":','"preloadData"');
        // Replace and update the string
        result = file.replace(string_to_replace, replace_string);


        // Update in the data file
        fs.writeFile(relative_path+'data.js', result, 'utf8', function (err) {
           if (err) return console.log(err);
        });
      }
  }
});
