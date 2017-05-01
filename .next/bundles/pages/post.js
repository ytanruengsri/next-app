
          window.__NEXT_REGISTER_PAGE('/post', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _PrimaryLayout = __webpack_require__(565);

var _PrimaryLayout2 = _interopRequireDefault(_PrimaryLayout);

var _isomorphicUnfetch = __webpack_require__(562);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = function Post(props) {
    return _react2.default.createElement(_PrimaryLayout2.default, null, _react2.default.createElement('h1', null, props.movie.Title), _react2.default.createElement('p', null, props.movie.Plot), _react2.default.createElement('img', { src: props.movie.Poster }));
};

Post.getInitialProps = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(context) {
        var id, res, movie;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        id = context.query.id;
                        _context.next = 3;
                        return (0, _isomorphicUnfetch2.default)('http://www.omdbapi.com/?i=' + id);

                    case 3:
                        res = _context.sent;
                        _context.next = 6;
                        return res.json();

                    case 6:
                        movie = _context.sent;

                        console.log('Fetched movie: ' + movie.Title);

                        return _context.abrupt('return', { movie: movie });

                    case 9:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();

exports.default = Post;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/ytanruengsri/dev/workspace/vegas/next-pdp/pages/post.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/ytanruengsri/dev/workspace/vegas/next-pdp/pages/post.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/post")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(563);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/ytanruengsri/dev/workspace/vegas/next-pdp/components/Header.js";


var linkStyle = {
    marginRight: 15
};

var Header = function Header() {
    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement(_link2.default, { href: "/", __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement("a", { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, "Home")), _react2.default.createElement(_link2.default, { href: "/about", __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement("a", { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, "About")));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/ytanruengsri/dev/workspace/vegas/next-pdp/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/ytanruengsri/dev/workspace/vegas/next-pdp/components/Header.js"); } } })();

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(564);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/ytanruengsri/dev/workspace/vegas/next-pdp/components/PrimaryLayout.js';


var layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

var Layout = function Layout(props) {
    return _react2.default.createElement('div', { style: layoutStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }), props.children);
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/ytanruengsri/dev/workspace/vegas/next-pdp/components/PrimaryLayout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/ytanruengsri/dev/workspace/vegas/next-pdp/components/PrimaryLayout.js"); } } })();

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(559);


/***/ })

},[566]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0LmpzPzRjZmFmMTciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGNmYWYxNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaW1hcnlMYXlvdXQuanM/NzVkNmZmOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFDQTs7Ozs7O0FBRVAsSUFBTSxPQUFPLGNBQUMsT0FBRDtXQUNULGdCQUFDLHVDQUNHLDBDQUFLLFlBQU0sTUFDWCwyQ0FBSSxZQUFNLE1BQ1YsOENBQUssS0FBSyxNQUFNLE1BQU07QUFKOUI7O0FBUUEsS0FBSyw4QkFBTDswRUFBdUIsaUJBQWdCLFNBQWhCO3FCQUFBO3NFQUFBO3NCQUFBO2lEQUFBO3lCQUNaO0FBRFksNkJBQ04sUUFBUSxNQUFkO3dDQURZOytCQUVELGdFQUFtQzs7eUJBQS9DO0FBRmE7d0NBQUE7K0JBR0MsSUFBSTs7eUJBQWxCO0FBSGEseUNBS25COztnQ0FBUSx3QkFBc0IsTUFBTTs7eURBRTdCLEVBQUMsT0FBRDs7eUJBUFk7eUJBQUE7d0NBQUE7O0FBQUE7b0JBQUE7QUFBdkI7O3lCQUFBO2dDQUFBO0FBQUE7QUFVQTs7a0JBQWUsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQlI7Ozs7Ozs7OztBQUVQLElBQU07aUJBQ1c7QUFBYjs7QUFHSixJQUFNLFNBQVM7MkJBQ1g7O3NCQUFBO3dCQUNJO0FBREo7QUFBQSx1QkFDSyxnQ0FBSyxNQUFLO3NCQUFYO3dCQUNJO0FBREo7dUJBQ0kscUJBQUcsT0FBTztzQkFBVjt3QkFBQTtBQUFBO09BRUosMEJBQUMsZ0NBQUssTUFBSztzQkFBWDt3QkFDSTtBQURKO3VCQUNJLHFCQUFHLE9BQU87c0JBQVY7d0JBQUE7QUFBQTtPQUFBO0FBS1o7O2tCQUFlLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJSOzs7Ozs7Ozs7QUFFUCxJQUFNO1lBRUY7YUFDQTtZQUFRO0FBRlI7O0FBS0osSUFBTSxTQUFTLGdCQUFDLE9BQUQ7MkJBQ1gsdUJBQUssT0FBTztzQkFBWjt3QkFDSTtBQURKO0tBQUEsa0JBQ0s7O3NCQUFEO3dCQUNDO0FBREQ7QUFBQSxjQUNPO0FBSWY7O2tCQUFlLE8iLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL1ByaW1hcnlMYXlvdXQuanMnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT57cHJvcHMubW92aWUuVGl0bGV9PC9oMT5cbiAgICAgICAgPHA+e3Byb3BzLm1vdmllLlBsb3R9PC9wPlxuICAgICAgICA8aW1nIHNyYz17cHJvcHMubW92aWUuUG9zdGVyfS8+XG4gICAgPC9MYXlvdXQ+XG4pO1xuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgY29uc3Qge2lkfSA9IGNvbnRleHQucXVlcnlcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/aT0ke2lkfWApXG4gICAgY29uc3QgbW92aWUgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICBjb25zb2xlLmxvZyhgRmV0Y2hlZCBtb3ZpZTogJHttb3ZpZS5UaXRsZX1gKVxuXG4gICAgcmV0dXJuIHttb3ZpZX1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9wb3N0LmpzP2VudHJ5IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gICAgbWFyZ2luUmlnaHQ6IDE1XG59XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5BYm91dDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5cbmNvbnN0IGxheW91dFN0eWxlID0ge1xuICAgIG1hcmdpbjogMjAsXG4gICAgcGFkZGluZzogMjAsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnXG59O1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9QcmltYXJ5TGF5b3V0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        