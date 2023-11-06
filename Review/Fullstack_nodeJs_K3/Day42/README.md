# Nam review bài học viên lớp k3-fullstack

## [Phí Văn Đức](https://github.com/PhiVanDuc/Offline-F8-K3/tree/main/Day-39-JS)

- [x] Bài 1:

  Bài làm tốt\*.

  **Action feature:**

  Call api todos quá nhiều lần. Khi call api thêm, sửa trả về thành công thì không cần phải call api lấy todos nữa mà cập nhật cái todo mới thêm, sửa vào mảng todo list hiện tại.

  Cần validate email khi nhập email để lấy API key.

  Chưa thông báo chào người dùng, thay vào đó là thông báo lấy API Key thành công.

  **Format code**

  Format code tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần validate email trước khi gửi lên, loại bỏ những lần call api không cần thiết.

---

## [Đỗ Văn Khoa 👌](https://mrkhoadev.github.io/F8-Fullstack-K3/)

- [x] Bài 1:

  Bài làm chưa tốt\*.

  **Action feature:**

  Call api todos quá nhiều lần. Khi call api thêm, sửa, xóa trả về thành công thì không cần phải call api lấy todos nữa mà cập nhật cái todo mới thêm, sửa, xóa vào mảng todo list hiện tại.

  Khi ấn sửa và sửa tên todo rồi ấn thoát thì tên todo không reset về như cũ, vẫn để nguyên giá trị sửa mặc dù không ấn lưu.

  Chưa validate tốt email.

  **Format code**

  State error, success sau hơi bị thừa, có thể sử dụng message trực tiếp luôn:

  ```javascript
  this.state = {
    success: (text) => {
      text = text.split('@')[0];
      return this.state.usersEmailCookie
        ? `Chào mừng <span>${text}</span> đến với TodoList :D`
        : '';
    },
    error: 'Hãy nhập email để có thể sử dụng TodoList',
  };
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần xử lý lại validate email cho tốt hơn, giảm số lần call api todos không cần thiết và fix lỗi khi ấn thoát.

---

## [Nguyễn Quang Cường](https://github.com/cuonggold2408/Fullxinach_K3/tree/main/todo-app)

- [x] Bài 1:

  Bài làm chưa tốt\*.

  **Action feature:**

  Khi nhập email để lấy apikey, chưa cần biết lấy thành công hay không, cứ get todo(Mặc dù không có apikey).

  API key cũ bị 401 cũng không xoá, vẫn lưu lại trong storage.

  Sau mỗi request delete đều gọi lại get todo, res trả về chậm.

  Khi xóa todo cần confirm.

  Khi sửa nên làm thêm khi người dùng nhập nội dung sửa ấn enter sẽ cập nhật lại todo.

  **Format code**

  Các đoạn cấu hình toastify nên viết thành 1 constant và khi sử dụng thì import vào, có thể tham khảo cách sau:

  ```javascript
  const configToast = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  };

  //Khi sử dụng
  toast.success('Cập nhật thành công', configToast);
  toast.error('Cập nhật thất bại', configToast);
  toast.error('Cập nhật thất bại', { ...configToast, autoClose: 5000 }); // Trường hợp muốn đổi autoClose thành 5000
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần xóa api key cũ trong localstorage khi bị 401, giảm số lần call api không cần thiết, nên làm thêm confirm kh xóa.

---

## [Vũ Thống ✅](https://github.com/pencilbsp/f8_offline/tree/main/BTVN/btvn_buoi_40)

- [x] Bài 1:

  Bài làm tốt\*.

  **Action feature:**

  Không nên sử dụng input type email.

  Khi bật sửa lên, sửa xong nhưng không update thì khi thoát ra, value không reset về ban đầu.

  Chưa cho confirm khi xoá.

  Trường hợp ấn thêm mà input chưa có nội dung thì button disable, nhưng lúc sau nhập nội dung vào vẫn không loại bỏ disable -> không thêm todo được(Chỉ reload lại mới thêm được).

  **Format code**

  Format code rất tốt.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Tuy nhiên cần reset value khi ấn thoát và lỗi disable button.

---

## [Nguyễn Đức](https://github.com/pencilbsp/f8_offline/tree/main/BTVN/btvn_buoi_40)

- [x] Bài 1:

  Bài làm tốt\*.

  **Action feature:**

  Không có form nhập email để lấy api key.

  Chưa validate input thêm todo.

  Không có checkbox complete ở todo.

  Call api todos quá nhiều lần. Khi call api thêm trả về thành công thì không cần phải call api lấy todos nữa mà cập nhật cái todo mới thêm vào mảng todo list hiện tại.

  **Format code**

  Các đoạn cấu hình toastify nên viết thành 1 constant và khi sử dụng thì import vào, có thể tham khảo cách sau:

  ```javascript
  const configToast = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  };

  //Khi sử dụng
  toast.success('Cập nhật thành công', configToast);
  toast.error('Cập nhật thất bại', configToast);
  toast.error('Cập nhật thất bại', { ...configToast, autoClose: 5000 }); // Trường hợp muốn đổi autoClose thành 5000
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần làm form nhập email lấy api key, validate input thêm todo, checkbox complete ở todo, giảm thiểu số lần call api.

---
