function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

const PAIR_GROUPS = [ ['chopin', 'mozart'], ['africa', 'asia'], ['pig', 'sheep', 'cow'], ['picasso', 'dali', 'gogh'], ['football', 'basketball', 'baseball'] ]

class Game {
  let lives = 3;
  let index = 0;

  startGame() {

  }

  renderNewRound() {

  }

  checkMove () {
    
  }

  checkEndGame() {
    if (lives = 0 || playTime = 0) {
      this.endGame()
    }
  }

  endGame() {

  }
}

//addeventlistener, game.checkMove