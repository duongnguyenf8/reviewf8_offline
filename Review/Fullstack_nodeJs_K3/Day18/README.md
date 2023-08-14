# Dương review bài tập về nhầ buổi 18 - Lớp K3

## [Đỗ Văn Khoa](https://github.com/mrkhoadev/F8-Fullstack-K3/blob/main/Day18/index.html)

- [x] Bài 1

  Nên tách phần xử lý JS, HTML, CSS ra thành các file khác nhau để dễ dàng xử lý.

  Thay vì sử dụng đệ quy với setTimeOut, có thể sử dụng setInterval.

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

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, có thể tối ưu hơn bằng cách tách các file hợp lý và không cần thiết phải sử dụng đệ quy.

## [Nguyễn Quang Cường](https://github.com/cuonggold2408/Fullxinach_K3/tree/main/Day_18)

- [x] Bài 1

  Bài làm rất tốt \*

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt

## [Vũ Thống](https://github.com/pencilbsp/f8_offline/tree/main/BTVN/btvn_buoi_18)

- [x] Bài 1

  Bài làm rất tốt \*

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt

## [Phí Văn Đức](https://github.com/PhiVanDuc/Offline-F8-K3/tree/main/Day-18-JS/Exercise-1)

- [x] Bài 1

  Bài làm chưa tốt.

  Không cần thiết phải tạo biến `var wordsLength = words.length;` vì việc sử dụng `words.length` đã đủ ngắn gọn.

  Sau khi chạy hết, chưa được highlight lại.

  Có thể vì chưa reset currentRedWord.

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

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt, chưa đủ chức năng và yêu cầu đề bài.

## [NTiến Đạt](https://github.com/Ntiendat-2k3/F8-js-BTVN/tree/main/BTVN/Buoi3)

- [x] Bài 1

  Bài làm tốt \*

  Thay vì add style vào thẻ span, có thể sử dụng className để việc style cho highlight dễ dàng hơn.

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

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, chỉ cần chú ý thêm về việc phát triển, maintain sau này.

## [Lê Quốc Khánh](https://github.com/lekhanhdhpt/F8-Fullstack-K3/blob/main/JS-Day-18/js/homework.js)

- [x] Bài 1

  Bài làm tốt \*

  Thay vì việc tạo một function và gọi nó khi `onload` thì có thể viết toàn bộ bên ngoài và lặp lại function `changeColor` bằng setInterval vì trong trường hợp này là không cần thiết.

  Thay vì add style vào thẻ span, có thể sử dụng className để việc style cho highlight dễ dàng hơn.

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

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, chỉ cần chú ý thêm về việc phát triển, maintain sau này.

## [Hữu Hưng](https://github.com/lekhanhdhpt/F8-Fullstack-K3/blob/main/JS-Day-18/js/homework.js)

- [x] Bài 1

  Bài làm tốt \*

  Mốt số từ sau khi chạy bị dính khoảng cách vào nhau, khiến nó không còn được coi là 2 từ mà bị ghép thành 1.

  Có thể do logic join cập nhật lại html mới khi đã thêm thẻ span.

  ```js
  contentElement.innerHTML = newWords.join(" ");
  currentsIndex = (currentsIndex + 1) % words.length;
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên cần self-test, tự kiểm tra kỹ trước khi hoàn thiện và nộp bài tập.

## [Nguyễn Đức](https://github.com/Nguyenduc2108/f8-fullstack-k3/blob/main/Homework_session_18/script.js)

- [x] Bài 1

  Bài làm rất tốt \*

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt \*
