'use strict';
var mongojs = require('mongojs');

function getDBConnection(req) {
	return mongojs(req.app.get('COORTB'), ['COORTB_NEWSRDATA']);
}

var newSRObj = {};

newSRObj.getnewSRData = function(req, res, next) {
   var newSRDATA = getDBConnection(req);
   newSRDATA.collection('COORTB_NEWSRDATA').insert(req.body);
};

module.exports = newSRObj;
