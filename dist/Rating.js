"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Star = _interopRequireDefault(require("./Star"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px"
};
const starContainerStyle = {
  display: "flex"
};
const Rating = _ref => {
  let {
    maxRating = 5,
    color = "#fcc419",
    size = 48,
    className = "",
    messages = [],
    defaultRating = 0
  } = _ref;
  const [rating, setRating] = (0, _react.useState)(defaultRating);
  const [tempRating, setTempRating] = (0, _react.useState)(0);
  Rating.propTypes = {
    maxRating: _propTypes.default.number,
    defaultRating: _propTypes.default.number,
    color: _propTypes.default.string,
    size: _propTypes.default.number,
    messages: _propTypes.default.array,
    className: _propTypes.default.string
  };
  function handleRating(rating) {
    setRating(rating);
  }
  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: "".concat(size / 1.5, "px")
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: containerStyle,
    className: className
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: starContainerStyle
  }, Array.from({
    length: maxRating
  }, (_, i) => /*#__PURE__*/_react.default.createElement(_Star.default, {
    key: i,
    full: tempRating ? tempRating >= i + 1 : rating >= i + 1,
    onRate: () => handleRating(i + 1),
    onHoverIn: () => setTempRating(i + 1),
    onHoverOut: () => setTempRating(0),
    color: color,
    size: size
  }))), /*#__PURE__*/_react.default.createElement("p", {
    style: textStyle
  }, messages.length === maxRating ? messages[tempRating ? tempRating - 1 : rating - 1] : tempRating || rating || ""));
};
var _default = exports.default = Rating;