'use strict';
var mongojs = require('mongojs');

function getDBConnection(req) {
	return mongojs(req.app.get('COORTB'), ['COORTB_NEWSRDATA']);
}

var gridViewallObj = {};

gridViewallObj.gridViewalldata = function(req, res, next) {
   var newSRDATA = getDBConnection(req);
   newSRDATA.collection('COORTB_NEWSRDATA').find(function(err,griddata){
        res.json(griddata);
   });
};

module.exports = gridViewallObj;
