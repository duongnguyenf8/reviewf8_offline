# Dương review bài tập về nha buổi 9 - Lớp K5

## Chưa làm bài tập

- Trần Thế Vĩ

- Đào Quang Hùng

- Nguyễn Ngọc Minh

---

## Nộp muộn

- Đinh Việt Hùng

- Lưu Ngọc Dương

- Viên Đình Cường

- Trần Quốc Việt

- Lê Đức Anh

- Trịnh Nam Trường

---

## [Ngo Hoang Kim](https://kzau1612.github.io/FSK5/day_9/BT1.html)

- [x] Bài 1

  Bài làm tốt

  Sai yêu cầu đề bài:

  - Ở đề bài, khi hover vào **từng giai đoạn** thay vì hover vào nút.

  - Khi hover, đổi chỗ phần content(gồm tiêu đề, mô tả và nút) sang bên phải và phần thời gian sang bên trái.

  Chưa có hiệu ứng khi hover vào nút. Hiệu ứng hơi chậm khiến user cảm giác phải đợi.

  Nên sử dụng reset css bên ngoài đầy đủ và tốt hơn thay vì chỉ viết:

  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```

- [x] Bài 2

  Bài làm tốt \*

  Nên sử dụng reset css bên ngoài đầy đủ và tốt hơn thay vì chỉ viết:

  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```

  Hiệu ứng có phần hơi nhanh hơn bản mẫu

  Khi hover, chữ chạy từ dưới lên nhưng hình ảnh chạy từ bên phải sang khiến cho khung hình quá rối, trong những giây đầu sẽ không đọc được chữ nào.

- [x] Bài 3

  Bài làm rất tốt \*

  Hiệu ứng hơi chậm so với bản mẫu.

  Phần button khi hover vào, đang nhạt đi khiến nó giống như bị disabled.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt\* tuy nhiên cần chú ý đến các hiệu ứng, ngoài việc khiến người dùng thấy trải nghiệm tốt hơn thì nếu không sử dụng tốt, nó sẽ làm trải nghiệm và hiệu năng giảm đi rất nhiều.

## [Nguyen Duc Nhat](https://nhat0712.github.io/f8-FS-OL/Day%209/bai1)

**Không nên sử dụng ký tự đặc biệt cho tên folder, hạn chế viết hoa... vì làm vậy sẽ khiến đường dẫn rất xấu và khó khăn khi sử dụng: `Day%209`**

- [x] Bài 1

  Bài làm tốt

  Sai yêu cầu đề bài:

  - Khi hover, đổi chỗ phần content(gồm tiêu đề, mô tả và nút) sang bên phải và **phần thời gian sang bên trái**.

  Chưa đổi chỗ thời gian sang bên trái. Hiệu ứng hơi chậm khiến user cảm giác phải đợi.

  Phần đổi chỗ đang chuyển động hơi rối khi đưa cả phần content sang trái có thể bỏ qua hiệu ứng di chuyển mà chỉ sử dụng hiệu ứng đổi màu button thì sẽ đỡ rối mắt hơn.

  Nên sử dụng reset css bên ngoài đầy đủ và tốt hơn thay vì chỉ viết:

  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```

  Hiệu năng khi sử dụng all trong transition là không tốt, nên chỉ định tốt hơn vào các hiệu ứng cần thiết.

  ```css
  .class {
    transition: all 0.5s ease-in-out;
  }
  ```

- [x] Bài 2

  Bài làm tốt

  Nên sử dụng reset css bên ngoài đầy đủ và tốt hơn thay vì chỉ viết:

  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```

  **Tất cả hiệu ứng** quá chậm so với bản mẫu, người dùng khi sử dụng sẽ thấy **quá mệt**.

- [x] Bài 3

  Bài làm chưa tốt

  Đây là một biểu mẫu, cần sử dụng form để bao bọc.

  Hiệu ứng hơi chậm so với bản mẫu.

  Chưa giữ được chữ khi viết xong, có thể bắt vào hành động ẩn, hiện của placeholder để làm.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt tuy nhiên cần chú ý đến các hiệu ứng, ngoài việc khiến người dùng thấy trải nghiệm tốt hơn thì nếu không sử dụng tốt, nó sẽ làm trải nghiệm và hiệu năng giảm đi rất nhiều.

## [Bui Minh Chi](https://ronbanh549.github.io/f8-fullstack-k5/Day-9/bai1.html)

- [x] Bài 1

  Bài làm tốt

  Tiêu đề trong bài nên sử dụng h3 thì tốt hơn vì dựa vào tiêu đề này chưa thể hiện được nhiều với tiêu đề chính(h1).

  Sai yêu cầu đề bài:

  - Khi hover, đổi chỗ phần content(gồm tiêu đề, mô tả và nút) sang bên phải và phần thời gian sang bên trái.

- [x] Bài 2 Hiệu ứng hơi chậm khiến user cảm giác phải đợi.

  Bài làm rất tốt

  Hiệu ứng nhanh hơn một chút nữa thì tốt.

  Thử với hiệu ứng linear có vẻ hợp hơn.

- [x] Bài 3

  Bài làm tốt\*

  Khi active, có thêm nhiều padding làm cho các field bị đẩy chiều cao lên gây mất cân đối.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt\* tuy nhiên cần chú ý đến các hiệu ứng, ngoài việc khiến người dùng thấy trải nghiệm tốt hơn thì nếu không sử dụng tốt, nó sẽ làm trải nghiệm và hiệu năng giảm đi rất nhiều.

## [Nguyen Tien Dat](https://tiendat211294.github.io/f8_offline_k5/buoi-9/bai-1.html)

- [x] Bài 1

  Bài làm tốt

  Tiêu đề trong bài nên sử dụng h3 thì tốt hơn vì dựa vào tiêu đề này chưa thể hiện được nhiều với tiêu đề chính(h1).

  Sai yêu cầu đề bài:

  - Khi hover, đổi chỗ phần content(gồm tiêu đề, mô tả và nút) sang bên phải và phần thời gian sang bên trái.

  Hiệu ứng hơi chậm khiến user cảm giác phải đợi.

- [x] Bài 2

  Bài làm tốt

  Chưa xử lý borer bị hiển thị ra ngoài

  Chưa hover vào chữ **learn more** để hiển thị được phần icon

  Các hiệu ứng sắp xếp khá hợp lý.

- [x] Bài 3

  Bài làm tốt\*

  Textarea so với các input ở trên nó đang không cân đối, nó đang ngắn hơn.

  Form chỉ cần bọc ở những chỗ cần thiết, không cần phải đặt ở tận tiêu đề ngoài.

  Chưa giữ được chữ khi viết xong, có thể bắt vào hành động ẩn, hiện của placeholder để làm.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt\* nhưng bài 1 cần chú ý xem kỹ đề bài trước khi làm.

## [Nguyễn Tuấn Hùng](https://hunghiro.github.io/F8-fullstack-k5/F8-FT-k5/BVN-no9/d9-b1.html)

- [x] Bài 1

  Bài làm tốt

  Sai yêu cầu đề bài:

  - Ở đề bài, khi hover vào **từng giai đoạn** thay vì hover vào nút.

  - Khi hover, đổi chỗ phần content(gồm tiêu đề, mô tả và nút) sang bên phải và phần thời gian sang bên trái.

  Chưa có hiệu ứng khi hover vào nút. Hiệu ứng hơi chậm khiến user cảm giác phải đợi.

  Các button ở dưới giống một tags, nó có ý nghĩa khi bấm vào thì chuyển sang chuyên mục đó hoặc tương tự, vì vậy nên sử dụng thẻ a thay vì sử dụng span.

  Nên sử dụng reset css bên ngoài đầy đủ và tốt hơn thay vì chỉ viết:

  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```

- [x] Bài 2

  Bài làm tốt

  Các hiệu ứng hơi chậm so với bản mẫu

  Chưa đổi màu chữ tiêu đề sang màu trắng

  Bản mẫu có đúng 6 box, nhưng bài làm có 7 box.

  Chưa có hiệu ứng di chuyển của **Learn more**

- [x] Bài 3 Chưa làm

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt\* nhưng bài 1 cần chú ý xem kỹ đề bài trước khi làm. Cần sắp xếp thời gian hợp lý hơn nếu có thể.

## [Le Tung Duong](https://duong1801.github.io/f8-fullstack-k5/Day-9/ex01.html)

- [x] Bài 1

  Bài làm tốt

  Hiệu ứng khi chuyển màu button hơi chậm.

  Các button ở dưới giống một tags, nó có ý nghĩa khi bấm vào thì chuyển sang chuyên mục đó hoặc tương tự, vì vậy nên sử dụng thẻ a thay vì sử dụng span.

  Khi đổi chỗ, các item cách quá xa so với khung hình ảnh.

  Phần số ở khung ảnh bị lệch vị trí so với bản mẫu.

  Khung ảnh nhỏ hiển thị số: `.background-awards` đang lệch so với phần ảnh `[alt="Winning Awards"]`

- [x] Bài 2 Chưa làm

- [x] Bài 3

  Bài làm chưa tốt

  Sai cấu trúc HTML: Có 2 thẻ HTML và 2 khai báo DOCTYPE html trong 1 trang web.

  Phần hiệu ứng có thể cho nhanh lên một chút.

  Các input nhập liệu không nên sử dụng text center khiến nó khó viết hơn.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt Nhưng cần chú ý hoàn thiện tốt hơn, đầy đủ hơn.

## [Nguyễn Văn Thắng](https://nvthang391.github.io/F8-FSK5/Day_9/bai1.html)

- [x] Bài 1

  Bài làm tốt

  Sai yêu cầu đề bài:

  - Khi hover, đổi chỗ phần content(gồm tiêu đề, mô tả và nút) sang bên phải và phần thời gian sang bên trái.

  Hiệu ứng khi chuyển màu button hơi chậm.

- [x] Bài 2

  Bài làm chưa tốt

  **Có nhiều id giống nhau, trùng lặp trong bài.**

  Màu background chưa giống bản mẫu

  Chưa hiện dần dần hình ảnh đằng sau khiến có cảm giác bị giật

  Chưa có hiệu ứng chuyển cho icon mũi tên.

- [x] Bài 3

  Bài làm chưa tốt

  **Sử dụng thuộc tính for trong label để trỏ tới một id không có thật.**

  Các field trong form cần có name để lấy được dữ liệu.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt Nhưng cần chú ý nhiều hơn, đang sai quy tắc HTML quá nhiều.
