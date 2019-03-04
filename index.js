const robotController = require('./controllers/RobotController.js');
const Board = require('./helpers/Board.js');
const commands = process.argv.slice(2);

const board = Board.createBoard();

robotController.doCommands(commands, board);