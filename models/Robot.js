class Robot {
  static moveNorth(x, y, board) {
    if (Robot.checkMovement(x, y, 'NORTH')) {
      board[y][x] = '';
      board[y- 1][x] = 'R';
    } 
  }

  static moveEast(x, y, board) {
    if (Robot.checkMovement(x, y, 'EAST')) {
      board[y][x] = '';
      board[y][x + 1] = 'R';
    } 
  }

  static moveSouth(x, y, board) {
    if (Robot.checkMovement(x, y, 'SOUTH')) {
      board[y][x] = '';
      board[y + 1][x] = 'R';
    } 
  }

  static moveWest(x, y, board) {
    if (Robot.checkMovement(x, y, 'WEST')) {
      board[y][x] = '';
      board[y][x - 1] = 'R';
    } 
  }

  static checkMovement(x ,y, pos) {
    if (pos === 'NORTH') {
        if ( y - 1 >= 0) {
          return true;
        }
    } else if (pos === 'WEST') {
      if (x - 1 >= 0) {
        return true;
      }
    } else if (pos === 'EAST') {
      if (x + 1 < 5) {
        return true;
      }
    } else if (pos === 'SOUTH') {
      if (y + 1 < 5) {
        return true;
      }
    }

    return false; 
  }
}

module.exports = Robot;