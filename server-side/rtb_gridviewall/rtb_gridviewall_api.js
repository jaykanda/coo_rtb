'use strict';
var express = require('express');
var gridviewall_service = require('./rtb_gridviewall_service');
var gridviewallRoutes = express.Router();

gridviewallRoutes.get("/api/gridsrdata", gridviewall_service.gridViewalldata);

module.exports = gridviewallRoutes;

