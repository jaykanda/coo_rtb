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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var utils_module_1 = require('../utils.module/utils.module');
var rtb_grid_search_service_1 = require('../rtb.services/rtb-grid-search.service');
var rtb_grid_service_1 = require('../rtb.services/rtb-grid.service');
var rtb_erf_tooltip_service_1 = require('../rtb.services/rtb-erf-tooltip.service');
var rtb_common_service_1 = require("../rtb.services/rtb-common.service");
var rtb_new_sr_service_1 = require("../rtb.services/rtb-new-sr.service");
var rtb_viewsr_service_1 = require("../rtb.services/rtb-viewsr.service");
var rtb_dashboard_service_1 = require('../rtb.services/rtb-dashboard.service');
var rtb_engageview_service_1 = require('../rtb.services/rtb-engageview.service');
var rtb_approvedview_service_1 = require('../rtb.services/rtb-approvedview.service');
var rtb_pregcmc_sr_component_1 = require("../rtb.components/rtb-pregcmc-sr.component");
var rtb_grid_component_1 = require('../rtb.components/rtb-grid.component');
var rtb_dashboard_component_1 = require('../rtb.components/rtb-dashboard.component');
var rtb_prn_component_1 = require('../rtb.components/rtb-prn.component');
var rtb_new_sr_component_1 = require('../rtb.components/rtb-new-sr.component');
var rtb_view_sr_component_1 = require('../rtb.components/rtb-view-sr.component');
var rtb_engviewer_component_1 = require('../rtb.components/rtb-engviewer.component');
var rtb_tooltipcontent_component_1 = require('../rtb.components/rtb.tooltipcontent.component');
var rtb_tooltip_component_1 = require('../rtb.components/rtb.tooltip.component');
var rtb_new_srdynstakefields_component_1 = require('../rtb.components/rtb-new-srdynstakefields.component');
var rtb_resolve_sr_component_1 = require('../rtb.components/rtb-resolve-sr.component');
var rtb_renew_sr_component_1 = require('../rtb.components/rtb-renew-sr.component');
var rtb_approved_sr_component_1 = require('../rtb.components/rtb-approved-sr.component');
var test_component_1 = require('../rtb.components/test.component');
var rtb_grid_search_pipe_1 = require("../rtb.pipes/rtb-grid-search.pipe");
var routes = [
    { path: 'spendingrequest/test', component: test_component_1.TestComponent },
    { path: 'spendingrequest/pregcmc', component: rtb_pregcmc_sr_component_1.RTBPreGCMCSRComponent },
    { path: 'spendingrequest/veiwapproved', component: rtb_approved_sr_component_1.RTBApprovedSRComponent },
    { path: 'spendingrequest/veiwapproved/:id', component: rtb_approved_sr_component_1.RTBApprovedSRComponent },
    { path: 'spendingrequest/renew', component: rtb_renew_sr_component_1.RTBRenewSRComponent },
    { path: 'spendingrequest/resolve', component: rtb_resolve_sr_component_1.RTBResolveSRComponent },
    { path: 'spendingrequest/view/:id', component: rtb_view_sr_component_1.RTBViewSRComponent },
    { path: 'spendingrequest/new', component: rtb_new_sr_component_1.RTBNewSRComponent },
    { path: 'spendingrequest/prn', component: rtb_prn_component_1.RTBPrnComponent },
    { path: 'spendingrequests', component: rtb_grid_component_1.RTBGridComponent },
    { path: 'engagementsr/view', component: rtb_grid_component_1.RTBGridComponent },
    { path: 'engviewsr/view/:id', component: rtb_engviewer_component_1.RTBEngageviewSRComponent },
    { path: 'dashboard', component: rtb_dashboard_component_1.RTBDashboardComponent },
];
var RTBModule = (function () {
    function RTBModule() {
    }
    RTBModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forChild(routes),
                http_1.HttpModule,
                forms_1.FormsModule,
                utils_module_1.UtilsModule, forms_1.FormsModule, forms_1.ReactiveFormsModule
            ],
            exports: [
                rtb_dashboard_component_1.RTBDashboardComponent,
                rtb_prn_component_1.RTBPrnComponent,
                rtb_new_sr_component_1.RTBNewSRComponent,
                rtb_grid_component_1.RTBGridComponent,
                rtb_view_sr_component_1.RTBViewSRComponent,
                rtb_grid_search_pipe_1.RTBGridSearchPipe,
                rtb_tooltip_component_1.ToolTipComponent,
                rtb_resolve_sr_component_1.RTBResolveSRComponent,
                rtb_renew_sr_component_1.RTBRenewSRComponent,
                rtb_approved_sr_component_1.RTBApprovedSRComponent,
                rtb_pregcmc_sr_component_1.RTBPreGCMCSRComponent,
                rtb_engviewer_component_1.RTBEngageviewSRComponent,
                test_component_1.TestComponent
            ],
            declarations: [
                rtb_dashboard_component_1.RTBDashboardComponent,
                rtb_prn_component_1.RTBPrnComponent,
                rtb_new_sr_component_1.RTBNewSRComponent,
                rtb_grid_component_1.RTBGridComponent,
                rtb_view_sr_component_1.RTBViewSRComponent,
                rtb_grid_search_pipe_1.RTBGridSearchPipe,
                rtb_tooltipcontent_component_1.HoveredContent,
                rtb_tooltip_component_1.ToolTipComponent,
                rtb_new_srdynstakefields_component_1.DynStakeHolderFieldsComponent,
                rtb_resolve_sr_component_1.RTBResolveSRComponent,
                rtb_renew_sr_component_1.RTBRenewSRComponent,
                rtb_approved_sr_component_1.RTBApprovedSRComponent,
                rtb_pregcmc_sr_component_1.RTBPreGCMCSRComponent,
                rtb_engviewer_component_1.RTBEngageviewSRComponent,
                test_component_1.TestComponent
            ],
            entryComponents: [rtb_tooltipcontent_component_1.HoveredContent],
            providers: [
                rtb_grid_search_service_1.RTBGridSearchService,
                rtb_grid_service_1.RTBGridService,
                rtb_common_service_1.RESTServiceCall,
                rtb_new_sr_service_1.RTBNewRequestService,
                rtb_viewsr_service_1.RTBViewSRDetailsService,
                rtb_erf_tooltip_service_1.RTBTooltipService,
                rtb_dashboard_service_1.RTBGridDashBoardService,
                rtb_engageview_service_1.RTBEngageviewService,
                rtb_approvedview_service_1.RTBApprovedViewSRDetailsService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], RTBModule);
    return RTBModule;
}());
exports.RTBModule = RTBModule;
//# sourceMappingURL=rtb.module.js.map