'use strict';
var express = require('express');
var srapproved_service = require('./rtb_srapproved_service');
var srapprovedRoutes = express.Router();

srapprovedRoutes.post("/api/approvedsrstatus", srapproved_service.postsrapproved);

module.exports = srapprovedRoutes;

