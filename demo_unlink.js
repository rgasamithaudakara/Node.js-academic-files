var fs = require('fs');

fs.unlink('demofile4.txt', function (err){
    if (err) throw err;
    console.log('demofile4.txt has been deleted successfully.')
})