function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

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

var r = new TreeNode(1);
r.left = new TreeNode(2);
r.right = new TreeNode(3);
r.left.right = new TreeNode(5);

var printLevelOrderTraversal = function(root) {
  let que = new Queue(root);
  let element = 0, i = 0, levels = {};
  while(que.q.length) {
    element = que.q.pop();
    if(element) console.log(element.val);
    if(element.left) que.q.push(element.left);
    if(element.right) que.q.push(element.right);
  }
}

printLevelOrderTraversal(r);
