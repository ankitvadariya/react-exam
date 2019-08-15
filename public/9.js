(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./resources/js/modules/article/pages/edit/Page.js":
/*!*********************************************************!*\
  !*** ./resources/js/modules/article/pages/edit/Page.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service */ \"./resources/js/modules/article/service.js\");\n/* harmony import */ var ree_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ree-validate */ \"./node_modules/ree-validate/dist/ree-validate.esm.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Form */ \"./resources/js/modules/article/pages/edit/components/Form.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// import libs\n\n\n\n\n // import components\n\n\n\nvar Page =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Page, _Component);\n\n  function Page(props) {\n    var _this;\n\n    _classCallCheck(this, Page);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props));\n    _this.validator = new ree_validate__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n      title: 'required|min:3',\n      content: 'required|min:10',\n      description: 'required|min:10'\n    });\n\n    var article = _this.props.article.toJson();\n\n    _this.state = {\n      article: article,\n      errors: _this.validator.errors\n    };\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Page, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      this.loadArticle();\n    }\n  }, {\n    key: \"componentWillReceiveProps\",\n    value: function componentWillReceiveProps(nextProps) {\n      var article = nextProps.article.toJson();\n\n      if (!lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEqual(this.state.article, article)) {\n        this.setState({\n          article: article\n        });\n      }\n    }\n  }, {\n    key: \"loadArticle\",\n    value: function loadArticle() {\n      var _this$props = this.props,\n          match = _this$props.match,\n          article = _this$props.article,\n          dispatch = _this$props.dispatch;\n\n      if (!article.id) {\n        dispatch(Object(_service__WEBPACK_IMPORTED_MODULE_3__[\"articleEditRequest\"])(match.params.id));\n      }\n    }\n  }, {\n    key: \"handleChange\",\n    value: function handleChange(name, value) {\n      var _this2 = this;\n\n      var errors = this.validator.errors;\n      this.setState({\n        article: _objectSpread({}, this.state.article, _defineProperty({}, name, value))\n      });\n      errors.remove(name);\n      this.validator.validate(name, value).then(function () {\n        _this2.setState({\n          errors: errors\n        });\n      });\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      var _this3 = this;\n\n      e.preventDefault();\n      var article = this.state.article;\n      var errors = this.validator.errors;\n      this.validator.validateAll(article).then(function (success) {\n        if (success) {\n          _this3.submit(article);\n        } else {\n          _this3.setState({\n            errors: errors\n          });\n        }\n      });\n    }\n  }, {\n    key: \"submit\",\n    value: function submit(article) {\n      var _this4 = this;\n\n      this.props.dispatch(Object(_service__WEBPACK_IMPORTED_MODULE_3__[\"articleUpdateRequest\"])(article)).catch(function (_ref) {\n        var error = _ref.error,\n            statusCode = _ref.statusCode;\n        var errors = _this4.validator.errors;\n\n        if (statusCode === 422) {\n          lodash__WEBPACK_IMPORTED_MODULE_2___default.a.forOwn(error, function (message, field) {\n            errors.add(field, message);\n          });\n        }\n\n        _this4.setState({\n          errors: errors\n        });\n      });\n    }\n  }, {\n    key: \"renderForm\",\n    value: function renderForm() {\n      var article = this.props.article;\n\n      if (article.id) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _extends({}, this.state, {\n          onChange: this.handleChange,\n          onSubmit: this.handleSubmit\n        }));\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n        className: \"col-sm-9 ml-sm-auto col-md-10 pt-3\",\n        role: \"main\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Edit\"), this.renderForm());\n    }\n  }]);\n\n  return Page;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n_defineProperty(Page, \"displayName\", 'EditArticle');\n\n_defineProperty(Page, \"propTypes\", {\n  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,\n  article: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbW9kdWxlcy9hcnRpY2xlL3BhZ2VzL2VkaXQvUGFnZS5qcz9hNGFhIl0sIm5hbWVzIjpbIlBhZ2UiLCJwcm9wcyIsInZhbGlkYXRvciIsIlJlZVZhbGlkYXRlIiwidGl0bGUiLCJjb250ZW50IiwiZGVzY3JpcHRpb24iLCJhcnRpY2xlIiwidG9Kc29uIiwic3RhdGUiLCJlcnJvcnMiLCJoYW5kbGVTdWJtaXQiLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwibG9hZEFydGljbGUiLCJuZXh0UHJvcHMiLCJfIiwiaXNFcXVhbCIsInNldFN0YXRlIiwibWF0Y2giLCJkaXNwYXRjaCIsImlkIiwiYXJ0aWNsZUVkaXRSZXF1ZXN0IiwicGFyYW1zIiwibmFtZSIsInZhbHVlIiwicmVtb3ZlIiwidmFsaWRhdGUiLCJ0aGVuIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGVBbGwiLCJzdWNjZXNzIiwic3VibWl0IiwiYXJ0aWNsZVVwZGF0ZVJlcXVlc3QiLCJjYXRjaCIsImVycm9yIiwic3RhdHVzQ29kZSIsImZvck93biIsIm1lc3NhZ2UiLCJmaWVsZCIsImFkZCIsInJlbmRlckZvcm0iLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBOztJQUVNQSxJOzs7OztBQVFKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhFQUFNQSxLQUFOO0FBRUEsVUFBS0MsU0FBTCxHQUFpQixJQUFJQyxvREFBSixDQUFnQjtBQUMvQkMsV0FBSyxFQUFFLGdCQUR3QjtBQUUvQkMsYUFBTyxFQUFFLGlCQUZzQjtBQUcvQkMsaUJBQVcsRUFBRTtBQUhrQixLQUFoQixDQUFqQjs7QUFNQSxRQUFNQyxPQUFPLEdBQUcsTUFB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S0FBWCxFQUFrQkQsT0FBbEI7QUFDRCxXQUZEO0FBR0Q7O0FBRUQsY0FBSSxDQUFDckIsUUFBTCxDQUFjO0FBQUVSLGdCQUFNLEVBQU5BO0FBQUYsU0FBZDtBQUNELE9BWEg7QUFZRDs7O2lDQUVZO0FBQUEsVUFDSEgsT0FERyxHQUNTLEtBQUtOLEtBRGQsQ0FDSE0sT0FERzs7QUFHWCxVQUFJQSxPQUFPLENBQUNjLEVBQVosRUFBZ0I7QUFDZCxlQUFPLDJEQUFDLHdEQUFELGVBQVUsS0FBS1osS0FBZjtBQUNNLGtCQUFRLEVBQUUsS0FBS0ksWUFEckI7QUFFTSxrQkFBUSxFQUFFLEtBQUtGO0FBRnJCLFdBQVA7QUFHRDtBQUNGOzs7NkJBRVE7QUFDUCxhQUFPO0FBQU0saUJBQVMsRUFBQyxvQ0FBaEI7QUFBcUQsWUFBSSxFQUFDO0FBQTFELFNBQ0wsOEVBREssRUFFSCxLQUFLK0IsVUFBTCxFQUZHLENBQVA7QUFJRDs7OztFQTNHZ0JDLCtDOztnQkFBYjNDLEksaUJBQ2lCLGE7O2dCQURqQkEsSSxlQUVlO0FBQ2pCbUIsT0FBSyxFQUFFeUIsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFEUDtBQUVqQnZDLFNBQU8sRUFBRXFDLGlEQUFTLENBQUNDLE1BRkY7QUFHakJ6QixVQUFRLEVBQUV3QixpREFBUyxDQUFDRyxJQUFWLENBQWVEO0FBSFIsQzs7QUE0R045QyxtRUFBZiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9tb2R1bGVzL2FydGljbGUvcGFnZXMvZWRpdC9QYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGxpYnNcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IGFydGljbGVFZGl0UmVxdWVzdCwgYXJ0aWNsZVVwZGF0ZVJlcXVlc3QgfSBmcm9tICcuLi8uLi9zZXJ2aWNlJ1xuaW1wb3J0IFJlZVZhbGlkYXRlIGZyb20gJ3JlZS12YWxpZGF0ZSdcblxuLy8gaW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCBGb3JtIGZyb20gJy4vY29tcG9uZW50cy9Gb3JtJ1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0VkaXRBcnRpY2xlJ1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1hdGNoOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYXJ0aWNsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfVxuICBcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBSZWVWYWxpZGF0ZSh7XG4gICAgICB0aXRsZTogJ3JlcXVpcmVkfG1pbjozJyxcbiAgICAgIGNvbnRlbnQ6ICdyZXF1aXJlZHxtaW46MTAnLFxuICAgICAgZGVzY3JpcHRpb246ICdyZXF1aXJlZHxtaW46MTAnLFxuICAgIH0pXG4gICAgXG4gICAgY29uc3QgYXJ0aWNsZSA9IHRoaXMucHJvcHMuYXJ0aWNsZS50b0pzb24oKVxuICAgIFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhcnRpY2xlLFxuICAgICAgZXJyb3JzOiB0aGlzLnZhbGlkYXRvci5lcnJvcnNcbiAgICB9XG4gICAgXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cbiAgXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmxvYWRBcnRpY2xlKClcbiAgfVxuICBcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCBhcnRpY2xlID0gbmV4dFByb3BzLmFydGljbGUudG9Kc29uKClcbiAgICBcbiAgICBpZiAoIV8uaXNFcXVhbCh0aGlzLnN0YXRlLmFydGljbGUsIGFydGljbGUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYXJ0aWNsZSB9KVxuICAgIH1cbiAgICBcbiAgfVxuICBcbiAgbG9hZEFydGljbGUoKSB7XG4gICAgY29uc3QgeyBtYXRjaCwgYXJ0aWNsZSwgZGlzcGF0Y2ggfSA9IHRoaXMucHJvcHNcbiAgICBcbiAgICBpZiAoIWFydGljbGUuaWQpIHtcbiAgICAgIGRpc3BhdGNoKGFydGljbGVFZGl0UmVxdWVzdChtYXRjaC5wYXJhbXMuaWQpKVxuICAgIH1cbiAgfVxuICBcbiAgaGFuZGxlQ2hhbmdlKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgeyBlcnJvcnMgfSA9IHRoaXMudmFsaWRhdG9yXG4gICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFydGljbGU6IHsgLi4udGhpcy5zdGF0ZS5hcnRpY2xlLCBbbmFtZV06IHZhbHVlfSB9KVxuICAgIFxuICAgIGVycm9ycy5yZW1vdmUobmFtZSlcbiAgICBcbiAgICB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ycyB9KVxuICAgICAgfSlcbiAgfVxuICBcbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBhcnRpY2xlID0gdGhpcy5zdGF0ZS5hcnRpY2xlXG4gICAgY29uc3QgeyBlcnJvcnMgfSA9IHRoaXMudmFsaWRhdG9yXG4gICAgXG4gICAgdGhpcy52YWxpZGF0b3IudmFsaWRhdGVBbGwoYXJ0aWNsZSlcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgdGhpcy5zdWJtaXQoYXJ0aWNsZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbiAgXG4gIHN1Ym1pdChhcnRpY2xlKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhcnRpY2xlVXBkYXRlUmVxdWVzdChhcnRpY2xlKSlcbiAgICAgIC5jYXRjaCgoeyBlcnJvciwgc3RhdHVzQ29kZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZXJyb3JzIH0gPSB0aGlzLnZhbGlkYXRvclxuICAgICAgICBcbiAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09IDQyMikge1xuICAgICAgICAgIF8uZm9yT3duKGVycm9yLCAobWVzc2FnZSwgZmllbGQpID0+IHtcbiAgICAgICAgICAgIGVycm9ycy5hZGQoZmllbGQsIG1lc3NhZ2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzIH0pXG4gICAgICB9KVxuICB9XG4gIFxuICByZW5kZXJGb3JtKCkge1xuICAgIGNvbnN0IHsgYXJ0aWNsZSB9ID0gdGhpcy5wcm9wc1xuICAgIFxuICAgIGlmIChhcnRpY2xlLmlkKSB7XG4gICAgICByZXR1cm4gPEZvcm0gey4uLnRoaXMuc3RhdGV9XG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gLz5cbiAgICB9XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPG1haW4gY2xhc3NOYW1lPVwiY29sLXNtLTkgbWwtc20tYXV0byBjb2wtbWQtMTAgcHQtM1wiIHJvbGU9XCJtYWluXCI+XG4gICAgICA8aDE+RWRpdDwvaDE+XG4gICAgICB7IHRoaXMucmVuZGVyRm9ybSgpIH1cbiAgICA8L21haW4+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/modules/article/pages/edit/Page.js\n");

/***/ }),

/***/ "./resources/js/modules/article/pages/edit/components/Form.js":
/*!********************************************************************!*\
  !*** ./resources/js/modules/article/pages/edit/components/Form.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_wysiwyg_editor_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/wysiwyg-editor/index */ \"./resources/js/common/wysiwyg-editor/index.js\");\n\n\n\nvar displayName = 'ArticleFrom';\nvar propTypes = {\n  article: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,\n  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,\n  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n\nvar Form = function Form(_ref) {\n  var article = _ref.article,\n      errors = _ref.errors,\n      onChange = _ref.onChange,\n      _onSubmit = _ref.onSubmit;\n\n  function handleChange(name, value) {\n    if (value !== article[name]) {\n      onChange(name, value);\n    }\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: function onSubmit(e) {\n      return _onSubmit(e);\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group row\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"title\",\n    className: \"col-sm-2 col-form-label\"\n  }, \"Title\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-sm-10\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"title\",\n    name: \"title\",\n    className: \"form-control \".concat(errors.has('title') && 'is-invalid'),\n    placeholder: \"Title\",\n    value: article.title || '',\n    onChange: function onChange(e) {\n      return handleChange(e.target.name, e.target.value);\n    }\n  }), errors.has('title') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"invalid-feedback\"\n  }, errors.first('title')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group row\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"description\",\n    className: \"col-sm-2 col-form-label\"\n  }, \"Description\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-sm-10\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n    id: \"description\",\n    name: \"description\",\n    className: \"form-control \".concat(errors.has('description') && 'is-invalid'),\n    rows: \"3\",\n    placeholder: \"Description\",\n    value: article.description,\n    onChange: function onChange(e) {\n      return handleChange(e.target.name, e.target.value);\n    }\n  }), errors.has('description') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"invalid-feedback\"\n  }, errors.first('description')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group row\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"content\",\n    className: \"col-sm-2 col-form-label\"\n  }, \"Content\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-sm-10\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_wysiwyg_editor_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    id: \"content\",\n    value: article.content,\n    onChange: function onChange(e) {\n      return handleChange('content', e);\n    }\n  }), errors.has('content') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"invalid-feedback\"\n  }, errors.first('content')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group row\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-sm-10 ml-auto\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    disabled: errors.any(),\n    type: \"submit\",\n    className: \"btn btn-primary\"\n  }, \"Update\"))));\n};\n\nForm.displayName = displayName;\nForm.propTypes = propTypes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbW9kdWxlcy9hcnRpY2xlL3BhZ2VzL2VkaXQvY29tcG9uZW50cy9Gb3JtLmpzPzI2NWYiXSwibmFtZXMiOlsiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJhcnRpY2xlIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImVycm9ycyIsIm9uQ2hhbmdlIiwiZnVuYyIsIm9uU3VibWl0IiwiRm9ybSIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsImUiLCJoYXMiLCJ0aXRsZSIsInRhcmdldCIsImZpcnN0IiwiZGVzY3JpcHRpb24iLCJjb250ZW50IiwiYW55Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsYUFBcEI7QUFDQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLFNBQU8sRUFBRUMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFEVjtBQUVoQkMsUUFBTSxFQUFFSCxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUZUO0FBR2hCRSxVQUFRLEVBQUVKLGlEQUFTLENBQUNLLElBQVYsQ0FBZUgsVUFIVDtBQUloQkksVUFBUSxFQUFFTixpREFBUyxDQUFDSyxJQUFWLENBQWVIO0FBSlQsQ0FBbEI7O0FBT0EsSUFBTUssSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBNkM7QUFBQSxNQUExQ1IsT0FBMEMsUUFBMUNBLE9BQTBDO0FBQUEsTUFBakNJLE1BQWlDLFFBQWpDQSxNQUFpQztBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFmRSxTQUFlLFFBQWZBLFFBQWU7O0FBRXhELFdBQVNFLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCQyxLQUE1QixFQUFtQztBQUNqQyxRQUFJQSxLQUFLLEtBQUtYLE9BQU8sQ0FBQ1UsSUFBRCxDQUFyQixFQUE2QjtBQUMzQkwsY0FBUSxDQUFDSyxJ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QjtBQUVlUyxtRUFBZiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9tb2R1bGVzL2FydGljbGUvcGFnZXMvZWRpdC9jb21wb25lbnRzL0Zvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgTXlFZGl0b3IgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3d5c2l3eWctZWRpdG9yL2luZGV4J1xuXG5jb25zdCBkaXNwbGF5TmFtZSA9ICdBcnRpY2xlRnJvbSdcbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgYXJ0aWNsZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBlcnJvcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5jb25zdCBGb3JtID0gKHsgYXJ0aWNsZSwgZXJyb3JzLCBvbkNoYW5nZSwgb25TdWJtaXQgfSkgPT4ge1xuICBcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSBhcnRpY2xlW25hbWVdKSB7XG4gICAgICBvbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiA8Zm9ybSBvblN1Ym1pdD17ZSA9PiBvblN1Ym1pdChlKX0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy5oYXMoJ3RpdGxlJykgJiYgJ2lzLWludmFsaWQnfWB9XG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgIHZhbHVlPXthcnRpY2xlLnRpdGxlIHx8ICcnfVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAge2Vycm9ycy5oYXMoJ3RpdGxlJykgJiYgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy5maXJzdCgndGl0bGUnKX08L2Rpdj59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCIgY2xhc3NOYW1lPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWxcIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxuICAgICAgICA8dGV4dGFyZWEgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7ZXJyb3JzLmhhcygnZGVzY3JpcHRpb24nKSAmJiAnaXMtaW52YWxpZCd9YH1cbiAgICAgICAgICAgICAgICAgIHJvd3M9XCIzXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2FydGljbGUuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVDaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICB7ZXJyb3JzLmhhcygnZGVzY3JpcHRpb24nKSAmJiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj57ZXJyb3JzLmZpcnN0KCdkZXNjcmlwdGlvbicpfTwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGVudFwiIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsXCI+Q29udGVudDwvbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxuICAgICAgICA8TXlFZGl0b3IgaWQ9XCJjb250ZW50XCIgdmFsdWU9e2FydGljbGUuY29udGVudH0gb25DaGFuZ2U9e2UgPT4gaGFuZGxlQ2hhbmdlKCdjb250ZW50JywgZSl9IC8+XG4gICAgICAgIHtlcnJvcnMuaGFzKCdjb250ZW50JykgJiYgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy5maXJzdCgnY29udGVudCcpfTwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEwIG1sLWF1dG9cIj5cbiAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17ZXJyb3JzLmFueSgpfSB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+VXBkYXRlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9mb3JtPlxufVxuXG5Gb3JtLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWVcbkZvcm0ucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/modules/article/pages/edit/components/Form.js\n");

/***/ }),

/***/ "./resources/js/modules/article/pages/edit/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/modules/article/pages/edit/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Article */ \"./resources/js/modules/article/Article.js\");\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page */ \"./resources/js/modules/article/pages/edit/Page.js\");\n\n // import components\n\n\n\nvar mapStateToProps = function mapStateToProps(state, router) {\n  var params = router.match.params;\n  var article = state.articles.data.find(function (article) {\n    return article.id === Number(params.id);\n  });\n  return {\n    article: article ? new _Article__WEBPACK_IMPORTED_MODULE_1__[\"default\"](article) : new _Article__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({})\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps)(_Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbW9kdWxlcy9hcnRpY2xlL3BhZ2VzL2VkaXQvaW5kZXguanM/ZThkZiJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInJvdXRlciIsInBhcmFtcyIsIm1hdGNoIiwiYXJ0aWNsZSIsImFydGljbGVzIiwiZGF0YSIsImZpbmQiLCJpZCIsIk51bWJlciIsIkFydGljbGUiLCJjb25uZWN0IiwiUGFnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQUEsTUFDakNDLE1BRGlDLEdBQ3RCRCxNQUFNLENBQUNFLEtBRGUsQ0FDakNELE1BRGlDO0FBRXpDLE1BQU1FLE9BQU8sR0FBR0osS0FBSyxDQUFDSyxRQUFOLENBQWVDLElBQWYsQ0FBb0JDLElBQXBCLENBQXlCLFVBQUFILE9BQU87QUFBQSxXQUFJQSxPQUFPLENBQUNJLEVBQVIsS0FBZUMsTUFBTSxDQUFDUCxNQUFNLENBQUNNLEVBQVIsQ0FBekI7QUFBQSxHQUFoQyxDQUFoQjtBQUNBLFNBQU87QUFDTEosV0FBTyxFQUFFQSxPQUFPLEdBQUcsSUFBSU0sZ0RBQUosQ0FBWU4sT0FBWixDQUFILEdBQTBCLElBQUlNLGdEQUFKLENBQVksRUFBWjtBQURyQyxHQUFQO0FBR0QsQ0FORDs7QUFRZUMsMEhBQU8sQ0FBQ1osZUFBRCxDQUFQLENBQXlCYSw2Q0FBekIsQ0FBZiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9tb2R1bGVzL2FydGljbGUvcGFnZXMvZWRpdC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBBcnRpY2xlIGZyb20gJy4uLy4uL0FydGljbGUnXG5cbi8vIGltcG9ydCBjb21wb25lbnRzXG5pbXBvcnQgUGFnZSBmcm9tICcuL1BhZ2UnXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcm91dGVyKSA9PiB7XG4gIGNvbnN0IHsgcGFyYW1zIH0gPSByb3V0ZXIubWF0Y2hcbiAgY29uc3QgYXJ0aWNsZSA9IHN0YXRlLmFydGljbGVzLmRhdGEuZmluZChhcnRpY2xlID0+IGFydGljbGUuaWQgPT09IE51bWJlcihwYXJhbXMuaWQpKVxuICByZXR1cm4ge1xuICAgIGFydGljbGU6IGFydGljbGUgPyBuZXcgQXJ0aWNsZShhcnRpY2xlKSA6IG5ldyBBcnRpY2xlKHt9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQYWdlKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/modules/article/pages/edit/index.js\n");

/***/ })

}]);