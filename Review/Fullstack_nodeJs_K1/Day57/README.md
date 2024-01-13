# Duong review bai tap ve nha buoi 57 lop K1

## [Nguyen Xuan Tuan Anh](https://github.dev/xuananh2212/back_end/tree/main/day56/auth)

- [x] Bài 1

  Bài làm rất tốt

  Phần JWT chỉ cần để các thông tin ít giá trị và ngắn để JWT nhẹ và bảo mật hơn

  - Có thể để mỗi user_id là đủ.

  Phần check 8 ký tự có thể check .length :v

  ```js
  .matches(/.{8,}$/, 'mật khẩu ít nhất 8 kí tự')
  ```

  Khi logout, có thể xử lý thêm Đưa token vào blacklist: để ngăn chặn kẻ tấn công sử dụng token đó để truy cập vào tài khoản của người dùng

  Đoạn mật khẩu nên validate thêm một vài trường hợp nữa để tăng bảo mật cho mật khẩu.

## [Duong Hiep](https://github.dev/duonghiep416/duonghiep_f8_fullstack/tree/main/Day57)

- [x] Bài 1

  Bài làm tốt

  Khi sign up, mặc định status là false, nhưng khi đăng nhập, lại query các account có status là true, nên không đăng nhập được.

  Nên style lại hoặc dùng bootstrap để giao diện đỡ đẹp hơn.

  Chưa có link chuyển sang trang đăng ký

  Nên sử dụng layout để có thể dễ dàng kế thừa, code ít hơn.

  Khi logout, có thể xử lý thêm Đưa token vào blacklist: để ngăn chặn kẻ tấn công sử dụng token đó để truy cập vào tài khoản của người dùng

  Đoạn mật khẩu nên validate thêm một vài trường hợp nữa để tăng bảo mật cho mật khẩu.

## [Le Van Trung](https://github.com/Trungdeptraii/Bai_57_Le_Van_Trung)

- [x] Bài 1

  Bài làm tốt

  Đăng ký nên cho người dùng nhập lại mật khẩu, việc nhập mật khẩu 1 lần rất dễ bị quên.

  Thông báo đăng ký thành công thì nên là alert-success, và nên hiển thị trang login để người dùng nhập.

  Chưa validate mật khẩu.

  Khi sign up, mặc định status là false, nhưng khi đăng nhập, lại query các account có status là true, nên không đăng nhập được.

  Khi đăng nhập rồi, vào trang đăng nhập vẫn được.

  Lưu tên vào cookie, tuy nhiên chỉ lưu khi đăng nhập chứ không phải mỗi lần reload, nên có thẻ sửa tên,... ở trong cookie mà reload vẫn còn.

  Chỉ check là token có hay không, nếu giả một token thì vẫn login được.

## [Nguyen Thi Hong Ha](https://github.com/ha752002/NodeJs_learning/tree/main/day_57)

- [x] Bài 1

  Bài làm chưa tốt

  Chỉ lưu user-id để check đăng nhập, nếu biết được user-id của user khác thì có thể đăng nhập vào account của user khác. Nên mã hóa JWT nó lại và verify.

  Khi sign up, mặc định status là false, nhưng khi đăng nhập, lại query các account có status là true, nên không đăng nhập được.

  Khi đăng nhập rồi, vào trang đăng nhập vẫn được.

## [Duong Quoc Anh](https://github.dev/QuocAnh-bit/F8_fullstack_006/tree/main/nodejs/AuthNodejs)

- [x] Bài 1

  Bài làm rất tốt

  Lưu thông tin vào session, nếu đóng trình duyệt mở lại sẽ bị đăng xuất. Tùy từng nghiệp vụ mới nên làm như vậy

  Đoạn mật khẩu nên validate thêm một vài trường hợp nữa để tăng bảo mật cho mật khẩu.

## [Pham Tuan](https://github.dev/phamtuan162/phamtuan-nodejs-01/tree/main/Buoi56)

- [x] Bài 1

  Bài làm rất tốt

  Lưu thông tin vào session, nếu đóng trình duyệt mở lại sẽ bị đăng xuất. Tùy từng nghiệp vụ mới nên làm như vậy

  Đoạn mật khẩu nên validate thêm một vài trường hợp nữa để tăng bảo mật cho mật khẩu.

## [Do Ha Chi](https://github.dev/SerenaHa12/fullstack_nodeJS/tree/main/sequelizeORM/btvn_62)

- [x] Bài 1

  Push 2 cái node_module lên

  Làm chưa đúng yêu cầu, yêu cầu đề bài sử dụng nodejs, express, server-side

  - Bài tập sử dụng react(Không server-side)
