class Board {
  static createBoard() {
    let boardArr = [];

    for (let i = 0; i < 5; i++) {
      let innerArr = [];

      for (let j = 0; j < 5; j++) {
        innerArr.push('');
      }

      boardArr.push(innerArr);
    }

    return boardArr;
  }
}

module.exports = Board;