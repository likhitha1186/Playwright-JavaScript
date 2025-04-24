import { noopRuntime } from "./NoopTestRuntime.js";
var ALLURE_TEST_RUNTIME_KEY = "allureTestRuntime";
export var setGlobalTestRuntime = runtime => {
  globalThis[ALLURE_TEST_RUNTIME_KEY] = () => runtime;
};
var getGlobalTestRuntimeFunction = () => {
  return globalThis === null || globalThis === void 0 ? void 0 : globalThis[ALLURE_TEST_RUNTIME_KEY];
};
export var getGlobalTestRuntime = () => {
  var testRuntime = getGlobalTestRuntimeFunction();
  if (testRuntime) {
    var _testRuntime;
    return (_testRuntime = testRuntime()) !== null && _testRuntime !== void 0 ? _testRuntime : noopRuntime;
  }
  return noopRuntime;
};
export var getGlobalTestRuntimeWithAutoconfig = () => {
  var testRuntime = getGlobalTestRuntimeFunction();
  if (testRuntime) {
    var _testRuntime2;
    return (_testRuntime2 = testRuntime()) !== null && _testRuntime2 !== void 0 ? _testRuntime2 : noopRuntime;
  }
  if ("_playwrightInstance" in globalThis) {
    try {
      // protection from bundlers tree-shaking visiting (webpack, rollup)
      // @ts-ignore
      // eslint-disable-next-line no-eval
      return (0, eval)("(() => import('allure-playwright/autoconfig'))()").then(() => {
        var _getGlobalTestRuntime, _getGlobalTestRuntime2;
        return (_getGlobalTestRuntime = (_getGlobalTestRuntime2 = getGlobalTestRuntimeFunction()) === null || _getGlobalTestRuntime2 === void 0 ? void 0 : _getGlobalTestRuntime2()) !== null && _getGlobalTestRuntime !== void 0 ? _getGlobalTestRuntime : noopRuntime;
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log("can't execute allure-playwright/autoconfig", err);
      return noopRuntime;
    }
  }
  return noopRuntime;
};
//# sourceMappingURL=runtime.js.map