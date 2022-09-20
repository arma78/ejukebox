(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Services/ContactMeService.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/ContactMeService.ts ***!
  \**********************************************/
/*! exports provided: ContactMeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMeService", function() { return ContactMeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");





class ContactMeService {
    constructor(toastService, afAuth, firebase) {
        this.toastService = toastService;
        this.afAuth = afAuth;
        this.firebase = firebase;
        this.addContactRequest = null;
        this.afAuth.authState.subscribe(auth => {
            if (auth !== undefined && auth !== null) {
                this.uid = auth.uid;
            }
        });
        this.addContactRequest = firebase.list('/contactMeList');
    }
    // tslint:disable-next-line:typedef
    showError(error) {
        this.toastService.show('Failed to Submit Form' + error, {
            classname: 'bg-danger text-light',
            delay: 5000,
            autohide: true,
            headertext: 'Error!!!'
        });
    }
    // tslint:disable-next-line:typedef
    showSuccess() {
        this.toastService.show('You have successfully sumbitted form!', {
            classname: 'bg-success text-light',
            delay: 3000,
            autohide: true,
            headertext: 'Success'
        });
    }
    create(contactMe) {
        return this.addContactRequest.push(contactMe).then(() => {
            this.showSuccess();
        })
            .catch(error => this.showError(error));
        ;
    }
}
ContactMeService.ɵfac = function ContactMeService_Factory(t) { return new (t || ContactMeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Services_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"])); };
ContactMeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactMeService, factory: ContactMeService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactMeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");





class AuthenticationService {
    constructor(toastService, afAuth) {
        this.toastService = toastService;
        this.afAuth = afAuth;
        this.user = afAuth.authState;
    }
    // Sign in with Google
    // tslint:disable-next-line:typedef
    GoogleAuth() {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider());
    }
    // Auth logic to run auth providers
    // tslint:disable-next-line:typedef
    AuthLogin(provider) {
        return this.afAuth.auth.signInWithPopup(provider)
            .then((result) => {
            console.log('You have been successfully logged in!');
        }).catch((error) => {
            console.log(error);
        });
    }
    // tslint:disable-next-line:typedef
    login(user) {
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
            .then(() => { this.showSuccess(user.email); })
            .catch(error => this.showError(error));
    }
    // tslint:disable-next-line:typedef
    showSuccess(user) {
        this.toastService.show('Welcome: ' + user, {
            classname: 'bg-success text-light',
            delay: 3000,
            autohide: true,
            headertext: 'User Log-in'
        });
    }
    // tslint:disable-next-line:typedef
    showError(error) {
        this.toastService.show('Login Error - ' + error, {
            classname: 'bg-danger text-light',
            delay: 6000,
            autohide: true,
            headertext: 'Error!!!'
        });
    }
    // tslint:disable-next-line:typedef
    logout() {
        return this.afAuth.auth.signOut();
    }
    // tslint:disable-next-line:typedef
    authUser() {
        return this.user;
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"])); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Services/authenticationGuard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/Services/authenticationGuard.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs/add/operator/take.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class AuthenticationGuard {
    constructor(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.user = afAuth.authState;
    }
    // tslint:disable-next-line:typedef
    canActivate(route, state) {
        return this.user.map((auth) => {
            if (!auth) {
                this.router.navigateByUrl('/login');
                return false;
            }
            return true;
        }).take(1);
    }
}
AuthenticationGuard.ɵfac = function AuthenticationGuard_Factory(t) { return new (t || AuthenticationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthenticationGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthenticationGuard, factory: AuthenticationGuard.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthenticationGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Services/customvalidation.service.ts":
/*!******************************************************!*\
  !*** ./src/app/Services/customvalidation.service.ts ***!
  \******************************************************/
/*! exports provided: CustomvalidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomvalidationService", function() { return CustomvalidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CustomvalidationService {
    patternValidator() {
        return (control) => {
            if (!control.value) {
                return null;
            }
            const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
            const valid = regex.test(control.value);
            return valid ? null : { invalidPassword: true };
        };
    }
}
CustomvalidationService.ɵfac = function CustomvalidationService_Factory(t) { return new (t || CustomvalidationService)(); };
CustomvalidationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomvalidationService, factory: CustomvalidationService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomvalidationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Services/file.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/file.service.ts ***!
  \******************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/storage/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");







class FileService {
    constructor(toastService, storage, afAuth, fire) {
        this.toastService = toastService;
        this.storage = storage;
        this.afAuth = afAuth;
        this.fire = fire;
        this.basePath = '/imageDetails';
        this.dataSet = {
            id: '',
            url: '',
            category: '',
            subcategory: '',
            eventDate: ''
        };
        this.dataSet2 = {
            id: '',
            url: ''
        };
        this.imageGalleryDetail = null;
        this.msg = 'error';
        this.afAuth.authState.subscribe(auth => {
            if (auth !== undefined && auth !== null) {
                this.uid = auth.uid;
            }
        });
    }
    getImageDetailList() {
        this.imageDetailList = this.fire.list('imageDetails');
    }
    insertImageDetails(id, url, category, subcategory, eventDate) {
        this.dataSet = {
            id: id,
            url: url,
            category: category,
            subcategory: subcategory,
            eventDate: eventDate
        };
        this.imageDetailList.push(this.dataSet).then(() => {
        })
            .catch(error => this.showError(error));
    }
    showError(error) {
        this.toastService.show('Failed to Upload/Delete Image' + error, {
            classname: 'bg-danger text-light',
            delay: 5000,
            autohide: true,
            headertext: 'Error!!!'
        });
    }
    insertGalleryDetails(id, url) {
        console.log(id);
        console.log(url);
        this.dataSet2 = {
            id: id,
            url: url,
        };
        this.fire.list('/galleryDetail').push(this.dataSet2).then(() => {
        }).catch(error => this.showError(error));
    }
    showError2(error) {
        this.toastService.show('Failed to Upload' + error, {
            classname: 'bg-danger text-light',
            delay: 5000,
            autohide: true,
            headertext: 'Error!!!'
        });
    }
    // tslint:disable-next-line:typedef
    getFilteredByCaption(file) {
        return this.fire.list('/imageDetails', ref => ref.orderByChild('id').startAt(file).endAt(file + '\uF7FF'));
    }
    // tslint:disable-next-line:typedef
    deleteFileUpload(fileUpload) {
        this.deleteFileDatabase(fileUpload.key)
            .then(() => {
            this.deleteFileStorage(fileUpload.url);
            this.showSuccess();
        })
            .catch(error => this.showError(error));
    }
    // tslint:disable-next-line:typedef
    showSuccess() {
        this.toastService.show('You have successfully deleted image from database!', {
            classname: 'bg-success text-light',
            delay: 3000,
            autohide: true,
            headertext: 'Image Deletion'
        });
    }
    // tslint:disable-next-line:typedef
    deleteFileDatabase(key) {
        return this.fire.list(`${this.basePath}/${key}`).remove();
    }
    // tslint:disable-next-line:typedef
    deleteFileStorage(downloadUrl) {
        return this.storage.storage.refFromURL(downloadUrl).delete();
    }
}
FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"])); };
FileService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileService, factory: FileService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/Services/fileSong.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/fileSong.service.ts ***!
  \**********************************************/
/*! exports provided: FileSongService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSongService", function() { return FileSongService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/storage/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");







class FileSongService {
    // tslint:disable-next-line:max-line-length
    constructor(toastService, storage, afAuth, fire) {
        this.toastService = toastService;
        this.storage = storage;
        this.afAuth = afAuth;
        this.fire = fire;
        this.basePath = '/songlist';
        this.dataSet = { id: '', url: '', genrecategory: '', sequence: '', artist: '', currentplaylist: 'false' };
        // tslint:disable-next-line:no-inferrable-types
        this.msg = 'error';
        this.afAuth.authState.subscribe(auth => {
            if (auth !== undefined && auth !== null) {
                this.uid = auth.uid;
            }
        });
    }
    // tslint:disable-next-line:typedef
    getImageDetailList() {
        this.imageDetailList = this.fire.list('songlist');
    }
    insertImageDetails(id, url, genrecategory, sequence, artist) {
        this.dataSet = {
            // tslint:disable-next-line:object-literal-shorthand
            id: id,
            // tslint:disable-next-line:object-literal-shorthand
            url: url,
            // tslint:disable-next-line:object-literal-shorthand
            genrecategory: genrecategory,
            // tslint:disable-next-line:object-literal-shorthand
            sequence: sequence,
            // tslint:disable-next-line:object-literal-shorthand
            artist: artist,
            currentplaylist: 'false'
        };
        // tslint:disable-next-line:only-arrow-functions
        this.imageDetailList.push(this.dataSet).then(() => {
        })
            .catch(error => this.showError(error));
    }
    // tslint:disable-next-line:typedef
    showError(error) {
        this.toastService.show('Failed to Upload/Delete Image' + error, {
            classname: 'bg-danger text-light',
            delay: 5000,
            autohide: true,
            headertext: 'Error!!!'
        });
    }
    // tslint:disable-next-line:typedef
    getFilteredByCaption(file) {
        return this.fire.list('/songlist', ref => ref.orderByChild('id').startAt(file).endAt(file + '\uF7FF'));
    }
    getSequence() {
        return this.fire.list('/songlist', ref => ref.orderByChild('sequence'));
    }
    // tslint:disable-next-line:typedef
    deleteFileUpload(fileUpload) {
        this.deleteFileDatabase(fileUpload.key)
            .then(() => {
            this.deleteFileStorage(fileUpload.url);
            this.showSuccess();
        })
            .catch(error => this.showError(error));
    }
    // tslint:disable-next-line:typedef
    showSuccess() {
        this.toastService.show('You have successfully deleted image from database!', {
            classname: 'bg-success text-light',
            delay: 3000,
            autohide: true,
            headertext: 'Image Deletion'
        });
    }
    // tslint:disable-next-line:typedef
    deleteFileDatabase(key) {
        return this.fire.list(`${this.basePath}/${key}`).remove();
    }
    // tslint:disable-next-line:typedef
    deleteFileStorage(downloadUrl) {
        return this.storage.storage.refFromURL(downloadUrl).delete();
    }
}
FileSongService.ɵfac = function FileSongService_Factory(t) { return new (t || FileSongService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"])); };
FileSongService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileSongService, factory: FileSongService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSongService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/Services/image.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Services/image.service.ts ***!
  \*******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");





class ImageService {
    constructor(db) {
        this.db = db;
    }
    getImageDetailList() {
        return this.db.list('/imageDetails');
    }
    getLastEvent() {
        return this.db.list('/imageDetails', ref => ref.limitToLast(1));
    }
    // tslint:disable-next-line:typedef
    getFilteredImages(cat, subcat) {
        return this.db.list('/imageDetails', ref => ref.orderByChild('category').equalTo(cat).ref.orderByChild('subcategory').equalTo(subcat));
    }
    // tslint:disable-next-line:typedef
    getGalleryDetail(key) {
        return this.db.list('/galleryDetail', ref => ref.orderByChild('id').equalTo(key));
    }
    // tslint:disable-next-line:typedef
    getImage(key) {
        return firebase__WEBPACK_IMPORTED_MODULE_1__["database"]().ref('imageDetails/' + key).once('value')
            .then((snap) => snap.val());
    }
}
ImageService.ɵfac = function ImageService_Factory(t) { return new (t || ImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"])); };
ImageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImageService, factory: ImageService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Services/select.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/select.service.ts ***!
  \********************************************/
/*! exports provided: SelectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectService", function() { return SelectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _artcategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../artcategory */ "./src/app/artcategory.ts");
/* harmony import */ var _artSubCategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../artSubCategory */ "./src/app/artSubCategory.ts");
/* harmony import */ var _songGenre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../songGenre */ "./src/app/songGenre.ts");





class SelectService {
    // tslint:disable-next-line:typedef
    getSongGenre() {
        return [
            new _songGenre__WEBPACK_IMPORTED_MODULE_3__["SongGenre"]('Dj List', 'Dj List'),
            new _songGenre__WEBPACK_IMPORTED_MODULE_3__["SongGenre"]('Pop', 'Pop'),
            new _songGenre__WEBPACK_IMPORTED_MODULE_3__["SongGenre"]('Rock', 'Rock'),
            new _songGenre__WEBPACK_IMPORTED_MODULE_3__["SongGenre"]('Classic Rock', 'Classic Rock'),
            new _songGenre__WEBPACK_IMPORTED_MODULE_3__["SongGenre"]('Hard Rock', 'Hard Rock'),
            new _songGenre__WEBPACK_IMPORTED_MODULE_3__["SongGenre"]('Heavy Metal', 'Heavy Metal'),
            new _songGenre__WEBPACK_IMPORTED_MODULE_3__["SongGenre"]('Blues', 'Blues'),
            new _songGenre__WEBPACK_IMPORTED_MODULE_3__["SongGenre"]('Techno', 'Techno'),
            new _songGenre__WEBPACK_IMPORTED_MODULE_3__["SongGenre"]('Jazz', 'Jazz'),
            new _songGenre__WEBPACK_IMPORTED_MODULE_3__["SongGenre"]('Reggae', 'Reggae'),
            new _songGenre__WEBPACK_IMPORTED_MODULE_3__["SongGenre"]('Punk', 'Punk'),
            new _songGenre__WEBPACK_IMPORTED_MODULE_3__["SongGenre"]('Hip Hop', 'Hip Hop'),
            new _songGenre__WEBPACK_IMPORTED_MODULE_3__["SongGenre"]('Funk', 'Funk'),
            new _songGenre__WEBPACK_IMPORTED_MODULE_3__["SongGenre"]('Disco', 'Disco'),
            new _songGenre__WEBPACK_IMPORTED_MODULE_3__["SongGenre"]('Grunge', 'Grunge'),
            new _songGenre__WEBPACK_IMPORTED_MODULE_3__["SongGenre"]('Drum and Bass', 'Drum and Bass'),
        ];
    }
    // tslint:disable-next-line:typedef
    getArtCategory() {
        return [
            new _artcategory__WEBPACK_IMPORTED_MODULE_1__["ArtCategory"]('Dj List', 'Dj List'),
            new _artcategory__WEBPACK_IMPORTED_MODULE_1__["ArtCategory"]('Dj Night', 'Dj Night'),
            new _artcategory__WEBPACK_IMPORTED_MODULE_1__["ArtCategory"]('Bend Night', 'Bend Night'),
            new _artcategory__WEBPACK_IMPORTED_MODULE_1__["ArtCategory"]('Solo Musician Night', 'Solo Musician Night'),
            new _artcategory__WEBPACK_IMPORTED_MODULE_1__["ArtCategory"]('Stand Up Comedy Night', 'Stand Up Comedy Night'),
        ];
    }
    // tslint:disable-next-line:typedef
    getArtSubCategory() {
        return [
            new _artSubCategory__WEBPACK_IMPORTED_MODULE_2__["ArtSubCategory"]('Drum and Base', 'Dj Night', 'Drum and Base'),
            new _artSubCategory__WEBPACK_IMPORTED_MODULE_2__["ArtSubCategory"]('Rock', 'Bend Night', 'Rock'),
            new _artSubCategory__WEBPACK_IMPORTED_MODULE_2__["ArtSubCategory"]('Guitar', 'Solo Musician Night', 'Guitar'),
            new _artSubCategory__WEBPACK_IMPORTED_MODULE_2__["ArtSubCategory"]('Solo', 'Stand Up Comedy Night', 'Solo'),
            new _artSubCategory__WEBPACK_IMPORTED_MODULE_2__["ArtSubCategory"]('Group', 'Stand Up Comedy Night', 'Group'),
        ];
    }
}
SelectService.ɵfac = function SelectService_Factory(t) { return new (t || SelectService)(); };
SelectService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SelectService, factory: SelectService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Services/servicerequest.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Services/servicerequest.service.ts ***!
  \****************************************************/
/*! exports provided: ServicerequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicerequestService", function() { return ServicerequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");





class ServicerequestService {
    // tslint:disable-next-line:max-line-length
    constructor(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(auth => {
            if (auth !== undefined && auth !== null) {
                this.uid = auth.uid;
            }
        });
    }
    // tslint:disable-next-line:typedef
    getRequestList() {
        return this.db.list('/contactMeList');
    }
}
ServicerequestService.ɵfac = function ServicerequestService_Factory(t) { return new (t || ServicerequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"])); };
ServicerequestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServicerequestService, factory: ServicerequestService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicerequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Services/shared-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Services/shared-service.service.ts ***!
  \****************************************************/
/*! exports provided: SharedServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedServiceService", function() { return SharedServiceService; });
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");






class SharedServiceService {
    constructor(afAuth, fire) {
        // this.afAuth.authState.subscribe(auth => {
        //     console.log(auth);
        //   if (auth !== undefined && auth !== null) {
        //      this.uid = auth.uid;
        //    }
        //  });
        this.afAuth = afAuth;
        this.fire = fire;
        this.dataSet = { SongPlayed: '' };
    }
    removeTrackerService() {
        this.fire.list('/MessageTracker').remove();
    }
    currentlyplayTracker(titleTracker) {
        this.dataSet = {
            SongPlayed: titleTracker,
        };
        this.imageDetailList = this.fire.list('/MessageTracker');
        this.imageDetailList.push(this.dataSet);
        this.nextMessage();
    }
    getSongTracker() {
        this.trackerMsg = this.fire.list('/MessageTracker', ref => ref.limitToLast(1));
        return this.trackerMsg;
    }
    nextMessage() {
        var x = "";
        this.x = this.getSongTracker().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(data => {
            this.x = data[0].SongPlayed;
        });
    }
}
SharedServiceService.ɵfac = function SharedServiceService_Factory(t) { return new (t || SharedServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_0__["AngularFireDatabase"])); };
SharedServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SharedServiceService, factory: SharedServiceService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_0__["AngularFireDatabase"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_fire_database__WEBPACK_IMPORTED_MODULE_0__["AngularFireDatabase"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/Services/songlist.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/songlist.service.ts ***!
  \**********************************************/
/*! exports provided: SongListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongListService", function() { return SongListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/storage/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");









class SongListService {
    // tslint:disable-next-line:max-line-length
    constructor(toastService, storage, afAuth, db) {
        this.toastService = toastService;
        this.storage = storage;
        this.afAuth = afAuth;
        this.db = db;
        this.basePath = '/songlist';
        // tslint:disable-next-line:no-inferrable-types
        this.msg = 'error';
        this.afAuth.authState.subscribe(auth => {
            if (auth !== undefined && auth !== null) {
                this.uid = auth.uid;
            }
        });
    }
    // tslint:disable-next-line:typedef
    showError(error) {
        this.toastService.show('Failed to delete song' + error, {
            classname: 'bg-danger text-light',
            delay: 5000,
            autohide: true,
            headertext: 'Error!!!'
        });
    }
    getImageDetailList(cat) {
        return this.db.list('/songlist', ref => ref.orderByChild('genrecategory').equalTo(cat));
    }
    getCurrentPlayList() {
        return this.db.list('/songlist', ref => ref.orderByChild('currentplaylist').equalTo("true"));
    }
    getAvailableSongsForPlayList() {
        return this.db.list('/songlist', ref => ref.orderByChild('currentplaylist').equalTo("false"));
    }
    // tslint:disable-next-line:typedef
    getFilteredImages(cat) {
        return this.db.list('/songlist', ref => ref.orderByChild('genrecategory').equalTo(cat));
    }
    // tslint:disable-next-line:typedef
    setCurrentPL(key, currentplaylist) {
        this.db.list('/songlist').update(key, { currentplaylist: currentplaylist });
    }
    // tslint:disable-next-line:typedef
    removeCetCurrentPL(key, currentplaylist) {
        this.db.list('/songlist').update(key, { currentplaylist: currentplaylist });
    }
    setSongSequence(key, sequence) {
        this.db.list('/songlist').update(key, { sequence: sequence.toString() });
    }
    // tslint:disable-next-line:typedef
    deleteFileUpload(fileUpload) {
        this.deleteFileDatabase(fileUpload.key)
            .then(() => {
            this.deleteFileStorage(fileUpload.url);
            this.showSuccess();
        })
            .catch(error => this.showError(error));
    }
    // tslint:disable-next-line:typedef
    showSuccess() {
        this.toastService.show('You have successfully deleted song from database!', {
            classname: 'bg-success text-light',
            delay: 3000,
            autohide: true,
            headertext: 'Song Deletion'
        });
    }
    // tslint:disable-next-line:typedef
    deleteFileDatabase(key) {
        return this.db.list(`${this.basePath}/${key}`).remove();
    }
    // tslint:disable-next-line:typedef
    deleteFileStorage(downloadUrl) {
        return this.storage.storage.refFromURL(downloadUrl).delete();
    }
    // tslint:disable-next-line:typedef
    getImage(key) {
        return firebase__WEBPACK_IMPORTED_MODULE_1__["database"]().ref('songlist/' + key).once('value')
            .then((snap) => snap.val());
    }
}
SongListService.ɵfac = function SongListService_Factory(t) { return new (t || SongListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"])); };
SongListService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SongListService, factory: SongListService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SongListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Services/songrequest.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Services/songrequest.service.ts ***!
  \*************************************************/
/*! exports provided: SongrequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongrequestService", function() { return SongrequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");




class SongrequestService {
    constructor(toastService, firebase) {
        this.toastService = toastService;
        this.firebase = firebase;
        this.addsongeRequest = null;
        this.addcode = null;
        //this.afAuth.authState.subscribe(auth => {
        //  if (auth !== undefined && auth !== null) {
        //    this.uid = auth.uid;
        //  }
        //});
        this.addsongeRequest = firebase.list('/songrequestList');
        this.addcode = firebase.list('/codeValidators');
    }
    // tslint:disable-next-line:typedef
    showError(error) {
        this.toastService.show('Failed to Submit Form' + error, {
            classname: 'bg-danger text-light',
            delay: 5000,
            autohide: true,
            headertext: 'Error!!!'
        });
    }
    // tslint:disable-next-line:typedef
    showError2(error) {
        this.toastService.show('Failed to create validation code' + error, {
            classname: 'bg-danger text-light',
            delay: 5000,
            autohide: true,
            headertext: 'Error!!!'
        });
    }
    // tslint:disable-next-line:typedef
    showSuccess() {
        this.toastService.show('You have successfully sumbitted form!', {
            classname: 'bg-success text-light',
            delay: 3000,
            autohide: true,
            headertext: 'Success'
        });
    }
    showSuccess2() {
        this.toastService.show('You have successfully created validation code!', {
            classname: 'bg-success text-light',
            delay: 3000,
            autohide: true,
            headertext: 'Success'
        });
    }
    create(requestsonge) {
        return this.addsongeRequest.push(requestsonge).then(() => {
            this.showSuccess();
        })
            .catch(error => this.showError(error));
        ;
    }
    generateCode(codevalidator) {
        return this.addcode.push(codevalidator).then(() => {
            this.showSuccess2();
        })
            .catch(error => this.showError2(error));
    }
    setCurrentPL(key) {
        this.firebase.list('/songlist').update(key, { currentplaylist: "true" });
    }
    getCodeValidators() {
        return this.firebase.list('/codeValidators');
    }
    deleteCodeValidators(ckey) {
        this.firebase.database.ref('codeValidators').child(ckey).remove();
    }
    // tslint:disable-next-line:typedef
    getRequestList() {
        return this.firebase.list('/songrequestList');
    }
}
SongrequestService.ɵfac = function SongrequestService_Factory(t) { return new (t || SongrequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Services_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"])); };
SongrequestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SongrequestService, factory: SongrequestService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SongrequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ToastService {
    constructor() {
        this.toasts = [];
    }
    // Push new Toasts to array with content and options
    // tslint:disable-next-line:typedef
    show(textOrTpl, options = {}) {
        this.toasts.push(Object.assign({ textOrTpl }, options));
    }
    // Callback method to remove Toast DOM element from view
    // tslint:disable-next-line:typedef
    remove(toast) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(); };
ToastService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/aboutme/aboutme.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutme/aboutme.component.ts ***!
  \**********************************************/
/*! exports provided: AboutmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutmeComponent", function() { return AboutmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutmeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutmeComponent.ɵfac = function AboutmeComponent_Factory(t) { return new (t || AboutmeComponent)(); };
AboutmeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutmeComponent, selectors: [["app-aboutme"]], decls: 25, vars: 0, consts: [[2, "color", "black", "text-align", "center"], ["id", "nogut", 1, "row", "no-gutters"], ["id", "caption2", 1, "col-6", "col-md-4"], ["src", "../../assets/img/imagesx.png"], ["id", "caption", 1, "col-12", "col-sm-6", "col-md-8"], ["src", "./../assets/img/Untitledmin.png"]], template: function AboutmeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Night Club 'Good Life' - About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "What is Lorem Ipsum?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "What is Lorem Ipsum?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#caption[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  border: 1px solid black !important;\n  border-radius: 0.65rem !important;\n  background-color: #d65ed6;\n  color: black;\n  padding: 0.65rem !important;\n}\n\n#nogut[_ngcontent-%COMP%] {\n  margin: 5px;\n  padding: 5px;\n}\n\n#caption2[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  border: 1px solid black !important;\n  border-radius: 0.65rem !important;\n  background-color: #f7f7f7;\n  color: black;\n  padding: 0.65rem !important;\n  max-width: -webkit-fit-content !important;\n  max-width: -moz-fit-content !important;\n  max-width: fit-content !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXRtZS9hYm91dG1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSx5Q0FBQTtFQUFBLHNDQUFBO0VBQUEsaUNBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0bWUvYWJvdXRtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXB0aW9ue1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IC42NXJlbSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDIxNCwgOTQsIDIxNCk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IC42NXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbiNub2d1dHtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbiNjYXB0aW9uMntcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IC42NXJlbSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2Y3ZjdmNztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogLjY1cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutmeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutme',
                templateUrl: './aboutme.component.html',
                styleUrls: ['./aboutme.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_Services_shared_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/Services/shared-service.service */ "./src/app/Services/shared-service.service.ts");
/* harmony import */ var _app_Services_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/Services/image.service */ "./src/app/Services/image.service.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toast/toast.component */ "./src/app/toast/toast.component.ts");










function AppComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Customer Requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Digital Jukebox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Video Gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Song Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Validation Codes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Song List Sequencing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Log In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_33_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(sharedService, imageService, authService, router) {
        this.sharedService = sharedService;
        this.imageService = imageService;
        this.authService = authService;
        this.router = router;
        this.collapse = true;
        this.title = 'Night Club - Good Life';
        this.fileUploads = [];
    }
    ngOnInit() {
        this.user = this.authService.authUser();
        this.getLastEvent();
        this.getCurrentSong();
    }
    logOut() {
        this.authService.logout().then(onResolve => this.router.navigate['/']);
    }
    getCurrentSong() {
        this.sharedService.getSongTracker().snapshotChanges().map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }).subscribe((message) => {
            if (message.length == 0) {
                this.message = '';
            }
            else {
                this.message = 'Currently Playing: ' + message[0].SongPlayed;
            }
        });
    }
    getLastEvent() {
        this.imageService.getLastEvent().snapshotChanges().map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }).subscribe((fileUploads) => {
            this.fileUploads = fileUploads;
            this.eventDT = this.fileUploads[0].eventDate;
            this.EventNameandDate = 'Next Event: ' + this.fileUploads[0].id.substring(0, 60) + '...  ' + this.fileUploads[0].category + " - " + this.fileUploads[0].subcategory;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_Services_shared_service_service__WEBPACK_IMPORTED_MODULE_1__["SharedServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_Services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 58, vars: 16, consts: [["fixed", "", 1, "hdr"], [1, "navbar", "navbar-expand-sm", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["src", "../../assets/img/Untitledmin.png", "width", "30", "height", "30"], ["type", "button", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "navbar-collapse", 3, "hidden", "click"], ["class", "navbar-nav mr-auto", 4, "ngIf"], [1, "nav", "navbar-nav", "account"], [1, "nav-item"], ["routerLink", "/aboutme", 1, "nav-link"], ["routerLink", "/contactme", 1, "nav-link"], ["routerLink", "/songrequest", 1, "nav-link"], ["routerLink", "/song-requests", 1, "nav-link"], ["routerLink", "/gallery", 1, "nav-link"], ["class", "nav-item", 4, "ngIf"], [1, "nav", "navbar-nav", "list-group", "list-group-horizontal"], ["href", "#", "target", "_blank", 1, "nav-link"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], ["aria-hidden", "true", 1, "fa", "fa-linkedin"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "container"], ["fixed", ""], ["id", "Marqee1", "behavior", "scroll", "direction", "left", 1, "Marqee1"], [1, "navbar-nav", "mr-auto"], ["routerLink", "/upload", 1, "nav-link"], ["routerLink", "/request-list", 1, "nav-link"], ["routerLink", "/ejuboxplayer", 1, "nav-link"], ["routerLink", "/video-gallery", 1, "nav-link"], ["routerLink", "/upload-song", 1, "nav-link"], ["routerLink", "/validationcode", 1, "nav-link"], ["routerLink", "/update-list-sequence", 1, "nav-link"], ["routerLink", "/login", 1, "nav-link"], ["href", "#", 1, "nav-link", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.collapse = !ctx.collapse; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_7_listener() { return ctx.collapse = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_ul_8_Template, 29, 0, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Create Song Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Song Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Event Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AppComponent_li_31_Template, 4, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AppComponent_li_33_Template, 4, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "app-toasts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "nb-layout-footer", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "marquee", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.collapse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, ctx.user)) == null ? null : tmp_1_0.uid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 9, ctx.user)) == null ? null : tmp_2_0.uid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 11, ctx.user)) == null ? null : tmp_3_0.uid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.message, "\u00A0\u00A0\u00A0 \u00A0", ctx.EventNameandDate, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](57, 13, ctx.eventDT, "short"), " ");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutHeaderComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutColumnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _toast_toast_component__WEBPACK_IMPORTED_MODULE_8__["ToastComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutFooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["@media (min-width: 1000px){\r\n  .navbar-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n      padding-top: 0px;\r\n      padding-bottom: 5px;\r\n      \r\n  }\r\n  }\r\n\r\n  .navbar-collapse[_ngcontent-%COMP%] {\r\n    background-color: #343a40!important;\r\n  }\r\n\r\n  .navbar-navbar-expand-sm[_ngcontent-%COMP%]{\r\n    background-color: #343a40!important;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 1.5em;\r\n  }\r\n\r\n  .hdr[_ngcontent-%COMP%] {\r\n    background-color: #343a40!important;\r\n  }\r\n\r\n  .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{\r\n    background-color: aqua;\r\n  }\r\n\r\n  ul[_ngcontent-%COMP%]\r\n  {\r\n    list-style-type: none;\r\n    margin-left:5px;\r\n    margin-right:5px;\r\n  }\r\n\r\n  li[_ngcontent-%COMP%]\r\n  {\r\n    list-style-type: none;\r\n    margin-left:5px;\r\n    margin-right:5px;\r\n  }\r\n\r\n  .nav-link[_ngcontent-%COMP%] {\r\n  \r\n    color: beige;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%] {\r\n    font-family: 'Lato', sans-serif;\r\n    background-color: #424242;\r\n    position: sticky;\r\n    top: -2px;\r\n    z-index: 1;\r\n    -webkit-backface-visibility: hidden;\r\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n  .navbar[_ngcontent-%COMP%] {\r\n    margin-bottom: 2px !important;\r\n  \r\n  }\r\n\r\n  .footer[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    \r\n    height: 1px;\r\n    line-height: 30px;\r\n\r\n  }\r\n\r\n  .Marqee1[_ngcontent-%COMP%] {\r\n background-color: rgb(214, 94, 214);\r\n margin-right: auto;\r\n margin-left: auto;\r\n border: 1px solid black !important; \r\n\r\n}\r\n\r\n  #Marqee1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]\r\n{\r\n  margin: 0;\r\n  padding: 2px 0px 2px 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFO01BQ0ksZ0JBQWdCO01BQ2hCLG1CQUFtQjs7RUFFdkI7RUFDQTs7RUFFQTtJQUNFLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLG1DQUFtQztFQUNyQzs7RUFNQTtJQUNFLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUNBOztJQUVFLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBOztJQUVFLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUNBOztJQUVFLFlBQVk7RUFDZDs7RUFHQTtJQUNFLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUNBQW1DO0lBQ25DLDBDQUEwQztFQUM1Qzs7RUFFQTtJQUNFLDZCQUE2Qjs7RUFFL0I7O0VBU0Y7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCw0Q0FBNEM7SUFDNUMsV0FBVztJQUNYLGlCQUFpQjs7RUFFbkI7O0VBRUY7Q0FDQyxtQ0FBbUM7Q0FDbkMsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixrQ0FBa0M7O0FBRW5DOztFQUlBOztFQUVFLFNBQVM7RUFDVCx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCl7XHJcbiAgLm5hdmJhci1uYXY+bGk+YSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgIFxyXG4gIH1cclxuICB9XHJcblxyXG4gIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLW5hdmJhci1leHBhbmQtc217XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxuICBcclxuICBcclxuICBcclxuICAubG9nb3tcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgfVxyXG5cclxuICAuaGRyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYWN0aXZlPmF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gIH1cclxuICB1bFxyXG4gIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGxpXHJcbiAge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICB9XHJcbiAgLm5hdi1saW5rIHtcclxuICBcclxuICAgIGNvbG9yOiBiZWlnZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgbmF2IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogLTJweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHggIWltcG9ydGFudDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBTZXQgdGhlIGZpeGVkIGhlaWdodCBvZiB0aGUgZm9vdGVyIGhlcmUgKi9cclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gIH1cclxuIFxyXG4uTWFycWVlMSB7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCA5NCwgMjE0KTtcclxuIG1hcmdpbi1yaWdodDogYXV0bztcclxuIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDsgXHJcblxyXG59XHJcblxyXG5cclxuXHJcbiNNYXJxZWUxIGg0XHJcbntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMnB4IDBweCAycHggMHB4O1xyXG59XHJcbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _app_Services_shared_service_service__WEBPACK_IMPORTED_MODULE_1__["SharedServiceService"] }, { type: _app_Services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] }, { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


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
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _Services_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/authenticationGuard.service */ "./src/app/Services/authenticationGuard.service.ts");
/* harmony import */ var _Services_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/image.service */ "./src/app/Services/image.service.ts");
/* harmony import */ var _Services_songlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/songlist.service */ "./src/app/Services/songlist.service.ts");
/* harmony import */ var _Services_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services/file.service */ "./src/app/Services/file.service.ts");
/* harmony import */ var _Services_fileSong_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Services/fileSong.service */ "./src/app/Services/fileSong.service.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _Services_ContactMeService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Services/ContactMeService */ "./src/app/Services/ContactMeService.ts");
/* harmony import */ var _Services_songrequest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Services/songrequest.service */ "./src/app/Services/songrequest.service.ts");
/* harmony import */ var _Services_shared_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Services/shared-service.service */ "./src/app/Services/shared-service.service.ts");
/* harmony import */ var _Services_select_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Services/select.service */ "./src/app/Services/select.service.ts");
/* harmony import */ var _Services_servicerequest_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Services/servicerequest.service */ "./src/app/Services/servicerequest.service.ts");
/* harmony import */ var _Services_customvalidation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Services/customvalidation.service */ "./src/app/Services/customvalidation.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/storage/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");
/* harmony import */ var ngx_audio_player__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-audio-player */ "./node_modules/ngx-audio-player/__ivy_ngcc__/fesm2015/ngx-audio-player.js");
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ "./node_modules/@syncfusion/ej2-angular-calendars/__ivy_ngcc__/@syncfusion/ej2-angular-calendars.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _image_image_detail_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./image/image-detail.component */ "./src/app/image/image-detail.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../routes */ "./src/routes.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _contactme_contactme_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./contactme/contactme.component */ "./src/app/contactme/contactme.component.ts");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "./src/app/aboutme/aboutme.component.ts");
/* harmony import */ var _request_list_request_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./request-list/request-list.component */ "./src/app/request-list/request-list.component.ts");
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./toast/toast.component */ "./src/app/toast/toast.component.ts");
/* harmony import */ var _ejuboxplayer_ejuboxplayer_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ejuboxplayer/ejuboxplayer.component */ "./src/app/ejuboxplayer/ejuboxplayer.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _video_gallery_video_gallery_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./video-gallery/video-gallery.component */ "./src/app/video-gallery/video-gallery.component.ts");
/* harmony import */ var _upload_song_upload_song_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./upload-song/upload-song.component */ "./src/app/upload-song/upload-song.component.ts");
/* harmony import */ var _update_list_sequence_update_list_sequence_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./update-list-sequence/update-list-sequence.component */ "./src/app/update-list-sequence/update-list-sequence.component.ts");
/* harmony import */ var _songrequest_songrequest_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./songrequest/songrequest.component */ "./src/app/songrequest/songrequest.component.ts");
/* harmony import */ var _gallerydetail_gallerydetail_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./gallerydetail/gallerydetail.component */ "./src/app/gallerydetail/gallerydetail.component.ts");
/* harmony import */ var _validationcode_validationcode_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./validationcode/validationcode.component */ "./src/app/validationcode/validationcode.component.ts");
/* harmony import */ var _song_requests_song_requests_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./song-requests/song-requests.component */ "./src/app/song-requests/song-requests.component.ts");






















































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [_Services_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationGuard"],
        _Services_authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"],
        _Services_select_service__WEBPACK_IMPORTED_MODULE_10__["SelectService"],
        _Services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"],
        _Services_songlist_service__WEBPACK_IMPORTED_MODULE_3__["SongListService"],
        _Services_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
        _Services_fileSong_service__WEBPACK_IMPORTED_MODULE_5__["FileSongService"],
        _Services_ContactMeService__WEBPACK_IMPORTED_MODULE_7__["ContactMeService"],
        _Services_shared_service_service__WEBPACK_IMPORTED_MODULE_9__["SharedServiceService"],
        _Services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _Services_servicerequest_service__WEBPACK_IMPORTED_MODULE_11__["ServicerequestService"],
        _Services_customvalidation_service__WEBPACK_IMPORTED_MODULE_12__["CustomvalidationService"],
        _Services_songrequest_service__WEBPACK_IMPORTED_MODULE_8__["SongrequestService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebaseConfig),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__["AngularFireStorageModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_22__["AngularFireDatabaseModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__["AngularFireAuthModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_26__["DateTimePickerModule"],
            ngx_audio_player__WEBPACK_IMPORTED_MODULE_25__["NgxAudioPlayerModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_28__["HttpModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_24__["YouTubePlayerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_32__["appRoutes"], { relativeLinkResolution: 'legacy' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_40__["NbThemeModule"].forRoot({ name: 'default' }),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_40__["NbLayoutModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_41__["NbEvaIconsModule"],
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_15__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                    _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_30__["GalleryComponent"],
                    _image_image_detail_component__WEBPACK_IMPORTED_MODULE_31__["ImageDetailComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_33__["LoginComponent"],
                    _upload_upload_component__WEBPACK_IMPORTED_MODULE_34__["UploadComponent"],
                    _contactme_contactme_component__WEBPACK_IMPORTED_MODULE_35__["ContactmeComponent"],
                    _ejuboxplayer_ejuboxplayer_component__WEBPACK_IMPORTED_MODULE_39__["EjuboxplayerComponent"],
                    _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_36__["AboutmeComponent"],
                    _request_list_request_list_component__WEBPACK_IMPORTED_MODULE_37__["RequestListComponent"],
                    _toast_toast_component__WEBPACK_IMPORTED_MODULE_38__["ToastComponent"],
                    _video_gallery_video_gallery_component__WEBPACK_IMPORTED_MODULE_42__["VideoGalleryComponent"],
                    _upload_song_upload_song_component__WEBPACK_IMPORTED_MODULE_43__["UploadSongComponent"],
                    _update_list_sequence_update_list_sequence_component__WEBPACK_IMPORTED_MODULE_44__["UpdateListSequenceComponent"],
                    _songrequest_songrequest_component__WEBPACK_IMPORTED_MODULE_45__["SongrequestComponent"],
                    _gallerydetail_gallerydetail_component__WEBPACK_IMPORTED_MODULE_46__["GallerydetailComponent"],
                    _validationcode_validationcode_component__WEBPACK_IMPORTED_MODULE_47__["ValidationcodeComponent"],
                    _song_requests_song_requests_component__WEBPACK_IMPORTED_MODULE_48__["SongRequestsComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebaseConfig),
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__["AngularFireStorageModule"],
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_22__["AngularFireDatabaseModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__["AngularFireAuthModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_26__["DateTimePickerModule"],
                    ngx_audio_player__WEBPACK_IMPORTED_MODULE_25__["NgxAudioPlayerModule"],
                    _angular_http__WEBPACK_IMPORTED_MODULE_28__["HttpModule"],
                    _angular_youtube_player__WEBPACK_IMPORTED_MODULE_24__["YouTubePlayerModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_32__["appRoutes"], { relativeLinkResolution: 'legacy' }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_40__["NbThemeModule"].forRoot({ name: 'default' }),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_40__["NbLayoutModule"],
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_41__["NbEvaIconsModule"],
                ],
                providers: [_Services_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationGuard"],
                    _Services_authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"],
                    _Services_select_service__WEBPACK_IMPORTED_MODULE_10__["SelectService"],
                    _Services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"],
                    _Services_songlist_service__WEBPACK_IMPORTED_MODULE_3__["SongListService"],
                    _Services_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
                    _Services_fileSong_service__WEBPACK_IMPORTED_MODULE_5__["FileSongService"],
                    _Services_ContactMeService__WEBPACK_IMPORTED_MODULE_7__["ContactMeService"],
                    _Services_shared_service_service__WEBPACK_IMPORTED_MODULE_9__["SharedServiceService"],
                    _Services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
                    _Services_servicerequest_service__WEBPACK_IMPORTED_MODULE_11__["ServicerequestService"],
                    _Services_customvalidation_service__WEBPACK_IMPORTED_MODULE_12__["CustomvalidationService"],
                    _Services_songrequest_service__WEBPACK_IMPORTED_MODULE_8__["SongrequestService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_30__["GalleryComponent"],
        _image_image_detail_component__WEBPACK_IMPORTED_MODULE_31__["ImageDetailComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_33__["LoginComponent"],
        _upload_upload_component__WEBPACK_IMPORTED_MODULE_34__["UploadComponent"],
        _contactme_contactme_component__WEBPACK_IMPORTED_MODULE_35__["ContactmeComponent"],
        _ejuboxplayer_ejuboxplayer_component__WEBPACK_IMPORTED_MODULE_39__["EjuboxplayerComponent"],
        _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_36__["AboutmeComponent"],
        _request_list_request_list_component__WEBPACK_IMPORTED_MODULE_37__["RequestListComponent"],
        _toast_toast_component__WEBPACK_IMPORTED_MODULE_38__["ToastComponent"],
        _video_gallery_video_gallery_component__WEBPACK_IMPORTED_MODULE_42__["VideoGalleryComponent"],
        _upload_song_upload_song_component__WEBPACK_IMPORTED_MODULE_43__["UploadSongComponent"],
        _update_list_sequence_update_list_sequence_component__WEBPACK_IMPORTED_MODULE_44__["UpdateListSequenceComponent"],
        _songrequest_songrequest_component__WEBPACK_IMPORTED_MODULE_45__["SongrequestComponent"],
        _gallerydetail_gallerydetail_component__WEBPACK_IMPORTED_MODULE_46__["GallerydetailComponent"],
        _validationcode_validationcode_component__WEBPACK_IMPORTED_MODULE_47__["ValidationcodeComponent"],
        _song_requests_song_requests_component__WEBPACK_IMPORTED_MODULE_48__["SongRequestsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__["AngularFireStorageModule"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_22__["AngularFireDatabaseModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__["AngularFireAuthModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
        _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_26__["DateTimePickerModule"],
        ngx_audio_player__WEBPACK_IMPORTED_MODULE_25__["NgxAudioPlayerModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_28__["HttpModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_24__["YouTubePlayerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_40__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_40__["NbLayoutModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_41__["NbEvaIconsModule"]] }); })();


/***/ }),

/***/ "./src/app/artSubCategory.ts":
/*!***********************************!*\
  !*** ./src/app/artSubCategory.ts ***!
  \***********************************/
/*! exports provided: ArtSubCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtSubCategory", function() { return ArtSubCategory; });
class ArtSubCategory {
    constructor(id, subCategoryid, name) {
        this.id = id;
        this.subCategoryid = subCategoryid;
        this.name = name;
    }
}


/***/ }),

/***/ "./src/app/artcategory.ts":
/*!********************************!*\
  !*** ./src/app/artcategory.ts ***!
  \********************************/
/*! exports provided: ArtCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtCategory", function() { return ArtCategory; });
class ArtCategory {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}


/***/ }),

/***/ "./src/app/contactme/contactme.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactme/contactme.component.ts ***!
  \**************************************************/
/*! exports provided: ContactmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactmeComponent", function() { return ContactmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_ContactMeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/ContactMeService */ "./src/app/Services/ContactMeService.ts");
/* harmony import */ var _models_contactme_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/contactme.model */ "./src/app/models/contactme.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_customvalidation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/customvalidation.service */ "./src/app/Services/customvalidation.service.ts");









class ContactmeComponent {
    constructor(contactMeService, 
    // tslint:disable-next-line:align
    router, 
    // tslint:disable-next-line:align
    formBuilder, 
    // tslint:disable-next-line:align
    customValidator) {
        this.contactMeService = contactMeService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.customValidator = customValidator;
        this.submitted = false;
        this.contactMe = new _models_contactme_model__WEBPACK_IMPORTED_MODULE_2__["ContactMe"]();
    }
    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
        });
    }
    // tslint:disable-next-line:typedef
    get firstName() {
        return this.contactForm.get('firstName');
    }
    // tslint:disable-next-line:typedef
    get lastName() {
        return this.contactForm.get('lastName');
    }
    // tslint:disable-next-line:typedef
    get phoneNumber() {
        return this.contactForm.get('phoneNumber');
    }
    // tslint:disable-next-line:typedef
    get email() {
        return this.contactForm.get('email');
    }
    // tslint:disable-next-line:typedef
    get comments() {
        return this.contactForm.get('comments');
    }
    // tslint:disable-next-line:typedef
    onSubmit() {
        this.contactMeService.create(this.contactMe);
        this.router.navigate(['gallery']);
        this.submitted = true;
    }
}
ContactmeComponent.ɵfac = function ContactmeComponent_Factory(t) { return new (t || ContactmeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_ContactMeService__WEBPACK_IMPORTED_MODULE_1__["ContactMeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_customvalidation_service__WEBPACK_IMPORTED_MODULE_5__["CustomvalidationService"])); };
ContactmeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactmeComponent, selectors: [["app-contactme"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_Services_ContactMeService__WEBPACK_IMPORTED_MODULE_1__["ContactMeService"]])], decls: 77, vars: 18, consts: [[2, "text-align", "center"], [2, "color", "black"], [1, "container"], ["id", "caption"], [1, "row"], [1, "col-sm"], [1, "nav", "navbar-nav", "list-group", "list-group-vertical"], ["aria-hidden", "true", 1, "fa", "fa-map-marker", "fa-2x"], ["aria-hidden", "true", 1, "fa", "fa-clock-o", "fa-2x"], ["aria-hidden", "true", 1, "fa", "fa-phone", "fa-2x"], ["aria-hidden", "true", 1, "fa", "fa-envelope-open", "fa-2x"], ["validate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["name", "firstName", "placeholder", "First Name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["firstName", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], [3, "hidden"], ["name", "lastName", "placeholder", "Last Name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["lastName", "ngModel"], ["name", "phoneNumber", "placeholder", "Phone Number", "pattern", "[0-9]*", "minlength", "9", "maxlength", "14", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["phoneNumber", "ngModel"], ["name", "email", "placeholder", "Email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["name", "comments", "placeholder", "Message here", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["comments", "ngModel"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"]], template: function ContactmeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Brighton Street 5, M34-3L4, Ottawa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Monday to Friday (9:00 PM - 3:00 AM) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " +1 415 868 9493");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " info@goodlifeclub.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "form", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactmeComponent_Template_form_ngSubmit_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); return _r0.form.valid && _r0.form.dirty ? ctx.onSubmit() : ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactmeComponent_Template_input_ngModelChange_34_listener($event) { return ctx.contactMe.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "First Name is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactmeComponent_Template_input_ngModelChange_42_listener($event) { return ctx.contactMe.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Last Name is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactmeComponent_Template_input_ngModelChange_50_listener($event) { return ctx.contactMe.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Phone Number should be 9 digit min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Phone Number is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "phone Number should be only numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactmeComponent_Template_input_ngModelChange_62_listener($event) { return ctx.contactMe.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "E-mail is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "textarea", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactmeComponent_Template_textarea_ngModelChange_70_listener($event) { return ctx.contactMe.comments = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Message is required field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contactMe.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r1.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contactMe.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r2.valid || _r2.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r2.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contactMe.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r3.valid || _r3.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r3.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r3.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r3.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contactMe.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r4.valid || _r4.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r4.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contactMe.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r5.valid || _r5.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r5.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]], styles: ["#caption[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  border: 1px solid black !important;\n  border-radius: 0.65rem !important;\n  background-color: #d65ed6;\n  color: black;\n  padding: 0.65rem !important;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: #007bff !important;\n  border-color: #007bff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG1lL2NvbnRhY3RtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQ0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdG1lL2NvbnRhY3RtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXB0aW9ue1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IC42NXJlbSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDIxNCwgOTQsIDIxNCk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IC42NXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmYhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZiFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactmeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contactme',
                templateUrl: './contactme.component.html',
                styleUrls: ['./contactme.component.scss'],
                providers: [_Services_ContactMeService__WEBPACK_IMPORTED_MODULE_1__["ContactMeService"]]
            }]
    }], function () { return [{ type: _Services_ContactMeService__WEBPACK_IMPORTED_MODULE_1__["ContactMeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _Services_customvalidation_service__WEBPACK_IMPORTED_MODULE_5__["CustomvalidationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ejuboxplayer/ejuboxplayer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ejuboxplayer/ejuboxplayer.component.ts ***!
  \********************************************************/
/*! exports provided: EjuboxplayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EjuboxplayerComponent", function() { return EjuboxplayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_audio_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-audio-player */ "./node_modules/ngx-audio-player/__ivy_ngcc__/fesm2015/ngx-audio-player.js");
/* harmony import */ var _Services_shared_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/shared-service.service */ "./src/app/Services/shared-service.service.ts");
/* harmony import */ var _Services_songlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/songlist.service */ "./src/app/Services/songlist.service.ts");
/* harmony import */ var _Services_select_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/select.service */ "./src/app/Services/select.service.ts");







const _c0 = ["player"];
class EjuboxplayerComponent {
    constructor(apc, sharedService, songlistservice, selectService) {
        this.apc = apc;
        this.sharedService = sharedService;
        this.songlistservice = songlistservice;
        this.selectService = selectService;
        this.fileUploads = [];
        this.msaapPlaylist = [];
        this.msaapDisplayTitle = true;
        this.msaapDisplayPlayList = true;
        this.msaapPageSizeOptions = [6, 4, 6];
        this.msaapDisplayVolumeControls = true;
        this.msaapDisplayRepeatControls = true;
        this.msaapDisplayArtist = true;
        this.msaapDisplayDuration = false;
        this.msaapDisablePositionSlider = false;
    }
    ngOnInit() {
        this.sharedService.removeTrackerService();
        this.getAllList();
    }
    // tslint:disable-next-line:typedef
    ngOnChanges() {
    }
    onEnded(event) {
        this.RequestedSongs();
        var list = "";
        setTimeout(() => {
            list = document.getElementsByTagName("marquee")[0].innerHTML;
            this.sharedService.currentlyplayTracker(list);
        }, 2045);
    }
    getAllList() {
        this.songlistservice.getCurrentPlayList().snapshotChanges().map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }).subscribe((fileUploads) => {
            this.fileUploads = fileUploads;
            this.fileUploads = this.fileUploads.sort((a, b) => a.sequence - b.sequence);
        });
    }
    RequestedSongs() {
        const diff1 = this.fileUploads.filter(item => this.msaapPlaylist.indexOf(item) < 0);
        const diff2 = this.msaapPlaylist.filter(item => this.fileUploads.indexOf(item) < 0);
        const diff = diff1.length - diff2.length;
        if (diff > 0) {
            for (let i = 0; i < diff; i++) {
                this.msaapPlaylist.push({
                    title: this.fileUploads[i].id,
                    link: this.fileUploads[i].url,
                    artist: this.fileUploads[i].artist,
                });
            }
        }
    }
    LoadPlayList() {
        this.msaapPlaylist = [];
        for (var j = this.fileUploads.length - 1; j >= 0; j--) {
            if (this.fileUploads[j].currentplaylist == 'false') {
                this.fileUploads.splice(j, 1);
            }
        }
        for (var i = 0; i < this.fileUploads.length; i++) {
            this.msaapPlaylist.push({
                title: this.fileUploads[i].id,
                link: this.fileUploads[i].url,
                artist: this.fileUploads[i].artist,
            });
        }
    }
}
EjuboxplayerComponent.ɵfac = function EjuboxplayerComponent_Factory(t) { return new (t || EjuboxplayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_audio_player__WEBPACK_IMPORTED_MODULE_1__["AudioPlayerComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_shared_service_service__WEBPACK_IMPORTED_MODULE_2__["SharedServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_songlist_service__WEBPACK_IMPORTED_MODULE_3__["SongListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_select_service__WEBPACK_IMPORTED_MODULE_4__["SelectService"])); };
EjuboxplayerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EjuboxplayerComponent, selectors: [["app-ejuboxplayer"]], viewQuery: function EjuboxplayerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngm = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([ngx_audio_player__WEBPACK_IMPORTED_MODULE_1__["AudioPlayerComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 11, consts: [[1, "btn-success", 3, "click"], ["muted", "muted", 3, "playlist", "displayTitle", "autoPlay", "displayPlaylist", "pageSizeOptions", "displayArtist", "displayDuration", "expanded", "displayVolumeControls", "displayRepeatControls", "disablePositionSlider", "trackEnded"]], template: function EjuboxplayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EjuboxplayerComponent_Template_button_click_2_listener() { return ctx.LoadPlayList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Load Playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-audio-player", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("trackEnded", function EjuboxplayerComponent_Template_ngx_audio_player_trackEnded_5_listener($event) { return ctx.onEnded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playlist", ctx.msaapPlaylist)("displayTitle", ctx.msaapDisplayTitle)("autoPlay", false)("displayPlaylist", ctx.msaapDisplayPlayList)("pageSizeOptions", ctx.msaapPageSizeOptions)("displayArtist", ctx.msaapDisplayArtist)("displayDuration", ctx.msaapDisplayDuration)("expanded", true)("displayVolumeControls", ctx.msaapDisplayVolumeControls)("displayRepeatControls", ctx.msaapDisplayRepeatControls)("disablePositionSlider", ctx.msaapDisablePositionSlider);
    } }, directives: [ngx_audio_player__WEBPACK_IMPORTED_MODULE_1__["AudioPlayerComponent"]], styles: [".btn-success[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: #007bff !important;\n  border-color: #007bff !important;\n}\n\n.dropdowngall[_ngcontent-%COMP%] {\n  background-color: #d65ed6;\n  border-color: black;\n  border-width: 1px;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWp1Ym94cGxheWVyL2VqdWJveHBsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUNFO0VBRUEseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2VqdWJveHBsYXllci9lanVib3hwbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZiFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5kcm9wZG93bmdhbGxcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDIxNCwgOTQsIDIxNCk7XHJcbiAgYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gIGJvcmRlci13aWR0aDoxcHg7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EjuboxplayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ejuboxplayer',
                templateUrl: './ejuboxplayer.component.html',
                styleUrls: ['./ejuboxplayer.component.scss'],
                providers: [ngx_audio_player__WEBPACK_IMPORTED_MODULE_1__["AudioPlayerComponent"]],
            }]
    }], function () { return [{ type: ngx_audio_player__WEBPACK_IMPORTED_MODULE_1__["AudioPlayerComponent"] }, { type: _Services_shared_service_service__WEBPACK_IMPORTED_MODULE_2__["SharedServiceService"] }, { type: _Services_songlist_service__WEBPACK_IMPORTED_MODULE_3__["SongListService"] }, { type: _Services_select_service__WEBPACK_IMPORTED_MODULE_4__["SelectService"] }]; }, { ngm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['player', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _artcategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../artcategory */ "./src/app/artcategory.ts");
/* harmony import */ var _Services_select_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/select.service */ "./src/app/Services/select.service.ts");
/* harmony import */ var _Services_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/image.service */ "./src/app/Services/image.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









function GalleryComponent_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artcategory_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", artcategory_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artcategory_r3.name);
} }
function GalleryComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artsubcategory_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", artsubcategory_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artsubcategory_r4.name);
} }
const _c0 = function (a1) { return ["/image", a1]; };
const _c1 = function (a1) { return ["/gallerydetail", a1]; };
function GalleryComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Event ByLine: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Event Category: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Event Filter Down: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Event Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Open Gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, file_r5.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", file_r5.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", file_r5.category, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r5.subcategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 7, file_r5.eventDate, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, file_r5.key));
} }
class GalleryComponent {
    constructor(selectService, imageService) {
        this.selectService = selectService;
        this.imageService = imageService;
        this.selectedCategory = new _artcategory__WEBPACK_IMPORTED_MODULE_1__["ArtCategory"]('Dj Night', 'Dj Night');
        this.fileUploads = [];
        this.page = 1;
        this.pageSize = 9;
    }
    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.artcat = this.selectService.getArtCategory();
        this.onSelect(this.selectedCategory.id);
        this.selectSubVal = '';
        this.getAllList();
    }
    // tslint:disable-next-line:typedef
    ngOnChanges() {
        // Use snapshotChanges().map() to store the key
        this.imageService.getFilteredImages(this.selectedCategory.id.toString(), this.selectSubVal).snapshotChanges().map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }).subscribe((fileUploads) => {
            this.fileUploads = fileUploads.sort((a, b) => (a.eventDate < b.eventDate) ? 1 : -1);
        });
    }
    // tslint:disable-next-line:typedef
    onSelect(subCategoryid) {
        this.artsubcat = this.selectService.getArtSubCategory().filter((item) => item.subCategoryid == subCategoryid);
    }
    // tslint:disable-next-line:typedef
    getAllList() {
        // Use snapshotChanges().map() to store the key
        this.imageService.getImageDetailList().snapshotChanges().map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }).subscribe((fileUploads) => {
            this.fileUploads = fileUploads.sort((a, b) => (a.eventDate < b.eventDate) ? 1 : -1);
        });
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_select_service__WEBPACK_IMPORTED_MODULE_2__["SelectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"])); };
GalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 30, vars: 12, consts: [[1, "container"], [1, "row"], [2, "color", "black", "text-align", "center"], [1, "col-sm"], [2, "color", "black", "font-weight", "bold"], [1, "dropdowngall", 3, "ngModel", "ngModelChange", "change"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [1, "dropdowngall", 3, "ngModel", "ngModelChange"], [1, "btn-success", 3, "click"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [3, "page", "pageSize", "collectionSize", "pageChange"], [3, "value"], [1, "col-md-4"], ["id", "img-thumbnail", 1, "img-thumbnail"], [3, "routerLink"], ["alt", "Lights", 3, "src"], ["id", "spacer"], ["id", "caption", 1, "caption"], [1, "linkGallery", 3, "routerLink"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Night Club 'Good Life' - Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Event Category:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GalleryComponent_Template_select_ngModelChange_11_listener($event) { return ctx.selectedCategory.id = $event; })("change", function GalleryComponent_Template_select_change_11_listener($event) { return ctx.onSelect($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "--Select--");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GalleryComponent_option_14_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Event filter down:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GalleryComponent_Template_select_ngModelChange_18_listener($event) { return ctx.selectSubVal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "--Select--");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, GalleryComponent_option_21_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_button_click_23_listener() { return ctx.ngOnChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Filter Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, GalleryComponent_div_27_Template, 26, 14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngb-pagination", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function GalleryComponent_Template_ngb_pagination_pageChange_29_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCategory.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.artcat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectSubVal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.artsubcat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](28, 8, ctx.fileUploads, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.page)("pageSize", ctx.pageSize)("collectionSize", ctx.fileUploads == null ? null : ctx.fileUploads.length);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPagination"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["#img-thumbnail[_ngcontent-%COMP%]{\r\n  background-color: #efefef;\r\n  border:none;\r\n}\r\n#img-thumbnail[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], #img-thumbnail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  max-height:330px !important;\r\n  width: 100% !important;\r\n  border: 1px solid black !important;\r\n  border-radius: .65rem !important;\r\n  padding: .45rem !important;\r\n }\r\n#caption[_ngcontent-%COMP%]{\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  border: 1px solid black !important;\r\n  border-radius: .65rem !important;\r\n  background-color:rgb(214, 94, 214);\r\n  color: black;\r\n  padding: .45rem !important;\r\n}\r\nhr[_ngcontent-%COMP%] {\r\n   margin-top: none;\r\n   margin-bottom: 0px;\r\n   border: 0px;\r\n   border-top: 1px solid #efefef;\r\n}\r\n.dropdowngall[_ngcontent-%COMP%]\r\n{\r\n  background-color:rgb(214, 94, 214);\r\n  border-color:black;\r\n  border-width:1px;\r\n  color: white !important;\r\n}\r\n.linkGallery[_ngcontent-%COMP%]\r\n{\r\n  background-color:black;\r\n  border-color:rgb(214, 94, 214) !important;\r\n  border-width:1px;\r\n  color: rgb(214, 94, 214) !important;\r\n}\r\n.btn-success[_ngcontent-%COMP%] {\r\n  color: white !important;\r\n  background-color: #007bff!important;\r\n  border-color: #007bff!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMsZ0NBQWdDO0VBQ2hDLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osMEJBQTBCO0FBQzVCO0FBQ0E7R0FDRyxnQkFBZ0I7R0FDaEIsa0JBQWtCO0dBQ2xCLFdBQVc7R0FDWCw2QkFBNkI7QUFDaEM7QUFDQTs7RUFFRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIseUNBQXlDO0VBQ3pDLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsK0JBQStCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2ltZy10aHVtYm5haWx7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG4jaW1nLXRodW1ibmFpbCA+IGltZyxcclxuI2ltZy10aHVtYm5haWwgYSA+IGltZyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6MzMwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogLjY1cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogLjQ1cmVtICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiNjYXB0aW9ue1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IC42NXJlbSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDIxNCwgOTQsIDIxNCk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IC40NXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbmhyIHtcclxuICAgbWFyZ2luLXRvcDogbm9uZTtcclxuICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICBib3JkZXI6IDBweDtcclxuICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZmVmZWY7XHJcbn1cclxuLmRyb3Bkb3duZ2FsbFxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjE0LCA5NCwgMjE0KTtcclxuICBib3JkZXItY29sb3I6YmxhY2s7XHJcbiAgYm9yZGVyLXdpZHRoOjFweDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpbmtHYWxsZXJ5XHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gIGJvcmRlci1jb2xvcjpyZ2IoMjE0LCA5NCwgMjE0KSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci13aWR0aDoxcHg7XHJcbiAgY29sb3I6IHJnYigyMTQsIDk0LCAyMTQpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.css']
            }]
    }], function () { return [{ type: _Services_select_service__WEBPACK_IMPORTED_MODULE_2__["SelectService"] }, { type: _Services_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/gallerydetail/gallerydetail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/gallerydetail/gallerydetail.component.ts ***!
  \**********************************************************/
/*! exports provided: GallerydetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallerydetailComponent", function() { return GallerydetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/image.service */ "./src/app/Services/image.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function GallerydetailComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", file_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class GallerydetailComponent {
    constructor(imageService, route) {
        this.imageService = imageService;
        this.route = route;
        this.imageUrl = '';
        this.fileUploads = [];
    }
    // tslint:disable-next-line:typedef
    getImageUrl(key) {
        this.imageService.getGalleryDetail(key).snapshotChanges().map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }).subscribe((fileUploads) => {
            this.fileUploads = fileUploads;
        });
    }
    ngOnInit() {
        this.getImageUrl(this.route.snapshot.params['id']);
    }
}
GallerydetailComponent.ɵfac = function GallerydetailComponent_Factory(t) { return new (t || GallerydetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
GallerydetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GallerydetailComponent, selectors: [["app-gallerydetail"]], decls: 8, vars: 1, consts: [[1, "row"], ["class", "col-lg-6", 4, "ngFor", "ngForOf"], [1, "col-lg-6"], ["id", "img-thumbnail", 1, "img-thumbnail"], ["alt", "Lights", 3, "src"], ["id", "spacer"], ["id", "caption", 1, "caption"]], template: function GallerydetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Event Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GallerydetailComponent_div_7_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fileUploads);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["#img-thumbnail[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border: none;\n}\n\n#img-thumbnail[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], #img-thumbnail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  max-height: 330px !important;\n  width: 100% !important;\n  border: 1px solid black !important;\n  border-radius: 0.65rem !important;\n  padding: 0.45rem !important;\n}\n\n#caption[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  border: 1px solid black !important;\n  border-radius: 0.65rem !important;\n  background-color: #d65ed6;\n  color: black;\n  padding: 0.45rem !important;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: none;\n  margin-bottom: 0px;\n  border: 0px;\n  border-top: 1px solid #efefef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeWRldGFpbC9nYWxsZXJ5ZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBRUU7O0VBRUUsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFBRTtFQUNHLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFHTCIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnlkZXRhaWwvZ2FsbGVyeWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jaW1nLXRodW1ibmFpbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICB9XHJcbiAgI2ltZy10aHVtYm5haWwgPiBpbWcsXHJcbiAgI2ltZy10aHVtYm5haWwgYSA+IGltZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6MzMwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjY1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAuNDVyZW0gIWltcG9ydGFudDtcclxuICAgfVxyXG4gICNjYXB0aW9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjY1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTQsIDk0LCAyMTQpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogLjQ1cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGhyIHtcclxuICAgICBtYXJnaW4tdG9wOiBub25lO1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICBib3JkZXI6IDBweDtcclxuICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VmZWZlZjtcclxuICB9Il19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GallerydetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallerydetail',
                templateUrl: './gallerydetail.component.html',
                styleUrls: ['./gallerydetail.component.scss']
            }]
    }], function () { return [{ type: _Services_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/image/image-detail.component.ts":
/*!*************************************************!*\
  !*** ./src/app/image/image-detail.component.ts ***!
  \*************************************************/
/*! exports provided: ImageDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDetailComponent", function() { return ImageDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/image.service */ "./src/app/Services/image.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { "background-image": a0 }; };
class ImageDetailComponent {
    constructor(imageService, route) {
        this.imageService = imageService;
        this.route = route;
        this.imageUrl = '';
    }
    // tslint:disable-next-line:typedef
    getImageUrl(key) {
        this.imageService.getImage(key).
            // then(imageUrl => (console.log(imageUrl)));
            then(image => this.imageUrl = image.url);
    }
    // tslint:disable-next-line:typedef
    ngOnInit() {
        // tslint:disable-next-line:no-string-literal
        this.getImageUrl(this.route.snapshot.params['id']);
    }
}
ImageDetailComponent.ɵfac = function ImageDetailComponent_Factory(t) { return new (t || ImageDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ImageDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageDetailComponent, selectors: [["app-image-detail"]], decls: 7, vars: 3, consts: [[1, "row"], [1, "col-md-12"], [1, "img-container", 3, "ngStyle"]], template: function ImageDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + ctx.imageUrl + ")"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".img-container[_ngcontent-%COMP%]{\r\n    margin:24px;\r\n    box-shadow:#555 1px 2px 8px 1px;\r\n    min-height: 660px;\r\n    min-width: 900px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    align-content: center;\r\n}\r\n\r\n#caption[_ngcontent-%COMP%]{\r\n  font-size: 1.5em;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  padding: 18px;\r\n  color: #222;\r\n  background-color: #f5f5f5;\r\n  border: 1px solid #bbb;\r\n  width: 900px;\r\n}\r\n\r\n.caption-row[_ngcontent-%COMP%]{\r\n  padding: 24px;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2UvaW1hZ2UtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIscUJBQXFCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlL2ltYWdlLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pbWctY29udGFpbmVye1xyXG4gICAgbWFyZ2luOjI0cHg7XHJcbiAgICBib3gtc2hhZG93OiM1NTUgMXB4IDJweCA4cHggMXB4O1xyXG4gICAgbWluLWhlaWdodDogNjYwcHg7XHJcbiAgICBtaW4td2lkdGg6IDkwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI2NhcHRpb257XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMThweDtcclxuICBjb2xvcjogIzIyMjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XHJcbiAgd2lkdGg6IDkwMHB4O1xyXG59XHJcblxyXG4uY2FwdGlvbi1yb3d7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-detail',
                templateUrl: './image-detail.component.html',
                styleUrls: ['./image-detail.component.css']
            }]
    }], function () { return [{ type: _Services_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _Services_customvalidation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/customvalidation.service */ "./src/app/Services/customvalidation.service.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function LoginComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.errorMsg);
} }
class LoginComponent {
    constructor(formBuilder, 
    // tslint:disable-next-line:align
    customValidator, 
    // tslint:disable-next-line:align
    authService, 
    // tslint:disable-next-line:align
    router) {
        this.formBuilder = formBuilder;
        this.customValidator = customValidator;
        this.authService = authService;
        this.router = router;
        this.submitted = false;
    }
    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.customValidator.patternValidator()])],
        });
    }
    // tslint:disable-next-line:typedef
    get loginFormControl() {
        return this.loginForm.controls;
    }
    // tslint:disable-next-line:typedef
    signIn() {
        this.authService.login({ email: this.email, password: this.password })
            .then(resolve => this.router.navigate(['gallery']))
            .catch(error => this.errorMsg = error.message);
    }
    // tslint:disable-next-line:typedef
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.valid) {
            this.signIn();
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_customvalidation_service__WEBPACK_IMPORTED_MODULE_2__["CustomvalidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 8, consts: [[1, "container"], [3, "formGroup", "ngSubmit"], [2, "text-align", "center"], [2, "color", "black"], ["id", "caption"], [1, "form-group"], ["placeholder", "Email", "formControlName", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["style", "background-color: white", "class", "text-danger", 4, "ngIf"], ["placeholder", "Password", "formControlName", "password", "maxlength", "30", "type", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn-success"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger", 2, "background-color", "white"], [1, "text-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Admin Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_span_10_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_span_11_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_span_16_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_span_17_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_p_21_Template, 2, 1, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.loginFormControl.email.touched || ctx.submitted) && (ctx.loginFormControl.email.errors == null ? null : ctx.loginFormControl.email.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginFormControl.email.touched && (ctx.loginFormControl.email.errors == null ? null : ctx.loginFormControl.email.errors.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.loginFormControl.password.touched || ctx.submitted) && (ctx.loginFormControl.password.errors == null ? null : ctx.loginFormControl.password.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginFormControl.password.touched && (ctx.loginFormControl.password.errors == null ? null : ctx.loginFormControl.password.errors.invalidPassword));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["#img-thumbnail[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border: none;\n}\n\n#img-thumbnail[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], #img-thumbnail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  max-height: 330px !important;\n  width: 100% !important;\n  border: 1px solid black !important;\n  border-radius: 0.65rem !important;\n  padding: 0.45rem !important;\n}\n\n#caption[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  border: 1px solid black !important;\n  border-radius: 0.65rem !important;\n  background-color: #d65ed6;\n  color: black;\n  padding: 0.45rem !important;\n}\n\n.dropdowngall[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  border-color: black;\n  border-width: 1px;\n  color: white !important;\n}\n\n.captionSUb[_ngcontent-%COMP%] {\n  background-color: white;\n  border-color: black;\n  border-width: 1px;\n  color: #007bff;\n  min-width: 258px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background-color: #007bff;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: none;\n  margin-bottom: 0px;\n  border: 0px;\n  border-top: 1px solid #efefef;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: #007bff !important;\n  border-color: #007bff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFFQTs7RUFFRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUVGOztBQUFBO0VBRUUseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFBQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UseUJBQUE7QUFHRjs7QUFEQTtFQUNHLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFJSDs7QUFEQTtFQUNFLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQ0FBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2ltZy10aHVtYm5haWx7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG4jaW1nLXRodW1ibmFpbCA+IGltZyxcclxuI2ltZy10aHVtYm5haWwgYSA+IGltZyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6MzMwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogLjY1cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogLjQ1cmVtICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiNjYXB0aW9ue1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IC42NXJlbSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDIxNCwgOTQsIDIxNCk7O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAuNDVyZW0gIWltcG9ydGFudDtcclxufVxyXG4uZHJvcGRvd25nYWxsXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDdiZmY7XHJcbiAgYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gIGJvcmRlci13aWR0aDoxcHg7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcHRpb25TVWJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICBib3JkZXItY29sb3I6YmxhY2s7XHJcbiAgYm9yZGVyLXdpZHRoOjFweDtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICBtaW4td2lkdGg6IDI1OHB4O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG59XHJcbmhyIHtcclxuICAgbWFyZ2luLXRvcDogbm9uZTtcclxuICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICBib3JkZXI6IDBweDtcclxuICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZmVmZWY7XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _Services_customvalidation_service__WEBPACK_IMPORTED_MODULE_2__["CustomvalidationService"] }, { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/contactme.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/contactme.model.ts ***!
  \*******************************************/
/*! exports provided: ContactMe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMe", function() { return ContactMe; });
class ContactMe {
    constructor() {
        this.createdOn = new Date().toISOString().split('T')[0];
    }
}


/***/ }),

/***/ "./src/app/models/requestsong.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/requestsong.model.ts ***!
  \*********************************************/
/*! exports provided: RequestSong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestSong", function() { return RequestSong; });
class RequestSong {
    constructor() {
        this.DateRequested = new Date();
    }
}


/***/ }),

/***/ "./src/app/models/valitator.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/valitator.model.ts ***!
  \*******************************************/
/*! exports provided: CodeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeValidator", function() { return CodeValidator; });
class CodeValidator {
}


/***/ }),

/***/ "./src/app/request-list/request-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/request-list/request-list.component.ts ***!
  \********************************************************/
/*! exports provided: RequestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestListComponent", function() { return RequestListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_servicerequest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/servicerequest.service */ "./src/app/Services/servicerequest.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function RequestListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "First Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Last Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Phone Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "E-mail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Date Created:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Comments:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const req_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", req_r1.firstName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", req_r1.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", req_r1.phoneNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", req_r1.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", req_r1.createdOn, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", req_r1.comments, "");
} }
class RequestListComponent {
    constructor(serRequest) {
        this.serRequest = serRequest;
    }
    // tslint:disable-next-line:typedef
    ngOnInit() {
        // Use snapshotChanges().map() to store the key
        this.serRequest.getRequestList().snapshotChanges().map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }).subscribe(serReqList => {
            this.serReq = serReqList;
        });
    }
}
RequestListComponent.ɵfac = function RequestListComponent_Factory(t) { return new (t || RequestListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_servicerequest_service__WEBPACK_IMPORTED_MODULE_1__["ServicerequestService"])); };
RequestListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestListComponent, selectors: [["app-request-list"]], decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], ["id", "img-thumbnail", 1, "img-thumbnail"], ["id", "caption", 1, "caption"]], template: function RequestListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestListComponent_div_1_Template, 27, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.serReq);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["#caption[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  border: 1px solid black !important;\n  border-radius: 0.65rem !important;\n  background-color: #d65ed6;\n  color: black;\n  padding: 0.45rem !important;\n}\n\n#img-thumbnail[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWVzdC1saXN0L3JlcXVlc3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvcmVxdWVzdC1saXN0L3JlcXVlc3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXB0aW9ue1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IC42NXJlbSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDIxNCwgOTQsIDIxNCk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IC40NXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbiNpbWctdGh1bWJuYWlse1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-request-list',
                templateUrl: './request-list.component.html',
                styleUrls: ['./request-list.component.scss']
            }]
    }], function () { return [{ type: _Services_servicerequest_service__WEBPACK_IMPORTED_MODULE_1__["ServicerequestService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/song-requests/song-requests.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/song-requests/song-requests.component.ts ***!
  \**********************************************************/
/*! exports provided: SongRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongRequestsComponent", function() { return SongRequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_songrequest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/songrequest.service */ "./src/app/Services/songrequest.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SongRequestsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Requested By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Song Title:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Artist:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Validation Code:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const req_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", req_r1.Name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", req_r1.SongName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", req_r1.PerformedBy, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", req_r1.ValidationCode, "");
} }
class SongRequestsComponent {
    constructor(serRequest) {
        this.serRequest = serRequest;
    }
    ngOnInit() {
        this.serRequest.getRequestList().snapshotChanges().map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }).subscribe(serReqList => {
            this.serReq = serReqList;
        });
    }
}
SongRequestsComponent.ɵfac = function SongRequestsComponent_Factory(t) { return new (t || SongRequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_songrequest_service__WEBPACK_IMPORTED_MODULE_1__["SongrequestService"])); };
SongRequestsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SongRequestsComponent, selectors: [["app-song-requests"]], decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], ["id", "img-thumbnail", 1, "img-thumbnail"], ["id", "caption", 1, "caption"]], template: function SongRequestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SongRequestsComponent_div_1_Template, 19, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.serReq);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["#caption[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  border: 1px solid black !important;\n  border-radius: 0.65rem !important;\n  background-color: #d65ed6;\n  color: black;\n  padding: 0.45rem !important;\n}\n\n#img-thumbnail[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZy1yZXF1ZXN0cy9zb25nLXJlcXVlc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9zb25nLXJlcXVlc3RzL3NvbmctcmVxdWVzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2FwdGlvbntcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC42NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjE0LCA5NCwgMjE0KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IC40NXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAjaW1nLXRodW1ibmFpbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SongRequestsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-song-requests',
                templateUrl: './song-requests.component.html',
                styleUrls: ['./song-requests.component.scss']
            }]
    }], function () { return [{ type: _Services_songrequest_service__WEBPACK_IMPORTED_MODULE_1__["SongrequestService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/songGenre.ts":
/*!******************************!*\
  !*** ./src/app/songGenre.ts ***!
  \******************************/
/*! exports provided: SongGenre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongGenre", function() { return SongGenre; });
class SongGenre {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}


/***/ }),

/***/ "./src/app/songrequest/songrequest.component.ts":
/*!******************************************************!*\
  !*** ./src/app/songrequest/songrequest.component.ts ***!
  \******************************************************/
/*! exports provided: SongrequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongrequestComponent", function() { return SongrequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_requestsong_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/requestsong.model */ "./src/app/models/requestsong.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _Services_songrequest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/songrequest.service */ "./src/app/Services/songrequest.service.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _Services_songlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/songlist.service */ "./src/app/Services/songlist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function SongrequestComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SongrequestComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 2 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SongrequestComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SongrequestComponent_div_11_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SongrequestComponent_div_11_div_2_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.Name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.Name.errors.minlength);
} }
function SongrequestComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const availableSong_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", availableSong_r7.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", availableSong_r7.id + " - " + availableSong_r7.artist, " ");
} }
function SongrequestComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Song name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SongrequestComponent_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Song name must be at least 2 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SongrequestComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SongrequestComponent_div_22_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SongrequestComponent_div_22_div_2_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.SongName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.SongName.errors.minlength);
} }
function SongrequestComponent_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Artist Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SongrequestComponent_div_28_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Artist Name must be at least 2 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SongrequestComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SongrequestComponent_div_28_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SongrequestComponent_div_28_div_2_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.PerformedBy.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.PerformedBy.errors.minlength);
} }
function SongrequestComponent_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Validation code is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SongrequestComponent_div_34_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Validation code must be 6 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SongrequestComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SongrequestComponent_div_34_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SongrequestComponent_div_34_div_2_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.ValidationCode.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.ValidationCode.errors.minlength);
} }
class SongrequestComponent {
    constructor(toastService, songrequestservice, songlistservice, router, formBuilder) {
        this.toastService = toastService;
        this.songrequestservice = songrequestservice;
        this.songlistservice = songlistservice;
        this.router = router;
        this.formBuilder = formBuilder;
        this.artist = '';
        this.song = '';
        this.key = '';
        this.fileUploads = [];
        this.availableSongs = [];
        this.submitted = false;
        this.codeValid = 'false';
        this.cKey = "";
        this.requestSong = new _models_requestsong_model__WEBPACK_IMPORTED_MODULE_1__["RequestSong"]();
    }
    ngOnInit() {
        this.getAllAvailableList();
        this.getAllCodes();
        this.formValidation();
    }
    formValidation() {
        this.SonqRequestForm = this.formBuilder.group({
            Name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            SongName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            PerformedBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            ValidationCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)]],
        });
    }
    showSuccess() {
        this.toastService.show('Your validation code is correct!', {
            classname: 'bg-success text-light',
            delay: 5000,
            autohide: true,
            headertext: 'Code is correct!'
        });
    }
    // tslint:disable-next-line:typedef
    showError() {
        this.toastService.show('Your validation code is not correct!', {
            classname: 'bg-danger text-light',
            delay: 3000,
            autohide: true,
            headertext: 'Error!!!'
        });
    }
    get Name() {
        return this.SonqRequestForm.get('Name');
    }
    get SongName() {
        return this.SonqRequestForm.get('SongName');
    }
    get PerformedBy() {
        return this.SonqRequestForm.get('PerformedBy');
    }
    get ValidationCode() {
        return this.SonqRequestForm.get('ValidationCode');
    }
    CharacterEnter(e) {
        this.charEnter = e.target.value;
    }
    getAllAvailableList() {
        this.songlistservice.getAvailableSongsForPlayList().snapshotChanges().map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }).subscribe((songsUploaded) => {
            this.availableSongs = songsUploaded.sort((a, b) => a.id - b.id);
        });
    }
    AddToCurrentPL(key) {
        this.songrequestservice.setCurrentPL(key);
    }
    update(ev) {
        const result = this.availableSongs.filter((obj) => {
            return obj.key === ev.target.value;
        });
        this.artist = result[0]['artist'];
        this.song = result[0]['id'];
        this.key = result[0]['key'];
        this.SonqRequestForm.get('PerformedBy').setValue(this.artist);
        this.SonqRequestForm.get('SongName').setValue(this.song);
    }
    getAllCodes() {
        // Use snapshotChanges().map() to store the key
        this.songrequestservice.getCodeValidators().snapshotChanges().map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }).subscribe((fileUploads) => {
            this.fileUploads = fileUploads;
        });
    }
    codeChecker() {
        for (let index2 = 0; index2 < this.fileUploads.length; index2++) {
            if (this.fileUploads[index2].id === this.charEnter) {
                this.cKey = this.fileUploads[index2].key;
                this.showSuccess();
                return this.codeValid = 'true';
            }
        }
    }
    onSubmit() {
        if (this.SonqRequestForm.invalid) {
            alert("Make sure that you have properly populated form!");
            return;
        }
        else {
            this.codeChecker();
            if (this.codeValid === 'true') {
                this.songrequestservice.create(this.requestSong);
                if (this.key !== "") {
                    this.AddToCurrentPL(this.key);
                }
                this.songrequestservice.deleteCodeValidators(this.cKey);
                this.router.navigate(['gallery']);
                this.submitted = true;
            }
            else {
                this.showError();
            }
        }
    }
}
SongrequestComponent.ɵfac = function SongrequestComponent_Factory(t) { return new (t || SongrequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_songrequest_service__WEBPACK_IMPORTED_MODULE_3__["SongrequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_songlist_service__WEBPACK_IMPORTED_MODULE_5__["SongListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
SongrequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SongrequestComponent, selectors: [["app-songrequest"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_Services_songrequest_service__WEBPACK_IMPORTED_MODULE_3__["SongrequestService"]])], decls: 36, vars: 11, consts: [[2, "text-align", "center"], [2, "color", "black"], [1, "container"], ["id", "caption"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["formControlName", "Name", "name", "Name", "minlength", "2", "placeholder", "Enter your name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-danger", 4, "ngIf"], ["name", "SelectedSong", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "SongName", "name", "SongName", "placeholder", "Enter song name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "PerformedBy", "name", "PerformedBy", "minlength", "2", "maxlength", "40", "placeholder", "Enter performed by", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "ValidationCode", "name", "ValidationCode", "placeholder", "Enter 6 character code.", "minlength", "6", "maxlength", "6", "required", "", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success"], [1, "alert", "alert-danger"], [4, "ngIf"], [3, "value"]], template: function SongrequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Song Request Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SongrequestComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SongrequestComponent_Template_input_ngModelChange_9_listener($event) { return ctx.requestSong.Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SongrequestComponent_div_11_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select song: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SongrequestComponent_Template_select_ngModelChange_15_listener($event) { return ctx.selected = $event; })("change", function SongrequestComponent_Template_select_change_15_listener($event) { return ctx.update($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "--Choose Song--");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SongrequestComponent_option_18_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " ,or request new one to be added into data base. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SongrequestComponent_Template_input_ngModelChange_20_listener($event) { return ctx.requestSong.SongName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SongrequestComponent_div_22_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Performed By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SongrequestComponent_Template_input_ngModelChange_26_listener($event) { return ctx.requestSong.PerformedBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SongrequestComponent_div_28_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Validation Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SongrequestComponent_Template_input_change_32_listener($event) { return ctx.CharacterEnter($event); })("ngModelChange", function SongrequestComponent_Template_input_ngModelChange_32_listener($event) { return ctx.requestSong.ValidationCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SongrequestComponent_div_34_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.SonqRequestForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.requestSong.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Name.invalid && (ctx.Name.dirty || ctx.Name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableSongs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.requestSong.SongName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SongName.invalid && (ctx.SongName.dirty || ctx.SongName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.requestSong.PerformedBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PerformedBy.invalid && (ctx.PerformedBy.dirty || ctx.PerformedBy.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.requestSong.ValidationCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ValidationCode.invalid && (ctx.ValidationCode.dirty || ctx.ValidationCode.touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]], styles: ["#caption[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  border: 1px solid black !important;\n  border-radius: 0.65rem !important;\n  background-color: #d65ed6;\n  color: black;\n  padding: 0.65rem !important;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: #007bff !important;\n  border-color: #007bff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZ3JlcXVlc3Qvc29uZ3JlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUU7RUFDRSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NvbmdyZXF1ZXN0L3NvbmdyZXF1ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhcHRpb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNjVyZW0gIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIxNCwgOTQsIDIxNCk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAuNjVyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1zdWNjZXNzIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmYhaW1wb3J0YW50O1xyXG4gIH1cclxuICAiXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SongrequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-songrequest',
                templateUrl: './songrequest.component.html',
                styleUrls: ['./songrequest.component.scss'],
                providers: [_Services_songrequest_service__WEBPACK_IMPORTED_MODULE_3__["SongrequestService"]]
            }]
    }], function () { return [{ type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }, { type: _Services_songrequest_service__WEBPACK_IMPORTED_MODULE_3__["SongrequestService"] }, { type: _Services_songlist_service__WEBPACK_IMPORTED_MODULE_5__["SongListService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/toast/toast.component.ts":
/*!******************************************!*\
  !*** ./src/app/toast/toast.component.ts ***!
  \******************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





function ToastComponent_ngb_toast_0_ng_template_1_ng_template_0_Template(rf, ctx) { }
function ToastComponent_ngb_toast_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastComponent_ngb_toast_0_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", toast_r1.textOrTpl);
} }
function ToastComponent_ngb_toast_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](toast_r1.textOrTpl);
} }
function ToastComponent_ngb_toast_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-toast", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hide", function ToastComponent_ngb_toast_0_Template_ngb_toast_hide_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const toast_r1 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.toastService.remove(toast_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToastComponent_ngb_toast_0_ng_template_1_Template, 1, 1, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToastComponent_ngb_toast_0_ng_template_2_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toast_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](toast_r1.classname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", toast_r1.headertext)("autohide", toast_r1.autohide)("delay", toast_r1.delay || 5000);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isTemplate(toast_r1))("ngIfElse", _r3);
} }
class ToastComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    // tslint:disable-next-line:typedef
    isTemplate(toast) { return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]; }
}
ToastComponent.ɵfac = function ToastComponent_Factory(t) { return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
ToastComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastComponent, selectors: [["app-toasts"]], hostVars: 2, hostBindings: function ToastComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngb-toasts", true);
    } }, decls: 1, vars: 1, consts: [[3, "header", "class", "autohide", "delay", "hide", 4, "ngFor", "ngForOf"], [3, "header", "autohide", "delay", "hide"], [3, "ngIf", "ngIfElse"], ["text", ""], [3, "ngTemplateOutlet"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastComponent_ngb_toast_0_Template, 4, 7, "ngb-toast", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toastService.toasts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbToast"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toasts',
                template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [header]="toast.headertext"
      [class]="toast.classname"
      [autohide]="toast.autohide"
      [delay]="toast.delay || 5000"
      (hide)="toastService.remove(toast)"
    >
      <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
        <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
      </ng-template>

      <ng-template #text>{{ toast.textOrTpl }}</ng-template>
    </ngb-toast>
  `,
                // tslint:disable-next-line:no-host-metadata-property
                host: { '[class.ngb-toasts]': 'true' }
            }]
    }], function () { return [{ type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/update-list-sequence/update-list-sequence.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/update-list-sequence/update-list-sequence.component.ts ***!
  \************************************************************************/
/*! exports provided: UpdateListSequenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateListSequenceComponent", function() { return UpdateListSequenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _songGenre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../songGenre */ "./src/app/songGenre.ts");
/* harmony import */ var _Services_songlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/songlist.service */ "./src/app/Services/songlist.service.ts");
/* harmony import */ var _Services_select_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/select.service */ "./src/app/Services/select.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");








function UpdateListSequenceComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genrecategory_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", genrecategory_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](genrecategory_r2.name);
} }
function UpdateListSequenceComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "| Song Sequence: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdateListSequenceComponent_div_13_Template_input_change_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const file_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.open($event, file_r3.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " | Is in the current PL? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateListSequenceComponent_div_13_Template_button_click_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const file_r3 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.AddToCurrentPL($event, file_r3.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add to PL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateListSequenceComponent_div_13_Template_button_click_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const file_r3 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.RemoveFromCurrentPL($event, file_r3.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Remove from PL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateListSequenceComponent_div_13_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const file_r3 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteFileUpload(file_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", file_r3.artist, " | ", file_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", file_r3.sequence);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r3.currentplaylist);
} }
class UpdateListSequenceComponent {
    constructor(songlistservice, selectService) {
        this.songlistservice = songlistservice;
        this.selectService = selectService;
        this.fileUploads = [];
        this.selectedCategory = new _songGenre__WEBPACK_IMPORTED_MODULE_1__["SongGenre"]('Pop', 'Pop');
        this.page = 1;
        this.pageSize = 9;
    }
    ngOnInit() {
        this.genrecat = this.selectService.getSongGenre();
        this.onSelect(this.selectedCategory.id);
        this.getAllList();
    }
    // tslint:disable-next-line:typedef
    ngOnChanges() {
        this.onSelect(this.selectedCategory.id);
    }
    open(event, key) {
        this.songlistservice.setSongSequence(key, event.target.value);
    }
    AddToCurrentPL(event, key) {
        this.songlistservice.setCurrentPL(key, 'true');
    }
    RemoveFromCurrentPL(event, key) {
        this.songlistservice.removeCetCurrentPL(key, 'false');
    }
    // tslint:disable-next-line:typedef
    onSelect(Categoryid) {
        this.selectedCategory = new _songGenre__WEBPACK_IMPORTED_MODULE_1__["SongGenre"](Categoryid, Categoryid);
        this.getFilteredList();
    }
    // tslint:disable-next-line:typedef
    deleteFileUpload(fileUploads) {
        this.songlistservice.deleteFileUpload(fileUploads);
    }
    // tslint:disable-next-line:typedef
    getAllList() {
        this.songlistservice.getImageDetailList(this.selectedCategory.id).snapshotChanges().map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }).subscribe((fileUploads) => {
            this.fileUploads = fileUploads;
            this.fileUploads = this.fileUploads.sort((a, b) => a.sequence - b.sequence);
        });
    }
    // tslint:disable-next-line:typedef
    getFilteredList() {
        this.songlistservice.getFilteredImages(this.selectedCategory.id).snapshotChanges().map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }).subscribe((fileUploads) => {
            this.fileUploads = fileUploads;
            this.fileUploads = this.fileUploads.sort((a, b) => a.sequence - b.sequence);
        });
    }
}
UpdateListSequenceComponent.ɵfac = function UpdateListSequenceComponent_Factory(t) { return new (t || UpdateListSequenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_songlist_service__WEBPACK_IMPORTED_MODULE_2__["SongListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_select_service__WEBPACK_IMPORTED_MODULE_3__["SelectService"])); };
UpdateListSequenceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateListSequenceComponent, selectors: [["app-update-list-sequence"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 10, consts: [[1, "container-wrapper"], [2, "color", "black", "font-weight", "bold"], [1, "dropdowngall", 3, "ngModel", "ngModelChange", "change"], ["value", "Select"], [3, "value", 4, "ngFor", "ngForOf"], [2, "color", "red"], ["class", "parent", 4, "ngFor", "ngForOf"], [3, "page", "pageSize", "collectionSize", "pageChange"], [3, "value"], [1, "parent"], [1, "column"], ["type", "number", 1, "btn-success2", 3, "value", "change"], [1, "btn-success", 3, "click"], [1, "btn-success1", 3, "click"]], template: function UpdateListSequenceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Genre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateListSequenceComponent_Template_select_ngModelChange_6_listener($event) { return ctx.selectedCategory.id = $event; })("change", function UpdateListSequenceComponent_Template_select_change_6_listener($event) { return ctx.onSelect($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UpdateListSequenceComponent_option_9_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UpdateListSequenceComponent_div_13_Template, 19, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngb-pagination", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function UpdateListSequenceComponent_Template_ngb_pagination_pageChange_16_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCategory.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genrecat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](14, 6, ctx.fileUploads, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.page)("pageSize", ctx.pageSize)("collectionSize", ctx.fileUploads == null ? null : ctx.fileUploads.length);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPagination"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"]], styles: [".btn-success[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: #007bff !important;\n  border-color: #007bff !important;\n  max-height: 24px;\n  font-size: small;\n}\n\n.btn-success1[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: red !important;\n  border-color: #007bff !important;\n  font-size: small;\n  max-height: 24px;\n}\n\n.btn-success2[_ngcontent-%COMP%] {\n  max-width: 60px !important;\n  font-size: small;\n  max-height: 24px;\n}\n\n.parent[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  background: #d65ed6;\n  border: black;\n  border-width: 1px;\n  border-style: solid;\n}\n\n.column[_ngcontent-%COMP%] {\n  flex: 1 1 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLWxpc3Qtc2VxdWVuY2UvdXBkYXRlLWxpc3Qtc2VxdWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0U7RUFDRSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0U7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDRTtFQUNFLGFBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1saXN0LXNlcXVlbmNlL3VwZGF0ZS1saXN0LXNlcXVlbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1zdWNjZXNzIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmYhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgfVxyXG4gIC5idG4tc3VjY2VzczEge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1zdWNjZXNzMiB7XHJcbiAgICBtYXgtd2lkdGg6IDYwcHghaW1wb3J0YW50OztcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLnBhcmVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgYmFja2dyb3VuZDogI2Q2NWVkNjtcclxuICAgIGJvcmRlcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2x1bW4ge1xyXG4gICAgZmxleDogMSAxIDBweDtcclxuICB9Il19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateListSequenceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-list-sequence',
                templateUrl: './update-list-sequence.component.html',
                styleUrls: ['./update-list-sequence.component.scss']
            }]
    }], function () { return [{ type: _Services_songlist_service__WEBPACK_IMPORTED_MODULE_2__["SongListService"] }, { type: _Services_select_service__WEBPACK_IMPORTED_MODULE_3__["SelectService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/upload-song/upload-song.component.ts":
/*!******************************************************!*\
  !*** ./src/app/upload-song/upload-song.component.ts ***!
  \******************************************************/
/*! exports provided: UploadSongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadSongComponent", function() { return UploadSongComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/storage/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _Services_fileSong_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/fileSong.service */ "./src/app/Services/fileSong.service.ts");
/* harmony import */ var _songGenre__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../songGenre */ "./src/app/songGenre.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _Services_select_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/select.service */ "./src/app/Services/select.service.ts");
/* harmony import */ var _Services_songlist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/songlist.service */ "./src/app/Services/songlist.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













function UploadSongComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genrecategory_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", genrecategory_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](genrecategory_r2.name);
} }
const _c0 = function (a0) { return { "width": a0 }; };
function UploadSongComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const progress_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, progress_r3 + "%"));
} }
class UploadSongComponent {
    constructor(toastService, selectService, storage, filesongService, songService) {
        this.toastService = toastService;
        this.selectService = selectService;
        this.storage = storage;
        this.filesongService = filesongService;
        this.songService = songService;
        this.SaveDisabled = false;
        this.selectedCategory = new _songGenre__WEBPACK_IMPORTED_MODULE_4__["SongGenre"]('', '');
    }
    isTemplate(toast) { return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]; }
    ngOnInit() {
        this.maxSequence();
        this.genrecat = this.selectService.getSongGenre();
        this.filesongService.getImageDetailList();
        this.selectedImage = null;
    }
    maxSequence() {
        this.filesongService.getSequence().snapshotChanges().map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }).subscribe((findMaxSequence) => {
            this.findMaxSequence = findMaxSequence.sort((a, b) => b.sequence - a.sequence);
            this.sequence = (+this.findMaxSequence[0]['sequence'] + 1).toString();
        });
    }
    // tslint:disable-next-line:typedef
    ngOnChanges() {
        // Use snapshotChanges().map() to store the key
        this.filesongService.getFilteredByCaption(this.file).snapshotChanges().map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }).subscribe(fileUploads => {
            this.fileUploads = fileUploads;
        });
    }
    // tslint:disable-next-line:typedef
    showPreview(event) {
        this.selectedImage = event.target.files[0];
    }
    // tslint:disable-next-line:typedef
    showStandard() {
        this.toastService.show('I am a standard toast', {
            delay: 2000,
            autohide: true
        });
    }
    // tslint:disable-next-line:typedef
    onSelect(subCategoryid) {
    }
    // tslint:disable-next-line:typedef
    showSuccess() {
        this.toastService.show('You have successfully added song to database!', {
            classname: 'bg-success text-light',
            delay: 5000,
            autohide: true,
            headertext: 'Song Upload'
        });
    }
    // tslint:disable-next-line:typedef
    showError() {
        this.toastService.show('Check Required Fields', {
            classname: 'bg-danger text-light',
            delay: 3000,
            autohide: true,
            headertext: 'Error!!!'
        });
    }
    // tslint:disable-next-line:typedef
    save() {
        if (this.selectedImage === null ||
            this.id === 'undefined' ||
            this.selectSubVal === '') {
            return this.showError();
        }
        // tslint:disable-next-line:prefer-const
        let name = this.selectedImage.name;
        this.SaveDisabled = true;
        const fileRef = this.storage.ref(name);
        const task = this.storage.upload(name, this.selectedImage);
        this.uploadProgress$ = task.percentageChanges();
        this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            fileRef.getDownloadURL().subscribe((url) => {
                this.url = url;
                this.genrecategory = this.selectedCategory.id.toString();
                this.filesongService.insertImageDetails(this.id, this.url, this.genrecategory, this.sequence, this.artist);
                this.showSuccess();
            });
        })).subscribe();
        this.SaveDisabled = false;
    }
    // tslint:disable-next-line:typedef
    deleteFileUpload(fileUploads) {
        this.filesongService.deleteFileUpload(fileUploads);
    }
}
UploadSongComponent.ɵfac = function UploadSongComponent_Factory(t) { return new (t || UploadSongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_select_service__WEBPACK_IMPORTED_MODULE_6__["SelectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_fileSong_service__WEBPACK_IMPORTED_MODULE_3__["FileSongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_songlist_service__WEBPACK_IMPORTED_MODULE_7__["SongListService"])); };
UploadSongComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadSongComponent, selectors: [["app-upload-song"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 45, vars: 10, consts: [[2, "color", "black", "text-align", "center"], ["id", "caption"], [2, "width", "100%"], [2, "color", "black", "font-weight", "bold"], [1, "dropdowngall", 3, "ngModel", "ngModelChange", "change"], ["value", "Select"], [3, "value", 4, "ngFor", "ngForOf"], ["minlength", "3", "type", "text", "name", "id", 1, "captionSUb", 3, "ngModel", "ngModelChange"], ["minlength", "3", "type", "text", "name", "artist", 1, "artist", 3, "ngModel", "ngModelChange"], ["readonly", "true", "disabled", "true", "minlength", "1", "type", "text", "name", "sequence", 1, "sequence", 3, "value", "ngModel", "ngModelChange"], ["type", "file", 3, "change"], ["class", "progress", 4, "ngIf"], [1, "btn-success", 3, "hidden", "click"], [3, "value"], [1, "progress"], [1, "progress-bar", "progress-bar-animated", 3, "ngStyle"]], template: function UploadSongComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Upload song to database");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Genre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UploadSongComponent_Template_select_ngModelChange_12_listener($event) { return ctx.selectedCategory.id = $event; })("change", function UploadSongComponent_Template_select_change_12_listener($event) { return ctx.onSelect($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UploadSongComponent_option_15_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Song Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UploadSongComponent_Template_input_ngModelChange_21_listener($event) { return ctx.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Artist:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UploadSongComponent_Template_input_ngModelChange_27_listener($event) { return ctx.artist = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sequence:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UploadSongComponent_Template_input_ngModelChange_33_listener($event) { return ctx.sequence = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadSongComponent_Template_input_change_36_listener($event) { return ctx.showPreview($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, UploadSongComponent_div_38_Template, 2, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadSongComponent_Template_button_click_41_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Save Song");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCategory.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genrecat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.artist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.sequence);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sequence);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 8, ctx.uploadProgress$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.SaveDisabled);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["#img-thumbnail[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border: none;\n}\n\n#img-thumbnail[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], #img-thumbnail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  max-height: 330px !important;\n  width: 100% !important;\n  border: 1px solid black !important;\n  border-radius: 0.65rem !important;\n  padding: 0.45rem !important;\n}\n\n#caption[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  border: 1px solid black !important;\n  border-radius: 0.65rem !important;\n  background-color: #d65ed6;\n  color: black;\n  padding: 0.45rem !important;\n}\n\n.dropdowngall[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  border-color: black;\n  border-width: 1px;\n  color: white !important;\n}\n\n.captionSUb[_ngcontent-%COMP%] {\n  background-color: white;\n  border-color: black;\n  border-width: 1px;\n  color: #007bff;\n  min-width: 258px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background-color: #007bff;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: none;\n  margin-bottom: 0px;\n  border: 0px;\n  border-top: 1px solid #efefef;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: #007bff !important;\n  border-color: #007bff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLXNvbmcvdXBsb2FkLXNvbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFFRTs7RUFFRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUVKOztBQUFFO0VBRUUseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFBRTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUFFO0VBQ0UseUJBQUE7QUFHSjs7QUFERTtFQUNHLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFJTDs7QUFERTtFQUNFLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQ0FBQTtBQUlKIiwiZmlsZSI6InNyYy9hcHAvdXBsb2FkLXNvbmcvdXBsb2FkLXNvbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2ltZy10aHVtYm5haWx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgfVxyXG4gICNpbWctdGh1bWJuYWlsID4gaW1nLFxyXG4gICNpbWctdGh1bWJuYWlsIGEgPiBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OjMzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC42NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogLjQ1cmVtICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAjY2FwdGlvbntcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC42NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjE0LCA5NCwgMjE0KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IC40NXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZHJvcGRvd25nYWxsXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3YmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gICAgYm9yZGVyLXdpZHRoOjFweDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY2FwdGlvblNVYntcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItY29sb3I6YmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6MXB4O1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICBtaW4td2lkdGg6IDI1OHB4O1xyXG4gIH1cclxuICBcclxuICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgfVxyXG4gIGhyIHtcclxuICAgICBtYXJnaW4tdG9wOiBub25lO1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICBib3JkZXI6IDBweDtcclxuICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VmZWZlZjtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1zdWNjZXNzIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmYhaW1wb3J0YW50O1xyXG4gIH1cclxuICAiXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadSongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload-song',
                templateUrl: './upload-song.component.html',
                styleUrls: ['./upload-song.component.scss']
            }]
    }], function () { return [{ type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }, { type: _Services_select_service__WEBPACK_IMPORTED_MODULE_6__["SelectService"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"]]
            }] }, { type: _Services_fileSong_service__WEBPACK_IMPORTED_MODULE_3__["FileSongService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_Services_fileSong_service__WEBPACK_IMPORTED_MODULE_3__["FileSongService"]]
            }] }, { type: _Services_songlist_service__WEBPACK_IMPORTED_MODULE_7__["SongListService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/storage/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _Services_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/file.service */ "./src/app/Services/file.service.ts");
/* harmony import */ var _artcategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../artcategory */ "./src/app/artcategory.ts");
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ "./node_modules/@syncfusion/ej2-angular-calendars/__ivy_ngcc__/@syncfusion/ej2-angular-calendars.js");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _Services_select_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/select.service */ "./src/app/Services/select.service.ts");
/* harmony import */ var _Services_image_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/image.service */ "./src/app/Services/image.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");















function UploadComponent_div_16_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", file_r7.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, file_r7.eventDate, "short"));
} }
function UploadComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Event Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadComponent_div_16_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSelect2($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Select Event Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UploadComponent_div_16_option_6_Template, 3, 5, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.fileUploads2);
} }
function UploadComponent_div_17_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artcategory_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", artcategory_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artcategory_r12.name);
} }
function UploadComponent_div_17_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artsubcategory_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", artsubcategory_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artsubcategory_r13.name);
} }
function UploadComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Event Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UploadComponent_div_17_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.selectedCategory.id = $event; })("change", function UploadComponent_div_17_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onSelect($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UploadComponent_div_17_option_6_Template, 2, 2, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Event More Info: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UploadComponent_div_17_Template_select_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.selectSubVal = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UploadComponent_div_17_option_13_Template, 2, 2, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Event Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ejs-datetimepicker", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UploadComponent_div_17_Template_ejs_datetimepicker_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.eventDate = $event; })("change", function UploadComponent_div_17_Template_ejs_datetimepicker_change_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.changeDate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "textarea", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UploadComponent_div_17_Template_textarea_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.selectedCategory.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.artcat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.selectSubVal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.artsubcat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMask", ctx_r1.enableMaskSupport)("ngModel", ctx_r1.eventDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.id);
} }
const _c0 = function (a0) { return { "width": a0 }; };
function UploadComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const progress_r21 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, progress_r21 + "%"));
} }
function UploadComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadComponent_div_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.SaveDisabled);
} }
function UploadComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadComponent_div_26_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.save2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Images to Gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r4.SaveDisabled);
} }
function UploadComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadComponent_div_34_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const file_r26 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.deleteFileUpload(file_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", file_r26.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Caption: ", file_r26.id, "");
} }
class UploadComponent {
    // tslint:disable-next-line:max-line-length
    constructor(toastService, selectService, storage, fileService, imageService) {
        this.toastService = toastService;
        this.selectService = selectService;
        this.storage = storage;
        this.fileService = fileService;
        this.imageService = imageService;
        this.SaveDisabled = false;
        this.selectedCategory = new _artcategory__WEBPACK_IMPORTED_MODULE_4__["ArtCategory"]('', '');
        this.format = "dd/MM/yyyy";
        this.enableMaskSupport = true;
    }
    // tslint:disable-next-line:typedef
    isTemplate(toast) { return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]; }
    /* tslint:disable use-lifecycle-interface */
    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.artcat = this.selectService.getArtCategory();
        this.onSelect(this.selectedCategory.id);
        this.selectSubVal = '';
        this.fileService.getImageDetailList();
        this.selectedImage = null;
        this.eventDate = null;
        this.changedDT = null;
        this.getAllList();
    }
    showhideradio(e) {
        console.log(e.target.value);
        if (e.target.value == 1) {
            this.showhide1 = true;
            this.showhide2 = false;
        }
        else if (e.target.value == 2) {
            this.showhide1 = false;
            this.showhide2 = true;
        }
    }
    onSelect2(e) {
        this.selectedEvent = e.target.value;
    }
    // tslint:disable-next-line:typedef
    getAllList() {
        // Use snapshotChanges().map() to store the key
        this.imageService.getImageDetailList().snapshotChanges().map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }).subscribe((fileUploads2) => {
            this.fileUploads2 = fileUploads2.sort((a, b) => (a.eventDate < b.eventDate) ? 1 : -1);
        });
    }
    // tslint:disable-next-line:typedef
    ngOnChanges() {
        // Use snapshotChanges().map() to store the key
        this.fileService.getFilteredByCaption(this.file).snapshotChanges().map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }).subscribe(fileUploads => {
            this.fileUploads = fileUploads;
        });
    }
    // tslint:disable-next-line:typedef
    onSelect(subCategoryid) {
        this.artsubcat = this.selectService.getArtSubCategory().filter((item) => item.subCategoryid === subCategoryid);
    }
    // tslint:disable-next-line:typedef
    showPreview(event) {
        this.selectedImage = event.target.files[0];
    }
    // tslint:disable-next-line:typedef
    showStandard() {
        this.toastService.show('I am a standard toast', {
            delay: 2000,
            autohide: true
        });
    }
    changeDate(e) {
        this.changedDT = e.value;
        this.changedDT = new Date(this.changedDT).getTime();
    }
    // tslint:disable-next-line:typedef
    showSuccess() {
        this.toastService.show('You have successfully added image to database!', {
            classname: 'bg-success text-light',
            delay: 5000,
            autohide: true,
            headertext: 'Image Upload'
        });
    }
    // tslint:disable-next-line:typedef
    showError() {
        this.toastService.show('Check Required Fields', {
            classname: 'bg-danger text-light',
            delay: 3000,
            autohide: true,
            headertext: 'Error!!!'
        });
    }
    save2() {
        if (this.selectedImage === null ||
            this.selectedEvent === 'undefined' || this.selectedEvent === '') {
            return this.showError();
        }
        else {
            let name = this.selectedImage.name;
            this.SaveDisabled = true;
            const fileRef = this.storage.ref(name);
            const task = this.storage.upload(name, this.selectedImage);
            this.uploadProgress$ = task.percentageChanges();
            this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
                fileRef.getDownloadURL().subscribe((url) => {
                    this.url = url;
                    this.id = this.selectedEvent;
                    this.fileService.insertGalleryDetails(this.id, this.url);
                    this.showSuccess();
                });
            })).subscribe();
            this.SaveDisabled = false;
        }
    }
    save() {
        if (this.selectedImage === null ||
            this.id === 'undefined' ||
            this.selectSubVal === '') {
            return this.showError();
        }
        else {
            let name = this.selectedImage.name;
            this.SaveDisabled = true;
            const fileRef = this.storage.ref(name);
            const task = this.storage.upload(name, this.selectedImage);
            this.uploadProgress$ = task.percentageChanges();
            this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
                fileRef.getDownloadURL().subscribe((url) => {
                    this.url = url;
                    this.category = this.selectedCategory.id.toString();
                    this.subcategory = this.selectSubVal;
                    this.fileService.insertImageDetails(this.id, this.url, this.category, this.subcategory, this.changedDT.toString());
                    this.showSuccess();
                });
            })).subscribe();
            this.SaveDisabled = false;
        }
    }
    // tslint:disable-next-line:typedef
    deleteFileUpload(fileUploads) {
        this.fileService.deleteFileUpload(fileUploads);
    }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_select_service__WEBPACK_IMPORTED_MODULE_7__["SelectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_image_service__WEBPACK_IMPORTED_MODULE_8__["ImageService"])); };
UploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadComponent, selectors: [["app-upload"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_5__["MaskedDateTimeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 35, vars: 9, consts: [[2, "color", "black", "text-align", "center"], ["id", "caption"], ["type", "radio", "id", "contactChoice1", "name", "contact", "value", "1", 3, "click"], ["for", "contactChoice1", 2, "color", "black", "font-weight", "bold"], ["type", "radio", "id", "contactChoice2", "name", "contact", "value", "2", 3, "click"], ["for", "contactChoice2", 2, "color", "black", "font-weight", "bold"], ["id", "caption", 4, "ngIf"], ["type", "file", 3, "change"], ["class", "progress", 4, "ngIf"], [4, "ngIf"], ["type", "text", "name", "file", "placeholder", "Enter Caption", 3, "ngModel", "ngModelChange"], [1, "btn-success", 3, "click"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [2, "color", "black", "font-weight", "bold"], [1, "dropdowngall", 3, "change"], ["value", "Select"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "dropdowngall", 3, "ngModel", "ngModelChange", "change"], [1, "dropdowngall", 3, "ngModel", "ngModelChange"], ["name", "eventDate", 3, "enableMask", "ngModel", "ngModelChange", "change"], ["minlength", "399px", "type", "text", "placeholder", "Enter Caption", "name", "id", 1, "captionSUb", 3, "ngModel", "ngModelChange"], [1, "progress"], [1, "progress-bar", "progress-bar-animated", 3, "ngStyle"], [1, "btn-success", 3, "hidden", "click"], [1, "col-md-4"], ["id", "img-thumbnail", 1, "img-thumbnail"], ["alt", "Lights", 2, "width", "100%", 3, "src"], ["id", "spacer"], ["id", "caption", 1, "caption"], [1, "col-md-10"], [1, "col-md-2"], [1, "btn", "btn-danger", "btn-xs", 2, "float", "right", 3, "click"]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create or Delete Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadComponent_Template_input_click_6_listener($event) { return ctx.showhideradio($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Create an Event ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadComponent_Template_input_click_11_listener($event) { return ctx.showhideradio($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Add Image to Event Gallery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UploadComponent_div_16_Template, 7, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UploadComponent_div_17_Template, 22, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadComponent_Template_input_change_20_listener($event) { return ctx.showPreview($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UploadComponent_div_22_Template, 2, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UploadComponent_div_25_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UploadComponent_div_26_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UploadComponent_Template_input_ngModelChange_30_listener($event) { return ctx.file = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_31_listener() { return ctx.ngOnChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Search by Caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, UploadComponent_div_34_Template, 12, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showhide2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showhide1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 7, ctx.uploadProgress$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showhide1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showhide2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.file);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fileUploads);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_5__["DateTimePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: ["#img-thumbnail[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border: none;\n}\n\n#img-thumbnail[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], #img-thumbnail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  max-height: 330px !important;\n  width: 100% !important;\n  border: 1px solid black !important;\n  border-radius: 0.65rem !important;\n  padding: 0.45rem !important;\n}\n\n#caption[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  border: 1px solid black !important;\n  border-radius: 0.65rem !important;\n  background-color: #d65ed6;\n  color: black;\n  padding: 0.45rem !important;\n}\n\n.dropdowngall[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  border-color: black;\n  border-width: 1px;\n  color: white !important;\n}\n\n.captionSUb[_ngcontent-%COMP%] {\n  background-color: white;\n  border-color: black;\n  border-width: 1px;\n  color: #007bff;\n  min-width: 258px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background-color: #007bff;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: none;\n  margin-bottom: 0px;\n  border: 0px;\n  border-top: 1px solid #efefef;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: #007bff !important;\n  border-color: #007bff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUVBOztFQUVFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBRUY7O0FBQUE7RUFFRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUFBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBQUE7RUFDRSx5QkFBQTtBQUdGOztBQURBO0VBQ0csZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQUlIOztBQURBO0VBQ0UsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNpbWctdGh1bWJuYWlse1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbn1cclxuI2ltZy10aHVtYm5haWwgPiBpbWcsXHJcbiNpbWctdGh1bWJuYWlsIGEgPiBpbWcge1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXgtaGVpZ2h0OjMzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IC42NXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IC40NXJlbSAhaW1wb3J0YW50O1xyXG4gfVxyXG4jY2FwdGlvbntcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAuNjVyZW0gIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTQsIDk0LCAyMTQpO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAuNDVyZW0gIWltcG9ydGFudDtcclxufVxyXG4uZHJvcGRvd25nYWxsXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDdiZmY7XHJcbiAgYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gIGJvcmRlci13aWR0aDoxcHg7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcHRpb25TVWJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICBib3JkZXItY29sb3I6YmxhY2s7XHJcbiAgYm9yZGVyLXdpZHRoOjFweDtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICBtaW4td2lkdGg6IDI1OHB4O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG59XHJcbmhyIHtcclxuICAgbWFyZ2luLXRvcDogbm9uZTtcclxuICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICBib3JkZXI6IDBweDtcclxuICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZmVmZWY7XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload',
                templateUrl: './upload.component.html',
                styleUrls: ['./upload.component.scss'],
                providers: [_syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_5__["MaskedDateTimeService"]],
            }]
    }], function () { return [{ type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }, { type: _Services_select_service__WEBPACK_IMPORTED_MODULE_7__["SelectService"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"]]
            }] }, { type: _Services_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_Services_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"]]
            }] }, { type: _Services_image_service__WEBPACK_IMPORTED_MODULE_8__["ImageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/validationcode/validationcode.component.ts":
/*!************************************************************!*\
  !*** ./src/app/validationcode/validationcode.component.ts ***!
  \************************************************************/
/*! exports provided: ValidationcodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationcodeComponent", function() { return ValidationcodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_songrequest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/songrequest.service */ "./src/app/Services/songrequest.service.ts");
/* harmony import */ var _models_valitator_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/valitator.model */ "./src/app/models/valitator.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ValidationcodeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Validation Code: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Date Generated: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 2, file_r1.createdOn, "short"));
} }
class ValidationcodeComponent {
    constructor(songlistservice) {
        this.songlistservice = songlistservice;
        this.codevalidator = new _models_valitator_model__WEBPACK_IMPORTED_MODULE_2__["CodeValidator"]();
        this.fileUploads = [];
    }
    ngOnInit() {
        this.getAllCodes();
    }
    getAllCodes() {
        // Use snapshotChanges().map() to store the key
        this.songlistservice.getCodeValidators().snapshotChanges().map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }).subscribe((fileUploads) => {
            this.fileUploads = fileUploads.sort((a, b) => (a.createdOn < b.createdOn) ? 1 : -1);
        });
    }
    makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 6; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    // tslint:disable-next-line:typedef
    createCode() {
        this.codevalidator.createdOn = Date.now().toString();
        this.codevalidator.id = this.makeid();
        this.songlistservice.generateCode(this.codevalidator);
    }
}
ValidationcodeComponent.ɵfac = function ValidationcodeComponent_Factory(t) { return new (t || ValidationcodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_songrequest_service__WEBPACK_IMPORTED_MODULE_1__["SongrequestService"])); };
ValidationcodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValidationcodeComponent, selectors: [["app-validationcode"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_Services_songrequest_service__WEBPACK_IMPORTED_MODULE_1__["SongrequestService"]])], decls: 6, vars: 1, consts: [[1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "btn", "btn-success", 3, "click"], [1, "col-md-4"], ["id", "img-thumbnail", 1, "img-thumbnail"], ["id", "spacer"], ["id", "caption", 1, "caption"]], template: function ValidationcodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ValidationcodeComponent_div_2_Template, 13, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ValidationcodeComponent_Template_button_click_4_listener() { return ctx.createCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Generate Validation Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fileUploads);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["#img-thumbnail[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border: none;\n}\n\n#img-thumbnail[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], #img-thumbnail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  max-height: 330px !important;\n  width: 100% !important;\n  border: 1px solid black !important;\n  border-radius: 0.65rem !important;\n  padding: 0.45rem !important;\n}\n\n#caption[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  border: 1px solid black !important;\n  border-radius: 0.65rem !important;\n  background-color: #d65ed6;\n  color: black;\n  padding: 0.45rem !important;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: none;\n  margin-bottom: 0px;\n  border: 0px;\n  border-top: 1px solid #efefef;\n}\n\n.dropdowngall[_ngcontent-%COMP%] {\n  background-color: #d65ed6;\n  border-color: black;\n  border-width: 1px;\n  color: white !important;\n}\n\n.linkGallery[_ngcontent-%COMP%] {\n  background-color: black;\n  border-color: #d65ed6 !important;\n  border-width: 1px;\n  color: #d65ed6 !important;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: #007bff !important;\n  border-color: #007bff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFsaWRhdGlvbmNvZGUvdmFsaWRhdGlvbmNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFFRTs7RUFFRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUVKOztBQUFFO0VBQ0csZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQUdMOztBQURFO0VBRUUseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFHSjs7QUFBRTtFQUVFLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBQ0U7RUFDRSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3ZhbGlkYXRpb25jb2RlL3ZhbGlkYXRpb25jb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNpbWctdGh1bWJuYWlse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gIH1cclxuICAjaW1nLXRodW1ibmFpbCA+IGltZyxcclxuICAjaW1nLXRodW1ibmFpbCBhID4gaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDozMzBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNjVyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IC40NXJlbSAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgI2NhcHRpb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNjVyZW0gIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIxNCwgOTQsIDIxNCk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAuNDVyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgaHIge1xyXG4gICAgIG1hcmdpbi10b3A6IG5vbmU7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgIGJvcmRlcjogMHB4O1xyXG4gICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWZlZmVmO1xyXG4gIH1cclxuICAuZHJvcGRvd25nYWxsXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjE0LCA5NCwgMjE0KTtcclxuICAgIGJvcmRlci1jb2xvcjpibGFjaztcclxuICAgIGJvcmRlci13aWR0aDoxcHg7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmxpbmtHYWxsZXJ5XHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgIGJvcmRlci1jb2xvcjpyZ2IoMjE0LCA5NCwgMjE0KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOjFweDtcclxuICAgIGNvbG9yOiByZ2IoMjE0LCA5NCwgMjE0KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZiFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidationcodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-validationcode',
                templateUrl: './validationcode.component.html',
                styleUrls: ['./validationcode.component.scss'],
                providers: [_Services_songrequest_service__WEBPACK_IMPORTED_MODULE_1__["SongrequestService"]]
            }]
    }], function () { return [{ type: _Services_songrequest_service__WEBPACK_IMPORTED_MODULE_1__["SongrequestService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/video-gallery/video-gallery.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/video-gallery/video-gallery.component.ts ***!
  \**********************************************************/
/*! exports provided: VideoGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGalleryComponent", function() { return VideoGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class VideoGalleryComponent {
    constructor() { }
    ngOnInit() { }
}
VideoGalleryComponent.ɵfac = function VideoGalleryComponent_Factory(t) { return new (t || VideoGalleryComponent)(); };
VideoGalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoGalleryComponent, selectors: [["app-video-gallery"]], decls: 1, vars: 0, consts: [[1, "video-player-wrapper"]], template: function VideoGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["@charset \"UTF-8\";\n[class*=\" vg-icon-\"][_ngcontent-%COMP%], [class^=vg-icon-][_ngcontent-%COMP%] {\n  font-family: videogular !important;\n  speak: none;\n  font-style: normal;\n  font-weight: 400;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  font-size: 24px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.vg-icon-closed_caption[_ngcontent-%COMP%]:before {\n  content: \"\uE006\";\n}\n.vg-icon-pause[_ngcontent-%COMP%]:before {\n  content: \"\uE018\";\n}\n.vg-icon-play_arrow[_ngcontent-%COMP%]:before {\n  content: \"\uE01B\";\n}\n.vg-icon-repeat[_ngcontent-%COMP%]:before {\n  content: \"\uE023\";\n}\n.vg-icon-replay[_ngcontent-%COMP%]:before {\n  content: \"\uE025\";\n}\n.vg-icon-skip_next[_ngcontent-%COMP%]:before {\n  content: \"\uE027\";\n}\n.vg-icon-skip_previous[_ngcontent-%COMP%]:before {\n  content: \"\uE028\";\n}\n.vg-icon-stop[_ngcontent-%COMP%]:before {\n  content: \"\uE02A\";\n}\n.vg-icon-volume_down[_ngcontent-%COMP%]:before {\n  content: \"\uE030\";\n}\n.vg-icon-volume_mute[_ngcontent-%COMP%]:before {\n  content: \"\uE031\";\n}\n.vg-icon-volume_off[_ngcontent-%COMP%]:before {\n  content: \"\uE032\";\n}\n.vg-icon-volume_up[_ngcontent-%COMP%]:before {\n  content: \"\uE033\";\n}\n.vg-icon-hd[_ngcontent-%COMP%]:before {\n  content: \"\uE035\";\n}\n.vg-icon-forward_10[_ngcontent-%COMP%]:before {\n  content: \"\uE038\";\n}\n.vg-icon-forward_30[_ngcontent-%COMP%]:before {\n  content: \"\uE039\";\n}\n.vg-icon-replay_10[_ngcontent-%COMP%]:before {\n  content: \"\uE03B\";\n}\n.vg-icon-replay_30[_ngcontent-%COMP%]:before {\n  content: \"\uE03C\";\n}\n.vg-icon-fullscreen[_ngcontent-%COMP%]:before {\n  content: \"\uE20C\";\n}\n.vg-icon-fullscreen_exit[_ngcontent-%COMP%]:before {\n  content: \"\uE20D\";\n}\nvg-player[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tZ2FsbGVyeS92aWRlby1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUVoQjtFQUNFLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWdhbGxlcnkvdmlkZW8tZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbltjbGFzcyo9XCIgdmctaWNvbi1cIl0sIFtjbGFzc149dmctaWNvbi1dIHtcbiAgZm9udC1mYW1pbHk6IHZpZGVvZ3VsYXIgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA1MHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4udmctaWNvbi1jbG9zZWRfY2FwdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6AhlwiO1xufVxuXG4udmctaWNvbi1wYXVzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6AmFwiO1xufVxuXG4udmctaWNvbi1wbGF5X2Fycm93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oCbXCI7XG59XG5cbi52Zy1pY29uLXJlcGVhdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Ao1wiO1xufVxuXG4udmctaWNvbi1yZXBsYXk6YmVmb3JlIHtcbiAgY29udGVudDogXCLugKVcIjtcbn1cblxuLnZnLWljb24tc2tpcF9uZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oCnXCI7XG59XG5cbi52Zy1pY29uLXNraXBfcHJldmlvdXM6YmVmb3JlIHtcbiAgY29udGVudDogXCLugKhcIjtcbn1cblxuLnZnLWljb24tc3RvcDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6AqlwiO1xufVxuXG4udmctaWNvbi12b2x1bWVfZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6AsFwiO1xufVxuXG4udmctaWNvbi12b2x1bWVfbXV0ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6AsVwiO1xufVxuXG4udmctaWNvbi12b2x1bWVfb2ZmOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oCyXCI7XG59XG5cbi52Zy1pY29uLXZvbHVtZV91cDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6As1wiO1xufVxuXG4udmctaWNvbi1oZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6AtVwiO1xufVxuXG4udmctaWNvbi1mb3J3YXJkXzEwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oC4XCI7XG59XG5cbi52Zy1pY29uLWZvcndhcmRfMzA6YmVmb3JlIHtcbiAgY29udGVudDogXCLugLlcIjtcbn1cblxuLnZnLWljb24tcmVwbGF5XzEwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oC7XCI7XG59XG5cbi52Zy1pY29uLXJlcGxheV8zMDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6AvFwiO1xufVxuXG4udmctaWNvbi1mdWxsc2NyZWVuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oiMXCI7XG59XG5cbi52Zy1pY29uLWZ1bGxzY3JlZW5fZXhpdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6IjVwiO1xufVxuXG52Zy1wbGF5ZXIgdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video-gallery',
                templateUrl: './video-gallery.component.html',
                styleUrls: ['./video-gallery.component.scss']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyCI_wQ64k8NxLwpIPv8v4mb-gEtcW0Q7GI',
        databaseURL: 'https://electronic-dj-default-rtdb.firebaseio.com',
        authDomain: 'electronic-dj.firebaseapp.com',
        projectId: 'electronic-dj',
        storageBucket: 'electronic-dj.appspot.com',
        messagingSenderId: '141343567562',
        appId: '1:141343567562:web:6a56232d7fc980648c8e33',
        measurementId: 'G-NS991W0T16'
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _app_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _app_songrequest_songrequest_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/songrequest/songrequest.component */ "./src/app/songrequest/songrequest.component.ts");
/* harmony import */ var _app_image_image_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/image/image-detail.component */ "./src/app/image/image-detail.component.ts");
/* harmony import */ var _app_gallerydetail_gallerydetail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/gallerydetail/gallerydetail.component */ "./src/app/gallerydetail/gallerydetail.component.ts");
/* harmony import */ var _app_validationcode_validationcode_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/validationcode/validationcode.component */ "./src/app/validationcode/validationcode.component.ts");
/* harmony import */ var _app_song_requests_song_requests_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/song-requests/song-requests.component */ "./src/app/song-requests/song-requests.component.ts");
/* harmony import */ var _app_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_upload_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _app_contactme_contactme_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/contactme/contactme.component */ "./src/app/contactme/contactme.component.ts");
/* harmony import */ var _app_ejuboxplayer_ejuboxplayer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app/ejuboxplayer/ejuboxplayer.component */ "./src/app/ejuboxplayer/ejuboxplayer.component.ts");
/* harmony import */ var _app_aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app/aboutme/aboutme.component */ "./src/app/aboutme/aboutme.component.ts");
/* harmony import */ var _app_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app/request-list/request-list.component */ "./src/app/request-list/request-list.component.ts");
/* harmony import */ var _app_Services_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app/Services/authenticationGuard.service */ "./src/app/Services/authenticationGuard.service.ts");
/* harmony import */ var _app_video_gallery_video_gallery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app/video-gallery/video-gallery.component */ "./src/app/video-gallery/video-gallery.component.ts");
/* harmony import */ var _app_update_list_sequence_update_list_sequence_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app/update-list-sequence/update-list-sequence.component */ "./src/app/update-list-sequence/update-list-sequence.component.ts");
/* harmony import */ var _app_upload_song_upload_song_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app/upload-song/upload-song.component */ "./src/app/upload-song/upload-song.component.ts");
















const appRoutes = [
    { path: 'gallery', component: _app_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__["GalleryComponent"] },
    { path: 'upload', component: _app_upload_upload_component__WEBPACK_IMPORTED_MODULE_7__["UploadComponent"], canActivate: [_app_Services_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationGuard"]] },
    { path: 'request-list', component: _app_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_11__["RequestListComponent"], canActivate: [_app_Services_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationGuard"]] },
    { path: 'contactme', component: _app_contactme_contactme_component__WEBPACK_IMPORTED_MODULE_8__["ContactmeComponent"] },
    { path: 'aboutme', component: _app_aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_10__["AboutmeComponent"] },
    { path: 'songrequest', component: _app_songrequest_songrequest_component__WEBPACK_IMPORTED_MODULE_1__["SongrequestComponent"] },
    { path: 'song-requests', component: _app_song_requests_song_requests_component__WEBPACK_IMPORTED_MODULE_5__["SongRequestsComponent"] },
    { path: 'video-gallery', component: _app_video_gallery_video_gallery_component__WEBPACK_IMPORTED_MODULE_13__["VideoGalleryComponent"], canActivate: [_app_Services_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationGuard"]] },
    { path: 'ejuboxplayer', component: _app_ejuboxplayer_ejuboxplayer_component__WEBPACK_IMPORTED_MODULE_9__["EjuboxplayerComponent"], canActivate: [_app_Services_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationGuard"]] },
    { path: 'upload-song', component: _app_upload_song_upload_song_component__WEBPACK_IMPORTED_MODULE_15__["UploadSongComponent"], canActivate: [_app_Services_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationGuard"]] },
    { path: 'validationcode', component: _app_validationcode_validationcode_component__WEBPACK_IMPORTED_MODULE_4__["ValidationcodeComponent"] },
    { path: 'update-list-sequence', component: _app_update_list_sequence_update_list_sequence_component__WEBPACK_IMPORTED_MODULE_14__["UpdateListSequenceComponent"], canActivate: [_app_Services_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationGuard"]] },
    { path: 'image/:id', component: _app_image_image_detail_component__WEBPACK_IMPORTED_MODULE_2__["ImageDetailComponent"] },
    { path: 'gallerydetail/:id', component: _app_gallerydetail_gallerydetail_component__WEBPACK_IMPORTED_MODULE_3__["GallerydetailComponent"] },
    { path: '', redirectTo: '/gallery', pathMatch: 'full' },
    { path: 'login', component: _app_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] }
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\armin\source\repos\ejukebox\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map