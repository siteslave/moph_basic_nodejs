
var os = require('os');
var crypto = require('crypto');
var myModules = require('./myModules');

var moment = require('moment');

var myName = myModules.getName();
console.log(myName);

console.log(moment().format('DD/MM/YYYY'))
console.log(moment().add('10', 'days').format('DD/MM/YYYY'));
// console.log(os.hostname());
// console.log(os.platform())
// console.log(os.arch());
// console.log(os.networkInterfaces());

// var encryptedPass = crypto.createHash('md5')
//   .update('123456').digest('hex');

// console.log(encryptedPass);