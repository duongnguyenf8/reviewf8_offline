# Nam review bài học viên lớp BE-k1

## [Phương](https://github.com/phuongnd168/back-end-f8/tree/main/Buoi23_24)

- [x] Bài 1:

  Validate email đăng ký sai. Khi nhập email là `test@gmailjsdgfsdf` vẫn đăng ký được

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt tuy nhiên cần sửa lại validate email

---

## [Đức Dũng Nguyễn](https://github.com/dungng1321/NodeJS-Offline-Exercise/tree/main/day24)

- [x] Bài 1:

  Chưa validate email đăng ký. Khi nhập email là `testemail` vẫn đăng ký được

  Trường hợp nhập sai tài khoản/mật khẩu thì cần thông báo rõ là sai tài khoản/mật khẩu

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt tuy nhiên cần validate email khi đăng ký tài khoản

---

## [Đào Đăng Mạnh](https://github.com/Dangmanh2001/F8-BE-k1/tree/main/Baitapbuoi24)

- [x] Bài 1:

  Lỗi: Không đăng nhập vẫn vào được trang chủ.

  Lần đầu vào trang login/register thì không được hiện lỗi ở ô input.

  Đăng ký chưa mã hóa password trước khi lưu dữ liệu vào database dẫn đến đăng ký được nhưng không đăng nhập được.

  Khi đăng ký thành công thì cần chuyển đến url login. Hiện tại vẫn ở url register và không đăng nhập được

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần mã hóa password khi đăng ký tài khoản, thêm middleware để xử lý không đăng nhập thì không được phép vào trang chủ, redirect trang login sau khi đăng ký thành công

---

## [Pham Hoang](https://github.com/palkma-byte/f8-backend-k1/tree/main/HW/HW24)

- [x] Bài 1:

  Lỗi: Không cần nhập name và password khi đăng ký vẫn đăng ký thành công

  Validate email đăng ký chưa đủ các case. Trường hợp nhập email là `test@zzaaaaz.sdsdabc` vẫn có thể đăng ký thành công

  Khi chưa nhập thông tin đăng ký mà ấn đăng ký thì nên hiện message lỗi `Vui lòng nhập đầy đủ thông tin`

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần sửa validate form đăng ký.

---

## [Quang Minh Nguyễn](https://github.com/wex-alacrity/F8_BE_QuangMinh/tree/main/buoi24)

- [x] Bài 1:

  Không có trang login và register

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt.

---

## [Khải Nguyễn](https://github.com/nguyenkhai1311/be-nodejs-k1/tree/main/Day-24)

- [x] Bài 1:

  Lỗi: Không cần nhập thông tin khi đăng ký vẫn đăng ký thành công

  Validate email đăng ký chưa đủ các case. Trường hợp nhập email là `test@zzaaaaz.sdsdabc` vẫn có thể đăng ký thành công

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần sửa lại validate form đăng ký

---

## [Nam Nguyen](https://github.com/namdctry/backend-F8-btvn/tree/main/btvn-b24)

- [x] Bài 1:

  Lỗi: Không nhập mật khẩu vẫn đăng ký tài khoản thành công

  Trường hợp chưa nhập thông tin vào form đăng ký mà ấn đăng ký thì hiển thị message lỗi là `Vui lòng nhập đầy đủ thông tin`. Không làm theo cách chuyển sang trang login rồi hiển thị message `Tài khoản đã tồn tại! Đăng nhập ngay`

  Validate email đăng ký chưa đủ các case. Trường hợp nhập email là `test@zzaaaaz.sdsdabc` vẫn có thể đăng ký thành công

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần sửa lại validate form đăng ký tài khoản.

---
