class board {
  constructor(game){
    this.game = game;
    // Array chứa các dot
    this.data = [
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
      [_,_,_,_,_,_,_,_,_,_],
    ];
  } 
  isEmptyCell(row, col){
    return this.data[row][col] == _;
  }

  checkFullRow(){
    for (let row = NUM_ROW - 1; row >= 0; row--){
      let full = true;
      for (let col = 0; col < NUM_COL; col++){
        if (this.isEmptyCell(row, col)){
          full = false;
          break;
        }
      }
      if (full){
        removeRaw(raw);
      }
    }
  }

  removeRow(){
    this.data.slice(row, 1);
    this.data.unshift([_,_,_,_,_,_,_,_,_,_]);
    this.createDots();
  }

  createDots(){
    this.dots = [];
    for (let row = 0; row < NUM_ROW; row++){
      for (let col = 0; col < NUM_COL; col++){
        if(this.data[row][col] == x){
          let newDot = new dot(this.game, row, col);
          this.dots.push(newDot);
        }
      }
    }
  }
  draw(){
    this.createDots();
    this.dots.forEach( (dot) => dot.draw());
  }
}