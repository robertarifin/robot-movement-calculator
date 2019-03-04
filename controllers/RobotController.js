const Robot = require('../models/Robot.js');
const View = require('../views/View.js');

class RobotController {
  static doCommands(commands, board) {
    let initialPosition = false;
    let currentX = 0;
    let currentY = 0;
    let currentFacing = '';
    let result = '';

    for (let  i = 0; i < commands.length; i++) {
      if (!initialPosition) {
        if (commands[i] === 'PLACE') {
          let positionArr = commands[ i + 1].split(',');

          let nextX = Number(positionArr[0]);
          let nextY = Number(4 - positionArr[1]);
          let nextFacing = positionArr[2];

          if (Robot.placeRobot(nextX, nextY, board)) {
            board[currentY][currentX] = '';
            currentX = nextX;
            currentY = nextY;
            currentFacing = nextFacing;
            initialPosition = true;
          }
         
          i++;
        }  
      } else {
        switch(commands[i]) {
          case 'LEFT':
            currentFacing = Robot.rotateLeft(currentFacing);
            break;
          case 'RIGHT':
            currentFacing = Robot.rotateRight(currentFacing);
            break;
          case 'MOVE':
            switch(currentFacing) {
              case 'NORTH':
                currentY = Robot.moveNorth(currentX, currentY, board);
                break;
              case 'EAST':
                currentX = Robot.moveEast(currentX, currentY, board);
                break;
              case 'SOUTH':
                currentY = Robot.moveSouth(currentX, currentY, board);
                break;
              case 'WEST':
                currentX = Robot.moveWest(currentX, currentY, board);
                break;
            }
            break;
          case 'PLACE':
            let nextPositionArr = commands[ i + 1].split(',');
            let nextX = Number(nextPositionArr[0]);
            let nextY = Number(4 - nextPositionArr[1]);
            let nextFacing = nextPositionArr[2];

            if (Robot.placeRobot(nextX, nextY, board)) {
              board[currentY][currentX] = '';
              currentX = nextX;
              currentY = nextY;
              currentFacing = nextFacing;
            }
          
            i++;
            break;
          case 'REPORT':
            View.printResult(currentX, 4 - currentY, currentFacing);
            result = (`${currentX}, ${4 - currentY}, ${currentFacing}`);
            break;
        }
      }
    }

    if (result.length === 0) {
      console.log(result, 'berapa')
      result = 'Robot cannot be placed at safe position for the first time';
      View.printError(result);

    }

    return result;
  }
}

module.exports = RobotController;