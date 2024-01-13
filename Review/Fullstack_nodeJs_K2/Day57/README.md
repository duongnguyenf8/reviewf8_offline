# Dương review bài tập về nhà buổi 57 - Lớp K2

## [Pham Tien Dat](https://github.dev/phamtiendat18/Fullstack-K2/tree/main/day56)

- [x] Bài 1

  Bài làm rất tốt

  Lưu thông tin vào session, nếu đóng trình duyệt mở lại sẽ bị đăng xuất. Tùy từng nghiệp vụ mới nên làm như vậy

  Đoạn mật khẩu nên validate thêm một vài trường hợp nữa để tăng bảo mật cho mật khẩu.

## [Nguyen Dai The](https://github.dev/phamtiendat18/Fullstack-K2/tree/main/day56)

- [x] Bài 1

  Bài làm rất tốt

  Lưu thông tin vào session, nếu đóng trình duyệt mở lại sẽ bị đăng xuất. Tùy từng nghiệp vụ mới nên làm như vậy

## [Doan Duy Chinh](https://github.dev/phamtiendat18/Fullstack-K2/tree/main/day56)

- [x] Bài 1

  Bài làm tốt

  Đoạn regex này quá khó để đăng ký một tài khoản mới, khiến user đăng ký một tài khoản khó hơn.

  ```js
  .required("Please enter password!").matches(/^[a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9]*$/, 'Password must contain at least one letter'),
  ```

  Đoạn code này gặp lỗi can not setHeader:

  ```js
  index: (req, res) => {
  const username = req.session.username;
  if (req.session.logIn) {
    // res.render('index', { username }); Thiếu return nên chạy cả render lẫn redirect
    return res.render('index', { username });
  }
  return res.redirect('/signin');
  },
  ```

  Lưu thông tin vào session, nếu đóng trình duyệt mở lại sẽ bị đăng xuất. Tùy từng nghiệp vụ mới nên làm như vậy

## [Kieu Duy Tung](https://github.dev/phamtiendat18/Fullstack-K2/tree/main/day56)

- [x] Bài 1

  Bài làm tốt

  Đặt tên cột là `delete_at`, không hợp lý vì chưa xóa làm sao có `"at"`

  Đoạn code này gặp lỗi can not setHeader:

  ```js
  index: async (req, res) => {
  const login = req.session.login;
  if (!login) {
     // res.redirect('/login'); Thiếu return nên chạy cả redirect lẫn render
    res.redirect('/login');
  }
  const infor = req.session.username; // Sai chính tả
   // res.render('index', { infor }); Thiếu return nên chạy cả redirect lẫn render
  res.render('index', { infor });
  },
  ```

  Lưu thông tin vào session, nếu đóng trình duyệt mở lại sẽ bị đăng xuất. Tùy từng nghiệp vụ mới nên làm như vậy

## [Bui Quang Truong](https://github.dev/phamtiendat18/Fullstack-K2/tree/main/day56)

- [x] Bài 1

  Bài làm tốt

  Chưa ignore node_modules

  Sai link bài tập, gửi link bài 55

  Đặt tên cột là `delete_at`, không hợp lý vì chưa xóa làm sao có `"at"`

  Các cột này thêm prefix `user_` hơi thừa

  ```js
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  ```

  Lưu thông tin vào session, nếu đóng trình duyệt mở lại sẽ bị đăng xuất. Tùy từng nghiệp vụ mới nên làm như vậy

  Đoạn mật khẩu nên validate thêm một vài trường hợp nữa để tăng bảo mật cho mật khẩu.
