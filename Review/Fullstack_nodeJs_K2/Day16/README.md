## [Đoàn Duy Chinh](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-16)

- [x] Bài 1: Bài làm tốt \*

      Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

---

- [x] Bài 2: Bài làm rất tốt \*

---

- [x] Bài 3: Bài làm rất tốt \*

---

- [x] Bài 4: Bài làm tốt

      Số **0** là số không âm cũng không dương. Nên phải tách Trường hợp đó.

  ```javascript
  var a = 1;
  var b = -1;
  if (a * b >= 0) {
    if (a === 0 || b === 0) {
      console.log("Một trong hai số bằng 0.");
    } else {
      console.log("Hai số cùng dấu.");
    }
  } else {
    console.log("Hai số trái dấu.");
  }
  ```

---

- [x] Bài 5: Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài rất tốt, tuy nhiên cần tính đến các trường hợp đầu vào không phải số.

## [Thế Nguyễn Đại](https://github.com/daithehh04/fullstack/tree/main/day16)

- [x] Bài 1: Bài làm chưa tốt.

      Đề bài yêu cầu không dùng biến trung gian.

      Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

---

- [x] Bài 2: Bài làm chưa tốt.

      Sai công thức.

      ```javascript
            var s = 10 + 20 + 5 ** 10 / 2;
            console.log(s);
      ```

---

- [x] Bài 3: Bài làm rất tốt \*

---

- [x] Bài 4: Bài làm rất tốt \*

---

- [x] Bài 5: Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt , cần cẩn thận hơi khi làm bài.Tuy nhiên cần cải thiện về việc đặt tên biến,

## [Bùi Quang Trưởng](https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/tree/main/Day16)

- [x] Bài 1: Bài làm tốt \*.

      Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

---

- [x] Bài 2: Bài làm rất tốt \*.

---

- [x] Bài 3: Bài làm rất tốt \*

---

- [x] Bài 4: Bài làm rất tốt \*

---

- [x] Bài 5: Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt ,tuy nhiên cần tính đến các trường hợp đầu vào không phải số.

## [Kiều Duy Tùng](https://github.com/Stung16/ex_f8-fullstack/tree/master/day16)

- [x] Bài 1: Bài làm tốt \*.

      Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

---

- [x] Bài 2: Bài làm rất tốt \*.

---

- [x] Bài 3: Bài chưa tốt.

      Đề bài yêu cầu dùng câu lệnh rẽ nhánh.

---

- [x] Bài 4: Bài làm tốt .

      Chưa có trường hợp `a=== 0 || b===0`.

      Số **0** là số không âm cũng không dương.


      ```javascript
            var a = 1;
            var b = -1;
            if (a * b >= 0) {
            if (a === 0 || b === 0) {
                  console.log("Một trong hai số bằng 0.");
            } else {
                  console.log("Hai số cùng dấu.");
            }
            } else {
            console.log("Hai số trái dấu.");
            }
      ```

---

- [x] Bài 5: Bài làm tốt \*

      Chưa tốt ưu **condition** trong câu rẽ nhánh **if** không cần trường hợp dấu **=**

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt ,tuy nhiên cần tính đến các trường hợp đầu vào không phải số và cần học đề bài kĩ hơn.

## [Hồng Hà Nguyễn Thị](https://ha752002.github.io/f8-fullstack-k2/)

- [x] Bài 1: Bài làm tốt \*.

      Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

      Không nên kiểm tra `(Number.isInteger(a) && Number.isInteger(b))` đầu vào có thể là số thập phân.

---

- [x] Bài 2: Bài làm rất tốt \*.

---

- [x] Bài 3: Bài làm tốt \*.

      Chưa tốt ưu **condition** trong câu rẽ nhánh **if**.

      ```javascript
            function maxNumbers(a, b, c) {
            let  maxNumber = a;
            if (maxNumber < b) {
                  maxNumber = b;
            } else if (maxNumber < c) {
                  maxNumber = c;
            }
            return maxNumber;
            }
      ```

---

- [x] Bài 4: Bài làm tốt .

      Không nên kiểm tra `(Number.isInteger(a) && Number.isInteger(b))` đầu vào có thể là số thập phân.

      Chưa có trường hợp `a=== 0 || b===0`.

      Số **0** là số không âm cũng không dương.

      ```javascript
            var a = 1;
            var b = -1;
            if (a * b >= 0) {
            if (a === 0 || b === 0) {
                  console.log("Một trong hai số bằng 0.");
            } else {
                  console.log("Hai số cùng dấu.");
            }
            } else {
            console.log("Hai số trái dấu.");
            }
      ```

---

- [x] Bài 5: Bài làm tốt \*

      Không nên kiểm tra `(Number.isInteger(a) && Number.isInteger(b))` đầu vào có thể là số thập phân.

      Đề Xuất.

      ```javascript
            if ( !isNaN(a) && !isNaN(b)  && !isNaN(c)) {

               ....

            }
      ```

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt ,cần cẩn thận hơn khi nộp bài.

---

## [Tiến Đạt - K2](https://github.com/phamtiendat18/Fullstack-K2/tree/main/Day_16)

- [x] Bài 1:

  Bài làm rất tốt. \*

---

- [x] Bài 2:

  Bài làm rất tốt. \*

  Tuy nhiên, cần chú ý việc `console.log()` ra một cách rõ ràng và chuẩn hơn code sẽ chặt chẽ hơn. Hiện tại đang làm như sau:

  ```js
  console.log(`s : ${s}`); //s : 4882842.5
  ```

  Góp ý nên sửa dấu `:` thành dấu `=`:

  ```js
  console.log(`s = ${s}`); //s : 4882842.5
  ```

---

- [x] Bài 3: Bài làm tốt \*.

      Chưa tốt ưu **condition** trong câu rẽ nhánh **if** không cần trường hợp **==**.

---

- [x] Bài 4: Bài làm tốt \* .

      Chưa tốt ưu **condition** trong câu rẽ nhánh **if**.

      ```javascript
            var a = 1;
            var b = -1;
            if (a * b >= 0) {
            if (a === 0 || b === 0) {
                  console.log("Một trong hai số bằng 0.");
            } else {
                  console.log("Hai số cùng dấu.");
            }
            } else {
            console.log("Hai số trái dấu.");
            }
      ```

---

- [x] Bài 5: Bài làm tốt \*

---

- [x] Đánh giá: Bài làm rất tốt, chỉ cần lưu ý một số chi tiết nhỏ để hoàn thiện hơn.

---

## [Nguyễn Văn Đức](https://github.com/Poyken/Js/tree/main/day2/ex)

- [x] Bài 1:

  Bài làm rất tốt. \*

  Tuy nhiên việc tạo hẳn 1 `function` chỉ để `console.log()` thì không cần thiết cho lắm. Có thể dùng luôn `console.log()` là được.

---

- [x] Bài 2:

  Bài làm rất tốt. \*

---

- [x] Bài 3:

  Bài làm rất tốt. \*

---

- [x] Bài 3: Bài làm rất tốt \*.

---

- [x] Bài 4: Bài làm tốt \* .

      Chưa có trường hợp `a=== 0 || b===0`.

      Số **0** là số không âm cũng không dương.

      ```javascript
            var a = 1;
            var b = -1;
            if (a * b >= 0) {
            if (a === 0 || b === 0) {
                  console.log("Một trong hai số bằng 0.");
            } else {
                  console.log("Hai số cùng dấu.");
            }
            } else {
            console.log("Hai số trái dấu.");
            }
      ```

---

- [x] Bài 5: Bài làm tốt \*

      Chưa tốt ưu **condition** trong câu rẽ nhánh **if** không cần trường hợp **==**.

---

- [x] Đánh giá: Bài làm khá tốt, chỉ cần lưu ý một số trường hợp đặc biệt để hoàn thiện hơn.

---

## [Nguyễn Duy Hiếu](https://github.com/HieuBoss/F8-fullstack-k2/tree/main/javascript/lesson2)

- [x] Bài 1:

  Bài làm rất tốt. \*

---

- [x] Bài 2:

  Bài làm rất tốt. \*

---

- [x] Bài 3:

  Bài làm rất tốt. \*

---

- [x] Bài 3: Bài làm rất tốt \*.

---

- [x] Bài 4: Bài làm tốt \* .

      Chưa có trường hợp `a=== 0 || b===0`.

      Số **0** là số không âm cũng không dương.

      ```javascript
            var a = 1;
            var b = -1;
            if (a * b >= 0) {
            if (a === 0 || b === 0) {
                  console.log("Một trong hai số bằng 0.");
            } else {
                  console.log("Hai số cùng dấu.");
            }
            } else {
            console.log("Hai số trái dấu.");
            }
      ```

---

- [x] Bài 5: Bài làm rất tốt \*

---

- [x] Đánh giá: Bài làm tốt, chỉ cần lưu ý một số lỗi nhỏ để hoàn thiện hơn.

---

## [Đỗ Tiến Khiêm](https://github.com/tienkhiemkahp/f8/tree/main/homework/Day-16)

- [x] Bài 1:

  Bài làm rất tốt. \*

  Tuy nhiên không cần thiết phải khai báo lại a và b khi thực hiện logic hoán vị. Cụ thể trong bài làm đang viết như sau:

  ```js
  var a = 4;
  var b = 5;

  var a = a + b;
  var b = a - b;
  var a = a - b;
  ```

  Vì a và b đã được khai báo đầu tiên rồi nên khi thực hiện logic với a và b không cần phải từ khóa `var` đằng trước. Vì đang sử dụng `var` nên điều này sẽ không có bất kỳ lỗi nào, nhưng nếu sau này sử dụng `let` hoặc `const` để khai báo thì sẽ có lỗi là `Identifier 'a' has already been declared`.

---

- [x] Bài 2:

  Bài làm rất tốt. \*

---

- [x] Bài 3:

  Bài làm rất tốt. \*

---

- [x] Bài 4:

  Bài làm tốt. \*

  Tuy nhiên, bài làm không tách số `0` ra thành các trường hợp riêng. Đề xuất nên thêm trường hợp một trong hai số bằng 0 hoặc cả 2 số bằng 0.

---

- [x] Bài 5:

  Bài làm rất tốt. \*

  Tuy nhiên có thể tham khảo cách đổi chỗ khi so sánh 2 số đứng gần nhau để bài làm ngắn gọn hơn:

  ```js
  if (a > b) {
    temp = a;
    a = b;
    b = temp;
  }
  if (b > c) {
    temp = b;
    b = c;
    c = temp;
  }
  if (a > b) {
    temp = a;
    a = b;
    b = temp;
  }
  ```

---

- [x] Đánh giá: Bài làm rất tốt, chỉ cần lưu ý một số lỗi nhỏ để hoàn thiện hơn.

---

## [Vũ Đức Tài](https://github.com/Apeiron2/F8-fullstack-K2/tree/main/homework/day_16)

- [x] Bài 1:

  Bài làm rất tốt. \*

---

- [x] Bài 2:

  Bài làm rất tốt. \*

  Việc tự tạo ra `function` có chức năng lũy thừa là rất tốt, tuy nhiên với một bài đơn giản như này thì có thể sử dụng toán tử `**` hoặc hàm `Math.pow()` cho gọn.

---

- [x] Bài 3:

  Bài làm rất tốt. \*

---

- [x] Bài 4:

  Bài làm tốt. \*

  Tuy nhiên, bài làm không tách số `0` ra thành các trường hợp riêng. Đề xuất nên thêm trường hợp một trong hai số bằng 0 hoặc cả 2 số bằng 0.

---

- [x] Bài 5:

  Bài làm rất tốt. \*

---

- [x] Đánh giá: Bài làm chưa tốt, cần tuân thủ chuẩn Output mà đề bài đưa ra và kiểm tra đầy đủ các trường hợp đầu vào có thể xảy ra và cần hoàn thành đầy đủ bài tập về nhà. Nếu như gặp khó khăn cần đặt câu hỏi kịp thời để được giải đáp.

---

## [Đỗ Khắc Quân](https://github.com/Quan2409/F8-HomeWork/tree/main/JS/day16)

- [x] Bài 1:

  Bài làm rất tốt. \*

---

- [x] Bài 2:

  Bài làm chưa tốt.

  Cần xem lại kiến thức về các toán tử trong Javascript.

  Trong Javascript để diễn tả phép tính lũy thừa thì không dùng `^` mà sử dụng toán tử `**` hoặc hàm `Math.pow()` để thực hiện phép tính lũy thừa.

  Tham khảo cách sau đây:

  ```js
  var S = 10 + 20 + Math.pow(5, 10) / 2;
  ```

  hoặc:

  ```js
  var S = 10 + 20 + 5 ** 10 / 2;
  ```

---

- [x] Bài 3:

  Bài làm tốt. \*

  Tuy nhiên, bài làm đang làm theo cách xét tất cả các trường hợp có thể xảy ra, cách làm như vậy đúng trong trường hợp này nhưng nếu ở trường hợp khác tìm số lớn nhất trong 5 số hoặc nhiều hơn sẽ phải xét rất nhiều trường hợp, làm cho code rắc rối, không hiệu quả và có thể bỏ xót trường hợp nào đó.

  Tham khảo đoạn code sau đây:

  ```js
  var a = 60,
    b = 30,
    c = 90;

  var max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  console.log("Số lớn nhất là:", max);
  ```

---

- [x] Bài 4:

  Bài làm tốt. \*

  Bài làm có xét trường hợp tích của 2 số bằng `0` nhưng khi thông báo ra cần thông báo một cách rõ ràng sẽ chặt chẽ hơn là thông báo `null`.

---

- [x] Bài 5:

  Bài làm tốt. \*

  Tuy nhiên việc xét thêm điều kiện cuối cùng thông báo ra `null` làm cho logic không được tối ưu. Vì ở 3 điều kiện đầu tiên đã sắp xếp theo thứ tự tăng dần rồi nên không cần điều kiện cuối nữa.

  Góp ý: Nên bỏ điều kiện cuối cùng thông báo ra `null`.

---

- [x] Đánh giá: Bài làm tốt, chỉ cần lưu ý một số lỗi nhỏ để hoàn thiện hơn.

---

## [Việt Hoàng](https://github.com/BuiVietHoang2211/f8-fullstack-k2/tree/main/JS/Day_16)

- [x] Bài 1:

  Bài làm rất tốt. \*

---

- [x] Bài 2:

  Bài làm rất tốt. \*

---

- [x] Bài 3:

  Bài làm rất tốt. \*

---

- [x] Bài 4:

  Bài làm tốt. \*

  Tuy nhiên, bài làm không tách số `0` ra thành các trường hợp riêng. Đề xuất nên thêm trường hợp một trong hai số bằng 0 hoặc cả 2 số bằng 0.

---

- [x] Bài 5:

  Bài làm rất tốt. \*

---

- [x] Đánh giá: Bài làm rất tốt, chỉ cần lưu ý trường hợp đặc biệt ở bài 4 để hoàn thiện hơn.

---
