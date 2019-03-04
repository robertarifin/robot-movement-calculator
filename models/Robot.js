class Robot {
  static placeRobot(x, y, board) {
    if (x >= 0 && x < 5 && y >= 0 && y < 5) {
      board[y][x] = 'R';

      return true;
    } else {
      return false;
    }
  }

  static moveNorth(x, y, board) {
    if (Robot.checkMovement(x, y, 'NORTH')) {
      board[y][x] = '';
      board[y- 1][x] = 'R';

      return y - 1;
    } else {
      return y;
    } 
  }

  static moveEast(x, y, board) {
    if (Robot.checkMovement(x, y, 'EAST')) {
      board[y][x] = '';
      board[y][x + 1] = 'R';

      console.log('berarti sini');
      return x + 1;
    } else {
      return x;
    } 
  }

  static moveSouth(x, y, board) {
    if (Robot.checkMovement(x, y, 'SOUTH')) {
      board[y][x] = '';
      board[y + 1][x] = 'R';

      return y + 1;
    } else {
      return y;
    } 
  }

  static moveWest(x, y, board) {
    if (Robot.checkMovement(x, y, 'WEST')) {
      board[y][x] = '';
      board[y][x - 1] = 'R';

      return x - 1;
    } else {
      return x;
    } 
  }

  static rotateLeft(currentFacing) {
    let result = '';

    switch (currentFacing) {
      case 'NORTH':
        result = 'WEST';
        break;
      case 'EAST':
        result = 'NORTH';
        break;
      case 'SOUTH':
        result = 'EAST';
        break;
      case 'WEST':
        result = 'SOUTH';
        break;
    }

    return result;
  }

  static rotateRight(currentFacing) {
    let result = '';

    switch (currentFacing) {
      case 'NORTH':
        result = 'EAST';
        break;
      case 'EAST':
        result = 'SOUTH';
        break;
      case 'SOUTH':
        result = 'WEST';
        break;
      case 'WEST':
        result = 'NORTH';
        break;
    }

    return result;
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