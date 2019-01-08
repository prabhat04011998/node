var path= require('path');

var name="prabhat sharma";

var newname=name.toUpperCase(name);


global.console.log(`newname ${newname}`);
console.log(__dirname);
console.log(path.basename(__filename));
console.log(path.extname(__filename));

