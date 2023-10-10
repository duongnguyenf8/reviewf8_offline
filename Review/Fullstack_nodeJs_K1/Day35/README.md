# Dương review bài tập về nhà buổi 35 - Lớp K1

## [Dương Hiệp](https://duonghiep416.github.io/duonghiep_f8_fullstack/Day35/)

- [x] Bài 1

  Bài làm rất tốt\*

  **Usage feature:**

  Bài làm rất tốt \*

  **Code format:**

  Ở file `client.js` không nên viết tham số đầu các hàm là `url` tránh gây hiểu nhầm là phải truyền đầy đủ url vào, nên thay thành tên `endpoint` để tường minh hơn.

  Đoạn code hàm `render` trong file `main.js` đang hơi khó hiểu, có thể tách thành hàm nhỏ và comment rõ ràng hơn sẽ dễ dàng hơn cho việc đọc hiểu.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần chú ý thêm về semantics trong code.

## [Nguyen Xuan Tuan Anh](https://xuananh2212.github.io/js-fullstack/day35/)

- [x] Bài 1

  Bài làm rất tốt\*

  **Usage feature:**

  Bài làm rất tốt \*

  **Code format:**

  Các phần code đang làm hơi dài dòng, và các function tại file `crud.js` đang được thiết kế chưa tốt với cách sử dụng tiện lợi, nên đưa query ra đằng sau path để các phương thức có thể dễ dàng viết hơn, ví dụ như `get(path)`.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần chú ý thêm về semantics trong code.

## [Do Ha Chee](https://serenaha12.github.io/fullstack_nodeJS/hoc_javascript/btvn_35/ex03/index.html)

- [x] Bài 1

  Bài làm tốt\*

  **Usage feature:**

  Bài làm tốt \*

  Sau mỗi lần gọi, đều call về 102 item thay vì call theo phân trang.

  **Code format:**

  Các phần code đang làm hơi dài dòng, chưa chia file một cách chi tiết để tái sử dụng

  Nếu muốn hiển thị 2 tags trở lên thì phải cấu trúc lại mảng tags trong json-server

  Cần thiết kế thêm user để giống với bản mẫu.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên cần cấu trúc lại data trong json-server và sử dụng \_page thay vì page để có thể call từng page một

## [Phan Trung Hieu](https://pth2003.github.io/FullStack_Nodejs_K1/BTVN/btvn_buoi_35)

- [x] Bài 1

  Bài làm tốt\*

  **Usage feature:**

  Bài làm rất tốt \*

  Tuy nhiên nếu muốn thay đổi số lượng item hiển thị trong một trang thì chưa thể làm được

  **Code format:**

  Các phần code đang làm hơi dài dòng, chưa chia file một cách chi tiết để tái sử dụng

  Chưa hiển thị được phần category và user

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên cần cấu trúc lại data trong json-server để bài làm sát hơn với bản mẫu

## [Tuấn Phạm](https://pth2003.github.io/FullStack_Nodejs_K1/BTVN/btvn_buoi_35)

- [x] Bài 1

  **Có phần tham khảo của [Nguyen Xuan Tuan Anh](https://xuananh2212.github.io/js-fullstack/day35/)**

  Bài làm rất tốt\*

  **Usage feature:**

  Bài làm rất tốt \*

  **Code format:**

  Các phần code đang làm hơi dài dòng, và các function tại file `crud.js` đang được thiết kế chưa tốt với cách sử dụng tiện lợi, nên đưa query ra đằng sau path để các phương thức có thể dễ dàng viết hơn, ví dụ như `get(path)`.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần chú ý thêm về semantics trong code.

## [Quốc Anh](https://pth2003.github.io/FullStack_Nodejs_K1/BTVN/btvn_buoi_35)

- [x] Bài 1

  Bài làm rất tốt\*

  **Usage feature:**

  Bài làm rất tốt \*

  **Code format:**

  Phần xử lý nối chuỗi chưa tốt: `https://35y4ks-8080.csb.app/posts?_page=1&_limit=5}`

  Phần thiết kế JSON chưa tốt khi phải create tag trong mảng `hashtag` và `content` trong mảng `contentPost`

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần chú ý cách cấu trúc mảng trong json-server

## [Nguyễn Thị Hồng Hà](https://ha752002.github.io/f8-fullstack-k2/Ex_Javascript/day35)

- [x] Bài 1

  Bài làm rất tốt\*

  **Usage feature:**

  Bài làm rất tốt \*

  **Code format:**

  Chưa xử lý khi hết content, khiến cho các request vẫn gửi lên.

  Chưa rõ đoạn code này tách hàm mục đích gì:

  ```js
  getPortfolio();
  function handleScroll(e) {
    getPortfolio();
  }
  window.addEventListener('scrollend', handleScroll);
  ```

  Endpoint không nên viết hoa, tránh gây xấu url và không đúng

  Nên thiết kế thêm category và user để giống với bản mẫu hơn

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần chú ý cách xử lý code trong bài.

## [Nguyễn Duy Hiếu](https://hieuboss.github.io/F8-fullstack-k2/javascript/lesson20/index.html)

- [x] Bài 1

  Bài làm rất tốt\*

  **Usage feature:**

  Bài làm rất tốt \*

  **Code format:**

  Nên tách phần xử lý chuỗi query ra thành một options để dễ dàng thêm, thay đổi hơn.

  Endpoint không nên viết hoa, tránh gây xấu url và không đúng

  Nên thiết kế thêm category và user để giống với bản mẫu hơn

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần chú ý cách xử lý code trong bài.

## [Hoài Nam Đỗ](https://oaihman25.github.io/btvn/day35/index.html)

- [x] Bài 1

  Bài làm rất tốt\*

  **Usage feature:**

  Bài làm rất tốt \*

  **Code format:**

  Format code chưa tốt

  Chưa xử lý khi hết content, khiến cho các request vẫn gửi lên.

  Nên thiết kế thêm category và user để giống với bản mẫu hơn

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần chú ý cách xử lý code trong bài.
