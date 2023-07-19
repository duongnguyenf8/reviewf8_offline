# Dương đánh giá bài học viên

## [Nguyen Xuan Tuan Anh](https://github.com/xuananh2212/full_stack_01/tree/main/day_12)

    Sớm nhất *

- [x] Bài 1:

  Bài làm rất tốt \*

  Nên đo đúng tỷ lệ hình ảnh để làm bài tốt hơn.

  Tất cả kích thước ảnh đang sai so với bản mẫu.

  Nên thêm một chút padding hoặc margin vào bottom để khi cuộn xuống cuối, hình ảnh không bị dính vào lề dưới.

  Ở màn hình từ 576px => 768px, hình ảnh dọc đang quá hẹp.

  Từ màn hình 575 trở xuống, việc làm menu cuộn ở trong một trang web mobile khá là khó sử dụng, chỉ cần cuộn quá tay thì sẽ bị lăn vào toàn trang. Nên sử dụng tab ngang để hiển thị menu thì hợp lý hơn.

  - Phần **Help Center** không mang vai trò quá quan trọng hơn hoặc bằng menu, logo. Không nên đặt chung hàng. Có thể đổi chỗ **Help Center** cho menu.

  Đã có reset css ở trên, không cần thiết phải viết lại selector `*` ở dưới.

  ```css
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }
  ```

  Nếu đặt tên class và selector theo BEM thì nên tuân thủ đúng BEM (Block, Element, Modifier).

  Không cần thiết phải link nhiều ảnh trong `rel="icon"` và `rel="apple-touch-icon"` vì sử dụng ảnh này để hiển thị icon trên tab, bookmark, màn hình chính điện thoại. Nên chỉ cần link ảnh 32x32 là đủ.

---

## [Mai Việt Hoàng](https://viethoang-mai.github.io/MVH-fullstack-nodejs-F8-01/Hoc_SCSS/Thuc_hanh_b13)

- [x] Bài 1:

  Bài làm rất tốt \*

  Nên đo đúng tỷ lệ hình ảnh để làm bài tốt hơn.

  Tất cả kích thước ảnh đang sai so với bản mẫu.

  Phần `.wrapper .search-form .search-input` hơi xấu, đang bị nổi khối với màu đền.

  Phần hình ảnh chính `.wrapper-inner .item.column > * img` nên có alt miêu tả hình ảnh thay vì để trống.

  Từ màn hình `909px` đến `769px` đang bị lỗi giao diện.

  Từ màn `375px` trở xuống, việc xếp 2 hình ảnh vào chung 1 cột khiến cho hình ảnh bị thu nhỏ quá nhiều, không đẹp.

  - Chữ **Gifts & Living** đang bị nhảy chữ xuống. Nên sử dụng `white-space: nowrap` để chữ không bị xuống dòng.

  
---
