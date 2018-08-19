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
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const PAIR_GROUPS = [
  ['football', 'basketball', 'baseball'],
  ['picasso', 'dali', 'gogh'],
  ['chopin', 'mozart'],
  ['africa', 'asia'],
  ['pig', 'sheep', 'cow'] ]

class Game {
  constructor(){
    this.lives = 3;
    this.currentIndex = 1;
    this.playTime = 20;
    this.selected = null;
  }

  startGame() {

  }

  renderNewRound() {
    //dom elements
    const imageContainers = $('.image-container');
    const wordContainers = $('.body__word-field');

    const toDisplayGroup = PAIR_GROUPS[this.currentIndex];

    const shuffledWords = toDisplayGroup.slice();
    shuffle(shuffledWords);
    // const groupCount = toDisplayGroup.length; TODO later



    toDisplayGroup.forEach( (group, index) => {
      const imageContainer = imageContainers[index];
      const wordContainer = wordContainers[index];

      imageContainer.classList.add(toDisplayGroup[index]);
      imageContainer.dataset.name = toDisplayGroup[index];
      //add to dataset
      wordContainer.lastElementChild.innerHTML = shuffledWords[index];
      imageContainer.addEventListener('click', () => {
        this.toggleBorder(imageContainer);
        this.selected = imageContainer.dataset.name;
      })

      wordContainer.addEventListener('click', () => {
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
    const word = element.lastElementChild.innerHTML;
    if (this.selected === word) {
      console.log('mamy parke');
    }
  }

  toggleBorder(element) {
    if (this.selected && element.dataset.name !== this.selected) {
      const imageContainers = $('.image-container');
      for (let container of imageContainers) {
        if (container.dataset.name === this.selected) {
          container.style.border = 'none';
        }
      }
    }
    element.style.border = '7px solid black'
  }

  checkMove () {

  }

  checkEndGame() {
    if (this.lives === 0 || this.playTime === 0) {
      this.endGame()
    }
  }

  endGame() {
    console.log('game end');
  }
}

var newGame = new Game()

newGame.renderNewRound();


setTimeout(function(){ newGame.endGame() }, 20000);



//addeventlistener, game.checkMove




