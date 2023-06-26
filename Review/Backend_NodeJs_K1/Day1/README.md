# Dương test bài học viên Backend NodeJS Day1

- [x] [Hiếu Nguyễn Minh](https://github.com/hiusnguyen201/F8-Exercise.git)

  Sớm nhất \*

Bài 1: Bài làm rất tốt \*

---

Bài 2: Bài làm rất tốt \*

---

Bài 3: Bài làm rất tốt \*

---

Bài 4:

Nếu 1 số là `0` và 1 số là số `dương` vẫn ra `true` mặc dù `0` không phải là số dương

---

Bài 5: Làm sai.

Thứ tự không tăng dần mà giảm dần

Đánh giá chung bài tập về nhà: Tốt, cần chú ý tính đến nhiều trường hợp khác nhau, code lại bài 5

---

- [x] [Đào Đăng Mạnh](https://github.com/Dangmanh2001/f8_BE_k1)

Bài 1: Bài làm rất tốt \*

---

Bài 2: Bài làm **Không Tốt**

Sai đề bài vì không yêu cầu trường hợp nào ưu tiên

---

Bài 3:

Khi có ít nhất số là 0, bài làm sai

Có vẻ hầu hết các trường hợp đặc biệt là lấy số `a` nếu nó khác 0

Bài này có thể tối ưu một cách tốt hơn như:

```js
var max = a;
if (b > max) {
  max = b;
}
if (c > max) {
  max = c;
}
log("Số lớn nhất là " + max);
```

---

Bài 4:

Khi có ít nhất 1 số là 0, bài làm sai (Chưa tính tới trường hợp ít nhất 1 số là 0)

Bài này có thể tối ưu một cách tốt hơn như:

```js
if (a * b > 0) {
  log("a và b cùng dấu (Âm và Âm) hoặc (Dương và Dương)");
} else if (a * b < 0) {
  log("a và b trái dấu (Âm và Dương)");
} else if (a + b === 0) {
  log("a và b cùng bằng 0 (Cùng dấu)");
} else {
  log("a hoặc b bằng 0 (Khác dấu)");
}
```

---

Bài 5: Bài làm **Không tốt**

Đánh giá chung bài tập về nhà: Cần chú ý nhiều hơn đến các trường hợp đặc biệt, cần tự self-test lại bài làm trước khi nộp

---

- [x] [Minh Dương](https://github.com/MinhTeyer/F8-BackEnd-K1/tree/main/Day-1)

Bài 1: Bài làm rất tốt \*

---

Bài 2: Bài làm **Không Tốt**

Sai đề bài vì không yêu cầu trường hợp nào ưu tiên

---

Bài 3: Bài làm rất tốt \*

---

Bài 4:

Thiếu case trường hợp đặc biệt, 1 số hoặc cả 2 số là 0

---

Bài 5: Bài làm rất tốt \*

---

Đánh giá chung bài tập về nhà: Tốt, cần chú ý tính đến nhiều trường hợp đặc biệt khác nhau

---

- [x] [Mai Đức Hiền](https://github.com/maiduchien23/F8-BE/tree/main/f8_nodejs/homeworld)

Bài 1: Bài làm rất tốt \*

---

Bài 2: Bài làm rất tốt \*

---

Bài 3:

Nếu `a = 0`, `b = 0` thì bài làm sai

---

Bài 4:

Thiếu check case trường hợp đặc biệt, 1 số hoặc cả 2 số là 0

---

Bài 5: Bài làm tốt

Thiếu case 2 hoặc 3 số bằng nhau

---

Đánh giá chung bài tập về nhà: Tốt, cần chú ý tính đến nhiều trường hợp đặc biệt khác nhau

Sai chính tả `homeworld` => `homework`

---

- [x] [Nguyễn Nhất](https://github.com/NguyenNhat04/f8-backend-k1/tree/main/day-1)

Bài 1: Bài làm rất tốt \*

---

Bài 2: Bài làm rất tốt \*

---

Bài 3:

Nếu `a = 0`, `b = 0` thì bài làm sai

---

Bài 4:

Thiếu check case trường hợp đặc biệt, 1 số hoặc cả 2 số là 0

---

Bài 5: Bài làm tốt

Thiếu case 2 hoặc 3 số bằng nhau

---

Đánh giá chung bài tập về nhà: Tốt, cần chú ý tính đến nhiều trường hợp đặc biệt khác nhau

---

- [x] [Minh Đức Ngô](https://github.com/NgoMinhDuc28112001/f8-exercise-k1/tree/main/bai_tai_buoi_1)

Bài 1: Bài làm tốt \*

Sau khi khai báo nên gán luôn để tránh các lôi không mong muốn như undefined, null, NaN

---

Bài 2: Bài làm tốt \*

Việc gom nhóm `5**10` vào cặp ngoặc đơn là không cần thiết vì khi tính đúng quy tắc nhân/chia trước cộng/trừ sau từ trái qua phải thì phép tính đó được thực hiện đầu tiên rồi.

---

Bài 3:

Nếu `a === b && a > c`, `c = any` thì cách 1 làm sai

Nếu `a <= 0`, `b <= 0`, `c = any` thì cách 2 làm sai

---

Bài 4: Bài làm **Không tốt**

Điều kiện đó chỉ đúng ở 1 trường hợp quá nhỏ. Nếu 2 số cùng dấu nhưng không bằng nhau vẫn bị coi là khác dấu

---

Bài 5: Bài làm **Không tốt**

Quá thủ công. Nếu có nhiều số hơn thì sẽ rất khó để làm

Nếu cả 3 số là 0 thì không check được.

---

Đánh giá chung bài tập về nhà: Cần làm tối ưu hơn, tính toán tốt hơn để tránh các lỗi không mong muốn

---

- [x] [Bao Pham Van](https://github.com/baodepzai01/f8-back-end-k1/tree/main/BTVN)

Bài 1: Bài làm rất tốt \*

---

Bài 2: Bài làm rất tốt \*

---

Bài 3: Bài làm rất tốt \*

---

Bài 4: Bài làm rất tốt \*

---

Bài 5: Bài làm rất tốt \*

---

Đánh giá chung bài tập về nhà: Bài làm rất tốt \*

---

# Quân test bài học viên Backend NodeJS Day1

- [x] [Nam Nguyen](https://github.com/namdctry/f8-backend-k1)

Bài 1: Làm sai yêu cầu đề bài.

Đề bài yêu cầu không dùng biến trung gian nhưng vẫn dùng biến trung gian để đổi chỗ hai biến.

Đề xuất phương pháp:

```js
let a = 3,
  b = 2;

a = a + b - b;
b = a + b - a;

console.log(a, b);
//  Kết quả: 2 3
```

---

Bài 2: Bài làm rất tốt \*

---

Bài 3: Bài làm tốt \*

Cần chú ý về đặt tên biến cho tường minh hơn. Ở đây cần tìm số lớn nhất nên thay biến s bằng biến max.

Việc đặt biến tường minh giúp cho sau này đọc lại code sẽ dễ hiểu hơn.

---

Bài 4: Bài làm chưa tốt

Output chưa đúng yêu cầu đề bài: Cần log ra kết quả là hai số cùng dấu hay khác dấu chứ không phải log 2 số a, b

Chưa xét đến trường hợp 1 trong 2 số bằng 0 hoặc cả 2 số bằng 0.

Đề xuất: Thêm trường hợp a hoặc b hoặc cả 2 số bằng 0.

---

Bài 5: Bài làm rất tốt \*

Đánh giá chung: Tốt, cần chú ý đến nhiều trường hợp để clear hết tất cả các trường hợp có thể xảy ra. Code lại bài 1.

Không nên khai báo 1 biến chung cho cả 5 bài, nên khai báo biến riêng cho mỗi bài, coi mỗi bài là một chương trình riêng.

---

- [x] [Nguyễn Quang Minh](https://github.com/wex-alacrity/F8_BE_QuangMinh/tree/main/Buoi1)

Bài 1: Bài làm rất tốt \*

---

Bài 2: Bài làm rất tốt \*

---

Bài 3: Bài làm rất tốt \*

---

Bài 4: Bài làm chưa tốt

Chưa xét đến trường hợp 1 trong 2 số bằng 0 hoặc cả 2 số bằng 0.

Đề xuất: Thêm trường hợp a hoặc b hoặc cả 2 số bằng 0.

---

Bài 5: Bài làm tốt \*

Trên thực tế không nên sử dụng toán tử gán trong biểu thức. Điều này làm code khó hiểu.

Đánh giá chung bài tập về nhà: Tốt, cần chú ý tính đến nhiều trường hợp đặc biệt khác nhau

---

- [x] [Trần Văn Hiểu](https://github.com/tuilahieu/nodejs/blob/main/exercise/day1/exercise.js)

Bài 1: Bài làm chưa tốt

Nếu một trong hai số là 0 thì sẽ không thực hiện được phép chia.

Đề xuất: Có thể thay toán tử / và toán tử \* thành 2 toán tử + và -

---

Bài 2: Bài làm rất tốt \*

---

Bài 3: Bài làm chưa tốt

Sai nếu a = b = 5 và c = 3. Cần xét đến trường hợp 2 trong 3 số bằng nhau.

---

Bài 4: Bài làm chưa tốt

Chưa xét đến trường hợp 1 trong 2 số bằng 0 hoặc cả 2 số bằng 0.

---

Bài 5: Bài làm chưa tốt

Nếu một trong 2 số bằng 0 sẽ không thể thực hiện phép chia.

Đề xuất: Sử dụng cách đổi chỗ 2 số đơn giản hơn như dùng biến trung gian.

Đánh giá chung bài tập về nhà: Bài làm đa phần chưa tốt cần chú ý hơn về một số trường hợp đặc biệt.

---

- [x] [Dương Trung Kiên](https://github.com/Kpa02/F8_Backend/tree/main/BaiTapB1)

Bài 1: Bài làm rất tốt \*

---

Bài 2: Bài làm rất tốt \*

---

Bài 3: Bài làm rất tốt \*

---

Bài 4: Bài làm chưa tốt

Chưa xét đến trường hợp 1 trong 2 số bằng 0 hoặc cả 2 số bằng 0.

---

Bài 5: Bài làm rất tốt \*

Đánh giá chung bài tập về nhà: Bài làm đa phần khá tốt, chỉ cần lưu ý một số trường hợp đặc biệt ở bài 4.

---

- [x] [Thanh Nguyễn](https://github.com/nguyenducthanh04/f8-backend-k1.git)

Bài 1: Bài làm rất tốt \*

---

Bài 2: Bài làm rất tốt \*

---

Bài 3: Bài làm rất tốt \*

---

Bài 4: Bài làm chưa tốt

Chưa xét đến trường hợp 1 trong 2 số bằng 0 hoặc cả 2 số bằng 0.

---

Bài 5: Bài làm rất tốt \*

Đánh giá chung bài tập về nhà: Bài làm đa phần khá tốt, chỉ cần lưu ý một số trường hợp đặc biệt ở bài 4.

---

- [x] [Phương](https://github.com/phuongnd168/back-end-f8)

Bài 1: Bài làm rất tốt \*

---

Bài 2: Bài làm rất tốt \*

---

Bài 3: Bài làm chưa tốt

Chưa xét đến trường hợp có 2 số hoặc cả 3 số bằng nhau.

Đề xuất: Nên gán biến max vào một trong ba số rồi so sánh với 2 số còn lại để tìm ra số lớn nhất. Như vậy sẽ không cần phải xét nhiều trường hợp.

```js
var max = a;
if (b > max) {
  max = b;
}
if (c > max) {
  max = c;
}
console.log(`Số lớn nhất trong 3 số là ${max}`);
```

---

Bài 4: Tốt

Nếu 2 số cùng là 0 thì vẫn được coi là cùng dấu

Nếu chỉ 1 trong 2 số là 0 thì được coi là khác dấu

---

Bài 5: Bài làm chưa tốt

Không nên xét tất cả các trường hợp như vậy, cần phải có logic để xử lý nếu đề bài yêu cầu sắp xếp nhiều số.

Đề xuất: Hoán đổi vị trí của các số để sắp xếp theo đúng thứ tự.

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

Đánh giá chung bài tập về nhà: Tốt, cần chú ý một số trường hợp đặc biệt và cần xử lý logic ở bài 5 chứ không nên liệt kê tất cả các trường hợp. Code lại bài 5.

---

- [x] [Trần Anh Đức](https://github.com/ducanhtranptit/F8_Homework/tree/main/Buoi1)

Bài 1: Bài làm rất tốt \*

---

Bài 2: Bài làm sai

Trong JavaScript không có toán tử ^.

Đề xuất: Sử dụng hàm

```js
Math.pow();
```

hoặc toán tử \*\* để giải quyết.

---

Bài 3: Bài làm rất tốt \*

---

Bài 4: Bài làm rất tốt \*

---

Bài 5: Bài làm rất tốt \*

Đánh giá chung bài tập về nhà: Bài làm tốt, Cần đọc lại về các toán tử trong JavaScript.

---

- [x] [Phạm Hoàng](https://github.com/palkma-byte/f8-backend-k1/blob/main/Bai-Ve-Nha-Buoi1/js/script.js)

Bài 1: Bài làm rất tốt \*

---

Bài 2: Bài làm rất tốt \*

---

Bài 3: Bài làm chưa tốt

Sai nếu a = b = 5 và c = 3. Cần xét đến trường hợp 2 trong 3 số bằng nhau.

---

Bài 4: Bài làm chưa tốt

Chưa xét đến trường hợp 1 trong 2 số bằng 0 hoặc cả 2 số bằng 0.

---

Bài 5: Bài làm tốt \*

Đánh giá chung bài tập về nhà: Tốt, cần chú ý tính đến nhiều trường hợp khác nhau.
