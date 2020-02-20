module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      throw "Not implemented";
    }
    return Array.isArray(arr)
      ? 1 + Math.max(...arr.map(this.calculateDepth))
      : 0;
  }
};
