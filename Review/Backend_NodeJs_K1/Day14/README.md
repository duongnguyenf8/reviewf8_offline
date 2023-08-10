## Dương review bài 14 Backend

## [Mai Đức Hiền](https://github.com/maiduchien23/F8-BE/tree/main/F8_BE/f8_javascript/homeword/day14)

- [x] [Bài 1]

  Bài làm tốt

  Chưa có thực hiện giao tiếp với API URL cho trước. Mới chỉ thực hiện với file tĩnh.

  Chưa có chức năng lưu các số đã được active, otp của số đó.

  Chưa đúng giao diện với bản mẫu.

  Đề xuất: Thêm file css từ bản mẫu và đặt các classname giống bản mẫu.

  Chưa check trường hợp số điện thoại có dấu "+" ở đầu.

  Ở các trang thông báo lỗi chưa có nút quay về.

  Với mỗi lần đổ dữ liệu trang khác, đều phải tạo một file HTML mới. Việc đó là không tốt, nên sử dụng chung một file HTML

  - Sau đó tạo một template để ghi và hiển thị dữ liệu.

    Tham khảo: [data.json](https://github.com/duongnguyenf8/code_backend-exercise02/blob/main/data/data.json)

  Nên chia folder hợp lý hơn, nên tách thành các file code nhỏ sử dụng cho đúng mục đích để dễ bảo trì hơn.

  **Chưa học về framework express** tuy nhiên đã làm được. Vậy là rất tốt.

  Tuy nhiên phần comment không giống bình thường, có vẻ là từ chatGPT.

- [x] Đánh giá chung bài tập về nhà:

  Bài làm tốt, tuy nhiên chưa chỉn chu về giao diện.

  Cần chia file, folder hợp lý để dễ dàng bảo trì hơn.

  Thiếu nhiều chức năng như ở bản mẫu.

  Thiếu thao tác với API URL ở đề bài.

---

## [Phương](https://github.com/phuongnd168/back-end-f8/tree/main/Buoi14)

- [x] [Bài 1]

  Bài làm chưa tốt.

  Data trong bài làm không giống với đề bài nên chưa có thực hiện giao tiếp với API URL cho trước.

  Chưa có chức năng lưu các số đã được active, otp của số đó.

  Chưa đúng giao diện với bản mẫu.

  Đề xuất: Thêm file css từ bản mẫu và đặt các classname giống bản mẫu.

  Hiện tại khi submit form chưa chuyển được sang trang khác vì cả 2 file `account.js` và `index.js` trong hàm render đều chỉ có tham số là `index` nên chỉ đang đọc được file `index.html` để hiển thị lên chứ chưa đọc được file `account.html`.

  Chưa check trường hợp số điện thoại có dấu "+" ở đầu.

- [x] Đánh giá chung bài tập về nhà:

  Bài làm chưa tốt, cần chỉn chu về giao diện.

  Cần chia file, folder hợp lý để dễ dàng bảo trì hơn.

  Thiếu nhiều chức năng như ở bản mẫu.

  Thiếu thao tác với API URL ở đề bài.

---

## [Đào Đăng Mạnh](https://github.com/Dangmanh2001/f8_BE_k1/tree/main/Baitapbuoi14)

- [x] [Bài 1]

  Bài làm tốt.

  Chưa có chức năng lưu các số đã được active.

  Nhận xét về trang có path là `/`:

  - Validate input nhập số điện thoại chưa tốt vì khi chưa nhập gì hoặc đã nhập đủ số điện thoại nhưng vẫn hiện dòng chữ `undefined` ở dưới input số điện thoại. Nguyên nhân vì hiện `errors.phone` là `undefined`.

  - Khi nhấn `submit` chưa chuyển được sang trang khác nếu nhập đúng số điện thoại.

  - Input nhập số điện thoại hiện nhập được cả chữ và nhập không đúng định dạng vẫn nhấn submit được.

  Nhận xét về trang có path là `/account`:

  - OTP mỗi input nên chỉ được nhập 1 số, và không được nhập chữ hoặc nhiều số. Hiện tại validate chưa tốt.

  - Dù nhập đúng OTP trong data nhưng vẫn không nhấn submit được để chuyển sang trang `success`.

  Nhận xét về trang có path là `/access`:

  - Chưa hiển thị được số điện thoại đang active, hiện dù nhập đúng số điện thoại và otp nhưng khi sang trang `success` đang là `undefined undefined is active`.

  Chưa đúng giao diện với bản mẫu.

  Đề xuất: Thêm file css từ bản mẫu và đặt các classname giống bản mẫu.

  Chưa check trường hợp số điện thoại có dấu "+" ở đầu.

- [x] Đánh giá chung bài tập về nhà:

  Bài làm tốt, cần validate lại các input tốt hơn.

  Thiếu nhiều chức năng như ở bản mẫu.

  Thiếu thao tác với API URL ở đề bài.

---

## [Nguyễn Minh Hiếu](https://github.com/hiusnguyen201/F8-Exercise/tree/main/Lab14)

- [x] [Bài 1]

  Bài làm rất tốt. \*

  Bài làm hầu như đã làm được các chức năng cơ bản giống như bản mẫu.

  Góp ý: Nên chỉnh chu hơn về giao diện để giống bản mẫu hơn

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt, chỉ cần chú ý cải thiện về giao diện để bài làm hoàn thiện hơn nữa.

---

## [Nguyễn Đức Dũng](https://github.com/dungng1321/NodeJS-Offline-Exercise/tree/main/day14)

- [x] [Bài 1]

  Bài làm rất tốt \*

  Chưa xử lý giao tiếp với API URL

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt

---

## [Dương Trung Kiên](https://github.com/Kpa02/F8_Backend/tree/main/BaiTapB14)

- [x] [Bài 1]

  Bài làm giống y hệt bài của Mai Đức Hiền, khác mỗi phân cấp thư mục. (Có sử dụng cả express).
  Bài làm tốt

  Chưa có thực hiện giao tiếp với API URL cho trước. Mới chỉ thực hiện với file tĩnh.

  Chưa có chức năng lưu các số đã được active, otp của số đó.

  Chưa đúng giao diện với bản mẫu.

  Đề xuất: Thêm file css từ bản mẫu và đặt các classname giống bản mẫu.

  Chưa check trường hợp số điện thoại có dấu "+" ở đầu.

  Ở các trang thông báo lỗi chưa có nút quay về.

  Với mỗi lần đổ dữ liệu trang khác, đều phải tạo một file HTML mới. Việc đó là không tốt, nên sử dụng chung một file HTML

  - Sau đó tạo một template để ghi và hiển thị dữ liệu.

    Tham khảo: [data.json](https://github.com/duongnguyenf8/code_backend-exercise02/blob/main/data/data.json)

  Nên chia folder hợp lý hơn, nên tách thành các file code nhỏ sử dụng cho đúng mục đích để dễ bảo trì hơn.

  **Chưa học về framework express** tuy nhiên đã làm được. Vậy là rất tốt.

  Tuy nhiên phần comment không giống bình thường, có vẻ là từ chatGPT.

- [x] Đánh giá chung bài tập về nhà:

  Bài làm tốt, tuy nhiên chưa chỉn chu về giao diện.

  Cần chia file, folder hợp lý để dễ dàng bảo trì hơn.

  Thiếu nhiều chức năng như ở bản mẫu.

  Thiếu thao tác với API URL ở đề bài.

---

## [Phạm Văn Bảo](https://github.com/baodepzai01/f8-back-end-k1/tree/main/BTVNB14)

- [x] [Bài 1]

  Bài làm chưa tốt.

  Ở trong file `server.js` chưa có thư viện `url` nên các thao tác với url đang báo lỗi nên không thể chạy server.

  Hiện tại `url.pathname` đang là undefined nên không thể thực hiện phương thức `replace`.

  Cần xem lại file server để chạy được server, hiện tại chưa chạy được server.

- [x] Đánh giá chung bài tập về nhà:

  Bài làm chưa tốt, cần xem lại file server để chạy được server.
