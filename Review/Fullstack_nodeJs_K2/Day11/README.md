# Dương đánh giá bài học viên

**Note:**

- Màn hình:

  - max-width: 1500px

  - max-width: 1399px

  - max-width: 1199px

  - max-width: 991px

  - max-width: 767px

  - max-width: 575px

  - max-width: 420px

  - max-width: 375px

- Đường dẫn:

  - Root: `https://reviewf8.vercel.app/Review`

  - HTML: `/Fullstack_nodeJs_K2/Day11/index.html`

  - Hình ảnh: `/Fullstack_nodeJs_K2/Day11/images`

## [Đoàn Duy Chinh](https://duychinh.github.io/f8-fullstack-KS2/project1/index.html)

    Sớm nhất \*

- [x] Bài 1: Màn hình: max-width: 1500px

  Bài làm rất tốt \*

  Đặt tên class không hợp lý:

  - Chỉ có một phần header, không nên đặt tên là `header-top`

  - Đã có class `.hero-left` thì nên có `.hero-right`. Nếu không thì không nên đặt tên là `hero-left`

  Phần `.header-top__navbar` được sử dụng để đặt navbar (Navigation bar) có ý nghĩa là thanh điều hướng, chỉ nên đặt thẻ `<nav>`. Phần search form không phải ở thanh điều hướng, nên tách ra. Hoặc thay đổi tên class từ `navbar` thành `action` để thể hiện nơi người dùng tương tác trên header.

  Phần `section.hero` là một section riêng biệt, mang nội dung riêng biệt chứ không phải một thành phần của `header`. Nên tách ra thành một section riêng biệt.

  Các thẻ img nên có thuộc tính `alt` để mô tả hình ảnh. Không nên để trống.

  Chưa có hiệu ứng transition.

  Màu chữ sai so với bản mẫu.

  Phần `heading lv1` bé hơn bản mẫu.

  Phần hiển thị của các phần tử còn bé.

  **[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K2/Day11/images/duychinh1500.png)**

---

- [x] Bài 2: Màn hình: max-width: 1399px

  Bài làm rất tốt \*

  Các lỗi sau giống ở màn hình 1500px.

  **[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K2/Day11/images/duychinh1399.png)**

---

- [x] Bài 3: Màn hình: max-width: 1199px

  Bài làm chưa tốt

  Chưa có responsive ở màn hình này.

  **[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K2/Day11/images/duychinh1199.png)**

---

- [x] Bài 4: Màn hình: max-width: 991px

  Bài làm chưa tốt

  Chưa có responsive ở màn hình này.

  **[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K2/Day11/images/duychinh991.png)**

---

- [x] Bài 5: Màn hình: max-width: 767px

  Bài làm tốt

  Chưa thay đổi font chữ.

  Nút `.hero .btn` quá nhỏ so với bản mẫu.

  Hình ảnh quá to so với bản mẫu.

  Thứ tự tại `.service-2` sai so với bản mẫu.

  **[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K2/Day11/images/duychinh767.png)**

---

- [x] Bài 6: Màn hình: max-width: 575px

  Bài làm không tốt \*

  Chưa có responsive cho màn hình mobile

  **[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K2/Day11/images/duychinh575.png)**

---

- [x] Bài 7: Màn hình: max-width: 420px

  Bài làm tốt \*

  Chưa có responsive cho màn hình mobile

  **[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K2/Day11/images/duychinh420.png)**

---

- [x] Bài 8: Màn hình: max-width: 375px

  Bài làm không tốt \*

  Chưa có responsive cho màn hình mobile

  **[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K2/Day11/images/duychinh375.png)**

---

- [x] Đánh giá chung bài tập về nhà: Mới chỉ responsive ở các màn từ tablet đến desktop nhỏ. Chưa tính tới mobile, dosktop to. Bài làm chưa đủ tốt. Cần cố gắng hơn.

## [Kiều Duy Tùng](https://stung16.github.io/ex_f8-fullstack/day11)

    Sớm nhất \*

- [x] Bài 1: Màn hình: max-width: 1500px

  Bài làm rất tốt \*

  Các section đều có các style giống nhau, không nên sử dụng id để style, việc đó sẽ khiến lặp code không cần thiết. Nên sử dụng class để style.

  Phần header nên tách riêng ra, không nên đưa vào thẻ main, **nên sử dụng thẻ header**, main chỉ để chứa các thông tin, nội dung chính của trang web, không nên chứa các phần header, footer, sidebar, ...

  Sai chính tả `aseet` -> `assets`

  Phần `.content__left-top h3` không phải là một tiêu đề, chỉ là một dòng text được làm khác đi để nhấn mạnh một điều gì đó. Nên sử dụng thẻ `<strong>` thì hợp lý hơn.

  Phần `.header__content` không phải là của header, nó là một section riêng biệt, nên tách ra.

  Tên class là `.abc` không hợp lý và có ý nghĩa gì trong trường hợp bài này. Nên đặt tên class có ý nghĩa.

  Phần `.footer_content_bottom-left` không nằm trên cùng một hàng như bản mẫu.

  **[Xem ảnh](https://reviewf8.vercel.app/Review/Fullstack_nodeJs_K2/Day11/images/stung161500.png)**
