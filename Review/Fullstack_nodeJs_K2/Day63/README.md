# Dương review bài tập về nhà buổi 63 - Lớp K2

## [Nguyen Dai The](https://day61.vercel.app/auth/login)

- [x] Bài 1

  Khi tạo một liên kết có mật khẩu, không chuyển hướng an toàn, thì khi vào vẫn redirect mà không yêu cầu mật khẩu.

  Chưa xử lý ID tốt, một id dạng thẻ HTML, hay một(nhiều) dấu cách thì chưa validate.

  Validate url thiếu: Nếu thiếu protocol ở đầu thì nên thêm vào, nếu không thì đang bị lỗi

  Thiếu các case:

  - Đổi mật khẩu

  - Quản lý url đã rút gọn của user đó
