'use strict';

var PDF = require('pdfkit');
var request = require("request");
var fs = require('fs');
var pdflocation = __dirname + '/SRPdffiles';
var doc;
var width = 450;

console.log('__dirname ===============>', __dirname);


var srpdffile = function() {
};

srpdffile.prototype.generatepdf = function(data) {
    doc.moveDown();
 
    doc.fill("#000000").fontSize(14).text("Approved Details of " + data.RequestTitle);
    doc.moveDown();
    doc.fill("#000000").fontSize(14).text("About Spend Request");
    doc.moveDown();
    doc.fill("#868686").fontSize(11).text("Amount Spend : " + data.AmountToSpend.Name);
    doc.fill("green").fontSize(11).text("Status : " + data.Status.id);
    doc.moveDown();
    doc.fill("#000000").fontSize(14).text("Request stake holder details");
    doc.moveDown();
    doc.fill("#868686").fontSize(11).text("Division Name : " + data.Division.Name);
    doc.fill("#868686").fontSize(11).text("Business Unit : " + data.BusinessUnit.Name);
    doc.fill("#868686").fontSize(11).text("HOS : " + data.HeadOfSystem.Name);
    doc.fill("#868686").fontSize(11).text("Requestor Name : " + data.Requestor.Name);
    doc.fill("#868686").fontSize(11).text("Requestor Email : " + data.Requestor.Email);
    doc.fill("#868686").fontSize(11).text("Requestor Contact Number : " + data.Requestor.ContactNumber);    
    doc.fill("#868686").fontSize(11).text("AMI : " + data.AMIPartnerEngaged.Name);
    doc.fill("#868686").fontSize(11).text("CIO : " + data.CIOContactEngaged.Name);
    doc.fill("#868686").fontSize(11).text("TAG : " + data.TechnologyAcquisitionGatePresenter.Name);
    doc.fill("#868686").fontSize(11).text("TAC : " + data.TACPresenter.Name);
    doc.fill("#868686").fontSize(11).text("TAG : " + data.GCMCPresenter.Name);
    doc.fill("#868686").fontSize(11).text("Cost forum presenter : " + data.CostForumPresenter.Name);
    doc.fill("#868686").fontSize(11).text("VAT : " + data.Vat);
    doc.fill("#868686").fontSize(11).text("Total Amount (Inclusive of VAT%) : " + data.TotalVatAmount);
    doc.fill("#868686").fontSize(11).text("Total Spend Amount : " + data.TotalSpendAmount);  
    doc.moveDown();
    doc.fill("#868686").fontSize(11).text("Answer 1 " + data.ItemQuestion1);  
    doc.moveDown();
    doc.fill("#868686").fontSize(11).text("Answer 2 " + data.ItemQuestion2);  
    doc.moveDown();
    doc.fill("#868686").fontSize(11).text("Answer 3 " + data.ItemQuestion3);  
    doc.moveDown();
    doc.fill("#868686").fontSize(11).text("Answer 4 " + data.ItemQuestion4);  
    doc.moveDown();
    doc.fill("#868686").fontSize(11).text("Answer 5 " + data.ItemQuestion5);  
    doc.moveDown();
    doc.fill("#000000").fontSize(14).text("Sourcing");
    doc.moveDown();
    doc.fill("#868686").fontSize(11).text("Sourcing Contact Engaged : " + data.SourcingContactEngaged.Name);
    doc.fill("#868686").fontSize(11).text("Spend Type : " + data.SpendType.Name);
    doc.fill("#868686").fontSize(11).text("Pricing Terms : " + data.PricingTerms.Name);
    doc.fill("#868686").fontSize(11).text("Online Suppier : " + data.BuyingOnlineSupplier.Name);
    doc.fill("#868686").fontSize(11).text("Manufacturer : " + data.Manufacturer);
    doc.fill("#868686").fontSize(11).text("Annual Maintenance Cost % : " + data.AMC);    
    doc.fill("#868686").fontSize(11).text("Does this request include an element of RPI?  " + data.RPIQuestion);
    doc.fill("#868686").fontSize(11).text("Is there a clause allowing third party ownership of Intellectual Property Rights where development work has been funded by LBG?  " + data.LBGQuestion);
    doc.fill("#868686").fontSize(11).text("Is this for a Tier A application? If so does the supplier adhere to necessary service levels? If it is not a Tier A application please enter N/A " + data.TierAQuestion);

    doc.moveDown();
    doc.fill("#000000").fontSize(14).text("Finance");
    doc.moveDown();
    doc.fill("#868686").fontSize(11).text("Finance Contact Engaged : " + data.FinanceContactEngaged.Name);
    doc.fill("#868686").fontSize(11).text("Project : " + data.Project.Name);
    doc.fill("#868686").fontSize(11).text("Programme Title : " + data.ProgrammeTitle.Name);
    doc.fill("#868686").fontSize(11).text("Budget Type : " + data.BudgetType);
    doc.fill("#868686").fontSize(11).text("Budget Subtype : " + data.BudgetSubtype);
    doc.fill("#868686").fontSize(11).text("Cost Centre : " + data.CostCentre);
    doc.fill("#868686").fontSize(11).text("PRN : " + data.PRN);
    doc.fill("#868686").fontSize(11).text("Spend GLCode : " + data.SpendGLCode);
    doc.fill("#868686").fontSize(11).text("WBS Validation Check : " + data.WBSValidation);

    doc.moveDown();
    doc.fill("#000000").fontSize(14).text("Financial Information");
    doc.moveDown();
    doc.fill("#868686").fontSize(11).text("Financial Summary : " + data.FinancialSummary);
    doc.moveDown();
    doc.fill("#868686").fontSize(11).text("Answer 1 " + data.FinanceQuestion1);  
    doc.moveDown();
    doc.fill("#868686").fontSize(11).text("Answer 2 " + data.FinanceQuestion2);  
    doc.moveDown();
    doc.fill("#868686").fontSize(11).text("Answer 3 " + data.FinanceQuestion3);  
    doc.moveDown();
    doc.fill("#868686").fontSize(11).text("Answer 4 " + data.FinanceQuestion4);  
    doc.moveDown();
    doc.fill("#868686").fontSize(11).text("Answer 5 " + data.FinanceQuestion5);  
    doc.moveDown();
 
    doc.end();
    //return this.pdfkitCallback();
}

srpdffile.prototype.init = function(data) {

    //this.pdfkitCallback = callback;
    doc = new PDF(); //creating a new PDF object
    doc.pipe(fs.createWriteStream(pdflocation + "/SRPDFreport.pdf"));
    this.generatepdf(data);
}
module.exports = new srpdffile();
