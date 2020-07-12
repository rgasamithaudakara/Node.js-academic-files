var url = require('url');
var addr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(addr, true);

console.log('\n');
console.log(`host     :- ${q.host}`);
console.log(`port     :- ${q.port}`);
console.log(`pathname :- ${q.pathname}`);
console.log(`search   :- ${q.search}`);
console.log(`slashes  :- ${q.slashes}`);
console.log(`protocol :- ${q.protocol}`);
console.log('\n');

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(`month    :- ${qdata.month}`);
console.log(`year     :- ${qdata.year}`);

console.log('\n');
