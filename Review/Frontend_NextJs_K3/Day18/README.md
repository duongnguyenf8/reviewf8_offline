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

## [Vũ Thành Khang](https://github.com/countduck4819/f8-frontend/tree/main/Day18)

- [x] [Bài 1]

  Bài làm tốt\*

  Bài làm chưa kiểm tra một số trường hợp đặc biệt sau:

  - Đề bài yêu cầu mảng này phải chứa các số nguyên, nên cần kiểm tra mỗi phần tử trong mảng phải là số nguyên.

  - Đầu vào là một mảng rỗng.

  - Đầu vào không phải là mảng.

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

  Bài làm tốt.

  Tuy nhiên cần kiểm tra đầu vào phải là một mảng thì sẽ chặt chẽ hơn.

  Bài làm chưa xử lý trường hợp các phần tử trong mảng là `string`. Hiện tại nếu Input là `[1, "a", "a"]` thì sẽ nhận được kết quả là: `[1, a, a]`. Cần xử lý tốt hơn trong trường hợp này.

  Cần chú ý về việc đặt tên hàm theo đúng quy tắc camelCase và ưu tiên đặt Tiếng Anh.

  Có thể tham khảo cách làm sau đây:

  ```js
  var arr = ["a", "b", "c", "a", "b", "c"];
  var finalArr = [];

  arr.forEach((val) => !finalArr.includes(val) && finalArr.push(val));

  console.log(finalArr);
  ```

  ***

- [x] [Bài 4]

  Bài làm chưa tốt.

  Đề bài yêu cầu sắp xếp mảng đã cho trước rồi mới thêm phần tử vào mảng đúng vị trí đảm bảo theo thứ tự tăng dần chứ không phải là thêm phần tử vào cuối mảng rồi sắp xếp.

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

  ***

- [x] Đánh giá chung bài tập về nhà:

  Bài làm tốt, tuy nhiên cần chú ý về các trường hợp đặc biệt có thể xảy ra của đầu vào, cần chú ý về việc đặt tên hàm và thực hiện đúng yêu cầu bài toán để hoàn thiện hơn.

---

## [Thuy Nguyen](https://github.com/tnnhungoc/F8-FE-K3/tree/main/FEK3/Day18_JS)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Tuy nhiên, nên sử dụng vòng lặp chứ không phải một hàm để luyện tập tốt hơn.

  Có thể tham khảo cách làm sau đây.

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

  Hoặc có thể sử dụng `forEach` để bài làm ngắn gọn hơn.

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

- [x] [Bài 3]

  Bài làm rất tốt\*

  Tuy nhiên, nên sử dụng vòng lặp chứ không phải một hàm để luyện tập tốt hơn.

  Có thể tham khảo cách làm với `forEach`:

  ```js
  var arr = ["a", "b", "c", "a", "b", "c"];
  var finalArr = [];

  arr.forEach((val) => !finalArr.includes(val) && finalArr.push(val));

  console.log(finalArr);
  ```

  ***

- [x] [Bài 4]

  Bài làm chưa tốt.

  Đề bài yêu cầu sắp xếp mảng đã cho trước rồi mới thêm phần tử vào mảng đúng vị trí đảm bảo theo thứ tự tăng dần chứ không phải là thêm phần tử vào cuối mảng rồi sắp xếp.

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

  Bài làm rất tốt, tuy nhiên cần sử dụng vòng lặp để có thể củng cố và luyện tập tốt hơn, ngoài ra cần lưu ý yêu cầu đề bài của bài 4 để hoàn thiện hơn.

---

## [Gia Bảo Đỗ](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Javascript/Day18)

- [x] [Bài 1]

  Bài làm tốt\*

  Bài làm chưa kiểm tra một số trường hợp đặc biệt sau:

  - Đề bài yêu cầu mảng này phải chứa các số nguyên, nên cần kiểm tra mỗi phần tử trong mảng phải là số nguyên.

  - Đầu vào là một mảng rỗng.

  - Đầu vào không phải là mảng.

  Có thể tham khảo cách làm sau:

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

  Bài làm chưa tốt.

  Đề bài yêu cầu tính trung bình cộng các số nguyên tố chứ không phải tính tổng các số nguyên tố.

  Cần xem lại công thức tính trung bình cộng để xử lý cho hợp lý hơn.

  ***

- [x] [Bài 3]

  Bài làm tốt\*.

  Cần giữ cho đầu ra thu được luôn là mảng sau khi loại bỏ các phần tử trùng nhau. Hiện tại đầu ra thu được là `string`.

  ***

- [x] [Bài 4]

  Bài làm chưa tốt.

  Đề bài yêu cầu sắp xếp mảng đã cho trước rồi mới thêm phần tử vào mảng đúng vị trí đảm bảo theo thứ tự tăng dần chứ không phải là thêm phần tử vào cuối mảng rồi sắp xếp.

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

  Bài làm tốt, tuy nhiên cần xét các trường hợp có thể xảy ra ở đầu vào và cần chú ý yêu cầu của bài 2 là tính trung bình cộng, ngoài ra cần đọc kỹ yêu cầu của bài 4 để hoàn thiện hơn.

## [Đỗ Ngọc Tiến](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/javascript/Day_4/js/main.js)

- [x] [Bài 1]

  Bài làm tốt\*

  Bài làm chưa kiểm tra một số trường hợp đặc biệt sau:

  - Đề bài yêu cầu mảng này phải chứa các số nguyên, nên cần kiểm tra mỗi phần tử trong mảng phải là số nguyên.

  - Đầu vào là một mảng rỗng.

  - Đầu vào không phải là mảng.

  Có thể tham khảo cách làm sau:

  Có thể tham khảo sử dụng `forEach` để bài làm ngắn gọn hơn.

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

- [x] [Bài 2]

  Bài làm tốt.

  Không cần thiết phải sử dụng biến count

  Có thể tối ưu, viết ngắn gọn và dễ hiểu hơn phần kiểm tra số nguyên tố với `filter` và hàm `isPrime` mới áp dụng quy luật **6K+-1**

  **Quy luật 6K+-1**:

  ```shell
  5 = 6 * 1 - 1        7 = 6 * 1 + 1        11 = 6 * 1 - 1
  13 = 6 * 1 + 1        17 = 6 * 3 - 1          19 = 6 * 3 + 1
  ```

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

- [x] [Bài 3]

  Bài làm tốt\*

  Tên biến nên đặt một cách ngắn gọn hơn bằng tiếng anh để code đỡ rối hơn.

  Có thể rút ngắn hơn với `forEach`

  ```js
  var arr = ["a", "b", "c", "a", "b", "c"];
  var finalArr = [];

  arr.forEach((val) => !finalArr.includes(val) && finalArr.push(val));

  console.log(finalArr);
  ```

  ***

- [x] [Bài 4]

  Bài làm tốt\*

  Tên biến, tên hàm nên đặt một cách ngắn gọn hơn bằng tiếng anh để code đỡ rối hơn.

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

  Bài làm tốt, tuy nhiên cần xét các trường hợp có thể xảy ra ở đầu vào và nên tìm hiểu thêm về các phương thức của mảng để bài tập làm tốt hơn.

---

## [Nguyen Van Hai](https://github.com/hainvsp9x/f8-feoffline-k3/blob/main/javascript/day-18)

- [x] [Bài 1]

  Bài làm tốt\*

  Bài làm chưa kiểm tra một số trường hợp đặc biệt sau:

  - Đề bài yêu cầu mảng này phải chứa các số nguyên, nên cần kiểm tra mỗi phần tử trong mảng phải là số nguyên.

  - Đầu vào là một mảng rỗng.

  - Đầu vào không phải là mảng.

  Có thể tham khảo cách làm sau:

  Có thể tham khảo sử dụng `forEach` để bài làm ngắn gọn hơn.

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

- [x] [Bài 2]

  Bài làm tốt.

  Không cần thiết phải sử dụng biến count

  Có thể tối ưu, viết ngắn gọn và dễ hiểu hơn phần kiểm tra số nguyên tố với `filter` và hàm `isPrime` mới áp dụng quy luật **6K+-1**

  **Quy luật 6K+-1**:

  ```shell
  5 = 6 * 1 - 1        7 = 6 * 1 + 1        11 = 6 * 1 - 1
  13 = 6 * 1 + 1        17 = 6 * 3 - 1          19 = 6 * 3 + 1
  ```

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

- [x] [Bài 3]

  Bài làm tốt\*

  Tuy nhiên, có thể rút ngắn hơn với `forEach`

  ```js
  var arr = ["a", "b", "c", "a", "b", "c"];
  var finalArr = [];

  arr.forEach((val) => !finalArr.includes(val) && finalArr.push(val));

  console.log(finalArr);
  ```

  ***

- [x] [Bài 4]

  Bài làm chưa tốt\*

  Cần sắp xếp trước, sau đó mới thêm phần tử dựa theo thứ tự đã sắp xếp.

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

  Bài làm tốt, tuy nhiên cần xét các trường hợp có thể xảy ra ở đầu vào và nên tìm hiểu thêm về các phương thức của mảng để bài tập làm tốt hơn.

---
