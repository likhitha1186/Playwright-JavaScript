import { Status } from "allure-js-commons";
export var AFTER_HOOKS_ROOT_STEP_TITLE = "After Hooks";
export var BEFORE_HOOKS_ROOT_STEP_TITLE = "Before Hooks";
export var statusToAllureStats = function statusToAllureStats(status, expectedStatus) {
  if (status === "skipped") {
    return Status.SKIPPED;
  }
  if (status === "timedOut") {
    return Status.BROKEN;
  }
  if (status === expectedStatus) {
    return Status.PASSED;
  }
  return Status.FAILED;
};
export var isDescendantOfStepWithTitle = function isDescendantOfStepWithTitle(step, title) {
  var parent = step.parent;
  while (parent) {
    if (parent.title === title) {
      return true;
    }
    parent = parent.parent;
  }
  return false;
};
export var isAfterHookStep = function isAfterHookStep(step) {
  return isDescendantOfStepWithTitle(step, AFTER_HOOKS_ROOT_STEP_TITLE);
};
export var isBeforeHookStep = function isBeforeHookStep(step) {
  return isDescendantOfStepWithTitle(step, BEFORE_HOOKS_ROOT_STEP_TITLE);
};
//# sourceMappingURL=utils.js.map