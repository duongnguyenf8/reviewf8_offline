# Dương review bài tập về nhà buổi 44 Lớp k1

## [Luu Anh Quan](https://github.com/anhquan2211/F8-OFFLINE/tree/main/f8-offline-day44)

- [x] Bài 1

  Bài làm rất tốt \*

  **Code format**

  Có rất nhiều file sử dụng loading và component Loading, nên sử dụng ở 1 nơi để tránh việc render nhiều không cần thiết

  Phần token của emailjs nên đưa vào env để tránh bị lộ thông tin không mong muốn

## [Phan Trung Hieu](https://github.dev/pth2003/FullStack_Nodejs_K1/tree/main/BTVN/React/btvn_buoi_44/auth0-login)

- [x] Bài 1

  Bài làm tốt

  Các phần loading xử lý chưa tốt

  Chưa hiển thị popup khi đăng nhập

  Chưa hiển thị loading khi gửi mail

  **Code format**

  Ở App destruct rất nhiều nhưng không sử dụng, khiến code chưa chặt chẽ và thừa.

  Các đoạn code handle:

  ```js
    onClick={() => loginWithRedirect()}
  ```

  Có thể rút gọn thành:

  ```js
  onClick = { loginWithRedirect };
  ```

  Phần token của emailjs, id và domain của auth0 nên đưa vào env để tránh bị lộ thông tin không mong muốn

## [Duong Hiep](https://github.dev/duonghiep416/duonghiep_f8_fullstack/tree/main/Day44-Auth0-EmailJS)

- [x] Bài 1

  Bài làm tốt

  Chưa gửi được mail cho user

  Các phần loading xử lý chưa tốt

  Chưa hiển thị popup khi đăng nhập

  Khi gửi mail xong, chỉ nên xoá câu hỏi, không nên xoá email.

  **Code format**

  Ở Welcome destruct `isAuthenticated` nhưng không sử dụng, khiến code chưa chặt chẽ và thừa.

  Phần token của emailjs nên đưa vào env để tránh bị lộ thông tin không mong muốn

## [Duong Quoc Anh](https://github.dev/QuocAnh-bit/F8_fullstack_006/tree/main/react)

- [x] Bài 1

  Bài làm tốt

  Chưa gửi được mail cho user

  Khi gửi mail xong, nên xoá câu hỏi để user nhập câu hỏi khác!.

  **Code format**

  Phần token của emailjs, id và domain của auth0 nên đưa vào env để tránh bị lộ thông tin không mong muốn

  Các đoạn code handle:

  ```js
    onClick={() => loginWithPopup()}
  ```

  Có thể rút gọn thành:

  ```js
  onClick = { loginWithPopup };
  ```

## [Nguyen Thi Hong Ha](https://github.dev/ha752002/f8-fullstack-k1/tree/main/Ex_ReactJs/day44)

- [x] Bài 1

  Bài làm rất tốt

  Chưa có loading khi đang đăng nhập.

  **Code format**

  Các đoạn code đang tách hơi nhỏ quá, các component như LoginButton, LogoutButton nên sử dụng một component Button để tái sử dụng, và nên fom nhóm vào component tương ứng, ở đây là component Profile

## [Xuan Anh](https://github.dev/xuananh2212/js-fullstack/tree/main/day44)

- [x] Bài 1

  Bài làm tốt\*

  Chưa hiển thị hình ảnh user

  Chưa hiển thị popup khi đăng nhập

  Chưa có loading khi gửi mail

  **Code format**

  Cần format lại code

  Các đoạn code:

  ```js
    onClick={() => loginWithRedirect()}
  ```

  Có thể rút gọn thành:

  ```js
  onClick = { loginWithRedirect };
  ```

  Phần token của emailjs, id và domain của auth0 nên đưa vào env để tránh bị lộ thông tin không mong muốn

  Các đoạn code phân tách chưa rõ ràng, hơi ẩu, phần gửi email không thể để chung với component logout được.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt tuy nhiên hơi ẩu.
