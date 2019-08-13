(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* *\r\n{\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xFIzIFKw.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n} */\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'BlueTasksNG';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loginpage/loginpage.component */ "./src/app/loginpage/loginpage.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _mainpage_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mainpage/header/header.component */ "./src/app/mainpage/header/header.component.ts");
/* harmony import */ var _mainpage_content_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mainpage/content/content.component */ "./src/app/mainpage/content/content.component.ts");
/* harmony import */ var _mainpage_content_task_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mainpage/content/task/task.component */ "./src/app/mainpage/content/task/task.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _mainpage_content_filters_filters_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mainpage/content/filters/filters.component */ "./src/app/mainpage/content/filters/filters.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: '', component: _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_7__["LoginpageComponent"] },
    { path: 'home', component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_8__["MainpageComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_7__["LoginpageComponent"],
                _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_8__["MainpageComponent"],
                _mainpage_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _mainpage_content_content_component__WEBPACK_IMPORTED_MODULE_10__["ContentComponent"],
                _mainpage_content_task_task_component__WEBPACK_IMPORTED_MODULE_11__["TaskComponent"],
                _mainpage_content_filters_filters_component__WEBPACK_IMPORTED_MODULE_13__["FiltersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTreeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/loginpage/loginpage.component.css":
/*!***************************************************!*\
  !*** ./src/app/loginpage/loginpage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes slideInFromTop {\r\n    0% {\r\n      -webkit-transform: translateY(100%);\r\n              transform: translateY(100%);\r\n    }\r\n    /* 90% {\r\n      transform: translateX(+2%);\r\n    } */\r\n    100% {\r\n        -webkit-transform: translateY(50%);\r\n                transform: translateY(50%);\r\n      }\r\n  }\r\n\r\n\r\n@keyframes slideInFromTop {\r\n    0% {\r\n      -webkit-transform: translateY(100%);\r\n              transform: translateY(100%);\r\n    }\r\n    /* 90% {\r\n      transform: translateX(+2%);\r\n    } */\r\n    100% {\r\n        -webkit-transform: translateY(50%);\r\n                transform: translateY(50%);\r\n      }\r\n  }\r\n\r\n\r\n*\r\n{\r\n    \r\n    font-size: 1.2em;\r\n}\r\n\r\n\r\n/* .all\r\n{\r\n    animation: 1s ease-out 0s 1 slideInFromTop;\r\n} */\r\n\r\n\r\n.form\r\n{\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    /* bring your own prefixes */\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    background-color: rgba(139, 139, 139, 0.548);\r\n    height: 500px;\r\n    width: 700px;\r\n    \r\n    /* box-shadow: 0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12); */\r\n}\r\n\r\n\r\n.header\r\n{\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 0;\r\n    height: 20%;\r\n    /* background-color: red; */\r\n    text-align: center;\r\n    padding-top: 30px;\r\n}\r\n\r\n\r\n.area\r\n{\r\n    position: absolute;\r\n    /* background-color: blue; */\r\n    top: 20%;\r\n    height: 80%;\r\n    width: 100%;\r\n}\r\n\r\n\r\nexample-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n\r\n.example-container > * {\r\n    width: 50%;\r\n    left: 25%;\r\n  }\r\n\r\n\r\n.submit\r\n{\r\n    position: absolute;\r\n    bottom: 25%;\r\n}\r\n\r\n\r\n.error\r\n{\r\n    color:red;\r\n    position: absolute;\r\n    bottom: 0;\r\n    text-align: center;\r\n}\r\n\r\n\r\n/* .input\r\n{\r\n    width: 50%;\r\n} */"

/***/ }),

/***/ "./src/app/loginpage/loginpage.component.html":
/*!****************************************************!*\
  !*** ./src/app/loginpage/loginpage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  loginpage works!\n</p> -->\n\n<!-- <div class=\"all\"> -->\n    <div class=\"form mat-elevation-z8\">\n        \n            <div class=\"header\">\n                Hello\n            </div>\n            <div class=\"example-container area\">\n                <mat-form-field>\n                    <input matInput placeholder=\"User\" class=\"input\" [(ngModel)]=\"username\" (input)=\"inputChanged($event)\">\n                </mat-form-field>\n                <br>\n                <button mat-raised-button (click)=\"login()\" color=\"primary\" class=\"submit\" >Check</button> \n                <p class=\"error\">{{err}}</p>     \n            </div>\n    </div>\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/loginpage/loginpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/loginpage/loginpage.component.ts ***!
  \**************************************************/
/*! exports provided: LoginpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginpageComponent", function() { return LoginpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mainpage_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mainpage/user.service */ "./src/app/mainpage/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginpageComponent = /** @class */ (function () {
    function LoginpageComponent(router, http, userservice) {
        this.router = router;
        this.http = http;
        this.userservice = userservice;
        this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
    }
    LoginpageComponent.prototype.ngOnInit = function () {
    };
    // login():void
    // {
    //     this.userservice.set(this.username);
    //     this.router.navigate(["home"]);
    // }
    LoginpageComponent.prototype.login = function () {
        var _this = this;
        var it = this;
        var req = this.http.post('/api/checkuser', {
            "name": this.username,
        })
            .subscribe(function (res) {
            console.log(res);
            if (res.status) {
                _this.userservice.set(_this.username, res.id);
                it.router.navigate(["home"]);
            }
            else {
                it.err = "Invalid user";
            }
        }, function (err) {
            console.log("Error occured+ :: " + err);
            it.err = "Error connecting";
        });
    };
    LoginpageComponent.prototype.inputChanged = function ($event) {
        this.err = "";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginpageComponent.prototype, "form", void 0);
    LoginpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loginpage',
            template: __webpack_require__(/*! ./loginpage.component.html */ "./src/app/loginpage/loginpage.component.html"),
            styles: [__webpack_require__(/*! ./loginpage.component.css */ "./src/app/loginpage/loginpage.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _mainpage_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], LoginpageComponent);
    return LoginpageComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/content/content.component.css":
/*!********************************************************!*\
  !*** ./src/app/mainpage/content/content.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes slideInFromRight {\r\n    0% {\r\n      -webkit-transform: translateX(100%);\r\n              transform: translateX(100%);\r\n    }\r\n    /* 90% {\r\n      transform: translateX(+2%);\r\n    } */\r\n    100% {\r\n        -webkit-transform: translateX(0%);\r\n                transform: translateX(0%);\r\n      }\r\n  }\r\n\r\n\r\n@keyframes slideInFromRight {\r\n    0% {\r\n      -webkit-transform: translateX(100%);\r\n              transform: translateX(100%);\r\n    }\r\n    /* 90% {\r\n      transform: translateX(+2%);\r\n    } */\r\n    100% {\r\n        -webkit-transform: translateX(0%);\r\n                transform: translateX(0%);\r\n      }\r\n  }\r\n\r\n\r\n.content\r\n{\r\n    position: absolute;\r\n    width: 70%;\r\n    left: 30%;\r\n    /* height: 100%; */\r\n    /* padding: 50px; */\r\n    display: flex;\r\n    /* flex-flow: row wrap; */\r\n    flex-direction: column;\r\n    text-align: center;\r\n    justify-content: center;\r\n    -webkit-animation: 1s ease-out 0s 1 slideInFromRight;\r\n            animation: 1s ease-out 0s 1 slideInFromRight;\r\n    /* overflow-y: visible; */\r\n    height: 90%;\r\n    /* background-color: red; */\r\n    padding-left: 25px;\r\n    /* background-color: green; */\r\n}\r\n\r\n\r\n.scrollable\r\n{\r\n    position: relative;\r\n    height: 100%;\r\n    overflow-y: auto;\r\n}\r\n\r\n\r\n.filters\r\n{\r\n    width: 30%;\r\n    /* right: 30%; */\r\n    /* height: 100%; */\r\n    position: absolute;\r\n    height: 100%;\r\n    background-color: rgb(236, 236, 236);\r\n    /* background-color: blue; */\r\n}\r\n\r\n\r\n.spaceout\r\n{\r\n    padding: 30px;\r\n}"

/***/ }),

/***/ "./src/app/mainpage/content/content.component.html":
/*!*********************************************************!*\
  !*** ./src/app/mainpage/content/content.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"filters\">\n    <app-filters [checklist]='checkboxes' [boardlist]='boardlist' (data_labeled)=\"LabelsChanged($event)\" (data_boarded)=\"BoardsChanged($event)\"\n    (time)=\"timeChange($event)\"></app-filters>\n</div>\n<div class=\"content\">\n    <div class=\"scrollable\">\n        <app-task *ngFor=\"let item of filterd_data\" [item]='item' class=\"spaceout\"></app-task>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mainpage/content/content.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/mainpage/content/content.component.ts ***!
  \*******************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.service */ "./src/app/mainpage/content/logic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentComponent = /** @class */ (function () {
    function ContentComponent(logic) {
        this.logic = logic;
        this.filterd_data = [];
        this.checkboxes = [];
        this.boardlist = [];
        this.filterd_data_nodate = [];
        this.filterd_data_yesdate = [];
        this.time = "all";
    }
    ContentComponent.prototype.ngOnInit = function () {
        this.checkboxes = this.logic.buildCheckBoxes(this.data);
        this.boardlist = this.logic.buildBoardList(this.data);
        this.filterd_data = this.data;
        this.datasort();
        this.sortDates();
        // console.log("kjsadjasd "+this.logic.isNext7days(new Date("2019-08-20T09:30")));
    };
    ContentComponent.prototype.datasort = function () {
        for (var i = 0; i < this.filterd_data.length; i++) {
            var date = new Date(this.filterd_data[i].date);
            if (!isNaN(date.getTime())) {
                this.filterd_data[i].date = date.toLocaleString();
            }
            else
                this.filterd_data[i].date = "none";
        }
    };
    ContentComponent.prototype.sortDates = function () {
        this.filterd_data_nodate = [];
        this.filterd_data_yesdate = [];
        for (var i = 0; i < this.filterd_data.length; i++) {
            if (this.filterd_data[i].date == "none") {
                this.filterd_data_nodate.push(this.filterd_data[i]);
            }
            else {
                this.filterd_data_yesdate.push(this.filterd_data[i]);
            }
        }
        this.filterd_data_yesdate.sort(function (b, a) {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        this.filterd_data = this.filterd_data_yesdate.concat(this.filterd_data_nodate);
    };
    ContentComponent.prototype.LabelsChanged = function (data) {
        // let isallunchecked:boolean = this.logic.isAllUnchecked(data);
        // if(!isallunchecked)
        //   this.filterd_data = this.logic.makeData(this.data,data);
        // else
        //   this.filterd_data = this.data;
        // this.sortDates();
        this.checkboxes = data;
        this.updateData();
    };
    ContentComponent.prototype.BoardsChanged = function (data) {
        // let isallunchecked:boolean = this.logic.isAllUnchecked(data);
        // if(!isallunchecked)
        //   this.filterd_data = this.logic.makeData(this.data,data);
        // else
        //   this.filterd_data = this.data;
        // this.sortDates();
        this.boardlist = data;
        this.updateData();
    };
    ContentComponent.prototype.updateData = function () {
        var isalluncheckedFilters = this.logic.isAllUnchecked(this.checkboxes);
        // let isalluncheckedBoards:boolean = this.logic.isAllUnchecked(this.boardlist);
        if (!isalluncheckedFilters)
            this.filterd_data = this.logic.makeData(this.data, this.checkboxes);
        else
            this.filterd_data = this.data;
        var isalluncheckedBoards = this.logic.isAllUnchecked(this.boardlist);
        if (!isalluncheckedBoards)
            this.filterd_data = this.logic.filterBoards(this.filterd_data, this.boardlist);
        this.filterd_data = this.logic.timeFilter(this.filterd_data, this.time);
        this.sortDates();
    };
    ContentComponent.prototype.timeChange = function (time) {
        this.time = time;
        this.updateData();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContentComponent.prototype, "data", void 0);
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/mainpage/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/mainpage/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [_logic_service__WEBPACK_IMPORTED_MODULE_1__["LogicService"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/content/filters/filters.component.css":
/*!****************************************************************!*\
  !*** ./src/app/mainpage/content/filters/filters.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filters {\r\n    position: relative;\r\n   left: -50%;\r\n   float: left;\r\n}\r\n\r\n.wrapper\r\n{\r\n   position: relative;\r\n   left: 50%;\r\n   float: left;\r\n   background-color: red;\r\n}\r\n\r\n.filteroptions\r\n{\r\n    padding: 20px;\r\n    font-size: 1.5em;\r\n    font-display: bold;\r\n    width: 50%;\r\n}\r\n\r\n.item\r\n{\r\n    /* background-color: white; */\r\n    transition-duration: 0.5s;\r\n    margin-top: 10px;\r\n}\r\n\r\n.itemselected\r\n{\r\n    background-color: lightgray;\r\n}\r\n\r\n.item:hover\r\n{\r\n    background-color: lightgray;\r\n}\r\n\r\n.iteminside\r\n{\r\n    \r\n}\r\n\r\n.iteminside:hover\r\n{\r\n    background-color: lightgray;\r\n}\r\n\r\n/* .item:hover\r\n{\r\n    background-color: lightblue;\r\n} */\r\n\r\n.expansion\r\n{\r\n    background-color: rgba(245, 245, 245, 0);\r\n    margin-top: 10px;\r\n}\r\n\r\n.expansiontitle\r\n{\r\n    font-size: 1.5em;\r\n    font-display: bold;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.expansionbody\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n}"

/***/ }),

/***/ "./src/app/mainpage/content/filters/filters.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/mainpage/content/filters/filters.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"wrapper\">\n  <mat-card class=\"mat-elevation-z8 centered filters\" color=\"primary\">\n      <mat-checkbox *ngFor=\"let item of checklist\" [(ngModel)]=\"item.isSelected\" style=\"margin-right: 10px;\" (change)=\"checkBoxClick(item.value,$event.checked)\" color=\"warn\">{{item.value}}</mat-checkbox>\n  </mat-card>\n</div> -->\n\n<!-- mat-elevation-z2 -->\n<div class=\"filteroptions\">\n  <div class=\"item\" (click)=\"timeClick('today')\" [ngClass]=\"{'itemselected':type=='today'}\">\n    <mat-icon>today</mat-icon> Today\n  </div>\n  <div class=\"item\" (click)=\"timeClick('7')\" [ngClass]=\"{'itemselected':type=='7'}\">\n    <mat-icon>event</mat-icon> Next 7 days\n  </div>\n  <div class=\"item\" (click)=\"timeClick('all')\" [ngClass]=\"{'itemselected':type=='all'}\">\n    <mat-icon>date_range</mat-icon> All\n  </div>\n  <!-- <div class=\"item\">\n    <mat-icon>assignment</mat-icon> By board\n  </div> -->\n\n\n  <mat-expansion-panel class=\"expansion mat-elevation-z0\">\n      <mat-expansion-panel-header>\n        <mat-panel-title class=\"expansiontitle\">\n          <mat-icon>assignment</mat-icon> Boards\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n        <div class=\"expansionbody\">\n          <mat-checkbox *ngFor=\"let item of boardlist\" [(ngModel)]=\"item.isSelected\" style=\"margin-right: 10px;\" \n          (change)=\"boardClick(item.value,$event.checked)\" color=\"warn\">{{item.value}}</mat-checkbox>\n        </div>\n  </mat-expansion-panel>\n\n  <!-- <mat-tree class=\"item\">\n      <mat-tree-node> parent node </mat-tree-node>\n      <mat-tree-node> -- child node1 </mat-tree-node>\n      <mat-tree-node> -- child node2 </mat-tree-node>\n  </mat-tree> -->\n\n  <!-- <div class=\"item\">\n    <mat-icon>label</mat-icon> By Label\n  </div> -->\n\n  <mat-expansion-panel class=\"expansion mat-elevation-z0\">\n      <mat-expansion-panel-header>\n        <mat-panel-title class=\"expansiontitle\">\n          <mat-icon>label</mat-icon>  Labels\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n\n        <div class=\"expansionbody\">\n          <mat-checkbox *ngFor=\"let item of checklist\" [(ngModel)]=\"item.isSelected\" style=\"margin-right: 10px;\" \n          (change)=\"filterClick(item.value,$event.checked)\" color=\"warn\">{{item.value}}</mat-checkbox>\n        </div>\n  </mat-expansion-panel>\n\n</div>\n<!-- <mat-divider vertical style=\"height: 1000px\"></mat-divider> -->\n        <!-- <div class=\"iteminside\" *ngFor=\"let item of checklist\" (onclick)=\"checkBoxClick(item.value,$event.checked)\">\n            <mat-icon>label_important</mat-icon> {{item.value}}\n        </div> -->"

/***/ }),

/***/ "./src/app/mainpage/content/filters/filters.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/mainpage/content/filters/filters.component.ts ***!
  \***************************************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic.service */ "./src/app/mainpage/content/logic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FiltersComponent = /** @class */ (function () {
    function FiltersComponent(logic) {
        this.logic = logic;
        this.data_labeled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.data_boarded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.time = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.type = "all";
    }
    FiltersComponent.prototype.ngOnInit = function () {
    };
    FiltersComponent.prototype.filterClick = function (filter, checked) {
        if (checked) {
            this.checklist = this.logic.tickChecklist(this.checklist, filter, true);
            this.data_labeled.emit(this.checklist);
        }
        else {
            this.checklist = this.logic.tickChecklist(this.checklist, filter, false);
            var checkedfilters = this.logic.getCheckedFilters(this.checklist);
            if (checkedfilters.length == 0) {
                this.data_labeled.emit(this.checklist);
            }
            else {
                this.data_labeled.emit(this.checklist);
            }
        }
    };
    FiltersComponent.prototype.boardClick = function (filter, checked) {
        if (checked) {
            this.boardlist = this.logic.tickChecklist(this.boardlist, filter, true);
            this.data_boarded.emit(this.boardlist);
        }
        else {
            this.boardlist = this.logic.tickChecklist(this.boardlist, filter, false);
            var checkedfilters = this.logic.getCheckedFilters(this.boardlist);
            if (checkedfilters.length == 0) {
                this.data_boarded.emit(this.boardlist);
            }
            else {
                this.data_boarded.emit(this.boardlist);
            }
        }
    };
    FiltersComponent.prototype.timeClick = function (type) {
        this.type = type;
        this.time.emit(type);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FiltersComponent.prototype, "checklist", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FiltersComponent.prototype, "boardlist", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FiltersComponent.prototype, "data_labeled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FiltersComponent.prototype, "data_boarded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FiltersComponent.prototype, "time", void 0);
    FiltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filters',
            template: __webpack_require__(/*! ./filters.component.html */ "./src/app/mainpage/content/filters/filters.component.html"),
            styles: [__webpack_require__(/*! ./filters.component.css */ "./src/app/mainpage/content/filters/filters.component.css")]
        }),
        __metadata("design:paramtypes", [_logic_service__WEBPACK_IMPORTED_MODULE_1__["LogicService"]])
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/content/logic.service.ts":
/*!***************************************************!*\
  !*** ./src/app/mainpage/content/logic.service.ts ***!
  \***************************************************/
/*! exports provided: LogicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicService", function() { return LogicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogicService = /** @class */ (function () {
    function LogicService() {
        this.isToday = function (someDate) {
            var today = new Date();
            return someDate.getDate() == today.getDate() &&
                someDate.getMonth() == today.getMonth() &&
                someDate.getFullYear() == today.getFullYear();
        };
    }
    LogicService.prototype.buildCheckBoxes = function (data) {
        var once = true;
        var label;
        // let deadline:string;
        var checklist = [];
        for (var i = 0; i < data.length; i++) {
            // deadline = this.data[i].date;
            for (var j = 0; j < data[i].labels.length; j++) {
                label = data[i].labels[j];
                if (!this.filterExists(checklist, label)) {
                    checklist.push({ value: label, isSelected: false });
                }
            }
            if (data[i].date != "none" && once) {
                once = false;
                checklist.push({ value: "deadline", isSelected: false });
            }
        }
        return checklist;
    };
    LogicService.prototype.filterExists = function (checklist, filter) {
        for (var i = 0; i < checklist.length; i++) {
            if (checklist[i].value == filter) {
                return true;
            }
        }
        return false;
    };
    LogicService.prototype.makeData = function (data, checkedfilters) {
        var currentdata = data;
        var newdata = [];
        var once = true;
        var used_data = [];
        var checked = this.getCheckedFilters(checkedfilters);
        for (var i = 0; i < currentdata.length; i++) {
            for (var k = 0; k < currentdata[i].labels.length; k++) {
                for (var j = 0; j < checked.length; j++) {
                    if (currentdata[i].labels[k] == checked[j]) {
                        if (!this.sameObjectAlreadyThere(newdata, currentdata[i])) {
                            newdata.push(currentdata[i]);
                            used_data.push(true);
                        }
                    }
                }
            }
            console.log(newdata);
            for (var j = 0; j < checked.length; j++) {
                if (currentdata[i].date != "none" && checked[j] == "deadline" && !used_data[i]) {
                    if (!this.sameObjectAlreadyThere(newdata, currentdata[i]))
                        newdata.push(currentdata[i]);
                }
            }
        }
        return newdata;
    };
    LogicService.prototype.filterBoards = function (data, checkedfilters) {
        var currentdata = data;
        var newdata = [];
        var once = true;
        var used_data = [];
        var checked = this.getCheckedFilters(checkedfilters);
        for (var i = 0; i < currentdata.length; i++) {
            for (var j = 0; j < checked.length; j++) {
                if (currentdata[i].board == checked[j]) {
                    if (!this.sameObjectAlreadyThere(newdata, currentdata[i])) {
                        newdata.push(currentdata[i]);
                        used_data.push(true);
                    }
                }
            }
            // for(let j=0; j<checked.length; j++)
            // {
            //   if(currentdata[i].date != "none" && checked[j]=="deadline" && !used_data[i])
            //   {
            //     if(!this.sameObjectAlreadyThere(newdata,currentdata[i]))
            //       newdata.push(currentdata[i]);
            //   }
            // }
        }
        return newdata;
    };
    LogicService.prototype.timeFilter = function (data, time) {
        var newdata = [];
        if (time == "all")
            return data;
        for (var i = 0; i < data.length; i++) {
            if (time == "today") {
                if (this.isToday(new Date(data[i].date))) {
                    newdata.push(data[i]);
                }
            }
            else {
                if (this.isNext7days(new Date(data[i].date))) {
                    newdata.push(data[i]);
                }
            }
        }
        return newdata;
    };
    LogicService.prototype.isNext7days = function (somedate) {
        var today = new Date();
        var inweek = new Date();
        inweek.setDate(today.getDate() + 7);
        return (somedate.getTime() > today.getTime() && somedate.getTime() < inweek.getTime());
    };
    LogicService.prototype.sameObjectAlreadyThere = function (newdata, currentdata) {
        for (var i = 0; i < newdata.length; i++) {
            if (currentdata == newdata[i]) {
                return true;
            }
        }
        return false;
    };
    LogicService.prototype.getCheckedFilters = function (checklist) {
        var checkedfilters = [];
        for (var i = 0; i < checklist.length; i++) {
            if (checklist[i].isSelected) {
                checkedfilters.push(checklist[i].value);
            }
        }
        return checkedfilters;
    };
    LogicService.prototype.tickChecklist = function (checklist, filter, value) {
        for (var i = 0; i < checklist.length; i++) {
            if (checklist[i].value == filter) {
                checklist[i].isSelected = value;
            }
        }
        return checklist;
    };
    LogicService.prototype.isAllUnchecked = function (checklist) {
        for (var i = 0; i < checklist.length; i++) {
            if (checklist[i].isSelected) {
                return false;
            }
        }
        return true;
    };
    LogicService.prototype.buildBoardList = function (data) {
        var board;
        var checklist = [];
        for (var i = 0; i < data.length; i++) {
            board = data[i].board;
            if (!this.filterExists(checklist, board)) {
                checklist.push({ value: board, isSelected: false });
            }
        }
        return checklist;
    };
    LogicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LogicService);
    return LogicService;
}());



/***/ }),

/***/ "./src/app/mainpage/content/task/task.component.css":
/*!**********************************************************!*\
  !*** ./src/app/mainpage/content/task/task.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes float {\r\n\t0% {\r\n\t\tbox-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);\r\n\t\t-webkit-transform: translatey(0px);\r\n\t\t        transform: translatey(0px);\r\n\t}\r\n\t50% {\r\n\t\tbox-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);\r\n\t\t-webkit-transform: translatey(-20px);\r\n\t\t        transform: translatey(-20px);\r\n\t}\r\n\t100% {\r\n\t\tbox-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);\r\n\t\t-webkit-transform: translatey(0px);\r\n\t\t        transform: translatey(0px);\r\n\t}\r\n}\r\n\r\n@keyframes float {\r\n\t0% {\r\n\t\tbox-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);\r\n\t\t-webkit-transform: translatey(0px);\r\n\t\t        transform: translatey(0px);\r\n\t}\r\n\t50% {\r\n\t\tbox-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);\r\n\t\t-webkit-transform: translatey(-20px);\r\n\t\t        transform: translatey(-20px);\r\n\t}\r\n\t100% {\r\n\t\tbox-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);\r\n\t\t-webkit-transform: translatey(0px);\r\n\t\t        transform: translatey(0px);\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes slideInFromLeft2 {\r\n    0% {\r\n      -webkit-transform: translateX(-100%);\r\n              transform: translateX(-100%);\r\n    }\r\n    /* 90% {\r\n      transform: translateX(+2%);\r\n    } */\r\n    100% {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n      }\r\n  }\r\n\r\n@keyframes slideInFromLeft2 {\r\n    0% {\r\n      -webkit-transform: translateX(-100%);\r\n              transform: translateX(-100%);\r\n    }\r\n    /* 90% {\r\n      transform: translateX(+2%);\r\n    } */\r\n    100% {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n      }\r\n  }\r\n\r\n.poop\r\n{\r\n    transition-duration: 0.5s;\r\n    /* animation: 1s ease-out 0s 1 slideInFromLeft2; */\r\n}\r\n\r\n.poop:hover\r\n{\r\n    /* box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2); */\r\n    -webkit-transform: translateY(-5%);\r\n            transform: translateY(-5%);\r\n}\r\n\r\n.task\r\n{\r\n  position: relative;\r\n  width: 45%;\r\n  height: 100px;\r\n  background-color: white;\r\n  margin-top: 20px;\r\n  margin-left: 25px;\r\n  padding: 0;\r\n}\r\n\r\n.header\r\n{\r\n  position: absolute;\r\n  display: flex;\r\n  height: 30%;\r\n  width: 100%;\r\n  background-color: lightgray;\r\n  padding: 0;\r\n  margin: 0;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  font-weight: bold;\r\n}\r\n\r\n.content\r\n{\r\n  position: absolute;\r\n  height: 70%;\r\n  top: 30%;\r\n  padding: 10px;\r\n}\r\n\r\n.datearea\r\n{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.listarea\r\n{\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n.labelarea\r\n{\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.boardarea\r\n{\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n.textarea\r\n{\r\n  position: absolute;\r\n  left: 25%;\r\n  top: 12.5%;\r\n  width: 50%;\r\n  height: 75%;\r\n  /* background-color: red; */\r\n  text-align: left;\r\n}\r\n\r\n.example-card {\r\n    max-width: 400px;\r\n    min-width: 300px;\r\n    transition-duration: 0.5s;\r\n    /* background-color: rgb(240, 240, 240); */\r\n  }\r\n\r\n/* .example-card:hover\r\n{\r\n    box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);\r\n    transform: translateY(-5%);\r\n} */\r\n\r\n/* .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  } */"

/***/ }),

/***/ "./src/app/mainpage/content/task/task.component.html":
/*!***********************************************************!*\
  !*** ./src/app/mainpage/content/task/task.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"poop\">\n  <mat-card class=\"example-card mat-elevation-z8\">\n      <mat-card-header>\n\n        <mat-card-title>{{ item.list }} list</mat-card-title>\n        <mat-card-subtitle>{{ item.board }} board</mat-card-subtitle>\n      </mat-card-header>\n\n      <mat-card-content>\n        <p>\n          {{ item.text }}\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n\n        <mat-card-subtitle>Deadline: {{ item.date }}</mat-card-subtitle>\n        <mat-card-subtitle>Tags: {{ item.labels }}</mat-card-subtitle>\n      </mat-card-actions>\n  </mat-card>\n</div> -->\n\n<div class=\"poop\">\n  <mat-card class=\"task mat-elevation-z8\">\n    <!-- <div class=\"datearea\">\n       Deadline: {{ item.date }}\n    </div>\n    <div class=\"listarea\">\n        List: {{ item.list }}\n    </div>\n    <div class=\"labelarea\">\n        Labels: {{ item.labels }}\n    </div>\n    <div class=\"boardarea\">\n        Board: {{ item.board }}\n    </div>\n    <div class=\"textarea\">\n        {{ item.text }}\n    </div> -->\n    <div class=\"header\">\n      <div>\n        Deadline: {{ item.date }}\n      </div>\n      <div>\n        Labels: {{ item.labels }}\n      </div>\n      <div>\n        List: {{ item.list }}\n      </div>\n      <div>\n        Board: {{ item.board }}\n      </div>\n    </div>\n    <div class=\"content\">\n      {{ item.text }}\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/mainpage/content/task/task.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/mainpage/content/task/task.component.ts ***!
  \*********************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
    }
    TaskComponent.prototype.ngOnInit = function () {
        // console.log(this.item);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TaskComponent.prototype, "item", void 0);
    TaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/mainpage/content/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/mainpage/content/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/mainpage/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .header\r\n{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 15%;\r\n} */\r\n.example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n.title\r\n{\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n.logout\r\n{\r\n    transition-duration: 0.5s;\r\n    font-size: 36px;\r\n    padding: 0;\r\n    margin-bottom: 7.5px;\r\n    margin-right: 7.5px;\r\n}\r\n.logout:hover\r\n{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/mainpage/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/mainpage/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <span>Hello {{ user }}</span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"logout\" (click)=\"logout()\">arrow_back</mat-icon>\n</mat-toolbar>\n\n<!-- <p class=\"title\"> Your tasks: </p> -->"

/***/ }),

/***/ "./src/app/mainpage/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/mainpage/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.router.navigate([""]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "user", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/mainpage/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/mainpage/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.content\r\n{\r\n    overflow: hidden;\r\n}\r\n\r\n.error\r\n{\r\n    text-align:center;\r\n}"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [user]='user'></app-header>\n<app-content *ngIf=\"data.length > 0\" [data]='data' class=\"content\"></app-content>\n<div *ngIf=\"data.length == 0\" class=\"error\">\n    <mat-icon style=\"font-size: 3em; margin-right: 0.5em\">sentiment_dissatisfied</mat-icon>\n    <p style=\"color:red; font-size: 2em\">No data found</p>\n</div>"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/mainpage/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { hostname } from 'os';
var MainpageComponent = /** @class */ (function () {
    function MainpageComponent(userservice, cd) {
        this.userservice = userservice;
        this.cd = cd;
        this.user = "";
        this.data = [];
    }
    MainpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log("hello?");
        // this.userservice.change.subscribe(user => {
        //     this.user = user;
        //     console.log(user);
        // });
        // console.log("??????? "+this.userservice.user);
        this.user = this.userservice.user;
        this.userservice.getData().subscribe(function (data) {
            _this.data = data;
            _this.cd.detectChanges();
            console.log(data);
        });
        //2019-07-07T 9:30:00.0
        // this.data = [{text:"important mission1",list:"a good list",board:"bisli",labels:["general"],date:"2019-08-13T09:30",userid:"2"},
        //              {text:"important mission2",list:"better list",board:"bisli2",labels:["general","meme"],date:"2026-08-12T15:20",userid:"2"},
        //              {text:"important mission3",list:"better list",board:"bisli",labels:["bamba"],date:"none",userid:"2"},
        //              {text:"important mission4",list:"better list",board:"bisli",labels:["meme","test"],date:undefined,userid:"2"},
        //              {text:"important mission5",list:"better list",board:"bisli",labels:["general"],date:"2019-08-17T14:05",userid:"2"},
        //              {text:"make pizza",list:"pro",board:"goodboard",labels:["meme"],date:"2019-08-15T13:05",userid:"2"}];
        // this.data = [{text:"important mission4",list:"better list",board:"bisli",labels:["meme","test"],date:"none",userid:"2"},
        //             {text:"important mission4",list:"better list",board:"bisli",labels:["meme","test"],date:"none",userid:"2"}];
        // console.log(this.data);
        console.log(this.data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.is-open'),
        __metadata("design:type", String)
    ], MainpageComponent.prototype, "user", void 0);
    MainpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainpage',
            template: __webpack_require__(/*! ./mainpage.component.html */ "./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.css */ "./src/app/mainpage/mainpage.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/mainpage/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var host = '';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.user = "";
        this.id = "";
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change2 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserService.prototype.getData = function () {
        return this.http.get(host + '/api/data/' + this.id);
    };
    UserService.prototype.set = function (user, id) {
        this.user = user;
        this.id = id;
        this.change.emit(this.user);
        this.change.emit(this.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UserService.prototype, "change", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UserService.prototype, "change2", void 0);
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Grisha\Desktop\BlueTasksNG\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map