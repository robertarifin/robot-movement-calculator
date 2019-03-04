const Robot = require('../models/Robot.js');

class RobotController {
  static doCommands(commands, board) {
    let initialPosition = false;
    let currentX = 0;
    let currentY = 0;
    let currentFacing = '';

    for (let  i = 0; i < commands.length; i++) {
      if (!initialPosition) {
        if (commands[i] === 'PLACE') {
          let positionArr = commands[ i + 1].split(',');
          currentX = positionArr[0];
          currentY = positionArr[1];
          currentFacing = positionArr[2];
          initialPosition = true;
        }  
      } else {
        switch(commands[i]) {
          case 'LEFT':
            currentFacing = Robot.rotateLeft(currentFacing);
            break;
        }
      }
    }
    console.log(currentFacing)


    // commands.forEach((command) => {
    //   if (!initialPosition) {
    //     if (command === 'PLACE') {

    //     }
    //   } else {
    //     switch (command) {
    //       case 'PLACE':

    //     }
    // });
    // })
  }
}

module.exports = RobotController;