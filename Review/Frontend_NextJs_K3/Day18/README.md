# Dương review bài tập về nhà lớp FE-K3

## [Nguyễn Đức Hải](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-18)

- [x] [Bài 1]

  Bài làm rất tốt \*

  Có thể sử dụng `forEach` để bài làm ngắn gọn hơn.

  ```js
  var numbers = [5, 2, 4, -10, 8, 9, 10, 99, -99, 3];
  var maxValue = numbers[0];
  var minValue = numbers[0];
  var positionMin = numbers[0];
  var positionMax = numbers[0];

  numbers.forEach(function (number) {
    maxValue = maxValue < number ? number : maxValue;
    minValue = minValue > number ? number : minValue;
    positionMax = numbers.indexOf(maxValue);
    positionMin = numbers.indexOf(minValue);
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

  ***

- [x] [Bài 2]:

  Bài làm rất tốt \*

  Tuy nhiên với reduce, có thể làm ngắn gọn hơn:

  Đề xuất sửa thành:

  ```javascript
  var array = [1, 0, 2, 3, 6, 8, 5, 7, 11, 13, 99, 9007199254740881];

  function isPrime(n) {
    if (n <= 1 || n % 1 !== 0) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (var i = 5; i * i <= n; i += 6) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function getAverage(array) {
    if (!array.length) return "Không có số nguyên tố";
    var sum = array.reduce(function (prev, value) {
      return prev + value;
    });
    return sum / array.length;
  }
  var average = getAverage(array.filter(isPrime));
  console.log(average);
  ```

  ***

- [x] [Bài 3]:

  Bài làm rất tốt\*

  Tuy nhiên có thể rút ngắn hơn với `forEach`

  ```js
  var arr = ["a", "b", "c", "a", "b", "c"];
  var finalArr = [];

  arr.forEach((val) => !finalArr.includes(val) && finalArr.push(val));

  console.log(finalArr);
  ```

  ***

- [x] [Bài 4]:

  Bài làm rất tốt\*

  Tuy nhiên có thể tối ưu, rút ngắn lại với một số phương thức của mảng

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

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên chưa áp dụng được nhiều phương thức có sẵn của mảng, chưa khai thác được hết sức mạnh của các phương thức đó. Nên sử dụng nhiều hơn.

---
