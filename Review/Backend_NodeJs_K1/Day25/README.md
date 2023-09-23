# Nam review bài học viên lớp BE-k1

## [Phương](https://github.com/phuongnd168/back-end-f8/tree/main/Buoi25)

- [x] Bài 1:

  Khi chọn trạng thái và ấn tìm kiếm thì value trong ô select trạng thái vẫn phải giữ nguyên trạng thái đã chọn, không được đổi về `Tất cả trạng thái`

  Khi nhập từ khóa tìm kiếm và ấn tìm kiếm thì value trong ô input vẫn phải giữ nguyên giá trị đã nhập, không được đổi về trống

  Thiếu confirm khi sửa và xóa khách hàng

  Trong form thêm mới khách hàng, trường hợp thông tin nhập bị lỗi thì báo lỗi và vẫn phải giữ nguyên thông tin đã nhập ở các ô

  Thời gian sau khi thêm mới bị invalid

  Trường `Tỉnh/Thành phố` bắt buộc phải chọn mới cho phép thêm mới

  Khi chọn `Tỉnh/Thành phố` rồi ấn thêm mới khách hàng, trường `province_id` trong database bị `NULL`(Do model `customer` thiếu field `province_id` nên khi thêm mới field `province_id` sẽ không được insert vào table)

  Thiếu field `Tỉnh/Thành phố`, `password` trong form sửa

  Không nên cho phép sửa `email` trong form sửa

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần thêm các confirm khi sửa và xóa, cập nhật lại field `province_id` trong model `customer` và sửa các case lỗi

---

## [Khải Nguyễn](https://github.com/nguyenkhai1311/be-nodejs-k1/tree/main/Day-25)

- [x] Bài 1:

  Trong form sửa khi nhập lỗi ô email không cần hiển thị message error `Vui lòng nhập đầy đủ thông tin`

  Trong form thêm mới và sửa khách hàng, trường hợp thông tin nhập bị lỗi thì báo lỗi và vẫn phải giữ nguyên thông tin đã nhập ở các ô

  Thiếu confirm khi sửa và xóa khách hàng

  Trường `Mật khẩu` trong form sửa không hiện mật khẩu đã mã hóa(Có thể để trống để không bị lộ mật khẩu)

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần thêm confirm khi sửa và xóa khách hàng và sửa lại các case lỗi

---

## [Nam Nguyen](https://github.com/namdctry/backend-F8-btvn/tree/main/btvn-b25)

- [x] Bài 1:

  Trong form thêm mới khi thông tin nhập bị lỗi định dạng không cần hiển thị message error `Vui lòng nhập đầy đủ thông tin`, chỉ cần hiển thị lỗi của thông tin đã nhập

  Trong form thêm mới và sửa khách hàng, trường hợp thông tin nhập bị lỗi thì báo lỗi và vẫn phải giữ nguyên thông tin đã nhập ở các ô

  Thiếu confirm khi sửa và xóa khách hàng

  Trong form sửa khi giữ nguyên `email` bị lỗi email đã tồn tại

  Trong form sửa khi giữ nguyên `mật khẩu` bị lỗi `Mật khẩu yếu`

  Trường `Mật khẩu` trong form sửa không hiện mật khẩu đã mã hóa(Có thể để trống để không bị lộ mật khẩu)

  Khi sửa mật khẩu, mật khẩu chưa được mã hóa trước khi insert dữ liệu vào database

  Không nên cho phép sửa `email` trong form sửa

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần thêm confirm khi sửa và xóa khách hàng và sửa lại các case lỗi trong form sửa và xóa

---

## [Đức Dũng Nguyễn](https://github.com/dungng1321/NodeJS-Offline-Exercise/tree/main/day25)

- [x] Bài 1:

  Trong form thêm mới khi thông tin nhập bị lỗi định dạng không cần hiển thị message error `Vui lòng nhập đầy đủ thông tin`, chỉ cần hiển thị lỗi của thông tin đã nhập

  Trong form thêm mới và sửa khách hàng, trường hợp thông tin nhập bị lỗi thì báo lỗi và vẫn phải giữ nguyên thông tin đã nhập ở các ô

  Trường `mật khẩu` trong form thêm nên validate kĩ hơn nữa(Validate thêm: minLength,minNumber,minSymbols,minUppercase)

  Thiếu confirm khi sửa và xóa khách hàng

  Trường `Tỉnh/Thành phố` trong form thêm bắt buộc phải nhập mới được phép thêm mới

  Khi chọn `Tỉnh/Thành phố` rồi ấn thêm mới khách hàng, trường `province_id` trong database bị `NULL`(Do model `customer` thiếu field `province_id` nên khi thêm mới field `province_id` sẽ không được insert vào table)

  Thiếu field `Tỉnh/Thành phố`, `password` trong form sửa

  Không nên cho phép sửa `email` trong form sửa

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần thêm confirm khi sửa và xóa khách hàng và sửa lại các case lỗi trong form sửa và xóa

---

## [Mai Đức Hiền](https://github.com/maiduchien23/F8-BE/tree/main/F8_BE/f8_javascript/homeword/day25)

- [x] Bài 1:

  Trong form thêm mới khi thông tin nhập bị lỗi định dạng không cần hiển thị message error `Vui lòng nhập đầy đủ thông tin`, chỉ cần hiển thị lỗi của thông tin đã nhập

  Trong form thêm mới và sửa khách hàng, trường hợp thông tin nhập bị lỗi thì báo lỗi và vẫn phải giữ nguyên thông tin đã nhập ở các ô

  Thiếu confirm và message khi sửa và xóa khách hàng

  Trường `Tỉnh/Thành phố` trong form thêm bắt buộc phải nhập mới được phép thêm mới

  Khi chọn `Tỉnh/Thành phố` rồi ấn thêm mới khách hàng, trường `province_id` trong database bị `NULL`(Do model `customer` thiếu field `province_id` nên khi thêm mới field `province_id` sẽ không được insert vào table)

  Thiếu field `Tỉnh/Thành phố`, `password` trong form sửa

  Không nên cho phép sửa `email` trong form sửa

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần thêm confirm khi sửa và xóa khách hàng và sửa lại các case lỗi trong form sửa và xóa

---

## [Đào Đăng Mạnh](https://github.com/Dangmanh2001/F8-BE-k1/tree/main/Baitapbuoi25)

- [x] Bài 1:

  Trong form thêm mới khi thông tin nhập bị lỗi định dạng không cần hiển thị message error `Vui lòng nhập đầy đủ thông tin`, chỉ cần hiển thị lỗi của thông tin đã nhập

  Trong form thêm mới và sửa khách hàng, trường hợp thông tin nhập bị lỗi thì báo lỗi và vẫn phải giữ nguyên thông tin đã nhập ở các ô

  Thiếu confirm khi sửa và xóa khách hàng

  Khi ấn sửa phải hiển thị thông tin khách hàng vào form sửa

  Message lỗi `Vui lòng nhập đầy đủ thông tin` trong form sửa nên chuyển sang màu đỏ để dễ phân biệt

  Trường `Tỉnh/Thành phố` trong form thêm bắt buộc phải nhập mới được phép thêm mới

  Khi chọn `Tỉnh/Thành phố` rồi ấn thêm mới khách hàng, trường `province_id` trong database bị `NULL`(Do model `customer` thiếu field `province_id` nên khi thêm mới field `province_id` sẽ không được insert vào table)

  Thiếu field `Tỉnh/Thành phố`, `password` trong form sửa

  Không nên cho phép sửa `email` trong form sửa

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần thêm confirm khi sửa và xóa khách hàng và sửa lại các case lỗi trong form sửa và xóa

---

## [Quang Minh Nguyễn](https://github.com/wex-alacrity/F8_BE_QuangMinh/tree/main/buoi25)

- [x] Bài 1:

  Không có trang thêm mới khách hàng

  Không sửa được thông tin khách hàng(Ấn lưu bị lỗi 404)

  Không xóa được khách hàng(Ấn xóa bị lỗi 404)

  Các field trong database không giống yêu cầu đề bài

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần thêm trang thêm mới khách hàng và sửa lại các case xóa, sửa thông tin khách hàng

---

## [Pham Hoang](https://github.com/palkma-byte/f8-backend-k1/tree/main/HW/HW25)

- [x] Bài 1:

  Cần validate trường `Tỉnh/Thành phố`, bắt buộc phải chọn mới được thêm mới.

  Trong form thêm mới khi thông tin nhập bị lỗi định dạng không cần hiển thị message error `Vui lòng nhập đầy đủ thông tin`, chỉ cần hiển thị lỗi của thông tin đã nhập

  Trong form thêm mới và sửa khách hàng, trường hợp thông tin nhập bị lỗi thì báo lỗi và vẫn phải giữ nguyên thông tin đã nhập ở các ô

  Thiếu confirm khi sửa và xóa khách hàng

  Trường `Mật khẩu` trong form sửa không hiện mật khẩu đã mã hóa(Có thể để trống để không bị lộ mật khẩu)

  Lỗi: Khi vào form sửa, trường hợp chưa sửa ô thông tin nào và ấn lưu thì bị lỗi `Mật khẩu không đủ mạnh`

  Ô select trong form sửa không cần để option `Chọn tỉnh/thành phố`

  Không nên cho phép sửa `email` trong form sửa

  Trong `CustomerController` chỗ xử lý delete khách hàng biến `confirmation` không cần thiết

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần thêm confirm sửa và xóa, sửa lại các case bị lỗi trong form sửa, thêm mới

---
