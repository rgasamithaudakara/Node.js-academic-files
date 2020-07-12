var fs = require('fs');

fs.appendFile('demofile2.txt', 'Hello world!\n', function(err){
    if (err) throw err;
    console.log("File saved successfully!");
})

