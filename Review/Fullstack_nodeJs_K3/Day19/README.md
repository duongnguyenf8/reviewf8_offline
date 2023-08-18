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

## [Đỗ Văn Khoa](https://mrkhoadev.github.io/F8-Fullstack-K3/)

- [x] [Bài 1]

  Bài làm tốt\*

  Hiện tại bài làm đang hiển thị vị trí của số lớn nhất và nhỏ nhất tính từ vị trí đầu tiên là vị trí thứ 1, điều này đối với mảng sẽ gây hiểu nhầm, nên ghi theo index của phần tử đó trong mảng sẽ hợp lý hơn.

  Hiện tại khi test các trường hợp đặc biệt như:

  - Đầu vào là mảng rỗng.

  - Trong mảng tồn tại giá trị không phải là số nguyên.

  Đều chưa hiển thị thông báo trên giao diện cho người dùng. Vì hiện tại đang có lỗi `text is not defined` ở trên giao diện, cần xem lại.

  Có thể tham khảo cách sau đây:

  ```js
  function MaxAndMin(array) {
    var max;
    var min;
    var indexMax = 0;
    var indexMin = 0;
    if (array.length > 0) {
      max = array[0];
      min = array[0];
      for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
          max = array[i];
          indexMax = i;
        }
        if (min > array[i]) {
          min = array[i];
          indexMin = i;
        }
      }
      console.log(`giá trị max là : ${max} vị trí index ${indexMax}`);
      console.log(`giá trị min là : ${min} vị trí index ${indexMin}`);
    } else {
      console.log("danh sách rỗng");
    }
  }
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

## [Vương Đông](https://github.com/DongVuong/f8-fullstack-k3/tree/main/DAY19)

- [x] [Bài 1]

  Bài làm tốt\*

  Hiện tại bài làm đang hiển thị vị trí của số lớn nhất và nhỏ nhất tính từ vị trí đầu tiên là vị trí thứ 1, điều này đối với mảng sẽ gây hiểu nhầm, nên ghi theo index của phần tử đó trong mảng sẽ hợp lý hơn.

  Cụ thể: `max la ${resultMax} tai vi tri index là: ${positionMax}`

  Bài làm chưa kiểm tra một số trường hợp đặc biệt sau:

  - Đề bài yêu cầu mảng này phải chứa các số nguyên, nên cần kiểm tra mỗi phần tử trong mảng phải là số nguyên.

  - Đầu vào là một mảng rỗng.

  - Đầu vào không phải là mảng.

  ***

- [x] [Bài 2]

  Bài làm rất tốt \*

  ***

- [x] [Bài 3]

  Bài làm rất tốt\*

  Tuy nhiên cần kiểm tra đầu vào phải là một mảng thì sẽ chặt chẽ hơn.

  ***

- [x] [Bài 4]

  Bài làm rất tốt\*

  Tuy nhiên có thể tối ưu, rút ngắn lại với một số phương thức của mảng.

  ***

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt, tuy nhiên cần lưu ý kiểm tra kỹ các điều kiện đầu vào của một số trường hợp đặc biệt có thể xảy ra để hoàn chỉnh hơn.

---

## [Lê Quốc Khánh](https://github.com/lekhanhdhpt/F8-Fullstack-K3/tree/main/JS-Day-19)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Tuy nhiên, bài làm chưa xét đến trường hợp mảng đầu vào là mảng rỗng thì nên thông báo lỗi rõ ràng, cụ thể sẽ chặt chẽ hơn. Vì hiện tại nếu mảng đầu vào là mảng rỗng thì sẽ thu được kết quả là:

  `Số lớn nhất là: undefined`, `Vị trí của số lớn nhất là: -1`.

  Có thể sử dụng một vòng `forEach` để bài làm ngắn gọn hơn.

  ***

- [x] [Bài 2]

  Bài làm rất tốt \*

  Có thể tối ưu số lần lặp bằng cách sau:

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

  Bài làm tốt\*

  Đầu ra mong muốn mà đề bài yêu cầu là một mảng sau khi đã lọc các phần tử giống nhau. Tuy nhiên hiện tại đầu ra của bài làm đang là các chuỗi nên không đúng với yêu cầu đề bài.

  Có thể rút ngắn hơn với `forEach`:

  ```js
  var arr = ["a", "b", "c", "a", "b", "c"];
  var finalArr = [];

  arr.forEach((val) => !finalArr.includes(val) && finalArr.push(val));

  console.log(finalArr);
  ```

  ***

- [x] [Bài 4]

  Bài làm tốt\*

  Đầu ra cần đảm bảo vẫn là mảng mới sau khi đã thêm và sắp xếp các phần tử.

  Có thể tối ưu, rút ngắn lại với một số phương thức của mảng

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

  Bài làm tốt, cần lưu ý một số trường hợp đặc biệt của đầu vào và cần đảm bảo đầu ra vẫn giữ nguyên kiểu dữ liệu theo yêu cầu của đề bài.

---

## [Nguyễn Đức](https://github.com/Nguyenduc2108/f8-fullstack-k3/tree/main/Homework_session_19)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Tuy nhiên, cần đảm bảo các phần tử trong mảng đầu vào phải là số nguyên. Hiện tại bài làm chưa xét đến trường hợp này.

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

  **Chưa làm**

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt, tuy nhiên cần xét các trường hợp có thể xảy ra ở đầu vào và cần hoàn thiện bài tập về nhà trước khi nộp, nếu gặp khó khăn cần đặt câu hỏi để được trợ giúp hoàn thiện bài tập về nhà.

---

## [Minh Phạm](https://github.com/Minh0314/F8-K3/tree/main/Day19)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Tuy nhiên, chưa xét trường hợp đầu vào là mảng rỗng. Hiện tại nếu đầu vào là mảng rỗng thì kết quả thu được sẽ là: `Số lớn nhất là:undefined ở vị trí: 0`.

  Và cần đảm bảo các phần tử trong mảng đầu vào phải là số nguyên để thỏa mãn yêu cầu đề bài sẽ chặt chẽ hơn.

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

  **Chưa làm**

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt, tuy nhiên cần xét các trường hợp có thể xảy ra ở đầu vào và cần hoàn thiện bài tập về nhà trước khi nộp, nếu gặp khó khăn cần đặt câu hỏi để được trợ giúp hoàn thiện bài tập về nhà.

---

## [Vũ Thống](https://github.com/pencilbsp/f8_offline/tree/main/BTVN/btvn_buoi_19)

- [x] [Bài 1]

  Bài làm tốt\*

  Tuy nhiên, cần xét đến trường hợp mảng đầu vào là mảng rỗng. Hiện tại nếu đầu vào là mảng rỗng thì kết quả thu được sẽ là: `Số lớn nhất: undefined, index: 0`.

  Và cần đảm bảo các phần tử trong mảng đầu vào phải là số nguyên để thỏa mãn yêu cầu đề bài sẽ chặt chẽ hơn.

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

  Bài làm chưa tốt.

  Đề bài yêu cầu sắp xếp mảng đã cho trước rồi mới thêm phần tử vào mảng đúng vị trí đảm bảo theo thứ tự tăng dần.

  Có thể tham khảo cách làm sau đây:

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

  Bài làm tốt, tuy nhiên cần lưu ý một số trường hợp đặc biệt có thể xảy ra ở đầu vào, và cần lưu ý cách làm ở bài 4.

---
