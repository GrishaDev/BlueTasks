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

module.exports = ""

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

module.exports = "*\r\n{\r\n    font-size: 1.2em;\r\n}\r\n.form\r\n{\r\n    position: fixed; /* or absolute */\r\n    top: 50%;\r\n    left: 50%;\r\n    /* bring your own prefixes */\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    background-color: rgba(192, 192, 192, 0.75);\r\n    height: 500px;\r\n    width: 700px;\r\n    /* box-shadow: 0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12); */\r\n}\r\n.header\r\n{\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 0;\r\n    height: 20%;\r\n    /* background-color: red; */\r\n    text-align: center;\r\n    padding-top: 30px;\r\n}\r\n.area\r\n{\r\n    position: absolute;\r\n    /* background-color: blue; */\r\n    top: 20%;\r\n    height: 80%;\r\n    width: 100%;\r\n}\r\nexample-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n.example-container > * {\r\n    width: 50%;\r\n    left: 25%;\r\n  }\r\n.submit\r\n{\r\n    position: absolute;\r\n    bottom: 25%;\r\n}\r\n/* .input\r\n{\r\n    width: 50%;\r\n} */"

/***/ }),

/***/ "./src/app/loginpage/loginpage.component.html":
/*!****************************************************!*\
  !*** ./src/app/loginpage/loginpage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  loginpage works!\n</p> -->\n\n<div class=\"form mat-elevation-z8\">\n    \n        <div class=\"header\">\n            Hello\n        </div>\n        <div class=\"example-container area\">\n            <mat-form-field>\n                <input matInput placeholder=\"User\" class=\"input\" [(ngModel)]=\"username\">\n            </mat-form-field>\n            <br>\n            <button mat-raised-button (click)=\"login()\" color=\"primary\" class=\"submit\" >Check</button>      \n        </div>\n</div>"

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
        // password: string;
        // isvalid:boolean = false;
        // err:string;
        this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
    }
    LoginpageComponent.prototype.ngOnInit = function () {
    };
    // getErrorMessage() {
    // return this.user.hasError('required') ? 'You must enter a value' :
    //     this.user.hasError('email') ? 'Not a valid email' :
    //         '';
    // }
    LoginpageComponent.prototype.login = function () {
        this.userservice.set(this.username);
        this.router.navigate(["home"]);
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

module.exports = "@-webkit-keyframes slideInFromLeft {\r\n    0% {\r\n      -webkit-transform: translateX(-100%);\r\n              transform: translateX(-100%);\r\n    }\r\n    /* 90% {\r\n      transform: translateX(+2%);\r\n    } */\r\n    100% {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n      }\r\n  }\r\n\r\n\r\n@keyframes slideInFromLeft {\r\n    0% {\r\n      -webkit-transform: translateX(-100%);\r\n              transform: translateX(-100%);\r\n    }\r\n    /* 90% {\r\n      transform: translateX(+2%);\r\n    } */\r\n    100% {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n      }\r\n  }\r\n\r\n\r\n.all\r\n{\r\n    width: 100%;\r\n    /* padding: 50px; */\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    text-align: center;\r\n    justify-content: center;\r\n    -webkit-animation: 1s ease-out 0s 1 slideInFromLeft;\r\n            animation: 1s ease-out 0s 1 slideInFromLeft;\r\n}\r\n\r\n\r\n.spaceout\r\n{\r\n    padding: 30px;\r\n}"

/***/ }),

/***/ "./src/app/mainpage/content/content.component.html":
/*!*********************************************************!*\
  !*** ./src/app/mainpage/content/content.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-filters [checklist]='checkboxes' (newdata)=\"dataChanged($event)\"></app-filters>\n<div class=\"all\">\n    <app-task *ngFor=\"let item of filterd_data\" [item]='item' class=\"spaceout\"></app-task>\n</div>\n"

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
        this.filterd_data_nodate = [];
        this.filterd_data_yesdate = [];
    }
    ContentComponent.prototype.ngOnInit = function () {
        console.log("hello do i have data????????????????????????????");
        console.log(this.data);
        // this.checkboxes = this.buildCheckBoxes();
        this.checkboxes = this.logic.buildCheckBoxes(this.data);
        // this.filterd_data = this.logic.makeData(this.data,this.checkboxes);
        this.filterd_data = this.data;
        // this.sortData();
        // this.filterd_data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        this.datasort();
        this.sortDates();
        // this.filterd_data.sort((a, b)=>{ 
        //     return +new Date(a.date) - +new Date(b.date); 
        // }); 
        // this.filterd_data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        // this.filterd_data.sort();
    };
    ContentComponent.prototype.datasort = function () {
        for (var i = 0; i < this.filterd_data.length; i++) {
            // if(this.filterd_data[i].date)
            var date = new Date(this.filterd_data[i].date);
            if (!isNaN(date.getTime())) {
                this.filterd_data[i].date = date;
            }
            else
                this.filterd_data[i].date = "none";
        }
        // this.filterd_data = this.bubbleSort(this.filterd_data);
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
    // bubbleSort(items) {
    //   var length = items.length;
    //   for (var i = 0; i < length; i++) { //Number of passes
    //     for (var j = 0; j < (length - i - 1); j++) { //Notice that j < (length - i)
    //       //Compare the adjacent positions
    //       if (items[j].date > items[j + 1].date) {
    //         console.log("true");
    //         //Swap the numbers
    //         var tmp = items[j]; //Temporary variable to hold the current number
    //         items[j] = items[j + 1]; //Replace current number with adjacent number
    //         items[j + 1] = tmp; //Replace adjacent number with current number
    //       }
    //     }
    //   }
    //   return items;
    // }
    // sortData() {
    //   return this.filterd_data.sort((a, b) => {
    //     return <any>new Date(b.date) - <any>new Date(a.date);
    //   });
    // }
    ContentComponent.prototype.dataChanged = function (data) {
        var isallunchecked = this.logic.isAllUnchecked(data);
        if (!isallunchecked)
            this.filterd_data = this.logic.makeData(this.data, data);
        else
            this.filterd_data = this.data;
        this.sortDates();
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

module.exports = ".filters {\r\n    position: relative;\r\n   left: -50%;\r\n   float: left;\r\n}\r\n\r\n.wrapper\r\n{\r\n    position: relative;\r\n   left: 50%;\r\n   float: left;\r\n}"

/***/ }),

/***/ "./src/app/mainpage/content/filters/filters.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/mainpage/content/filters/filters.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <mat-card class=\"mat-elevation-z8 centered filters\" color=\"primary\">\n      <mat-checkbox *ngFor=\"let item of checklist\" [(ngModel)]=\"item.isSelected\" style=\"margin-right: 10px;\" (change)=\"checkBoxClick(item.value,$event.checked)\" color=\"warn\">{{item.value}}</mat-checkbox>\n  </mat-card>\n</div>"

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
        this.newdata = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FiltersComponent.prototype.ngOnInit = function () {
    };
    FiltersComponent.prototype.checkBoxClick = function (filter, checked) {
        if (checked) {
            // this.checkedfilters.push(filter);
            this.checklist = this.logic.tickChecklist(this.checklist, filter, true);
            // console.log(this.checklist);
            // console.log("You checked "+checked+" and here checked filters: "+this.checkedfilters);
            this.newdata.emit(this.checklist);
        }
        else {
            this.checklist = this.logic.tickChecklist(this.checklist, filter, false);
            // console.log("You checked "+checked+" and here checked filters: "+this.checkedfilters);
            var checkedfilters = this.logic.getCheckedFilters(this.checklist);
            if (checkedfilters.length == 0) {
                this.newdata.emit(this.checklist);
                // console.log("here u should get init data..");
                // this.dataSource = new MatTableDataSource<Server>(SERVER_DATA);
                // setTimeout(() => {this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort;});
            }
            else {
                this.newdata.emit(this.checklist);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FiltersComponent.prototype, "checklist", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FiltersComponent.prototype, "newdata", void 0);
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
                //currentdata[i].date != undefined
                if (currentdata[i].date != "none" && checked[j] == "deadline" && !used_data[i]) {
                    if (!this.sameObjectAlreadyThere(newdata, currentdata[i]))
                        newdata.push(currentdata[i]);
                }
            }
        }
        return newdata;
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

module.exports = "@-webkit-keyframes float {\r\n\t0% {\r\n\t\tbox-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);\r\n\t\t-webkit-transform: translatey(0px);\r\n\t\t        transform: translatey(0px);\r\n\t}\r\n\t50% {\r\n\t\tbox-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);\r\n\t\t-webkit-transform: translatey(-20px);\r\n\t\t        transform: translatey(-20px);\r\n\t}\r\n\t100% {\r\n\t\tbox-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);\r\n\t\t-webkit-transform: translatey(0px);\r\n\t\t        transform: translatey(0px);\r\n\t}\r\n}\r\n\r\n\r\n@keyframes float {\r\n\t0% {\r\n\t\tbox-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);\r\n\t\t-webkit-transform: translatey(0px);\r\n\t\t        transform: translatey(0px);\r\n\t}\r\n\t50% {\r\n\t\tbox-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);\r\n\t\t-webkit-transform: translatey(-20px);\r\n\t\t        transform: translatey(-20px);\r\n\t}\r\n\t100% {\r\n\t\tbox-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);\r\n\t\t-webkit-transform: translatey(0px);\r\n\t\t        transform: translatey(0px);\r\n\t}\r\n}\r\n\r\n\r\n.poop\r\n{\r\n    transition-duration: 0.5s;\r\n}\r\n\r\n\r\n.poop:hover\r\n{\r\n    box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);\r\n    -webkit-transform: translateY(-5%);\r\n            transform: translateY(-5%);\r\n}\r\n\r\n\r\n.example-card {\r\n    max-width: 400px;\r\n    min-width: 300px;\r\n    transition-duration: 0.5s;\r\n  }\r\n\r\n\r\n/* .example-card:hover\r\n{\r\n    box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);\r\n    transform: translateY(-5%);\r\n} */\r\n\r\n\r\n/* .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  } */"

/***/ }),

/***/ "./src/app/mainpage/content/task/task.component.html":
/*!***********************************************************!*\
  !*** ./src/app/mainpage/content/task/task.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"poop\">\n  <mat-card class=\"example-card\">\n      <mat-card-header>\n        <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\n        <mat-card-title>{{ item.list }} list</mat-card-title>\n        <mat-card-subtitle>{{ item.board }} board</mat-card-subtitle>\n      </mat-card-header>\n      <!-- <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\n      <mat-card-content>\n        <p>\n          {{ item.text }}\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <!-- <button mat-button>LIKE</button>\n        <button mat-button>SHARE</button> -->\n        <mat-card-subtitle>Deadline: {{ item.date }}</mat-card-subtitle>\n        <mat-card-subtitle>Tags: {{ item.labels }}</mat-card-subtitle>\n      </mat-card-actions>\n  </mat-card>\n</div>"

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

module.exports = "/* .header\r\n{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 15%;\r\n} */\r\n.example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n.title\r\n{\r\n    text-align: center;\r\n    font-size: 2em;\r\n}"

/***/ }),

/***/ "./src/app/mainpage/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/mainpage/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <span>Hello {{ user }}</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n</mat-toolbar>\n\n<p class=\"title\"> Your tasks: </p>"

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
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
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
        __metadata("design:paramtypes", [])
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

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [user]='user'></app-header>\n<app-content *ngIf=\"data.length > 0\" [data]='data'></app-content>"

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
        // this.data = [{text:"important mission1",list:"a good list",board:"bisli",labels:["general"],date:"2019-07-07T09:30",userid:"2"},
        //              {text:"important mission2",list:"better list",board:"bisli",labels:["general","meme"],date:"2026-08-12T15:20",userid:"2"},
        //              {text:"important mission3",list:"better list",board:"bisli",labels:["bamba"],date:"none",userid:"2"},
        //              {text:"important mission4",list:"better list",board:"bisli",labels:["meme","test"],date:undefined,userid:"2"},
        //              {text:"important mission5",list:"better list",board:"bisli",labels:["general"],date:"2019-08-08T13:05",userid:"2"}];
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
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserService.prototype.getData = function () {
        return this.http.get(host + '/api/data/' + this.user);
    };
    UserService.prototype.set = function (user) {
        this.user = user;
        this.change.emit(this.user);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UserService.prototype, "change", void 0);
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