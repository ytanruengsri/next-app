
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([6],{

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

/***/ 567:
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

var _style = __webpack_require__(569);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _PrimaryLayout = __webpack_require__(565);

var _PrimaryLayout2 = _interopRequireDefault(_PrimaryLayout);

var _link = __webpack_require__(563);

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = __webpack_require__(562);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function Index(props) {
    return _react2.default.createElement(_PrimaryLayout2.default, null, _react2.default.createElement('h1', {
        'data-jsx': 3065526179
    }, 'Batman Movies'), _react2.default.createElement('ul', {
        'data-jsx': 3065526179
    }, props.movies.map(function (movie) {
        return _react2.default.createElement('li', { key: movie.imdbID, 'data-jsx': 3065526179
        }, _react2.default.createElement(_link2.default, { as: '/p/' + movie.imdbID, href: '/post?id=' + movie.imdbID }, _react2.default.createElement('a', {
            'data-jsx': 3065526179
        }, movie.Title)));
    })), _react2.default.createElement(_style2.default, {
        styleId: 3065526179,
        css: 'h1[data-jsx="3065526179"],a[data-jsx="3065526179"] {font-family: "Arial";}ul[data-jsx="3065526179"] {padding: 0;}li[data-jsx="3065526179"] {list-style: none;margin: 5px 0;}a[data-jsx="3065526179"] {text-decoration: none;color: blue;}a[data-jsx="3065526179"]:hover {opacity: 0.6;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCb0IsQUFDRCxvREFDa0IscUJBQ3hCLENBRUcsMkJBQ1csV0FDZCxDQUVHLDJCQUNpQixpQkFDSCxjQUNqQixDQUVFLDBCQUN1QixzQkFDVixZQUNmLENBRVEsZ0NBQ1EsYUFDaEIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3l0YW5ydWVuZ3NyaS9kZXYvd29ya3NwYWNlL3ZlZ2FzL25leHQtcGRwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL1ByaW1hcnlMYXlvdXQuanMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXG4gICAgPExheW91dD5cbiAgICAgICAgPGgxPkJhdG1hbiBNb3ZpZXM8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7cHJvcHMubW92aWVzLm1hcCgobW92aWUpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXttb3ZpZS5pbWRiSUR9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9wLyR7bW92aWUuaW1kYklEfWB9IGhyZWY9e2AvcG9zdD9pZD0ke21vdmllLmltZGJJRH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnttb3ZpZS5UaXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGgxLCBhIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbik7XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/cz1iYXRtYW4nKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKGBNb3ZpZSBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEuU2VhcmNoLmxlbmd0aH1gKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG1vdmllczogZGF0YS5TZWFyY2gsXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
    }));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var res, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _isomorphicUnfetch2.default)('http://www.omdbapi.com/?s=batman');

                case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.json();

                case 5:
                    data = _context.sent;

                    console.log('Movie data fetched. Count: ' + data.Search.length);

                    return _context.abrupt('return', {
                        movies: data.Search
                    });

                case 8:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/ytanruengsri/dev/workspace/vegas/next-pdp/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/ytanruengsri/dev/workspace/vegas/next-pdp/pages/index.js"); } } })();
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
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(567);


/***/ })

},[568]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82MWY1NmY1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJpbWFyeUxheW91dC5qcz82MWY1NmY1Iiwid2VicGFjazovLy8uL3BhZ2VzPzYxZjU2ZjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTTtpQkFDVztBQUFiOztBQUdKLElBQU0sU0FBUzsyQkFDWDs7c0JBQUE7d0JBQ0k7QUFESjtBQUFBLHVCQUNLLGdDQUFLLE1BQUs7c0JBQVg7d0JBQ0k7QUFESjt1QkFDSSxxQkFBRyxPQUFPO3NCQUFWO3dCQUFBO0FBQUE7T0FFSiwwQkFBQyxnQ0FBSyxNQUFLO3NCQUFYO3dCQUNJO0FBREo7dUJBQ0kscUJBQUcsT0FBTztzQkFBVjt3QkFBQTtBQUFBO09BQUE7QUFLWjs7a0JBQWUsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQlI7Ozs7Ozs7OztBQUVQLElBQU07WUFFRjthQUNBO1lBQVE7QUFGUjs7QUFLSixJQUFNLFNBQVMsZ0JBQUMsT0FBRDsyQkFDWCx1QkFBSyxPQUFPO3NCQUFaO3dCQUNJO0FBREo7S0FBQSxrQkFDSzs7c0JBQUQ7d0JBQ0M7QUFERDtBQUFBLGNBQ087QUFJZjs7a0JBQWUsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmUjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVQLElBQU0sUUFBUSxlQUFDLE9BQUQ7MkJBQ1QsdUNBQ0c7b0JBQUE7QUFBQSxPQUNBO29CQUNLO0FBREwsYUFDVyxPQUFPLElBQUksVUFBQyxPQUFEOytCQUNkLHNCQUFJLEtBQUssTUFBTSxvQkFDWDtTQURKLGtCQUNLLGdDQUFLLFlBQVUsTUFBTSxRQUFVLG9CQUFrQixNQUM5Qzt3QkFBSTtBQUFKLGlCQUFVO0FBSHJCO2lCQUhUO2FBQUE7QUFBQTtBQURKOztBQXNDQSxNQUFNLDZFQUFrQjthQUFBO2tFQUFBO2tCQUFBOzZDQUFBO3FCQUFBO29DQUFBOzJCQUNGLGlDQUFNOztxQkFBbEI7QUFEYztvQ0FBQTsyQkFFRCxJQUFJOztxQkFBakI7QUFGYyxvQ0FJcEI7OzRCQUFRLG9DQUFrQyxLQUFLLE9BQU87OztnQ0FHMUMsS0FBSztBQUFiOztxQkFQZ0I7cUJBQUE7b0NBQUE7O0FBQUE7Z0JBQUE7QUFXeEI7O2tCQUFlLE0iLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbGlua1N0eWxlID0ge1xuICAgIG1hcmdpblJpZ2h0OiAxNVxufVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkhvbWU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+QWJvdXQ8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuXG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcbiAgICBtYXJnaW46IDIwLFxuICAgIHBhZGRpbmc6IDIwLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjREREJ1xufTtcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUHJpbWFyeUxheW91dC5qcyIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9QcmltYXJ5TGF5b3V0LmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5CYXRtYW4gTW92aWVzPC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAge3Byb3BzLm1vdmllcy5tYXAoKG1vdmllKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17bW92aWUuaW1kYklEfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvcC8ke21vdmllLmltZGJJRH1gfSBocmVmPXtgL3Bvc3Q/aWQ9JHttb3ZpZS5pbWRiSUR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57bW92aWUuVGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBoMSwgYSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4pO1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly93d3cub21kYmFwaS5jb20vP3M9YmF0bWFuJyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyhgTW92aWUgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLlNlYXJjaC5sZW5ndGh9YCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtb3ZpZXM6IGRhdGEuU2VhcmNoLFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        