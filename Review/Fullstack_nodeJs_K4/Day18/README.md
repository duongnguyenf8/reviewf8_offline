## [Hoàng Văn Thanh](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_16a)

**Sớm nhất**

- [x] Bài 1:

  Bài làm rất tốt. \*

---

- [x] Bài 2:

  Bài làm tốt. \*

  Bài làm yêu cầu đảo ngược số nguyên nên cần thực hiện cả số nguyên âm và số nguyên dương.

  Chưa xử lý các trường hợp n có số 0 ở đầu tiên. Ví dụ một số trường hợp sau:

  - Hiện tại khi nhập `n = 01` thì kết quả của bài làm đang là `1`.

  - Khi nhập `n = 011` thì kết quả của bài làm đang là `9`.

    Đề xuất chuyển về chuỗi rồi đảo ngược và chuyển lại về chữ.

---

- [x] Bài 3:

  Bài làm tốt. \*

  Một số trường hợp chưa xử lý:

  - `n = 1900`: kết quả của bài làm hiện tại là `một ngàn chín trăm linh` (và các số tương tự).

  - `n = 1910`: kết quả của bài làm hiện tại là `một ngàn chín trăm một mươi` (và các số tương tự).

  - `n = 2000`: kết quả của bài làm hiện tại là `hai ngàn linh` (và các số tương tự).

  - `n = 2011: kết quả của bài làm hiện tại là `hai ngàn một mươi một` (và các số tương tự).

  - `n = 100`: kết quả của bài làm hiện tại là `một trăm linh` (và các số tương tự).

  - `n = 034`: kết quả của bài làm hiện tại là `hai mươi tám` (và các số tương tự).

  - `n = 11`: kết quả của bài làm hiện tại là `một mươi một` (và các số tương tự từ 12 - 19).

---

- [x] Đánh giá: Bài làm rất tốt, chỉ cần lưu ý một số trường hợp đặc biệt để hoàn thiện hơn.

---

## [Mạnh Huy](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_16a)

- [x] Bài 1:

  Bài làm rất tốt. \*

---

- [x] Bài 2:

  Bài làm tốt. \*

  Bài làm yêu cầu đảo ngược số nguyên nên cần thực hiện cả số nguyên âm và số nguyên dương.

  Chưa xử lý các trường hợp n có số 0 ở đầu tiên. Ví dụ một số trường hợp sau:

  - Hiện tại khi nhập `n = 01` thì kết quả của bài làm đang là `1`.

  - Khi nhập `n = 011` thì kết quả của bài làm đang là `11`.

---

- [x] Bài 3:

  Bài làm rất tốt. \*

---

- [x] Đánh giá: Bài làm rất tốt, chỉ cần lưu ý một số trường hợp đặc biệt để hoàn thiện hơn.

---

## [Hà Long Việt](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_16a)

- [x] Bài 1:

  Bài làm tốt.

  Nên đặt tên `function` theo quy tắc camelCase.

  Trong bài làm ở điều kiện `n = 1` hoặc `n = 2` đang return về `[1, 1]` là không hợp lý khi nhập `n = 1` mà giá trị trả về lại là một mảng có 2 số 1. Trong khi `n = 1` chỉ cần hiển thị 1 số fibonacci đầu tiên.

  Bài làm chưa kiểm tra đủ điều kiện của n, hiện nhập n là số âm vẫn thực hiện logic nên bị treo trình duyệt vì đang sử dụng đệ quy lùi.

  Bài làm chưa kiểm tra điều kiện n phải là số nguyên.

  Tham khảo bài làm dưới đây:

  ```js
  var Fibonacci = function (n) {
    if (n === 1 || n === 2) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  var listFibonaci = function (number) {
    if (number > 1) {
      return fibonacci(number) + " " + listFibonaci(number - 1);
    }
    return 1;
  };

  var n = 15;
  if (Number.isInteger(n) && n > 0) {
    console.log(`${n} số Fibonacci đầu tiên là: ${listFibonaci(n)}`);
  } else {
    console.log("Nhập lại N");
  }
  ```

---

- [x] Bài 2:

  Bài làm tốt. \*

  Chưa xử lý các trường hợp n có số 0 ở đầu tiên. Ví dụ một số trường hợp sau:

  - Hiện tại khi nhập `n = 01` thì kết quả của bài làm đang là `1`.

  - Khi nhập `n = 011` thì kết quả của bài làm đang là `9`.

---

- [x] Bài 3:

  Bài làm tốt. \*

  Cần kiểm tra điều kiện đầu vào của n phải từ 0 đến 9999, phải nguyên thì mới thực hiện logic để bài làm thêm chặt chẽ hơn.

  Một số trường hợp chưa xử lý:

  - `n = 034`: kết quả của bài làm hiện tại là `hai mươi tám` (và các số tương tự bắt đầu bằng 0).

---

- [x] Đánh giá: Bài làm tốt cần lưu ý một số trường hợp đặc biệt và điều kiện đầu vào để hoàn thiện hơn.

---

## [Thái Duy Tiến](https://github.com/thaiduytien1611cunbeo/NopbaitapF8/tree/main/Day17/js)

- [x] Bài 1: Bài làm tốt.

  Số Fibonacci đầu tiên là số **0**.

  Đề Xuất.

  ```javascript
  function fibonacci(n) {
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  var n = 10;
  if (!isNaN(n) && n > 0) {
    var count = 0;
    while (count < n) {
      console.log(fibonacci(count));
      count++;
    }
  } else {
    console.log("giá trị n không thoả mãn");
  }
  ```

---

- [x] Bài 2: Bài làm tốt \*.

  Nên Kiểm tra xem đầu vào có phải số không.

---

- [x] Bài 3: Bài làm rất tốt \*.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt. cần cẩn thận đọc kĩ đề bài khi làm bài.

## [Huy Bui](https://github.com/Huy-Bui4869/f8_fullstack_k4/tree/main/Day_16)

- [x] Bài 1: Bài làm tốt.

  Số Fibonacci đầu tiên là số **0**.

  Đề Xuất.

  ```javascript
  function fibonacci(n) {
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  var n = 10;
  if (!isNaN(n) && n > 0) {
    var count = 0;
    while (count < n) {
      console.log(fibonacci(count));
      count++;
    }
  } else {
    console.log("giá trị n không thoả mãn");
  }
  ```

---

- [x] Bài 2: Bài làm tốt \*.

  Nên Kiểm tra xem đầu vào có phải số không.

---

- [x] Bài 3: Bài làm chưa tốt.

  Đầu vào nhập số nào cũng in ra `mười`.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. cần cẩn thận đọc kĩ đề bài khi làm bài.

## [Nguyễn Chi Nam](https://github.com/chinam197/baitap20.git)

- [x] Bài 1: Bài làm chưa tốt.

  Chưa hiểu đề bài.

  Đề bài Yêu cầu Hiện thị N số Fibonacci đầu tiên.

  Đề Xuất.

  ```javascript
  function fibonacci(n) {
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  var n = 10;
  if (!isNaN(n) && n > 0) {
    var count = 0;
    while (count < n) {
      console.log(fibonacci(count));
      count++;
    }
  } else {
    console.log("giá trị n không thoả mãn");
  }
  ```

---

- [x] Bài 2: Bài làm tốt \*.

  Nên Kiểm tra xem đầu vào có phải số không.

---

- [x] Bài 3: Bài làm tốt.

  Không lên tạo 3 mảng làm thế khác phức tạp.

  Sử dụng Kiến thức đang học để làm.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. cần cẩn thận đọc kĩ đề bài khi làm bài.

## [Nguyễn Hưng Tuân](https://github.com/hungtuan/f8-fullstack-k4/blob/main/Day-18-Ham/js/main.js)

- [x] Bài 1: Bài làm tốt \*.

  Nên Kiểm tra đầu vào có phải số không.

---

- [x] Bài 2: Bài làm tốt \*.

  Nên Kiểm tra xem đầu vào có phải số không.

---

- [x] Bài 3: Bài làm tốt \*.

  Nên sử dụng kiến thức đang học để làm.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt. tuy nhiên vẫn còn 1 số lỗi nhỏ.

## [Trần Đức Công](https://github.com/TranCong312002/F8-fullstack-k4/tree/main/Bai_tap_ve_ham)

- [x] Bài 1: Bài làm tốt \*.

  Nên Kiểm tra đầu vào có phải số không.

  Dãy Fibonacci số đầu tiên trong dãy là số **0**.

---

- [x] Bài 2: Bài làm tốt \*.

  Nên Kiểm tra xem đầu vào có phải số không.

---

- [x] Bài 3: Bài làm tốt \*.

  Nên sử dụng kiến thức đang học để làm.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. cần cẩn thận hơn khi làm bài.

## [Lê Đình Hùng](https://github.com/Le-Hung-020903/f8-fullstack-k4/tree/main/function_exercises)

- [x] Bài 1: Bài làm rất tốt \*.

---

- [x] Bài 2: Bài làm tốt \*.

  Chưa kiểm tra trường hợp nhập vào là số âm.

---

- [x] Bài 3:

  Sai 1 số trường hợp đầu vào.

  Đầu vào nhập `2011` in ra kết quả là `hai nghìn mười`.

  Nhập `11` in ra kết quả là `mười`.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. cần cẩn thận hơn khi làm bài.

## [Đặng Khải](https://github.com/AlbertKhai/f8-fullstack-offline/tree/main/Day-18)

- [x] Bài 1: Bài làm rất tốt \*.

---

- [x] Bài 2: Bài làm rất tốt \*.

---

- [x] Bài 3: Bài làm rất tốt \*.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.
