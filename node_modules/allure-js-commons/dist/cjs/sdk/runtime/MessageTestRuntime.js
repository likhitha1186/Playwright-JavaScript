"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageTestRuntime = void 0;
var _model = require("../../model.js");
var _utils = require("../utils.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
class MessageTestRuntime {
  label(name, value) {
    var _this = this;
    return _asyncToGenerator(function* () {
      yield _this.sendMessage({
        type: "metadata",
        data: {
          labels: [{
            name,
            value
          }]
        }
      });
    })();
  }
  labels() {
    var _arguments = arguments,
      _this2 = this;
    return _asyncToGenerator(function* () {
      for (var _len = _arguments.length, labels = new Array(_len), _key = 0; _key < _len; _key++) {
        labels[_key] = _arguments[_key];
      }
      yield _this2.sendMessage({
        type: "metadata",
        data: {
          labels
        }
      });
    })();
  }
  link(url, type, name) {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      yield _this3.sendMessage({
        type: "metadata",
        data: {
          links: [{
            type,
            url,
            name
          }]
        }
      });
    })();
  }
  links() {
    var _arguments2 = arguments,
      _this4 = this;
    return _asyncToGenerator(function* () {
      for (var _len2 = _arguments2.length, links = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        links[_key2] = _arguments2[_key2];
      }
      yield _this4.sendMessage({
        type: "metadata",
        data: {
          links
        }
      });
    })();
  }
  parameter(name, value, options) {
    var _this5 = this;
    return _asyncToGenerator(function* () {
      yield _this5.sendMessage({
        type: "metadata",
        data: {
          parameters: [_objectSpread({
            name,
            value
          }, options)]
        }
      });
    })();
  }
  description(markdown) {
    var _this6 = this;
    return _asyncToGenerator(function* () {
      yield _this6.sendMessage({
        type: "metadata",
        data: {
          description: markdown
        }
      });
    })();
  }
  descriptionHtml(html) {
    var _this7 = this;
    return _asyncToGenerator(function* () {
      yield _this7.sendMessage({
        type: "metadata",
        data: {
          descriptionHtml: html
        }
      });
    })();
  }
  displayName(name) {
    var _this8 = this;
    return _asyncToGenerator(function* () {
      yield _this8.sendMessage({
        type: "metadata",
        data: {
          displayName: name
        }
      });
    })();
  }
  historyId(value) {
    var _this9 = this;
    return _asyncToGenerator(function* () {
      yield _this9.sendMessage({
        type: "metadata",
        data: {
          historyId: value
        }
      });
    })();
  }
  testCaseId(value) {
    var _this10 = this;
    return _asyncToGenerator(function* () {
      yield _this10.sendMessage({
        type: "metadata",
        data: {
          testCaseId: value
        }
      });
    })();
  }
  attachment(name, content, options) {
    var _this11 = this;
    return _asyncToGenerator(function* () {
      var bufferContent = typeof content === "string" ? Buffer.from(content, options.encoding) : content;
      yield _this11.sendMessage({
        type: "attachment_content",
        data: {
          name,
          content: bufferContent.toString("base64"),
          encoding: "base64",
          contentType: options.contentType,
          fileExtension: options.fileExtension,
          wrapInStep: true,
          timestamp: Date.now()
        }
      });
    })();
  }
  attachmentFromPath(name, path, options) {
    var _this12 = this;
    return _asyncToGenerator(function* () {
      yield _this12.sendMessage({
        type: "attachment_path",
        data: {
          name,
          path,
          contentType: options.contentType,
          fileExtension: options.fileExtension,
          wrapInStep: true,
          timestamp: Date.now()
        }
      });
    })();
  }
  logStep(name) {
    var _arguments3 = arguments,
      _this13 = this;
    return _asyncToGenerator(function* () {
      var status = _arguments3.length > 1 && _arguments3[1] !== undefined ? _arguments3[1] : _model.Status.PASSED;
      var error = _arguments3.length > 2 ? _arguments3[2] : undefined;
      var timestamp = Date.now();
      yield _this13.sendMessage({
        type: "step_start",
        data: {
          name,
          start: timestamp
        }
      });
      yield _this13.sendMessage({
        type: "step_stop",
        data: {
          status: status,
          stop: timestamp,
          statusDetails: error ? _objectSpread({}, (0, _utils.getMessageAndTraceFromError)(error)) : undefined
        }
      });
    })();
  }
  step(name, body) {
    var _this14 = this;
    return _asyncToGenerator(function* () {
      yield _this14.sendMessage({
        type: "step_start",
        data: {
          name,
          start: Date.now()
        }
      });
      try {
        var result = yield body();
        yield _this14.sendMessage({
          type: "step_stop",
          data: {
            status: _model.Status.PASSED,
            stop: Date.now()
          }
        });
        return result;
      } catch (err) {
        var details = (0, _utils.getMessageAndTraceFromError)(err);
        yield _this14.sendMessage({
          type: "step_stop",
          data: {
            status: (0, _utils.getStatusFromError)(err),
            stop: Date.now(),
            statusDetails: _objectSpread({}, details)
          }
        });
        throw err;
      }
    })();
  }
  stepDisplayName(name) {
    var _this15 = this;
    return _asyncToGenerator(function* () {
      yield _this15.sendMessage({
        type: "step_metadata",
        data: {
          name
        }
      });
    })();
  }
  stepParameter(name, value, mode) {
    var _this16 = this;
    return _asyncToGenerator(function* () {
      yield _this16.sendMessage({
        type: "step_metadata",
        data: {
          parameters: [{
            name,
            value,
            mode
          }]
        }
      });
    })();
  }
}
exports.MessageTestRuntime = MessageTestRuntime;
//# sourceMappingURL=MessageTestRuntime.js.map