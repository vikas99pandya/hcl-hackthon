function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-products/product-detail/product-detail.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-products/product-detail/product-detail.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserProductsProductDetailProductDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"(service.currentProduct$ | async) as product;else noDetails\">\r\n  <h1>{{product.name}}</h1>\r\n  <table>\r\n    <tr>\r\n      <td>account: </td>\r\n      <td>{{product.account}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>balance: </td>\r\n      <td>{{product.balance}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Interest Rate: </td>\r\n      <td>{{product.interest_rate}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Earnings: </td>\r\n      <td>{{product.earnings}}</td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n<ng-template #noDetails>No Details!</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-products/product-group/product-group.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-products/product-group/product-group.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserProductsProductGroupProductGroupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>product-group works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-products/product-summary/product-summary.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-products/product-summary/product-summary.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserProductsProductSummaryProductSummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Products Overview</h1>\r\n\r\n<div *ngIf=\"(service.productGroups$ | async) as groups;else noProducts\">\r\n\r\n  <h2>Savings</h2>\r\n  <div class=\"products-group\" *ngIf=\"(service.savingsProducts$ | async) as savings;else noProducts\">\r\n    <div class=\"product-container\" *ngFor=\"let product of savings\" [routerLink]=\"['/detail', product.id]\" >\r\n      <h3>{{product.product_name}} - {{product.balance | currency:'EUR'}}</h3>\r\n    </div>\r\n  </div>\r\n\r\n  <h2>Payments</h2>\r\n  <div class=\"products-group\" *ngIf=\"(service.paymentsProducts$ | async) as payments;else noProducts\">\r\n    <div class=\"product-container\" *ngFor=\"let product of payments\" [routerLink]=\"['/detail', product.id]\">\r\n      <h3>{{product.product_name}} - {{product.balance | currency:'EUR'}}</h3>\r\n    </div>\r\n  </div>\r\n\r\n  <h2>Mortgages</h2>\r\n  <div class=\"products-group\" *ngIf=\"(service.mortgagesProducts$ | async) as mortgages;else noProducts\">\r\n    <div class=\"product-container\" *ngFor=\"let product of mortgages\" [routerLink]=\"['/detail', product.id]\">\r\n      <h3>{{product.product_name}} - {{product.balance | currency:'EUR'}}</h3>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #noProducts>\r\n  <h3>No Products found!</h3>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/api-client/api-client.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/api-client/api-client.module.ts ***!
    \*************************************************/

  /*! exports provided: ApiClientModule */

  /***/
  function srcAppApiClientApiClientModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiClientModule", function () {
      return ApiClientModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ApiClientModule = function ApiClientModule() {
      _classCallCheck(this, ApiClientModule);
    };

    ApiClientModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
    })], ApiClientModule);
    /***/
  },

  /***/
  "./src/app/api-client/product.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/api-client/product.service.ts ***!
    \***********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppApiClientProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var savings = [{
      product_name: 'Kids Savings',
      balance: '2000.00',
      id: '1'
    }, {
      product_name: 'Orange',
      balance: '500.00',
      id: '2'
    }];
    var payments = [{
      product_name: 'Quarterly payments',
      balance: '800.00',
      id: '3'
    }, {
      product_name: 'Payments Accounts',
      balance: '600.00',
      id: '4'
    }];
    var mortgage = [{
      product_name: 'Quarterly payments',
      balance: '800.00',
      id: '5'
    }];
    var groups = [{
      group_name: 'Savings',
      id: '1'
    }, {
      group_name: 'Payments',
      id: '2'
    }, {
      group_name: 'Mortgage',
      id: '3'
    }];
    var currentProduct = {
      name: 'Quarterly Payments',
      balance: '800.00',
      interest_rate: '2%',
      account: 'INGB NL42 1212 41234',
      earnings: '4.00'
    };

    var ProductService =
    /*#__PURE__*/
    function () {
      function ProductService(httpClient) {
        _classCallCheck(this, ProductService);

        this.httpClient = httpClient;
        this.groupsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](groups);
        this.productGroups$ = this.groupsSubject.asObservable();
        this.savingsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](savings);
        this.savingsProducts$ = this.savingsSubject.asObservable();
        this.paymentsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](payments);
        this.paymentsProducts$ = this.paymentsSubject.asObservable();
        this.mortgagesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](mortgage);
        this.mortgagesProducts$ = this.mortgagesSubject.asObservable();
        this.productDetailSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](currentProduct);
        this.currentProduct$ = this.productDetailSubject.asObservable();
      }

      _createClass(ProductService, [{
        key: "getProductGroups",
        value: function getProductGroups() {
          this.productGroups$ = this.httpClient.get("/productGroups");
        }
      }, {
        key: "getProductsByGroupId",
        value: function getProductsByGroupId(groupId) {
          return this.httpClient.get("products/".concat(groupId));
        }
      }, {
        key: "getProductDetails",
        value: function getProductDetails(id) {
          this.currentProduct$ = this.httpClient.get("productDetails/".concat(id));
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_products_product_summary_product_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-products/product-summary/product-summary.component */
    "./src/app/user-products/product-summary/product-summary.component.ts");
    /* harmony import */


    var _user_products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-products/product-detail/product-detail.component */
    "./src/app/user-products/product-detail/product-detail.component.ts");

    var routes = [{
      path: 'account-overview',
      component: _user_products_product_summary_product_summary_component__WEBPACK_IMPORTED_MODULE_3__["ProductSummaryComponent"]
    }, {
      path: 'detail/:id',
      component: _user_products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailComponent"]
    }, {
      path: '',
      redirectTo: '/account-overview',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'client';
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _user_products_user_products_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user-products/user-products.module */
    "./src/app/user-products/user-products.module.ts");
    /* harmony import */


    var _api_client_api_client_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./api-client/api-client.module */
    "./src/app/api-client/api-client.module.ts");
    /* harmony import */


    var _stats_stats_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./stats/stats.module */
    "./src/app/stats/stats.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _user_products_user_products_module__WEBPACK_IMPORTED_MODULE_7__["UserProductsModule"], _stats_stats_module__WEBPACK_IMPORTED_MODULE_9__["StatsModule"], _api_client_api_client_module__WEBPACK_IMPORTED_MODULE_8__["ApiClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/stats/stats.module.ts":
  /*!***************************************!*\
    !*** ./src/app/stats/stats.module.ts ***!
    \***************************************/

  /*! exports provided: StatsModule */

  /***/
  function srcAppStatsStatsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatsModule", function () {
      return StatsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var StatsModule = function StatsModule() {
      _classCallCheck(this, StatsModule);
    };

    StatsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], StatsModule);
    /***/
  },

  /***/
  "./src/app/user-products/product-detail/product-detail.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/user-products/product-detail/product-detail.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserProductsProductDetailProductDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user-products/product-detail/product-detail.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/user-products/product-detail/product-detail.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ProductDetailComponent */

  /***/
  function srcAppUserProductsProductDetailProductDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function () {
      return ProductDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_api_client_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api-client/product.service */
    "./src/app/api-client/product.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ProductDetailComponent =
    /*#__PURE__*/
    function () {
      function ProductDetailComponent(route, service) {
        _classCallCheck(this, ProductDetailComponent);

        this.route = route;
        this.service = service;
      }

      _createClass(ProductDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) {
            return _this.service.getProductDetails(params.get('id'));
          }));
        }
      }]);

      return ProductDetailComponent;
    }();

    ProductDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_client_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }];
    };

    ProductDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'product-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-products/product-detail/product-detail.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-detail.component.scss */
      "./src/app/user-products/product-detail/product-detail.component.scss")).default]
    })], ProductDetailComponent);
    /***/
  },

  /***/
  "./src/app/user-products/product-group/product-group.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/user-products/product-group/product-group.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserProductsProductGroupProductGroupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZHVjdHMvcHJvZHVjdC1ncm91cC9wcm9kdWN0LWdyb3VwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user-products/product-group/product-group.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/user-products/product-group/product-group.component.ts ***!
    \************************************************************************/

  /*! exports provided: ProductGroupComponent */

  /***/
  function srcAppUserProductsProductGroupProductGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductGroupComponent", function () {
      return ProductGroupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductGroupComponent =
    /*#__PURE__*/
    function () {
      function ProductGroupComponent() {
        _classCallCheck(this, ProductGroupComponent);
      }

      _createClass(ProductGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductGroupComponent;
    }();

    ProductGroupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'product-group',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-group.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-products/product-group/product-group.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-group.component.scss */
      "./src/app/user-products/product-group/product-group.component.scss")).default]
    })], ProductGroupComponent);
    /***/
  },

  /***/
  "./src/app/user-products/product-summary/product-summary.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/user-products/product-summary/product-summary.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserProductsProductSummaryProductSummaryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZHVjdHMvcHJvZHVjdC1zdW1tYXJ5L3Byb2R1Y3Qtc3VtbWFyeS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user-products/product-summary/product-summary.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/user-products/product-summary/product-summary.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ProductSummaryComponent */

  /***/
  function srcAppUserProductsProductSummaryProductSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductSummaryComponent", function () {
      return ProductSummaryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_api_client_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api-client/product.service */
    "./src/app/api-client/product.service.ts");

    var ProductSummaryComponent =
    /*#__PURE__*/
    function () {
      function ProductSummaryComponent(service) {
        _classCallCheck(this, ProductSummaryComponent);

        this.service = service;
      }

      _createClass(ProductSummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.service.getProductGroups();
        }
      }]);

      return ProductSummaryComponent;
    }();

    ProductSummaryComponent.ctorParameters = function () {
      return [{
        type: src_app_api_client_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    ProductSummaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'product-summary',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-products/product-summary/product-summary.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-summary.component.scss */
      "./src/app/user-products/product-summary/product-summary.component.scss")).default]
    })], ProductSummaryComponent);
    /***/
  },

  /***/
  "./src/app/user-products/user-products.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/user-products/user-products.module.ts ***!
    \*******************************************************/

  /*! exports provided: UserProductsModule */

  /***/
  function srcAppUserProductsUserProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProductsModule", function () {
      return UserProductsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _product_group_product_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-group/product-group.component */
    "./src/app/user-products/product-group/product-group.component.ts");
    /* harmony import */


    var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./product-detail/product-detail.component */
    "./src/app/user-products/product-detail/product-detail.component.ts");
    /* harmony import */


    var _product_summary_product_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-summary/product-summary.component */
    "./src/app/user-products/product-summary/product-summary.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/fesm2015/table.js");

    var UserProductsModule = function UserProductsModule() {
      _classCallCheck(this, UserProductsModule);
    };

    UserProductsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_product_group_product_group_component__WEBPACK_IMPORTED_MODULE_3__["ProductGroupComponent"], _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailComponent"], _product_summary_product_summary_component__WEBPACK_IMPORTED_MODULE_5__["ProductSummaryComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"]]
    })], UserProductsModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Daniel\hcl-hackathon\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map