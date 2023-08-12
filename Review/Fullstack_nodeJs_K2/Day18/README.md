# Dương review bài tập về nhà buổi 18 Lớp FS-K2

## [Hồng Hà Nguyễn Thị](https://github.com/ha752002/f8-fullstack-k2/tree/main/Ex_Javascript/days18/js)

- [x] [Bài 1](https://github.com/ha752002/f8-fullstack-k2/blob/main/Ex_Javascript/days18/js/ex01.js)

  Bài làm rất tốt \*

  Nếu chỉ khai báo một function rồi gọi luôn ở dưới, trong trường hợp bài này là không cần thiết.

  Nên sử dụng setInterval để việc lặp lại được tự động.

  Thay vì cắt chuỗi thanh span và add style màu đỏ thì nên thay thế 1 chuỗi bằng 1 chuỗi bọc span.highlight.

  Như vậy có thể dễ dàng sửa đổi style của highlight hơn.

  ```html
  <style>
    .highlight {
      background-color: yellow;
      color: red;
      text-shadow: -0.2px -0.2px 0 red, 0.2px -0.2px 0 red, -0.2px 0.2px 0 red, 0.2px
          0.2px 0 red;
    }
  </style>
  <p class="content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, amet.
  </p>
  <script>
    const $ = (tag) => document.querySelector(tag);
    const saveContent = $(".content").innerText.trim();
    let content = saveContent.split(" "),
      i = 0;
    function resetContent() {
      $(".content").innerHTML = saveContent;
      i = 0;
      content = saveContent.split(" ");
    }
    function highlightWord() {
      if (i >= content.length) return resetContent();
      for (let j = 0; j < i; j++)
        content[j] = content[j]
          .replace('<span class="highlight">', "")
          .replace("</span>", "");
      const span = document.createElement("span");
      span.className = "highlight";
      span.innerText = content[i];
      content[i] = span.outerHTML;
      $(".content").innerHTML = content.join(" ");
      i++;
    }
    setInterval(highlightWord, 500);
  </script>
  ```

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt

  Có thể sử dụng thêm một số kỹ thuật để tối ưu code cho dễ đọc và ít phải xử lý hơn nữa.

---

## [Bùi Quang Trưởng](https://okazakitruong.github.io/BQTruong-F8-K2-Offline/Day18/index.html)

- [x] [Bài 1](https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/blob/main/Day18/js/main.js)

  Bài làm rất tốt \*

  Thay vì cắt chuỗi thanh span và add style màu đỏ thì nên thay thế 1 chuỗi bằng 1 chuỗi bọc span.highlight.

  Như vậy có thể dễ dàng sửa đổi style của highlight hơn.

  Nếu đoạn xử lý gây cảm giác khó hiểu, nên tách ra thành một function riêng và gọi vào setInterval sau.

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt

  Nên chú ý thêm vào việc tối ưu code dễ dàng scale, nâng cấp.

---

## [Đoàn Duy Chinh](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-18)

- [x] [Bài 1](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-18)

  Bài làm rất tốt \*

  Thay vì cắt chuỗi thanh span và add style màu đỏ thì nên thay thế 1 chuỗi bằng 1 chuỗi bọc span.highlight.

  Như vậy có thể dễ dàng sửa đổi style của highlight hơn.

  Nếu đoạn xử lý gây cảm giác khó hiểu, nên tách ra thành một function riêng và gọi vào setInterval sau.

  Bài làm giống hệt [Bùi Quang Trưởng](https://github.com/OkazakiTruong/BQTruong-F8-K2-Offline/blob/main/Day18/js/main.js)

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt

  Nên chú ý thêm vào việc tối ưu code dễ dàng scale, nâng cấp.

---

## [Thế Nguyễn Đại](https://daithehh04.github.io/fullstack/day18)

- [x] [Bài 1](https://github.com/daithehh04/fullstack/blob/main/day18/assets/js/app.js)

  Bài làm rất tốt \*

  Nếu đoạn xử lý gây cảm giác khó hiểu, nên tách ra thành một function riêng và gọi vào setInterval sau.

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt \*

---

## [Duy Hiếu Nguyễn](https://hieuboss.github.io/F8-fullstack-k2/link/link.html)

- [x] [Bài 1](https://github.com/HieuBoss/F8-fullstack-k2/blob/main/javascript/lesson4/ex1/ex1.js)

  Bài làm rất tốt \*

  Nếu đoạn xử lý gây cảm giác khó hiểu, nên tách ra thành một function riêng và gọi vào setInterval sau.

  Nếu chỉ khai báo một function rồi gọi luôn ở dưới, trong trường hợp bài này là không cần thiết.

  Thay vì cắt chuỗi thanh span và add style màu đỏ thì nên thay thế 1 chuỗi bằng 1 chuỗi bọc span.highlight.

  Như vậy có thể dễ dàng sửa đổi style của highlight hơn.

  ```html
  <style>
    .highlight {
      background-color: yellow;
      color: red;
      text-shadow: -0.2px -0.2px 0 red, 0.2px -0.2px 0 red, -0.2px 0.2px 0 red, 0.2px
          0.2px 0 red;
    }
  </style>
  <p class="content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, amet.
  </p>
  <script>
    const $ = (tag) => document.querySelector(tag);
    const saveContent = $(".content").innerText.trim();
    let content = saveContent.split(" "),
      i = 0;
    function resetContent() {
      $(".content").innerHTML = saveContent;
      i = 0;
      content = saveContent.split(" ");
    }
    function highlightWord() {
      if (i >= content.length) return resetContent();
      for (let j = 0; j < i; j++)
        content[j] = content[j]
          .replace('<span class="highlight">', "")
          .replace("</span>", "");
      const span = document.createElement("span");
      span.className = "highlight";
      span.innerText = content[i];
      content[i] = span.outerHTML;
      $(".content").innerHTML = content.join(" ");
      i++;
    }
    setInterval(highlightWord, 500);
  </script>
  ```

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt \*

  Nên chú ý thêm vào việc tối ưu code dễ dàng scale, nâng cấp.

---

## [Nguyễn Văn Đức](https://github.com/Poyken/Js/tree/main/day18/ex)

- [x] [Bài 1](https://github.com/Poyken/Js/blob/main/day18/ex/js/script.js)

  Bài làm rất tốt \*

  Nếu đoạn xử lý gây cảm giác khó hiểu, nên tách ra thành một function riêng và gọi vào setInterval sau.

  Thay vì cắt chuỗi thanh span và add style màu đỏ thì nên thay thế 1 chuỗi bằng 1 chuỗi bọc span.highlight.

  Như vậy có thể dễ dàng sửa đổi style của highlight hơn.

  ```html
  <style>
    .highlight {
      background-color: yellow;
      color: red;
      text-shadow: -0.2px -0.2px 0 red, 0.2px -0.2px 0 red, -0.2px 0.2px 0 red, 0.2px
          0.2px 0 red;
    }
  </style>
  <p class="content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, amet.
  </p>
  <script>
    const $ = (tag) => document.querySelector(tag);
    const saveContent = $(".content").innerText.trim();
    let content = saveContent.split(" "),
      i = 0;
    function resetContent() {
      $(".content").innerHTML = saveContent;
      i = 0;
      content = saveContent.split(" ");
    }
    function highlightWord() {
      if (i >= content.length) return resetContent();
      for (let j = 0; j < i; j++)
        content[j] = content[j]
          .replace('<span class="highlight">', "")
          .replace("</span>", "");
      const span = document.createElement("span");
      span.className = "highlight";
      span.innerText = content[i];
      content[i] = span.outerHTML;
      $(".content").innerHTML = content.join(" ");
      i++;
    }
    setInterval(highlightWord, 500);
  </script>
  ```

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt \*

  Nên chú ý thêm vào việc tối ưu code dễ dàng scale, nâng cấp.

---

## [Tiến Đạt - K2](https://github.com/phamtiendat18/Fullstack-K2/blob/main/Day_18/js)

- [x] [Bài 1](https://github.com/phamtiendat18/Fullstack-K2/blob/main/Day_18/js/script.js)

  Bài làm rất tốt \*

  Thay vì cắt chuỗi thanh span và add style màu đỏ thì nên thay thế 1 chuỗi bằng 1 chuỗi bọc span.highlight.

  Như vậy có thể dễ dàng sửa đổi style của highlight hơn.

  ```html
  <style>
    .highlight {
      background-color: yellow;
      color: red;
      text-shadow: -0.2px -0.2px 0 red, 0.2px -0.2px 0 red, -0.2px 0.2px 0 red, 0.2px
          0.2px 0 red;
    }
  </style>
  <p class="content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, amet.
  </p>
  ```

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt \*

  Nên chú ý thêm vào việc tối ưu code dễ dàng scale, nâng cấp.

---

## [Kiều Duy Tùng](https://github.com/Stung16/ex_f8-fullstack/blob/master/Day18)

- [x] [Bài 1](https://github.com/Stung16/ex_f8-fullstack/blob/master/Day18/main.js)

  Bài làm rất tốt \*

  Nếu chỉ viết một hàm rồi gọi chính nó luôn thì ở trong bài tập này là không cần thiết.

  Không cần thiết phải sử dụng `setAttribute` cho class mà có thể sử dụng `className`

  Vì đang sử dụng `setTimeout` nên bài tập đang đi theo hướng sử dụng đệ quy, mặc dù không cần thiết mà có thể sử dụng `setInterval`.

  ```html
  <style>
    .highlight {
      background-color: yellow;
      color: red;
      text-shadow: -0.2px -0.2px 0 red, 0.2px -0.2px 0 red, -0.2px 0.2px 0 red, 0.2px
          0.2px 0 red;
    }
  </style>
  <p class="content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, amet.
  </p>
  <script>
    const $ = (tag) => document.querySelector(tag);
    const saveContent = $(".content").innerText.trim();
    let content = saveContent.split(" "),
      i = 0;
    function resetContent() {
      $(".content").innerHTML = saveContent;
      i = 0;
      content = saveContent.split(" ");
    }
    function highlightNextWord() {
      if (i >= content.length) return resetContent();
      for (let j = 0; j < i; j++)
        content[j] = content[j]
          .replace('<span class="highlight">', "")
          .replace("</span>", "");
      const span = document.createElement("span");
      span.className = "highlight";
      span.innerText = content[i];
      content[i] = span.outerHTML;
      $(".content").innerHTML = content.join(" ");
      i++;
    }
    setInterval(highlightNextWord, 500);
  </script>
  ```

- [x] Đánh giá chung bài tập về nhà:

  Bài làm rất tốt \*

  Nên chú ý thêm vào việc tối ưu code dễ dàng scale, nâng cấp.

---
