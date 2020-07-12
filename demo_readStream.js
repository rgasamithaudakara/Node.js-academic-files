var fs = require('fs');
var rs = fs.ReadStream('./demofile4.txt');

rs.on('open', function(){
    console.log('The file is open');
});


