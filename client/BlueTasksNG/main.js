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

module.exports = "/* *\r\n{\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xFIzIFKw.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n} */\r\n\r\nbody\r\n{\r\n  background-color: whitesmoke;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
        this.title = 'Blue Tasks';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
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
/* harmony import */ var _mainpage_content_search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mainpage/content/search/search.component */ "./src/app/mainpage/content/search/search.component.ts");
/* harmony import */ var _mainpage_content_taskbetter_taskbetter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mainpage/content/taskbetter/taskbetter.component */ "./src/app/mainpage/content/taskbetter/taskbetter.component.ts");
/* harmony import */ var _mainpage_content_taskbetter2_taskbetter2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mainpage/content/taskbetter2/taskbetter2.component */ "./src/app/mainpage/content/taskbetter2/taskbetter2.component.ts");
/* harmony import */ var _mainpage_content_biranplace_biranplace_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mainpage/content/biranplace/biranplace.component */ "./src/app/mainpage/content/biranplace/biranplace.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: 'deprecated', component: _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_7__["LoginpageComponent"] },
    { path: '', component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_8__["MainpageComponent"] },
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
                _mainpage_content_filters_filters_component__WEBPACK_IMPORTED_MODULE_13__["FiltersComponent"],
                _mainpage_content_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"],
                _mainpage_content_taskbetter_taskbetter_component__WEBPACK_IMPORTED_MODULE_15__["TaskbetterComponent"],
                _mainpage_content_taskbetter2_taskbetter2_component__WEBPACK_IMPORTED_MODULE_16__["Taskbetter2Component"],
                _mainpage_content_biranplace_biranplace_component__WEBPACK_IMPORTED_MODULE_17__["BiranplaceComponent"]
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
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
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

module.exports = "@-webkit-keyframes slideInFromTop {\r\n    0% {\r\n      -webkit-transform: translateY(100%);\r\n              transform: translateY(100%);\r\n    }\r\n    /* 90% {\r\n      transform: translateX(+2%);\r\n    } */\r\n    100% {\r\n        -webkit-transform: translateY(50%);\r\n                transform: translateY(50%);\r\n      }\r\n  }\r\n\r\n\r\n\r\n@keyframes slideInFromTop {\r\n    0% {\r\n      -webkit-transform: translateY(100%);\r\n              transform: translateY(100%);\r\n    }\r\n    /* 90% {\r\n      transform: translateX(+2%);\r\n    } */\r\n    100% {\r\n        -webkit-transform: translateY(50%);\r\n                transform: translateY(50%);\r\n      }\r\n  }\r\n\r\n\r\n\r\n*\r\n{\r\n    \r\n    font-size: 1.2em;\r\n    /* background-color: skyblue; */\r\n}\r\n\r\n\r\n\r\n/* .all\r\n{\r\n    animation: 1s ease-out 0s 1 slideInFromTop;\r\n} */\r\n\r\n\r\n\r\n.form\r\n{\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    /* bring your own prefixes */\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    background-color: rgba(139, 139, 139, 0.548);\r\n    height: 500px;\r\n    width: 700px;\r\n    \r\n    /* box-shadow: 0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12); */\r\n}\r\n\r\n\r\n\r\n.header\r\n{\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 0;\r\n    height: 20%;\r\n    /* background-color: red; */\r\n    text-align: center;\r\n    padding-top: 30px;\r\n}\r\n\r\n\r\n\r\n.area\r\n{\r\n    position: absolute;\r\n    /* background-color: blue; */\r\n    top: 20%;\r\n    height: 80%;\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\nexample-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n\r\n\r\n.example-container > * {\r\n    width: 50%;\r\n    left: 25%;\r\n  }\r\n\r\n\r\n\r\n.submit\r\n{\r\n    position: absolute;\r\n    bottom: 25%;\r\n}\r\n\r\n\r\n\r\n.error\r\n{\r\n    color:red;\r\n    position: absolute;\r\n    bottom: 0;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n/* .input\r\n{\r\n    width: 50%;\r\n} */"

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

/***/ "./src/app/mainpage/content/biranplace/biranplace.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/mainpage/content/biranplace/biranplace.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".biranplace\r\n{\r\n    position: absolute;\r\n    width: 13%;\r\n    height: 13%;\r\n    bottom: -12%;\r\n    right: -12%;\r\n    opacity: 0;\r\n    /* background-color: red; */\r\n    transition-duration: 0.5s;\r\n}\r\n\r\n.biran\r\n{\r\n    background-image: url('biran.png');\r\n    background-size: cover;\r\n    background-position: center;\r\n    /* background-image:none !important; */\r\n    width: 60px;\r\n    height: 60px;\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.biranplace:hover\r\n{\r\n    bottom: 0px;\r\n    right: 0px;\r\n    opacity: 0.4;\r\n}"

/***/ }),

/***/ "./src/app/mainpage/content/biranplace/biranplace.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/mainpage/content/biranplace/biranplace.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"biranplace\">\n    <img class=\"biran\"/>\n</div>\n"

/***/ }),

/***/ "./src/app/mainpage/content/biranplace/biranplace.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/mainpage/content/biranplace/biranplace.component.ts ***!
  \*********************************************************************/
/*! exports provided: BiranplaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiranplaceComponent", function() { return BiranplaceComponent; });
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

var BiranplaceComponent = /** @class */ (function () {
    function BiranplaceComponent() {
    }
    BiranplaceComponent.prototype.ngOnInit = function () {
    };
    BiranplaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-biranplace',
            template: __webpack_require__(/*! ./biranplace.component.html */ "./src/app/mainpage/content/biranplace/biranplace.component.html"),
            styles: [__webpack_require__(/*! ./biranplace.component.css */ "./src/app/mainpage/content/biranplace/biranplace.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BiranplaceComponent);
    return BiranplaceComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/content/content.component.css":
/*!********************************************************!*\
  !*** ./src/app/mainpage/content/content.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@-webkit-keyframes slideInFromRight {\r\n    0% {\r\n      -webkit-transform: translateX(100%);\r\n              transform: translateX(100%);\r\n    }\r\n    /* 90% {\r\n      transform: translateX(+2%);\r\n    } */\r\n    100% {\r\n        -webkit-transform: translateX(0%);\r\n                transform: translateX(0%);\r\n      }\r\n  }\r\n\r\n  @keyframes slideInFromRight {\r\n    0% {\r\n      -webkit-transform: translateX(100%);\r\n              transform: translateX(100%);\r\n    }\r\n    /* 90% {\r\n      transform: translateX(+2%);\r\n    } */\r\n    100% {\r\n        -webkit-transform: translateX(0%);\r\n                transform: translateX(0%);\r\n      }\r\n  }\r\n\r\n  @-webkit-keyframes slideInFromLeft {\r\n    0% {\r\n      -webkit-transform: translateX(-100%);\r\n              transform: translateX(-100%);\r\n    }\r\n    /* 90% {\r\n      transform: translateX(+2%);\r\n    } */\r\n    100% {\r\n        -webkit-transform: translateX(0%);\r\n                transform: translateX(0%);\r\n      }\r\n  }\r\n\r\n  @keyframes slideInFromLeft {\r\n    0% {\r\n      -webkit-transform: translateX(-100%);\r\n              transform: translateX(-100%);\r\n    }\r\n    /* 90% {\r\n      transform: translateX(+2%);\r\n    } */\r\n    100% {\r\n        -webkit-transform: translateX(0%);\r\n                transform: translateX(0%);\r\n      }\r\n  }\r\n\r\n  /* @media only screen and (max-width: 400px) {\r\n    filters {\r\n        width: 5%;\r\n        position: absolute;\r\n        height: 100%;\r\n        background-color: rgb(236, 236, 236);\r\n        animation: 1s ease-out 0s 1 slideInFromLeft;\r\n    }\r\n  } */\r\n\r\n  .test\r\n{\r\n    color: my-app-primary;\r\n}\r\n\r\n  .rightside\r\n{\r\n    position: absolute;\r\n}\r\n\r\n  .content\r\n{\r\n    position: absolute;\r\n    width: 70%;\r\n    left: 30%;\r\n    /* height: 100%; */\r\n    /* padding: 50px; */\r\n    display: flex;\r\n    /* flex-flow: row wrap; */\r\n    flex-direction: column;\r\n    /* text-align: center; */\r\n    /* justify-content: center; */\r\n    -webkit-animation: 1s ease-out 0s 1 slideInFromRight;\r\n            animation: 1s ease-out 0s 1 slideInFromRight;\r\n    /* overflow-y: visible; */\r\n    height: 90%;\r\n    /* background-color: red; */\r\n    padding-left: 25px;\r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n    /* background-color: green; */\r\n}\r\n\r\n  /* .scrollable\r\n{\r\n    position: relative;\r\n    height: 100%;\r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n} */\r\n\r\n  .more\r\n{\r\n    position: relative;\r\n    /* background-color: blue; */\r\n    /* width: 50%; */\r\n    padding: 10px;\r\n}\r\n\r\n  .bot\r\n{\r\n    position: absolute;\r\n    /* background-color: rgba(0, 0, 255, 0.171); */\r\n     bottom: 0;\r\n    left: 0;\r\n    width: 10%;\r\n    /* width: 50%; */\r\n    /* width: 10%;\r\n    height: 10%;\r\n    margin: 200px; */\r\n    /* height: 5%;\r\n    width: 100%;\r\n    bottom: 0;\r\n    padding: 0;\r\n    width: 70%;\r\n    left: 30%; */\r\n}\r\n\r\n  .filters\r\n{\r\n    width: 30%;\r\n    /* min-width: 300px; */\r\n    position: absolute;\r\n    height: 100%;\r\n    background-color: rgb(236, 236, 236);\r\n    -webkit-animation: 1s ease-out 0s 1 slideInFromLeft;\r\n            animation: 1s ease-out 0s 1 slideInFromLeft;\r\n}\r\n\r\n  .spaceout\r\n{\r\n    /* background-color: blue;\r\n    position: relative; */\r\n    /* padding: 30px; */\r\n    /* background-color: yellow; */\r\n    padding: 30px;\r\n}\r\n\r\n  .aday\r\n{\r\n    position: relative;\r\n    /* height: 100%;\r\n    width: 100%; */\r\n    padding-top: 30px;\r\n    /* background-color: green; */\r\n}\r\n\r\n  .toright\r\n{\r\n  padding-left: 20px;\r\n}\r\n\r\n  .info\r\n{\r\n    position: absolute;\r\n    /* background-color: green; */\r\n    width: 30%;\r\n    right: 0;\r\n    height: 50%;\r\n    top: 0;\r\n    padding: 10px;\r\n}\r\n\r\n  .data\r\n{\r\n    padding-top: 20px;\r\n}\r\n\r\n  /* css is cancer */\r\n\r\n  .newcontent\r\n{\r\n    /* background-color: green; */\r\n    position: absolute;\r\n    width: 70%;\r\n    left: 30%;\r\n    height: 100%;\r\n    -webkit-animation: 1s ease-out 0s 1 slideInFromRight;\r\n            animation: 1s ease-out 0s 1 slideInFromRight;\r\n    /* background-color: my-app-primary; */\r\n    /* background-color: color-primary-bg; */\r\n}\r\n\r\n  .title\r\n{\r\n    /* background-color: blue; */\r\n    position: absolute;\r\n    height: 10%;\r\n    width: 100%;\r\n    padding: 30px;\r\n    top: 0;\r\n}\r\n\r\n  .actualcontent\r\n{\r\n    /* background-color: lightskyblue; */\r\n    position: absolute;\r\n    height: 80%;\r\n    top: 10%;\r\n    /* bottom: 0; */\r\n    width: 100%;\r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n}\r\n\r\n  .test\r\n{\r\n    /* background-color: red; */\r\n    position: relative;\r\n    height: 100px;\r\n    width: 30%;\r\n}\r\n\r\n  .time\r\n{\r\n    color: #808080 !important;\r\n    margin-left: 6px;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n}\r\n\r\n  .mat-divider {\r\n    display: block;\r\n    margin: 0;\r\n    border-top-width: 1.5px;\r\n    border-top-style: solid;\r\n}\r\n\r\n  .title2\r\n{\r\n    font-size: 25px;\r\n}\r\n\r\n  /* width */\r\n\r\n  ::-webkit-scrollbar {\r\n    width: 10px;\r\n    height: 10px;\r\n  }\r\n\r\n  /* Track */\r\n\r\n  ::-webkit-scrollbar-track {\r\n    /* background: #f1f1f1;  */\r\n  }\r\n\r\n  /* Handle */\r\n\r\n  ::-webkit-scrollbar-thumb {\r\n    background: #888; \r\n  }\r\n\r\n  /* Handle on hover */\r\n\r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #555; \r\n  }"

/***/ }),

/***/ "./src/app/mainpage/content/content.component.html":
/*!*********************************************************!*\
  !*** ./src/app/mainpage/content/content.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"filters\" [style.backgroundColor] = \"themeservice.filtersColor\" [style.color]= \"themeservice.textColor\">\r\n    <app-filters [checklist]='checkboxes' [boardlist]='boardlist' [listslist] = 'listslist' (data_labeled)=\"LabelsChanged($event)\" (data_boarded)=\"BoardsChanged($event)\"\r\n    (time)=\"timeChange($event)\" (data_listed)=\"ListsChanged($event)\" [style.color]= \"themeservice.textColor\"></app-filters>\r\n</div>\r\n\r\n    <!-- <div class=\"content\">\r\n                <h4 mat-line *ngIf=\"time == 'today'\"><b>Today</b>  <small>{{ aweek[0].toLocaleString().split(',')[0] }}</small></h4>\r\n                <h4 mat-line *ngIf=\"time == 'all'\"><b>All</b></h4>\r\n                <h4 mat-line *ngIf=\"time == '7'\"><b>Next 7 days</b></h4>\r\n                <app-taskbetter2 class=\"spaceout\"></app-taskbetter2>\r\n                <app-taskbetter2 class=\"spaceout\"></app-taskbetter2>\r\n\r\n                <div *ngIf=\"time != '7'\" class=\"more\">\r\n                    <app-taskbetter *ngFor=\"let item of filterd_data\" [item]='item' [time]='time' [aweek]='aweek' class=\"spaceout\" (refresh)=\"refresh($event)\"></app-taskbetter>\r\n                </div>\r\n\r\n                <div *ngIf=\"time == '7'\" class=\"more\">\r\n                    <div *ngFor=\"let day of aweek; let i = index\" class=\"aday\" >\r\n                        <b *ngIf=\"i === 0\">Today</b>\r\n                        <b *ngIf=\"i === 1\">Tomorrow</b>\r\n                        <b *ngIf=\"i > 1\">{{ weekdays[day.getDay()] }}</b>\r\n\r\n                        <div *ngFor=\"let item of filterd_data\">\r\n                            <app-taskbetter *ngIf=\"todayCheck(item,day)\" [item]='item' [time]='time' [aweek]='aweek' (refresh)=\"refresh($event)\" class=\"spaceout\"></app-taskbetter>\r\n                            <app-taskbetter2 class=\"spaceout\"></app-taskbetter2>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n    </div> -->\r\n\r\n    <div class=\"newcontent\" [style.backgroundColor] = \"themeservice.bgColor\" [style.color]= \"themeservice.textColor\">\r\n        <div class=\"title\">\r\n            <h4 mat-line *ngIf=\"time == 'today'\"><b class=\"title2\">Today </b>  <small class=\"time\">{{ aweek[0].toLocaleString('en-GB').split(',')[0] }}</small></h4>\r\n            <h4 mat-line *ngIf=\"time == 'all'\"><b class=\"title2\">All</b></h4>\r\n            <h4 mat-line *ngIf=\"time == '7'\"><b class=\"title2\">Next 7 days</b></h4>\r\n        </div>\r\n        <div class=\"actualcontent\">\r\n            <div *ngIf=\"time == '7'\" class=\"\">\r\n                <div *ngFor=\"let day of aweek; let i = index\" class=\"\" style=\"padding: 30px\">\r\n                    <b *ngIf=\"i === 0\">Today  <small class=\"time\">{{ aweek[i].toLocaleString('en-GB').split(',')[0] }}</small></b> \r\n                    <b *ngIf=\"i === 1\">Tomorrow  <small class=\"time\">{{ aweek[i].toLocaleString('en-GB').split(',')[0] }}</small></b> \r\n                    <b *ngIf=\"i > 1\">{{ weekdays[day.getDay()] }}   <small class=\"time\">{{ aweek[i].toLocaleString('en-GB').split(',')[0] }}</small></b>\r\n                    <mat-divider style=\"margin-top: 10px; width: 50%;\"></mat-divider>\r\n\r\n                    <!-- <div class=\"test\"> </div> -->\r\n                    <!-- <app-taskbetter *ngIf=\"todayCheck(item,day)\" [item]='item' [time]='time' [aweek]='aweek' (refresh)=\"refresh($event)\" class=\"spaceout\"></app-taskbetter> -->\r\n                    <ng-container *ngFor=\"let item of filterd_data\">\r\n                        <!-- <app-taskbetter2></app-taskbetter2> -->\r\n                        <!-- <app-taskbetter *ngIf=\"todayCheck(item,day)\" [item]='item' [time]='time' [aweek]='aweek' (refresh)=\"refresh($event)\" class=\"\"></app-taskbetter> -->\r\n                        <app-taskbetter2 [item]='item' *ngIf=\"todayCheck(item,day)\" [time]='time' [aweek]='aweek' (refresh)=\"refresh($event)\"></app-taskbetter2>\r\n                        <!-- <mat-divider></mat-divider> -->\r\n                    </ng-container >\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"time != '7'\" class=\"more\">\r\n                <app-taskbetter2 *ngFor=\"let item of filterd_data\" [item]='item' [time]='time' [aweek]='aweek' (refresh)=\"refresh($event)\"></app-taskbetter2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <div style=\"width: 20%; background-color: red; height: 5%; bottom: 0; position: absolute;\">\r\n\r\n    </div> -->\r\n    <app-biranplace></app-biranplace>\r\n\r\n    <div class=\"bot\">\r\n        <app-search (searchValue)=\"searched($event)\"></app-search>\r\n    </div>\r\n<!-- </div> -->\r\n\r\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _themes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../themes.service */ "./src/app/themes.service.ts");
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
    // taskhover:boolean = false;
    // item:any = [];
    function ContentComponent(logic, themeservice) {
        this.logic = logic;
        this.themeservice = themeservice;
        this.refreshRoot = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hahaa = "red";
        this.filterd_data = [];
        this.filterd_data_backup = [];
        this.week_filterd_data = [];
        this.checkboxes = [];
        this.boardlist = [];
        this.listslist = [];
        this.filterd_data_nodate = [];
        this.filterd_data_yesdate = [];
        this.time = "all";
        this.searchValue = "";
        this.aweek = [];
        this.weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    }
    ContentComponent.prototype.ngOnInit = function () {
        this.init();
    };
    ContentComponent.prototype.init = function () {
        this.checkboxes = this.logic.buildCheckBoxes(this.data);
        this.boardlist = this.logic.buildBoardList(this.data);
        this.listslist = this.logic.buildLists(this.data);
        this.filterd_data = this.data;
        this.datasort();
        this.sortDates();
        this.datasource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.filterd_data);
        this.buildaweek();
    };
    ContentComponent.prototype.buildaweek = function () {
        var today = new Date();
        // const inweek = new Date();
        // inweek.setDate(today.getDate() + 7);
        for (var i = 0; i < 7; i++) {
            this.aweek.push(new Date(today));
            today.setDate(today.getDate() + 1);
        }
    };
    ContentComponent.prototype.datasort = function () {
        for (var i = 0; i < this.filterd_data.length; i++) {
            var date = new Date(this.filterd_data[i].date);
            if (!isNaN(date.getTime())) {
                this.filterd_data[i].date = date.toLocaleString('en-GB');
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
        this.checkboxes = data;
        this.updateData();
    };
    ContentComponent.prototype.BoardsChanged = function (data) {
        this.boardlist = data;
        this.updateData();
    };
    ContentComponent.prototype.ListsChanged = function (data) {
        this.listslist = data;
        this.updateData();
    };
    ContentComponent.prototype.updateData = function () {
        var isalluncheckedFilters = this.logic.isAllUnchecked(this.checkboxes);
        if (!isalluncheckedFilters)
            this.filterd_data = this.logic.makeData(this.data, this.checkboxes);
        else
            this.filterd_data = this.data;
        var isalluncheckedBoards = this.logic.isAllUnchecked(this.boardlist);
        if (!isalluncheckedBoards)
            this.filterd_data = this.logic.filterBoards(this.filterd_data, this.boardlist);
        var isalluncheckedLists = this.logic.isAllUnchecked(this.listslist);
        if (!isalluncheckedLists)
            this.filterd_data = this.logic.filterByLists(this.filterd_data, this.listslist);
        this.filterd_data = this.logic.timeFilter(this.filterd_data, this.time);
        this.sortDates();
        this.datasource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.filterd_data);
    };
    ContentComponent.prototype.timeChange = function (time) {
        this.time = time;
        this.updateData();
        console.log(this.filterd_data);
    };
    ContentComponent.prototype.searched = function (value) {
        this.datasource.filter = value.trim().toLowerCase();
        this.filterd_data = this.datasource.filteredData;
    };
    ContentComponent.prototype.refresh = function (id) {
        console.log("refresh");
        // this.refreshRoot.emit();
        console.log(id);
        var index = this.data.findIndex(function (item) { return item.id == id; });
        this.data.splice(index, 1);
        this.init();
    };
    // hoveroutput(item)
    // {
    //   if(item.hover)
    //   {
    //     console.log("hello this is shit");
    //     this.taskhover=true;
    //     this.item = item.item;
    //     console.log(this.item);
    //   }
    //   else
    //   {
    //     this.taskhover= false;
    //   }
    // }
    ContentComponent.prototype.todayCheck = function (item, date) {
        var itemdate = new Date(item.date);
        return (itemdate.getDay() == date.getDay());
    };
    ContentComponent.prototype.haha = function (item) {
        console.log(item);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContentComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ContentComponent.prototype, "refreshRoot", void 0);
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/mainpage/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/mainpage/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [_logic_service__WEBPACK_IMPORTED_MODULE_1__["LogicService"], _themes_service__WEBPACK_IMPORTED_MODULE_3__["ThemesService"]])
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

module.exports = "\r\n.filters {\r\n    position: relative;\r\n   left: -50%;\r\n   float: left;\r\n}\r\n\r\n.wrapper\r\n{\r\n   position: relative;\r\n   left: 50%;\r\n   float: left;\r\n   background-color: red;\r\n}\r\n\r\n.filteroptions\r\n{\r\n    padding: 30px;\r\n    font-size: 1.5em;\r\n    font-display: bold;\r\n    width: 50%;\r\n}\r\n\r\n.item\r\n{\r\n    /* background-color: white; */\r\n    transition-duration: 0.5s;\r\n    margin-top: 10px;\r\n}\r\n\r\n.itemselected\r\n{\r\n    background-color: lightgray;\r\n}\r\n\r\n.item:hover\r\n{\r\n    background-color: rgba(200,200,200,0.2);;\r\n}\r\n\r\n.iteminside\r\n{\r\n    \r\n}\r\n\r\n.iteminside:hover\r\n{\r\n    background-color: lightgray;\r\n}\r\n\r\n/* .item:hover\r\n{\r\n    background-color: lightblue;\r\n} */\r\n\r\n.expansion\r\n{\r\n    background-color: rgba(245, 245, 245, 0);\r\n    margin-top: 10px;\r\n}\r\n\r\n.expansiontitle\r\n{\r\n    font-size: 1.5em;\r\n    font-display: bold;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.expansionbody\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n}"

/***/ }),

/***/ "./src/app/mainpage/content/filters/filters.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/mainpage/content/filters/filters.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"wrapper\">\n  <mat-card class=\"mat-elevation-z8 centered filters\" color=\"primary\">\n      <mat-checkbox *ngFor=\"let item of checklist\" [(ngModel)]=\"item.isSelected\" style=\"margin-right: 10px;\" (change)=\"checkBoxClick(item.value,$event.checked)\" color=\"warn\">{{item.value}}</mat-checkbox>\n  </mat-card>\n</div> -->\n\n<!-- mat-elevation-z2 -->\n<!-- itemselected -->\n<div class=\"filteroptions\">\n  <div class=\"item\" (click)=\"timeClick('today')\" [ngClass]=\"{'color-white':type=='today'}\"> \n    <mat-icon>today</mat-icon> Today\n  </div>\n  <div class=\"item\" (click)=\"timeClick('7')\" [ngClass]=\"{'color-white':type=='7'}\">\n    <mat-icon>event</mat-icon> Next week\n  </div>\n  <div class=\"item\" (click)=\"timeClick('all')\" [ngClass]=\"{'color-white':type=='all'}\">\n    <mat-icon>date_range</mat-icon> All\n  </div>\n\n  <mat-expansion-panel class=\"expansion mat-elevation-z0\">\n      <mat-expansion-panel-header>\n        <mat-panel-title class=\"expansiontitle\">\n          <mat-icon>assignment</mat-icon> Boards\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n        <div class=\"expansionbody\">\n          <mat-checkbox *ngFor=\"let item of boardlist\" [(ngModel)]=\"item.isSelected\" style=\"margin-right: 10px;\" \n          (change)=\"boardClick(item.value,$event.checked)\" color=\"warn\">{{item.value}}</mat-checkbox>\n        </div>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel class=\"expansion mat-elevation-z0\">\n    <mat-expansion-panel-header>\n      <mat-panel-title class=\"expansiontitle\">\n        <mat-icon>list</mat-icon>  Lists\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n\n      <div class=\"expansionbody\">\n        <mat-checkbox *ngFor=\"let item of listslist\" [(ngModel)]=\"item.isSelected\" style=\"margin-right: 10px;\" \n        (change)=\"ListClick(item.value,$event.checked)\" color=\"warn\">{{item.value}}</mat-checkbox>\n      </div>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel class=\"expansion mat-elevation-z0\">\n      <mat-expansion-panel-header>\n        <mat-panel-title class=\"expansiontitle\">\n          <mat-icon>label</mat-icon>  Labels\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n\n        <div class=\"expansionbody\">\n          <mat-checkbox *ngFor=\"let item of checklist\" [(ngModel)]=\"item.isSelected\" style=\"margin-right: 10px;\" \n          (change)=\"filterClick(item.value,$event.checked)\" color=\"warn\">{{item.value}}</mat-checkbox>\n        </div>\n  </mat-expansion-panel>\n\n</div>"

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
        this.data_listed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
    FiltersComponent.prototype.ListClick = function (filter, checked) {
        if (checked) {
            this.listslist = this.logic.tickChecklist(this.listslist, filter, true);
            this.data_listed.emit(this.listslist);
        }
        else {
            this.listslist = this.logic.tickChecklist(this.listslist, filter, false);
            var checkedfilters = this.logic.getCheckedFilters(this.listslist);
            if (checkedfilters.length == 0) {
                this.data_listed.emit(this.listslist);
            }
            else {
                this.data_listed.emit(this.listslist);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FiltersComponent.prototype, "listslist", void 0);
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
    ], FiltersComponent.prototype, "data_listed", void 0);
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
        }
        return newdata;
    };
    LogicService.prototype.filterByLists = function (data, checkedfilters) {
        var currentdata = data;
        var newdata = [];
        var once = true;
        var used_data = [];
        var checked = this.getCheckedFilters(checkedfilters);
        for (var i = 0; i < currentdata.length; i++) {
            for (var j = 0; j < checked.length; j++) {
                if (currentdata[i].list == checked[j]) {
                    if (!this.sameObjectAlreadyThere(newdata, currentdata[i])) {
                        newdata.push(currentdata[i]);
                        used_data.push(true);
                    }
                }
            }
        }
        return newdata;
    };
    LogicService.prototype.timeFilter = function (data, time) {
        var newdata = [];
        if (time == "all")
            return data;
        for (var i = 0; i < data.length; i++) {
            if (time === "today") {
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
        today.setHours(0, 0, 0, 0);
        var inweek = new Date();
        inweek.setDate(today.getDate() + 7);
        return (somedate.getTime() >= today.getTime() && somedate.getTime() < inweek.getTime());
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
    LogicService.prototype.buildLists = function (data) {
        var list;
        var checklist = [];
        for (var i = 0; i < data.length; i++) {
            list = data[i].list;
            if (!this.filterExists(checklist, list)) {
                checklist.push({ value: list, isSelected: false });
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

/***/ "./src/app/mainpage/content/search/search.component.css":
/*!**************************************************************!*\
  !*** ./src/app/mainpage/content/search/search.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mainpage/content/search/search.component.html":
/*!***************************************************************!*\
  !*** ./src/app/mainpage/content/search/search.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field style=\"bottom:0; left: 0; padding-left: 40px; width: 100%; font-size: 1.5em;\">\n  <input matInput placeholder=\"Search..\" autocomplete=\"off\" (keyup)=\"search($event.target.value)\"/>\n</mat-form-field>"

/***/ }),

/***/ "./src/app/mainpage/content/search/search.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/mainpage/content/search/search.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
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

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.searchValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.search = function (filterValue) {
        this.searchValue.emit(filterValue);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchComponent.prototype, "searchValue", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/mainpage/content/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/mainpage/content/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/content/task/task.component.css":
/*!**********************************************************!*\
  !*** ./src/app/mainpage/content/task/task.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes float {\r\n\t0% {\r\n\t\tbox-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);\r\n\t\t-webkit-transform: translatey(0px);\r\n\t\t        transform: translatey(0px);\r\n\t}\r\n\t50% {\r\n\t\tbox-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);\r\n\t\t-webkit-transform: translatey(-20px);\r\n\t\t        transform: translatey(-20px);\r\n\t}\r\n\t100% {\r\n\t\tbox-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);\r\n\t\t-webkit-transform: translatey(0px);\r\n\t\t        transform: translatey(0px);\r\n\t}\r\n}\r\n\r\n@keyframes float {\r\n\t0% {\r\n\t\tbox-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);\r\n\t\t-webkit-transform: translatey(0px);\r\n\t\t        transform: translatey(0px);\r\n\t}\r\n\t50% {\r\n\t\tbox-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);\r\n\t\t-webkit-transform: translatey(-20px);\r\n\t\t        transform: translatey(-20px);\r\n\t}\r\n\t100% {\r\n\t\tbox-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);\r\n\t\t-webkit-transform: translatey(0px);\r\n\t\t        transform: translatey(0px);\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes slideInFromLeft2 {\r\n    0% {\r\n      -webkit-transform: translateX(-100%);\r\n              transform: translateX(-100%);\r\n    }\r\n    /* 90% {\r\n      transform: translateX(+2%);\r\n    } */\r\n    100% {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n      }\r\n  }\r\n\r\n@keyframes slideInFromLeft2 {\r\n    0% {\r\n      -webkit-transform: translateX(-100%);\r\n              transform: translateX(-100%);\r\n    }\r\n    /* 90% {\r\n      transform: translateX(+2%);\r\n    } */\r\n    100% {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n      }\r\n  }\r\n\r\n.poop\r\n{\r\n    transition-duration: 0.5s;\r\n    /* animation: 1s ease-out 0s 1 slideInFromLeft2; */\r\n}\r\n\r\n.poop:hover\r\n{\r\n    /* box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2); */\r\n    -webkit-transform: translateY(-5%);\r\n            transform: translateY(-5%);\r\n}\r\n\r\n/* .content:hover ~ .delete\r\n{\r\n    opacity: 1;\r\n} */\r\n\r\n.task\r\n{\r\n  position: relative;\r\n  width: 45%;\r\n  height: 100px;\r\n  background-color: white;\r\n  margin-top: 20px;\r\n  margin-left: 25px;\r\n  padding: 0;\r\n  min-width: 700px;\r\n}\r\n\r\n.header\r\n{\r\n  position: absolute;\r\n  display: flex;\r\n  height: 30%;\r\n  width: 100%;\r\n  /* background-color: lightgray; */\r\n  /* color: primary; */\r\n  padding: 0;\r\n  margin: 0;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  font-weight: bold;\r\n}\r\n\r\n.content\r\n{\r\n  position: absolute;\r\n  height: 70%;\r\n  top: 30%;\r\n  padding: 10px;\r\n}\r\n\r\n.delete\r\n{\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 5%;\r\n  height: 30%;\r\n  transition-duration: 0.5s;\r\n  opacity: 0;\r\n}\r\n\r\n.delete:hover\r\n{\r\n  color: red;\r\n  opacity: 1;\r\n}\r\n\r\n.deleteVisible\r\n{\r\n  opacity: 1;\r\n}\r\n\r\n.datearea\r\n{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.listarea\r\n{\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n.labelarea\r\n{\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.boardarea\r\n{\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n.textarea\r\n{\r\n  position: absolute;\r\n  left: 25%;\r\n  top: 12.5%;\r\n  width: 50%;\r\n  height: 75%;\r\n  /* background-color: red; */\r\n  text-align: left;\r\n}\r\n\r\n.example-card {\r\n    max-width: 400px;\r\n    min-width: 300px;\r\n    transition-duration: 0.5s;\r\n    /* background-color: rgb(240, 240, 240); */\r\n  }\r\n\r\n/* .example-card:hover\r\n{\r\n    box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);\r\n    transform: translateY(-5%);\r\n} */\r\n\r\n/* .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  } */"

/***/ }),

/***/ "./src/app/mainpage/content/task/task.component.html":
/*!***********************************************************!*\
  !*** ./src/app/mainpage/content/task/task.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"poop\">\n  <mat-card class=\"example-card mat-elevation-z8\">\n      <mat-card-header>\n\n        <mat-card-title>{{ item.list }} list</mat-card-title>\n        <mat-card-subtitle>{{ item.board }} board</mat-card-subtitle>\n      </mat-card-header>\n\n      <mat-card-content>\n        <p>\n          {{ item.text }}\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n\n        <mat-card-subtitle>Deadline: {{ item.date }}</mat-card-subtitle>\n        <mat-card-subtitle>Tags: {{ item.labels }}</mat-card-subtitle>\n      </mat-card-actions>\n  </mat-card>\n</div> -->\n\n<div class=\"poop\">\n  <mat-card class=\"task mat-elevation-z8\">\n    <!-- <div class=\"datearea\">\n       Deadline: {{ item.date }}\n    </div>\n    <div class=\"listarea\">\n        List: {{ item.list }}\n    </div>\n    <div class=\"labelarea\">\n        Labels: {{ item.labels }}\n    </div>\n    <div class=\"boardarea\">\n        Board: {{ item.board }}\n    </div>\n    <div class=\"textarea\">\n        {{ item.text }}\n    </div> -->\n    <div class=\"header color-primary-bg\">\n      <div>\n        Deadline: {{ item.date }}\n      </div>\n      <div>\n        Labels: {{ item.labels }}\n      </div>\n      <div>\n        List: {{ item.list }}\n      </div>\n      <div>\n        Board: {{ item.board }}\n      </div>\n    </div>\n    <div class=\"content\">\n      {{ item.text }}\n    </div>\n    <div class=\"delete\" (click)=\"deleteTask(item.id)\">\n      <mat-icon>done</mat-icon>\n    </div>\n  </mat-card>\n</div>\n"

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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user.service */ "./src/app/mainpage/user.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
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
    function TaskComponent(userservice, snackBar) {
        this.userservice = userservice;
        this.snackBar = snackBar;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TaskComponent.prototype.ngOnInit = function () {
        // console.log(this.item);
    };
    TaskComponent.prototype.deleteTask = function (id) {
        // this.openSnackBar("Hey","ok");
        var _this = this;
        console.log("deleting item " + id);
        this.userservice.deleteTask(id).subscribe(function (res) {
            console.log(res);
            if (res.status) {
                console.log("succesful delete");
                _this.refresh.emit(id);
                _this.openSnackBar("Completed!", "ok");
            }
            else {
                console.log("error");
                _this.openSnackBar("Error completing. Try again soon", "Ouch");
            }
        }, function (err) {
            console.log("Error occured+ :: " + err);
            _this.openSnackBar("Error contacting API. Try again soon", "Ouch");
        });
    };
    TaskComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 4000,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TaskComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TaskComponent.prototype, "refresh", void 0);
    TaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/mainpage/content/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/mainpage/content/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/content/taskbetter/taskbetter.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/mainpage/content/taskbetter/taskbetter.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".task\r\n{\r\n    width: 50%;\r\n    height: 50px;\r\n    /* height: 100%; */\r\n    position: relative;\r\n    /* padding-top: 20px; */\r\n    /* margin-left: 30px; */\r\n    background-color: blue;\r\n    transition: all 0.5s ease-in-out; \r\n}\r\n\r\n.content\r\n{\r\n    position: relative;\r\n    transition: all 0.5s ease-in-out; \r\n    left: 0;\r\n    top: 0;\r\n    height: 30px;\r\n    width: 100%;\r\n    padding: 15px;\r\n}\r\n\r\n/* .contentexpand\r\n{\r\n    transition: all 0.5s ease-in-out; \r\n    left: 0;\r\n    top: 0;\r\n    height: 100px;\r\n    width: 100%;\r\n    padding: 15px;\r\n} */\r\n\r\n/* .poop\r\n{\r\n    position: absolute;\r\n    height: 30px;\r\n    width: 100%;\r\n}\r\n.hara\r\n{\r\n    position: absolute;\r\n    width:  10%;\r\n    height: 100%;\r\n    background-color: yellow;\r\n} */\r\n\r\n.side\r\n{\r\n    height: 100%;\r\n    width: 8%;\r\n    left: -10px;\r\n    background-color: gray;\r\n    position: absolute;\r\n    /* min-width: 100px; */\r\n}\r\n\r\n.therest\r\n{\r\n    height: 100%;\r\n    width: 95%;\r\n    right: 0;\r\n    background-color: yellow;\r\n    position: absolute;\r\n}\r\n\r\n.contentbot\r\n{\r\n    /* background-color: orange; */\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 30%;\r\n    margin-bottom: -25px;\r\n    /* display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around; */\r\n}\r\n\r\n.divider\r\n{\r\n    border-width: 2px;\r\n    /* border-style: solid; */\r\n}\r\n\r\n.info\r\n{\r\n    position: absolute;\r\n    /* background-color: green; */\r\n    width: 30%;\r\n    right: 0;\r\n    height: 50%;\r\n    top: 0;\r\n    padding: 10px;\r\n}\r\n\r\n.data\r\n{\r\n    padding-top: 20px;\r\n}\r\n\r\n.icon\r\n{\r\n    bottom: 0;\r\n    position: relative;\r\n}\r\n\r\n/* .content:hover\r\n{\r\n\r\n    height: 100px;\r\n} */\r\n\r\n/* transform: scaleY(2); */"

/***/ }),

/***/ "./src/app/mainpage/content/taskbetter/taskbetter.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/mainpage/content/taskbetter/taskbetter.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-list *ngIf=\"time != '7'\">\r\n  <mat-list-item *ngIf=\"time == 'today'\"><p><small>{{ item.date.split(',')[1] }}</small></p></mat-list-item>\r\n  <mat-list-item *ngIf=\"time == 'all'\"><p><small>{{ item.date }}</small></p></mat-list-item>\r\n  <mat-divider></mat-divider>\r\n  <mat-list-item>{{ item.text }}</mat-list-item>\r\n  <mat-divider></mat-divider>\r\n</mat-list>\r\n\r\n<mat-list *ngIf=\"time == '7'\">\r\n  <mat-list-item><p><small>{{ item.date.split(',')[1] }}</small></p></mat-list-item>\r\n  <mat-divider></mat-divider>\r\n  <div class=\"content\">\r\n    <mat-list-item>{{ item.text }}</mat-list-item>\r\n  </div>\r\n  <mat-divider></mat-divider>\r\n</mat-list> -->\r\n<!-- (mouseenter) = \"hover(true)\"  (mouseleave) = \"hover(false)\" -->\r\n<!-- [ngClass]=\"isexpand ? 'contentexpand' : 'content'\" -->\r\n\r\n<div *ngIf=\"time != '7'\" class=\"task\" [style.height.%]=\"height\">\r\n\r\n        <div class=\"side\" (click)=\"expand()\">\r\n            <mat-icon class=\"icon\" >{{ expandvalue }}</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"therest\">\r\n            <p *ngIf=\"time == 'today'\"><small>{{ item.date.split(',')[1] }}</small></p>\r\n            <p *ngIf=\"time == 'all'\"><small>{{ item.date }}</small></p>\r\n            <mat-divider></mat-divider>\r\n            <div class=\"content\" >\r\n                {{ item.text }}\r\n                <div class=\"contentbot\" *ngIf=\"isexpand\">\r\n                    <div> Labels: {{ item.labels }} </div>\r\n                    <div> list {{ item.list }} </div>\r\n                    <div> board: {{ item.board }} </div>\r\n                </div>\r\n            </div>\r\n            <mat-divider></mat-divider>\r\n        </div>\r\n</div>\r\n\r\n<div *ngIf=\"time == '7'\" class=\"task\" [style.height.%]=\"height\">\r\n\r\n    <div class=\"side\" (click)=\"expand()\">\r\n        <mat-icon class=\"icon\" >{{ expandvalue }}</mat-icon>\r\n    </div>\r\n\r\n    <div class=\"therest\">\r\n        <p><small>{{ item.date.split(',')[1] }}</small></p>\r\n        <mat-divider></mat-divider>\r\n        <div class=\"content\" >\r\n            {{ item.text }}\r\n            <div class=\"contentbot\" *ngIf=\"isexpand\">\r\n                <div> Labels: {{ item.labels }} </div>\r\n                <div> list {{ item.list }} </div>\r\n                <div> board: {{ item.board }} </div>\r\n            </div>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n    </div>\r\n\r\n    <!-- <p><small>{{ item.date.split(',')[1] }}</small></p>\r\n    <mat-divider></mat-divider>\r\n    <div class=\"content\">\r\n        {{ item.text }}\r\n    </div>\r\n    <mat-divider></mat-divider> -->\r\n</div>\r\n\r\n<!-- <div class=\"info\">\r\n    <p class=\"data\">List: {{ item.list }} </p>\r\n    <mat-divider></mat-divider>\r\n    <p class=\"data\">Board: {{ item.board }} </p>\r\n    <mat-divider></mat-divider>\r\n    <p class=\"data\">Labels: {{ item.labels }} </p>\r\n    <mat-divider></mat-divider>\r\n</div> -->"

/***/ }),

/***/ "./src/app/mainpage/content/taskbetter/taskbetter.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/mainpage/content/taskbetter/taskbetter.component.ts ***!
  \*********************************************************************/
/*! exports provided: TaskbetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskbetterComponent", function() { return TaskbetterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user.service */ "./src/app/mainpage/user.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskbetterComponent = /** @class */ (function () {
    function TaskbetterComponent(userservice, snackBar) {
        this.userservice = userservice;
        this.snackBar = snackBar;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // @Output() onhoveroutput: EventEmitter<any> =  new EventEmitter();
        this.isexpand = false;
        this.height = 100;
        this.expandvalue = "expand_more";
    }
    TaskbetterComponent.prototype.ngOnInit = function () {
        // console.log(this.item);
    };
    TaskbetterComponent.prototype.deleteTask = function (id) {
        // this.openSnackBar("Hey","ok");
        var _this = this;
        console.log("deleting item " + id);
        this.userservice.deleteTask(id).subscribe(function (res) {
            console.log(res);
            if (res.status) {
                console.log("succesful delete");
                _this.refresh.emit(id);
                _this.openSnackBar("Completed!", "ok");
            }
            else {
                console.log("error");
                _this.openSnackBar("Error completing. Try again soon", "Ouch");
            }
        }, function (err) {
            console.log("Error occured+ :: " + err);
            _this.openSnackBar("Error contacting API. Try again soon", "Ouch");
        });
    };
    //  hover(type)
    //  {
    //   let item = {item: this.item, hover: type};
    //   this.onhoveroutput.emit(item);
    //  }
    TaskbetterComponent.prototype.expand = function () {
        this.isexpand = !this.isexpand;
        if (this.isexpand) {
            this.height = 200;
            this.expandvalue = "expand_less";
        }
        else {
            this.height = 100;
            this.expandvalue = "expand_more";
        }
    };
    TaskbetterComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 4000,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TaskbetterComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TaskbetterComponent.prototype, "time", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TaskbetterComponent.prototype, "aweek", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TaskbetterComponent.prototype, "refresh", void 0);
    TaskbetterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taskbetter',
            template: __webpack_require__(/*! ./taskbetter.component.html */ "./src/app/mainpage/content/taskbetter/taskbetter.component.html"),
            styles: [__webpack_require__(/*! ./taskbetter.component.css */ "./src/app/mainpage/content/taskbetter/taskbetter.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], TaskbetterComponent);
    return TaskbetterComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/content/taskbetter2/taskbetter2.component.css":
/*!************************************************************************!*\
  !*** ./src/app/mainpage/content/taskbetter2/taskbetter2.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hara\r\n{\r\n    /* height: 500px; */\r\n    min-height: 150px;\r\n    width: 55%;\r\n    /* background-color: pink !important;  */\r\n    position: relative;\r\n    margin-bottom: 30px;\r\n    /* margin-left: 20px; */\r\n    transition: all 0.3s ease-in-out;\r\n    overflow: hidden;\r\n    min-width: 700px;\r\n}\r\n\r\n.hara:hover\r\n{\r\n    -webkit-transform: translateY(-5%);\r\n            transform: translateY(-5%);\r\n}\r\n\r\n.side\r\n{\r\n    height: 100%;\r\n    width: 5%;\r\n    left: 0;\r\n    /* background-color: gray; */\r\n    display: flex;\r\n    align-items: center;\r\n    position: absolute;\r\n}\r\n\r\n.rest\r\n{\r\n    height: 100%;\r\n    width: 95%;\r\n    right: 0;\r\n    /* background-color: yellow; */\r\n    position: absolute;\r\n    /* transition: all 0.5s ease-in-out;  */\r\n}\r\n\r\n.content\r\n{\r\n    /* background-color: yellow; */\r\n    position: relative;\r\n    left: 0;\r\n    top: 0;\r\n    /* height: 50px; */\r\n    width: 90%;\r\n    padding: 15px;\r\n    min-height: 12px;\r\n    overflow-wrap: break-word;\r\n    /* overflow-y: scroll; */\r\n    /* transition: all 0.5s ease-in-out;  */\r\n}\r\n\r\n.rightside\r\n{\r\n    /* background-color: blue; */\r\n    height: 100%;\r\n    position: absolute;\r\n    /* right: 0; */\r\n    left: 50%;\r\n    width: 50%;\r\n    top: 0;\r\n    /* display: inline-block; */\r\n    /* min-width: 200px; */\r\n    display: flex;\r\n    justify-content: flex-end; \r\n}\r\n\r\n.label\r\n{\r\n    /* background-image: url('../../../../assets/label.png'); */\r\n    display: inline-block; \r\n    margin-left: 5px; \r\n    padding-left: 8px; \r\n    padding-right: 8px; \r\n    padding-bottom: 0px;\r\n    margin-top: 10px;\r\n    /* padding-bottom: -50px; */\r\n    height: 30px;\r\n    max-height: 50px;\r\n    /* border-radius: 15px 50px 30px 5px; */\r\n    /* border-radius: 10px/100px; */\r\n    border-radius: 0px 400px 400px 0px;\r\n    /* border-left: 5px solid transparent;\r\n      border-top: 20px solid transparent;\r\n      border-bottom: 20px solid transparent; */\r\n}\r\n\r\n.labeltxt\r\n{\r\n    text-align: center;\r\n    -webkit-margin-after: 0;\r\n            margin-block-end: 0;\r\n    -webkit-margin-before: 0;\r\n            margin-block-start: 0;\r\n    padding-top: 7px;\r\n}\r\n\r\n.icon\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.contentbot\r\n{\r\n    position: absolute;\r\n    /* transition: all 0.5s ease-in-out;  */\r\n    padding-left: 15px;\r\n    bottom: 0;\r\n}\r\n\r\n.delete\r\n{\r\n    right: 0;\r\n    position: absolute;\r\n    bottom: 0;\r\n    padding-top: 30px;\r\n    padding-right: 30px;\r\n}\r\n\r\n.delete:hover\r\n{\r\n    color: red;\r\n}\r\n\r\n.time\r\n{\r\n    color: #808080 !important;\r\n    margin-left: 6px;\r\n    -webkit-margin-before: 0;\r\n            margin-block-start: 0;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n}\r\n\r\n.done\r\n{\r\n    transition-duration: 0.5s;\r\n    padding-bottom: 32px;\r\n    padding-left: 15px;\r\n    transition: all 0.5s ease-in-out;\r\n}\r\n\r\n/* .done:hover\r\n{\r\n    color: red;\r\n    transform: scale(1.3,1.3);\r\n} */\r\n\r\n.mat-divider {\r\n    display: block;\r\n    margin: 0;\r\n    border-top-width: 1.5px;\r\n    border-top-style: solid;\r\n}"

/***/ }),

/***/ "./src/app/mainpage/content/taskbetter2/taskbetter2.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/mainpage/content/taskbetter2/taskbetter2.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- [style.height.px]=\"height\" -->\n<div *ngIf=\"time != '7'\" class=\"hara\" >\n    <div class=\"side\">\n        <!-- <mat-icon class=\"icon\" (click)=\"expand()\" >{{ expandvalue }}</mat-icon> -->\n        <!-- <svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" class=\"done\"><path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z\"/></svg> -->\n        <!-- <mat-icon class=\"done\" (click)=\"deleteTask(item.id)\">done</mat-icon> -->\n        <mat-checkbox color=\"warn\" class=\"done\" (click)=\"deleteTask(item.id)\" [(ngModel)]=\"checked\"></mat-checkbox>\n    </div>\n    <div class=\"rest\" >\n        <p *ngIf=\"time == 'today'\" style=\"margin-block-end: 0\"><small class=\"time\">{{ item.date.split(',')[1] }}</small></p>\n        <p *ngIf=\"time == 'all'\" style=\"margin-block-end: 0\"><small class=\"time\">{{ item.date }}</small></p>\n        <!-- <mat-divider></mat-divider> -->\n        <div class=\"content\" >\n          {{ item.text }}\n          \n          <!-- Hello this is random text lol omega lol Hello this is random text lol omega lol Hello this is random text lol omega lol Hello this is random text lol omega lol\n          Hello this is random text lol omega lol Hello this is random text lol omega lol\n          Hello this is random text lol omega lol Hello this is random text lol omega lol Hello this is random text lol omega lol Hello this is random text lol omega lol -->\n          <div class=\"rightside\">\n            <div *ngFor=\"let item of item.labels; let i = index\" class=\"label\" [style.background-color] = \"getColor(item)\">\n                <p class=\"labeltxt\">{{ item }}</p>\n            </div>\n          </div>\n          <!-- <div class=\"delete\" *ngIf=\"isexpand\" (click)=\"deleteTask(item.id)\">\n            <mat-icon class=\"done\" (click)=\"deleteTask(item.id)\">done</mat-icon>\n          </div> -->\n        </div>\n        <div class=\"contentbot\" *ngIf=\"isexpand\">\n          <div> Labels: {{ item.labels }} </div>\n          <div> list {{ item.list }} </div>\n          <div> board: {{ item.board }} </div>\n        </div>\n        <mat-divider></mat-divider>\n    </div>\n  </div>\n\n\n<div *ngIf=\"time == '7'\" class=\"hara\" [style.height.px]=\"height\">\n  <div class=\"side\">\n      <!-- <mat-icon class=\"icon\" (click)=\"expand()\" >{{ expandvalue }}</mat-icon> -->\n      <!-- <mat-icon class=\"done\">check_circle_outline</mat-icon> -->\n      <!-- <svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" class=\"done\"><path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z\"/></svg> -->\n      <!-- <mat-icon class=\"done\" (click)=\"deleteTask(item.id)\">done</mat-icon> -->\n      <mat-checkbox color=\"warn\" class=\"done\" (click)=\"deleteTask(item.id)\" [(ngModel)]=\"checked\"></mat-checkbox>\n  </div>\n  <div class=\"rest\" >\n      <p style=\"margin-block-end: 0\"><small class=\"time\">{{ item.date.split(',')[1] }}</small></p>\n      \n      <div class=\"content\">\n        {{ item.text }}\n        <div class=\"rightside\">\n            <div *ngFor=\"let item of item.labels; let i = index\" class=\"label\" [style.background-color] = \"'gray'\">\n                <p class=\"labeltxt\">{{ item }}</p>\n            </div>\n        </div>\n        <!-- <div class=\"delete\" *ngIf=\"isexpand\" (click)=\"deleteTask(item.id)\">\n            <mat-icon>done</mat-icon>\n        </div> -->\n      </div>\n      <div class=\"contentbot\" *ngIf=\"isexpand\">\n        <div> Labels: {{ item.labels }} </div>\n        <div> list {{ item.list }} </div>\n        <div> board: {{ item.board }} </div>\n      </div>\n      <mat-divider></mat-divider>\n  </div>\n  <!-- <mat-divider></mat-divider> -->\n</div>"

/***/ }),

/***/ "./src/app/mainpage/content/taskbetter2/taskbetter2.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/mainpage/content/taskbetter2/taskbetter2.component.ts ***!
  \***********************************************************************/
/*! exports provided: Taskbetter2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Taskbetter2Component", function() { return Taskbetter2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user.service */ "./src/app/mainpage/user.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Taskbetter2Component = /** @class */ (function () {
    function Taskbetter2Component(userservice, snackBar) {
        this.userservice = userservice;
        this.snackBar = snackBar;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isexpand = false;
        this.checked = false;
        this.height = 150;
        this.expandvalue = "expand_more";
        this.colors = [{ label: "inprogress", color: "violet" }, { label: "general", color: "Turquoise" }, { label: "tracking", color: "yellowgreen" }, { label: "bug", color: "gold" },
            { label: "help", color: "orange" }, { label: "critical", color: "tomato" }];
    }
    Taskbetter2Component.prototype.ngOnInit = function () {
    };
    Taskbetter2Component.prototype.expand = function () {
        this.isexpand = !this.isexpand;
        if (this.isexpand) {
            this.height = 200;
            this.expandvalue = "expand_less";
        }
        else {
            this.height = 150;
            this.expandvalue = "expand_more";
        }
    };
    Taskbetter2Component.prototype.deleteTask = function (id) {
        var _this = this;
        // this.openSnackBar("Hey","ok");
        console.log("deleting item " + id);
        this.userservice.deleteTask(id).subscribe(function (res) {
            console.log(res);
            if (res.status) {
                console.log("succesful delete");
                _this.refresh.emit(id);
                _this.openSnackBar("Completed!", "ok");
            }
            else {
                console.log("error");
                _this.openSnackBar("Error completing. Try again soon", "Ouch");
            }
        }, function (err) {
            console.log("Error occured+ :: " + err);
            _this.checked = false;
            _this.openSnackBar("Error contacting API. Try again soon", "Ouch");
        });
    };
    Taskbetter2Component.prototype.getColor = function (label) {
        for (var i = 0; i < this.colors.length; i++) {
            if (this.colors[i].label === label) {
                return this.colors[i].color;
            }
        }
        return "gray";
    };
    Taskbetter2Component.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 4000,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Taskbetter2Component.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Taskbetter2Component.prototype, "time", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Taskbetter2Component.prototype, "aweek", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Taskbetter2Component.prototype, "refresh", void 0);
    Taskbetter2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taskbetter2',
            template: __webpack_require__(/*! ./taskbetter2.component.html */ "./src/app/mainpage/content/taskbetter2/taskbetter2.component.html"),
            styles: [__webpack_require__(/*! ./taskbetter2.component.css */ "./src/app/mainpage/content/taskbetter2/taskbetter2.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], Taskbetter2Component);
    return Taskbetter2Component;
}());



/***/ }),

/***/ "./src/app/mainpage/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/mainpage/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .header\r\n{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 15%;\r\n} */\r\n.example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n.title\r\n{\r\n    text-align: center;\r\n    font-size: 2em;\r\n}\r\n.logout\r\n{\r\n    transition-duration: 0.5s;\r\n    font-size: 36px;\r\n    padding: 0;\r\n    margin-bottom: 7.5px;\r\n    margin-right: 7.5px;\r\n}\r\n.logout:hover\r\n{\r\n    color: blue;\r\n}\r\n.theme\r\n{\r\n    padding-right: 50px;\r\n    transition-duration: 0.3s;\r\n}\r\n.avatar\r\n{\r\n    width: 50px;\r\n    height: 50px;\r\n    padding-right: 15px;\r\n}\r\n/* .theme:hover\r\n{\r\n    color:blue\r\n} */"

/***/ }),

/***/ "./src/app/mainpage/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/mainpage/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-menu #appMenu=\"matMenu\">\n    <!-- <button mat-menu-item (click)=\"toggleTheme()\"> Switch theme </button>\n    <button mat-menu-item (click)=\"help()\"> Help </button>\n    <button mat-menu-item (click)=\"logout()\"> Logout </button> -->\n</mat-menu>\n<!-- [style.backgroundColor] = \"themeservice.headerColor\" -->\n<mat-toolbar  color=\"primary\" >\n    <span><img src=\"assets/clipboard.png\" class=\"avatar\"></span>\n    <span>Hello {{ user }}</span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n    <span class=\"example-spacer\"></span>\n    <!-- <button mat-button [matMenuTriggerFor]=\"appMenu\"><mat-icon>settings</mat-icon></button> -->\n    <!-- <mat-icon class=\"theme\" (click)=\"toggleTheme()\">colorize</mat-icon> -->\n    <mat-slide-toggle\n          class=\"theme\"\n          (change)=\"toggleTheme()\">\n        Change Theme\n    </mat-slide-toggle>\n    <mat-icon class=\"logout\" (click)=\"logout()\">arrow_back</mat-icon>\n</mat-toolbar>\n\n<!-- <p class=\"title\"> Your tasks: </p> -->"

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
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _themes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../themes.service */ "./src/app/themes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var dark = 'dark-theme';
var light = 'default-theme';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, overlayContainer, themeservice) {
        this.router = router;
        this.overlayContainer = overlayContainer;
        this.themeservice = themeservice;
        this.isdarktheme = false;
        this.themechange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.router.navigate([""]);
    };
    HeaderComponent.prototype.toggleTheme = function () {
        this.isdarktheme = !this.isdarktheme;
        this.themechange.emit(this.isdarktheme);
        // if(this.isdarktheme)
        // {
        //   this.overlayContainer.getContainerElement().classList.add(dark);
        //   this.overlayContainer.getContainerElement().classList.remove(light);
        //   this.componentCssClass = dark;
        //   localStorage.setItem("theme", dark);
        // }
        // else
        // {
        //   this.overlayContainer.getContainerElement().classList.add(light);
        //   this.overlayContainer.getContainerElement().classList.remove(dark);
        //   this.componentCssClass = light;
        //   localStorage.setItem("theme", light);
        // }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HeaderComponent.prototype, "themechange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "componentCssClass", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/mainpage/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/mainpage/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayContainer"], _themes_service__WEBPACK_IMPORTED_MODULE_3__["ThemesService"]])
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

module.exports = "\r\n.content\r\n{\r\n    overflow: hidden;\r\n}\r\n\r\n.error\r\n{\r\n    text-align:center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [user]='user' (themechange)=\"onThemeChange($event)\"></app-header>\n<app-content *ngIf=\"data.length > 0\" [data]='data' class=\"content\" (refreshRoot)=\"refresh()\"></app-content>\n<div *ngIf=\"data.length == 0\" class=\"error\">\n    <mat-icon style=\"font-size: 3em; margin-right: 0.5em\">sentiment_dissatisfied</mat-icon>\n    <p style=\"color:red; font-size: 2em\">No tasks/No data</p>\n</div>"

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
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _themes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes.service */ "./src/app/themes.service.ts");
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
var dark = 'dark-theme';
var light = 'default-theme';
var MainpageComponent = /** @class */ (function () {
    function MainpageComponent(userservice, cd, overlayContainer, themeservice, elementRef) {
        this.userservice = userservice;
        this.cd = cd;
        this.overlayContainer = overlayContainer;
        this.themeservice = themeservice;
        this.elementRef = elementRef;
        // @HostBinding('class') componentCssClass;
        this.user = "";
        this.data = [];
    }
    MainpageComponent.prototype.ngOnInit = function () {
        // console.log("hello?");
        // this.userservice.change.subscribe(user => {
        //     this.user = user;
        //     console.log(user);
        // });
        // console.log("??????? "+this.userservice.user);
        // this.overlayContainer.getContainerElement().classList.add(dark);
        // this.overlayContainer.getContainerElement().classList.remove(light);
        // this.componentCssClass = dark;
        // this.GetAuth();
        // this.userservice.set("HAHA",3);
        // this.user = this.userservice.user;
        // Uncomment this for prod:
        // this.userservice.getData().subscribe(data => {
        //     this.data = data;
        //     this.cd.detectChanges();
        //     console.log(data);
        // });
        this.GetAuth();
        // ==============================
        // Uncomment this for dev:
        // this.data = [{id:"1",text:"important mission1",list:"a good list",board:"bisli",labels:["general"],date:"2019-08-09T09:30",userid:"2"},
        //              {id:"2",text:"important mission2",list:"better list",board:"bisli2",labels:["general","meme"],date:"2019-08-09T15:20",userid:"2"},
        //              {id:"3",text:"important mission3",list:"better list",board:"bisli",labels:["bamba"],date:"2019-11-09T15:20",userid:"2"},
        //              {id:"5",text:"important mission4",list:"better list",board:"bisli",labels:["meme","test"],date:undefined,userid:"2"},
        //              {id:"13",text:"important mission5",list:"better list",board:"bisli",labels:["general"],date:"2019-09-09T14:05",userid:"2"},
        //              {id:"139",text:"make pizza",list:"pro",board:"goodboard",labels:["meme"],date:"2019-08-15T13:05",userid:"2"}];
        // ==============================
        // this.data = [{text:"important mission4",list:"better list",board:"bisli",labels:["meme","test"],date:"none",userid:"2"},
        //             {text:"important mission4",list:"better list",board:"bisli",labels:["meme","test"],date:"none",userid:"2"}];
        // console.log(this.data);
        console.log(this.data);
        this.checkForDarkTheme();
    };
    MainpageComponent.prototype.refresh = function () {
        console.log("refresh");
        this.data = [];
        this.data = [{ id: "1", text: "important mission1", list: "a good list", board: "bisli", labels: ["general"], date: "2019-08-13T09:30", userid: "2" },
            { id: "2", text: "important mission2", list: "better list", board: "bisli2", labels: ["general", "meme"], date: "2026-08-12T15:20", userid: "2" },
            { id: "3", text: "important mission3", list: "better list", board: "bisli", labels: ["bamba"], date: "none", userid: "2" }];
        this.cd.detectChanges();
        this.cd.markForCheck();
    };
    MainpageComponent.prototype.GetAuth = function () {
        var it = this;
        this.userservice.getUser().subscribe(function (user) {
            it.userservice.set(user.user, user.id);
            it.user = it.userservice.user;
            it.userservice.getData().subscribe(function (data) {
                it.data = data;
                it.cd.detectChanges();
                console.log(data);
            });
        });
    };
    MainpageComponent.prototype.onThemeChange = function (isdarktheme) {
        // if(isdarktheme)
        // {
        // this.overlayContainer.getContainerElement().classList.add(dark);
        // this.overlayContainer.getContainerElement().classList.remove(light);
        // this.componentCssClass = dark;
        // localStorage.setItem("theme", dark);
        // }
        // else
        // {
        // this.overlayContainer.getContainerElement().classList.add(light);
        // this.overlayContainer.getContainerElement().classList.remove(dark);
        // this.componentCssClass = light;
        // localStorage.setItem("theme", light);
        // }
        var isdark = this.themeservice.toggleTheme();
        if (isdark) {
            this.overlayContainer.getContainerElement().classList.add(dark);
            this.overlayContainer.getContainerElement().classList.remove(light);
            this.componentCssClass = dark;
            localStorage.setItem("theme", dark);
            this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#3d3d3d';
        }
        else {
            this.overlayContainer.getContainerElement().classList.add(light);
            this.overlayContainer.getContainerElement().classList.remove(dark);
            this.componentCssClass = light;
            localStorage.setItem("theme", light);
            this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'whitesmoke';
        }
    };
    MainpageComponent.prototype.checkForDarkTheme = function () {
        var isdark = localStorage.getItem("theme");
        if (isdark == dark) {
            var useless = this.themeservice.toggleTheme();
            this.overlayContainer.getContainerElement().classList.add(dark);
            this.overlayContainer.getContainerElement().classList.remove(light);
            this.componentCssClass = dark;
        }
    };
    MainpageComponent.prototype.ngAfterViewInit = function () {
        var isdark = localStorage.getItem("theme");
        if (isdark == dark)
            this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#3d3d3d';
        else
            this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'whitesmoke';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.is-open'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], MainpageComponent.prototype, "componentCssClass", void 0);
    MainpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainpage',
            template: __webpack_require__(/*! ./mainpage.component.html */ "./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.css */ "./src/app/mainpage/mainpage.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayContainer"], _themes_service__WEBPACK_IMPORTED_MODULE_3__["ThemesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
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
    UserService.prototype.deleteTask = function (id) {
        return this.http.post(host + '/api/deletetask/', { id: id });
    };
    UserService.prototype.getUser = function () {
        return this.http.get(host + '/api/authdata/');
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

/***/ "./src/app/themes.service.ts":
/*!***********************************!*\
  !*** ./src/app/themes.service.ts ***!
  \***********************************/
/*! exports provided: ThemesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesService", function() { return ThemesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var dark = 'dark-theme';
var light = 'default-theme';
// #2e2d2d
var filtersdark = '#383838';
var filterswhite = '#ececec';
var headerdark = '#212121';
var headerwhite = '#db4c3f';
var bgdark = '#3d3d3d';
var bgwhite = '';
var textdark = '#000000';
var textwhite = '#ffffff';
var ThemesService = /** @class */ (function () {
    function ThemesService(overlayContainer) {
        this.overlayContainer = overlayContainer;
        this.isdarktheme = false;
        this.filtersColor = "";
        this.bgColor = "";
        this.textColor = "";
        this.headerColor = "";
    }
    ThemesService.prototype.toggleTheme = function () {
        console.log("hello i am here");
        this.isdarktheme = !this.isdarktheme;
        if (this.isdarktheme) {
            // this.overlayContainer.getContainerElement().classList.add(dark);
            // this.overlayContainer.getContainerElement().classList.remove(light);
            // this.componentCssClass = dark;
            this.filtersColor = filtersdark;
            this.bgColor = bgdark;
            this.textColor = textwhite;
            this.headerColor = headerdark;
            // localStorage.setItem("theme", dark);
            return true;
        }
        else {
            // this.overlayContainer.getContainerElement().classList.add(light);
            // this.overlayContainer.getContainerElement().classList.remove(dark);
            // this.componentCssClass = light;
            this.filtersColor = filterswhite;
            this.bgColor = bgwhite;
            this.textColor = textdark;
            this.headerColor = headerwhite;
            // localStorage.setItem("theme", light);
            return false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], ThemesService.prototype, "componentCssClass", void 0);
    ThemesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"]])
    ], ThemesService);
    return ThemesService;
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