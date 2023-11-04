# Dương review bài tập về nhà buổi 42 - Lớp K1

## [Luu Anh Quan](https://github.dev/anhquan2211/F8-OFFLINE/tree/main/f8-offline-day41)

- [x] Bài 1

  Bài làm rất tốt\*

  Các phần xử lý debounce rất tốt.

  Chưa xử lý tốt các phần Unauthorize với status 401

  Các url fetching(GET) có phần `apiKey=null` và đã truyền `X-Api-Key` vào headers

  - Trường hợp bị null là khi vừa đăng nhập(Lần đầu), thêm todo, sau đó tìm kiếm.

  Khi đăng nhập lần đầu(Hoặc xoá localStorage) và đăng nhập lại, chưa get lại todo

  Khi input tìm kiếm đang có value, mà post thêm 1 todo thì hiển thị bài đó vào kèm với list todo đã tìm kiếm.

  Việc đưa apiKey vào url không có ý nghĩa gì, vì yêu cầu của API là phải đưa vào `X-Api-Key` ở headers

  **Code format**

  Các file code chia folder rất tốt.

  Thay vì sử dụng CDN để sử dụng toastify thì nên sử dụng package toastify được cài đặt. Và tìm hiểu về các custom css của nó.

  Phần class trong `TodoInput.jsx` không cần thiết phải đưa `todo-item-only` vào phần tính toán toán tử 3 ngôi:

  ```jsx
   className={`${
      todoItem.isCompleted ? "line-through todo-item-only" : "todo-item-only"
    }`}
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên các case nhỏ cần được chỉn chu hơn. Các phần xử lý trong code rất tốt, tuy nhiên cần được xử lý lại theo hướng package thay vì theo hướng vanillaJS

## [Nguyen Thi Hong Ha](https://github.dev/ha752002/f8-fullstack-k2/tree/main/Ex_ReactJs/day41)

- [x] Bài 1

  Bài làm tốt\*

  Chưa sử dụng form ở phần input khiến cho việc thêm todo khó khăn hơn.

  Chưa validate email ở phía client

  Style input chưa tốt, có vẻ width của input hơi ngắn.

  Khi 401, chưa xoá apiKey cũ đi.

  Khi vào trang, chưa check xem có đăng nhập hay có 401 không, hiển thị chào mừng luôn mặc dù chưa đăng nhập.

  **Code format**

  Các đoạn code chưa chia folder hợp lý.

  Các tên file trong folder Component chưa hợp lý:

  - Folder Loading sử dụng tên file là Loading.jsx

  - Folder todoItem sử dụng tên file là index.jsx (Tên folder chứa Component nên viết hoa chữ đầu để dễ phân biệt)

  - Phần main.js ở folder todoItem nên tách ra, đưa vào folder helpers.

  Tất cả các file main.js đều sai mục đích, nên tách thành helpers, và có rất nhiều hàm trùng lặp chưa tái sử dụng, nếu tách thành helpers thì dễ dàng tái sử dụng hơn.

  Xử lý chưa tốt phần loading, nếu không loading thì các element phục vụ cho loading vẫn ở trong trang.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên các đoạn code cần chú ý hơn để tối ưu tốt hơn. Một số lỗi logic khi 401 và khi login chưa tốt lắm.

## [Dương Hiệp](https://github.dev/duonghiep416/duonghiep_f8_fullstack/tree/main/Day41-TodoList-React)

- [x] Bài 1

  Bài làm tốt

  Chưa có validate email ở phía client

  Khi email nhập sai hoặc không hợp lệ, vẫn thực hiện call data và map ra, chưa thực hiện check data trả về khiến lỗi trắng trang.

  Các loading khi không sử dụng tới vẫn được hiển thị ở DOM.

  Khi input tìm kiếm đang có value, mà post thêm 1 todo thì hiển thị bài đó vào kèm với list todo đã tìm kiếm.

  **Code format**

  Ở file `script.js` vẫn đang sử dụng querySelector khiến code hơi thủ công và có thể sẽ không hoạt dộng đúng(tốt)

  File validateUser có thể chưa hoạt động tốt khiến trắng trang

  Các đoạn code logic trong TodoItem đang check hơi thủ công với SUCCESS và FAILED

  Button đang sử dụng props children ở TodoItem là không tốt, gây khó hiểu và không đúng chuẩn, có thể sử dụng thẻ đóng mở để thay thế thẻ Button tự đóng

  Các đoạn xử lý ở các file component đang hơi trùng lặp như(getTodo, addTodo...) nên tách ra thành 1 folder helper để xử lý riêng.

  Chưa rõ phần state todoDataCopy :)?

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, chưa xử lý các case lỗi đặc biệt khiến ứng dụng có thể sẽ bị trắng trang.

## [Nguyen Xuan Tuan Anh](https://github.dev/xuananh2212/js-fullstack/tree/main/day41/todo-list)

- [x] Bài 1

  Bài làm rất tốt\*

  Khi nhập input và bấm tìm kiếm, chưa lấy value ra để tìm kiếm mà phải gõ lại

  **Code format**

  Chưa rõ ý đồ của các function này:

  ```js
  const handleStateUpdateTodos = (listTodo) => {
    setTodos(listTodo);
  };
  const handleStateUpdateLoading = (value) => {
    setIsLoading(value);
  };
  const handleStateUpdateEditTodo = (id) => {
    setEditTodo(id);
  };
  ```

  Các loading khi không sử dụng vẫn để lại ở DOM

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên các đoạn code chia file cần tối ưu lại một chút vì hơi thừa.
