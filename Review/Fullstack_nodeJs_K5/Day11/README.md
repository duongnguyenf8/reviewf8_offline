# Dương review bài tập về nhà buổi 11 - Lớp K5

## Note

Root: https://reviewf8.vercel.app

HTML: /Fullstack_nodeJs_K5/Day11/index.html

Hình ảnh: /Fullstack_nodeJs_K5/Day11/images

## [Nguyen Tien Dat](https://tiendat211294.github.io/f8_offline_k5/buoi-11/bai-tap-buoi-11.html)

- [x] Bài 1

  Bài làm chưa tốt

  Các class đặt không tốt, các tên `group-1`, `group-2`, `group-3`, `column`... không có ý nghĩa.

  Các menu trong menu list nên đặt `#id` để khi bấm có thể cuộn tới section tương ứng thay vì để là `#`

  Các id là `0` vẫn có thể tồn tại, không nên đặt thẻ a với href là `#0`, nếu không muốn cuộn có thể đặt là `#!`

  Các hình ảnh trong bài đều có ý nghĩa, nên đặt thuộc tính alt hợp lý hơn

  Trong bài có nhiều section nhỏ, các section mang một ý nghĩa riêng biệt, nên tách các phần thành từng section riêng thay vì dùng div.

  Các hình ảnh đang quá to so với bản mẫu

  Các đoạn code CSS có rất nhiều đoạn giống nhau, có thể tách thành các class riêng để dễ dàng quản lý hơn.

  Sử dùng attribute selector để có thể bắt các class bắt đầu bằng group thay vì liệt kê thủ công

  ```css
  .group-1,
  .group-3,
  .group-4 {
  	display: flex;
  	flex-direction: row;
  	margin: 30px 100px;
  }
  ```

  Chưa rõ thẻ label bọc vào thẻ a ở header.

  **_[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K5/Day11/images/nguyen_tien_dat.png)_**

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa giống bản mẫu, có một số đoạn css có thể rút gọn, tối ưu tốt hơn nhiều.

## [Ngo Hoang Kim](https://kzau1612.github.io/FSK5/day_11)

- [x] Bài 1

  Bài làm tốt

  Chưa có bóng mờ ở `div.hero__content img.hero__process-img`

  Các đoạn code CSS có rất nhiều đoạn giống nhau, có thể tách thành các class riêng để dễ dàng quản lý hơn.

  ```css
  .flex-center {
  	display: flex;
  	align-items: center;
  	justify-content: center;
  }
  ```

  Các item menu trong header nên trỏ id tới id section tương ứng thay vì chỉ dùng `#!`

  **_[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K5/Day11/images/ngo_hoang_kim.png)_**

- [x] Đánh giá chung bài tập về nhà: Bài làm khá giống bản mẫu, có một số đoạn css có thể rút gọn hơn, dễ gom nhóm hơn một chút.

## [Nguyễn Tuấn Hùng](https://hunghiro.github.io/F8-fullstack-k5/F8-FT-k5/BVN-no11/)

- [x] Bài 1

  Bài làm tốt

  Sai semantics: Bỏ qua h4 để sử dụng h5

  ```html
  <h5>WHY CHOOSE US</h5>
  ```

  Các hình ảnh trong bài đều có ý nghĩa, nên đặt thuộc tính alt hợp lý hơn

  Các menu trong menu list nên đặt `#id` để khi bấm có thể cuộn tới section tương ứng thay vì để là `#`

  **_[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K5/Day11/images/nguyen_tuan_hung.png)_**

- [x] Đánh giá chung bài tập về nhà: Bài làm khá giống bản mẫu, tuy nhiên cần chs ý hơn về semantics, một số giá trị hay dùng có thể đặt thành biến để dễ dàng xử lý hơn.

## [Trinh Nam Truong](https://truongtn04.github.io/f8-fullstack-k5/project1)

- [x] Bài 1

  Bài làm tốt

  Các phần bóng quá đậm

  Chữ **2 hours** chưa giống bản mẫu

  Sai semantics: Bỏ qua h4 để sử dụng h5

  ```html
  <h5>What we Serve</h5>
  ```

  Các menu trong menu list nên đặt `#id` để khi bấm có thể cuộn tới section tương ứng thay vì để là `#`

  Các hình ảnh trong bài đều có ý nghĩa, nên đặt thuộc tính alt hợp lý hơn

  **_[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K5/Day11/images/trinh_nam_truong.png)_**

- [x] Đánh giá chung bài tập về nhà: Bài làm khá giống bản mẫu, tuy nhiên cần chs ý hơn về semantics, một số giá trị hay dùng có thể đặt thành biến để dễ dàng xử lý hơn.

## [Nguyễn Đức Nhật](https://nhat0712.github.io/f8-FS-OL/Day%2011/exbig)

- [x] Bài 1

  Bài làm tốt

  Animate ở `.transport div` đang sai so với bản mẫu

  Sai semantics: Bỏ qua h4 để sử dụng h5

  ```html
  <h5>What we Serve</h5>
  ```

  Các menu trong menu list nên đặt `#id` để khi bấm có thể cuộn tới section tương ứng thay vì để là `#`

  Các hình ảnh trong bài đều có ý nghĩa, nên đặt thuộc tính alt hợp lý hơn

  Các phần `.content` padding top hơi thủ công, nên sử dụng căn giữa dọc của flex thì dễ hơn.

  **_[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K5/Day11/images/nguyen_duc_nhat.png)_**

- [x] Đánh giá chung bài tập về nhà: Bài làm khá giống bản mẫu, tuy nhiên cần chs ý hơn về semantics, một số giá trị hay dùng có thể đặt thành biến để dễ dàng xử lý hơn.

## [Lê Tùng Dương](https://nhat0712.github.io/f8-FS-OL/Day%2011/exbig)

- [x] Bài 1

  Bài làm tốt

  Các hình ảnh, content hơi bé hơn so với bản mẫu

  Không nên fix cứng height của main là 2000 vì có thể content trong main sẽ dài hơn.

  Các menu trong menu list nên đặt `#id` để khi bấm có thể cuộn tới section tương ứng thay vì để là `#`

  **_[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K5/Day11/images/le_tung_duong.png)_**

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, chỉ cần xem lại một chút.
