# Dương review bài học viên K1 - Fullstack - Buổi 18

## [Nguyen Xuan Tuan Anh](https://github.com/xuananh2212/js_fullstack_k1/tree/main/day18)

- [x] [Bài 1](https://github.com/xuananh2212/js_fullstack_k1/tree/main/day18)

  Bài làm rất tốt.

  Thay vì cắt chuỗi thanh span và add style màu đen, đỏ thì nên thay thế 1 chuỗi bằng 1 chuỗi bọc span.highlight.

  Như vậy có thể dễ dàng sửa đổi style của highlight hơn.

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

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần chú ý về vấn đề phát triển sau này.

---

## [Luu Anh Quan](https://github.com/anhquan2211/F8-OFFLINE.git)

- [x] [Bài 1](https://github.com/anhquan2211/F8-OFFLINE.git)

  Bài làm rất tốt.

  Có thể gọi setInterval luôn không cần thiết phải gán vào một function rồi gọi function đó. Việc làm đó trong bài tập này là không cần thiết.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên nếu có thể, nên tối ưu lại.

---

## [Trung Le](https://github.com/Trungdeptraii/02-08-2023-Le-Van_Trung-Day18.git)

**Chưa có link github pages**

- [x] [Bài 1](https://github.com/Trungdeptraii/02-08-2023-Le-Van_Trung-Day18.git)

  Bài làm tốt

  Thay vì cắt chuỗi thanh span và add style màu initial, đỏ thì nên thay thế 1 chuỗi bằng 1 chuỗi bọc span.highlight.

  Như vậy có thể dễ dàng sửa đổi style của highlight hơn.

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

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần chú ý về vấn đề phát triển sau này.

---

## [Minh Quang](https://github.com/taminhquang13/F8_Fullstack/tree/main/BT18)

- [x] [Bài 1](https://github.com/taminhquang13/F8_Fullstack/tree/main/BT18)

  Bài làm rất tốt \*

  Thay vì cắt chuỗi đôi và nối span màu đỏ thì nên bằng span.highlight rồi style cho nó.

  Như vậy có thể dễ dàng sửa đổi style của highlight hơn.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần chú ý về vấn đề phát triển sau này.

---

## [nguyen hung anh](https://github.com/realguy010895/hunganh-f8-k1)

**Nên tách file js, css, html ra để dễ dàng sử dụng, sửa chữa hơn**

- [x] [Bài 1](https://github.com/realguy010895/hunganh-f8-k1)

  Bài làm rất tốt \*

  Thay vì cắt chuỗi thanh span và add style màu initial, đỏ thì nên thay thế 1 chuỗi bằng 1 chuỗi bọc span.highlight.

  Như vậy có thể dễ dàng sửa đổi style của highlight hơn.

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

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần chú ý về vấn đề phát triển sau này.

---

## [Tuấn Phạm](https://github.com/phamtuan162/phamtuan-nodejs-01/tree/main/Buoi18)

- [x] [Bài 1](https://github.com/phamtuan162/phamtuan-nodejs-01/tree/main/Buoi18)

  Bài làm rất tốt \*

  Thay vì cắt chuỗi thanh span và add style màu đỏ khi cần thì nên thay thế 1 chuỗi bằng 1 chuỗi bọc span.highlight.

  Như vậy có thể dễ dàng sửa đổi style của highlight hơn.

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

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần chú ý về vấn đề phát triển sau này.

---

## [Dương Hiệp](https://github.com/duonghiep416/duonghiep_f8_fullstack/blob/main/Day18/main.js)

- [x] [Bài 1](https://github.com/duonghiep416/duonghiep_f8_fullstack/blob/main/Day18/main.js)

  Bài làm rất tốt \*

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt

---

## [Dương Quốc Anh](https://github.com/QuocAnh-bit/F8_fullstack_006.git)

- [x] [Bài 1](https://github.com/QuocAnh-bit/F8_fullstack_006.git)

  Bài làm rất tốt \*

  Thay vì cắt chuỗi thanh span và add style màu đỏ khi cần thì nên thay thế 1 chuỗi bằng 1 chuỗi bọc span.highlight.

  Như vậy có thể dễ dàng sửa đổi style của highlight hơn.

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

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần chú ý về vấn đề phát triển sau này.
