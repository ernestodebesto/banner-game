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

const PAIR_GROUPS = [['football', 'basketball', 'baseball'],['picasso', 'dali', 'gogh'] ,  ['chopin', 'mozart'], ['africa', 'asia'], ['pig', 'sheep', 'cow']]

class Game {
  constructor(){
    this.lives = 3;
    this.index = 1;
    this.playTime = 20;
  }

  startGame() {

  }

  renderNewRound() {
    const imageContainers = document.querySelectorAll('.image-container');
    const wordContainers = document.querySelectorAll('.body__word-field p')

    const toDisplayGroup = PAIR_GROUPS[this.index];
    const shuffledWords = toDisplayGroup.slice();
    shuffle(shuffledWords);

    toDisplayGroup.forEach( (group, index) => {
      const imageContainer = imageContainers[index];
      const wordContainer = wordContainers[index];

      imageContainer.classList.add(toDisplayGroup[index]);
      wordContainer.innerHTML = shuffledWords[index];
    })
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


setTimeout(function(){ newGame.endGame() }, 3000);



//addeventlistener, game.checkMove




