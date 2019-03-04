const chai = require('chai');
const expect = chai.expect;
const Robot = require('../models/Robot.js');
const Board = require('../helpers/Board.js');

const board = Board.createBoard();
describe('Testing robot  movement feature', function () {
  it('should move to north if it is not out of boundary', (done) => {
      let currentX = 0;
      let currentY = 1;
      board[currentY][currentX] = "R";
      Robot.moveNorth(currentX, currentY, board);
      expect(board[currentY][currentX]).to.equal('');
      expect(board[currentY -  1][currentX]).to.equal('R');
      done();
  })

  it('should do nothing when move to north is not possible because of out of boundary', (done) => {
    let currentX = 1;
    let currentY = 0;
    board[currentY][currentX] = "R";
    Robot.moveNorth(currentX, currentY, board);
    expect(board[currentY][currentX]).to.equal('R');
    done();
  })

  it('should move to east if it is not out of boundary', (done) => {
    let currentX = 0;
    let currentY = 0;
    board[currentY][currentX] = "R";
    Robot.moveEast(currentX, currentY, board);
    expect(board[currentY][currentX]).to.equal('');
    expect(board[currentY][currentX + 1]).to.equal('R');
    done();
})

  it('should do nothing when move to east is not possible because of out of boundary', (done) => {
    let currentX = 4;
    let currentY = 0;
    board[currentY][currentX] = "R";
    Robot.moveEast(currentX, currentY, board);
    expect(board[currentY][currentX]).to.equal('R');
    done();
  })

  it('should move to south if it is not out of boundary', (done) => {
    let currentX = 0;
    let currentY = 0;
    board[currentY][currentX] = "R";
    Robot.moveSouth(currentX, currentY, board);
    expect(board[currentY][currentX]).to.equal('');
    expect(board[currentY + 1][currentX]).to.equal('R');
    done();
  })

  it('should do nothing when move to south is not possible because of out of boundary', (done) => {
    let currentX = 2;
    let currentY = 4;
    board[currentY][currentX] = "R";
    Robot.moveSouth(currentX, currentY, board);
    expect(board[currentY][currentX]).to.equal('R');
    done();
  })

  it('should move to west if it is not out of boundary', (done) => {
    let currentX = 1;
    let currentY = 0;
    board[currentY][currentX] = "R";
    Robot.moveWest(currentX, currentY, board);
    expect(board[currentY][currentX - 1]).to.equal('R');
    done();
  })

  it('should do nothing when move to west is not possible because of out of boundary', (done) => {
    let currentX = 0;
    let currentY = 0;
    board[currentY][currentX] = "R";
    Robot.moveWest(currentX, currentY, board);
    expect(board[currentY][currentX]).to.equal('R');
    done();
  })

  it ('should return correct facing when the robot doing left rotation(case: north as current facing', (done) => {
    let currentFacing = 'NORTH';
    let expectedFacing = 'WEST';
    let result = Robot.rotateLeft(currentFacing);
    expect(result).to.equal(expectedFacing);
    done();
  })

  it ('should return correct facing when the robot doing left rotation(case: east as current facing', (done) => {
    let currentFacing = 'EAST';
    let expectedFacing = 'NORTH';
    let result = Robot.rotateLeft(currentFacing);
    expect(result).to.equal(expectedFacing);
    done();
  })

  it ('should return correct facing when the robot doing left rotation(case: south as current facing', (done) => {
    let currentFacing = 'SOUTH';
    let expectedFacing = 'EAST';
    let result = Robot.rotateLeft(currentFacing);
    expect(result).to.equal(expectedFacing);
    done();
  })

  it ('should return correct facing when the robot doing left rotation(case: west as current facing', (done) => {
    let currentFacing = 'WEST';
    let expectedFacing = 'SOUTH';
    let result = Robot.rotateLeft(currentFacing);
    expect(result).to.equal(expectedFacing);
    done();
  })

  it ('should return correct facing when the robot doing right rotation(case: north as current facing', (done) => {
    let currentFacing = 'NORTH';
    let expectedFacing = 'EAST';
    let result = Robot.rotateRight(currentFacing);
    expect(result).to.equal(expectedFacing);
    done();
  })

  it ('should return correct facing when the robot doing right rotation(case: east as current facing', (done) => {
    let currentFacing = 'EAST';
    let expectedFacing = 'SOUTH';
    let result = Robot.rotateRight(currentFacing);
    expect(result).to.equal(expectedFacing);
    done();
  })

  it ('should return correct facing when the robot doing right rotation(case: south as current facing', (done) => {
    let currentFacing = 'SOUTH';
    let expectedFacing = 'WEST';
    let result = Robot.rotateRight(currentFacing);
    expect(result).to.equal(expectedFacing);
    done();
  })

  it ('should return correct facing when the robot doing right rotation(case: west as current facing', (done) => {
    let currentFacing = 'WEST';
    let expectedFacing = 'NORTH';
    let result = Robot.rotateRight(currentFacing);
    expect(result).to.equal(expectedFacing);
    done();
  })
})