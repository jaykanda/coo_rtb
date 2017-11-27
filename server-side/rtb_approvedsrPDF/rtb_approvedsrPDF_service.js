'use strict';

var path       = require('path');
var fs         = require('fs');
var srpdffile  = require('./pdfcreation.js');
var pdflocation = __dirname + '/SRPdffiles';

if (!fs.existsSync(pdflocation)){
    fs.mkdirSync(pdflocation);
}

var srPDFgeneration = {};

srPDFgeneration.generatePDFReport = function(req, res, next) {
    console.log('Inside the generate pdf function', JSON.stringify(req.body));
    srpdffile.init(req.body);
    res.download(pdflocation+"/SRPDFreport.pdf");
}
// srPDFgeneration.exportPDF =function(req,res,next) {    
//       var pdfFileName = 'SRPDFReport';
//           var options = {
//               method: 'GET',
//               host: 'localhost',
//               port: '3000',
//               path: '/api/getDownloadPDF/'+pdfFileName
//           };
//           var request = http.request(options, function(response) {
//             var data = [];
    
//             response.on('data', function(chunk) {
//               data.push(chunk);
//             });
    
//             response.on('end', function() {
//               data = Buffer.concat(data);
//               logger.debug('requested content length: ', response.headers['content-length']);
//               logger.debug('parsed content length: ', data.length);
//               res.writeHead(200, {
//                 'Content-Type': 'application/pdf',
//                 'Content-Disposition': 'attachment; filename='+pdfFileName,
//                 'Content-Length': data.length,
//                 'responseType':'arraybuffer'
//               });
//               res.end(data);
//             });
//           });
    
//          request.end();
//     };
// srPDFgeneration.getPDF = function(req,res,next) {
//     var safePdfFileName = "SamplePDF.pdf";
//     res.download(pdflocation +'/'+ safePdfFileName, safePdfFileName);
// };
    
module.exports = srPDFgeneration;
