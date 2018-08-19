/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function move() {
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//         if (width >= 100) {
//             clearInterval(id);
//         } else {
//             width++;
//             elem.style.width = width + '%';
//         }
//     }
// }

function shuffle(a) {
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [a[j], a[i]];
    a[i] = _ref[0];
    a[j] = _ref[1];
  }
  return a;
}

var PAIR_GROUPS = [['football', 'basketball', 'baseball'], ['picasso', 'dali', 'gogh'], ['chopin', 'mozart'], ['africa', 'asia'], ['pig', 'sheep', 'cow']];

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.lives = 3;
    this.currentIndex = 1;
    this.playTime = 20;
    this.selected = null;
  }

  _createClass(Game, [{
    key: 'startGame',
    value: function startGame() {}
  }, {
    key: 'renderNewRound',
    value: function renderNewRound() {
      var _this = this;

      //dom elements
      var imageContainers = $('.image-container');
      var wordContainers = $('.body__word-field');

      var toDisplayGroup = PAIR_GROUPS[this.currentIndex];

      var shuffledWords = toDisplayGroup.slice();
      shuffle(shuffledWords);
      // const groupCount = toDisplayGroup.length; TODO later


      toDisplayGroup.forEach(function (group, index) {
        var imageContainer = imageContainers[index];
        var wordContainer = wordContainers[index];

        imageContainer.classList.add(toDisplayGroup[index]);
        imageContainer.dataset.name = toDisplayGroup[index];
        //add to dataset
        wordContainer.lastElementChild.innerHTML = shuffledWords[index];
        imageContainer.addEventListener('click', function () {
          _this.toggleBorder(imageContainer);
          _this.selected = imageContainer.dataset.name;
        });

        wordContainer.addEventListener('click', function () {
          if (_this.selected) {
            _this.checkPair(wordContainer);
          }
        });

        // imageContainer.addEventListener('mousedown', (e) => {
        //   console.log(e.target.dataset.name);
        // });
        //
        // document.addEventListener('mouseup', (e) => {
        //   console.log(e.target);
        // })
      });
    }
  }, {
    key: 'checkPair',
    value: function checkPair(element) {
      var word = element.lastElementChild.innerHTML;
      if (this.selected === word) {
        console.log('mamy parke');
      }
    }
  }, {
    key: 'toggleBorder',
    value: function toggleBorder(element) {
      if (this.selected && element.dataset.name !== this.selected) {
        var imageContainers = $('.image-container');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = imageContainers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var container = _step.value;

            if (container.dataset.name === this.selected) {
              container.style.border = 'none';
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      element.style.border = '7px solid black';
    }
  }, {
    key: 'checkMove',
    value: function checkMove() {}
  }, {
    key: 'checkEndGame',
    value: function checkEndGame() {
      if (this.lives === 0 || this.playTime === 0) {
        this.endGame();
      }
    }
  }, {
    key: 'endGame',
    value: function endGame() {
      console.log('game end');
    }
  }]);

  return Game;
}();

var newGame = new Game();

newGame.renderNewRound();

setTimeout(function () {
  newGame.endGame();
}, 20000);

//addeventlistener, game.checkMove

/***/ })
/******/ ]);