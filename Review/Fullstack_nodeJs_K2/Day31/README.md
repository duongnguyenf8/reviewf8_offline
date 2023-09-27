# Nam review bài học viên lớp k2-fullstack

## [Đoàn Duy Chinh](https://github.com/DuyChinh/f8-fullstack-KS2/tree/main/Day-31)

- [x] Bài 1:

  Bài làm rất tốt \*

  **Usage feature:**

  Trải nghiệm người dùng khi sử dụng rất tốt

  **Action feature:**

  Khi user click vào button, có thể sử dụng `window.open` với thuộc tính `"_blank"` để user được bật một tab khác, như vậy sẽ dễ dàng giữ chân user quay lại trang hơn.

  **Hidden feature:**

  Bài làm có sử dụng visibilitychange, tuy nhiên khi sử dụng 2 tab khác nhau ở dạng chia đôi màn hình thì sự kiện window.onfocus sẽ giúp số ngừng đếm khi không focus vào tab đó.

  **Special feature:**

  Bài làm rất tốt tính năng chính của bài

  **Code format:**

  format code, phong cách code rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Tiến Đạt](http://phamtiendat18.github.io/Fullstack-K2)

- [x] Bài 1:

  Bài làm rất tốt \*

  **Usage feature:**

  Trải nghiệm người dùng khi sử dụng rất tốt

  **Action feature:**

  Khi user click vào button, có thể sử dụng `window.open` với thuộc tính `"_blank"` để user được bật một tab khác, như vậy sẽ dễ dàng giữ chân user quay lại trang hơn.

  **Hidden feature:**

  Bài làm có sử dụng visibilitychange, tuy nhiên khi sử dụng 2 tab khác nhau ở dạng chia đôi màn hình thì sự kiện window.onfocus sẽ giúp số ngừng đếm khi không focus vào tab đó.

  **Special feature:**

  Bài làm rất tốt tính năng chính của bài

  **Code format:**

  format code, phong cách code rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Vũ Đức Tài](https://github.com/Apeiron2/F8-fullstack-K2/tree/main/homework/day_31)

- [x] Bài 1:

  Bài làm rất tốt

  **Usage feature:**

  sử dụng một IIFE để tính ra frame của trang web ngay khi load trang, nếu như trong lúc load trang mà frame giảm do giật lag thì sẽ khiến số dếm đếm nhanh hơn nhiều lần.

  **Action feature:**

  Khi user click vào button, có thể sử dụng `window.open` với thuộc tính `"_blank"` để user được bật một tab khác, như vậy sẽ dễ dàng giữ chân user quay lại trang hơn.

  **Hidden feature:**

  Có thể sử dụng thêm event `visibilitychange` và `window.onfocus` để bắt thêm sự kiện user đang focus vào màn hình khác để dừng số đếm

  ```js
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      console.log('Tab không còn hiển thị');
    } else {
      console.log('Tab đang hiển thị');
    }
  });
  ```

  **Special feature:**

  Bài làm rất tốt tính năng chính của bài

  **Code format:**

  format code, phong cách code rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Bùi Quang Trưởng](https://okazakitruong.github.io/BQTruong-F8-K2-Offline/Day31/index.html)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Usage feature**

  Trải nghiệm người dùng rất tốt

  **Action feature**

  Khi click `getLink` nên dùng `window.open()` với parameter là `_blank` để mở 1 tab mới

  **Hidden feature**

  Có thể sử dụng thêm event visibilitychange và `window.onfocus` để bắt thêm sự kiện user đang focus vào màn hình khác để dừng số đếm. Có thể tham khảo cách sau:

  ```Javascript
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'hidden') {
            console.log('Tab không còn hiển thị');
        } else {
            console.log('Tab đang hiển thị');
        }
    });
  ```

  **Special feature**

  Bài làm rất tốt tính năng chính của bài

  **Code format**

  format code, phong cách code rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt

---

## [Thế Nguyễn Đại](https://github.com/daithehh04/fullstack/tree/main/day31)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Usage feature**

  Trải nghiệm người dùng rất tốt

  **Action feature**

  Làm chức năng click Get link open 1 new tab rất tốt

  **Hidden feature**

  Có thể sử dụng thêm event visibilitychange và window.onfocus để bắt thêm sự kiện user đang focus vào màn hình khác để dừng số đếm. Có thể tham khảo cách sau:

  ```Javascript
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'hidden') {
            console.log('Tab không còn hiển thị');
        } else {
            console.log('Tab đang hiển thị');
        }
    });
  ```

  **Special feature**

  Bài làm rất tốt tính năng chính của bài

  **Code format**

  Nên gọi hàm `handleCounter()` lần đầu trong event DOMContentLoaded. Để các dom load xong thì mới bắt đầu chạy. Có thể tham khảo như sau:

  ```Javascript
    document.addEventListener("DOMContentLoaded", () => {
        console.log("DOM Loaded");
        handleCounter()
    });
  ```

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt

---

## [Kiều Duy Tùng](https://github.com/Stung16/ex_f8-fullstack/tree/master/Day31)

- [x] Bài 1:

  Bài làm rất tốt\*

  **Usage feature**

  Trải nghiệm người dùng rất tốt

  **Action feature**

  Khi click `Get Link` nên dùng window.open() với parameter là `_blank` để mở 1 tab mới

  **Hidden feature**

  Có thể sử dụng thêm event visibilitychange và window.onfocus để bắt thêm sự kiện user đang focus vào màn hình khác để dừng số đếm. Có thể tham khảo cách sau:

  ```Javascript
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'hidden') {
            console.log('Tab không còn hiển thị');
        } else {
            console.log('Tab đang hiển thị');
        }
    });
  ```

  **Special feature**

  Bài làm rất tốt tính năng chính của bài

  **Code format**

  format code, phong cách code rất tốt

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt

---

## [Nguyên](https://nguyenjs6868.github.io/f8k2FullkBtvn/Day_31/index.html)

- [x] Bài 1:

  Bài làm không tốt, chức năng chính của bài là khi rời khỏi trang ngừng đếm số vẫn chưa hoàn thiện

- [x] Đánh giá chung bài tập về nhà: Bài làm không tốt

---
