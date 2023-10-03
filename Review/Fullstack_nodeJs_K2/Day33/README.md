# Dương review bài tập về nhà buổi 32 - Lớp K2

## [Thế Nguyễn Đại](https://github.com/daithehh04/fullstack/tree/main/day33)

- [x] Bài 1

  Bài làm rất tốt \*

  **Usage feature:**

  Có thể trải nghiệm tốt các tính năng của bài.

  **Special feature:**

  Bài làm rất tốt các tính năng.

  **Code format:**

  Phần code check include hơi rườm rà và dài dòng:

  ```javascript
  if (
    txt.includes('chỉ đường') ||
    txt.includes('chỉ đường tới') ||
    txt.includes('đường tới') ||
    txt.includes('tới')
  ) {
    const params = txt
      .replace('chỉ đường', '')
      .replace('chỉ đường tới', '')
      .replace('đường tới', '')
      .replace('tới', '')
      .trim();
    window.open(`https://www.google.com/maps/search/${params}`);
  } else if (
    txt.includes('bài hát') ||
    txt.includes('mở bài hát') ||
    txt.includes('nghe bài hát')
  ) {
    const params = txt
      .replace('bài hát', '')
      .replace('mở bài hát', '')
      .replace('nghe bài hát', '')
      .trim();
    window.open(`https://zingmp3.vn/tim-kiem/tat-ca?q=${params}`);
  } else if (
    txt.includes('video') ||
    txt.includes('mở video') ||
    txt.includes('xem video')
  ) {
    const params = txt
      .replace('video', '')
      .replace('mở video', '')
      .replace('xem video', '')
      .trim();
  }
  ```

  Nên xử lý chuỗi ở cùng một chỗ để dễ kiểm soát hơn:

  ```js
  const transcript = event.results[0][0].transcript.replace('.', '');
  // Trong handleVoice()
  const txt = text.toLowerCase().trim();
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt, tuy nhiên đoạn code check includes có thể tối giản hơn.

## [Đoàn Duy chinh](https://github.dev/DuyChinh/f8-fullstack-KS2/tree/main/Day-33-Voice-full)

- [x] Bài 1

  Bài làm rất tốt \*

  **Usage feature:**

  Có thể trải nghiệm tốt các tính năng của bài.

  **Action feature:**

  Đã fix các lỗi liên quan đến trình duyệt edge

  **Special feature:**

  Bài làm rất tốt các tính năng.

  **Code format:**

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt

## [Vũ đức tài](https://github.dev/Apeiron2/F8-fullstack-K2/tree/main/homework/day_33)

- [x] Bài 1

  Bài làm rất tốt \*

  **Usage feature:**

  Có thể trải nghiệm tốt các tính năng của bài.

  **Action feature:**

  Chưa fix các lỗi liên quan đến trình duyệt safari, firefox

  **Special feature:**

  Bài làm rất tốt các tính năng.

  **Code format:**

  Đoạn code này chỉ sử dụng webkit, vì vậy một số trình duyệt không sử dụng được

  ```js
  if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
  }
  ```

  Phần dòng 72-93

  ```js
  // Bộ từ khóa các loại tìm kiếm
  let types = {
    video: ['video', 'clip'],
    music: ['bài hát', 'mở bài hát', 'mở nhạc', 'nghe bài'],
    map: [
      'chỉ đường tới',
      'chỉ đường',
      'tới',
      'chỉ đường đến',
      'đến',
      'đường về',
      'về',
    ],
  };
  ```

  Các mảng data text có phần không cần thiết và dài dòng, có thể lược bỏ bớt để code dễ hiểu hơn.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, chưa fix các case trong trình duyệt khác nhau.

## [Bùi Quang Trưởng](https://github.dev/OkazakiTruong/BQTruong-F8-K2-Offline/tree/main/Day33)

- [x] Bài 1

  Bài làm rất tốt \*

  **Usage feature:**

  Có thể trải nghiệm tốt các tính năng của bài.

  **Action feature:**

  Đã fix các lỗi liên quan đến trình duyệt edge, safari, firefox

  **Special feature:**

  Bài làm rất tốt các tính năng.

  **Code format:**

  Phần case mở bài hát + tên chưa được, có thể do regex của `doingTask()`

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, chưa fix hết các case trong bài làm.

## [Pham tiến đạt](https://phamtiendat18.github.io/Fullstack-K2/Day_33/index.html)

- [x] Bài 1

  Bài làm rất tốt \*

  **Usage feature:**

  Có thể trải nghiệm tốt các tính năng của bài.

  **Action feature:**

  Chưa fix các lỗi liên quan đến trình duyệt edge, safari, firefox

  **Special feature:**

  Bài làm rất tốt các tính năng.

  **Code format:**

  Có thể vì lang vi-VI(Dòng 11) nên chưa thực hiện nói được

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, chưa fix hết các case trong bài làm.

## [Kiều Duy Tùng](https://github.dev/Stung16/ex_f8-fullstack/blob/master/Day33/main.js)

- [x] Bài 1

  Bài làm rất tốt \*

  **Usage feature:**

  Có thể trải nghiệm tốt các tính năng của bài.

  **Action feature:**

  Đã fix các lỗi liên quan đến trình duyệt edge tuy nhiên với safari, firefox thì chưa

  **Special feature:**

  Bài làm rất tốt các tính năng.

  **Code format:**

  Đoạn code này chỉ sử dụng webkit, vì vậy một số trình duyệt không sử dụng được

  ```js
  if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
  }
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt, chưa fix các case trong trình duyệt khác nhau.
