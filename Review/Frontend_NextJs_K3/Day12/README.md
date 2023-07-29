## [Vũ Thành Khang](https://github.com/countduck4819/f8-frontend)

    Bài làm chưa tốt

**Những lưu ý và lỗi chung trong toàn bài**

- Bắt đầu vào trang phần **remember me** cần được checked khi vào trang giống bài mẫu.

- Khi người dùng select (bôi đen) thì màu nền đang sai thiết kế

- Khoảng cách giữa các layout trong bài chưa thiết kế tốt theo thiết kế bài mẫu.

- Hiệu ứng chuyển động giữa 2 form chưa đúng.

- Trong `form login` và `form-register` khi `focus` vào các `input` chưa đúng thiết kế `outline`.

- Phần `form-register` chưa có text heading "Create your Account!".

- Trong `form-register` nút checked phải là `Send me news and updates via email`

- Sai màu `background`, `text` của nút `Login top your Account` : `Login top your Account`

- Sai màu `box-shadow` của nút `Login top your Account` và `form-register` + `form-login`

- Sai màu chữ của bài (Trong bản mẫu không có chỗ nào sử dụng màu `#000`)

- Sai cỡ chữ nhiều.

- Các `button` chưa có hiệu ứng action `hover` giống bài mẫu. Cần bổ sung `hover` để tăng trải nghiệm người dùng `cursor: pointer`.

**Ở từng màn hình**

- [x] Bài 1: max-width: 1500px

  Bài làm rất tốt \*

  Phần `form-login` và phần text bên trái chưa nằm đúng vị trí theo bản thiết kế (Theo bản mẫu `form-login` cần nằm căn giữa theo chiều cao, 2 phần này nằm ngang dều nhau)

---

- [x] Bài 2: max-width: 1365px

  Bài làm **KHÔNG TỐT**

  Theo bài mẫu, vị trí của 2 phần trái và phải vẫn nằm theo hàng chứ chưa theo cột.

---

- [x] Bài 3: max-width: 960px

  Bài làm chưa tốt

  Vị trí của phần **landing-info** đang nằm quá cao so với thiết kế. Nội dung khối **desc** chưa được ẩn. Khoảng cách giữa **heading** ("WELCOME TO") và ("VIKINGER") chưa đúng.

  Font-size của **VIKINGER** chưa đúng.

  Phần text của **desc** trong `form-register` đang bị rơi ra bên ngoài.

---

- [x] Bài 4: max-width: 480px

  Bài làm chưa tốt

  Các lỗi tương tự với màn 960px

  Chưa có khoảng cách 2 bên cho form và lề màn hình.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt - chưa chỉn chu

  Cần chú ý về khoảng cách, thiết kế của bài mẫu. Xem kỹ thiết kế và cách sử dụng màu sắc trong thiết kế.

## [Đỗ Ngọc Tiến](https://dongoctien17.github.io/F8-frontend-k3/)

    Tổng quan bài làm chưa tốt

**Những lưu ý và lỗi chung trong toàn bài**

- Bắt đầu vào trang phần **remember me** cần được checked khi vào trang giống bài mẫu.

- Khi người dùng select (bôi đen) thì màu nền đang sai thiết kế.

- Chưa sử dụng Grid System theo yêu cầu.

- CSS các phần tử khi Responsive chưa đúng làm phá vỡ layout, khuyết layout

**Ở từng màn hình**

- [x] Bài 1: max-width: 1500px

  Bài làm rất tốt \*

---

- [x] Bài 2: max-width: 1365px

  Bài làm **KHÔNG TỐT**\*

  Đang bị thanh cuộn ngang. Cần xử lý lại responsive đang lỗi cuộn ngang do **dot-texture** và **form-register** (chú ý lại cách CSS)

---

- [x] Bài 3: max-width: 960px

  Bài làm **KHÔNG TỐT**\*

  Lỗi tương tự màn 1365px.

  Chưa ẩn được **dot-texture**.

  Chú ý không để `overflow: hidden` vào `body` khiến các `form` bị khuyết.

---

- [x] Bài 4: max-width: 480px

  Bài làm **KHÔNG TỐT**\*

  Lỗi tương tự màn 960px.

---

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt- chưa chỉn chu

  Chưa đọc kỹ yêu cầu về **Sử dụng Grid System**. Chú ý cách phân tích layout thiết kế của bài mẫu và Responsive.

## [Bảo Anh](https://baoanh2004.github.io/Frontend-Offline-K3/Day-12/)

    Bài làm tốt *

**Những lưu ý và lỗi chung trong toàn bài**

- Bắt đầu vào trang phần **remember me** cần được checked khi vào trang giống bài mẫu.

- Khi người dùng select (bôi đen) thì màu nền đang sai thiết kế.

- Chưa sử dụng Grid System theo yêu cầu.

- Các màn 1500px và 1365px đang bị scroll ngang bởi **second-bg**. Cách khắc phục: Sử dụng `display: none` cho **second-bg** ở 2 màn này và sửa bổ sung lại CSS cho `form-register` để tránh đẩy layout.

**Ở từng màn hình**

- [x] Bài 1: max-width: 1500px

  Bài làm rất tốt \*

  Cần khắc phục scroll ngang và ẩn **second-bg** khi ở màn 1500px theo như bài mẫu.

---

- [x] Bài 2: max-width: 1365px

  Bài làm rất tốt \*

  Tương tự lỗi như màn 1500px

---

- [x] Bài 3: max-width: 960px

  Bài làm tốt \*

  Tương tự lỗi như màn 1500px.

  Khoảng cách các phần tử cùng `background` body đang bị nhảy khiến cho web chưa được mượt mà lúc chuyển động thay đổi giữa 2 form.

  Cần xử lý lại CSS cho `content` và CSS `::before` `::after` của **other-login** để tránh tràn layout xảy ra scroll ngang.

---

- [x] Bài 4: max-width: 480px

  Bài làm tốt \*

  Tương tự lỗi như màn 960px

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt - cần chỉn chu hơn khi Responsive

  Chưa đọc kỹ yêu cầu về **Sử dụng Grid System**. Chú ý cách phân tích layout thiết kế của bài mẫu và Responsive. Chú ý thêm CSS ở các màn Responsive nhỏ tránh gây tình trạng scroll ngang.

## [Nguyễn Đức Hải](https://duchainguyen.github.io/F8-FE-K3/day-12/index.html)

    Bài làm tốt về giao diện

**Những lưu ý và lỗi chung trong toàn bài**

- Bắt đầu vào trang phần **remember me** cần được checked khi vào trang giống bài mẫu.

- Phần checked của **remember me** đang sai so với thiết kế.

- Các `button` chưa có hiệu ứng `hover`, thiếu `box-shadow`, sai font chữ.

- Các `input` trong form khi `focus` màu `outline` chưa đúng, phần text của `label` khi `focus` đang bị chạm với `outline`.

- Phần **Switch Form** đang bị sai: Khi chuyển qua **register** thì đứng lại luôn không thể chuyển về **login**. Một bên khi chọn thì nền trắng chữ đen - bên còn lại nền trong suốt chữ trắng.

- Hiệu ứng chuyển đổi giữa 2 form chưa giống bài mẫu.

- Khi người dùng select (bôi đen) thì màu nền đang sai thiết kế.

- Chưa sử dụng Grid System theo yêu cầu.

- Khoảng cách của các phần tử trong layout đang lệch xuống so với thiết kế bài mẫu. Đặc biệt là phần `form-register`.

**Ở từng màn hình**

- [x] Bài 1: max-width: 1500px

  Bài làm tốt về mặt giao diện, chưa xử lý được phần **Switch Form**

---

- [x] Bài 2: max-width: 1365px

  Bài làm tốt về mặt giao diện

---

- [x] Bài 3: max-width: 960px

  Bài làm tốt về mặt giao diện

---

- [x] Bài 4: max-width: 480px

  Bài làm chưa tốt

  Chưa có khoảng cách 2 bên của các `form`

---

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt về mặt giao diện - cần chỉn chu hơn khi Responsive

  Chú ý hơn về cách làm **Switch Form**

  Chưa đọc kỹ yêu cầu về **Sử dụng Grid System**. Chú ý cách phân tích layout thiết kế của bài mẫu và Responsive.
