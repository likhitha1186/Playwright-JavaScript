"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statusToAllureStats = exports.isDescendantOfStepWithTitle = exports.isBeforeHookStep = exports.isAfterHookStep = exports.BEFORE_HOOKS_ROOT_STEP_TITLE = exports.AFTER_HOOKS_ROOT_STEP_TITLE = void 0;
var _allureJsCommons = require("allure-js-commons");
var AFTER_HOOKS_ROOT_STEP_TITLE = exports.AFTER_HOOKS_ROOT_STEP_TITLE = "After Hooks";
var BEFORE_HOOKS_ROOT_STEP_TITLE = exports.BEFORE_HOOKS_ROOT_STEP_TITLE = "Before Hooks";
var statusToAllureStats = exports.statusToAllureStats = function statusToAllureStats(status, expectedStatus) {
  if (status === "skipped") {
    return _allureJsCommons.Status.SKIPPED;
  }
  if (status === "timedOut") {
    return _allureJsCommons.Status.BROKEN;
  }
  if (status === expectedStatus) {
    return _allureJsCommons.Status.PASSED;
  }
  return _allureJsCommons.Status.FAILED;
};
var isDescendantOfStepWithTitle = exports.isDescendantOfStepWithTitle = function isDescendantOfStepWithTitle(step, title) {
  var parent = step.parent;
  while (parent) {
    if (parent.title === title) {
      return true;
    }
    parent = parent.parent;
  }
  return false;
};
var isAfterHookStep = exports.isAfterHookStep = function isAfterHookStep(step) {
  return isDescendantOfStepWithTitle(step, AFTER_HOOKS_ROOT_STEP_TITLE);
};
var isBeforeHookStep = exports.isBeforeHookStep = function isBeforeHookStep(step) {
  return isDescendantOfStepWithTitle(step, BEFORE_HOOKS_ROOT_STEP_TITLE);
};
//# sourceMappingURL=utils.js.map