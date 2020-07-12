var fs = require('fs');

fs.rename('demofile5renamed.txt', 'demofile4.txt', function(err){
    if (err) throw err;
    console.log("File is renamed!")
})
