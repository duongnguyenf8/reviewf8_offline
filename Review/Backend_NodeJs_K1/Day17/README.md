# Dương review bài tập buổi 17 Lớp K1 Backend

**Case:**

- Đúng giao diện
- Sửa sai đường dẫn vẫn chạy layout chuẩn (Header, Footer)
- Chia rõ chức năng, nhiệm vụ bởi các folder.
- Có dữ liệu ở ngoài, đổ ra màn hình chứ không phải fix cứng.
- Sử dụng vòng lặp để tự động render giao diện chứ không phải copy code.
- **Ignore node_module**

## [Phương](https://github.com/phuongnd168/back-end-f8/tree/main)

**Sớm nhất**

- [x] [Bài 1]

  Bài làm rất tốt \*

  Các router chỉ có 1 controller nên để là index để biểu thị đó là chính.

  Ở trang gallery cần sử dụng vòng lặp để render giao diện, làm như vậy quá thỉ công và không đảm bảo cập nhật dữ liệu mới khi có data mới.

## [Quang Minh Nguyễn](https://github.com/wex-alacrity/F8_BE_QuangMinh/tree/main/buoi17)

- [x] [Bài 1]

  Bài làm chưa tốt.

  Chưa đúng yêu cầu đề bài

  Chưa có data render ra giao diện, đang hiển thị là dữ liệu cứng, không phải dữ liệu động.

## [Nguyễn Minh Hiếu](https://github.com/hiusnguyen201/F8-Exercise/tree/main/Lab17)

- [x] [Bài 1]

  Bài làm rất tốt. \*

  Khi nhấn vào link để dẫn đến trang `contact` thì trong file `index.js` đang tạo đường dẫn là `/contact.hmtl`. Nên sửa lại đúng định dạng đuôi html sẽ hoàn thiện hơn.

---

## [Khải Nguyễn](https://github.com/nguyenkhai1311/be-nodejs-k1/tree/main/Day-17)

- [x] [Bài 1]

  Bài làm rất tốt. \*

  Tuy nhiên, phần đường dẫn nên đặt giống với bản mẫu. Ví dụ như đường dẫn dẫn đến trang about ở bản mẫu đang để là `about.html` thì nên tuân theo bản mẫu để hoàn chỉnh hơn. (Tương tự các trang còn lại).

  Ở trang gallery cần sử dụng vòng lặp để render giao diện, hiện tại đang fix cứng data, làm như vậy quá thủ công và không đảm bảo cập nhật dữ liệu mới khi có data mới.

---

## [Đào Đăng Mạnh](https://github.com/Dangmanh2001/F8-BE-k1/tree/main/Baitapbuoi17)

- [x] [Bài 1]

  Bài làm rất tốt. \*

  Do ở trong file `index.js` trong folder `routes` không tạo đường dẫn `/` khi ban đầu vào sẽ đưa đến trang chủ nên ban đầu vào sẽ dẫn đến trang báo lỗi.

  Khi đến trang báo lỗi, hiện tại không thao tác được với các thẻ a để chuyển sang các trang khác.

  Ở trang gallery cần sử dụng vòng lặp để render giao diện, hiện tại đang fix cứng data, làm như vậy quá thủ công và không đảm bảo cập nhật dữ liệu mới khi có data mới.

  Nên chia thành các folder rõ ràng hơn trong `views` để dễ dàng nếu sau này phát triển dự án.

---

## [Pham Hoang](https://github.com/palkma-byte/f8-backend-k1/tree/main/HW/HW17)

- [x] [Bài 1]

  Bài làm rất tốt. \*

  Do ở trong file `index.js` trong folder `routes` không tạo đường dẫn `/` khi ban đầu vào sẽ đưa đến trang chủ nên ban đầu vào sẽ dẫn đến trang báo lỗi.

  Khi đến trang báo lỗi, hiện tại không thao tác được với các thẻ a để chuyển sang các trang khác.

  Tuy nhiên, phần đường dẫn nên đặt giống với bản mẫu. Ví dụ như đường dẫn dẫn đến trang about ở bản mẫu đang để là `about.html` thì nên tuân theo bản mẫu để hoàn chỉnh hơn. (Tương tự các trang còn lại).

  Ở trong folder `controllers` cần chia ra từng file đảm nhận các chức năng khác nhau để có thể dễ dàng cho việc quản lý và phát triển dự án. Hiện tại đang để tất cả trong 1 file `Controller.js`. Điều này là không nên.

---

## [Nam Nguyen](https://github.com/namdctry/backend-F8-btvn/tree/main/btvn-b17)

- [x] [Bài 1]

  Bài làm rất tốt. \*

  Khi nhấn vào link để dẫn đến trang `contact` thì trong file `index.js` đang tạo đường dẫn là `/contact.hmtl`. Nên sửa lại đúng định dạng đuôi html sẽ hoàn thiện hơn.

  Giao diện phần `carousel` cần xử lý css tốt hơn để giống với bản mẫu.

  Ở trang gallery cần sử dụng vòng lặp để render giao diện, hiện tại đang fix cứng data, làm như vậy quá thủ công và không đảm bảo cập nhật dữ liệu mới khi có data mới.

  Nên có folder `models` để lấy dữ liệu và render ra giao diện.

---

## [Duc Anh Tran](https://github.com/ducanhtranptit/F8_Homework/tree/main/Buoi17)

- [x] [Bài 1]

  Bài làm chưa tốt.

  Giao diện khác hoàn toàn so với bản mẫu. Cần tuân thủ bản mẫu.

  Ở trong file `package.json` nên sửa `node ./bin/www` thành `nodemon ./bin/www` để thuận tiện trong việc chạy lại server khi lưu.

---

## [Phạm Văn Bảo](https://github.com/baodepzai01/f8-back-end-k1/tree/main/BTVNB17)

- [x] [Bài 1]

  Bài làm chưa tốt.

  Hầu như chưa có css cho giao diện.

  Phần đường dẫn nên đặt giống với bản mẫu. Ví dụ như đường dẫn dẫn đến trang about ở bản mẫu đang để là `about.html` thì nên tuân theo bản mẫu để hoàn chỉnh hơn. (Tương tự các trang còn lại).

  Ở trang gallery cần sử dụng vòng lặp để render giao diện, hiện tại đang fix cứng data, làm như vậy quá thủ công và không đảm bảo cập nhật dữ liệu mới khi có data mới.

  Nên chia thành các folder rõ ràng hơn trong `views` để dễ dàng nếu sau này phát triển dự án.

---

## [Thanh Nguyễn](https://github.com/nguyenducthanh04/f8-backend-k1.git)

- [x] [Bài 1]

  Bài làm chưa tốt.

  Chưa Ignore node_module.

  Giao diện khác hoàn toàn so với bản mẫu. Cần tuân thủ giao diện bản mẫu.

---

## [Mai Đức Hiền](https://github.com/maiduchien23/F8-BE/tree/main/F8_BE/f8_javascript/homeword/template-coffee)

- [x] [Bài 1]

  Bài làm rất tốt. \*

  Khi nhấn vào link để dẫn đến trang `contact` thì trong file `index.js` đang tạo đường dẫn là `/contact`. Nên sửa lại đúng định dạng đuôi html như bản mẫu sẽ hoàn thiện hơn.

  Ở trang gallery cần sử dụng vòng lặp để render giao diện, hiện tại đang fix cứng data, làm như vậy quá thủ công và không đảm bảo cập nhật dữ liệu mới khi có data mới.

---

## [Dương Trung Kiên](https://github.com/Kpa02/F8_Backend/tree/main/BaiTapB17)

- [x] [Bài 1]

  Bài làm chưa tốt.

  Bài làm còn chưa có file `app.js` ở ngoài và cài đặt trong file `package.json` để chạy server.

  Bài làm chưa có gì để đánh giá.

  Bài làm chưa có sự đầu tư vào làm bài tập về nhà. Nếu gặp khó khăn nên đặt câu hỏi để được trợ giúp.

---

## [Trần Văn Hiểu](https://github.com/tuilahieu/nodejs/tree/main/exercise/day17)

- [x] [Bài 1]

  Bài làm rất tốt. \*

  Ở trang gallery cần sử dụng vòng lặp để render giao diện, hiện tại đang fix cứng data, làm như vậy quá thủ công và không đảm bảo cập nhật dữ liệu mới khi có data mới.

---
