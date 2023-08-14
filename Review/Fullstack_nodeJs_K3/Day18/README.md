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
