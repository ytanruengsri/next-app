'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PrimaryLayout = require('../components/PrimaryLayout.js');

var _PrimaryLayout2 = _interopRequireDefault(_PrimaryLayout);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

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