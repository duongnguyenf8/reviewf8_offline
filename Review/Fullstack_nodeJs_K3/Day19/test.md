**Bài 1**

```js
var numbers = [5, 2, 4, -10, 8, 9, 3];
var maxValue = numbers[0];
var minValue = numbers[0];
var positionMin = numbers[0];
var positionMax = numbers[0];

numbers.forEach(function (number) {
  maxValue = maxValue < number ? number : maxValue;
  minValue = minValue > number ? number : minValue;
  number > maxValue ? (positionMax = number) : (positionMin = number);
});

console.log(
  `
Giá trị lớn nhất của mảng là: ${maxValue}
    - vị trí index: ${positionMax}
`,
  `
Giá trị nhỏ nhất của mảng là: ${minValue}
    - vị trí index: ${positionMin}
`
);
```

---

**Bài 2**

**Quy luật 6K+-1**:

```shell
5 = 6 * 1 - 1        7 = 6 * 1 + 1        11 = 6 * 1 - 1
13 = 6 * 1 + 1        17 = 6 * 3 - 1          19 = 6 * 3 + 1
```

Đề xuất sửa thành:

```javascript
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0) return false;
  }
  return true;
}

var array = [1, 0, 2, 3, 6, 8, 5, 7, 11, 13, 99, 9007199254740881];

console.log(array.filter(isPrime));
```

---

**Bài 3**

```js
var arr = ["a", "b", "c", "a", "b", "c"];
var finalArr = [];

arr.forEach((val) => !finalArr.includes(val) && finalArr.push(val));

console.log(finalArr);
```

---

**Bài 4**

```js
function insertSorted(numbers, element) {
  numbers.sort((a, b) => a - b);
  for (let i = 0; i < numbers.length; i++) {
    if (element <= numbers[i]) {
      numbers.splice(i, 0, element);
      break;
    }
  }
  return numbers;
}

var numbers = [5, 1, 9, 8, 10];
var element = 4;
console.log(insertSorted(numbers, element));
```
