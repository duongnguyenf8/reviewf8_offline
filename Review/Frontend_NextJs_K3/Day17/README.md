# Dương review bài tập về nhà lớp K3 - Frontend

## [Vũ Thành Khang](https://github.com/countduck4819/f8-frontend/tree/main/Day17)

**Chưa có github pages**

- [x] Bài 1

  Không thấy bài

---

## [Nguyễn Đức Hải](https://github.com/duchainguyen/F8-FE-K3/tree/main/day-17)

**Chưa có github pages**

- [x] Bài 1

  Thay vì sử dụng setTimeout và đệ quy lại, có thể sử dụng setInterval với mục đích giống nhau và code rõ ràng hơn.

  Thay vì sử dụng style inline cho thẻ span, có thể add class và style bằng css sẽ dễ dàng hơn.

  Bản chất của bài là cắt chuỗi thành 3 phần, phần cần thiết sẽ thêm `span.highlight` vào.

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
