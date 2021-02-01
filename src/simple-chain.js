const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number') {
      this.chain.splice(position-1, 1);
    } else {
      this.chain = [];
      throw 'throws an Error on removing wrong link';
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    return this.chain.splice(0).join('~~');
  }
};

module.exports = chainMaker;
