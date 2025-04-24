"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseTestPlan = exports.includedInTestPlan = exports.hasSkipLabel = exports.addSkipLabelAsMeta = exports.addSkipLabel = void 0;
var _nodeFs = require("node:fs");
var _utils = require("../utils.js");
var parseTestPlan = () => {
  var testPlanPath = process.env.ALLURE_TESTPLAN_PATH;
  if (!testPlanPath) {
    return undefined;
  }
  try {
    var file = (0, _nodeFs.readFileSync)(testPlanPath, "utf8");
    var testPlan = JSON.parse(file);

    // Execute all tests if test plan is empty
    if ((testPlan.tests || []).length === 0) {
      return undefined;
    }
    return testPlan;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("could not parse test plan ".concat(testPlanPath), e);
    return undefined;
  }
};
exports.parseTestPlan = parseTestPlan;
var includedInTestPlan = (testPlan, subject) => {
  var {
    id,
    fullName,
    tags = []
  } = subject;
  var effectiveId = id !== null && id !== void 0 ? id : tags.map(tag => {
    var _tag$match;
    return tag === null || tag === void 0 || (_tag$match = tag.match(_utils.allureIdRegexp)) === null || _tag$match === void 0 || (_tag$match = _tag$match.groups) === null || _tag$match === void 0 ? void 0 : _tag$match.id;
  }).find(maybeId => maybeId !== undefined);
  return testPlan.tests.some(test => {
    var idMatched = effectiveId && test.id ? String(test.id) === effectiveId : false;
    var selectorMatched = fullName && test.selector === fullName;
    return idMatched || selectorMatched;
  });
};
exports.includedInTestPlan = includedInTestPlan;
var addSkipLabel = labels => {
  labels.push({
    name: "ALLURE_TESTPLAN_SKIP",
    value: "true"
  });
};
exports.addSkipLabel = addSkipLabel;
var addSkipLabelAsMeta = name => {
  return "".concat(name, " @allure.label.ALLURE_TESTPLAN_SKIP:true");
};
exports.addSkipLabelAsMeta = addSkipLabelAsMeta;
var hasSkipLabel = labels => labels.some(_ref => {
  var {
    name
  } = _ref;
  return name === "ALLURE_TESTPLAN_SKIP";
});
exports.hasSkipLabel = hasSkipLabel;
//# sourceMappingURL=testplan.js.map