'use strict';
var express = require('express');
var newsr_service = require('./rtb_newsr_service');
var newSRRoutes = express.Router();

newSRRoutes.post("/api/newsrdata", newsr_service.getnewSRData);

module.exports = newSRRoutes;

