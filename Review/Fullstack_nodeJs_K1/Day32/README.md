# Dương review bài tập về nhà buổi 32 - Lớp K1

## [Lưu Anh Quân](https://github.com/anhquan2211/F8-OFFLINE/tree/main/f8-offline-day32)

- [x] Bài 1

  **Usage feature:**

  Bài làm rất tốt \*

  Chỉ re-render đúng textNode liên quan

  **Special feature:**

  Bài làm tốt \*

  Có thể xây dựng một component gần như hoàn chỉnh

  **Hidden feature:**

  Tuy nhiên, nếu có nhiều biến count được hiển thị, chỉ biến count đầu tiên được cập nhật, các biến count khác không được cập nhật hay hiển thị số.

  Chỉ có thể tạo được counter, các components khác không thể được sử dụng hay render ra giá trị theo data

  **Code format:**

  Code rất tốt, có comment đầy đủ và tên biến hợp lý, tuy nhiên:

  ```js
  if (name === 'counter-app') {
    this.data = options.data();
    this.textNode = []; // Khai báo mảng textNode để lưu các textNode sử dụng this.data.count
    this.bindEventHandlers(shadow);
    this.render();
  }
  ```

  Vì đoạn code này, chỉ có thể sử dụng được để tạo counter.

  ```js
  if (countContent === undefined) {
    // lần đầu(Khó khăn)
    const shadow = this.shadowRoot;
    const countSpan = shadow.querySelector('h2');
    const countText = countSpan.textContent;
    const splitText = countText.split(/({{ count }})/);
    countSpan.innerHTML = '';
    splitText.forEach((text, i) => {
      if (i !== 1) countSpan.append(document.createTextNode(text));
      else {
        const textNode = document.createTextNode(this.data.count);
        countSpan.append(textNode);
        this.textNode = textNode;
      }
    });
  } else {
    this.textNode.textContent = countContent; // lần 2 trở đi
  }
  ```

  Có thể vì đoạn code này và các đoạn code liên quan, không thể cập nhật hay hiển thị nhiều count hoặc không thể lấy tên biến khác count được. **Cả đoạn title cũng không thể lấy tên khác**

  H2 đầu tiên phải là {{ count }} nếu không thì không thể hiển thị count được.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, đúng trong trường hợp này, tuy nhiên chưa thể scale hay tái sử dụng cho nhiều component khác. Có thể tham khảo bài chữa bài hoặc bài của [Duong](https://github.com/duongnguyenf8/code_fullstack-exercise32/blob/main/customElement.js)

## [Nguyen Xuan Tuan Anh](https://github.com/xuananh2212/js-fullstack/tree/main/day32)

- [x] Bài 1

  **Usage feature:**

  Bài làm rất tốt \*

  Chỉ re-render đúng textNode liên quan

  **Special feature:**

  Bài làm tốt \*

  Có thể xây dựng một component gần như hoàn chỉnh

  Có thể phát triển thêm để có thể sử dụng nhiều event, nhiều code cùng 1 lúc

  **Code format:**

  Code rất tốt, có comment đầy đủ và tên biến hợp lý, tuy nhiên vì đang sử dụng biến window, các component nếu trùng tên biến sẽ hoạt động không đúng, các phần hiển thị bị ghi đè sẽ thành undefined.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, đúng trong trường hợp này, tuy nhiên chưa thể scale hay tái sử dụng cho nhiều component khác. Có thể tham khảo bài chữa bài hoặc bài của [Duong](https://github.com/duongnguyenf8/code_fullstack-exercise32/blob/main/customElement.js)

## [Hồng Hà Nguyễn Thị](https://ha752002.github.io/f8-fullstack-k2/)

- [x] Bài 1

  **Usage feature:**

  Bài làm tốt

  Hiện đang re-render cả một element.

  **Special feature:**

  Bài làm chưa tốt

  Đang fix cứng quá nhiều code, component chưa được hoàn chỉnh.

  **Code format:**

  Các đoạn code đang được fix cứng trong điều kiện thuận lợi nhất, bài làm sẽ không đúng nếu sửa text, sửa tên component,...

  ```js
   updateCountDisplay() {
  const shadow = this.shadowRoot;
  var h1 = shadow.querySelector('h1');
  var h2 = shadow.querySelector('h2');
  h1.textContent = this.data.title;
  h2.textContent = `Đã đếm ${this.data.count} lần`;
  }
  ```

  ```js
  const shadow = this.shadowRoot;
  const buttons = shadow.querySelectorAll('button');
  ```

  ```js
  if (tagName === 'counter-app') {
    this.updateCountDisplay();
  }
  ```

  Cần hoàn thiện tốt hơn để bài làm có thể dùng được ở mọi tình huống.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa,chỉ đúng trong trường hợp này, tuy nhiên chưa thể scale hay tái sử dụng cho nhiều component khác. Có thể tham khảo bài chữa bài hoặc bài của [Duong](https://github.com/duongnguyenf8/code_fullstack-exercise32/blob/main/customElement.js)

## [Minh Quang](https://github.com/taminhquang13/F8_Fullstack/tree/main/BT32)

- [x] Bài 1

  **Usage feature:**

  Bài làm chưa tốt

  Hiện đang re-render tất cả element.

  **Special feature:**

  Bài làm chưa tốt

  Đang fix cứng quá nhiều code, component chưa được hoàn chỉnh.

  **Code format:**

  Các đoạn code đang được fix cứng trong điều kiện thuận lợi nhất, bài làm sẽ không đúng nếu sửa text, sửa tên component,...

  Cần hoàn thiện tốt hơn để bài làm có thể dùng được ở mọi tình huống.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt,chỉ đúng trong trường hợp này, tuy nhiên chưa thể scale hay tái sử dụng cho nhiều component khác. Có thể tham khảo bài chữa bài hoặc bài của [Duong](https://github.com/duongnguyenf8/code_fullstack-exercise32/blob/main/customElement.js)
