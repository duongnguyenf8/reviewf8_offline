# Dương review bài tập về nhà buổi 23 lớp K1 fullstack

## [Luu Anh Quan](https://github.com/anhquan2211/F8-OFFLINE/tree/main/f8-offline-day23)

- [x] [Bài 1]

  Bài làm rất tốt \*

  Với các input ở 2 trang, đều có một điểm chung là **email**, **password**, **name**.

  - Nên sử dụng một hàm chung để viết validate và xử lý các action.

    Để sử dụng ở nhiều nơi, nhiều file mà chỉ sửa một chỗ.

    Việc maintain, fix bug cũng dễ dàng hơn.

  - Nên viết một hàm `getError` để lấy được các message lỗi cần thiết ở một chỗ.

    Để có thể dễ dàng sửa đổi message.

    Để dễ dàng thêm message cho từng case.

  - Nên viết một hàm `resetForm` thực hiện các action reset và kết hợp với hàm validate, getError.

    Để code ngắn gọn hơn.

    Để có thể xử lý các case ở một nơi mà không cần phải copy nhiều lần.

  Với các trường hợp check `=== ""`, có thể sử dụng falsy để code được ngắn gọn hơn.

  Có thể sử dụng một function riêng thay vì phải viết lại nhiều lần, ví dụ:

  ```html
  <script>
    var $ = function (tag) {
      return document.querySelector(tag);
    };
    var $$ = function (allTag) {
      return document.querySelectorAll(allTag);
    };
  </script>
  <script src="..."></script>
  ```

  ***

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt. Đúng yêu cầu đề bài

  Tuy nhiên cần chú ý thêm về vấn đề tối ưu cho việc sửa chữa, nâng cấp.

---

## [Phan Trung Hiếu](https://github.com/pth2003/FullStack_Nodejs_K1/tree/main/BTVN/btvn_buoi_23)

- [x] [Bài 1]

  Bài làm chưa tốt

  Chưa check đủ case cần thiết như mật khẩu đủ 6 ký tự, check email đúng...

  - Có thể check bằng `this.value` của input

  Chưa hiện thông báo của tất cả input sau khi blur 1 input bất kỳ lần đầu tiên.

  - Có thể sử dụng một vòng lặp để hiển thị tất cả lỗi.

  Chưa có ẩn, hiện mật khẩu.

  - Có thể thay đổi thuộc tính type của input từ password thành text và ngược lại.

    ***

- [x] Đánh giá chung bài tập về nhà

  Bài làm chưa tốt

  Bài làm còn thiếu rất nhiều.

---
