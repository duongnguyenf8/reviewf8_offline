# Dương Review bài tập về nhà buổi 19 - Lớp K2

## [Tiến Đạt - K2](https://github.com/phamtiendat18/Fullstack-K2/blob/main/Day_19/js/script.js)

- [x] [Bài 1]

  Bài làm tốt\*

  Chưa tìm được vị trí của 2 số.

  Tuy nhiên có thể gộp chung vào 1 vòng lặp để code đỡ rối hơn.

  Cần chú ý lại cách khai báo biến. Với các biến không thay đổi, cần được khai báo bằng `const` để giúp code chặt chẽ hơn.

  ```js
  const numbers = [5, 2, 4, -10, 8, 9, 3];
  let maxValue = numbers[0];
  let minValue = numbers[0];

  numbers.forEach(function (number) {
    maxValue = maxValue < number ? number : maxValue;
    minValue = minValue > number ? number : minValue;
  });

  console.log(`Giá trị lớn nhất của mảng là: ${maxValue}`);
  console.log(`Giá trị nhỏ nhất của mảng là: ${minValue}`);
  ```

  ***

- [x] [Bài 2]

  Cần chú ý lại cách khai báo biến. Với các biến không thay đổi, cần được khai báo bằng `const` để giúp code chặt chẽ hơn.

  Bài làm tốt

  Code quá rối.

  Nên tách thành các hàm khác nhau xử lý các tác vụ khác nhau để code được tốt hơn.

  Ví dụ ở bài thì có 2 hàm là `isPrime`, `getTotal`.

  Với cách viết đoạn code check số nguyên tố, với các số to thì code chưa tối ưu.

  Có thể làm tốt hơn quy luật 6K+-1 và lặp từ số nguyên tố 5 trở đi.

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
  ```

  ***

- [x] [Bài 3]

  Cần chú ý lại cách khai báo biến. Với các biến không thay đổi, cần được khai báo bằng `const` để giúp code chặt chẽ hơn.

  Bài làm rất tốt\*

  ***

- [x] [Bài 4]

  Cần chú ý lại cách khai báo biến. Với các biến không thay đổi, cần được khai báo bằng `const` để giúp code chặt chẽ hơn.

  Bài làm sai yêu cầu.

  Với đề bài là sắp xếp theo thứ tự tăng dần trước, rồi chèn 1 phần tử vào đúng chỗ cần, sao cho thứ tự tăng dần không thay đổi.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt \*, tuy nhiên có thể làm tốt hơn với một số vòng lặp khác, tối ưu hơn với một số trường hợp khác.

## [Nguyen Thi Tuyet](https://github.com/xanhrii/k2-f8-fullstack-course/blob/master/rii_day19_js/ex_02/main.js)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Tuy nhiên với bài tập này, `forEach` có thể sẽ làm code đỡ rối hơn.

  ```js
  const numbers = [5, 2, 4, -10, 8, 9, 3];
  let maxValue = numbers[0];
  let minValue = numbers[0];
  let maxIndex = 0;
  let minIndex = 0;

  numbers.forEach(function (number, index) {
    if (maxValue < number) {
      maxValue = number;
      maxIndex = index;
    }
    if (minValue > number) {
      minValue = number;
      minIndex = index;
    }
  });
  console.log(
    `Giá trị lớn nhất của mảng là: ${maxValue} tại vị trí ${maxIndex}`
  );
  console.log(
    `Giá trị nhỏ nhất của mảng là: ${minValue} tại vị trí ${minIndex}`
  );
  ```

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  Nếu có thể, nên viết tên function và biến bằng tiếng anh để ngắn gọn và đẹp hơn.

  Với cách viết đoạn code check số nguyên tố, với các số to thì code chưa tối ưu.

  Có thể làm tốt hơn quy luật 6K+-1 và lặp từ số nguyên tố 5 trở đi.

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
  ```

  ***

- [x] [Bài 3]

  Bài làm rất tốt\*

  Với bài này, có thể code bằng filter sẽ giúp code ngắn gọn và dễ hiểu hơn.

  ```js
  const arr = [9, 42, 2, 16, 9, 2, 9, 22, -6, 4, 16, 4];
  const newArr = arr.filter((item, index) => arr.indexOf(item) === index);
  console.log(newArr);
  ```

  ***

- [x] [Bài 4]

  Bài làm sai yêu cầu.

  Với đề bài là sắp xếp theo thứ tự tăng dần trước, rồi chèn 1 phần tử vào đúng chỗ cần, sao cho thứ tự tăng dần không thay đổi.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt \*, tuy nhiên có thể làm tốt hơn với một số vòng lặp khác, tối ưu hơn với một số trường hợp khác.

## [Vũ Đức Tài](https://github.com/Apeiron2/F8-fullstack-K2/tree/main/homework/day_19)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Tuy nhiên chưa tìm được index của phần tử.

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  ***

- [x] [Bài 3]

  Bài làm rất tốt\*

  Với bài này, có thể code bằng filter sẽ giúp code ngắn gọn và dễ hiểu hơn.

  ```js
  const arr = [9, 42, 2, 16, 9, 2, 9, 22, -6, 4, 16, 4];
  const newArr = arr.filter((item, index) => arr.indexOf(item) === index);
  console.log(newArr);
  ```

  ***

- [x] [Bài 4]

  Bài làm tốt\*

  Các tên biến chưa được rõ ràng.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt \*, tuy nhiên có thể làm tốt hơn với một số vòng lặp khác nhau.

## [Thế Nguyễn Đại](https://github.com/daithehh04/fullstack/tree/main/day19)

- [x] [Bài 1]

  Bài làm rất tốt\*

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  Chưa rõ ý đồ khi viết

  ```js
  if (!!arrPrime.length) {
  }
  ```

  Tối ưu tốt hàm `isPrime(number)`. Tuy nhiên có thể làm tốt hơn quy luật 6K+-1 và lặp từ số nguyên tố 5 trở đi.

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
    for (let i = 5; i * i <= n; i += 6) if (n % i === 0) return false;
    return true;
  }
  ```

- [x] [Bài 3]

  Bài làm rất tốt\*

  ***

- [x] [Bài 4]

  Bài làm rất tốt\*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt \*

## [Hoàng Lâm](https://github.com/nvhlam2211/f8-fullstack/tree/main/day-19)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Tuy nhiên có thể tối ưu lại với 1 vòng lặp:

  ```js
  const numbers = [5, 2, 4, -10, 8, 9, 3];
  let maxValue = numbers[0];
  let minValue = numbers[0];

  numbers.forEach(function (number) {
    maxValue = maxValue < number ? number : maxValue;
    minValue = minValue > number ? number : minValue;
  });

  console.log(`Giá trị lớn nhất của mảng là: ${maxValue}`);
  console.log(`Giá trị nhỏ nhất của mảng là: ${minValue}`);
  ```

  ***

- [x] [Bài 2]

  Bài làm tốt\*

  Code quá rối.

  Nên tách thành các hàm khác nhau xử lý các tác vụ khác nhau để code được tốt hơn.

  Ví dụ ở bài thì có 2 hàm là `isPrime`, `getTotal`.

  Với cách viết đoạn code check số nguyên tố, với các số to thì code chưa tối ưu.

  Có thể làm tốt hơn quy luật 6K+-1 và lặp từ số nguyên tố 5 trở đi.

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
  ```

- [x] [Bài 3]

  Bài làm rất tốt\*

  Tuy nhiên nên sử dụng kiến thức đã học để luyện tập tốt hơn.

  ```js
  const arr = [9, 42, 2, 16, 9, 2, 9, 22, -6, 4, 16, 4];
  const newArr = arr.filter((item, index) => arr.indexOf(item) === index);
  console.log(newArr);
  ```

  ***

- [x] [Bài 4]

  Bài làm sai yêu cầu.

  Với đề bài là sắp xếp theo thứ tự tăng dần trước, rồi chèn 1 phần tử vào đúng chỗ cần, sao cho thứ tự tăng dần không thay đổi.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt\*, tuy nhiên với bài 4, cần hiểu rõ đề bài hơn.

## [Hồng Hà Nguyễn Thị](https://ha752002.github.io/f8-fullstack-k2/)

- [x] [Bài 1]

  Bài làm rất tốt\*

  ***

- [x] [Bài 2]

  Bài làm tốt\*

  Với tên biến là một array, nên biểu thị rõ, không nên đặt là `Prime`, có thể là `arrayPrime`...

  Nên tách thành 2 hàm để việc sử dụng, đọc hiểu được dễ hơn.

  Với cách viết đoạn code check số nguyên tố, với các số to thì code chưa tối ưu.

  Có thể làm tốt hơn quy luật 6K+-1 và lặp từ số nguyên tố 5 trở đi.

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
  ```

- [x] [Bài 3]

  Bài làm rất tốt\*

  ***

- [x] [Bài 4]

  Bài làm rất tốt

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt\*

## [Kiều Duy Tùng](https://stung16.github.io/ex_f8-fullstack/Day19)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Với các biến là hằng số, không thay đổi giá trị, không nên sử dụng `let`, nên sử dụng `const` để code được chặt chẽ hơn.

  Tuy nhiên có thể tối ưu lại với 1 vòng lặp:

  ```js
  const numbers = [5, 2, 4, -10, 8, 9, 3];
  let maxValue = numbers[0];
  let minValue = numbers[0];

  numbers.forEach(function (number) {
    maxValue = maxValue < number ? number : maxValue;
    minValue = minValue > number ? number : minValue;
  });

  console.log(`Giá trị lớn nhất của mảng là: ${maxValue}`);
  console.log(`Giá trị nhỏ nhất của mảng là: ${minValue}`);
  ```

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  Với cách viết đoạn code check số nguyên tố, với các số to thì code chưa tối ưu.

  Có thể làm tốt hơn quy luật 6K+-1 và lặp từ số nguyên tố 5 trở đi.

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
  ```

- [x] [Bài 3]

  Bài làm rất tốt\*

  ***

- [x] [Bài 4]

  Bài làm sai yêu cầu.

  Với đề bài là sắp xếp theo thứ tự tăng dần trước, rồi chèn 1 phần tử vào đúng chỗ cần, sao cho thứ tự tăng dần không thay đổi.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt\*, tuy nhiên với bài 4, cần hiểu rõ yêu cầu đề bài hơn.

## [Đoàn Duy Chinh](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-19)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Với các biến là hằng số, không thay đổi giá trị, không nên sử dụng `let`, nên sử dụng `const` để code được chặt chẽ hơn.

  Tuy nhiên có thể sử dụng forEach để bài làm đẹp hơn.

  ```js
  const numbers = [5, 2, 4, -10, 8, 9, 3];
  let maxValue = numbers[0];
  let minValue = numbers[0];

  numbers.forEach(function (number) {
    maxValue = maxValue < number ? number : maxValue;
    minValue = minValue > number ? number : minValue;
  });

  console.log(`Giá trị lớn nhất của mảng là: ${maxValue}`);
  console.log(`Giá trị nhỏ nhất của mảng là: ${minValue}`);
  ```

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  Với các biến là hằng số, không thay đổi giá trị, không nên sử dụng `let`, nên sử dụng `const` để code được chặt chẽ hơn.

  Với cách viết đoạn code check số nguyên tố, với các số to thì code chưa tối ưu.

  Có thể làm tốt hơn quy luật 6K+-1 và lặp từ số nguyên tố 5 trở đi.

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
  ```

- [x] [Bài 3]

  Bài làm rất tốt\*

  Với các biến là hằng số, không thay đổi giá trị, không nên sử dụng `let`, nên sử dụng `const` để code được chặt chẽ hơn.

  Nên sử dụng các kiến thức đã học để luyện tập tốt hơn.

  ```js
  const arr = [9, 42, 2, 16, 9, 2, 9, 22, -6, 4, 16, 4];
  const newArr = arr.filter((item, index) => arr.indexOf(item) === index);
  console.log(newArr);
  ```

  ***

- [x] [Bài 4]

  Bài làm rất tốt\*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt\*, tuy nhiên cần chú ý đến độ chặt chẽ khi viết code, nên sử dụng let, const hợp lý.

## [Duy Hiếu Nguyễn](https://hieuboss.github.io/F8-fullstack-k2/link/link.html)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Tuy nhiên có thể sử dụng forEach để bài làm đẹp hơn.

  ```js
  const numbers = [5, 2, 4, -10, 8, 9, 3];
  let maxValue = numbers[0];
  let minValue = numbers[0];

  numbers.forEach(function (number) {
    maxValue = maxValue < number ? number : maxValue;
    minValue = minValue > number ? number : minValue;
  });

  console.log(`Giá trị lớn nhất của mảng là: ${maxValue}`);
  console.log(`Giá trị nhỏ nhất của mảng là: ${minValue}`);
  ```

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  Với cách viết đoạn code check số nguyên tố, với các số to thì code chưa tối ưu.

  Có thể làm tốt hơn quy luật 6K+-1 và lặp từ số nguyên tố 5 trở đi.

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
  ```

- [x] [Bài 3]

  Bài làm rất tốt\*

  ***

- [x] [Bài 4]

  Bài làm rất tốt\*

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt\*

## [Nguyễn Văn Đức](https://github.com/Poyken/Js/blob/main/day19/ex)

- [x] [Bài 1]

  Bài làm tốt\*

  Tuy nhiên có thể gộp chung thành 1 vòng lặp và sử dụng forEach để bài làm đẹp hơn.

  ```js
  const numbers = [5, 2, 4, -10, 8, 9, 3];
  let maxValue = numbers[0];
  let minValue = numbers[0];

  numbers.forEach(function (number) {
    maxValue = maxValue < number ? number : maxValue;
    minValue = minValue > number ? number : minValue;
  });

  console.log(`Giá trị lớn nhất của mảng là: ${maxValue}`);
  console.log(`Giá trị nhỏ nhất của mảng là: ${minValue}`);
  ```

  ***

- [x] [Bài 2]

  Bài làm rất tốt\*

  Với cách viết đoạn code check số nguyên tố, với các số to thì code chưa tối ưu.

  Có thể làm tốt hơn quy luật 6K+-1 và lặp từ số nguyên tố 5 trở đi.

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
  ```

- [x] [Bài 3]

  Bài làm rất tốt\*

  ***

- [x] [Bài 4]

  Bài làm sai yêu cầu.

  Với đề bài là sắp xếp theo thứ tự tăng dần trước, rồi chèn 1 phần tử vào đúng chỗ cần, sao cho thứ tự tăng dần không thay đổi.

  ***

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt\*, tuy nhiên với bài 4, cần hiểu rõ yêu cầu đề bài hơn.
