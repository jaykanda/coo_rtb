'use strict';
var express = require('express');
var apprsr_pdfservice = require('./rtb_approvedsrPDF_service');
var apprsrPDFRoutes = express.Router();

apprsrPDFRoutes.post("/api/generatePDF", apprsr_pdfservice.generatePDFReport);
// apprsrPDFRoutes.get("/api/getExportPDF/:pdfFileName", apprsr_pdfservice.exportPDF);
// //apprsrPDFRoutes.get("/api/getDownloadPDF/:pdfFileName", apprsr_pdfservice.getPDF);

module.exports = apprsrPDFRoutes;

