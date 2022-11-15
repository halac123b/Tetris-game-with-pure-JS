class game {
  constructor(){
    this.canvas = null;
    this.context = null;
    this.init();
  }
  
  init(){
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = GAME_WIDTH;
    this.canvas.height = GAME_HEIGHT;
    document.body.appendChild(this.canvas);

    this.board = new board(this);

    this.startGame();
    this.listenKeyboard();
    this.brick = new brick(this);
    this.loop();
  }
  listenKeyboard(){
    document.addEventListener("keydown", (event) => {
      switch(event.code){
        case "ArrowLeft":
          this.brick.moveLeft();
        break;
        case "ArrowRight":
          this.brick.moveRight();
        break;
        case "ArrowDown":
          this.brick.moveDown();
        break;
        case "ArrowUp":
          this.brick.rotate();
        break;
      }
    });
  }
  startGame(){
    setInterval( () => {this.brick.fall()}, 500);
  }

  createNewBrick(){
    this.brick = new brick(this);
  }
  
  loop(){
    this.update();
    this.draw();

    setTimeout(() => this.loop(), 30);
  }
  update(){

  }
  clearScreen(){
    this.context.fillStyle = "#ffffff";
    this.context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  }
  draw(){
    this.clearScreen();
    this.board.draw();
    this.brick.draw();
  } 
}

var g = new game();