

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const PAIR_GROUPS = [
  ['football', 'basketball', 'baseball'],
  ['picasso', 'dali', 'gogh'],
  ['pig', 'sheep', 'cow'] ];

  // ['chopin', 'mozart'],
  // ['africa', 'asia'],

class Game {
  constructor(){
    this.lives = 3;
    this.currentIndex = 0;
    this.selected = null;
  }

  removeSelection(arr) {
    for (let el of arr) {
      el.classList.remove('image-border')
    }
  }

  renderNewRound() {
    this.handleTimer();
    $('.counter span')[0].innerHTML = this.currentIndex + 1;
    this.selected = null;
    //dom elements
    const imageContainers = $('.image-container');
    const wordContainers = $('.body__word-field');
    //TODO to delete later when animation
    this.removeSelection(imageContainers);
    //
    const toDisplayGroup = PAIR_GROUPS[this.currentIndex];

    const shuffledWords = toDisplayGroup.slice();
    shuffle(shuffledWords);
    // const groupCount = toDisplayGroup.length; TODO later



    toDisplayGroup.forEach( (group, index) => {
      const imageContainer = imageContainers[index];
      const wordContainer = wordContainers[index];

      if (imageContainer.classList.length === 2) {
        imageContainer.classList.remove(imageContainer.classList.item(1))
        imageContainer.classList.add(toDisplayGroup[index])
      } else {
        imageContainer.classList.add(toDisplayGroup[index]);
      }
      imageContainer.dataset.name = toDisplayGroup[index];
      //add to dataset
      wordContainer.lastElementChild.innerHTML = shuffledWords[index];


      imageContainer.addEventListener('click', () => {
        this.toggleBorder(imageContainer);
        this.selected = imageContainer.dataset.name;
      })

      wordContainer.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        if (this.selected) {
          this.checkPair(wordContainer)
        }
      })

      // imageContainer.addEventListener('mousedown', (e) => {
      //   console.log(e.target.dataset.name);
      // });
      //
      // document.addEventListener('mouseup', (e) => {
      //   console.log(e.target);
      // })

    })
  }

  checkPair(element) {
    this.checkEndGame();
    const word = element.lastElementChild.innerHTML;
    if (this.selected === word) {
      if (this.currentIndex + 1 === PAIR_GROUPS.length) {
        this.endGame()
      } else {
        this.currentIndex += 1;
        this.renderNewRound();
      }
    } else {
      this.looseLife();
    }
  }

  looseLife() {
    this.lives -= 1;
    const hearts = $('.header__heart--full');

    hearts[hearts.length - 1].classList.remove('header__heart--full');
    hearts[hearts.length - 1].classList.add('header__heart--empty');
    this.checkEndGame();
  }

  toggleBorder(element) {
    if (this.selected && element.dataset.name !== this.selected) {
      const imageContainers = $('.image-container');
      for (let container of imageContainers) {
        // if (container.dataset.name === this.selected) {
        //   container.style.border = 'none';
        // }
        container.classList.remove('image-border')
      }
    }
    element.classList.add('image-border');
  }

  checkMove () {

  }

  checkEndGame() {
    if (this.lives === 0 || this.currentIndex === PAIR_GROUPS.length) {
      this.endGame();
    }
  }

  endGame() {
    this.currentIndex = 0;
    this.lives = 3;
    //TODO restart timer
    this.restoreHearts();
    this.renderNewRound();
  }

  restoreHearts() {
    const heartElements = $('.header__heart--empty');
    for (let element of heartElements) {
      element.classList.remove('header__heart--empty');
      element.classList.add('header__heart--full');
    }
  }

  handleTimer() {
    clearInterval(window.id)
    var elem = document.getElementById("myBar");
    elem.style.width = '1%';
    var width = 1;
    window.id = setInterval( () => {
        if (width >= 100) {
          clearInterval(window.id);
          this.endGame()
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }, 100)
  }
}

var newGame = new Game()

newGame.renderNewRound();

setTimeout(function(){ newGame.endGame() }, 20000);



//timer, minigra




