/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

var hasPathSum = function(root, sum) {
  var s = [], pathArray = [], pathSum = 0;
  var checkPathSum = function(node, sum) {
    if(!node) return;
    s.push(node.val);
    if(!node.left && !node.right) {
      console.log('Leaf node found: ' + node.val);
      pathSum = s.reduce((a, b) => a + b, 0)
      if(pathSum === sum) {
        pathArray = s.slice();
      }
    }
    checkPathSum(node.left, sum);
    checkPathSum(node.right, sum);
    s.pop();
  }
  checkPathSum(root, sum);
  console.log(pathArray);
  var result = pathArray.length>0 ? true : false;
  return result;
};