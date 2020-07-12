var fs = require('fs');

fs.writeFile('demofile4.txt', 'Hello world! This is a new method.', function(err){
    if(err) throw err;
    console.log('New file from new method saved successfully!');
});