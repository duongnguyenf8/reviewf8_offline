# Dương test bài học viên Backend NodeJS Day1

## [Nguyễn Minh Hiếu](https://github.com/hiusnguyen201/F8-Exercise.git)

    Sớm nhất *

- [x] [Bài 1]

  Bài làm chưa tốt

  Lỗi:

  ```js
  total = 15000 + 5 * 13500 + (km - 5) * price;
  ```

  Đúng phải là `4 * 13500` vì từ 1km đến 5km là 4km chứ không phải 5km.

  Góp ý

  - Khai báo biến `discount` nhưng lại không dùng đến cần tối ưu hơn.

  - Nên check từ km > 0 vì km <= 0 đều tính là không hợp lệ.

---

- [x] [Bài 2]

  Bài làm rất tốt \*

---

- [x] [Bài 3]

  Bài làm chưa tốt.

  Chưa check trường hợp n < 0 và n = 0. Cần kiểm tra kỹ lưỡng các trường hợp.

---

- [x] [Bài 4]

  Bài làm tốt \*.

  Cần bổ sung điều kiện n <= 0.

  Các phép so sánh nên dùng toán tử `===` sẽ chặt chẽ hơn.

---

- Đánh giá: Bài làm tốt, cần chú ý kiểm tra chặt chẽ các trường hợp có thể xảy ra của bài toán.

---

## [Minh Dương](https://github.com/MinhTeyer/F8-BackEnd-K1/tree/main/Day-2)

- [x] [Bài 1]

  Bài làm chưa tốt

  Đang hiểu sai yêu cầu đề bài, ở đây tính tổng số tiền cần cộng dồn số tiền tính theo từng khoảng km đề bài cho. Cần đọc kỹ bài toán hơn.

---

- [x] [Bài 2]

  Bài làm chưa tốt.

  Vẫn đang hiểu sai yêu cầu đề bài, cần tính theo kiểu cộng dồn.

---

- [x] [Bài 3]

  Bài làm tốt.

  Nên bổ sung điều kiện n < 0 và n = 0 vào sẽ chặt chẽ hơn.'

---

- [x] [Bài 4]

  Bài làm tốt.

  Chỉ cần lặp đến `a / 2` là được không cần đến `a - 1` cần tối ưu hơn vì nếu kiểm tra số to thì có thể tốn nhiều tài nguyên.

  Các phép so sánh nên dùng toán tử `===` sẽ chặt chẽ hơn.

---

- Đánh giá: Bài làm chưa tốt, cần chú ý đọc kỹ yêu cầu bài toán và kiểm tra chặt chẽ các trường hợp có thể xảy ra của bài toán.

---

## [Phạm Hoàng](https://github.com/palkma-byte/f8-backend-k1/blob/main/HW2/js/hw02.js)

- [x] [Bài 1]

  Bài làm tốt \*

  Cần kiểm tra trường hợp n < 0 và n = 0 sẽ thông báo là không hợp lệ còn các trường hợp còn lại sẽ thực hiện yêu cầu bài toán.

---

- [x] [Bài 2]

Bài làm rất tốt \*

---

- [x] [Bài 3]

  Bài làm tốt.

  Chưa kiểm tra điều kiện n < 0 và n = 0.

---

- [x] [Bài 4]

  Bài làm chưa tốt.

  Chưa kiểm tra trường hợp số nguyên âm và số 0, ngoài ra cần check nếu là số nguyên mới thực hiện còn không là số nguyên sẽ báo không hợp lệ.

  Các phép so sánh nên dùng toán tử `===` sẽ chặt chẽ hơn.

---

- Đánh giá: Bài làm tốt, cần chú ý kiểm tra chặt chẽ các trường hợp có thể xảy ra của bài toán.

## [Bao Pham Van](https://github.com/baodepzai01/f8-back-end-k1)

- [x] [Bài 1]

  Bài làm chưa tốt

  Phần phép tính km > 120 là tính theo 10% tổng số tiền, vậy cần tách điều kiện `else if (km >= 120)` ra khỏi các điều kiện khác và được kiểm tra sau khi đã tính toán tổng tiền

  Đang hiểu sai yêu cầu đề bài, ở đây tính tổng số tiền cần cộng dồn số tiền tính theo từng khoảng km đề bài cho. Cần đọc kỹ bài toán hơn.

---

- [x] [Bài 2]

  Bài làm chưa tốt

  Đang hiểu sai yêu cầu đề bài, ở đây tính tổng số tiền cần cộng dồn số tiền tính theo từng khoảng km đề bài cho. Cần đọc kỹ bài toán hơn.

---

- [x] [Bài 3]

  Chưa tính tới các trường hợp đặc biệt như a < 0, a === 0, a === 1

---

- [x] [Bài 4]

  Số nguyên là tập hợp các số tự nhiên, bao gồm cả số dương, số âm và số 0. Số nguyên không thể được biểu diễn dưới dạng phân số hoặc số thập phân, mà chỉ được biểu diễn dưới dạng các con số nguyên từ 0 trở đi và các số âm từ -1 trở đi.

  Số nguyên tố là số tự nhiên lớn hơn 1, không chia hết cho số nguyên dương nào ngoài 1 và chính nó. Nói cách khác, số nguyên tố là những số chỉ có đúng hai ước số là 1 và chính nó. Các số tự nhiên lớn hơn 1 không phải là số nguyên tố được gọi là hợp số.

  Bài làm yêu cầu kiểm tra số nguyên tố chứ không phải là số nguyên. Làm bài sai.

  Đánh giá chung bài tập về nhà: Bài làm chưa tốt, cần chú ý đọc kỹ yêu cầu bài toán và kiểm tra chặt chẽ các trường hợp có thể xảy ra của bài toán.

  - Cần cấu trúc lại folder bài tập, tạo folder riêng cho từng bài tập.

---

## [Duc Anh Tran](https://github.com/ducanhtranptit/F8_Homework/tree/main/Buoi2)

- [x] [Bài 1]

  Bài làm chưa tốt

  Đang hiểu sai yêu cầu đề bài, ở đây tính tổng số tiền cần cộng dồn số tiền tính theo từng khoảng km đề bài cho. Cần đọc kỹ bài toán hơn.

  Chưa có phép kiểm tra số bằng 0 thì sẽ thông báo là không hợp lệ.

---

- [x] [Bài 2]

  Bài làm chưa tốt

  Đang hiểu sai yêu cầu đề bài, ở đây tính tổng số tiền cần cộng dồn số tiền tính theo từng khoảng km đề bài cho. Cần đọc kỹ bài toán hơn.

---

- [x] [Bài 3]

  Chưa tính tới các trường hợp đặc biệt như a < 0, a === 0, a === 1

---

- [x] [Bài 4]

  Bài làm rất tốt \*

---

- Đánh giá: Bài làm chưa tốt, cần chú ý đọc kỹ yêu cầu bài toán và kiểm tra chặt chẽ các trường hợp có thể xảy ra của bài toán.

## [Mai Đức Hiền](https://github.com/maiduchien23/F8-BE/blob/main/F8_BE/f8_nodejs/homeword/day%202/js/ex01.js)

- [x] [Bài 1]

  Bài làm chưa tốt

  Đang hiểu sai yêu cầu đề bài, ở đây tính tổng số tiền cần cộng dồn số tiền tính theo từng khoảng km đề bài cho. Cần đọc kỹ bài toán hơn.

---

- [x] [Bài 2]

  Bài làm chưa tốt

  Đang hiểu sai yêu cầu đề bài, ở đây tính tổng số tiền cần cộng dồn số tiền tính theo từng khoảng km đề bài cho. Cần đọc kỹ bài toán hơn.

---

- [x] [Bài 3]

  Chưa tính tới các trường hợp đặc biệt như a < 0, a === 0, a === 1

---

- [x] [Bài 4]

  Bài làm rất tốt \*

---

- Đánh giá: Bài làm chưa tốt, cần chú ý đọc kỹ yêu cầu bài toán và kiểm tra chặt chẽ các trường hợp có thể xảy ra của bài toán.

  \* Lưu ý, tên folder không nên có dấu cách, nên dùng dấu gạch ngang hoặc dấu gạch dưới thay thế.

## [Nguyễn Nhất](https://github.com/NguyenNhat04/f8-backend-k1/tree/main/day-2)

- [x] [Bài 1]

  Bài làm rất tốt \*

---

- [x] [Bài 2]

  Bài làm chưa tốt

  Biến price trong `total = kWh * price;` chưa được khai báo.

---

- [x] [Bài 3]

  Chưa tính tới các trường hợp đặc biệt như N === 0 && N === 1 => N = 1

---

- [x] [Bài 4]

  Bài làm không tốt

  Tên biến sử dụng cả tiếng Việt lẫn tiếng Anh, điều đó khiến cho code khó đọc và khó hiểu.

  Điều kiện trong vòng lặp for nên là `i <= Math.sqrt(number)` thay vì `i < Math.sqrt(number)` để đảm bảo rằng tất cả các ước số của `number` đều được kiểm tra.

---

- Đánh giá: Bài làm tốt, cần chú ý kiểm tra chặt chẽ các trường hợp có thể xảy ra của bài toán.

## [Trần Văn Hiểu](https://github.com/tuilahieu/nodejs/blob/main/exercise/day2/exercise.js)

- [x] [Bài 1]

  Bài làm chưa tốt

  Đang hiểu sai yêu cầu đề bài, ở đây tính tổng số tiền cần cộng dồn số tiền tính theo từng khoảng km đề bài cho. Cần đọc kỹ bài toán hơn.

---

- [x] [Bài 2]

  Bài làm chưa tốt

  Đang hiểu sai yêu cầu đề bài, ở đây tính tổng số tiền cần cộng dồn số tiền tính theo từng khoảng km đề bài cho. Cần đọc kỹ bài toán hơn.

---

- [x] [Bài 3]

  Bài làm tốt

  Nếu nhập một giá trị âm cho number, code sẽ bị lặp vô hạn vì điều kiện cloneOfNumber > 0 sẽ luôn đúng.

---

- [x] [Bài 4]

  Bài làm tốt

  Thay vì lặp từ **number - 1 đến 2**, thì có thể lặp từ **2 đến căn bậc hai của number**. Điều này sẽ giúp giảm thời gian chạy của code mà vẫn cho kết quả chính xác.

---

- Đánh giá: Bài làm tạm ổn, cần chú ý kiểm tra chặt chẽ các trường hợp có thể xảy ra của bài toán.

  \* Lưu ý:

  - Tên biến sử dụng cả tiếng Việt lẫn tiếng Anh, điều đó khiến cho code khó đọc và khó hiểu.

  - Clean code không phải là code ngắn gọn, càng ngắn càng tốt, mà là càng dễ để người khác đọc hiểu nhanh càng tốt, càng dễ bảo trì càng tốt. Như đoạn code trong bài, nếu trên thực tế thì quá khó để hiểu một cách nhanh nhất và thực hiện bảo trì, nâng cấp tốt nhất.

## [Phương](https://github.com/phuongnd168/back-end-f8/tree/main/Buoi2)

- [x] [Bài 1]

  Bài làm chưa tốt

  Đang hiểu sai yêu cầu đề bài, ở đây tính tổng số tiền cần cộng dồn số tiền tính theo từng khoảng km đề bài cho. Cần đọc kỹ bài toán hơn.

---

- [x] [Bài 2]

  Bài làm chưa tốt

  Nửa phần trên làm sai công thức nhưng nửa dưới lại đúng công thức => Kết quả vẫn sai.

---

- [x] [Bài 3]

  Bài làm rất tốt \*

---

- [x] [Bài 4]

  Bài làm rất tốt

---

- Đánh giá: Bài làm tốt, cần chú ý đến đề bài và cách giải quyết bài toán hơn

  \* Lưu ý:

  - Tên biến sử dụng cả tiếng Việt lẫn tiếng Anh, điều đó khiến cho code khó đọc và khó hiểu.

## [Đào Đăng Mạnh](https://github.com/Dangmanh2001/f8_BE_k1/tree/main/Baitapbuoi2)

- [x] [Bài 1]

  Bài làm chưa tốt

  Đang hiểu sai yêu cầu đề bài, ở đây tính tổng số tiền cần cộng dồn số tiền tính theo từng khoảng km đề bài cho. Cần đọc kỹ bài toán hơn.

---

- [x] [Bài 2]

  Bài làm rất tốt

  Có thể sử dụng thêm hàm isNaN để kiểm tra dữ liệu nhập vào có phải là số hay không: `!Number.isNaN(parseFloat(kWh))`

  Có thể sử dụng một mảng để lưu giá trị các mức giá và sử dụng vòng lặp để tính toán giá trị cuối cùng, thay vì viết nhiều nhánh if...else như hiện tại.

---

- [x] [Bài 3]

  Bài làm rất tốt \*

---

- [x] [Bài 4]

  Bài làm tốt

  Biến **i** và biến **a** chưa được khai báo bằng bất cứ kiểu nào trong [var, let, const]

  Nên so sánh bằng 3 dấu bằng `===` để tránh trường hợp so sánh sai kiểu dữ liệu.

---

- Đánh giá: Bài làm tốt, cần chú ý đến đề bài và cách giải quyết bài toán hơn

  \* Lưu ý:

  - Tên biến sử dụng cả tiếng Việt lẫn tiếng Anh, điều đó khiến cho code khó đọc và khó hiểu.

## [Minh Đức Ngô](https://github.com/NgoMinhDuc28112001/f8-exercise-k1/tree/main/bai_tap_buoi_2)

- [x] [Bài 1]

  Bài làm rất tốt\*

  Có thể sử dụng cấu trúc `if else if` để giảm số lượng câu lệnh `if else` và tránh các lỗi không mong muốn.

---

- [x] [Bài 2]

  Bài làm rất tốt

  Có thể sử dụng một mảng để lưu giá trị các mức giá và sử dụng vòng lặp để tính toán giá trị cuối cùng, thay vì viết nhiều nhánh if...else như hiện tại.

---

- [x] [Bài 3]

  Bài làm tốt

  Các trường hợp số âm thì không có giai thừa.

---

- [x] [Bài 4]

  Bài làm tốt

  Dòng `console.log(count);` là không cần thiết vì đề bài không yêu cầu in ra.

---

- Đánh giá: Bài làm rất tốt, cần chú ý để có thể tối ưu code tốt hơn và xem được các trường hợp đặc biệt.

## [Dương Trung Kiên](https://github.com/Kpa02/F8_Backend/tree/main/BaiTapB2)

- [x] [Bài 1]

  Bài làm chưa tốt

  Đang hiểu sai yêu cầu đề bài, ở đây tính tổng số tiền cần cộng dồn số tiền tính theo từng khoảng km đề bài cho. Cần đọc kỹ bài toán hơn.

---

- [x] [Bài 2]

  Bài làm chưa tốt

  Đang hiểu sai yêu cầu đề bài, ở đây tính tổng số tiền cần cộng dồn số tiền tính theo từng khoảng km đề bài cho. Cần đọc kỹ bài toán hơn.

---

- [x] [Bài 3]

  Bài làm rất tốt

  Nên đặt tên biến là tiếng Anh, nếu không thể thì tạm thời dùng tiếng Việt. Nhưng tiếng gì thì cũng đừng viết tắt quá đà `gthua` => `giaiThua`

---

- [x] [Bài 4]

  Bài làm rất tốt

  Có thể sử dụng phép so sánh `===` để tránh trường hợp so sánh sai kiểu dữ liệu.

---

- Đánh giá: Bài làm tạm ổn, cần chú ý đến yêu cầu đề bài và nghiệp vụ của bài toán để làm bài tốt hơn, cũng như đặt tên biến phù hợp hơn.

## [Nam Nguyen](https://github.com/namdctry/f8-backend-k1.git)

- [x] [Bài 1]

  Bài làm chưa tốt

  Đang hiểu sai yêu cầu đề bài, ở đây tính tổng số tiền cần cộng dồn số tiền tính theo từng khoảng km đề bài cho. Cần đọc kỹ bài toán hơn.

---

- [x] [Bài 2]

  Bài làm chưa tốt

  Phần hiển thị giá điện có vẻ không cần thiết.

  Đang hiểu sai yêu cầu đề bài, ở đây tính tổng số tiền cần cộng dồn số tiền tính theo từng khoảng km đề bài cho. Cần đọc kỹ bài toán hơn.

---

- [x] [Bài 3]

  Bài làm tốt

  Nên kiểm tra trường hợp số âm thì không có giai thừa.

---

- [x] [Bài 4]

  Bài làm rất tốt

  Có thể sử dụng phép so sánh `===` để tránh trường hợp so sánh sai kiểu dữ liệu.

  Có thể thay đổi điều kiện của vòng lặp từ `i < n/2 - 1` thành `i <= Math.sqrt(n)` để giảm thời gian chạy của đoạn code

---

- Đánh giá: Bài làm tạm ổn, cần chú ý đến yêu cầu đề bài và nghiệp vụ của bài toán để làm bài tốt hơn.

  \* Lưu ý: Cần cấu trúc lại folder bài tập và trên lớp, code giảng viên riêng để dễ quản lý.

## [Thanh Nguyễn](https://github.com/nguyenducthanh04/f8-backend-k1.git)

- [x] [Bài 1]

  Bài làm chưa tốt

  Điều kiện `1 < soKm <= 5` không hoạt động như mong đợi trong JavaScript. Nó sẽ được tính toán như sau: `(1 < soKm) <= 5`, và kết quả sẽ luôn là **true** bất kể giá trị của **soKm**.

  Không có kiểm tra xem soKm có phải là một số dương hay không.

---

- [x] [Bài 2]

  Bài làm chưa tốt

  Sai tương tự bài 1

---

- [x] [Bài 3]

  Bài làm tốt

  Nên kiểm tra trường hợp số âm thì không có giai thừa.

---

- [x] [Bài 4]

  Bài làm rất tốt

  Có thể sử dụng phép so sánh `===` để tránh trường hợp so sánh sai kiểu dữ liệu.

---

- Đánh giá: Bài làm tạm ổn, cần chú ý đến cú pháp của JS để làm bài tốt hơn.

  \* Lưu ý: Cần cấu trúc lại folder bài tập, quá khó hiểu.

## [Quang Minh Nguyễn](https://github.com/wex-alacrity/F8_BE_QuangMinh/tree/main/Buoi2)

- [x] [Bài 1]

  Bài làm chưa tốt

  Đang hiểu sai yêu cầu đề bài, ở đây tính tổng số tiền cần cộng dồn số tiền tính theo từng khoảng km đề bài cho. Cần đọc kỹ bài toán hơn.

---

- [x] [Bài 2]

  Bài làm chưa tốt

  Đang hiểu sai yêu cầu đề bài, ở đây tính tổng số tiền cần cộng dồn số tiền tính theo từng khoảng km đề bài cho. Cần đọc kỹ bài toán hơn.

---

- [x] [Bài 3]

  Bài làm tốt

  Nên đặt tên biến có tính tường minh hơn. Không nên đặt khó hiểu và chung chung như `S`, `A`.

  Nên kiểm tra trường hợp số âm thì không có giai thừa.

---

- [x] [Bài 4]

  Bài làm không tốt

  Phép so sánh đang sử dụng gán thay vì so sánh.

  Có thể sử dụng phép so sánh `===` để tránh trường hợp so sánh sai kiểu dữ liệu.

  không nên sử dụng toán tử nhỏ hơn hoặc bằng (<=) thay vì toán tử nhỏ hơn (<) vì chúng ta cũng cần kiểm tra nếu x chia hết cho căn bậc hai của x. 
  
  Vòng lặp for phải ngắt sau khi tìm thấy ước số của x, nếu không nó sẽ tiếp tục ghi thông báo nói rằng x là số nguyên tố ngay cả sau khi tìm thấy ước số.


---

- Đánh giá: Bài làm tạm ổn, cần chú ý đến cú pháp của JS để làm bài tốt hơn.

  \* Lưu ý: Cần cấu trúc lại folder bài tập, quá khó hiểu.
