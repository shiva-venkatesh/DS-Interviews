console.log('Binary search');

let a = [1,3,5,7,9,11,13,15], s = 3;
let i = 0, mid = Math.floor(a.length/2);

while() {
  mid = Math.floor((left + right)/2);
  if(s<a[mid]) {
    right = mid - 1;
  } else if (s>a[mid]) {
    left = mid + 1;
  } else {
    console.log("Found it!");
    console.log('Required index is: ' + mid);
    break;
  }
}