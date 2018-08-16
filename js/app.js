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

const PAIR_GROUPS = [ ['chopin', 'mozart'], ['africa', 'asia'], ['pig', 'sheep', 'cow'], ['picasso', 'dali', 'gogh'], ['football', 'basketball', 'baseball'] ]

class Game {
  constructor(){
    this.lives = 3;
    this.index = 0;
    this.playTime = 20;
  }

  startGame() {

  }

  renderNewRound() {

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

setTimeout(function(){ newGame.endGame() }, 3000);

//addeventlistener, game.checkMove




