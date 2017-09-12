var fs = require('fs');
var path = require('path');
var request = require('request');
var myStrUtils = require('./mystrutils.js');

var options = {
    url: 'https://www.cacert.org'
};

request.get(options, (err, res, body) => {
    console.log(`Without CA cert - err: ${err}, body: ${myStrUtils.getBodyDetails(body)}`);

    var caFile = path.resolve(__dirname, 'root.crt'); // Add CA root cert to request
    options.ca = fs.readFileSync(caFile);
    request.get(options, (err, res, body) => {
        console.log(`WITH CA cert - err: ${err}, body: ${myStrUtils.getBodyDetails(body)}`);
    });
});