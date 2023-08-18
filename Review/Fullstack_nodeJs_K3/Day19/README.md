# Dương Review bài tập về nhà buổi 19 - Lớp K3

## [Phí Văn Đức](https://github.com/PhiVanDuc/Offline-F8-K3/tree/main/Day-19-JS)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Có thể sử dụng `forEach` để bài làm ngắn gọn hơn.

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

  ***

- [x] [Bài 2]

  Bài làm rất tốt \*

  Có thể tối ưu, viết ngắn gọn và dễ hiểu hơn phần kiểm tra số nguyên tố với `filter` và hàm `isPrime` mới áp dụng quy luật **6K+-1**

  **Quy luật 6K+-1**:

  ```shell
  5 = 6 * 1 - 1        7 = 6 * 1 + 1        11 = 6 * 1 - 1
  13 = 6 * 1 + 1        17 = 6 * 3 - 1          19 = 6 * 3 + 1
  ```

  Đề xuất sửa thành:

  ```javascript
  function isPrime(n) {
    if (n <= 1 || n % 1 !== 0) return false;
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

  ***

- [x] [Bài 3]

  Bài làm rất tốt\*

  Tuy nhiên có thể rút ngắn hơn với `forEach`

  ```js
  var arr = ["a", "b", "c", "a", "b", "c"];
  var finalArr = [];

  arr.forEach((val) => !finalArr.includes(val) && finalArr.push(val));

  console.log(finalArr);
  ```

  ***

- [x] [Bài 4]

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

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt, tuy nhiên có thể tối ưu và rút ngắn hơn, dễ hiểu hơn với các phương thức của mảng đã cho trước.

---

## [Nguyễn Quang Cường](https://github.com/cuonggold2408/Fullxinach_K3/blob/main/Day_19)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Có thể sử dụng `forEach` để bài làm ngắn gọn hơn.

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

  ***

- [x] [Bài 2]

  Bài làm rất tốt \*

  Tên hàm nên là một hành động, không nên đặt là `prime`

  Có thể tối ưu, viết ngắn gọn và dễ hiểu hơn phần kiểm tra số nguyên tố với `filter` và hàm `isPrime` mới áp dụng quy luật **6K+-1**

  **Quy luật 6K+-1**:

  ```shell
  5 = 6 * 1 - 1        7 = 6 * 1 + 1        11 = 6 * 1 - 1
  13 = 6 * 1 + 1        17 = 6 * 3 - 1          19 = 6 * 3 + 1
  ```

  Đề xuất sửa thành:

  ```javascript
  function isPrime(n) {
    if (n <= 1 || n % 1 !== 0) return false;
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

  ***

- [x] [Bài 3]

  Bài làm rất tốt\*

  Có thể tham khảo cách rút ngắn hơn với `forEach`

  ```js
  var arr = ["a", "b", "c", "a", "b", "c"];
  var finalArr = [];

  arr.forEach((val) => !finalArr.includes(val) && finalArr.push(val));

  console.log(finalArr);
  ```

  ***

- [x] [Bài 4]

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

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt, tuy nhiên có thể tối ưu và rút ngắn hơn, dễ hiểu hơn với các phương thức của mảng đã cho trước.

---

## [Trần Xuân Bách](https://github.com/bach0128/f8-fullstack-k3/blob/main/Day19/base.js)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Có thể sử dụng `forEach` để bài làm ngắn gọn hơn.

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

  ***

- [x] [Bài 2]

  Bài làm rất tốt \*

  Có thể tối ưu, viết ngắn gọn và dễ hiểu hơn phần kiểm tra số nguyên tố với `filter` và hàm `isPrime` mới áp dụng quy luật **6K+-1**

  **Quy luật 6K+-1**:

  ```shell
  5 = 6 * 1 - 1        7 = 6 * 1 + 1        11 = 6 * 1 - 1
  13 = 6 * 1 + 1        17 = 6 * 3 - 1          19 = 6 * 3 + 1
  ```

  Đề xuất sửa thành:

  ```javascript
  function isPrime(n) {
    if (n <= 1 || n % 1 !== 0) return false;
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

  ***

- [x] [Bài 3]

  Bài làm rất tốt\*

  Tuy nhiên có thể rút ngắn hơn với `forEach`

  ```js
  var arr = ["a", "b", "c", "a", "b", "c"];
  var finalArr = [];

  arr.forEach((val) => !finalArr.includes(val) && finalArr.push(val));

  console.log(finalArr);
  ```

  ***

- [x] [Bài 4]

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

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt, tuy nhiên có thể tối ưu và rút ngắn hơn, dễ hiểu hơn với các phương thức của mảng đã cho trước.

---

## [Hữu Hưng](https://github.com/HuuHungg/f8-javascript/blob/main/Day4)

- [x] [Bài 1]

  Bài làm tốt\*

  Có thể sử dụng một vòng `forEach` để bài làm ngắn gọn hơn.

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

  ***

- [x] [Bài 2]

  Bài làm rất tốt \*

  ***

- [x] [Bài 3]

  Bài làm rất tốt\*

  Tuy nhiên có thể rút ngắn hơn với `forEach`

  ```js
  var arr = ["a", "b", "c", "a", "b", "c"];
  var finalArr = [];

  arr.forEach((val) => !finalArr.includes(val) && finalArr.push(val));

  console.log(finalArr);
  ```

  ***

- [x] [Bài 4]

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

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt, tuy nhiên có thể tối ưu và rút ngắn hơn, dễ hiểu hơn với các phương thức của mảng đã cho trước.

---

## [NTiến Đạt](https://github.com/HuuHungg/f8-javascript/blob/main/Day4)

- [x] [Bài 1]

  Bài làm tốt\*

  Có thể sử dụng một vòng `forEach` để bài làm ngắn gọn hơn.

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

  ***

- [x] [Bài 2]

  Bài làm chưa tốt \*

  Bài làm yêu cầu tính trung bình cộng thay vì tổng.

  ***

- [x] [Bài 3]

  Bài làm rất tốt\*

  Tuy nhiên có thể rút ngắn hơn với `forEach`

  ```js
  var arr = ["a", "b", "c", "a", "b", "c"];
  var finalArr = [];

  arr.forEach((val) => !finalArr.includes(val) && finalArr.push(val));

  console.log(finalArr);
  ```

  ***

- [x] [Bài 4]

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

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt, tuy nhiên có thể tối ưu và rút ngắn hơn, dễ hiểu hơn với các phương thức của mảng đã cho trước.

---
