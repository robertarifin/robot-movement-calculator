const robotController = require('./controllers/RobotController.js');
const boardHelper = require('./helpers/createBoard.js');
const commands = process.argv.slice(2);

const board = boardHelper.createBoard(5 , 5);

robotController.doCommands(commands);