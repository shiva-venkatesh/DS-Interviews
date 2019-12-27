function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var r = new TreeNode(1);
r.left = new TreeNode(2);
r.right = new TreeNode(3);
r.left.right = new TreeNode(5);

var s = [];

var findPath = function(root, key) {
  if(!root) return;
  s.push(root.val);
  // console.log('s is now: ' + s);
  if(root.val === key) {
    console.log('Path to given node is: ' + s);
  }
  findPath(root.left, key);
  findPath(root.right, key);
  s.pop();
}

// console.log('Root is:', r);
findPath(r, 2);
