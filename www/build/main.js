webpackJsonp([0],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return signInHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_signIn_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_member_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var signInHistoryPage = (function () {
    function signInHistoryPage(navCtrl, navParams, storage, signInService, memberService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.signInService = signInService;
        this.memberService = memberService;
        storage.get('member_id').then(function (val) {
            console.log("Member info: ", val);
            _this.signIns = signInService.getSignInOfMember(val);
            var result = memberService.getMember(val);
            result.subscribe(function (member_info) {
                _this.member = member_info[0];
            });
        });
    }
    return signInHistoryPage;
}());
signInHistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signInHistory',template:/*ion-inline-start:"C:\Users\Farrah\Desktop\QR Gym System\src\pages\signInHistory\signInHistory.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Sign In History</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item>\n            <div>\n                <p>\n                    {{ member?.firstname }} {{ member?.lastname }}\n                    <span id="memberid">{{ member?.id }}</span>\n                </p>\n                <hr>\n                <p>Register Date :\n                    <span id="signin">{{ member?.add_date }}</span>\n                </p>\n                <p id="email">Email :\n                    <span id="emailaddress">{{ member?.email }}</span>\n                </p>\n                </div>\n                </ion-item>\n\n        <ion-item *ngFor="let signIn of signIns | async">\n            <ion-label>{{signIn.signIn_date}} {{signIn.signIn_time}}</ion-label>\n            <ion-checkbox checked="true"></ion-checkbox>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Farrah\Desktop\QR Gym System\src\pages\signInHistory\signInHistory.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__service_signIn_service__["a" /* SignInService */], __WEBPACK_IMPORTED_MODULE_4__service_member_service__["a" /* MemberService */]])
], signInHistoryPage);

//# sourceMappingURL=signInHistory.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignInService = (function () {
    function SignInService(firebase) {
        this.firebase = firebase;
    }
    SignInService.prototype.getSignInOfMember = function (signIn_id) {
        console.log("Sign In Service : get Sign In of Member");
        return this.firebase.list('Sign In/' + signIn_id).valueChanges();
    };
    SignInService.prototype.getSignInOfMember1 = function (member_id) {
        console.log("Sign In Service : get Sign In of Member");
        return this.firebase.list('Sign In/' + member_id).valueChanges();
    };
    SignInService.prototype.newSignIn = function (signIn) {
        this.firebase.list('Sign In/' + signIn.signIn_id).set(signIn.signIn_date + ' ' + signIn.signIn_time, signIn);
        return true;
    };
    return SignInService;
}());
SignInService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], SignInService);

//# sourceMappingURL=signIn.service.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 223;

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signInHistory_signInHistory__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loginPage_loginPage__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editProfile_editProfile__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_member_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, navParams, storage, memberService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.memberService = memberService;
        this.signInHistory = __WEBPACK_IMPORTED_MODULE_3__signInHistory_signInHistory__["a" /* signInHistoryPage */];
        this.EditProfile = __WEBPACK_IMPORTED_MODULE_5__editProfile_editProfile__["a" /* EditProfilePage */];
        storage.get('member_id').then(function (val) {
            if (val == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__loginPage_loginPage__["a" /* LoginPage */]);
            }
            else {
                var obs = memberService.getMember(val);
                obs.subscribe(function (member_info) {
                    _this.member = member_info[0];
                });
            }
        });
    }
    HomePage.prototype.logout = function () {
        this.storage.remove('member_id');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__loginPage_loginPage__["a" /* LoginPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Farrah\Desktop\QR Gym System\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="welcome">\n    <img src="assets/imgs/FPI2.png" alt="Gym Logo" width="220" height="170" padding-left="200" padding-top="50">\n    <h3 padding-left="200">Welcome to the Gym</h3>\n  <ion-list>\n    <ion-item>\n          <li><b>Name :</b> {{ member?.firstname }} {{ member?.lastname }}</li>\n          <br>\n          <li><b>Email :</b> {{ member?.email }}</li>\n          <br>\n          <li><b>Tel :</b> {{ member?.tel }}</li>\n          <br>\n          <li><b>Member ID :</b> {{ member?.id }}</li>\n          <br>\n          <li><b>Signed Up :</b> {{ member?.add_date }}</li>\n    </ion-item>\n    <ion-item>\n      <button [navPush]="signInHistory" type="button" id="blueButton">Sign In Information</button>\n    </ion-item>\n    <ion-item>\n      <button [navPush]="EditProfile" type="button" id="greyButton">Edit Profile</button>\n    </ion-item>\n    <ion-item>\n      <button (click)="logout()" type="button" id="redButton">Sign Out</button>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Farrah\Desktop\QR Gym System\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__service_member_service__["a" /* MemberService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_member__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_member_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ts_md5_dist_md5__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ts_md5_dist_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(navCtrl, storage, memberService) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.memberService = memberService;
        this.memberinfo = new __WEBPACK_IMPORTED_MODULE_5__model_member__["a" /* Member */]();
        this.ngAfterViewInit();
    }
    LoginPage.prototype.GotoSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        // console.log("username",(this.userdata));
        var memberlist = this.memberService.getMemberByEmail(this.memberinfo.email);
        if (memberlist) {
            memberlist.forEach(function (val) {
                if (val.length > 0) {
                    var pass = __WEBPACK_IMPORTED_MODULE_7_ts_md5_dist_md5__["Md5"].hashStr(_this.memberinfo.password);
                    if (val[0].password == pass.toString()) {
                        _this.storage.set("member_id", val[0].id);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                    }
                }
            });
        }
        this.error = "Invalid Email and Password, Please re-check your email and password";
    };
    LoginPage.prototype.ngAfterViewInit = function () {
        var tabs = document.querySelectorAll('.show-tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = 'none';
            });
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-loginPage',template:/*ion-inline-start:"C:\Users\Farrah\Desktop\QR Gym System\src\pages\loginPage\loginPage.html"*/'<ion-content padding id="welcome">\n    <img src="assets/imgs/FPI2.png" alt="Gym Logo" width="350" height="300">\n    <h1>Welcome to the Gym</h1>\n    <div>Please Sign in to gain access to gym</div>\n  <form #loginForm="ngForm" (ngSubmit)="login()" autocomplete="off">\n\n        <ion-list>\n          <ion-item id="welcome">\n              <ion-label floating>Email</ion-label>\n            <ion-input  name="email" id="loginField" pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"  type="text" required [(ngModel)]="memberinfo.email" #email></ion-input>\n          </ion-item>\n          <ion-item id="welcome">\n              <ion-label floating>Password</ion-label>\n            <ion-input name="password" id="passwordField" type="password" required [(ngModel)]="memberinfo.password"></ion-input>\n          </ion-item>\n        </ion-list>\n\n        <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n\n        <button id="button" ion-button block color="primary"  full type="submit" [disabled]="!loginForm.form.valid">Login</button>\n        <button  ion-button block color="dark"  full type="button" (click)="GotoSignup()">Sign Up</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Farrah\Desktop\QR Gym System\src\pages\loginPage\loginPage.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__service_member_service__["a" /* MemberService */]])
], LoginPage);

//# sourceMappingURL=loginPage.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_member__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_member_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ts_md5_dist_md5__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ts_md5_dist_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var QRCode = __webpack_require__(325);
var currentdate = new Date();
var SignupPage = (function () {
    function SignupPage(navCtrl, storage, memberService) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.memberService = memberService;
        this.value = 'https://www.techiediaries.com';
        this.version = '';
        this.errorCorrectionLevel = 'M';
        this.member = new __WEBPACK_IMPORTED_MODULE_4__model_member__["a" /* Member */]();
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        if (this.matchPassword(this.member)) {
            console.log("Passwords Dont Match!!!");
            this.error = "Password and Confirm Password Dont Match";
        }
        else if (this.member.password.length < 6) {
            console.log("Password is too short");
            this.error = "Password is too short (min 6 chars).";
        }
        else if (this.checkValidEmail(this.member.email)) {
            console.log("Email address already in System ");
            this.error = "Email address entered already in system";
        }
        else {
            this.deleteconfirm(this.member);
            var pass = __WEBPACK_IMPORTED_MODULE_7_ts_md5_dist_md5__["Md5"].hashStr(this.member.password);
            this.member.password = pass.toString();
            this.member.add_date = "Date: " + currentdate.getDate() + "-" + (1 + currentdate.getMonth())
                + "-" + currentdate.getFullYear() + " Time: "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":" + currentdate.getSeconds();
            ;
            this.value = this.memberService.pushMember(this.member);
            this.storage.get('id').then(function (val) {
                if (val != null) {
                    _this.member.id = val;
                }
                else {
                    console.log(_this.member);
                    _this.member.id = _this.member.id;
                    _this.toDataURL().then(function (url) {
                        _this.image = url;
                        console.log(url);
                        var storageRef = __WEBPACK_IMPORTED_MODULE_6_firebase__["storage"]().ref('/images/' + _this.member.id + '/');
                        var imageRef = __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref('/URL For QR Codes/' + _this.member.id + '/');
                        storageRef.putString(_this.image, 'data_url').then(function (snapshot) {
                            console.log('Uploaded a base64 string!');
                            storageRef.getDownloadURL().then(function (url) {
                                imageRef.child('/').set(url);
                            });
                        });
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
                    }).catch(function (e) {
                        console.error(e);
                    });
                }
            });
        }
    };
    SignupPage.prototype.matchPassword = function (group) {
        if (group.password == group.password2) {
            return false;
        }
        return true;
    };
    SignupPage.prototype.deleteconfirm = function (group) {
        delete group.password2;
    };
    SignupPage.prototype.checkValidEmail = function (email) {
        var result = this.memberService.getMemberByEmail(email);
        console.log(result);
        result.subscribe(function (k) {
            if (k.length > 0) {
                return false;
            }
            else {
                return true;
            }
        });
    };
    SignupPage.prototype.toDataURL = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            QRCode.toDataURL(_this.value, { version: _this.version, errorCorrectionLevel: _this.errorCorrectionLevel }, function (err, url) {
                if (url) {
                    //console.log(url);
                    resolve(url);
                }
                else {
                    console.error(err);
                    reject(err);
                }
            });
        });
    };
    return SignupPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('qrc-value'),
    __metadata("design:type", Object)
], SignupPage.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('qrc-version'),
    __metadata("design:type", String)
], SignupPage.prototype, "version", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('qrc-errorCorrectionLevel'),
    __metadata("design:type", String)
], SignupPage.prototype, "errorCorrectionLevel", void 0);
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Farrah\Desktop\QR Gym System\src\pages\signup\signup.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    Registration\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="welcome">\n\n  <form #loginForm="ngForm" (ngSubmit)="signup();" autocomplete="off">\n        <ion-list>\n          <ion-item id="welcome">\n              <ion-label floating>Email</ion-label>\n            <ion-input name="email" id="loginField" type="text" pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})" required [(ngModel)]="member.email" clearInput="true" ></ion-input>\n          </ion-item>\n          <ion-item id="welcome">\n              <ion-label floating>Password</ion-label>\n            <ion-input name="password" id="passwordField" type="password" required [(ngModel)]="member.password" max="5"></ion-input>\n          </ion-item>\n          <ion-item id="welcome">\n              <ion-label floating>Confirm Password</ion-label>\n            <ion-input name="password2" id="passwordField2" type="password" required [(ngModel)]="member.password2" ></ion-input>\n          </ion-item>\n          <ion-item id="welcome">\n              <ion-label floating>First Name</ion-label>\n            <ion-input name="firstname" id="firstname" type="text" required [(ngModel)]="member.firstname"  clearInput="true"></ion-input>\n          </ion-item>\n          <ion-item id="welcome">\n              <ion-label floating>Last Name</ion-label>\n            <ion-input name="lastname" id="lastname" type="text" required [(ngModel)]="member.lastname"  clearInput="true"></ion-input>\n          </ion-item>\n          <ion-item id="welcome">\n              <ion-label floating>Telelphone</ion-label>\n            <ion-input name="tel" id="tel" type="number" required [(ngModel)]="member.tel"  clearInput="true"></ion-input>\n          </ion-item>\n        </ion-list>\n\n        <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n        <button ion-button block class="submit-btn" full type="submit" [disabled]="!loginForm.form.valid" (ngSubmit)="addmember();">Sign Up\n        </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Farrah\Desktop\QR Gym System\src\pages\signup\signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__service_member_service__["a" /* MemberService */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_member__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_member_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditProfilePage = (function () {
    function EditProfilePage(navCtrl, storage, memberService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.memberService = memberService;
        this.member = new __WEBPACK_IMPORTED_MODULE_4__model_member__["a" /* Member */]();
        storage.get('member_id').then(function (val) {
            var obs = memberService.getMember(val);
            obs.subscribe(function (member_info) {
                _this.member = member_info[0];
            });
        });
    }
    EditProfilePage.prototype.editProfile = function () {
        // this.userService.pushUser(this.user);
        if (this.memberService.updateMember(this.member)) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }
    };
    return EditProfilePage;
}());
EditProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\Farrah\Desktop\QR Gym System\src\pages\editProfile\editProfile.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Member Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #loginForm="ngForm" (ngSubmit)="editProfile();" autocomplete="off">\n    <ion-list>\n      <ion-item id="welcome">\n          <ion-label floating>Email</ion-label>\n        <ion-input name="email" id="loginField" type="text" pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})" required [(ngModel)]="member.email" clearInput="true" ></ion-input>\n      </ion-item>\n      <ion-item id="welcome">\n          <ion-label floating>First Name</ion-label>\n        <ion-input name="firstname" id="firstname" type="text" required [(ngModel)]="member.firstname"  clearInput="true"></ion-input>\n      </ion-item>\n      <ion-item id="welcome">\n          <ion-label floating>Last Name</ion-label>\n        <ion-input name="lastname" id="lastname" type="text" required [(ngModel)]="member.lastname"  clearInput="true"></ion-input>\n      </ion-item>\n      <ion-item id="welcome">\n          <ion-label floating>Telelphone</ion-label>\n        <ion-input name="tel" id="tel" type="number" required [(ngModel)]="member.tel"  clearInput="true"></ion-input>\n      </ion-item>\n    </ion-list>\n\n        <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n        <button ion-button class="submit-btn" full type="submit" [disabled]="!loginForm.form.valid">Update User </button>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Farrah\Desktop\QR Gym System\src\pages\editProfile\editProfile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__service_member_service__["a" /* MemberService */]])
], EditProfilePage);

//# sourceMappingURL=editProfile.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_signIn_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_signIn__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_member_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_toast_toast_controller__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QrScanPage = (function () {
    function QrScanPage(barcodeScanner, signInService, memberService, storage, toastCtrl) {
        this.barcodeScanner = barcodeScanner;
        this.signInService = signInService;
        this.memberService = memberService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.qr = null;
        this.generateCode = null;
        this.scannedCode = null;
        this.signIn = new __WEBPACK_IMPORTED_MODULE_3__model_signIn__["a" /* SignIn */]();
        this.scanCode();
    }
    QrScanPage.prototype.generatedCode = function () {
        this.generateCode = this.qr;
    };
    QrScanPage.prototype.scanCode = function () {
        var _this = this;
        this.storage.get('member_id').then(function (val) {
            _this.barcodeScanner.scan().then(function (barcodeData) {
                if (barcodeData.text != "") {
                    var result = _this.memberService.getMember(barcodeData.text);
                    result.subscribe(function (member_info) {
                        _this.signIn.signIn_id = barcodeData.text;
                        _this.signIn.member_name = member_info[0].firstname + ' ' + member_info[0].lastname;
                        var current_date = new Date();
                        _this.signIn.signIn_date = current_date.getFullYear().toString() + '-' + (current_date.getMonth() + 1).toString() + '-' + (current_date.getDate() < 10 ? "0" + current_date.getDate() : current_date.getDate().toString());
                        _this.signIn.signIn_time = current_date.getHours().toString() + ':' + (current_date.getMinutes() < 10 ? "0" + current_date.getMinutes().toString() : current_date.getMinutes().toString());
                        _this.signInService.newSignIn(_this.signIn);
                        _this.scanCode();
                    });
                    _this.storage.get('member_id').then(function (val) {
                        _this.signIn.member_id = val;
                    });
                    var toast = _this.toastCtrl.create({
                        message: 'Member Signed In',
                        duration: 1500
                    });
                    toast.present();
                }
            }, function (err) {
                console.log('Error: ', err);
            });
        });
    };
    return QrScanPage;
}());
QrScanPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-QrScanPage',template:/*ion-inline-start:"C:\Users\Farrah\Desktop\QR Gym System\src\pages\QrScanPage\QrScanPage.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      QR Scanning Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content padding>\n  <button ion-button full icon-left (click)="scanCode()" color="secondary"><ion-icon name="qr-scanner"></ion-icon>Scan Code</button>    \n  <ion-card *ngIf="scannedCode">\n    <ion-card-content>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\Farrah\Desktop\QR Gym System\src\pages\QrScanPage\QrScanPage.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_2__service_signIn_service__["a" /* SignInService */],
        __WEBPACK_IMPORTED_MODULE_5__service_member_service__["a" /* MemberService */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
], QrScanPage);

//# sourceMappingURL=QrScanPage.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_memberDetails__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_memberDetails_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_toast_toast_controller__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_member__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_member_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ChartsPage = (function () {
    function ChartsPage(navCtrl, memberDetailsService, storage, memberService, navParams, db, toastCtrl) {
        this.navCtrl = navCtrl;
        this.memberDetailsService = memberDetailsService;
        this.storage = storage;
        this.memberService = memberService;
        this.navParams = navParams;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.cats = [
            { value: 0, name: 'Weight' },
            { value: 1, name: 'Height' },
            { value: 2, name: 'Bodyfat' },
            { value: 3, name: 'Waist' },
            { value: 4, name: 'Bust' },
            { value: 5, name: 'BMI' },
        ];
        this.details = {
            member_id: null,
            value: 0,
            loss: false,
            cat: 0,
            date: null,
        };
        this.chartData = null;
        this.memberDetails = new __WEBPACK_IMPORTED_MODULE_3__model_memberDetails__["a" /* MemberDetails */];
        this.member = new __WEBPACK_IMPORTED_MODULE_8__model_member__["a" /* Member */];
        storage.get('member_id').then(function (val) {
            // this.user=db.list('User').valueChanges();
            // console.log("user id: ",val)    
        });
    }
    ChartsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('member_id').then(function (val) {
            _this.member.member_id = val;
            _this.firebase = _this.db.list('Members Details/' + _this.member.member_id, function (ref) { return ref.orderByChild('member_id'); });
            // Catch any update to draw the Chart
            _this.firebase.valueChanges().subscribe(function (result) {
                if (_this.chartData) {
                    _this.updateCharts(result);
                }
                else {
                    _this.createCharts(result);
                }
            });
        });
    };
    ChartsPage.prototype.addmemberdetails = function () {
        var _this = this;
        this.storage.get('member_id').then(function (val) {
            if (val != null) {
                _this.member.member_id = val;
                _this.details.member_id = val;
                _this.firebase.push(_this.details).then(function () {
                    _this.details = {
                        member_id: val,
                        value: 0,
                        cat: 0,
                        loss: false,
                        date: new Date()
                    };
                    console.log(_this.details);
                    var toast = _this.toastCtrl.create({
                        message: 'New Member Details added',
                        duration: 2000
                    });
                    toast.present();
                });
            }
        });
    };
    ChartsPage.prototype.getReport = function () {
        var reportByCategory = {
            'Weight': null,
            'Height': null,
            'Bodyfat': null,
            'Waist': null,
            'Bust': null,
            'BMI': null
        };
        for (var _i = 0, _a = this.chartData; _i < _a.length; _i++) {
            var trans = _a[_i];
            if (reportByCategory[trans.cat]) {
                if (trans.loss) {
                    reportByCategory[trans.cat] -= +trans.value;
                }
                else {
                    reportByCategory[trans.cat] += +trans.value;
                }
            }
            else {
                if (trans.loss) {
                    reportByCategory[trans.cat] = 0 - +trans.value;
                }
                else {
                    reportByCategory[trans.cat] = +trans.value;
                }
            }
        }
        return Object.keys(reportByCategory).map(function (a) { return reportByCategory[a]; });
    };
    ChartsPage.prototype.createCharts = function (data) {
        var _this = this;
        this.chartData = data;
        // Calculate Values for the Chart
        var chartData = this.getReport();
        // Create the chart
        this.valueBarsChart = new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](this.valueBarsCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: Object.keys(this.cats).map(function (a) { return _this.cats[a].name; }),
                datasets: [{
                        data: chartData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        label: function (tooltipItems, data) {
                            return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' ';
                        }
                    }
                },
                scales: {
                    xAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    yAxes: [{
                            ticks: {
                                callback: function (value, index, values) {
                                    return value + '';
                                },
                                suggestedMin: 0
                            }
                        }]
                },
            }
        });
        // Create the chart
        this.barChart = new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: Object.keys(this.cats).map(function (a) { return _this.cats[a].name; }),
                datasets: [{
                        data: chartData,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        label: function (tooltipItems, data) {
                            return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' ';
                        }
                    }
                },
                scales: {
                    xAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    yAxes: [{
                            ticks: {
                                callback: function (value, index, values) {
                                    return value + '';
                                },
                                suggestedMin: 0
                            }
                        }]
                },
            }
        });
    };
    ChartsPage.prototype.updateCharts = function (data) {
        this.chartData = data;
        var chartData = this.getReport();
        // Update our dataset
        this.valueBarsChart.data.datasets.forEach(function (dataset) {
            dataset.data = chartData;
        });
        this.valueBarsChart.update();
        this.barChart.data.datasets.forEach(function (dataset) {
            dataset.data = chartData;
        });
        this.barChart.update();
    };
    return ChartsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('valueBarsCanvas'),
    __metadata("design:type", Object)
], ChartsPage.prototype, "valueBarsCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('barCanvas'),
    __metadata("design:type", Object)
], ChartsPage.prototype, "barCanvas", void 0);
ChartsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-charts',template:/*ion-inline-start:"C:\Users\Farrah\Desktop\QR Gym System\src\pages\charts\charts.html"*/'<ion-header>\n\n        <ion-navbar>\n\n          <ion-title>\n\n            Charts\n\n          </ion-title>\n\n        </ion-navbar>\n\n      </ion-header>\n\n      \n\n      <ion-content padding>\n\n        <ion-row align-items-end>\n\n          <ion-col col-2>\n\n            <button ion-button icon-only outline (click)="details.loss = !details.loss" [color]="details.loss ? \'danger\' : \'primary\'">\n\n              <ion-icon name="remove" *ngIf="details.loss"></ion-icon>\n\n              <ion-icon name="add" *ngIf="!details.loss"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col col-5>\n\n            <ion-item>\n\n              <ion-label floating>Value</ion-label>\n\n              <ion-input type="number" [(ngModel)]="details.value"></ion-input>\n\n            </ion-item>\n\n      \n\n          </ion-col>\n\n          <ion-col col-5>\n\n            <ion-item>\n\n              <ion-label floating>Category</ion-label>\n\n              <ion-select [(ngModel)]="details.cat">\n\n                <ion-option [value]="cat.value" *ngFor="let cat of cats">{{ cat.name }}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n      \n\n          </ion-col>\n\n        </ion-row>\n\n      \n\n        <ion-row>\n\n          <ion-col>\n\n            <button ion-button full (click)="addmemberdetails()">Add Data</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      \n\n        <ion-card [hidden]="!chartData">\n\n          <ion-card-header>\n\n            Bar Chart Analytics\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            <canvas #valueBarsCanvas></canvas>\n\n          </ion-card-content>\n\n        </ion-card>\n\n        <ion-card [hidden]="!chartData">\n\n          <ion-card-header>\n\n            Line Chart Analytics\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            <canvas #barCanvas></canvas>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-content>'/*ion-inline-end:"C:\Users\Farrah\Desktop\QR Gym System\src\pages\charts\charts.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__service_memberDetails_service__["a" /* MemberDetailsService */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_9__service_member_service__["a" /* MemberService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
], ChartsPage);

//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberDetailsService = (function () {
    function MemberDetailsService(firebase) {
        this.firebase = firebase;
    }
    MemberDetailsService.prototype.getMembersDetailsofMembers = function (id) {
        console.log("Member Details Service : get member details list");
        return this.firebase.list('Members Details/', function (ref) { return ref.orderByChild('member_id').equalTo(id); }).valueChanges();
    };
    MemberDetailsService.prototype.getMemberDetails = function (member_id) {
        console.log("Member Service : get member");
        return this.firebase.list('Members Details', function (ref) { return ref.orderByChild('member_id').equalTo(member_id); }).valueChanges();
    };
    MemberDetailsService.prototype.pushMemberDetails = function (info) {
        console.log("Member Details Service: Add new member details information");
        var Ran = this.firebase.list('Members Details').push(null);
        console.log(Ran.key);
        info.member_id = Ran.key;
        Ran.set(info);
        return Ran.key;
    };
    return MemberDetailsService;
}());
MemberDetailsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], MemberDetailsService);

//# sourceMappingURL=memberDetails.service.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberService = (function () {
    function MemberService(firebase) {
        this.firebase = firebase;
    }
    MemberService.prototype.getMembers = function () {
        console.log("Member Service : get members list");
        return this.firebase.list('Member').valueChanges();
        ;
    };
    MemberService.prototype.getMember1 = function (member_id) {
        console.log("Member Service: get Members list of Member");
        return this.firebase.list('Member/', function (ref) { return ref.orderByChild('id').equalTo(member_id); }).valueChanges();
    };
    MemberService.prototype.getMember = function (id) {
        console.log("Member Service : get member");
        return this.firebase.list('Member', function (ref) { return ref.orderByChild('id').equalTo(id); }).valueChanges();
    };
    MemberService.prototype.getMemberByEmail = function (email) {
        console.log("Member Service : get member");
        return this.firebase.list('Member/', function (ref) { return ref.orderByChild('email').equalTo(email); }).valueChanges();
    };
    MemberService.prototype.pushMember = function (info) {
        var Ran = this.firebase.list('Member').push(null);
        console.log(Ran.key);
        info.id = Ran.key;
        Ran.set(info);
        return Ran.key;
    };
    MemberService.prototype.updateMember = function (info) {
        console.log(JSON.stringify(info));
        this.firebase.list('Member').set(info.id + "", info);
        return true;
    };
    return MemberService;
}());
MemberService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], MemberService);

//# sourceMappingURL=member.service.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_member_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var img;
var QrViewPage = (function () {
    function QrViewPage(navCtrl, navParams, storage, memberService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.memberService = memberService;
        storage.get('id').then(function (val) {
            _this.member = memberService.getMember(val);
        });
    }
    QrViewPage.prototype.ionViewDidLoad = function () {
        this.storage.get('member_id').then(function (val) {
            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref('/images/' + val);
            storageRef.getDownloadURL().then(function (url) {
                // `url` is the download URL for 'images/stars.jpg'
                // This can be downloaded directly:
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = function (event) {
                    var blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();
                // Or inserted into an <img> element:
                img = document.getElementById('myimg');
                img.src = url;
                console.log(this.img.src);
            }).catch(function (error) {
                // Handle any errors
            });
        });
    };
    return QrViewPage;
}());
QrViewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-QrViewPage',template:/*ion-inline-start:"C:\Users\Farrah\Desktop\QR Gym System\src\pages\QrViewPage\QrViewPage.html"*/'    <ion-header>\n\n        <ion-navbar>\n\n          <ion-title>\n\n            QR Code\n\n          </ion-title>\n\n        </ion-navbar>\n\n      </ion-header>\n\n      \n\n      <ion-content padding>\n\n        <ion-list>\n\n          <ion-item>\n\n            <img id="myimg" [src]="myimg">\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-content>'/*ion-inline-end:"C:\Users\Farrah\Desktop\QR Gym System\src\pages\QrViewPage\QrViewPage.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__service_member_service__["a" /* MemberService */]])
], QrViewPage);

//# sourceMappingURL=QrViewPage.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(473);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signInHistory_signInHistory__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_QrScanPage_QrScanPage__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_loginPage_loginPage__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_editProfile_editProfile__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_QrViewPage_QrViewPage__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_charts_charts__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_signIn_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_memberDetails_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_member_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_qrcode2__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_barcode_scanner__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_auth__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_date_picker__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ts_md5_dist_md5__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ts_md5_dist_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Page









//Services













var firebaseConfig = {
    apiKey: "AIzaSyD474kj_BJr30KxuUlpazZ-wnvck8clCHQ",
    authDomain: "test-cc62e.firebaseapp.com",
    databaseURL: "https://test-cc62e.firebaseio.com",
    projectId: "test-cc62e",
    storageBucket: "test-cc62e.appspot.com",
    messagingSenderId: "29981412656"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_QrScanPage_QrScanPage__["a" /* QrScanPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_signInHistory_signInHistory__["a" /* signInHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_loginPage_loginPage__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_editProfile_editProfile__["a" /* EditProfilePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_charts_charts__["a" /* ChartsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_QrViewPage_QrViewPage__["a" /* QrViewPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_19_ngx_qrcode2__["a" /* NgxQRCodeModule */],
            __WEBPACK_IMPORTED_MODULE_21_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_23_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_19_ngx_qrcode2__["a" /* NgxQRCodeModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_QrScanPage_QrScanPage__["a" /* QrScanPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_loginPage_loginPage__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_signInHistory_signInHistory__["a" /* signInHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_editProfile_editProfile__["a" /* EditProfilePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_charts_charts__["a" /* ChartsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_QrViewPage_QrViewPage__["a" /* QrViewPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_13__service_signIn_service__["a" /* SignInService */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_25_ts_md5_dist_md5__["Md5"],
            __WEBPACK_IMPORTED_MODULE_15__service_member_service__["a" /* MemberService */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_14__service_memberDetails_service__["a" /* MemberDetailsService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Farrah\Desktop\QR Gym System\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Farrah\Desktop\QR Gym System\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignIn; });
var SignIn = (function () {
    function SignIn() {
    }
    return SignIn;
}());

//# sourceMappingURL=signIn.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetails; });
var MemberDetails = (function () {
    function MemberDetails() {
    }
    return MemberDetails;
}());

//# sourceMappingURL=memberDetails.js.map

/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 340,
	"./af.js": 340,
	"./ar": 341,
	"./ar-dz": 342,
	"./ar-dz.js": 342,
	"./ar-kw": 343,
	"./ar-kw.js": 343,
	"./ar-ly": 344,
	"./ar-ly.js": 344,
	"./ar-ma": 345,
	"./ar-ma.js": 345,
	"./ar-sa": 346,
	"./ar-sa.js": 346,
	"./ar-tn": 347,
	"./ar-tn.js": 347,
	"./ar.js": 341,
	"./az": 348,
	"./az.js": 348,
	"./be": 349,
	"./be.js": 349,
	"./bg": 350,
	"./bg.js": 350,
	"./bn": 351,
	"./bn.js": 351,
	"./bo": 352,
	"./bo.js": 352,
	"./br": 353,
	"./br.js": 353,
	"./bs": 354,
	"./bs.js": 354,
	"./ca": 355,
	"./ca.js": 355,
	"./cs": 356,
	"./cs.js": 356,
	"./cv": 357,
	"./cv.js": 357,
	"./cy": 358,
	"./cy.js": 358,
	"./da": 359,
	"./da.js": 359,
	"./de": 360,
	"./de-at": 361,
	"./de-at.js": 361,
	"./de-ch": 362,
	"./de-ch.js": 362,
	"./de.js": 360,
	"./dv": 363,
	"./dv.js": 363,
	"./el": 364,
	"./el.js": 364,
	"./en-au": 365,
	"./en-au.js": 365,
	"./en-ca": 366,
	"./en-ca.js": 366,
	"./en-gb": 367,
	"./en-gb.js": 367,
	"./en-ie": 368,
	"./en-ie.js": 368,
	"./en-nz": 369,
	"./en-nz.js": 369,
	"./eo": 370,
	"./eo.js": 370,
	"./es": 371,
	"./es-do": 372,
	"./es-do.js": 372,
	"./es.js": 371,
	"./et": 373,
	"./et.js": 373,
	"./eu": 374,
	"./eu.js": 374,
	"./fa": 375,
	"./fa.js": 375,
	"./fi": 376,
	"./fi.js": 376,
	"./fo": 377,
	"./fo.js": 377,
	"./fr": 378,
	"./fr-ca": 379,
	"./fr-ca.js": 379,
	"./fr-ch": 380,
	"./fr-ch.js": 380,
	"./fr.js": 378,
	"./fy": 381,
	"./fy.js": 381,
	"./gd": 382,
	"./gd.js": 382,
	"./gl": 383,
	"./gl.js": 383,
	"./gom-latn": 384,
	"./gom-latn.js": 384,
	"./he": 385,
	"./he.js": 385,
	"./hi": 386,
	"./hi.js": 386,
	"./hr": 387,
	"./hr.js": 387,
	"./hu": 388,
	"./hu.js": 388,
	"./hy-am": 389,
	"./hy-am.js": 389,
	"./id": 390,
	"./id.js": 390,
	"./is": 391,
	"./is.js": 391,
	"./it": 392,
	"./it.js": 392,
	"./ja": 393,
	"./ja.js": 393,
	"./jv": 394,
	"./jv.js": 394,
	"./ka": 395,
	"./ka.js": 395,
	"./kk": 396,
	"./kk.js": 396,
	"./km": 397,
	"./km.js": 397,
	"./kn": 398,
	"./kn.js": 398,
	"./ko": 399,
	"./ko.js": 399,
	"./ky": 400,
	"./ky.js": 400,
	"./lb": 401,
	"./lb.js": 401,
	"./lo": 402,
	"./lo.js": 402,
	"./lt": 403,
	"./lt.js": 403,
	"./lv": 404,
	"./lv.js": 404,
	"./me": 405,
	"./me.js": 405,
	"./mi": 406,
	"./mi.js": 406,
	"./mk": 407,
	"./mk.js": 407,
	"./ml": 408,
	"./ml.js": 408,
	"./mr": 409,
	"./mr.js": 409,
	"./ms": 410,
	"./ms-my": 411,
	"./ms-my.js": 411,
	"./ms.js": 410,
	"./my": 412,
	"./my.js": 412,
	"./nb": 413,
	"./nb.js": 413,
	"./ne": 414,
	"./ne.js": 414,
	"./nl": 415,
	"./nl-be": 416,
	"./nl-be.js": 416,
	"./nl.js": 415,
	"./nn": 417,
	"./nn.js": 417,
	"./pa-in": 418,
	"./pa-in.js": 418,
	"./pl": 419,
	"./pl.js": 419,
	"./pt": 420,
	"./pt-br": 421,
	"./pt-br.js": 421,
	"./pt.js": 420,
	"./ro": 422,
	"./ro.js": 422,
	"./ru": 423,
	"./ru.js": 423,
	"./sd": 424,
	"./sd.js": 424,
	"./se": 425,
	"./se.js": 425,
	"./si": 426,
	"./si.js": 426,
	"./sk": 427,
	"./sk.js": 427,
	"./sl": 428,
	"./sl.js": 428,
	"./sq": 429,
	"./sq.js": 429,
	"./sr": 430,
	"./sr-cyrl": 431,
	"./sr-cyrl.js": 431,
	"./sr.js": 430,
	"./ss": 432,
	"./ss.js": 432,
	"./sv": 433,
	"./sv.js": 433,
	"./sw": 434,
	"./sw.js": 434,
	"./ta": 435,
	"./ta.js": 435,
	"./te": 436,
	"./te.js": 436,
	"./tet": 437,
	"./tet.js": 437,
	"./th": 438,
	"./th.js": 438,
	"./tl-ph": 439,
	"./tl-ph.js": 439,
	"./tlh": 440,
	"./tlh.js": 440,
	"./tr": 441,
	"./tr.js": 441,
	"./tzl": 442,
	"./tzl.js": 442,
	"./tzm": 443,
	"./tzm-latn": 444,
	"./tzm-latn.js": 444,
	"./tzm.js": 443,
	"./uk": 445,
	"./uk.js": 445,
	"./ur": 446,
	"./ur.js": 446,
	"./uz": 447,
	"./uz-latn": 448,
	"./uz-latn.js": 448,
	"./uz.js": 447,
	"./vi": 449,
	"./vi.js": 449,
	"./x-pseudo": 450,
	"./x-pseudo.js": 450,
	"./yo": 451,
	"./yo.js": 451,
	"./zh-cn": 452,
	"./zh-cn.js": 452,
	"./zh-hk": 453,
	"./zh-hk.js": 453,
	"./zh-tw": 454,
	"./zh-tw.js": 454
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 682;

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__QrScanPage_QrScanPage__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charts_charts__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__QrViewPage_QrViewPage__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signInHistory_signInHistory__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__QrScanPage_QrScanPage__["a" /* QrScanPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__signInHistory_signInHistory__["a" /* signInHistoryPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__charts_charts__["a" /* ChartsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__QrViewPage_QrViewPage__["a" /* QrViewPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Farrah\Desktop\QR Gym System\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex="2">\n  <ion-tab [root]="tab1Root" tabTitle="Scanner" tabIcon="qr-scanner"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="History" tabIcon="book"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Home" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Charts" tabIcon="stats"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="QR Code" tabIcon="qr-scanner"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Farrah\Desktop\QR Gym System\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Member; });
var Member = (function () {
    function Member() {
        this.id = null;
        this.firstname = null;
        this.lastname = null;
        this.email = null;
        this.password = null;
        this.tel = null;
    }
    return Member;
}());

//# sourceMappingURL=member.js.map

/***/ })

},[457]);
//# sourceMappingURL=main.js.map