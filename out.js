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

function shuffle(a) {
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [a[j], a[i]];
    a[i] = _ref[0];
    a[j] = _ref[1];
  }
  return a;
}

var PAIR_GROUPS = [['football', 'basketball', 'baseball'], ['picasso', 'dali', 'gogh'], ['pig', 'sheep', 'cow']];

// ['chopin', 'mozart'],
// ['africa', 'asia'],

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.lives = 3;
    this.currentIndex = 0;
    this.selected = null;
  }

  _createClass(Game, [{
    key: 'removeSelection',
    value: function removeSelection(arr) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;

          el.classList.remove('image-border');
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
  }, {
    key: 'renderNewRound',
    value: function renderNewRound() {
      var _this = this;

      this.handleTimer();
      $('.counter span')[0].innerHTML = this.currentIndex + 1;
      this.selected = null;
      //dom elements
      var imageContainers = $('.image-container');
      var wordContainers = $('.body__word-field');
      //TODO to delete later when animation
      this.removeSelection(imageContainers);
      //
      var toDisplayGroup = PAIR_GROUPS[this.currentIndex];

      var shuffledWords = toDisplayGroup.slice();
      shuffle(shuffledWords);
      // const groupCount = toDisplayGroup.length; TODO later


      toDisplayGroup.forEach(function (group, index) {
        var imageContainer = imageContainers[index];
        var wordContainer = wordContainers[index];

        if (imageContainer.classList.length === 2) {
          imageContainer.classList.remove(imageContainer.classList.item(1));
          imageContainer.classList.add(toDisplayGroup[index]);
        } else {
          imageContainer.classList.add(toDisplayGroup[index]);
        }
        imageContainer.dataset.name = toDisplayGroup[index];
        //add to dataset
        wordContainer.lastElementChild.innerHTML = shuffledWords[index];

        imageContainer.addEventListener('click', function () {
          _this.toggleBorder(imageContainer);
          _this.selected = imageContainer.dataset.name;
        });

        wordContainer.addEventListener('click', function (e) {
          e.stopImmediatePropagation();
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
      this.checkEndGame();
      var word = element.lastElementChild.innerHTML;
      if (this.selected === word) {
        if (this.currentIndex + 1 === PAIR_GROUPS.length) {
          this.endGame();
        } else {
          this.currentIndex += 1;
          this.renderNewRound();
        }
      } else {
        this.looseLife();
      }
    }
  }, {
    key: 'looseLife',
    value: function looseLife() {
      this.lives -= 1;
      var hearts = $('.header__heart--full');

      hearts[hearts.length - 1].classList.remove('header__heart--full');
      hearts[hearts.length - 1].classList.add('header__heart--empty');
      this.checkEndGame();
    }
  }, {
    key: 'toggleBorder',
    value: function toggleBorder(element) {
      if (this.selected && element.dataset.name !== this.selected) {
        var imageContainers = $('.image-container');
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = imageContainers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var container = _step2.value;

            // if (container.dataset.name === this.selected) {
            //   container.style.border = 'none';
            // }
            container.classList.remove('image-border');
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
      element.classList.add('image-border');
    }
  }, {
    key: 'checkMove',
    value: function checkMove() {}
  }, {
    key: 'checkEndGame',
    value: function checkEndGame() {
      if (this.lives === 0 || this.currentIndex === PAIR_GROUPS.length) {
        this.endGame();
      }
    }
  }, {
    key: 'endGame',
    value: function endGame() {
      this.currentIndex = 0;
      this.lives = 3;
      //TODO restart timer
      this.restoreHearts();
      this.renderNewRound();
    }
  }, {
    key: 'restoreHearts',
    value: function restoreHearts() {
      var heartElements = $('.header__heart--empty');
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = heartElements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var element = _step3.value;

          element.classList.remove('header__heart--empty');
          element.classList.add('header__heart--full');
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: 'handleTimer',
    value: function handleTimer() {
      var _this2 = this;

      clearInterval(window.id);
      var elem = document.getElementById("myBar");
      elem.style.width = '1%';
      var width = 1;
      window.id = setInterval(function () {
        if (width >= 100) {
          clearInterval(window.id);
          _this2.endGame();
        } else {
          width++;
          elem.style.width = width + '%';
        }
      }, 100);
    }
  }]);

  return Game;
}();

var newGame = new Game();

newGame.renderNewRound();

setTimeout(function () {
  newGame.endGame();
}, 20000);

//timer, minigra

/***/ })
/******/ ]);