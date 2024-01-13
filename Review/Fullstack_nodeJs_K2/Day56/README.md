# Nam review bài học viên lớp k2-fullstack

## [Đoàn Duy Chinh](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-56-SigninNodejs)

- [x] Bài 1:

  Bài làm tốt\*

  Field password vẫn để type=text.

  Khi đăng ký xong nên chuyển hướng về trang đăng nhập trước để người dùng nhập lại thông tin đăng nhập.

  Field password nên validate kĩ hơn(Độ dài tối thiểu 6-8 ký tự, chữ in hoa, ký tự đặc biệt,...).

  Khi email chưa đăng ký cần thông báo `Tài khoản không tồn tại`.

  Phần lấy user ở handleLogin nên dùng findOne:

  ```javascript
  const users = await User.findAll({
  	where: filters,
  });

  // Nên dùng
  const user = await User.findOne({
  	where: filters,
  });
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần sửa lại phần validate để bài làm hoàn chỉnh hơn.

---

## [Thế Nguyễn Đại](https://github.com/daithehh04/fullstack/tree/main/day56)

- [x] Bài 1:

  Bài làm rất tốt\*

  Field password nên validate kĩ hơn(Độ dài tối thiểu 6-8 ký tự, chữ in hoa, ký tự đặc biệt,...).

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

---

## [Bùi Quang Trưởng](https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/tree/main/Day56)

- [x] Bài 1:

  Bài làm rất tốt\*

  Field password nên validate kĩ hơn(Độ dài tối thiểu 6-8 ký tự, chữ in hoa, ký tự đặc biệt,...).

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

---
