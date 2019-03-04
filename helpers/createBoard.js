module.exports = {
  createBoard(rows , columns) {
    let boardArr = [];

    for (let i = 0; i < rows; i++) {
      let innerArr = [];

      for (let j = 0; j < columns; j++) {
        innerArr.push('');
      }

      boardArr.push(innerArr);
    }

    return boardArr;
  }

}