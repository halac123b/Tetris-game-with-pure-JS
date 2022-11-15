class brick {
  constructor(game){
    this.game = game;
    this.dots = [];
    this.data = [];
    this.row = 0;
    this.col = 0;

    this.createData();
    this.createDots();
  }

  createData(){
    let baseData = [
      [
        [x, x, x, x]
      ],
      [
        [x, x],
        [x, x]
      ],
      [
        [x, x, x],
        [_, x, _]
      ],
      [
        [x, x, _],
        [_, x, x]
      ],
      [
        [_, x, x],
        [x, x, _]
      ],
      [
        [x, _],
        [x, _],
        [x, x]
      ],
      [
        [_, x],
        [_, x],
        [x, x]
      ]
    ];
    let rand = Math.round(Math.random() * (baseData.length - 1));
    this.data = baseData[rand];
  }
  createDots(){
    this.dots = [];
    for (let row = 0; row < this.data.length; row++){
      for (let col = 0; col < this.data[0].length; col++){
        if (this.data[row][col] == x){
          let newDot = new dot(this.game, row + this.row, col + this.col);
          this.dots.push(newDot);
        }
      }
    }
  }
  canFall(){
    let check = true;
    this.dots.forEach( (dot) => {
      if(!dot.canFall())
        check = false;
    });
    return check;
  }
  fall(){
    if (this.canFall()){
      this.row++;
      this.dots.forEach( (dot) => dot.fall());
    }
    else {
      this.game.createNewBrick();
      this.appendToBoard();
      this.game.board.checkFullRow();
    }
  }

  canMoveLeft(){
    let check = true;
    this.dots.forEach( (dot) => {
      if(!dot.canMoveLeft())
        check = false;
    });
    return check;
  }
  moveLeft(){
    if (this.canMoveLeft()){
      this.col--;
      this.dots.forEach( (dot) => dot.moveLeft());
    }
  }

  canMoveRight(){
    let check = true;
    this.dots.forEach( (dot) => {
      if(!dot.canMoveRight())
        check = false;
    });
    return check;
  }
  moveRight(){
    if (this.canMoveRight()){
      this.col++;
      this.dots.forEach( (dot) => dot.moveRight());
    }
  }

  moveDown(){
    while (this.canFall()){
      this.fall();
    }
  }

  rotate(){
    let newData = [];
    for (let col = 0; col < this.data[0].length; col++){
      let newRow = [];
      for (let row = this.data.length - 1; row >= 0; row--){
        newRow.push(this.data[row][col]);
      }
      newData.push(newRow);
    }
    // Check new pos is valid to rotate
    let isValid = true;
    for (let nRow = 0; nRow < newData.length; nRow++){
      for (let nCol = 0; nCol < newData[0].length; nCol++){
        if (newData[nRow][nCol] == x &&
          !this.game.board.isEmptyCell(nRow, nCol)){
          isValid = false;
          break;
        }
      }
      if (!isValid)
        break;
    }

    if (isValid){
      this.data = newData;
      this.createDots();
    }
  }

  appendToBoard(){
    this.dots.forEach( (dot) => 
      {this.game.board.data[dot.row][dot.col] = x; }
    );
  }
  draw(){
    this.dots.forEach( (dot) => dot.draw());
  }
}