## [NTiến Đạt](https://github.com/Ntiendat-2k3/F8-js-BTVN/tree/main/_BTVN/Buoi1)

- [x] Bài 1: Bài làm tốt \*

  Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

---

- [x] Bài 2: Bài làm rất tốt \*

---

- [x] Bài 3: Bài làm rất tốt \*

---

- [x] Bài 4: Bài làm rất tốt \*

---

- [x] Bài 5: Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài rất tốt, tuy nhiên cần tính đến các trường hợp đầu vào không phải số.

## [Nguyễn Quang Cường](https://github.com/cuonggold2408/Fullxinach_K3/tree/main/Day_16)

- [x] Bài 1: Bài làm tốt \*

  Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

---

- [x] Bài 2: Bài làm rất tốt \*

---

- [x] Bài 3: Bài làm chưa tốt

  Chưa kiểm tra trường hợp 2 số bằng nhau, ra kết quả sai

  Có thể gán luôn giá trị lớn nhất là `a` để giảm bớt 1 lần kiểm tra.

  ```js
  var a = 10,
    b = 15,
    c = 8,
    biggestNumber = a;
  if (b >= biggestNumber) {
    biggestNumber = b;
  }
  if (c >= biggestNumber) {
    biggestNumber = c;
  }

  console.log("biggestNumber: " + biggestNumber);
  ```

---

- [x] Bài 4: Bài làm rất tốt \*

---

- [x] Bài 5: Bài làm chưa tốt

  Sai trường hợp a < b, a > c. Lúc này thực hiện đổi chỗ b, c với nhau sau đó mới kiểm tra a, c thì giá trị của c lúc này là b và vì b > a nên c > a => Không xảy ra trường hợp a > c. (Có thể thử input: a = 13, b = 16, c = 9;)

  Vì vậy nên kiểm tra a > c ngay sau khi kiểm tra a > b

  ```js
  var a = 13,
    b = 16,
    c = 9,
    d;

  if (a >= b) {
    d = a;
    a = b;
    b = d;
  }
  if (a >= c) {
    d = a;
    a = c;
    c = d;
  }
  if (b >= c) {
    d = b;
    b = c;
    c = d;
  }
  ```

  console.log(`Thứ tự tăng dần là: ${a}, ${b}, ${c}`);

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần cẩn thận hơi khi làm bài, tuy nhiên cần tính đến các trường hợp đầu vào không phải số, chú ý kiểm tra kĩ tất cả các trường hợp có thể xảy ra.

## [Đỗ Văn Khoa](https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/tree/main/Day16)

- [x] Bài 1: Bài làm tốt \*.

  Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

---

- [x] Bài 2: Bài làm rất tốt \*

---

- [x] Bài 3: Bài làm chưa tốt

  Chưa kiểm tra trường hợp hai số bằng nhau

---

- [x] Bài 4: Bài làm tốt

  Chưa kiểm tra trường hợp một trong 2 số bằng 0 (Số 0 không phải số âm cũng không phải số dương)

---

- [x] Bài 5: Bài làm rất tốt \*

  Thay vì viết `"a = " + a + ", " + " b = " + b + ',' + " c = " + c + "</br>"` có thể viết **\`a = ${a}, b = ${b}, c = ${c}\`** giúp cho code dễ đọc hơn

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần tính đến các trường hợp đầu vào không phải số.

## [Hữu Hưng](https://github.com/HuuHungg/f8-javascript/tree/main/Day1)

- [x] Bài 1: Bài làm rất tốt \*.

  Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

  Nên sử dụng một thẻ khác để hiển thị ra kết quả thay cho hiển thị luôn trong thẻ input

---

- [x] Bài 2: Bài làm rất tốt \*.

---

- [x] Bài 3: Bài làm tốt

  Trường hợp số nhập vào là số thập phân bị lỗi

---

- [x] Bài 4: Bài làm rất tốt \*.

---

- [x] Bài 5: Bài làm rất tốt \*

  Nên gán `document.getElementById("result")` vào 1 biến để sử dụng ở dưới giúp code ngắn hơn, dễ đọc hơn

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần tính đến các trường hợp đầu vào đặc biệt.

## [Phí Văn Đức](https://github.com/PhiVanDuc/Offline-F8-K3/tree/main/Day-16-JS)

- [x] Bài 1: Bài làm rất tốt \*.

  Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

---

- [x] Bài 2: Bài làm rất tốt \*.

---

- [x] Bài 3: Bài làm rất tốt \*.

---

- [x] Bài 4: Bài làm tốt .

  Chưa có trường hợp `a=== 0 || b===0`.

  Số **0** là số không âm cũng không dương.

---

- [x] Bài 5: Bài làm rất tốt

  Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần tính đến các trường hợp đầu vào đặc biệt.

---

## [Vũ Thống](https://github.com/pencilbsp/f8_offline/tree/main/BTVN/btvn_buoi_16)

- [x] Bài 1: Bài làm chưa tốt.

  Đề bài yêu cầu hoán vị số a cho số b , nghĩa là đổi chỗ giá trị của số a cho giá trị của số b , không dùng biến trung gian.

  Đề Xuất.

  ```javascript
  var a = 5;
  var b = 7;
  a += b;
  b = a - b;
  a -= b;
  console.log(a, b);
  ```

---

- [x] Bài 2: Bài làm chưa tốt.

  Khi `console.log(`S = 10 + 20 + 5 \*\* 10 / 2`);` nó hiểu đây là chuỗi, chứa không phải giá trị tính toán.

  Yều cầu sửa lại.

  ```javascript
  console.log(`S = ${10 + 20 + 5 ** 10 / 2}`);
  ```

---

- [x] Bài 3: Bài làm rất tốt \* .

---

- [x] Bài 4: Bài làm tốt

  Sai Trường hợp nếu `a === 0 || b === 0` thì không thể xét dấu.

  Số `0` không phải số âm cũng không phải số dương.

  Đề Xuất.

  ```javascript
  var a = -10;
  var b = 20;
  var c =
    a * b === 0
      ? `không thể xét dấu vì a hoặc b bằng 0`
      : a * b > 0
      ? `2 số cùng dấu`
      : `2 số trái dấu`;
  console.log(c);
  ```

---

- [x] Bài 5: Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, cần cẩn thận hơn khi làm bài. tuy nhiên Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

## [Nguyễn Đức](https://github.com/Nguyenduc2108/f8-fullstack-k3/tree/main/Homework_session_16)

- [x] Bài 1: Bài làm tốt \*.

  Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

---

- [x] Bài 2: Bài làm rất tốt \*.

---

- [x] Bài 3: Bài làm rất tốt \* .

---

- [x] Bài 4: Bài làm rất tốt \*.

---

- [x] Bài 5: Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên vẫn còn 1 số lỗi nhỏ .

## [Nguyễn Thành Tráng](https://github.com/thanhtrang16490/f8-offline/tree/main/data/lesson16)

- [x] Bài 1: Bài làm tốt \*.

  Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

---

- [x] Bài 2: Bài làm rất tốt \*.

---

- [x] Bài 3: Bài làm chưa tốt.

  Sai Trường hợp `a < b < c` ví dụ: `a = 23 , b = 200, c =300`.


  Với hàm trên `max gán cho a = 23` so sách `max= 23 <= b = 200` **thoả mãn** gán `max = 200` thoát khỏi câu rẽ nhánh **if** Không chạy vế **else**.

  Do vậy không được dùng **else** trong trường hợp này.

  Đề Xuất.

  ```javascript
  var maxNumber = function (a, b, c) {
    var max = a;
    if (max <= b) {
      max = b;
    }
    if (max <= c) {
      max = c;
    }

    return console.log(`Số lớn nhất là ${max}`);
  };

  maxNumber(23, 200, 300);
  ```

---

- [x] Bài 4: Bài làm tốt \*.

  Chưa tốt ưu **condition** trong câu rẽ nhánh **if** .

  Đề Xuất.

  ```javascript
  var a = -10;
  var b = 20;
  var c =
    a * b === 0
      ? `không thể xét dấu vì a hoặc b bằng 0`
      : a * b > 0
      ? `2 số cùng dấu`
      : `2 số trái dấu`;
  console.log(c);
  ```

---

- [x] Bài 5: Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên cần cẩn thận hơn khi làm bài.

---

## [Vương Đông](https://github.com/DongVuong/f8-fullstack-k3/tree/main/DAY16)

- [x] Bài 1:

  Bài làm rất tốt. \*

  Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

---

- [x] Bài 2:

  Bài làm rất tốt. \*

  Tuy nhiên, cần chú ý việc `console.log()` ra một cách rõ ràng và chuẩn hơn code sẽ chặt chẽ hơn. Hiện tại đang làm như sau:

---

- [x] Bài 3: Bài làm tốt \*.

  Sử dụng **===** thay vì **==** để so sánh giá trị và kiểu dữ liệu.

  Chú ý format code giúp cho code dễ đọc hơn

  Nên đặt biến cho số lớn nhất và chỉ `console.log()` ở cuối cùng giúp tránh lặp code, code dễ đọc hơn. Có thể tham khảo cách viết sau:

  ```js
  var a = 10,
    b = 15,
    c = 8,
    biggestNumber = a;
  if (b >= biggestNumber) {
    biggestNumber = b;
  }
  if (c >= biggestNumber) {
    biggestNumber = c;
  }

  console.log("biggestNumber: " + biggestNumber);
  ```

---

- [x] Bài 4: Bài làm rất tốt \*

---

- [x] Bài 5: Bài làm rất tốt \*

  Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

---

- [x] Đánh giá: Bài làm rất tốt, chỉ cần lưu ý một số chi tiết nhỏ để hoàn thiện hơn.

---

## [Trần Xuân Bách](https://github.com/bach0128/f8-fullstack-k3/tree/main/Day16)

- [x] Bài 1:

  Bài làm rất tốt. \*

  Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

---

- [x] Bài 2:

  Bài làm rất tốt. \*

---

- [x] Bài 3:

  Bài làm tốt. \*

  Nên đặt biến cho số lớn nhất và chỉ `console.log()` ở cuối cùng giúp tránh lặp code, code dễ đọc hơn. Có thể tham khảo cách viết sau:

  ```js
  var a = 10,
    b = 15,
    c = 8,
    biggestNumber = a;
  if (b >= biggestNumber) {
    biggestNumber = b;
  }
  if (c >= biggestNumber) {
    biggestNumber = c;
  }

  console.log("biggestNumber: " + biggestNumber);
  ```

---

- [x] Bài 4: Bài làm rất tốt \* .

---

- [x] Bài 5: Bài làm tốt \*

  Sử dụng nhiều câu lệnh rẽ nhánh `if else` lồng khau gây khó đọc code

  Có thể tham khảo cách làm sau:

  ```js
  var a = 18,
    b = 180,
    c = 70,
    d;

  if (a >= b) {
    d = a;
    a = b;
    b = d;
  }
  if (a >= c) {
    d = a;
    a = c;
    c = d;
  }
  if (b >= c) {
    d = b;
    b = c;
    c = d;
  }

  console.log(`Thứ tự tăng dần là: ${a}, ${b}, ${c}`);
  ```

---

- [x] Đánh giá: Bài làm khá tốt, chỉ cần lưu ý một số trường hợp đặc biệt để hoàn thiện hơn.
