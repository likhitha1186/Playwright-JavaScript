"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readImageAsBase64 = exports.randomUuid = exports.md5 = exports.getWorstTestStepResult = exports.getTestResultTestCaseId = exports.getTestResultHistoryId = exports.getSuiteLabels = exports.getRelativePath = exports.getProjectRoot = exports.getPosixPath = exports.formatLinks = exports.formatLink = exports.escapeRegExp = exports.ensureSuiteLabels = exports.deepClone = exports.createDefaultWriter = exports.applyLinkTemplate = void 0;
var _nodeCrypto = require("node:crypto");
var _nodeFs = _interopRequireDefault(require("node:fs"));
var _promises = require("node:fs/promises");
var _nodePath = _interopRequireDefault(require("node:path"));
var _nodeProcess = _interopRequireDefault(require("node:process"));
var _model = require("../../model.js");
var _FileSystemWriter = require("./writer/FileSystemWriter.js");
var _MessageWriter = require("./writer/MessageWriter.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var randomUuid = () => {
  return (0, _nodeCrypto.randomUUID)();
};
exports.randomUuid = randomUuid;
var md5 = str => {
  return (0, _nodeCrypto.createHash)("md5").update(str).digest("hex");
};
exports.md5 = md5;
var getTestResultHistoryId = result => {
  var _result$testCaseId;
  if (result.historyId) {
    return result.historyId;
  }
  var tcId = (_result$testCaseId = result.testCaseId) !== null && _result$testCaseId !== void 0 ? _result$testCaseId : result.fullName ? md5(result.fullName) : null;
  if (!tcId) {
    return "";
  }
  var paramsString = result.parameters.filter(p => !(p !== null && p !== void 0 && p.excluded)).sort((a, b) => {
    var _a$name, _a$value;
    return ((_a$name = a.name) === null || _a$name === void 0 ? void 0 : _a$name.localeCompare(b === null || b === void 0 ? void 0 : b.name)) || ((_a$value = a.value) === null || _a$value === void 0 ? void 0 : _a$value.localeCompare(b === null || b === void 0 ? void 0 : b.value));
  }).map(p => {
    var _p$name, _p$value;
    return "".concat((_p$name = p.name) !== null && _p$name !== void 0 ? _p$name : "null", ":").concat((_p$value = p.value) !== null && _p$value !== void 0 ? _p$value : "null");
  }).join(",");
  var paramsHash = md5(paramsString);
  return "".concat(tcId, ":").concat(paramsHash);
};
exports.getTestResultHistoryId = getTestResultHistoryId;
var getTestResultTestCaseId = result => {
  return result.fullName ? md5(result.fullName) : undefined;
};
exports.getTestResultTestCaseId = getTestResultTestCaseId;
var statusToPriority = status => {
  if (!status) {
    return -1;
  }
  return _model.StatusByPriority.indexOf(status);
};
var getWorstTestStepResult = steps => {
  if (steps.length === 0) {
    return;
  }
  return [...steps].sort((a, b) => statusToPriority(a.status) - statusToPriority(b.status))[0];
};
exports.getWorstTestStepResult = getWorstTestStepResult;
var readImageAsBase64 = exports.readImageAsBase64 = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (filePath) {
    try {
      var file = yield (0, _promises.readFile)(filePath, {
        encoding: "base64"
      });
      return file ? "data:image/png;base64,".concat(file) : undefined;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("could not read file ".concat(filePath), e);
      return undefined;
    }
  });
  return function readImageAsBase64(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getProjectRoot = exports.getProjectRoot = (() => {
  var cachedProjectRoot = null;
  var resolveProjectRootByPath = () => {
    var cwd = _nodeProcess.default.cwd();
    var nextDir = cwd;
    var dir;
    do {
      dir = nextDir;
      try {
        _nodeFs.default.accessSync(_nodePath.default.join(dir, "package.json"), _nodeFs.default.constants.F_OK);

        // package.json exists; use the directory as the project root
        return dir;
      } catch (_unused) {}
      nextDir = _nodePath.default.dirname(dir);
    } while (nextDir.length < dir.length);

    // package.json doesn't exist in any parent; fall back to CWD
    return cwd;
  };
  return () => {
    if (!cachedProjectRoot) {
      cachedProjectRoot = resolveProjectRootByPath();
    }
    return cachedProjectRoot;
  };
})();
var getRelativePath = filepath => {
  if (_nodePath.default.isAbsolute(filepath)) {
    var projectRoot = getProjectRoot();
    filepath = _nodePath.default.relative(projectRoot, filepath);
  }
  return filepath;
};
exports.getRelativePath = getRelativePath;
var getPosixPath = filepath => {
  if (_nodeProcess.default.platform === "win32") {
    return filepath.replaceAll("\\", "/");
  }
  return filepath;
};
exports.getPosixPath = getPosixPath;
var deepClone = obj => JSON.parse(JSON.stringify(obj));
exports.deepClone = deepClone;
var getSuiteLabels = suites => {
  if (suites.length === 0) {
    return [];
  }
  var [parentSuite, suite, ...subSuites] = suites;
  var labels = [];
  if (parentSuite) {
    labels.push({
      name: _model.LabelName.PARENT_SUITE,
      value: parentSuite
    });
  }
  if (suite) {
    labels.push({
      name: _model.LabelName.SUITE,
      value: suite
    });
  }
  if (subSuites.length > 0) {
    labels.push({
      name: _model.LabelName.SUB_SUITE,
      value: subSuites.join(" > ")
    });
  }
  return labels;
};
exports.getSuiteLabels = getSuiteLabels;
var suiteLabelNames = [_model.LabelName.PARENT_SUITE, _model.LabelName.SUITE, _model.LabelName.SUB_SUITE];
var ensureSuiteLabels = (test, defaultSuites) => {
  var _test$labels;
  if (!((_test$labels = test.labels) !== null && _test$labels !== void 0 && _test$labels.find(l => suiteLabelNames.includes(l.name)))) {
    var _test$labels2;
    test.labels = [...((_test$labels2 = test.labels) !== null && _test$labels2 !== void 0 ? _test$labels2 : []), ...getSuiteLabels(defaultSuites)];
  }
};
exports.ensureSuiteLabels = ensureSuiteLabels;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
  reHasRegExpChar = RegExp(reRegExpChar.source);
var escapeRegExp = value => {
  return reHasRegExpChar.test(value) ? value.replace(reRegExpChar, "\\$&") : value;
};

// TODO: may also use URL.canParse instead (requires node.js v18.17, v19.9, or higher)
exports.escapeRegExp = escapeRegExp;
var isUrl = potentialUrl => {
  // Short-circuits the check for many short URL cases, bypassing the try-catch logic.
  if (potentialUrl.indexOf(":") === -1) {
    return false;
  }

  // There is ':' in the string: a potential scheme separator.
  // The string might be a proper URL already.
  try {
    new URL(potentialUrl);
    return true;
  } catch (e) {
    return false;
  }
};
var applyLinkTemplate = (template, value) => typeof template === "string" ? template.replace("%s", value) : template(value);
exports.applyLinkTemplate = applyLinkTemplate;
var formatLink = (templates, link) => {
  var {
    url: originalUrl,
    name,
    type
  } = link;
  if (isUrl(originalUrl)) {
    return link;
  } else {
    var _templates;
    var formattedLink = _objectSpread({}, link);
    var {
      urlTemplate,
      nameTemplate
    } = (_templates = templates[type !== null && type !== void 0 ? type : _model.LinkType.DEFAULT]) !== null && _templates !== void 0 ? _templates : {};
    if (urlTemplate !== undefined) {
      formattedLink.url = applyLinkTemplate(urlTemplate, originalUrl);
    }
    if (name === undefined && nameTemplate !== undefined) {
      formattedLink.name = applyLinkTemplate(nameTemplate, originalUrl);
    }
    return formattedLink;
  }
};
exports.formatLink = formatLink;
var formatLinks = (templates, links) => links.map(link => formatLink(templates, link));
exports.formatLinks = formatLinks;
var createDefaultWriter = config => {
  return _nodeProcess.default.env.ALLURE_TEST_MODE ? new _MessageWriter.MessageWriter(config.emitter) : new _FileSystemWriter.FileSystemWriter({
    resultsDir: config.resultsDir || "./allure-results"
  });
};
exports.createDefaultWriter = createDefaultWriter;
//# sourceMappingURL=utils.js.map