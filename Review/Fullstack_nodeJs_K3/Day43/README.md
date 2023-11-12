# Nam review bài học viên lớp k3-fullstack

## [Phí Văn Đức](https://github.com/PhiVanDuc/Offline-F8-K3/tree/main/Day-39-JS)

- [x] Bài 1:

  Bài làm tốt\*.

  **Action feature:**

  Chưa validate ô input tìm kiếm. Nếu chưa nhập gì thì không được phép tìm kiếm.

  Xử lý tìm kiếm, auto tìm kiếm rất tốt.

  Khi bị 401 chưa xóa apiKey trong localstorage.

  **Format code**

  Time debounce nên để thấp hơn, nếu để cao người dùng tưởng web chậm, trải nghiệm không tốt, có thể để khoảng 300-500 miliseconds.

  Hàm `updateTodosFromSearch` chỉ TodoForm sử dụng nên để bên TodoForm, không nên truyền quá nhiều props để code đỡ bị rối.

  Phần debounce nên tạo 1 folder hook và đặt trong đó để có thể sử dụng nhiều lần.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần validate ô tìm kiếm và xử lý xóa apiKey khi bị lỗi 401.

---

## [Nguyễn Quang Cường](https://github.com/cuonggold2408/Fullxinach_K3/tree/main/todo-app)

- [x] Bài 1:

  Bài làm tốt\*.

  **Action feature:**

  Khi nhập tìm kiếm rồi ấn giữ delete hết các ký tự, cái list todo cuối cùng hiển thị không đúng.

  Xử lý tìm kiếm, auto tìm kiếm rất tốt.

  **Format code**

  Phần debouce nên tạo 1 folder hook và viết trong đây.

  Tham số callback truyền vào debounce nên viết ra 1 hàm riêng rồi truyền vào, viết cả logic xử lý như hiện tại nhìn rất rối.

  Tham số của toastify nên viết ra 1 object dùng chung cho tất cả, tránh việc viết lại nhiều lần những tham số trùng nhau. Về sau có thể dễ dàng chỉnh sửa hơn.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên sửa lỗi khi ấn giữ delete hết các ký tự.

---

## [Đỗ Văn Khoa 👌](https://mrkhoadev.github.io/F8-Fullstack-K3/)

- [x] Bài 1:

  Bài làm tốt\*.

  **Action feature:**

  Khi ấn tìm kiếm để loại bỏ chức năng tìm kiếm vẫn call api để tìm kiếm.

  Xử lý tìm kiếm, auto tìm kiếm rất tốt.

  **Format code**

  File `HtmlScript` nên để trong folder helper thì đúng kiểu hơn.

  Nếu muốn sử dụng toán tử 3 ngôi để thêm class thì có thể làm theo cách sau:

  ```jsx
  <button
    className={`search-btn${isSearch ? ' active' : ''}`}
    onClick={handleClick}>
    Tìm kiếm
  </button>
  ```

  Phần debounce nên tạo 1 folder hook và đặt trong đó để có thể sử dụng nhiều lần.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần sửa lỗi khi ấn tìm kiếm để loại bỏ chức năng tìm kiếm.

---
