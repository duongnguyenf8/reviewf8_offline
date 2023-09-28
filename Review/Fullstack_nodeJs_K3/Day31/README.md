# Dương review bài tập về nhà buổi 31 - Lớp K3

## [Phí Văn Đức](https://github.com/PhiVanDuc/Offline-F8-K3/tree/main/Day-31-JS)

- [x] Bài 1

  Bài làm rất tốt \*

  **Action feature**

  Sau khi đếm về 0, vẫn tiếp tục re-render

  **Hidden feature:**

  Bài làm có sử dụng `visibilitychange`, tuy nhiên khi sử dụng 2 tab khác nhau ở dạng chia đôi màn hình thì sự kiện `window.onfocus` sẽ giúp số ngừng đếm khi không focus vào tab đó.

  **Special feature:**

  Bài làm rất tốt tính năng chính của bài

  **Code format:**

  ```js
  window.addEventListener('load', () => {
    handleVisibilitychange();
  });
  document.addEventListener('visibilitychange', handleVisibilitychange);
  ```

  Ở phần code này, 2 đoạn code đều như nhau, không cần thiết phải viết khác biệt nhau tránh làm code trở nên rối hoặc khó hiểu.

- [x] Đánh giá chung bài tập về nhà: Bài làm rất tốt.

## [Nguyễn Quang Cường](https://github.com/cuonggold2408/Fullxinach_K3/tree/main/Day_31)

- [x] Bài 1

  Bài làm tốt

  **Special feature:**

  Chức năng chính của bài làm tốt

  Tuy nhiên đang ẩn btn dựa theo HTML với thuộc tính disabled, nếu inspect lên và xóa thuộc tính disabled thì vẫn có thể chuyển trang được.

  **Hidden feature:**

  Bài làm có sử dụng `visibilitychange`, tuy nhiên khi sử dụng 2 tab khác nhau ở dạng chia đôi màn hình thì sự kiện `window.onfocus` sẽ giúp số ngừng đếm khi không focus vào tab đó.

  **Code format:**

  ```js
  btnLink.addEventListener('click', function () {
    window.location.href = 'https://www.youtube.com/';
  });
  ```

  Ở phần code này, thay vì để ở ngoài, cho vào trong hàm `updateCountDown` để check nếu `countDown === 0` thì mới gán.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt Tuy nhiên thiếu case theo đề bài.

## [Vũ Văn Thống](https://github.com/pencilbsp/f8_offline/tree/main/BTVN/btvn_buoi_31)

- [x] Bài 1

  Bài làm tốt\*

  **Special feature:**

  Chức năng chính của bài làm tốt

  Tuy nhiên khi đợi quá thời gian hiển thị ở ngoài, lúc vào lại trang số sẽ đứng im

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt \*

## [Đỗ Văn Khoa](https://github.com/mrkhoadev/F8-Fullstack-K3/tree/main/Day31)

- [x] Bài 1

  Bài làm tốt\*

  **Action feature**

  Các số đang bị re-render quá nhiều.

  **Special feature:**

  Chức năng chính của bài làm tốt

  Tuy nhiên khi đợi quá thời gian hiển thị ở ngoài, lúc vào lại trang số sẽ đứng im

  **Code format:**

  Chưa rõ ý đồ của block code lớn nhất trong bài.

- [x] Đánh giá chung bài tập về nhà: Bài làm tốt \*
