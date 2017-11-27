'use strict';
var express = require('express');
var dashboard_service = require('./rtb_dashboard_service');
var dashboardRoutes = express.Router();

dashboardRoutes.get("/api/dashboarddata", dashboard_service.getdashboardData);

module.exports = dashboardRoutes;

