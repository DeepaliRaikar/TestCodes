var striptags = require('striptags');

var html =
    '<a href="https://example.com">' +
        'lorem <span style="font-weight: bold;">ipsum</span> <strong>dolor</strong> <em>sit</em> amet' +
    '</a>';

// console.log(striptags(html));
// console.log(striptags(html, '<span>', '<div>'));
// console.log(striptags(html, ['a']));
// console.log(striptags(html, [], '\n'));

var data = "<ul><li>Develop concept of print and associated skills<br/></li><li>Match (spoken) text to respective pages of the"+ "story&#x000d;&#x000a;</li><li>Arrange sentences by matching written words</li></ul>"+
"<ul><li>Whole class production&#x000d;&#x000a;</li><li><b>Group</b> and individual productoin</li></ul>the grey words, then have students repeat the sentence"+ "(point to the words as students say them).<br/></li><li>Ask students: 'What is the first word in the sentence?'.<br/></li><li>Encourage all students to"+ "respond, then invite one student to come the board and drag the word.<br/></li><li>Repeat for all words.<br/></li><li>When complete, tap"+ "<b>NEXT</b> for a different page from the story.<br/></li></ul>";
// console.log(data+"\r\n\r\n");
// var new_data = replaceAll(data, '&#x000d;&#x000a;', '<br/>');
new_data = replaceAll(data, "<br/></li>", '</li>');
// console.log(new_data);
// console.log(data.replace(/<br\/><\/li>/g, "</li>"));
// console.log(data.match(/<b>(.*?)<\/b>/g));
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}
var str = "<b class='bold'>Bob</b>, I'm <b class='bold'>20</b> years old, I like <b>programming</b>.";

if(str.includes("class='bold'")){
  var result = str.match(/<b (.*?)<\/b>/g).map(function(val){
     val = str.replace(/<\/?b>/g,'</span>');
     console.log(str.replace(/<b (.*?)/g,'<span '));
     console.log("\r\n\r\n"+ str);
  });
}


// console.log(result);
