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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var rtb_erf_tooltip_service_1 = require('../rtb.services/rtb-erf-tooltip.service');
var rtb_tooltipcontent_component_1 = require('../rtb.components/rtb.tooltipcontent.component');
var ToolTipComponent = (function () {
    function ToolTipComponent(_componentFactoryResolver, _viewContainerRef, _renderer, _document, toolTipservice) {
        var _this = this;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._document = _document;
        this.toolTipservice = toolTipservice;
        this.beforeShow = new core_1.EventEmitter();
        this.show = new core_1.EventEmitter();
        this.beforeHide = new core_1.EventEmitter();
        this.hide = new core_1.EventEmitter();
        /** set it to true, which will show tooltip on click */
        this.showOnClick = false;
        this.autoShowHide = true;
        this.tooltipData = [];
        this.toolTipservice.getRTBTooltipData().subscribe(function (result1) {
            _this.tooltipData = result1;
            _this.outputEmitcontent = _this.tooltipData[_this.content];
        });
    }
    ToolTipComponent.prototype.onMouseHover = function (event) {
        if (!this.autoShowHide || this.showOnClick) {
            return;
        }
        this.buildTooltip(event);
    };
    ToolTipComponent.prototype.onClick = function (event) {
        if (!this.autoShowHide || !this.showOnClick) {
            return;
        }
        this.buildTooltip(event);
    };
    ToolTipComponent.prototype.showTooltip = function (options) {
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(rtb_tooltipcontent_component_1.HoveredContent);
        this.contentCmpRef = this._viewContainerRef.createComponent(componentFactory);
        this.beforeShow.emit(this);
        this._document.querySelector('body').appendChild(this.contentCmpRef.location.nativeElement);
        this.contentCmpRef.instance.options = options;
        this.show.emit(this);
    };
    ToolTipComponent.prototype.buildTooltip = function (event) {
        var options = {
            content: this.outputEmitcontent,
            outputEmitcontent: this.outputEmitcontent,
            cls: this.ngToolTipClass,
            x: event.clientX,
            y: event.clientY + window.scrollY,
            offset: this.tooltipDisplayOffset
        };
        this.showTooltip(options);
    };
    ToolTipComponent.prototype.hideTooltip = function () {
        if (this.contentCmpRef) {
            this.beforeHide.emit(this);
            this.contentCmpRef.destroy();
            this.hide.emit(this);
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ToolTipComponent.prototype, "beforeShow", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ToolTipComponent.prototype, "show", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ToolTipComponent.prototype, "beforeHide", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ToolTipComponent.prototype, "hide", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ToolTipComponent.prototype, "content", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ToolTipComponent.prototype, "ngToolTipClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ToolTipComponent.prototype, "tooltipDisplayOffset", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ToolTipComponent.prototype, "showOnClick", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ToolTipComponent.prototype, "autoShowHide", void 0);
    ToolTipComponent = __decorate([
        core_1.Directive({
            selector: '[tooltip]',
            host: {
                '(mouseover)': 'onMouseHover($event)',
                '(click)': 'onClick($event)',
                '(mouseleave)': 'hideTooltip()'
            }
        }),
        __param(3, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, core_1.ViewContainerRef, core_1.Renderer, Object, rtb_erf_tooltip_service_1.RTBTooltipService])
    ], ToolTipComponent);
    return ToolTipComponent;
}());
exports.ToolTipComponent = ToolTipComponent;
