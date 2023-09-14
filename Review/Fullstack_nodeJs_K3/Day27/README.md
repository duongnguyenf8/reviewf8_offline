# Nam review bài học viên lớp k3-fullstack

## [Đỗ Văn Khoa](https://mrkhoadev.github.io/F8-Fullstack-K3/)

- [x] Bài 1:

  Không cho phép giảm số lượng xuống < 0

  Số lượng sản phẩm ở trong giỏ hàng không thể giảm xuống < 0. Có thể làm theo cách: giảm xuống 0 thì hiển thị form xác nhận xóa(Nếu người dùng xác nhận xóa thì xóa sản phẩm khỏi giỏ hàng, ngược lại nếu hủy thì cập nhật số lượng sản phẩm đó là 1)

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt tuy nhiên cần chỉnh lại các case giảm số lượng < 0.

---

## [Phí Văn Đức](https://github.com/PhiVanDuc/Offline-F8-K3/tree/main/Day-27-JS)

- [x] Bài 1:

  Không cho phép giảm số lượng xuống < 0

  Khi số lượng sản phẩm <= 0, nếu ấn thêm vào giỏ hàng thì cần hiện thông báo lỗi.

  Các hành động `Cập nhật` và `Xóa` thì đều phải có thông báo xác nhận `Xóa`/`Cập nhật`

  Số lượng sản phẩm ở trong giỏ hàng không thể giảm xuống < 0. Có thể làm theo cách: giảm xuống 0 thì hiển thị form xác nhận xóa(Nếu người dùng xác nhận xóa thì xóa sản phẩm khỏi giỏ hàng, ngược lại nếu hủy thì cập nhật số lượng sản phẩm đó là 1)

  Khi mở devtool thay đổi thông tin tên sản phẩm, giá tiền rồi ấn thêm vào giỏ thì các thông tin sản phẩm được thêm vào giỏ đều là các thông tin đã sửa đổi.(Có thể sửa theo cách: lưu thông tin các sản phẩm vào 1 biến rồi khi ấn thêm vào giỏ sẽ tìm kiếm sản phẩm đó theo id và lưu thông tin sản phẩm tìm kiếm được vào giỏ hàng)

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt.Cần thêm các thông báo xác nhận, sửa lại lỗi khi sửa thông tin bằng devtool và các case về số lượng sản phẩm <= 0.

---

## [Nguyễn Quang Cường](https://github.com/cuonggold2408/Fullxinach_K3/tree/main/Day_27)

- [x] Bài 1:

  Không cho phép giảm số lượng xuống < 0

  Khi số lượng sản phẩm <= 0, nếu ấn thêm vào giỏ hàng thì không được phép thêm vào giỏ. Không làm theo cách thông báo lỗi rồi giỏ hàng hiển thị tổng tiền, số lượng

  Số lượng sản phẩm ở trong giỏ hàng không thể giảm xuống < 0. Có thể làm theo cách: giảm xuống 0 thì hiển thị form xác nhận xóa(Nếu người dùng xác nhận xóa thì xóa sản phẩm khỏi giỏ hàng, ngược lại nếu hủy thì cập nhật số lượng sản phẩm đó là 1).

  Khi giảm số lượng sản phẩm trong giỏ hàng < 0 rồi ấn cập nhật thì số lượng và giá tiền là số âm, tổng tiền và số lượng lại là 0. Phải xóa sản phẩm đó khi số lượng/giá tiền là số âm.

  Khi mở devtool thay đổi thông tin tên sản phẩm, giá tiền rồi ấn thêm vào giỏ thì các thông tin sản phẩm được thêm vào giỏ đều là các thông tin đã sửa đổi.(Có thể sửa theo cách: lưu thông tin các sản phẩm vào 1 biến rồi khi ấn thêm vào giỏ sẽ tìm kiếm sản phẩm đó theo id và lưu thông tin sản phẩm tìm kiếm được vào giỏ hàng)

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt.Cần sửa lại lỗi khi sửa thông tin bằng devtool và các case về số lượng sản phẩm <= 0.

---

## [Vương Đông](https://github.com/DongVuong/f8-fullstack-k3/tree/main/DAY27)

- [x] Bài 1:

  Không cho phép giảm số lượng xuống < 0

  Khi số lượng sản phẩm <= 0, nếu ấn thêm vào giỏ hàng thì không được phép thêm vào giỏ. Không làm theo cách thêm vào giỏ hàng hiển rồi để số lượng là 1

  Số lượng sản phẩm ở trong giỏ hàng không thể giảm xuống < 0. Có thể làm theo cách: giảm xuống 0 thì hiển thị form xác nhận xóa(Nếu người dùng xác nhận xóa thì xóa sản phẩm khỏi giỏ hàng, ngược lại nếu hủy thì cập nhật số lượng sản phẩm đó là 1).

  Khi reload trang thì mọi thông tin giỏ hàng đã thêm trước đó không được lưu trữ và hiển thị(Kiểm tra lại phần localstorage getItem)

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt.Cần sửa lại lỗi các case về số lượng sản phẩm <= 0 và kiểm tra lại phần localstorage.

---
