'use strict';

var fetchFunc = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(webapp.url).then(function (r) {
              return r.json();
            });

          case 2:
            data = _context.sent;

            webapp.WebBuilder.call(this, data);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetchFunc() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var webapp = {
  WebBuilder: function WebBuilder(data) {
    var div = document.createElement('div');
    var h1 = document.createElement('h1');
    var img = document.createElement('img');
    var value = data.value,
        icon_url = data.icon_url;

    h1.textContent = value;
    img.src = icon_url;
    div.appendChild(h1);
    div.appendChild(img);
    document.querySelector('body').appendChild(div);
  },
  url: "https://api.chucknorris.io/jokes/random"
};

function init() {
  fetchFunc();
  setInterval(fetchFunc, 3000);
}

document.addEventListener('DOMContentLoaded', init);