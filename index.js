const robotController = require('./controllers/RobotController.js');

const commands = process.argv.slice(2);
robotController.doCommands(commands);