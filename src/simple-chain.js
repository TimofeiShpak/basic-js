const chainMaker = {
    chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    value = `( ${value} )`;
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if(typeof(position) === 'string' || position< 1 || position>this.getLength()){
    this.chain = [] ; throw new Error();}
    else {this.chain.splice(position-1,1); return this;}
  },
  reverseChain() {
    this.chain.reverse()
    return this;
  },
  finishChain() {
    let str = this.chain.join('~~');
    this.chain = [];
    return str;
  }
};

module.exports = chainMaker;
