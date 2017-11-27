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
var core_1 = require('@angular/core');
var HoveredContent = (function () {
    function HoveredContent(elRef) {
        this.elRef = elRef;
    }
    Object.defineProperty(HoveredContent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (op) {
            this._options = op;
        },
        enumerable: true,
        configurable: true
    });
    HoveredContent.prototype.ngAfterContentChecked = function () {
        var toolTipWidth = this.elRef.nativeElement.querySelector('div.ng-tool-tip-content').offsetWidth;
        if (window.innerWidth < (toolTipWidth + this.options.x)) {
            this.options.x = this.options.x - toolTipWidth;
        }
        if (this.options.offset && this.options.offset.x) {
            this.options.x += this.options.offset.x;
        }
        if (this.options.offset && this.options.offset.y) {
            this.options.y += this.options.offset.y;
        }
    };
    HoveredContent = __decorate([
        core_1.Component({
            template: "\n            <div class=\"ng-tool-tip-content\"\n                    [ngClass]=\"options.cls\"\n                    [innerHTML] = \"options.content\"\n                    [style.top.px]=\"options.y\"\n                    [style.left.px]=\"options.x\">\n              </div>\n              ",
            styles: ["\n        .ng-tool-tip-content{\n                z-index : 10;\n                padding: 4px;\n                -moz-border-radius: 3px;\n                -ms-border-radius: 3px;\n                -webkit-border-radius: 3px;\n                border: 1px solid #00864F;\n                color: #FFF;\n                font-size: 12px;\n                text-align: center;\n                background-color: #00864F;\n                position: absolute;  \n                width: 200px; \n            }\n          "]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HoveredContent);
    return HoveredContent;
}());
exports.HoveredContent = HoveredContent;
//# sourceMappingURL=rtb.tooltipcontent.component.js.map