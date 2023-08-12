# Dương review bài tập về nhà buổi 16 Lớp K3-FE

## [Hùng Mạnh](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/javascript/Day_2/js/day2.js)

**Sớm nhất\***

- [x] [Bài 1](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/javascript/Day_2/js/day2.js)

  Bài làm chưa tốt

  Để tính giá tiền taxi, cần phải cộng dồn các khoảng lại với nhau.

---

- [x] [Bài 2](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/javascript/Day_2/js/day2.js)

  Bài làm tốt

  Các dòng code đang bị lặp, chưa tối ưu và rất khó để đọc hiểu.

  Đề xuất sửa thành:

  ```js
  function TotalBill(kWh) {
    if (kWh <= 0) {
      console.log(`Số kWh nhập vào phải lớn hơn 0 và là số nguyên!`);
      return 0;
    }
    var totalBill = 0;
    function calculate(upperLimit, price) {
      const used_kWh = Math.min(kWh, upperLimit);
      totalBill += used_kWh * price;
      kWh -= used_kWh;
    }
    calculate(50, 1678); /* 50kWh đầu tiên */
    calculate(50, 1734); /* Từ kWh 51 - 100 */
    calculate(100, 2014); /* Từ kWh 101 - 200 */
    calculate(100, 2536); /* Từ kWh 201 - 300 */
    calculate(100, 2834); /* Từ kWh 301 - 400 */
    calculate(Infinity, 2927); /* Từ kWh 401 trở đi */
    return totalBill;
  }
  console.log(`số tiền phải đóng ${TotalBill(12345).toLocaleString()} vnđ`);
  ```

---

- [x] [Bài 3](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/javascript/Day_2/js/day2.js)

  Bài làm rất tốt \*

---

- [x] [Bài 4](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/javascript/Day_2/js/day2.js)

  Bài làm rất tốt \*

  Tuy nhiên với các số lớn, bài làm chưa tối ưu với các số rất lớn.

  Đề xuất sửa thành:

  ```js
  function isPrime(n) {
    /* Nếu số nhỏ hơn hoặc bằng 1, không phải số nguyên tố */
    if (n <= 1) return false;

    /* Nếu số nhỏ hơn hoặc bằng 3 && lớn hơn 1, là số nguyên tố */
    if (n <= 3) return true;

    /* Kiểm tra trường hợp số chia hết cho 2 hoặc 3 && lớn hơn 3 */
    if (n % 2 === 0 || n % 3 === 0) return false;

    /* Bắt đầu kiểm tra từ số 5 và sau đó tăng i lên mỗi lần lặp (6k ± 1) */

    /*
     * Vì 4 dính điều kiện %2
     * Từ 3 trở xuống dính điều kiện <=3 && > 1
     * ------------------------------------------------------
     * 6k ± 1 là:
     * 5 = 6k - 1(k = 1)
     * 7 = 6k + 1(k = 1)
     * 11 = 6k - 1(k = 2)
     * 13 = 6k + 1(k = 2)
     * 17 = 6k - 1(k = 3)
     * 19 = 6k + 1(k = 3)
     * 23 = 6k - 1(k = 4)
     * 25 không phải số nguyên tố vì lần lặp đầu 25 % 5 đã kiểm tra được.
     * 29 = 6k - 1(k = 5)
     * 31 = 6k + 1(k = 5)
     * 35 = 6k - 1(k = 6)
     * 37 = 6k + 1(k = 6)
     * ...
     */

    for (let i = 5; i * i <= n; i += 6) {
      /* Kiểm tra n có chia hết cho i hoặc i + 2 không (6k ± 1) */
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    /* Nếu không có trường hợp nào thỏa mãn, số là số nguyên tố */
    return true;
  }

  console.log("isPrime(9007199254740881)", isPrime(9007199254740881));
  console.log(
    "isPrime(Number.MAX_SAFE_INTEGER)",
    isPrime(Number.MAX_SAFE_INTEGER)
  );
  ```

---

- [x] [Bài 5](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/javascript/Day_2/js/day2.js)

  Bài làm rất tốt \*

  Nên sử dụng `document.write` để hiển thị lên trình duyệt thay vì console.

---

- [x] [Bài 6](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/javascript/Day_2/js/day2.js)

  Bài làm rất tốt \*

  Nên sử dụng `document.write` để hiển thị lên trình duyệt thay vì console.

---

- [x] [Bài 7](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/javascript/Day_2/js/day2.js)

  Bài làm rất tốt \*

  Nên sử dụng `document.write` để hiển thị lên trình duyệt thay vì console.

---

- [x] [Bài 8](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/javascript/Day_2/js/day2.js)

  Bài làm rất tốt \*

  Nên sử dụng `document.write` để hiển thị lên trình duyệt thay vì console.

---

- [x] Đánh giá chung bài tập về nhà:

  Bài làm tốt, nên sử dụng `document.write` để hiển thị lên trình duyệt thay vì console. Nên tối ưu code để dễ tái sử dụng, dễ hiểu và chạy tốt hơn.

---

## [thuy nguyen](https://github.com/tnnhungoc/F8-FE-K3/blob/main/FEK3/Day16_JS/js)

- [x] [Bài 1](https://github.com/tnnhungoc/F8-FE-K3/blob/main/FEK3/Day16_JS/js)

  Bài làm chưa tốt

  Để tính giá tiền taxi, cần phải cộng dồn các khoảng lại với nhau.

---

- [x] [Bài 2](https://github.com/tnnhungoc/F8-FE-K3/blob/main/FEK3/Day16_JS/js)

  Bài làm chưa tốt

  Để tính giá tiền điện, cần phải cộng dồn các khoảng lại với nhau.

  Chưa khai báo `toPay` nhưng đã sử dụng khiến cho việc code trở nên lỏng lẻo, dễ bị lỗi hơn. Nên sử dụng từ khóa khai báo `toPay` trước khi sử dụng.

  Đề xuất sửa thành:

  ```js
  function TotalBill(kWh) {
    if (kWh <= 0) {
      console.log(`Số kWh nhập vào phải lớn hơn 0 và là số nguyên!`);
      return 0;
    }
    var totalBill = 0;
    function calculate(upperLimit, price) {
      const used_kWh = Math.min(kWh, upperLimit);
      totalBill += used_kWh * price;
      kWh -= used_kWh;
    }
    calculate(50, 1678); /* 50kWh đầu tiên */
    calculate(50, 1734); /* Từ kWh 51 - 100 */
    calculate(100, 2014); /* Từ kWh 101 - 200 */
    calculate(100, 2536); /* Từ kWh 201 - 300 */
    calculate(100, 2834); /* Từ kWh 301 - 400 */
    calculate(Infinity, 2927); /* Từ kWh 401 trở đi */
    return totalBill;
  }
  console.log(`số tiền phải đóng ${TotalBill(12345).toLocaleString()} vnđ`);
  ```

---

- [x] [Bài 3](https://github.com/tnnhungoc/F8-FE-K3/blob/main/FEK3/Day16_JS/js)

  Bài làm rất tốt \*

  Có thể sử dụng toán tử `+=` thay vì viết lại `sum` để code dễ hiểu hơn trong việc sử dụng.

---

- [x] [Bài 4](https://github.com/tnnhungoc/F8-FE-K3/blob/main/FEK3/Day16_JS/js)

  Bài làm rất tốt \*

  Tuy nhiên với các số lớn, bài làm chưa tối ưu với các số rất lớn.

  - Vì đang lặp từ 2 đến n mặc dù không cần thiết, và có thể kiểm tra thêm một vài trường hợp để code có thể giảm số lần lặp.

  Đề xuất sửa thành:

  ```js
  function isPrime(n) {
    /* Nếu số nhỏ hơn hoặc bằng 1, không phải số nguyên tố */
    if (n <= 1) return false;

    /* Nếu số nhỏ hơn hoặc bằng 3 && lớn hơn 1, là số nguyên tố */
    if (n <= 3) return true;

    /* Kiểm tra trường hợp số chia hết cho 2 hoặc 3 && lớn hơn 3 */
    if (n % 2 === 0 || n % 3 === 0) return false;

    /* Bắt đầu kiểm tra từ số 5 và sau đó tăng i lên mỗi lần lặp (6k ± 1) */

    /*
     * Vì 4 dính điều kiện %2
     * Từ 3 trở xuống dính điều kiện <=3 && > 1
     * ------------------------------------------------------
     * 6k ± 1 là:
     * 5 = 6k - 1(k = 1)
     * 7 = 6k + 1(k = 1)
     * 11 = 6k - 1(k = 2)
     * 13 = 6k + 1(k = 2)
     * 17 = 6k - 1(k = 3)
     * 19 = 6k + 1(k = 3)
     * 23 = 6k - 1(k = 4)
     * 25 không phải số nguyên tố vì lần lặp đầu 25 % 5 đã kiểm tra được.
     * 29 = 6k - 1(k = 5)
     * 31 = 6k + 1(k = 5)
     * 35 = 6k - 1(k = 6)
     * 37 = 6k + 1(k = 6)
     * ...
     */

    for (let i = 5; i * i <= n; i += 6) {
      /* Kiểm tra n có chia hết cho i hoặc i + 2 không (6k ± 1) */
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    /* Nếu không có trường hợp nào thỏa mãn, số là số nguyên tố */
    return true;
  }

  console.log("isPrime(9007199254740881)", isPrime(9007199254740881));
  console.log(
    "isPrime(Number.MAX_SAFE_INTEGER)",
    isPrime(Number.MAX_SAFE_INTEGER)
  );
  ```

---

- [x] [Bài 5](https://github.com/tnnhungoc/F8-FE-K3/blob/main/FEK3/Day16_JS/js)

  Bài làm rất tốt \*

  Nên sử dụng `document.write` để hiển thị lên trình duyệt thay vì console.

---

- [x] [Bài 6](https://github.com/tnnhungoc/F8-FE-K3/blob/main/FEK3/Day16_JS/js)

  Bài làm rất tốt \*

  Có thể gán biến `sqrt` để giá trị là 8 và tối ưu cho việc hiển thị sẽ dễ hơn trong việc resize bàn cờ theo ý muốn.

  ```html
  <style>
    /* Tạo một container bao bọc board để dễ dàng thay đổi kích thước */
    .board-container {
      display: inline-block; /* Hiển thị theo chiều ngang */
      border: 1px solid black; /* Đường viền cho container */
      width: 80vw; /* Kích thước tổng của bàn cờ. */
    }

    /* Thay đổi kích thước của ô vuông dựa trên kích thước của board */
    .square {
      width: calc(
        100% / var(--sqrt)
      ); /* Sử dụng biến CSS để tính toán kích thước */
      padding-bottom: calc(
        100% / var(--sqrt)
      ); /* Đảm bảo ô vuông luôn có tỷ lệ vuông */
      float: left;
      border: 1px solid black;
      background-color: #fff;
      box-sizing: border-box; /* Đảm bảo border không làm thay đổi kích thước thực tế */
    }

    /* Màu nền cho các ô vuông */
    .black {
      background-color: #000;
    }
  </style>

  <div class="board-container">
    <div id="board" style="--sqrt: 16"></div>
    <!-- Sử dụng biến --sqrt để thiết lập kích thước -->
  </div>

  <script>
    var board = document.getElementById("board");
    const sqrt = parseInt(getComputedStyle(board).getPropertyValue("--sqrt")); // Lấy giá trị của --sqrt từ CSS
    for (var i = 0; i < sqrt; i++) {
      for (var j = 0; j < sqrt; j++) {
        var square = document.createElement("div");
        square.className = "square";
        board.appendChild(square);
        if ((i + j) % 2 === 0) {
          square.classList.add("black");
        }
      }
    }
  </script>
  ```

---

- [x] [Bài 7](https://github.com/tnnhungoc/F8-FE-K3/blob/main/FEK3/Day16_JS/js)

  Bài làm rất tốt \*

  Nên sử dụng `document.write` để hiển thị lên trình duyệt thay vì console.

---

- [x] [Bài 8](https://github.com/tnnhungoc/F8-FE-K3/blob/main/FEK3/Day16_JS/js)

  Bài làm rất tốt \*

  Nên sử dụng các kiến thức đã học để làm bài sẽ giúp luyện tập tốt hơn.

  **Ở đây nói về function đệ quy**

---

- [x] Đánh giá chung bài tập về nhà:

  Bài làm tốt, nên tối ưu code để dễ tái sử dụng, dễ hiểu và chạy tốt hơn, dễ dàng scale hơn.

---

## [Gia Bảo Đỗ](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Javascript/Day16)

- [x] [Bài 1](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Javascript/Day16)

  Bài làm chưa tốt

  Để tính giá tiền taxi, cần phải cộng dồn các khoảng lại với nhau.

---

- [x] [Bài 2](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Javascript/Day16)

  Bài làm tốt

  Cần chú ý lại về format code.

  Việc viết code như trên rất khó để đọc hiểu và tái sử dụng. Mỗi lần như vậy sẽ phải copy lại từ đầu.

  Đề xuất sửa thành:

  ```js
  function TotalBill(kWh) {
    if (kWh <= 0) {
      console.log(`Số kWh nhập vào phải lớn hơn 0 và là số nguyên!`);
      return 0;
    }
    var totalBill = 0;
    function calculate(upperLimit, price) {
      const used_kWh = Math.min(kWh, upperLimit);
      totalBill += used_kWh * price;
      kWh -= used_kWh;
    }
    calculate(50, 1678); /* 50kWh đầu tiên */
    calculate(50, 1734); /* Từ kWh 51 - 100 */
    calculate(100, 2014); /* Từ kWh 101 - 200 */
    calculate(100, 2536); /* Từ kWh 201 - 300 */
    calculate(100, 2834); /* Từ kWh 301 - 400 */
    calculate(Infinity, 2927); /* Từ kWh 401 trở đi */
    return totalBill;
  }
  console.log(`số tiền phải đóng ${TotalBill(12345).toLocaleString()} vnđ`);
  ```

---

- [x] [Bài 3](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Javascript/Day16)

  Bài làm rất tốt \*

  Cần chú ý lại về format code.

  Có thể sử dụng toán tử `+=` thay vì viết lại `sum` để code dễ hiểu hơn trong việc sử dụng.

---

- [x] [Bài 4](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Javascript/Day16)

  Bài làm tốt

  Trình bày code quá rối và khó hiểu khi viết tất cả vào trong if/else.

  Nên tách thành hàm để dễ dàng xử lý và sử dụng hơn.

  Bài làm chưa tối ưu với các số rất lớn.

  - Vì đang lặp từ 2 đến n mặc dù không cần thiết, và có thể kiểm tra thêm một vài trường hợp để code có thể giảm số lần lặp.

  Đề xuất sửa thành:

  ```js
  function isPrime(n) {
    /* Nếu số nhỏ hơn hoặc bằng 1, không phải số nguyên tố */
    if (n <= 1) return false;

    /* Nếu số nhỏ hơn hoặc bằng 3 && lớn hơn 1, là số nguyên tố */
    if (n <= 3) return true;

    /* Kiểm tra trường hợp số chia hết cho 2 hoặc 3 && lớn hơn 3 */
    if (n % 2 === 0 || n % 3 === 0) return false;

    /* Bắt đầu kiểm tra từ số 5 và sau đó tăng i lên mỗi lần lặp (6k ± 1) */

    /*
     * Vì 4 dính điều kiện %2
     * Từ 3 trở xuống dính điều kiện <=3 && > 1
     * ------------------------------------------------------
     * 6k ± 1 là:
     * 5 = 6k - 1(k = 1)
     * 7 = 6k + 1(k = 1)
     * 11 = 6k - 1(k = 2)
     * 13 = 6k + 1(k = 2)
     * 17 = 6k - 1(k = 3)
     * 19 = 6k + 1(k = 3)
     * 23 = 6k - 1(k = 4)
     * 25 không phải số nguyên tố vì lần lặp đầu 25 % 5 đã kiểm tra được.
     * 29 = 6k - 1(k = 5)
     * 31 = 6k + 1(k = 5)
     * 35 = 6k - 1(k = 6)
     * 37 = 6k + 1(k = 6)
     * ...
     */

    for (let i = 5; i * i <= n; i += 6) {
      /* Kiểm tra n có chia hết cho i hoặc i + 2 không (6k ± 1) */
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    /* Nếu không có trường hợp nào thỏa mãn, số là số nguyên tố */
    return true;
  }

  console.log("isPrime(9007199254740881)", isPrime(9007199254740881));
  console.log(
    "isPrime(Number.MAX_SAFE_INTEGER)",
    isPrime(Number.MAX_SAFE_INTEGER)
  );
  ```

---

- [x] [Bài 5](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Javascript/Day16)

  Bài làm rất tốt \*

  Nên sử dụng `document.write` để hiển thị lên trình duyệt thay vì console.

---

- [x] [Bài 6](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Javascript/Day16)

  Bài làm rất tốt \*

  (Giống bài của [thuy nguyen](https://github.com/tnnhungoc/F8-FE-K3/blob/main/FEK3/Day16_JS/js/homework6.js))

  Có thể gán biến `sqrt` để giá trị là 8 và tối ưu cho việc hiển thị sẽ dễ hơn trong việc resize bàn cờ theo ý muốn.

  ```html
  <style>
    /* Tạo một container bao bọc board để dễ dàng thay đổi kích thước */
    .board-container {
      display: inline-block; /* Hiển thị theo chiều ngang */
      border: 1px solid black; /* Đường viền cho container */
      width: 80vw; /* Kích thước tổng của bàn cờ. */
    }

    /* Thay đổi kích thước của ô vuông dựa trên kích thước của board */
    .square {
      width: calc(
        100% / var(--sqrt)
      ); /* Sử dụng biến CSS để tính toán kích thước */
      padding-bottom: calc(
        100% / var(--sqrt)
      ); /* Đảm bảo ô vuông luôn có tỷ lệ vuông */
      float: left;
      border: 1px solid black;
      background-color: #fff;
      box-sizing: border-box; /* Đảm bảo border không làm thay đổi kích thước thực tế */
    }

    /* Màu nền cho các ô vuông */
    .black {
      background-color: #000;
    }
  </style>

  <div class="board-container">
    <div id="board" style="--sqrt: 16"></div>
    <!-- Sử dụng biến --sqrt để thiết lập kích thước -->
  </div>

  <script>
    var board = document.getElementById("board");
    const sqrt = parseInt(getComputedStyle(board).getPropertyValue("--sqrt")); // Lấy giá trị của --sqrt từ CSS
    for (var i = 0; i < sqrt; i++) {
      for (var j = 0; j < sqrt; j++) {
        var square = document.createElement("div");
        square.className = "square";
        board.appendChild(square);
        if ((i + j) % 2 === 0) {
          square.classList.add("black");
        }
      }
    }
  </script>
  ```

---

- [x] [Bài 7](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Javascript/Day16)

  Bài làm rất tốt \*

  Nên sử dụng `document.write` để hiển thị lên trình duyệt thay vì console.

---

- [x] [Bài 8](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Javascript/Day16)

  Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà:

  Bài làm tốt, nên tối ưu code để dễ tái sử dụng, dễ hiểu và chạy tốt hơn, dễ dàng scale hơn.

---

## [Vũ Thành Khang](https://github.com/countduck4819/f8-frontend/tree/main/Day16)

- [x] [Bài 1](https://github.com/countduck4819/f8-frontend/tree/main/Day16)

  Bài làm tốt

  Đặt tên function nên là một hành động có ý nghĩa, không nên đặt là `a()`

  Vì dữ liệu là do người dùng nhập vào(prompt). Nên cần kiểm tra dữ liệu đầu vào có phải là số hay không.

---

- [x] [Bài 2](https://github.com/countduck4819/f8-frontend/tree/main/Day16)

  Bài làm tốt

  Cần chú ý lại về format code.

  Vì dữ liệu là do người dùng nhập vào(prompt). Nên cần kiểm tra dữ liệu đầu vào có phải là số hay không.

  Việc viết code như trên rất khó để đọc hiểu và tái sử dụng. Mỗi lần như vậy sẽ phải copy lại từ đầu.

  Đề xuất sửa thành:

  ```js
  function TotalBill(kWh) {
    if (kWh <= 0) {
      console.log(`Số kWh nhập vào phải lớn hơn 0 và là số nguyên!`);
      return 0;
    }
    var totalBill = 0;
    function calculate(upperLimit, price) {
      const used_kWh = Math.min(kWh, upperLimit);
      totalBill += used_kWh * price;
      kWh -= used_kWh;
    }
    calculate(50, 1678); /* 50kWh đầu tiên */
    calculate(50, 1734); /* Từ kWh 51 - 100 */
    calculate(100, 2014); /* Từ kWh 101 - 200 */
    calculate(100, 2536); /* Từ kWh 201 - 300 */
    calculate(100, 2834); /* Từ kWh 301 - 400 */
    calculate(Infinity, 2927); /* Từ kWh 401 trở đi */
    return totalBill;
  }
  console.log(`số tiền phải đóng ${TotalBill(12345).toLocaleString()} vnđ`);
  ```

---

- [x] [Bài 3](https://github.com/countduck4819/f8-frontend/tree/main/Day16)

  Bài làm rất tốt\*

  Function nên đặt tên có ý nghĩa và là một hành động, không phải là `a()`

  Vì dữ liệu là do người dùng nhập vào(prompt). Nên cần kiểm tra dữ liệu đầu vào có phải là số hay không.

---

- [x] [Bài 4](https://github.com/countduck4819/f8-frontend/tree/main/Day16)

  Bài làm tốt

  Tên hàm cần là một hành động, không phải là một danh từ.

  Vì dữ liệu là do người dùng nhập vào(prompt). Nên cần kiểm tra dữ liệu đầu vào có phải là số hay không.

  Bài làm chưa tối ưu với các số rất lớn.

  - Vì đang lặp từ 2 đến sqrt(n) mặc dù không cần thiết, và có thể kiểm tra thêm một vài trường hợp để code có thể giảm số lần lặp.

  Đề xuất sửa thành:

  ```js
  function isPrime(n) {
    /* Nếu số nhỏ hơn hoặc bằng 1, không phải số nguyên tố */
    if (n <= 1) return false;

    /* Nếu số nhỏ hơn hoặc bằng 3 && lớn hơn 1, là số nguyên tố */
    if (n <= 3) return true;

    /* Kiểm tra trường hợp số chia hết cho 2 hoặc 3 && lớn hơn 3 */
    if (n % 2 === 0 || n % 3 === 0) return false;

    /* Bắt đầu kiểm tra từ số 5 và sau đó tăng i lên mỗi lần lặp (6k ± 1) */

    /*
     * Vì 4 dính điều kiện %2
     * Từ 3 trở xuống dính điều kiện <=3 && > 1
     * ------------------------------------------------------
     * 6k ± 1 là:
     * 5 = 6k - 1(k = 1)
     * 7 = 6k + 1(k = 1)
     * 11 = 6k - 1(k = 2)
     * 13 = 6k + 1(k = 2)
     * 17 = 6k - 1(k = 3)
     * 19 = 6k + 1(k = 3)
     * 23 = 6k - 1(k = 4)
     * 25 không phải số nguyên tố vì lần lặp đầu 25 % 5 đã kiểm tra được.
     * 29 = 6k - 1(k = 5)
     * 31 = 6k + 1(k = 5)
     * 35 = 6k - 1(k = 6)
     * 37 = 6k + 1(k = 6)
     * ...
     */

    for (let i = 5; i * i <= n; i += 6) {
      /* Kiểm tra n có chia hết cho i hoặc i + 2 không (6k ± 1) */
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    /* Nếu không có trường hợp nào thỏa mãn, số là số nguyên tố */
    return true;
  }

  console.log("isPrime(9007199254740881)", isPrime(9007199254740881));
  console.log(
    "isPrime(Number.MAX_SAFE_INTEGER)",
    isPrime(Number.MAX_SAFE_INTEGER)
  );
  ```

---

- [x] [Bài 5](https://github.com/countduck4819/f8-frontend/tree/main/Day16)

  Bài làm tốt\*

  Vì dữ liệu là do người dùng nhập vào(prompt). Nên cần kiểm tra dữ liệu đầu vào có phải là số hay không.

  Tên function cần viết theo quy tắc camelCase để dễ dàng đọc, phân biệt hơn.

---

- [x] [Bài 6](https://github.com/countduck4819/f8-frontend/tree/main/Day16)

  Bài làm chưa tốt

  Nên vẽ đúng với giao diện của bàn cờ vua.

  Có thể gán biến `sqrt` để giá trị là 8 và tối ưu cho việc hiển thị sẽ dễ hơn trong việc resize bàn cờ theo ý muốn.

  ```html
  <style>
    /* Tạo một container bao bọc board để dễ dàng thay đổi kích thước */
    .board-container {
      display: inline-block; /* Hiển thị theo chiều ngang */
      border: 1px solid black; /* Đường viền cho container */
      width: 80vw; /* Kích thước tổng của bàn cờ. */
    }

    /* Thay đổi kích thước của ô vuông dựa trên kích thước của board */
    .square {
      width: calc(
        100% / var(--sqrt)
      ); /* Sử dụng biến CSS để tính toán kích thước */
      padding-bottom: calc(
        100% / var(--sqrt)
      ); /* Đảm bảo ô vuông luôn có tỷ lệ vuông */
      float: left;
      border: 1px solid black;
      background-color: #fff;
      box-sizing: border-box; /* Đảm bảo border không làm thay đổi kích thước thực tế */
    }

    /* Màu nền cho các ô vuông */
    .black {
      background-color: #000;
    }
  </style>

  <div class="board-container">
    <div id="board" style="--sqrt: 16"></div>
    <!-- Sử dụng biến --sqrt để thiết lập kích thước -->
  </div>

  <script>
    var board = document.getElementById("board");
    const sqrt = parseInt(getComputedStyle(board).getPropertyValue("--sqrt")); // Lấy giá trị của --sqrt từ CSS
    for (var i = 0; i < sqrt; i++) {
      for (var j = 0; j < sqrt; j++) {
        var square = document.createElement("div");
        square.className = "square";
        board.appendChild(square);
        if ((i + j) % 2 === 0) {
          square.classList.add("black");
        }
      }
    }
  </script>
  ```

---

- [x] [Bài 7](https://github.com/countduck4819/f8-frontend/tree/main/Day16)

  Bài làm rất tốt \*

---

- [x] [Bài 8](https://github.com/countduck4819/f8-frontend/tree/main/Day16)

  Bài làm rất tốt \*

  Vì dữ liệu là do người dùng nhập vào(prompt). Nên cần kiểm tra dữ liệu đầu vào có phải là số hay không.

  Tên function cần viết theo quy tắc camelCase, là một hành động để dễ dàng đọc, phân biệt hơn.

---

- [x] Đánh giá chung bài tập về nhà:

  Bài làm tốt,

  - Nên chú ý tới tên của function để giúp code dễ hiểu hơn.

  - Nên tối ưu code để dễ tái sử dụng, dễ hiểu và chạy tốt hơn, dễ dàng scale hơn.

---

## [Nguyen Le Quyen (FPL HN)](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day16)

    Cần đặt lại cấu trúc folder để dễ dàng đọc, hiểu hơn, khoa học hơn.

- [x] [Bài 1](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day16)

  Bài làm chưa tốt

  Để tính giá tiền taxi, cần phải cộng dồn các khoảng lại với nhau.

  Cần chú ý lại về format code.

---

- [x] [Bài 2](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day16)

  Bài làm tốt

  Việc viết code như trên rất khó để đọc hiểu và tái sử dụng. Mỗi lần như vậy sẽ phải copy lại từ đầu.

  Đề xuất sửa thành:

  ```js
  function TotalBill(kWh) {
    if (kWh <= 0) {
      console.log(`Số kWh nhập vào phải lớn hơn 0 và là số nguyên!`);
      return 0;
    }
    var totalBill = 0;
    function calculate(upperLimit, price) {
      const used_kWh = Math.min(kWh, upperLimit);
      totalBill += used_kWh * price;
      kWh -= used_kWh;
    }
    calculate(50, 1678); /* 50kWh đầu tiên */
    calculate(50, 1734); /* Từ kWh 51 - 100 */
    calculate(100, 2014); /* Từ kWh 101 - 200 */
    calculate(100, 2536); /* Từ kWh 201 - 300 */
    calculate(100, 2834); /* Từ kWh 301 - 400 */
    calculate(Infinity, 2927); /* Từ kWh 401 trở đi */
    return totalBill;
  }
  console.log(`số tiền phải đóng ${TotalBill(12345).toLocaleString()} vnđ`);
  ```

---

- [x] [Bài 3](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day16)

  Bài làm rất tốt\*

---

- [x] [Bài 4](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day16)

  Bài làm tốt

  Cần chú ý lại về format code.

  Bài làm chưa tối ưu với các số rất lớn.

  - Vì đang lặp từ 2 đến sqrt(n) mặc dù không cần thiết, và có thể kiểm tra thêm một vài trường hợp để code có thể giảm số lần lặp.

  Đề xuất sửa thành:

  ```js
  function isPrime(n) {
    /* Nếu số nhỏ hơn hoặc bằng 1, không phải số nguyên tố */
    if (n <= 1) return false;

    /* Nếu số nhỏ hơn hoặc bằng 3 && lớn hơn 1, là số nguyên tố */
    if (n <= 3) return true;

    /* Kiểm tra trường hợp số chia hết cho 2 hoặc 3 && lớn hơn 3 */
    if (n % 2 === 0 || n % 3 === 0) return false;

    /* Bắt đầu kiểm tra từ số 5 và sau đó tăng i lên mỗi lần lặp (6k ± 1) */

    /*
     * Vì 4 dính điều kiện %2
     * Từ 3 trở xuống dính điều kiện <=3 && > 1
     * ------------------------------------------------------
     * 6k ± 1 là:
     * 5 = 6k - 1(k = 1)
     * 7 = 6k + 1(k = 1)
     * 11 = 6k - 1(k = 2)
     * 13 = 6k + 1(k = 2)
     * 17 = 6k - 1(k = 3)
     * 19 = 6k + 1(k = 3)
     * 23 = 6k - 1(k = 4)
     * 25 không phải số nguyên tố vì lần lặp đầu 25 % 5 đã kiểm tra được.
     * 29 = 6k - 1(k = 5)
     * 31 = 6k + 1(k = 5)
     * 35 = 6k - 1(k = 6)
     * 37 = 6k + 1(k = 6)
     * ...
     */

    for (let i = 5; i * i <= n; i += 6) {
      /* Kiểm tra n có chia hết cho i hoặc i + 2 không (6k ± 1) */
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    /* Nếu không có trường hợp nào thỏa mãn, số là số nguyên tố */
    return true;
  }

  console.log("isPrime(9007199254740881)", isPrime(9007199254740881));
  console.log(
    "isPrime(Number.MAX_SAFE_INTEGER)",
    isPrime(Number.MAX_SAFE_INTEGER)
  );
  ```

---

- [x] [Bài 5](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day16)

  Bài làm rất tốt\*

  Nên sử dụng `document.write` để hiển thị lên trình duyệt thay vì console.

---

- [x] [Bài 6](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day16)

  Bài làm rất tốt\*

  Nên sử dụng `document.write` để hiển thị lên trình duyệt thay vì console.

  Có thể sử dụng theo cách này(Tham khảo).

  ```html
  <style>
    /* Tạo một container bao bọc board để dễ dàng thay đổi kích thước */
    .board-container {
      display: inline-block; /* Hiển thị theo chiều ngang */
      border: 1px solid black; /* Đường viền cho container */
      width: 80vw; /* Kích thước tổng của bàn cờ. */
    }

    /* Thay đổi kích thước của ô vuông dựa trên kích thước của board */
    .square {
      width: calc(
        100% / var(--sqrt)
      ); /* Sử dụng biến CSS để tính toán kích thước */
      padding-bottom: calc(
        100% / var(--sqrt)
      ); /* Đảm bảo ô vuông luôn có tỷ lệ vuông */
      float: left;
      border: 1px solid black;
      background-color: #fff;
      box-sizing: border-box; /* Đảm bảo border không làm thay đổi kích thước thực tế */
    }

    /* Màu nền cho các ô vuông */
    .black {
      background-color: #000;
    }
  </style>

  <div class="board-container">
    <div id="board" style="--sqrt: 16"></div>
    <!-- Sử dụng biến --sqrt để thiết lập kích thước -->
  </div>

  <script>
    var board = document.getElementById("board");
    const sqrt = parseInt(getComputedStyle(board).getPropertyValue("--sqrt")); // Lấy giá trị của --sqrt từ CSS
    for (var i = 0; i < sqrt; i++) {
      for (var j = 0; j < sqrt; j++) {
        var square = document.createElement("div");
        square.className = "square";
        board.appendChild(square);
        if ((i + j) % 2 === 0) {
          square.classList.add("black");
        }
      }
    }
  </script>
  ```

---

- [x] [Bài 7](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day16)

  Bài làm rất tốt \*

---

- [x] [Bài 8](https://github.com/NguyenLeQuyen2004/f8-frontend-k3/tree/main/Day16)

  Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà:

  Bài làm tốt,

  - Nên tối ưu code để dễ tái sử dụng, dễ hiểu và chạy tốt hơn, dễ dàng scale hơn.

---

## [Nguyễn Đức Hải](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-16)

- [x] [Bài 1](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-16)

  Bài làm chưa tốt

  Để tính giá tiền taxi, cần phải cộng dồn các khoảng lại với nhau.

  Function cần đặt tên theo quy tắc camelCase, sử dụng động từ để dễ đọc, dễ hiểu hơn. Đúng quy tắc chung hơn. Nếu được thì sử dụng tiếng anh.

---

- [x] [Bài 2](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-16)

  Bài làm chưa tốt

  Function cần đặt tên theo quy tắc camelCase, sử dụng động từ để dễ đọc, dễ hiểu hơn. Đúng quy tắc chung hơn. Nếu được thì sử dụng tiếng anh.
  Để tính giá tiền điện, cần phải cộng dồn các khoảng lại với nhau.

  Đề xuất sửa thành:

  ```js
  function TotalBill(kWh) {
    if (kWh <= 0) {
      console.log(`Số kWh nhập vào phải lớn hơn 0 và là số nguyên!`);
      return 0;
    }
    var totalBill = 0;
    function calculate(upperLimit, price) {
      const used_kWh = Math.min(kWh, upperLimit);
      totalBill += used_kWh * price;
      kWh -= used_kWh;
    }
    calculate(50, 1678); /* 50kWh đầu tiên */
    calculate(50, 1734); /* Từ kWh 51 - 100 */
    calculate(100, 2014); /* Từ kWh 101 - 200 */
    calculate(100, 2536); /* Từ kWh 201 - 300 */
    calculate(100, 2834); /* Từ kWh 301 - 400 */
    calculate(Infinity, 2927); /* Từ kWh 401 trở đi */
    return totalBill;
  }
  console.log(`số tiền phải đóng ${TotalBill(12345).toLocaleString()} vnđ`);
  ```

---

- [x] [Bài 3](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-16)

  Bài làm rất tốt\*

  Function nên đặt tên có ý nghĩa và là một hành động, không phải là `a()`

  Function cần đặt tên theo quy tắc camelCase, sử dụng động từ để dễ đọc, dễ hiểu hơn. Đúng quy tắc chung hơn. Nếu được thì sử dụng tiếng anh.

---

- [x] [Bài 4](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-16)

  Bài làm tốt

  Function cần đặt tên theo quy tắc camelCase, sử dụng động từ để dễ đọc, dễ hiểu hơn. Đúng quy tắc chung hơn. Nếu được thì sử dụng tiếng anh.

  Tên biến cần đặt tên theo quy tắc camelCase, sử dụng danh từ để dễ đọc, dễ hiểu hơn. Đúng quy tắc chung hơn. Nếu được thì sử dụng tiếng anh.

  Bài làm chưa tối ưu với các số rất lớn.

  - Vì đang lặp từ 2 đến soNT mặc dù không cần thiết, và có thể kiểm tra thêm một vài trường hợp để code có thể giảm số lần lặp.

  Đề xuất sửa thành:

  ```js
  function isPrime(n) {
    /* Nếu số nhỏ hơn hoặc bằng 1, không phải số nguyên tố */
    if (n <= 1) return false;

    /* Nếu số nhỏ hơn hoặc bằng 3 && lớn hơn 1, là số nguyên tố */
    if (n <= 3) return true;

    /* Kiểm tra trường hợp số chia hết cho 2 hoặc 3 && lớn hơn 3 */
    if (n % 2 === 0 || n % 3 === 0) return false;

    /* Bắt đầu kiểm tra từ số 5 và sau đó tăng i lên mỗi lần lặp (6k ± 1) */

    /*
     * Vì 4 dính điều kiện %2
     * Từ 3 trở xuống dính điều kiện <=3 && > 1
     * ------------------------------------------------------
     * 6k ± 1 là:
     * 5 = 6k - 1(k = 1)
     * 7 = 6k + 1(k = 1)
     * 11 = 6k - 1(k = 2)
     * 13 = 6k + 1(k = 2)
     * 17 = 6k - 1(k = 3)
     * 19 = 6k + 1(k = 3)
     * 23 = 6k - 1(k = 4)
     * 25 không phải số nguyên tố vì lần lặp đầu 25 % 5 đã kiểm tra được.
     * 29 = 6k - 1(k = 5)
     * 31 = 6k + 1(k = 5)
     * 35 = 6k - 1(k = 6)
     * 37 = 6k + 1(k = 6)
     * ...
     */

    for (let i = 5; i * i <= n; i += 6) {
      /* Kiểm tra n có chia hết cho i hoặc i + 2 không (6k ± 1) */
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    /* Nếu không có trường hợp nào thỏa mãn, số là số nguyên tố */
    return true;
  }

  console.log("isPrime(9007199254740881)", isPrime(9007199254740881));
  console.log(
    "isPrime(Number.MAX_SAFE_INTEGER)",
    isPrime(Number.MAX_SAFE_INTEGER)
  );
  ```

---

- [x] [Bài 5](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-16)

  Bài làm tốt\*

  Nên tách ra thành một function để dễ dàng tái sử dụng hơn.

  Nên hiển thị ra màn hình bằng `document.write` thay vì `console.log`.

---

- [x] [Bài 6](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-16)

  Bài làm chưa tốt

  Nên vẽ đúng với giao diện của bàn cờ vua.

  ```html
  <style>
    /* Tạo một container bao bọc board để dễ dàng thay đổi kích thước */
    .board-container {
      display: inline-block; /* Hiển thị theo chiều ngang */
      border: 1px solid black; /* Đường viền cho container */
      width: 80vw; /* Kích thước tổng của bàn cờ. */
    }

    /* Thay đổi kích thước của ô vuông dựa trên kích thước của board */
    .square {
      width: calc(
        100% / var(--sqrt)
      ); /* Sử dụng biến CSS để tính toán kích thước */
      padding-bottom: calc(
        100% / var(--sqrt)
      ); /* Đảm bảo ô vuông luôn có tỷ lệ vuông */
      float: left;
      border: 1px solid black;
      background-color: #fff;
      box-sizing: border-box; /* Đảm bảo border không làm thay đổi kích thước thực tế */
    }

    /* Màu nền cho các ô vuông */
    .black {
      background-color: #000;
    }
  </style>

  <div class="board-container">
    <div id="board" style="--sqrt: 16"></div>
    <!-- Sử dụng biến --sqrt để thiết lập kích thước -->
  </div>

  <script>
    var board = document.getElementById("board");
    const sqrt = parseInt(getComputedStyle(board).getPropertyValue("--sqrt")); // Lấy giá trị của --sqrt từ CSS
    for (var i = 0; i < sqrt; i++) {
      for (var j = 0; j < sqrt; j++) {
        var square = document.createElement("div");
        square.className = "square";
        board.appendChild(square);
        if ((i + j) % 2 === 0) {
          square.classList.add("black");
        }
      }
    }
  </script>
  ```

---

- [x] [Bài 7](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-16)

  Bài làm rất tốt \*

---

- [x] [Bài 8](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-16)

  Bài làm rất tốt \*

  Tên function cần viết theo quy tắc camelCase, là một động từ và nên viết tiếng anh dễ dàng đọc, phân biệt hơn.

---

- [x] Đánh giá chung bài tập về nhà:

  Bài làm tốt,

  - Nên chú ý tới tên của function để giúp code dễ hiểu hơn.

  - Nên tối ưu code để dễ tái sử dụng, dễ hiểu và chạy tốt hơn, dễ dàng scale hơn.
