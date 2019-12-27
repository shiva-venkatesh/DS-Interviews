// Queues are FIFO structures

var Queue = function(headValue) {
  this.head = headValue;
  this.q = [this.head];
}

Queue.prototype.push = function(val) {
  this.q.push(val);
}

Queue.prototype.pop = function() {
  this.q.shift();
}

Queue.prototype.size = function() {
  return this.q.length;
}

Queue.prototype.print = function() {
  this.q.map((e) => {
    return console.log(e);
  })
}

var q1 = new Queue(5);
q1.push(4);
q1.push(6);
q1.push(8);
q1.print();

console.log('starts popping')
q1.pop();
q1.print();

