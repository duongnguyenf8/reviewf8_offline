var arr1 = [3, -14, 1, 9, -8, 10];
var num = 1;
var insertIndex = 2;

var sortArr = function (arr) {
  return arr.sort((a, b) => a - b);
};

var insertNum = function (arr, num, index) {
  if (index === 0) {
    arr.unshift(num);
  } else if (index >= arr.length) {
    arr.push(num);
  } else {
    var leftSliceArr = arr.slice(0, index);
    var rightSliceArr = arr.slice(index);
    arr = [];
    arr = arr.concat(leftSliceArr, num, rightSliceArr);
  }
  return sortArr(arr);
};

console.log(arr1);
console.log(insertNum(arr1, num, insertIndex));
