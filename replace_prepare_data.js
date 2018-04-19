// include file system module
var fs = require('fs');
// include XLSX to read an excel worksheet
var XLSX = require('xlsx');
var striptags = require('striptags');
var workbook = XLSX.readFile('L1U1_Teaching Guide for Prepare Mode.xlsx');

var sheet_name_list = workbook.SheetNames;
var row_data = [" "];
var replace_string = "";
//
// function replaceAll(str, find, replace) {
//     return str.replace(new RegExp(find, 'g'), replace);
// }

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
    var week = "";

    worksheet_name = worksheet_name.replace('-', '_').toLowerCase();
    week = worksheet_name;

    for(cell_address in worksheet) {
        if(cell_address[0] === '!') continue;
        //parse out the column, row, and value
        var col = cell_address.substring(0,1);
        var row = parseInt(cell_address.substring(1));
        var value = worksheet[cell_address].h;
        var format_value = value;

        if(format_value != undefined && JSON.stringify(format_value).includes("•")){
          var cell_data_list = {};
          var formatted_cell_data_list = "";
          cell_data_list = format_value.split("•");
          cell_data_list.shift();
          cell_data_list.forEach(function(el){
            formatted_cell_data_list += "<li>"+el.trim()+"</li>";
          });
          formatted_cell_data_list = "<ul>"+formatted_cell_data_list+"</ul>";
          formatted_cell_data_list = formatted_cell_data_list.replace(/&#x000d;&#x000a;/g, "<br/>");
          formatted_cell_data_list = formatted_cell_data_list.replace(/<br\/><\/li>/g, "</li>");
          if(formatted_cell_data_list.includes("<br/>")){
            formatted_cell_data_list = formatted_cell_data_list.replace("<br/>", "</li></ul>");
            formatted_cell_data_list = formatted_cell_data_list.replace(new RegExp("</li></ul>"+'$'), "");
          }
          if(formatted_cell_data_list.includes("font-size:10;")){
            formatted_cell_data_list = formatted_cell_data_list.replace(/ style="font-size:10;"/g,"");
          }

          value = formatted_cell_data_list.trim();
        }

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
      var regex_video_data = /\*{1,}/g;
      // Store the Level, unit, section name and screen number to use it in the relative path
      if(row_data[0]["Video"] == undefined || regex_video_data.test(row_data[0]["Video"])){
        row_data[0]["Video"] = [{}];
      }
      if(row_data[0]["TOC Text"].includes(".")){
        var toc_title_text = row_data[0]["TOC Text"].split(".");
        row_data[0]["TOC Text"] = "<b>"+toc_title_text.pop()+"</b>";
        row_data[0]["TOC Text"] = row_data[0]["TOC Text"].replace("</span>","");

      }


      var level_name = row_data[0]["Level"].toLowerCase();
      var level = level_name.substring(0,1);
      level_name = level_name.replace(level, "level_");

      var unit_name = row_data[0]["Unit"].toLowerCase();
      var unit = unit_name.substring(0,1);
      unit_name = unit_name.replace(unit, "unit_");

      // Store the Section name to use it in the relative path
      var section_name = row_data[0]["Main sections"].replace('-', '_').toLowerCase();
      //Store the Screen number to use it in the relative path
      var screen_num = row_data[0]["Screen"].split("/",1);

      var tocTitle_key = "tocTitle",
          learningObjectives_key = "learningObjectives",
          studentEngagement_key = "studentEngagement",
          teachingProcedure_key = "teachingProcedure",
          videoData_key = "videoData";
          // itext_key = "itext";

      /* Relative path of the data.js looks something like this - level_name/unit_name/week/section_name/screen_num/data.js
       i.e. level_1/unit_1/week_1/phonics/screen_1/data.js */
      relative_path += "./"+level_name+"/"+unit_name+"/"+week+"/"+section_name+"/"+"screen_"+screen_num+"/";

      /* fs.existsSync(path){
             Do something if the file exists
         } */
      if (fs.existsSync(relative_path+"data.js")) {
          var file = fs.readFileSync(relative_path+'data.js', "utf8");
          var mapObj = {
             "TOC Text":tocTitle_key,
             "Learning Objectives":learningObjectives_key,
             "Student Engagement":studentEngagement_key,
             "Teaching Procedure":teachingProcedure_key,
             "Video":videoData_key,
             "<b>": "<span class='boldStyle'>",
             "</b>": "</span>",
             "<i>": "<span class='italicStyle'>",
             "</i>": "</span>",
             "<br/></li>": "</li>"

          };
          var removeObjectProperties = function(obj, props) {
              for(var i = 0; i < props.length; i++) {
                  if(obj.hasOwnProperty(props[i])) {
                      delete obj[props[i]];
                  }
              }
          };

          // Discard the columns which are not required
          removeObjectProperties(row_data[0], ["Main sections", "Week", "Screen", "Level", "Unit", "Instruction Text"]);

          // Stringify row_data
          screen_data = JSON.stringify(row_data, null, 2).substr(1).slice(0, -1).trim()+",";
          screen_data = screen_data.replace(/<\/span><\/span>/g, "</span>");


          screen_data = striptags(screen_data, ['b', 'u', 'i', 'li', 'br','span']);
          screen_data = screen_data.replace(/TOC Text|Learning Objectives|Student Engagement|Teaching Procedure|Video|<b>|<\/b>|<i>|<\/i>|<br\/><\/li>/gi, function(matched){
            return mapObj[matched];
          });
          // screen_data = screen_data.replace("&#x000d;&#x000a;", "<br/>");
          // screen_data = replaceAll(screen_data, "&#x000d;&#x000a;", "<br/>");
          screen_data = screen_data.replace(/&#x000d;&#x000a;/g, "<br/>");
          // screen_data = screen_data.replace(/<br\/><\/li>/g, "</li>");
          screen_data = screen_data.replace(/<\/span><\/span>/g, "</span>");


          //Remove all <br/> before </li>


          // screen_data = screen_data.replace(/<b>/g, "<span class='boldStyle'>");
          // screen_data = screen_data.replace(/<\/b>/g, "</span>");
          // screen_data = screen_data.replace("&#x000d;&#x000a;", "<br />");
          screen_data += "\r\n  // ===== preloadData data object contains data used for preloading ====== //\r\n\t";
          replace_string = screen_data;
          // console.log(replace_string);

          // Fetch the string to be replaced from '"prepareData":' to '"preloadData"'
          var string_to_replace = getFromBetween.get(file,'"prepareData":','"preloadData"');
          // Replace and update the string
          result = file.replace(string_to_replace, replace_string);
          // result = result.replace("&#x000d;&#x000a;", "<br/>");

          // Update in the data file
          fs.writeFile(relative_path+'data.js', result, 'utf8', function (err) {
            if (err) return console.log(err);
          });
      }else{
        console.log("Data.js file missing for "+relative_path);
      }
    }
});
