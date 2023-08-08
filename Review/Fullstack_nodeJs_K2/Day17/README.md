# Dương review bài tập về nhà buổi 17 - Lớp K2

## [Đoàn Duy Chinh](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-17)

    Chưa có github pages

- [x] [Bài 1](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-17):

  Bài làm rất tốt \*

  Tuy nhiên, các phép tính viết vẫn còn thủ công, rất khó để thêm hoặc bảo trì.

  Các phép tính đang lặp lại, nên tách thành một hàm riêng để tái sử dụng và truyền vào.

- [x] [Bài 2](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-17):

  Bài làm tốt \*

  Tuy nhiên, các phép tính viết vẫn còn thủ công, rất khó để thêm hoặc bảo trì.

  Các phép tính đang lặp lại nhiều lần, nên tách thành một hàm riêng để tái sử dụng và truyền vào.

  ```js
  function TotalBill(kWh) {
    if (kWh <= 0) {
      console.log(`Số kWh nhập vào phải lớn hơn 0!`);
      return;
    }
    let totalBill = 0;
    function calculate(upperLimit, price) {
      const used_kWh = Math.min(kWh, upperLimit);
      totalBill += used_kWh * price;
      kWh -= used_kWh;
    }
    calculate(50, 1678); // 50kWh đầu tiên
    calculate(50, 1734); // Từ kWh 51 - 100
    calculate(100, 2014); // Từ kWh 101 - 200
    calculate(100, 2536); // Từ kWh 201 - 300
    calculate(100, 2834); // Từ kWh 301 - 400
    calculate(Infinity, 2927); // Từ kWh 401 trở đi
    return totalBill;
  }
  console.log(`Tổng số tiền điện phải đóng tháng này là: ${TotalBill(300)}đ`);
  ```

- [x] [Bài 3](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-17):

  Bài làm rất tốt \*

- [x] [Bài 4](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-17):

  Bài làm rất tốt \*

  Tuy nhiên với các số to hơn, chưa thể tối ưu tốt. Dưới đây là cách tốt hơn.

  ```js
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }
  console.log("isPrime(number)", isPrime(9007199254740881));
  ```

- [x] [Bài 5](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-17):

  Bài làm rất tốt \*

- [x] [Bài 6](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-17):

  Bài làm rất tốt \*

- [x] [Bài 7](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-17):

  Bài làm rất tốt \*

- [x] [Bài 8](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-17):

  Bài làm rất tốt \*

---

## [Thế Nguyễn Đại](https://github.com/daithehh04/fullstack/tree/main/day17)

- [x] [Bài 1](https://github.com/daithehh04/fullstack/tree/main/day17):

  Bài làm rất tốt \*

  Tuy nhiên, các phép tính viết vẫn còn thủ công, rất khó để thêm hoặc bảo trì.

  Các phép tính đang lặp lại, nên tách thành một hàm riêng để tái sử dụng và truyền vào.

- [x] [Bài 2](https://github.com/daithehh04/fullstack/tree/main/day17):

  Bài làm tốt \*

  Tuy nhiên, các phép tính viết vẫn còn thủ công, rất khó để thêm hoặc bảo trì.

  Các phép tính đang lặp lại nhiều lần, nên tách thành một hàm riêng để tái sử dụng và truyền vào.

  ```js
  function TotalBill(kWh) {
    if (kWh <= 0) {
      console.log(`Số kWh nhập vào phải lớn hơn 0!`);
      return;
    }
    let totalBill = 0;
    function calculate(upperLimit, price) {
      const used_kWh = Math.min(kWh, upperLimit);
      totalBill += used_kWh * price;
      kWh -= used_kWh;
    }
    calculate(50, 1678); // 50kWh đầu tiên
    calculate(50, 1734); // Từ kWh 51 - 100
    calculate(100, 2014); // Từ kWh 101 - 200
    calculate(100, 2536); // Từ kWh 201 - 300
    calculate(100, 2834); // Từ kWh 301 - 400
    calculate(Infinity, 2927); // Từ kWh 401 trở đi
    return totalBill;
  }
  console.log(`Tổng số tiền điện phải đóng tháng này là: ${TotalBill(300)}đ`);
  ```

- [x] [Bài 3](https://github.com/daithehh04/fullstack/tree/main/day17):

  Bài làm rất tốt \*

- [x] [Bài 4](https://github.com/daithehh04/fullstack/tree/main/day17):

  Bài làm rất tốt \*

  Tuy nhiên với các số to hơn, chưa thể tối ưu tốt. Dưới đây là cách tốt hơn.

  ```js
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }
  console.log("isPrime(number)", isPrime(9007199254740881));
  ```

- [x] [Bài 5](https://github.com/daithehh04/fullstack/tree/main/day17):

  Bài làm rất tốt \*

- [x] [Bài 6](https://github.com/daithehh04/fullstack/tree/main/day17):

  Bài làm rất tốt \*

- [x] [Bài 7](https://github.com/daithehh04/fullstack/tree/main/day17):

  Bài làm rất tốt \*

- [x] [Bài 8](https://github.com/daithehh04/fullstack/tree/main/day17):

  Bài làm rất tốt \*

---

## [Vũ Đức Tài](https://github.com/Apeiron2/F8-fullstack-K2/tree/main/homework/day_17)

- [x] [Bài 1](https://github.com/Apeiron2/F8-fullstack-K2/tree/main/homework/day_17):

  Bài làm rất tốt \*

  Tuy nhiên, các phép tính viết vẫn còn thủ công, rất khó để thêm hoặc bảo trì.

  Các phép tính đang lặp lại, nên tách thành một hàm riêng để tái sử dụng và truyền vào.

- [x] [Bài 2](https://github.com/Apeiron2/F8-fullstack-K2/tree/main/homework/day_17):

  Bài làm tốt \*

  Tuy nhiên, các phép tính viết vẫn còn thủ công, rất khó để thêm hoặc bảo trì.

  Các phép tính đang lặp lại nhiều lần, nên tách thành một hàm riêng để tái sử dụng và truyền vào.

  ```js
  function TotalBill(kWh) {
    if (kWh <= 0) {
      console.log(`Số kWh nhập vào phải lớn hơn 0!`);
      return;
    }
    let totalBill = 0;
    function calculate(upperLimit, price) {
      const used_kWh = Math.min(kWh, upperLimit);
      totalBill += used_kWh * price;
      kWh -= used_kWh;
    }
    calculate(50, 1678); // 50kWh đầu tiên
    calculate(50, 1734); // Từ kWh 51 - 100
    calculate(100, 2014); // Từ kWh 101 - 200
    calculate(100, 2536); // Từ kWh 201 - 300
    calculate(100, 2834); // Từ kWh 301 - 400
    calculate(Infinity, 2927); // Từ kWh 401 trở đi
    return totalBill;
  }
  console.log(`Tổng số tiền điện phải đóng tháng này là: ${TotalBill(300)}đ`);
  ```

- [x] [Bài 3](https://github.com/Apeiron2/F8-fullstack-K2/tree/main/homework/day_17):

  Bài làm rất tốt \*

- [x] [Bài 4](https://github.com/Apeiron2/F8-fullstack-K2/tree/main/homework/day_17):

  Bài làm rất tốt \*

  Tuy nhiên với các số to hơn, chưa thể tối ưu tốt. Dưới đây là cách tốt hơn.

  ```js
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }
  console.log("isPrime(number)", isPrime(9007199254740881));
  ```

- [x] [Bài 5](https://github.com/Apeiron2/F8-fullstack-K2/tree/main/homework/day_17):

  Bài làm rất tốt \*

- [x] [Bài 6](https://github.com/Apeiron2/F8-fullstack-K2/tree/main/homework/day_17):

  Bài làm rất tốt \*

- [x] [Bài 7](https://github.com/Apeiron2/F8-fullstack-K2/tree/main/homework/day_17):

  Bài làm rất tốt \*

- [x] [Bài 8](https://github.com/Apeiron2/F8-fullstack-K2/tree/main/homework/day_17):

  Bài làm rất tốt \*

---

## [Nguyễn Văn Đức](https://github.com/Poyken/Js/tree/main/day17/ex02)

    Chưa có github pages

    Đặt lại tên folder

- [x] [Bài 1](https://github.com/Poyken/Js/tree/main/day17/ex02):

  Bài làm chưa tốt

  Giá tiền cần phải cộng dồn với cước trước.

- [x] [Bài 2](https://github.com/Poyken/Js/tree/main/day17/ex02):

  Bài làm rất tốt \*

- [x] [Bài 3](https://github.com/Poyken/Js/tree/main/day17/ex02):

  Bài làm tốt \*

  Bài làm không cần thiết phải sử dụng đệ quy, chưa tối ưu tốt.

  Thực tế chỉ cần lặp từ i đến n, (_i \* i+1_)

- [x] [Bài 4](https://github.com/Poyken/Js/tree/main/day17/ex02):

  Bài làm rất tốt \*

  Tuy nhiên với các số to hơn, chưa thể tối ưu tốt. Dưới đây là cách tốt hơn.

  ```js
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }
  console.log("isPrime(number)", isPrime(9007199254740881));
  ```

- [x] [Bài 5](https://github.com/Poyken/Js/tree/main/day17/ex02):

  Bài làm sai, chưa đúng kết quả.

- [x] [Bài 6](https://github.com/Poyken/Js/tree/main/day17/ex02):

  Chưa làm bài

- [x] [Bài 7](https://github.com/Poyken/Js/tree/main/day17/ex02):

  Bài làm tốt

  Chưa hiển thị ra giao diện

- [x] [Bài 8](https://github.com/Poyken/Js/tree/main/day17/ex02):

  Bài làm rất tốt \*

---

## [Hoàng Lâm](https://github.com/nvhlam2211/f8-fullstack/blob/main/day-17/exercise)

    Chưa có github pages

    Cấu trúc lại folder

- [x] [Bài 1](https://github.com/nvhlam2211/f8-fullstack/blob/main/day-17/exercise):

  Bài làm chưa tốt

  Giá tiền cần phải cộng dồn với cước trước.

- [x] [Bài 2](https://github.com/nvhlam2211/f8-fullstack/blob/main/day-17/exercise):

  Bài làm chưa tốt

  Giá tiền cần phải cộng dồn với cước trước.

- [x] [Bài 3](https://github.com/nvhlam2211/f8-fullstack/blob/main/day-17/exercise):

  Bài làm rất tốt \*

- [x] [Bài 4](https://github.com/nvhlam2211/f8-fullstack/blob/main/day-17/exercise):

  Bài làm rất tốt \*

  Tuy nhiên với các số to hơn, chưa thể tối ưu tốt. Dưới đây là cách tốt hơn.

  ```js
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }
  console.log("isPrime(number)", isPrime(9007199254740881));
  ```

- [x] [Bài 5](https://github.com/nvhlam2211/f8-fullstack/blob/main/day-17/exercise):

  Bài làm tốt \*

  Cần có khoảng cách giữa các số

- [x] [Bài 6](https://github.com/nvhlam2211/f8-fullstack/blob/main/day-17/exercise):

  Chưa làm bài

- [x] [Bài 7](https://github.com/nvhlam2211/f8-fullstack/blob/main/day-17/exercise):

  Bài làm tốt

  Chưa hiển thị ra giao diện

- [x] [Bài 8](https://github.com/nvhlam2211/f8-fullstack/blob/main/day-17/exercise):

  Bài làm rất tốt \*
