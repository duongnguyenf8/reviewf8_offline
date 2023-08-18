## [Đặng Khải](https://github.com/AlbertKhai/f8-fullstack-offline/tree/main/Day-18-)

- [x] Bài làm tốt \*

  Không cần trường hợp `!content.trim().includes(" ")`.

  đề xuất 1 cách khác.

  ```javascript
  let content = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente omnis aperiam quidem. Dignissimos voluptatum autem facere! Dolor quidem qui iusto laudantium asperiores molestias omnis, fugiat ratione deleniti molestiae id numquam?`;
  content = content.replaceAll(" ", "</span> <span>");
  content = `<span>${content}</span>`;
  console.log(content);
  var index = 0;
  setInterval(() => {
    var charCurrent = content.charAt(index);
    var charNext = content.charAt(index + 1);
    if (charCurrent === ">" && charNext !== " ") {
      var html =
        content.slice(0, index) + ' class="hightlight"' + content.slice(index);
      console.log(html);
      document.body.innerHTML = html;
    }
    index++;

    if (index === content.length) {
      console.log(content.length);
      console.log(index);
      index = 0;
    }
  }, 20);
  ```

---

- [x] Đánh giá chung bài tập về nhà: Bài rất tốt, Cần cẩn thận hơn khi nộp bài.

## [Mạnh Huy](https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_17)

- [x] Bài làm rất tốt \*

  Có thể tham khảo cách sau đây:

  ```html
  <style>
    .highlight {
      background-color: yellow;
      color: red;
    }
  </style>
  <p class="content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, amet.
  </p>
  <script>
    const $ = (tag) => document.querySelector(tag);
    const saveContent = $(".content").innerText.trim();
    let content = saveContent.split(" ");
    let i = 0;
    function resetContent() {
      $(".content").innerHTML = saveContent;
      i = 0;
      content = saveContent.split(" ");
    }
    function highlightNextWord() {
      if (i >= content.length) {
        resetContent();
      } else {
        for (let j = 0; j < i; j++) {
          content[j] = content[j]
            .replace('<span class="highlight">', "")
            .replace("</span>", "");
        }
        const span = document.createElement("span");
        span.className = "highlight";
        span.innerText = content[i];
        content[i] = span.outerHTML;
        $(".content").innerHTML = content.join(" ");
        i++;
      }
    }
    setInterval(highlightNextWord, 500);
  </script>
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

---

## [Hoang Van Thanh](https://github.com/YanShu92/F8-Fullstack-K4/tree/main/Day_17)

- [x] Bài làm rất tốt \*

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên nếu sử dụng kiến thức về String để giải quyết bài toán này sẽ củng cố kiến thức về String hơn.

---

## [Nguyễn Hưng Tuân](https://github.com/hungtuan/f8-fullstack-k4/blob/main/Day-18/js/main.js)

- [x] Bài làm rất tốt \*

  Có thể tham khảo cách sau đây:

  ```html
  <style>
    .highlight {
      background-color: yellow;
      color: red;
    }
  </style>
  <p class="content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, amet.
  </p>
  <script>
    const $ = (tag) => document.querySelector(tag);
    const saveContent = $(".content").innerText.trim();
    let content = saveContent.split(" ");
    let i = 0;
    function resetContent() {
      $(".content").innerHTML = saveContent;
      i = 0;
      content = saveContent.split(" ");
    }
    function highlightNextWord() {
      if (i >= content.length) {
        resetContent();
      } else {
        for (let j = 0; j < i; j++) {
          content[j] = content[j]
            .replace('<span class="highlight">', "")
            .replace("</span>", "");
        }
        const span = document.createElement("span");
        span.className = "highlight";
        span.innerText = content[i];
        content[i] = span.outerHTML;
        $(".content").innerHTML = content.join(" ");
        i++;
      }
    }
    setInterval(highlightNextWord, 500);
  </script>
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên nếu sử dụng kiến thức về String để giải quyết bài toán này sẽ củng cố kiến thức về String hơn.

---

## [Thái Duy Tiến](https://github.com/thaiduytien1611cunbeo/NopbaitapF8/tree/main/Day18)

- [x] Bài làm rất tốt \*.

  Tuy nhiên nên tách css ra một file khác sẽ hoàn chỉnh hơn.

  Có thể tham khảo cách sau đây:

  ```html
  <style>
    .highlight {
      background-color: yellow;
      color: red;
    }
  </style>
  <p class="content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, amet.
  </p>
  <script>
    const $ = (tag) => document.querySelector(tag);
    const saveContent = $(".content").innerText.trim();
    let content = saveContent.split(" ");
    let i = 0;
    function resetContent() {
      $(".content").innerHTML = saveContent;
      i = 0;
      content = saveContent.split(" ");
    }
    function highlightNextWord() {
      if (i >= content.length) {
        resetContent();
      } else {
        for (let j = 0; j < i; j++) {
          content[j] = content[j]
            .replace('<span class="highlight">', "")
            .replace("</span>", "");
        }
        const span = document.createElement("span");
        span.className = "highlight";
        span.innerText = content[i];
        content[i] = span.outerHTML;
        $(".content").innerHTML = content.join(" ");
        i++;
      }
    }
    setInterval(highlightNextWord, 500);
  </script>
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, đúng với yêu cầu của đề bài.

---

## [Trần Đức Công](https://github.com/TranCong312002/F8-fullstack-k4/tree/main/Bai_tap_buoi_18)

- [x] Bài làm rất tốt \*

  Có thể tham khảo cách sau đây:

  ```html
  <style>
    .highlight {
      background-color: yellow;
      color: red;
    }
  </style>
  <p class="content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, amet.
  </p>
  <script>
    const $ = (tag) => document.querySelector(tag);
    const saveContent = $(".content").innerText.trim();
    let content = saveContent.split(" ");
    let i = 0;
    function resetContent() {
      $(".content").innerHTML = saveContent;
      i = 0;
      content = saveContent.split(" ");
    }
    function highlightNextWord() {
      if (i >= content.length) {
        resetContent();
      } else {
        for (let j = 0; j < i; j++) {
          content[j] = content[j]
            .replace('<span class="highlight">', "")
            .replace("</span>", "");
        }
        const span = document.createElement("span");
        span.className = "highlight";
        span.innerText = content[i];
        content[i] = span.outerHTML;
        $(".content").innerHTML = content.join(" ");
        i++;
      }
    }
    setInterval(highlightNextWord, 500);
  </script>
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, đúng với yêu cầu của đề bài.

---

## [Huy Bui](https://github.com/Huy-Bui4869/f8_fullstack_k4/blob/main/Day_17/js/script.js)

- [x] Bài làm rất tốt \*

  Tuy nhiên nên tách css ra một file khác sẽ hoàn chỉnh hơn.

  Có thể tham khảo cách sau đây:

  ```html
  <style>
    .highlight {
      background-color: yellow;
      color: red;
    }
  </style>
  <p class="content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, amet.
  </p>
  <script>
    const $ = (tag) => document.querySelector(tag);
    const saveContent = $(".content").innerText.trim();
    let content = saveContent.split(" ");
    let i = 0;
    function resetContent() {
      $(".content").innerHTML = saveContent;
      i = 0;
      content = saveContent.split(" ");
    }
    function highlightNextWord() {
      if (i >= content.length) {
        resetContent();
      } else {
        for (let j = 0; j < i; j++) {
          content[j] = content[j]
            .replace('<span class="highlight">', "")
            .replace("</span>", "");
        }
        const span = document.createElement("span");
        span.className = "highlight";
        span.innerText = content[i];
        content[i] = span.outerHTML;
        $(".content").innerHTML = content.join(" ");
        i++;
      }
    }
    setInterval(highlightNextWord, 500);
  </script>
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, đúng với yêu cầu của đề bài.

---
