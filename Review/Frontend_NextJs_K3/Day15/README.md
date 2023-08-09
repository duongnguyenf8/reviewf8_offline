## [Nguyễn Khắc Tú](https://github.com/tunguyenhd/FrontEnd-F8-K3/tree/main/Bai_tap/javascript/Day_1)

- [x] Bài 1: Bài làm tốt \*

  Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

---

- [x] Bài 2: Bài làm rất tốt \*

---

- [x] Bài 3: Bài làm chưa tốt

  Trường hợp hai số bằng nhau ra kết quả sai

  Thay vì sử dụng nhiều câu lệnh `if else` có thể rút gọn bằng cách gán **a** là giá trị lớn nhất sau đó gán lại nếu **b, c** lớn hơn **a**.

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

- [x] Bài 4: Bài làm tốt

  Chưa kiểm tra trường hợp một trong hai số bằng 0 (Số 0 không là số âm cũng không là số dương)

---

- [x] Bài 5: Bài làm chưa tốt

  Chương trình không chạy do chưa khai báo biến `temp`. Nên kiểm tra kĩ sau khi hoàn thành bài

---

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt, cần đọc kĩ đề bài và để ý các trường hợp đầu vào không phải là số, số đặc biệt. Cần kiểm tra kĩ kết quả đầu ra ở nhiều trường hợp.

## [Sơn Trần](https://github.com/sontran2003/f8-fe-k3/tree/main/day15)

- [x] Bài 1: Bài làm tốt \*

  Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

  Chú ý các viết code chuẩn format.

  Khai báo biến ngăn cách giữa các biến là dấu **,**

  Nên thống nhất một cách viết toán tử xuyên suốt cả bài giúp dễ đọc code (**b = a - b ;a -= b;**)

  Thừa số 8 ở đầu mỗi dòng code

---

- [x] Bài 2: Bài làm rất tốt \*

---

- [x] Bài 3: Bài làm rất tốt \*

---

- [x] Bài 4: Bài làm rất tốt \*

  Chú ý cách đặt tên `function` có ý nghĩa. Không đặt những tên không có ý nghĩa

---

- [x] Bài 5: Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần tính đến các trường hợp đầu vào không phải số.

## [Vũ Thành Khang](https://github.com/countduck4819/f8-frontend/tree/main/Day15)

- [x] Bài 1: Bài làm tốt \*.

  Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

  Nên truyền `a, b` vào trong dòng code này, không fix cứng a = 10, b = 20: `document.write("<h2>Em sẽ cho a = 10 và b = 20</h2>");`

  Nếu đã cho hiện kết quả ra ngoài màn hình thì nên loại bỏ những phần `console.log()` không cần thiết

  Nên thống nhất một cách viết toán tử xuyên suốt cả bài giúp dễ đọc code (**b = a - b ;a -= b;**)

---

- [x] Bài 2: Bài làm rất tốt \*

---

- [x] Bài 3: Bài làm rất tốt \*

  Phần đoạn mã trong C1 sử dụng nhiều toán tử điều kiện lồng nhau để tìm số lớn nhất. Mặc dù cách này hoạt động, nhưng nó có thể làm cho mã trở nên khó hiểu và khó kiểm soát hơn khi muốn sửa đổi sau này. => Nên sử dụng C2

---

- [x] Bài 4: Bài làm rất tốt \*

---

- [x] Bài 5: Bài làm rất tốt \*

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần tính đến các trường hợp đầu vào không phải số.

## [Nguyen Van Hai](https://github.com/hainvsp9x/f8-feoffline-k3/tree/main/javascript/day-1)

- [x] Bài 1: Bài làm rất tốt \*.

  Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

  Nên thống nhất một cách viết toán tử xuyên suốt cả bài giúp dễ đọc code (**b = a - b ;a -= b;**)

---

- [x] Bài 2: Bài làm chưa tốt

  Bài làm sai. Chú ý toán tử để tính lũy thừa là `**`

---

- [x] Bài 3: Bài làm rất tốt \*

---

- [x] Bài 4: Bài làm tốt.

  Chưa kiểm tra trường hợp có một số là 0 (Số 0 không phải số âm cũng không phải số dương)

---

- [x] Bài 5: Bài làm chưa tốt

  Nên thống nhất một cách viết toán tử xuyên suốt cả bài giúp dễ đọc code như đã góp ý trên bài 1

  Sai trường hợp `a > b, a > c` vì sử dụng câu lệnh điều kiện là `if else` thì đầu tiên nếu rơi vào điều kiện `a > b` thì sẽ không rơi vào các điều kiện còn lại nữa.

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

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên cần tính đến các trường hợp đầu vào đặc biệt, chú ý kiểm tra kĩ các trường hợp đầu vào khác nhau.

## [Nguyễn Cao Đạt](https://github.com/datanhsayhallo/F8-homework)

- [x] Bài 1: Bài làm rất tốt \*.

  Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

---

- [x] Bài 2: Bài làm rất tốt \*.

---

- [x] Bài 3: Bài làm chưa tốt

  Sai trường hợp 2 số bằng nhau (Có thể thử trườn hợp a = b > c)

---

- [x] Bài 4: Bài làm tốt \*.

  Nên kiểm tra có phải một số hợp lệ không trước khi kiểm tra dấu.

---

- [x] Bài 5: Bài làm rất tốt \*

  Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

  **Trả lời câu hỏi:** Khi sử dụng `prompt` để nhập số vào thì giá trị trả về sẽ có kiểu dữ liệu chuỗi chứ không phải là số. Do đó, trong bài đang thực hiện so sánh chuỗi chứ không phải so sánh số (Sẽ dựa vào kí tự đầu tiên để so sánh, theo ví dụ trong bài là: 1 -> 4 -> 7). Có thể khắc phục bằng cách thực hiện một bước ép kiểu từ chuỗi sang số trước khi so sánh:

  ```js
  var a = "10";
  console.log(typeof a); // string
  a = +a;
  console.log(typeof a); // number
  ```

---

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần tính đến các trường hợp đầu vào đặc biệt.

---

## [Duy](https://github.com/saiduii/F8-FE-K3/tree/main/Day-15)

- [x] Bài 1: Bài làm tốt \*.

  Nên kiểm tra có phải một số hợp lệ không trước khi so sánh và đổi chỗ.

---

- [x] Bài 2: Bài làm rất tốt \*.

---

- [x] Bài 3: Bài làm chưa tốt

  Trường hợp hai số bằng nhau ra kết quả sai

  Thay vì sử dụng nhiều câu lệnh `if else` có thể rút gọn bằng cách gán **a** là giá trị lớn nhất sau đó gán lại nếu **b, c** lớn hơn **a**.

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

- [x] Bài 4: Bài làm tốt

  Chưa kiểm tra trường hợp một trong 2 số bằng 0 (Số 0 không phải số âm cũng không phải số dương)

---

- [x] Bài 5: Bài làm chưa tốt

  Sai trong trường hợp **a > b, b = c** (có thể thử a = 11; b = 10; c = 10)

  Code còn dài, khó đọc, khó bảo trì. Có thể tham khảo cách viết sau:

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

  **Giải thích đoạn code trên:**

  Chương trình sử dụng lệnh "if" để so sánh giá trị của a và b. Nếu a lớn hơn hoặc bằng b, thì biến d (tạm thời) sẽ giữ giá trị của a, sau đó a sẽ nhận giá trị của b và b sẽ nhận giá trị của d. Mục tiêu ở đây là để đảm bảo a luôn nhỏ hơn b.

  Thực hiện tương tự cho a và c. Nếu a lớn hơn hoặc bằng c, thì biến d sẽ giữ giá trị của a, sau đó a sẽ nhận giá trị của c và c sẽ nhận giá trị của d. Mục tiêu ở đây là để đảm bảo a cũng luôn nhỏ hơn c.

  Cuối cùng, sử dụng lệnh "if" để so sánh giá trị của b và c. Nếu b lớn hơn hoặc bằng c, thì biến d sẽ giữ giá trị của b, sau đó b sẽ nhận giá trị của c và c sẽ nhận giá trị của d. Mục tiêu ở đây là để đảm bảo b luôn nhỏ hơn c

  Kết quả là ba số a, b và c sẽ được sắp xếp theo thứ tự tăng dần

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên vẫn còn 1 số lỗi, cần tính đến các trường hợp đầu vào đặc biệt, chú ý kiểm tra kĩ các trường hợp đầu vào khác nhau.

## [thuy nguyen](https://github.com/tnnhungoc/F8-FE-K3/tree/main/FEK3/Day15_JS)

## [Bảo Anh](https://github.com/Baoanh2004/Frontend-Offline-K3/tree/main/Day-15)

## [Nguyễn Đình Khánh](https://github.com/khanhngoolearn/F8-homework-fe-k3/tree/main/day15)

## [Hùng Mạnh](https://github.com/truongmanhhung58/F8-FrontEnd-k3/blob/main/javascript/Day_1/js/Bai1.js)

## [Gia Bảo Đỗ](https://github.com/Dogiaba/F8-Fe-K3/tree/main/Javascript/Day15)

## [Nguyễn Đức Hải](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-14)
