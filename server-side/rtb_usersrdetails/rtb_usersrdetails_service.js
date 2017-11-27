'use strict';
var mongojs = require('mongojs');

function getDBConnection(req) {
	return mongojs(req.app.get('COORTB'), ['COORTB_NEWSRDATA']);
}

var usersrdetailsObj = {};

usersrdetailsObj.getusersrdetailsData = function(req, res, next) {
   var newSRDATA = getDBConnection(req);
   var dataID = req.params.id;
   console.log("dataID ===>", dataID);
   newSRDATA.collection('COORTB_NEWSRDATA').findOne({ _id : mongojs.ObjectId(dataID) },
        function(err,docs){
            res.json(docs);
    });
};

module.exports = usersrdetailsObj;
