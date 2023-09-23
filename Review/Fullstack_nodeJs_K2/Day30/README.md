# Dương review bài tập về nhà buổi 30 - Lớp K2

## [Tiến Đạt - K2](https://phamtiendat18.github.io/Fullstack-K2/Day_30/index.html)

- [x] Bài 1

  Bài làm tốt\*

  Khi bấm hoặc bật các action in nghiêng, in đậm, gạch chân... Nên hiển thị các button đã active để user biết mình đang được sử dụng.

  Khi bấm new, nên focus vào lại `.content` để user có thể sử dụng luôn.

  Khi bấm new, nên reset tên file trong `.file-name`.

  Chưa xuất được file PDF có nội dung, khi xuất ra trắng trang.

  Khi xuất file PDF, việc sử dụng xuất ảnh là không hợp lý với các trình đọc màn hình, hoặc muốn chỉnh sửa.

  Các đoạn code này thường được sử dụng rất nhiều(Khoảng 3 lần trong bài hiện tại), nên tách thành hàm để có thể dễ dàng sử dụng hơn:

  ```js
  word.innerText = 'Số từ: 0';
  char.innerText = 'Số ký tự: 0';
  ```

  - Đề xuất sửa thành:

  ```js
  function handleUpdateValue(
    wordCount = 0,
    charCount = 0,
    colorValue = 'black'
  ) {
    word.innerText = 'Số từ: ' + wordCount;
    char.innerText = 'Số ký tự: ' + charCount;
    inputColor.value = colorValue;
  }
  ```

  Thay vì đặt tên button chuyển theme là node, có thể sử dụng themeBtn để tường minh hơn, dễ hiểu hơn.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên việc xử lý JS chưa có tính scale, nếu cần mở rộng hoặc sửa đổi dự án sẽ rất mệt.

---

## [Đoàn Duy Chinh](https://duychinh.github.io/f8-fullstack-KS2/Day-30/index.html)

- [x] Bài 1

  Bài làm tốt\*

  Nên tắt spellcheck của `#content` đi để đỡ bị gạch chân đỏ ở dưới. `spellcheck="false"`

  Khi bấm New, chưa reset màu, định dạng về mặc định.

  Khi bấm tải PDF, hiện đang tải 1 lần 2 file `ten_file.pdf` và 1 file có tên **file.pdf**

  Không nên check các field select bằng innerText, vừa không đảm bảo an toàn, nếu phải sửa các text đó thì sẽ sửa hết mọi chỗ trong file JS, có thể sử dụng ID hoặc như ở trong bài có className đang được phân biệt rõ, có thể sử dụng.

  Do chưa reset về giá trị mặc định, bài làm chỉ đúng ở lần đầu, sau khi reset, các button được highlight nhưng không sử dụng được, và do chỉ add, remove class, lần thứ 2 sẽ bị ngược chức năng, khi button không được active thì mới sử dụng được tính năng.

  Ở đoạn code này:

  ```js
  if (
    btn.id === 'justifyFull' ||
    btn.id === 'justifyLeft' ||
    btn.id === 'justifyRight' ||
    btn.id === 'justifyCenter'
  ) {
    for (var i = 0; i < btnJustifys.length; i++) {
      btnJustifys[i].classList.remove('active');
    }
  }
  ```

  Thay vì phải xử lý thủ công từng trường hợp rồi lại xóa hết, có thể lặp 1 lần là xong:

  - Đề xuất sửa thành:

  ```js
  btnJustifys.forEach(function (btn) {
    btn.classList.remove('active');
  });
  ```

  Sai chính tả `btnJustifys` => `btnJustifyList`

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên việc self test vẫn chưa đủ các case, khiến cho bài làm chưa được tốt nếu sử dụng lâu dài.

---

## [Bùi Quang Trưởng](https://okazakitruong.github.io/BQTruong-F8-K2-Offline/Day30/ex01.html)

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

---

## [Vũ Đức Tài](https://okazakitruong.github.io/BQTruong-F8-K2-Offline/Day30/ex01.html)

- [x] Bài 1

  Bài làm tốt \*

  **Chưa có link github**

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

  Do chưa xử lý định dạng với paste, các dòng text sẽ bị tràn khỏi khung.

  **PDF and TXT feature:**

  Khi xuất file PDF, việc sử dụng xuất ảnh là không hợp lý với các trình đọc màn hình, hoặc muốn chỉnh sửa.

  **Code format:**

  Sai chính tả **botlBtn** => **boldBtn**

  Các phần button action nên sử dụng một vòng lặp chung với một dấu hiệu riêng

  Ví dụ:

  ```html
  <button class="action-btn" data-exec="bold"><b>B</b></button>
  <button class="action-btn" data-exec="underline"><u>i</u></button>
  <button class="action-btn" data-exec="italic"><i>i</i></button>
  ```

  Như vậy sẽ dễ lặp qua, nếu muốn sử dụng thêm các button mới chỉ cần thêm HTML.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, tuy nhiên việc xử lý JS sẽ phải xử lý thêm nếu muốn scale dự án.

---

## [Kiều Duy Tùng](https://github.com/Stung16/ex_f8-fullstack/tree/master/Day30)

- [x] Bài 1:

  Bài làm chưa tốt

  **New feature:**

  Khi bấm New, chưa reset màu về mặc định.

  Khi bấm New nên focus luôn vào ô nhập text

  Do chưa reset về giá trị mặc định, bài làm chỉ đúng ở lần đầu, sau khi reset, các button được active nhưng không sử dụng được, và do chỉ add, remove class, lần thứ 2 sẽ bị ngược chức năng, khi button không được active thì mới sử dụng được tính năng

  **Usage feature:**

  Dropdown menu click mở ra được nhưng không đóng được bằng cách bấm ra ngoài

  Khi paste từ một nguồn ngoài vào, đang bị giữ lại định dạng background, color,...

  Có thể lắng nghe sự kiện paste, chặn nguồn mặc định và chỉ lấy text thuần để đưa vào

  **PDF and TXT feature:**

  Không tải được file txt và pdf

  **Code format:**

  Format code chưa tốt, có các khoảng cách lớn trong src code, các dầu `=` khi gán không có khoảng cách

  Các dấu `{}` khi đóng, mở chưa đồng nhất về khoảng trắng

  Các phần code

  ```js
  document.querySelector('.index-char').innerText = 'some thing...';
  document.querySelector('.index-word').innerText = 'some thing...';
  ```

  Đang bị lặp lại rất nhiều, có thể tách thành 1 hàm để truyền tham số, như vậy sẽ dễ dàng sửa đổi hơn.

  Các phần button action nên sử dụng một vòng lặp chung với một dấu hiệu riêng

  Ví dụ:

  ```html
  <button class="action-btn" data-exec="bold"><b>B</b></button>
  <button class="action-btn" data-exec="underline"><u>i</u></button>
  <button class="action-btn" data-exec="italic"><i>i</i></button>
  ```

  Như vậy sẽ dễ lặp qua, nếu muốn sử dụng thêm các button mới chỉ cần thêm HTML.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt. Cần sửa lại lỗi click dropdown menu, thêm chức năng tải file txt, pdf và thêm các tính năng chưa có tại New file, format và tối ưu lại code sao cho dễ dàng đọc hiểu, scale dự án hơn.

---

## [Thế Nguyễn Đại](https://github.com/daithehh04/fullstack/tree/main/day30)

- [x] Bài 1:

  Bài làm tốt \*

  **New feature:**

  Khi bấm New, chưa reset màu về mặc định.

  Khi bấm New nên focus luôn vào ô nhập text

  Do chưa reset về giá trị mặc định, bài làm chỉ đúng ở lần đầu, sau khi reset, các button được active nhưng không sử dụng được, và do chỉ add, remove class, lần thứ 2 sẽ bị ngược chức năng, khi button không được active thì mới sử dụng được tính năng

  **Usage feature:**

  Số ký tự đếm không chính xác. Trường hợp nhập `Nguyễn Đại Thế`, lúc nhập ký tự `Đ` số ký tự đếm được tăng từ 6 lên 8 và nhập `T` số ký tự đếm được tăng từ 10 lên 12

  Chưa loại bỏ khoảng cách khi đếm số ký tự. Trường hợp ấn nhiều dấu cách rồi nhập từ thì số ký tự vẫn tính số dấu cách

  Nên để scroll trong form nhập nội dung thay vì scroll toàn trang khi nội dung nhập quá dài

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt. Cần sửa lại đếm số ký tự, số từ và các case lỗi khi new file

---
