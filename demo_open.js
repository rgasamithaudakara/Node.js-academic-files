var fs = require('fs');

fs.open('demofile3.txt', 'w', function(err,file){
    if (err) throw err;
    console.log('demofile3.txt saved successfully!');
});