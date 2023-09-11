# Dương review bài tập về nhà buổi 27 - Lớp K1

## [Luu Anh Quan](https://anhquan2211.github.io/F8-OFFLINE/f8-offline-day27/index.html)

- [x] Bài 1

  Bài làm rất tốt \*

  Tuy nhiên phần loading với animate skeleton đang chưa đúng logic, hiện đang là khi fetching được data rồi, sản phẩm placeholder mới hiển thị, như vậy đâu cần thiết phải sử dụng animate với setTimeout nữa. Nếu làm theo cách hiện tại, user phải chờ thêm 2 giây để xem được kết quả.

  Khi xóa 1 sản phẩm hoặc tất cả khỏi giỏ hàng, cần hiển thị một confirm cho người dùng để chắc chắn việc xóa.

  UI cart đang hiện thanh scroll mặc dù chỉ có ít sản phẩm, cần sửa lại UI một chút.

  Code có sự phân cấp và gom nhóm rất tốt. Rất dễ tái sử dụng.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt\* Nếu bài làm có thêm confirm sẽ tốt hơn cho người dùng.

---

## [Dương Hiệp](https://duonghiep416.github.io/duonghiep_f8_fullstack/Day27)

- [x] Bài 1

  Bài làm tốt \*

  Chưa kiểm tra số không hợp lệ trong input("e", số âm)

  Nếu thêm một giá trị âm vào input danh sách sản phẩm thì vẫn có thể thêm.

  Nếu đang ở giá trị âm, thêm số dương vào đến 0 thì chưa xóa được cart

  Khi xóa 1 sản phẩm bằng cách giảm về 0 và cập nhật, chưa có confirm

  Khi bật devtool sửa `giá` trong giỏ hàng và cập nhật, `Thành tiền` đang bị sai.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt\* Cần chú ý hơn khi lấy innerText để tính toán.

---

## [Hồng Hà Nguyễn Thị](https://ha752002.github.io/f8-fullstack-k2/Ex_Javascript/day27a)

- [x] Bài 1

  Bài làm tốt \*

  Chưa kiểm tra số không hợp lệ trong input("e")

  Khi xóa bằng nút xóa, chưa có confirm.

  Chưa xóa được bằng cách giảm số lượng về 0.

  Chưa xóa hết console.log khi đưa lên bản production.

  Các câu hỏi confirm phải đưa ra lựa chọn có hoặc không, không thể dùng `alert` trong trường hợp này, có thể sử dụng `confirm`

  Khi bật devtool sửa `data-price` trong danh sách sản phẩm và cập nhật, `Thành tiền` đang bị sai.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt\* Cần chú ý hơn khi lấy dữ liệu từ HTML để tính toán.

---

## [Nguyen Xuan Tuan Anh](https://ha752002.github.io/f8-fullstack-k2/Ex_Javascript/day27a)

- [x] Bài 1

  Bài làm có lỗi khi có thêm các key khác của localStorage

  Vì đang check theo `localStorage.length`

  Bài làm rất tốt\*

  Case nhập chữ "e" trong giỏ hàng cần kiểm tra và thông báo là không phải số hợp lệ thay vì xóa luôn.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt. Tuy nhiên thay vì check localStorage.length, có thể sử dụng cách khác là check thẳng vào key localStorage.orders xem giá trị có hợp lệ không hoặc đã có key đó chưa.

---

## [Bi11-043 Đỗ Hà Chi](https://serenaha12.github.io/fullstack_nodeJS/hoc_javascript/buoi_27/ex03/index.html)

- [x] Bài 1

  Bài làm tốt\*

  Chưa thể sửa số lượng sản phẩm trong giỏ hàng

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt. Tuy nhiên chưa đủ yêu cầu đề bài.

---

## [Hoài Nam Đỗ](https://oaihman25.github.io/btvn/day27/index.html)

- [x] Bài 1

  Bài làm chưa tốt

  Nếu số lượng <= 0 thì không được thêm vào giỏ hàng. Không xử lý theo cách thêm vào giỏ hàng rồi tăng số lượng lên 1.(Hoặc có thể không cho phép giảm số lượng <= 0)

  Chưa add đúng số lượng yêu cầu trong danh sách sản phẩm

  Khi xóa tất cả sản phẩm bằng cách trừ về 0, chưa hiện lại dòng thông báo không có sản phẩm.

  Chưa có nút xóa tất cả.

  Chưa có confirm khi xóa bằng cách trừ về 0

  Thiếu nút `Xóa giỏ hàng` và `Cập nhật giỏ hàng`

  Khi xóa hết sản phẩm trong giỏ hàng thì xóa luôn table và hiển thị giỏ hàng trống, không nên để lại table.

  Không thêm được sản phẩm khi đã tồn tại sản phẩm trong giỏ hàng. Khi có sản phẩm trong giỏ hàng, nếu thêm sản phẩm đó vào thì phải cộng số lượng thêm với số lượng trong giỏ hàng.

  Khi thêm sản phẩm với số lượng > 1 thì trong giỏ hàng đều hiển thị số lượng là 1. Phải để đúng số lượng khi thêm vào giỏ hàng.

  Chưa lưu dữ liệu trong giỏ hàng vào local storage hoặc session storage.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Chưa đủ yêu cầu đề bài. Còn thiếu rất nhiều case.

---

## [Hoài Nam Đỗ](https://oaihman25.github.io/btvn/day27/index.html)

- [x] Bài 1

  Bài làm chưa tốt

  Nếu số lượng <= 0 thì không được thêm vào giỏ hàng. Không xử lý theo cách thêm vào giỏ hàng rồi tăng số lượng lên 1.(Hoặc có thể không cho phép giảm số lượng <= 0)

  Chưa add đúng số lượng yêu cầu trong danh sách sản phẩm

  Khi xóa tất cả sản phẩm bằng cách trừ về 0, chưa hiện lại dòng thông báo không có sản phẩm.

  Chưa có nút xóa tất cả.

  Chưa có confirm khi xóa bằng cách trừ về 0

  Thiếu nút `Xóa giỏ hàng` và `Cập nhật giỏ hàng`

  Khi xóa hết sản phẩm trong giỏ hàng thì xóa luôn table và hiển thị giỏ hàng trống, không nên để lại table.

  Không thêm được sản phẩm khi đã tồn tại sản phẩm trong giỏ hàng. Khi có sản phẩm trong giỏ hàng, nếu thêm sản phẩm đó vào thì phải cộng số lượng thêm với số lượng trong giỏ hàng.

  Khi thêm sản phẩm với số lượng > 1 thì trong giỏ hàng đều hiển thị số lượng là 1. Phải để đúng số lượng khi thêm vào giỏ hàng.

  Chưa lưu dữ liệu trong giỏ hàng vào local storage hoặc session storage.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Chưa đủ yêu cầu đề bài. Còn thiếu rất nhiều case.

---

## [Trung Le](https://github.com/Trungdeptraii/Le-Van-Trung-06-09-Day27.git)

- [x] Bài 1:

  Lỗi:
  Khi sản phẩm đã có trong giỏ hàng, nếu ấn thêm sản phẩm đó vào giỏ hàng thì phải cộng số lượng thêm với số lượng có trong giỏ hàng (Hiện tại đang để là thay thế số lượng trong giỏ hàng).

  Sau khi xóa giỏ hàng rồi thêm sản phẩm vào giỏ hàng thì những sản phẩm đã xóa trước vẫn hiện lên.

  Số thứ tự sản phẩm trong giỏ hàng phải cập nhật lại từ đầu sau khi xóa.

  Ấn cập nhật giỏ hàng số thự tự bị nhảy lên. Phải cập nhật lại số thứ tự từ đầu mới chính xác.

  Khi mở devtool sửa các thông tin(tên sản phẩm, giá) rồi thêm vào giỏ hàng thì các thông tin đều là thông tin sau khi sửa. (Nên tạo 1 file json lưu dữ liệu của sản phẩm, mỗi khi thêm sản phẩm vô giỏ hàng sẽ lấy dữ liệu từ file json thì sẽ tránh được lỗi khi thay đổi dữ liệu ở devtool )

  Ấn xóa từng sản phẩm trong giỏ hàng, sau khi xóa sản phẩm cuổi cùng vẫn hiện lên dữ liệu tổng số lượng, giá tiền và không thêm được sản phẩm vào giỏ hàng.

  Không thể thêm sản phẩm vào giỏ hàng khi số lượng <= 0.

  Số lượng sản phẩm trong giỏ hàng phải thay đổi được.

- [x] Đánh giá chung bài tập về nhà:

  Bài làm chưa tốt\*

---

## [Tuấn Phạm](https://github.com/phamtuan162/phamtuan-nodejs-01/tree/main/Buoi27)

- [x] Bài 1:

  Không thể thêm sản phẩm vào giỏ hàng khi số lượng = 0.

  Khi số lượng sản phẩm trong giỏ hàng giảm về 0 thì xóa sản phẩm đó khỏi giỏ hàng.

- [x] Đánh giá chung bài tập về nhà:

  Bài làm tốt\*

---

## [Duy Hiếu Nguyễn](https://hieuboss.github.io/F8-fullstack-k2/link/link.html)

- [x] Bài 1:

  Không nên cho số lượng giảm xuống số âm.

  Khi số lượng là 0 không nên cho thêm vào giỏ hàng

  Khi ấn cập nhật số lượt load x2 lần số lượt load trước.(Nếu ấn nhiều lần sẽ bị đơ máy)

  Khi ấn cập nhật giỏ hàng nên hiện thông báo để cho người dùng biết.

- [x] Đánh giá chung bài tập về nhà:

  Bài làm chưa tốt\*

---

## [Phan Trung Hiếu](https://github.com/pth2003/FullStack_Nodejs_K1/tree/main/BTVN/btvn_buoi_27)

- [x] Bài 1:

  Nếu số lượng <= 0 thì không được thêm vào giỏ hàng. Không xử lý theo cách thêm vào giỏ hàng rồi tăng số lượng lên 1.(Hoặc có thể không cho phép giảm số lượng <= 0)

  Khi số lượng sản phẩm trong giỏ hàng giảm = 0 thì xóa luôn sản phẩm đó khỏi giỏ hàng.

- [x] Đánh giá chung bài tập về nhà:

  Bài làm tốt\*

---
