# Usage

1: clone this repo: [github](https://github.com/duongnguyenf8/reviewf8_offline.git)

2: `npm i`

3: **READ, FOLLOW** rules, layout, STEPS.

4: After done writing, run `npm run push -- "RULES COMMIT"`

# Rules

**RULES review**

- Bài làm tốt : Đúng layout
- Bài làm tốt\* : Đúng layout và không có lỗi nghiêm trọng
- Bài làm rất tốt\* : Đúng layout, không có lỗi và chỉ có góp ý thêm

**RULES commit**

- ACTIONS: **add** hoặc **update**

- DAYS: **day(number)**

- CLASS: **k(number)-(class)**

Ví dụ:

- **`Add day1 k2-fullstack`**
- **`Update day3 k4-fullstack`**

# Layout

## [Name](LinkGithub.example)

    First && Sớm nhất *

- [x] [Bài X](https://github.com/...)

  - Trạng thái đánh giá [tốt, tốt*, rất tốt*]
  - Lỗi
    - Show lỗi
    - Đề xuất sửa
  - Góp ý
    - Nên...
    - Không nên...

- [x] [Bài X+1](https://github.com/...)

  - Trạng thái đánh giá [tốt, tốt*, rất tốt*]
  - Lỗi
    - Show lỗi
    - Đề xuất sửa
  - Góp ý
    - Nên...
    - Không nên...

- Đánh giá: Bài làm [tốt, rất tốt]

## [Name X](LinkGithub.example)

- [x] [Bài X](https://github.com/...)

  - Trạng thái đánh giá [tốt, tốt*, rất tốt*]
  - Lỗi
    - Show lỗi
    - Đề xuất sửa
  - Góp ý
    - Nên...
    - Không nên...

- [x] [Bài X+1](https://github.com/...)

  - Trạng thái đánh giá [tốt, tốt*, rất tốt*]
  - Lỗi
    - Show lỗi
    - Đề xuất sửa
  - Góp ý
    - Nên...
    - Không nên...

- Đánh giá: Bài làm [tốt, rất tốt]

\*\* Tổng kết:

# Steps

1. Dựng base với các case cần thiết theo sườn này:

   **Usage feature:**

   Tính năng mang tính trải nghiệm người dùng của bài.

   **Action feature:**

   (Tùy thuộc vào từng dự án, đây là tính năng liên quan đến hành động của người dùng)

   **Hidden feature:**

   (Tùy thuộc vào từng dự án, đây là tính năng ẩn mà nhiều người bỏ qua)

   **Special feature:**

   (Tùy thuộc từng dự án, đây là tính năng chính của bài)

   **Code format:**

   Nói về format code, phong cách code...

2. ví dụ:

- [x] Bài 1

  Bài làm tốt\*

  **Usage feature:**

  Khi load trang, có thể focus luôn vào `.content` để việc sử dụng thuận tiện hơn

  Nên tắt spellcheck của `#content` đi để đỡ bị gạch chân đỏ ở dưới. `spellcheck="false"`

  Khi bấm hoặc bật các action in nghiêng, in đậm, gạch chân... Nên hiển thị active để user biết mình đang được sử dụng.

  **New feature:**

  Khi bấm New, chưa reset màu về mặc định.

  **Paste feature:**

  Khi paste từ một nguồn ngoài vào, đang bị giữ lại định dạng background, color,...

  Có thể lắng nghe sự kiện paste, chặn nguồn mặc định và chỉ lấy text thuần để đưa vào:

  - Đề xuất sửa thành:

  ```js
  let divEditable = document.querySelector('#content');
  divEditable.addEventListener('paste', function (e) {
    e.preventDefault();
    let text = e.clipboardData.getData('text/plain');
    document.execCommand('insertHTML', false, text);
  });
  ```

  **PDF and TXT feature:**

  Khi xuất file PDF, đang bị dính định dạng border, box-shadow...

  Nên xử lý để lấy format của text, không lấy của cả div.

  **Code format:**

  Đoạn code này đang thừa, tính năng của nó không rõ ràng

  ```js
  const changeColorDropDownSelect = function (dropdownList) {
    if (dropdownList.classList.contains('dropdown--active')) {
      dropdownSelect.style.background = '#5f9ea0';
    } else {
      dropdownSelect.style.background = '#7fffd4';
    }
  };
  document.body.addEventListener('click', function () {
    dropdownList.classList.remove('dropdown--active');
    changeColorDropDownSelect(dropdownList);
  });
  dropdownSelect.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdownList.classList.toggle('dropdown--active');
    changeColorDropDownSelect(dropdownList);
  });
  ```

  Như ở trong code, sẽ hiểu là remove class rồi thay đổi style dựa theo class, vậy có thể sử dụng CSS để làm, như vậy HTML inline style sẽ không có, code sẽ đẹp hơn, đễ đọc hơn trong JS.

  Với 3 nút **somethingNotColor-option**, có thể query all và sử dụng forEach lặp, lấy chính class để làm command, như vậy nếu thêm một nút, chỉ việc thêm bên HTML.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên việc xử lý JS sẽ phải xử lý thêm nếu muốn scale dự án.

# Folder structure

```html
<pre>
  /Review
  <!-- Folder [0] -->
    /Course_Name_k1 
    <!-- Folder [1] -->
      /Day1
      <!-- Folder [2] -->
        /images
        <!-- Folder [3] -->
          - full_name-exercise1.png
          - full_name-exercise2.png
        <!-- Folder [3] End -->
        - index.html
        - README.md
      <!-- Folder [2] End -->
      /Day2
      <!-- Folder [2] -->
        /images
          <!-- Folder [3] End -->
          - full_name-exercise1.png
          - full_name-exercise2.png
          <!-- Folder [3] End -->
        - index.html
        - README.md
      <!-- Folder [2] End -->
      
    <!-- Folder [1] End -->

    /Course_Name_k2 
    <!-- Folder [1] -->
      /Day1
      <!-- Folder [2] -->
        /images
        <!-- Folder [3] -->
          - full_name-exercise1.png
          - full_name-exercise2.png
        <!-- Folder [3] End -->
        - index.html
        - README.md
      <!-- Folder [2] End -->
      /Day2
      <!-- Folder [2] -->
        /images
          <!-- Folder [3] End -->
          - full_name-exercise1.png
          - full_name-exercise2.png
          <!-- Folder [3] End -->
        - index.html
        - README.md
      <!-- Folder [2] End -->

    <!-- Folder [1] End -->

  <!-- Folder [0] End -->
</pre>
```

**Hello, i'am Duong**

- Xin chào, các đoạn mã python, js, css là viết nghịch chơi chơi nên các bạn đừng quan tâm nhiều nhé !
  - Mình không tối ưu, viết chạy được là được hihi
