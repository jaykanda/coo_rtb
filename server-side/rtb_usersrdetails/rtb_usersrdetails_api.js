'use strict';
var express = require('express');
var usersrdetails_service = require('./rtb_usersrdetails_service');
var usersrdetailsRoutes = express.Router();

usersrdetailsRoutes.get("/api/usersrdetails/:id", usersrdetails_service.getusersrdetailsData);

module.exports = usersrdetailsRoutes;

