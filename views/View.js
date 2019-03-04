class View {
  static printResult(x, y, facing) {
    console.log(`Output: ${x}, ${y}, ${facing}`);
  }

  static printError(error) {
    console.log(`Error: ${error}`)
  }
}

module.exports = View;