const chai = require('chai');
const expect = chai.expect;

const RobotController = require('../controllers/RobotController.js');
const Board = require('../helpers/Board.js');

const board = Board.createBoard();

describe('Testing robot controller feature', function () {
  it('should successfully print result when COMMAND REPORT is executed', (done) => {
    const expectedResult = '0, 0, WEST';
    const actualResult = RobotController.doCommands(['PLACE', '0,0,NORTH', 'LEFT', 'REPORT'], board);
    expect(actualResult).equal(expectedResult);
    done();
  })

  it('should print error when robot cannot be placed for the first time', (done) => {
    const expectedResult = 'Robot cannot be placed at safe position for the first time';
    const actualResult = RobotController.doCommands(['PLACE', '5,10,NORTH', 'LEFT', 'REPORT'], board);
    expect(actualResult).equal(expectedResult);
    done();
  })  
})