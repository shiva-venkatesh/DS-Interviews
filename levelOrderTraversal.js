function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var r = new TreeNode(1);
r.left = new TreeNode(2);
r.right = new TreeNode(3);
r.left.right = new TreeNode(5);

var printLevelOrderTraversal = function(root) {
  
}
