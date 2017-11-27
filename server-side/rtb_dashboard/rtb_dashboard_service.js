'use strict';
var mongojs = require('mongojs');

function getDBConnection(req) {
	return mongojs(req.app.get('COORTB'), ['COORTB_NEWSRDATA']);
}

var dashboardObj = {};

dashboardObj.getdashboardData = function(req, res, next) {
   var newSRDATA = getDBConnection(req);
   newSRDATA.collection('COORTB_NEWSRDATA').find(function(err,dashboarddata){
        res.json(dashboarddata);
   });
};

module.exports = dashboardObj;
