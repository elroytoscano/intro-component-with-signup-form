"use strict";function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var r,o=_getPrototypeOf(t);if(e){var n=_getPrototypeOf(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var e="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(r,t)},_wrapNativeSuper(t)}function _construct(t,e,r){return _construct=_isNativeReflectConstruct()?Reflect.construct:function(t,e,r){var o=[null];o.push.apply(o,e);var n=new(Function.bind.apply(t,o));return r&&_setPrototypeOf(n,r.prototype),n},_construct.apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function _isNativeFunction(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var CustomError=function(t){_inherits(r,_wrapNativeSuper(Error));var e=_createSuper(r);function r(t,o){var n;return _classCallCheck(this,r),(n=e.call(this,t)).message=t,n.input=o,n}return _createClass(r)}(),_default=CustomError;exports.default=_default;
//# sourceMappingURL=CustomError.js.map