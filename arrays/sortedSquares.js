/**
 * @param {number[]} A
 * @return {number[]}
 */

 // https://leetcode.com/problems/squares-of-a-sorted-array/submissions/
var sortedSquares = function(A) {
    if(A.length) {
      let dupA = A.slice();
        dupA.map((e, i) => {
            if(e<0) { e = e*(-1); }
            dupA[i] = e;
        });
        dupA.map((m, j) => {
            m = m*m;
            dupA[j] = m;
        });
        dupA = dupA.sort((x,y) => x-y);
        return dupA;
    }
    return null;
};
