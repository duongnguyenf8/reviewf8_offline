# Dương review bài tập về nhà buổi 33 - Lớp K1 FS

## [Lưu Anh Quân](https://anhquan2211.github.io/F8-OFFLINE/f8-offline-day33/index.html)

- [x] Bài 1

  Bài làm rất tốt \*

  **Usage feature:**

  Có thể trải nghiệm tốt các tính năng của bài.

  **Action feature:**

  Đã fix các lỗi liên quan đến trình duyệt edge

  **Hidden feature:**

  Trong trình duyệt edge, sau mỗi từ, câu đều được thêm dấu câu và viết hoa vào, vì vậy bài làm sẽ trở nên sai và không thực hiện được.

  - **Đã fix**

  **Special feature:**

  Bài làm rất tốt các tính năng.

  **Code format:**

  Format code rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Nguyen Xuan Tuan Anh](https://github.com/xuananh2212/js-fullstack/blob/main/day33/main.js)

- [x] Bài 1

  Bài làm chưa tốt

  **Usage feature:**

  Có thể trải nghiệm tốt các tính năng của bài.

  **Action feature:**

  Bài làm chưa tốt

  Chưa thể mở được các hành động như user mong muốn.

  **Hidden feature:**

  Trong trình duyệt edge, sau mỗi từ, câu đều được thêm dấu câu và viết hoa vào, vì vậy bài làm sẽ trở nên sai và không thực hiện được.

  **Special feature:**

  Tính năng bài làm chưa hoạt động tốt trên trình duyệt edge.

  Có báo lỗi trong console là `không thể nhận biết giọng nói này`

  **Code format:**

  Có thể lỗi sinh ra là do đoạn code này chưa đúng:

  ```javascript
  recognition.lang = 'vi-VI';
  // Thay vào đó, có thể sửa thành
  recognition.lang = 'vi-VN';
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt.

## [Duong Quoc Anh](https://github.com/QuocAnh-bit/F8_fullstack_006/blob/main/buoi_33/js/index.js)

- [x] Bài 1

  Bài làm chưa tốt

  **Usage feature:**

  Có thể trải nghiệm tốt các tính năng của bài.

  **Action feature:**

  Bài làm chưa tốt

  Chưa thể mở được các hành động như user mong muốn.

  **Hidden feature:**

  Trong trình duyệt edge, sau mỗi từ, câu đều được thêm dấu câu và viết hoa vào, vì vậy bài làm sẽ trở nên sai và không thực hiện được.

  **Special feature:**

  Tính năng bài làm chưa hoạt động tốt trên trình duyệt edge.

  **Code format:**

  Các đoạn code xử lý quá thủ công, các đoạn if/else và include rất không hợp lý:

  ```javascript
  handleText.includes('xem video') ||
    handleText.includes('mở video') ||
    handleText.includes('video');

  handleText.includes('nghe bài hát') ||
    handleText.includes('mở bài hát') ||
    handleText.includes('bài hát');

  handleText.includes('chỉ đường') ||
    handleText.includes('đường tới') ||
    handleText.includes('chỉ đường tới') ||
    handleText.includes('đi tới') ||
    handleText.includes('đi đến');
  ```

  Chưa xử lý text trước khi truyền vào `handleVoice()` khiến cho mỗi dòng phải xử lý thủ công, chưa xử lý case thêm dấu và tự động viết hoa của edge.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt.

## [Dương Hiệp](https://github.com/duonghiep416/duonghiep_f8_fullstack/blob/main/Day33/main.js)

- [x] Bài 1

  Bài làm rất tốt \*

  **Usage feature:**

  Có thể trải nghiệm tốt các tính năng của bài.

  **Action feature:**

  Đã fix các lỗi liên quan đến trình duyệt edge

  **Special feature:**

  Bài làm rất tốt các tính năng.

  **Code format:**

  Format code rất tốt, tuy nhiên các đoạn check includes hơi "cồng kềnh":

  ```javascript
  transcript.includes('chỉ đường ') ||
    transcript.includes('chỉ đường tới ') ||
    transcript.includes('đường tới ') ||
    transcript.includes('tới ');

  // includes("chỉ đường")

  transcript.includes('bài hát ') ||
    transcript.includes('mở bài hát ') ||
    transcript.includes('nghe bài hát ');

  // includes("bài hát")

  transcript.includes('video ') ||
    transcript.includes('mở video ') ||
    transcript.includes('xem video ');

  // includes("video")
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên cần chú ý code sao cho dễ hiểu hơn.

## [nguyen thi hong ha](https://github.com/ha752002/f8-fullstack-k2/blob/main/Ex_Javascript/day33/assets/js/main.js)

- [x] Bài 1

  Bài làm chưa tốt

  **Usage feature:**

  Có thể trải nghiệm tốt các tính năng của bài.

  **Action feature:**

  Bài làm chưa tốt

  Chưa thể mở được các hành động như user mong muốn.

  **Hidden feature:**

  Trong trình duyệt edge, sau mỗi từ, câu đều được thêm dấu câu và viết hoa vào, vì vậy bài làm sẽ trở nên sai và không thực hiện được.

  **Special feature:**

  Tính năng bài làm chưa hoạt động tốt trên trình duyệt edge.

  **Code format:**

  Các đoạn code xử lý quá thủ công, các đoạn if/else và include rất không hợp lý:

  ```javascript
  text.includes('chỉ đường') ||
    text.includes('tới') ||
    text.includes('đường tới');

  text.includes('bài hát') ||
    text.includes('mở bài hát') ||
    text.includes('nghe bài hát');

  text.includes('video') ||
    text.includes('mở video') ||
    text.includes('xem video');
  ```

  Chưa xử lý text trước khi truyền vào `handleVoice()` khiến cho mỗi dòng phải xử lý thủ công, chưa xử lý case thêm dấu và tự động viết hoa của edge.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt.

## [nguyen thi hong ha](https://github.com/ha752002/f8-fullstack-k2/blob/main/Ex_Javascript/day33/assets/js/main.js)

- [x] Bài 1

  Bài làm chưa tốt

  **Usage feature:**

  Có thể trải nghiệm tốt các tính năng của bài.

  **Action feature:**

  Bài làm chưa tốt

  Chưa thể mở được các hành động như user mong muốn.

  **Hidden feature:**

  Trong trình duyệt edge, sau mỗi từ, câu đều được thêm dấu câu và viết hoa vào, vì vậy bài làm sẽ trở nên sai và không thực hiện được.

  **Special feature:**

  Tính năng bài làm chưa hoạt động tốt trên trình duyệt edge.

  **Code format:**

  Các đoạn code xử lý quá thủ công, các đoạn if/else và include rất không hợp lý:

  ```javascript
  text.includes('chỉ đường') ||
    text.includes('tới') ||
    text.includes('đường tới');

  text.includes('bài hát') ||
    text.includes('mở bài hát') ||
    text.includes('nghe bài hát');

  text.includes('video') ||
    text.includes('mở video') ||
    text.includes('xem video');
  ```

  Chưa xử lý text trước khi truyền vào `handleVoice()` khiến cho mỗi dòng phải xử lý thủ công, chưa xử lý case thêm dấu và tự động viết hoa của edge.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt.

## [pham minh tuan](https://github.com/phamtuan162/phamtuan-nodejs-01/tree/main/Buoi33)

- [x] Bài 1

  Bài làm chưa tốt

  **Usage feature:**

  Có thể trải nghiệm tốt các tính năng của bài.

  **Action feature:**

  Bài làm chưa tốt

  Chưa thể mở được các hành động như user mong muốn.

  **Hidden feature:**

  Trong trình duyệt edge, sau mỗi từ, câu đều được thêm dấu câu và viết hoa vào, vì vậy bài làm sẽ trở nên sai và không thực hiện được.

  **Special feature:**

  Tính năng bài làm chưa hoạt động tốt trên trình duyệt edge.

  Có báo lỗi là: `không thể nhận diện được ngôn ngữ`

  **Code format:**

  Có thể lỗi sinh ra là do đoạn code này chưa đúng:

  ```javascript
  recognition.lang = 'vi-VI';
  // Thay vào đó, có thể sửa thành
  recognition.lang = 'vi-VN';
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt.

## [nguyen duy hieu](https://github.com/HieuBoss/F8-fullstack-k2/blob/main/javascript/lesson18/ex2/ex2.js)

- [x] Bài 1

  Bài làm chưa tốt

  **Usage feature:**

  Có thể trải nghiệm tốt các tính năng của bài.

  **Action feature:**

  Bài làm chưa tốt

  Chưa thể mở được các hành động như user mong muốn.

  **Hidden feature:**

  Trong trình duyệt edge, sau mỗi từ, câu đều được thêm dấu câu và viết hoa vào, vì vậy bài làm sẽ trở nên sai và không thực hiện được.

  **Special feature:**

  Tính năng bài làm chưa hoạt động tốt trên trình duyệt edge.

  **Code format:**

  Các đoạn code xử lý quá thủ công, các đoạn if/else và include rất không hợp lý, có một số đoạn code lặp lại rất nhiều:

  ```javascript
  message.includes('video') ||
    message.includes('mở video') ||
    message.includes('xem video');

  message.includes('bài hát') ||
    message.includes('mở bài hát') ||
    message.includes('nghe bài hát');

  message.includes('chỉ đường') ||
    message.includes('tới') ||
    message.includes('đường tới');

  const url = `.../${transcriptNew}`;
  window.open(url.trim());
  ```

  Chưa xử lý text trước khi truyền vào `results()` khiến cho mỗi dòng phải xử lý thủ công, chưa xử lý case thêm dấu và tự động viết hoa của edge.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt.

## [do hoai nam](https://oaihman25.github.io/btvn/day33/index.html)

- [x] Bài 1

  Bài làm chưa tốt

  **Usage feature:**

  Có thể trải nghiệm tốt các tính năng của bài.

  **Action feature:**

  Bài làm chưa tốt

  Chưa thể mở được các hành động như user mong muốn.

  **Hidden feature:**

  Trong trình duyệt edge, sau mỗi từ, câu đều được thêm dấu câu và viết hoa vào, vì vậy bài làm sẽ trở nên sai và không thực hiện được.

  **Special feature:**

  Tính năng bài làm chưa hoạt động tốt trên trình duyệt edge.

  **Code format:**

  Các đoạn code xử lý quá thủ công, các đoạn if/else và include rất không hợp lý, có một số đoạn code lặp lại rất nhiều:

  ```javascript
  transcript.includes('Chỉ đường') ||
    transcript.includes('Chỉ đường tới') ||
    transcript.includes('Tới') ||
    transcript.includes('Đường tới');

  transcript.includes('Bài hát') ||
    transcript.includes('Mở bài hát') ||
    transcript.includes('Bài hát');

  transcript.includes('Xem video') ||
    transcript.includes('Mở video') ||
    transcript.includes('Bài hát');

  window.open(`.../${searchContent}`);
  ```

  Chưa xử lý hết text trước khi so sánh khiến cho mỗi dòng phải xử lý thủ công, chưa xử lý case thêm dấu và tự động viết hoa của edge.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt.

## [le van trung](https://github.com/Trungdeptraii/Le_Van_Trung_Day33/blob/main/js/index.js)

- [x] Bài 1

  Bài làm chưa tốt

  **Usage feature:**

  Có thể trải nghiệm tốt các tính năng của bài.

  **Action feature:**

  Bài làm chưa tốt

  Chưa thể mở được các hành động như user mong muốn.

  **Hidden feature:**

  Trong trình duyệt edge, sau mỗi từ, câu đều được thêm dấu câu và viết hoa vào, vì vậy bài làm sẽ trở nên sai và không thực hiện được.

  **Special feature:**

  Tính năng bài làm chưa hoạt động tốt trên trình duyệt edge.

  **Code format:**

  code format rất tốt, tuy nhiên: 

  Vì đang xử lý so sánh `===` text khiến cho mỗi dòng phải xử lý thủ công, chưa xử lý case thêm dấu và tự động viết hoa của edge.

- [x] Đánh giá chung bài tập về nhà: Bài làm chưa tốt.
