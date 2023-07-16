var arr = [
  [1,"a", true],
  ["b", 2, false],
];

var seperateArray = arr.reduce(function (prev, curr) {
  curr.forEach(function (value, i) {
    if (prev[i] === undefined) {
      prev[i] = [];
    }
    prev[i].push(value);
  });
  return prev;
}, []);

console.log(seperateArray);
