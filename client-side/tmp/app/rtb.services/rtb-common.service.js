"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/catch';
require('rxjs/add/operator/map');
var RESTServiceCall = (function () {
    function RESTServiceCall(http) {
        this.http = http;
    }
    RESTServiceCall.prototype.restServiceCall = function (url, method, data, id) {
        if (method == "get") {
            var fullUrl = url + "/" + id;
            if ((id == "" || id == null) && (data == "" || data == null)) {
                console.log("from common service get call..");
                return this.http.get(url).map(function (res) { return res.json(); });
            }
            else if (data == "" || data == null) {
                console.log("from common service get call from else part...");
                return this.http.get(fullUrl).map(function (res) { return res.json(); });
            }
        }
        else if (method == "post") {
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            var options = new http_1.RequestOptions({ headers: headers });
            var body = new http_1.URLSearchParams();
            body.append('', JSON.stringify(data));
            return this.http.post(url, data, options).map(function (res) { return res.json(); }).subscribe();
        }
        else if (method == "put") {
            var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
            var options = new http_1.RequestOptions({ headers: headers });
            var body = new http_1.URLSearchParams();
            body.append('', JSON.stringify(data));
            return this.http.put(url, body, options).map(function (res) { return res.json(); });
        }
        else if (method == "delete") {
            return this.http.delete(url + "/" + id).map(function (res) { return res.json(); });
        }
    };
    RESTServiceCall = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RESTServiceCall);
    return RESTServiceCall;
}());
exports.RESTServiceCall = RESTServiceCall;
