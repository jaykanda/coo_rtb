'use strict';
var mongojs = require('mongojs');

function getDBConnection(req) {
	return mongojs(req.app.get('COORTB'), ['COORTB_NEWSRDATA']);
}

var srapprovedObj = {};

srapprovedObj.postsrapproved = function(req, res, next) {
   var newSRDATA = getDBConnection(req);
   var dataID = req.body;
   newSRDATA.collection('COORTB_NEWSRDATA').update(
       { _id : mongojs.ObjectId(dataID.id)},
       { $set : 
            { 
                "Status" : {
                    "id" : dataID.status,
                    "url" : "/spendingrequest/veiwapproved"
                    }  
            }
        });
};
module.exports = srapprovedObj;
