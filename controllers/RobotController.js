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
          currentX = Number(positionArr[0]);
          currentY = Number(4 - positionArr[1]);
          currentFacing = positionArr[2];
          initialPosition = true;
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
            nextX = Number(nextPositionArr[0]);
            nextY = Number(4 - nextPositionArr[1]);
            nextFacing = nextPositionArr[2];

            if (Robot.placeRobot) {
              
            }
          
            i++;
          case 'REPORT':
            View.printResult(currentX, 4 - currentY, currentFacing);
            result = (`${currentX}, ${4 - currentY}, ${currentFacing}`)
            break;
        }
      }
    }

    if (result.length === 0) {
      View.printResult('Robot cannot be placed at safe position for the first time')
    }

    return result;
  }
}

module.exports = RobotController;