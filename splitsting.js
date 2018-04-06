
// include file system module
var fs = require('fs');
const search_variable = "prepareData";
// fs.readFile("data.js", function(err, content) {
//     if (err) throw err;
//      console.log(content.indexOf(search_variable)>-1 ? "has string" : "does not have string");
// });
// let rawdata = fs.readFileSync('data.js');
// console.log(rawdata.toString());
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
var Str = 'MyLongString:StringIWant;';
var result = getFromBetween.get(file,'"prepareData":',"preloadData");
// var tmpStr  = Str.match(":(.*);");
// var tmpStr  = file.match('"prepareData":(.*)');
// var newStr = tmpStr[1];
console.log(file.replace(result, " ");
fs.appendFileSync('test_splitstring.js',result, 'utf8');
//newStr now contains 'StringIWant'
