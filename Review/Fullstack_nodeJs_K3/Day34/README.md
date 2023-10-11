# Nam review bài học viên lớp k3-fullstack

## [Nguyễn Quang Cường](https://github.com/cuonggold2408/Fullxinach_K3/tree/main/Day_34)

- [x] Bài 1:

  Bài làm chưa tốt\*.

  **Usage feature:**

  Chức năng thêm, sửa, xóa task người dùng sử dụng rất tốt

  Chức năng hoàn thành task người dùng sử dụng tốt

  Chưa dùng được chức năng tìm kiếm task

  **Hidden feature**

  Khi ấn xóa task cần phải có confirm trước khi xóa. Tránh trường hợp người dùng ấn nhầm

  Khi nội dung task quá dài, chưa xử lý tràn nội dung form chứa task

  Khi thêm task nội dung quá dài rồi ấn xóa, sửa thì id bị `undefined`

  **Special Feature**

  Khi thao tác thêm, sửa, xóa dữ liệu cập nhật database chính xác

  Đã xử lý XSS

  Xử lý số lần fetch api rất tốt

  **Format code**

  Nên tách phần fetch api ra 1 file riêng để bóc tách code. Khi dùng sẽ import vào để dùng

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần làm thêm chức năng tìm kiếm, modal confirm xóa và xử lý khi nội dung task quá dài

---

## [Đỗ Văn Khoa](https://mrkhoadev.github.io/F8-Fullstack-K3/)

- [x] Bài 1:

  Bài làm chưa tốt\*.

  **Usage feature:**

  Chức năng thêm, sửa, xóa lần đầu vào website dùng tốt nhưng khi thêm mới 1 task, ấn xóa thì modal confirm xóa bị hiện 2 lần.

  Khi thêm mới và ấn sửa thì thông tin hiển thị trên form sửa không chính xác

  Chưa dùng được chức năng tìm kiếm task

  Khi ấn hoàn thành task, icon hoàn thành nên chuyển sang màu xanh cho người dùng dễ phần biệt

  **Hidden feature**

  Số lần fetch api chạy quá nhiều lần

  Khi ấn sửa không cần fetch api lấy tất cả user

  Ấn xóa nhưng lại fetch api lấy tất cả user

  **Special Feature**

  Đã xử lý XSS

  Khi thao tác thêm, sửa, xóa dữ liệu cập nhật database chính xác

  **Format code**

  Không nên truyền hàm `postData` vào làm tham số của 1 hàm khác

  Khi thêm mới 1 task rồi ấn xóa thì modal xóa hiện lên 2 lần là do ban đầu vào website button xóa đã được thêm sự kiện click, sau khi thêm mới lại được thêm 1 lần nữa cho nên khi ấn xóa thì sẽ chạy 2 sự kiện click và modal xóa hiện 2 lần. Lý do bị thêm sự kiện click là do đoạn code trong hàm `handleSubmit`:

  ```Javascript

    if (id === undefined) {
      await data(value);
      await handleAddData();
      hasClicked = false;
      handleTaskBoxBtn();         //Hàm này được gọi cho nên sẽ thêm sự kiện click vào các button xóa 1 lần nữa
    }

  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần sửa lại phần xóa task sau khi thêm 1 task và giảm thiểu số lần fetch api

---

## [Phí Văn Đức](https://github.com/PhiVanDuc/Offline-F8-K3/tree/main/Day-34-JS)

- [x] Bài 1:

  Bài làm chưa tốt\*.

  **Usage feature:**

  Chức năng thêm, sửa, xóa task người dùng sử dụng rất tốt

  Chức năng hoàn thành task người dùng sử dụng tốt

  Chưa dùng được chức năng tìm kiếm task

  **Hidden feature**

  Khi ấn thêm task không nhất thiết phải hiện alert để thông báo

  Khi ấn xóa cần có confirm trước khi xóa. Tránh trường hợp người dùng ấn nhầm

  Xử lý số lần fetch api rất tốt

  **Special Feature**

  Đã xử lý XSS

  Khi thao tác thêm, sửa, xóa dữ liệu cập nhật database chính xác

  **Format code**

  Nên tách phần fetch api ra 1 file riêng để bóc tách code. Khi dùng sẽ import vào để dùng

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần làm thêm chức năng tìm kiếm task, thêm modal confirm khi ấn xóa

---
