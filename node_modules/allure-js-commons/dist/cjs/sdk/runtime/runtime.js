"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGlobalTestRuntime = exports.getGlobalTestRuntimeWithAutoconfig = exports.getGlobalTestRuntime = void 0;
var _NoopTestRuntime = require("./NoopTestRuntime.js");
var ALLURE_TEST_RUNTIME_KEY = "allureTestRuntime";
var setGlobalTestRuntime = runtime => {
  globalThis[ALLURE_TEST_RUNTIME_KEY] = () => runtime;
};
exports.setGlobalTestRuntime = setGlobalTestRuntime;
var getGlobalTestRuntimeFunction = () => {
  return globalThis === null || globalThis === void 0 ? void 0 : globalThis[ALLURE_TEST_RUNTIME_KEY];
};
var getGlobalTestRuntime = () => {
  var testRuntime = getGlobalTestRuntimeFunction();
  if (testRuntime) {
    var _testRuntime;
    return (_testRuntime = testRuntime()) !== null && _testRuntime !== void 0 ? _testRuntime : _NoopTestRuntime.noopRuntime;
  }
  return _NoopTestRuntime.noopRuntime;
};
exports.getGlobalTestRuntime = getGlobalTestRuntime;
var getGlobalTestRuntimeWithAutoconfig = () => {
  var testRuntime = getGlobalTestRuntimeFunction();
  if (testRuntime) {
    var _testRuntime2;
    return (_testRuntime2 = testRuntime()) !== null && _testRuntime2 !== void 0 ? _testRuntime2 : _NoopTestRuntime.noopRuntime;
  }
  if ("_playwrightInstance" in globalThis) {
    try {
      // protection from bundlers tree-shaking visiting (webpack, rollup)
      // @ts-ignore
      // eslint-disable-next-line no-eval
      return (0, eval)("(() => import('allure-playwright/autoconfig'))()").then(() => {
        var _getGlobalTestRuntime, _getGlobalTestRuntime2;
        return (_getGlobalTestRuntime = (_getGlobalTestRuntime2 = getGlobalTestRuntimeFunction()) === null || _getGlobalTestRuntime2 === void 0 ? void 0 : _getGlobalTestRuntime2()) !== null && _getGlobalTestRuntime !== void 0 ? _getGlobalTestRuntime : _NoopTestRuntime.noopRuntime;
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log("can't execute allure-playwright/autoconfig", err);
      return _NoopTestRuntime.noopRuntime;
    }
  }
  return _NoopTestRuntime.noopRuntime;
};
exports.getGlobalTestRuntimeWithAutoconfig = getGlobalTestRuntimeWithAutoconfig;
//# sourceMappingURL=runtime.js.map