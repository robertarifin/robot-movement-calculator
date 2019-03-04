const chai = require('chai');
const expect = chai.expect;
const RobotController = require('../controllers/RobotController.js');
const Board = require('../helpers/Board.js');

const board = Board.createBoard();

describe('Testing robot controller feature', function () {
  it('should successfully print result when all the commands already done', (done) => {
    const result = RobotController.runCommands();
    expect(result).to.be.a('string');
    done();
  })

  it('should print error when robot cannot be placed for the first time', (done) => {
    const result = RobotController.runCommands();
    expect(result).to.equal('Robot cannot be placed for the first time');
    done();
  })

  
})